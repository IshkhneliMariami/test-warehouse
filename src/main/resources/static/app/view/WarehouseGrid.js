Ext.define('MI.view.WarehouseGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'WarehouseGrid',

    controller: {
        xclass: 'MI.view.WarehouseController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },
    bind: '{warehouses}',
    tbar: [{
        text: 'საწყობის დამატება',
        handler: 'addWarehouse',
        scale: 'medium'
    }],


    columns: [{
        text: 'ID',
        dataIndex: 'id'

    }, {
        text: 'სახელი',
        flex: 2,
        dataIndex: 'name'

    }, {
        xtype: 'actioncolumn',
        width: 150,
        menuDisabled: true,
        sortable: false,
        text: 'წაშლა/რედაქტირება',
        items: [{
            iconCls: 'fa fa-trash',
            handler: 'deleteWarehouse',
            tooltip: 'წაშლა'
        },{
            iconCls: 'fa fa-edit',
            handler: 'editWarehouse',
            tooltip: 'რედაქტირება'
        }]
    }]
});
