Ext.define('MI.view.StoreGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'StoreGrid',

    controller: {
        xclass: 'MI.view.MainController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },
    bind: '{store}',
    tbar: [ {
        xtype: 'textfield',
        labelAlign: 'right',
        name: 'name',
        reference: 'searchField',
    }, {

        handler: 'search',
        text: 'search',
        scale: 'medium',
        margin: '0 0 0 25',

    }],


    columns: [{
        text: 'ID',
        dataIndex: 'id'

    }, {
        text: 'მოდელი',
        flex: 2,
        dataIndex: 'model'

    }, {
        text: 'ბრენდი',
        flex: 2,
        dataIndex: 'brand'

    }, {
        text: 'საწყობი',
        dataIndex: 'store'

    }, {
        text: 'მომწოდებელი',
        dataIndex: 'supplier'

    }, {
        text: 'რაოდენობა',
        flex: 1,
        dataIndex: 'quantity'

    }, {
        text: 'ფასი',
        flex: 1,
        dataIndex: 'price'

    }, {
        xtype: 'actioncolumn',
        width: 150,
        menuDisabled: true,
        sortable: false,
        text: 'წაშლა',
        items: [{
            iconCls: 'fa fa-trash',
            handler: 'deleteItem',
            tooltip: 'წაშლა'
        }]
    }]
});
