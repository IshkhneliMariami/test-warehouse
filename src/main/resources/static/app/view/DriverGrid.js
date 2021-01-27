Ext.define('MI.view.DriverGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'DriverGrid',

    controller: {
        xclass: 'MI.view.DriverController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },
    bind: '{drivers}',
    tbar: [{
        text: 'მძღოლის დამატება',
        handler: 'addDriver',
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
        text: 'პირადი ნომერი',
        flex: 2,
        dataIndex: 'idNumber'

    }, {
        xtype: 'actioncolumn',
        width: 150,
        menuDisabled: true,
        sortable: false,
        text: 'წაშლა/რედაქტირება',
        items: [{
            iconCls: 'fa fa-trash',
            handler: 'deleteDriver',
            tooltip: 'წაშლა'
        },{
            iconCls: 'fa fa-edit',
            handler: 'editDriver',
            tooltip: 'რედაქტირება'
        }]
    }]
});
