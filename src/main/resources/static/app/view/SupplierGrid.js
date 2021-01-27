Ext.define('MI.view.SupplierGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'SupplierGrid',

    controller: {
        xclass: 'MI.view.SupplierController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },
    bind: '{suppliers}',
    tbar: [{
        text: 'მომწოდებლის დამატება',
        handler: 'addSupplier',
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
            handler: 'deleteSupplier',
            tooltip: 'წაშლა'
        },{
            iconCls: 'fa fa-edit',
            handler: 'editSupplier',
            tooltip: 'რედაქტირება'
        }]
    }]
});
