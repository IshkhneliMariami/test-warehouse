Ext.define('MI.view.TransportGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'TransportGrid',

    controller: {
        xclass: 'MI.view.TransportController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },
    bind: '{transports}',
    tbar: [{
        text: 'ტრანსპორტის დამატება',
        handler: 'addTransport',
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
            handler: 'deleteTransport',
            tooltip: 'წაშლა'
        },{
            iconCls: 'fa fa-edit',
            handler: 'editTransport',
            tooltip: 'რედაქტირება'
        }]
    }]
});
