Ext.define('MI.view.ItemGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'ItemGrid',

    controller: {
        xclass: 'MI.view.ItemController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },
    bind: '{items}',
    tbar: [{
        text: 'დამატება',
        handler: 'addItem',
        scale: 'medium'
    }],


    columns: [{
        text: 'ID',
        dataIndex: 'id'

    }, {
        text: 'მძღოლი',
        flex: 1,
        dataIndex: 'driver'

    },  {
        text: 'რაოდენობა',
        flex: 1,
        dataIndex: 'quantity'

    }, {
        text: 'ტრანსპორტი',
        flex: 1,
        dataIndex: 'transport'

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
        }]
    }]
});
