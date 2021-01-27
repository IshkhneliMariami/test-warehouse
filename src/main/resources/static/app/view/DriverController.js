Ext.define('MI.view.DriverController', {
    extend: 'Ext.app.ViewController',
    addDriver: function () {
        Ext.create('MI.view.AddDriverWindow', {
            autoShow: true

        })
    },
    saveDriver: function () {
        const me = this;
        const driverForm = me.lookup('driverForm');
        const values = driverForm.getForm().getValues();
        const store = me.getViewModel().getStore('drivers');
        const item = Ext.create('MI.model.DriverModel', values);
        store.add(item);
        me.getView().close();

    },
    deleteDriver: function (grid, rowIndex, colIndex) {
        const me = this;
        Ext.Msg.confirm('წაშლა', 'ნამდვილად გსურთ ჩანაწერის წაშლა?', function (ans) {
            if (ans === 'yes') {
                const store = me.getViewModel().getStore('drivers');
                store.removeAt(rowIndex)
            }
        }, this)
    },
});