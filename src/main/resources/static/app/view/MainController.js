Ext.define('MI.view.MainController', {
    extend: 'Ext.app.ViewController',
    //
    // addItem: function () {
    //     Ext.create('MI.view.AddItemWindow', {
    //         autoShow: true
    //
    //     })
    // },
    //
    // saveItem: function () {
    //     const me = this;
    //     const form = me.lookup('form');
    //     const values = form.getForm().getValues();
    //     const store = me.getViewModel().getStore('store');
    //     const item = Ext.create('MI.model.StoreModel', values);
    //     values.price = Number(values.price) * Number(values.quantity);
    //     console.log(values);
    //     this.getViewModel().set('price', values.price);
    //     store.add(item);
    //     me.getView().close();
    //
    // },

    deleteItem: function (grid, rowIndex, colIndex) {
        const me = this;
        Ext.Msg.confirm('წაშლა', 'ნამდვილად გსურთ ჩანაწერის წაშლა?', function (ans) {
            if (ans === 'yes') {
                const store = me.getViewModel().getStore('store');
                store.removeAt(rowIndex)
            }
        }, this)
    },
    save: function () {
        const form = this.lookup('form');
        if (!form.isValid()) {
            Ext.Msg.alert('შეცდომა', 'ფორმა არ არის ვალიდური');
        } else {
            const values = form.getForm().getValues();
            const store = this.getViewModel().getStore('store');
            values.price = Number(values.price) * Number(values.quantity);
            console.log(values);
            this.getViewModel().set('price', values.price);
            const newItem = Ext.create('MI.model.StoreModel', values);
            // store.removeAll();
            store.sync();
            form.reset();
            store.add(newItem);

        }
    },

    reset: function () {
        const form = this.lookup('form');
        form.getForm().reset();
    },

    search: function () {
        const store = this.getViewModel().getStore('store');
        store.load({
            params: this.lookup('searchField').getValues(),
        })
    },
    supplierNameRenderer: function (id) {
        const supplier = this.getViewModel().getStore('suppliers').getById(id);
        return supplier.get('name');
    },
    warehouseNameRenderer: function (id) {
        const warehouse = this.getViewModel().getStore('warehouses').getById(id);
        return warehouse.get('name');
    },

});