Ext.define('MI.view.SupplierController', {
    extend: 'Ext.app.ViewController',
    addSupplier: function () {
        Ext.create('MI.view.AddSupplierWindow', {
            autoShow: true

        })
    },
    saveSupplier: function () {
        const me = this;
        const supplierForm = me.lookup('supplierForm');
        const values = supplierForm.getForm().getValues();
        const store = me.getViewModel().getStore('suppliers');
        const item = Ext.create('MI.model.SupplierModel', values);
        store.add(item);
        me.getView().close();

    },
    deleteSupplier: function (grid, rowIndex, colIndex) {
        const me = this;
        Ext.Msg.confirm('წაშლა', 'ნამდვილად გსურთ ჩანაწერის წაშლა?', function (ans) {
            if (ans === 'yes') {
                const store = me.getViewModel().getStore('suppliers');
                store.removeAt(rowIndex)
            }
        }, this)
    },
});