Ext.define('MI.view.WarehouseController', {
    extend: 'Ext.app.ViewController',

    addWarehouse: function () {
        Ext.create('MI.view.AddWarehouseWindow', {
            autoShow: true

        })
    },
    saveWarehouse: function () {
        const me = this;
        const warehouseForm = me.lookup('warehouseForm');
        const values = warehouseForm.getForm().getValues();
        const store = me.getViewModel().getStore('warehouses');
        const item = Ext.create('MI.model.WarehouseModel', values);
        store.add(item);
        me.getView().close();

    },
    deleteWarehouse: function (grid, rowIndex, colIndex) {
        const me = this;
        Ext.Msg.confirm('წაშლა', 'ნამდვილად გსურთ ჩანაწერის წაშლა?', function (ans) {
            if (ans === 'yes') {
                const store = me.getViewModel().getStore('warehouses');
                store.removeAt(rowIndex)
            }
        }, this)
    },
});