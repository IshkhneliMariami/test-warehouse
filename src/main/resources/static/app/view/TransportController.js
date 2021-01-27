Ext.define('MI.view.TransportController', {
    extend: 'Ext.app.ViewController',

    addTransport: function () {
        Ext.create('MI.view.AddTransportWindow', {
            autoShow: true

        })
    },
    saveTransport: function () {
        const me = this;
        const transportForm = me.lookup('transportForm');
        const values = transportForm.getForm().getValues();
        const store = me.getViewModel().getStore('transports');
        const item = Ext.create('MI.model.TransportModel', values);
        store.add(item);
        me.getView().close();

    },
    deleteTransport: function (grid, rowIndex, colIndex) {
        const me = this;
        Ext.Msg.confirm('წაშლა', 'ნამდვილად გსურთ ჩანაწერის წაშლა?', function (ans) {
            if (ans === 'yes') {
                const store = me.getViewModel().getStore('transports');
                store.removeAt(rowIndex)
            }
        }, this)
    },
});