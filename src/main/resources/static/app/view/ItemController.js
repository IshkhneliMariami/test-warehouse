Ext.define('MI.view.ItemController', {
    extend: 'Ext.app.ViewController',

    addItem: function () {
        Ext.create('MI.view.AddItemWindow', {
            autoShow: true

        })
    },

    saveItem: function () {
        const me = this;
        const form = me.lookup('form');
        const values = form.getForm().getValues();
        const store = me.getViewModel().getStore('items');
        const item = Ext.create('MI.model.ItemModel', values);
        store.add(item);
        me.getView().close();

    },
});
