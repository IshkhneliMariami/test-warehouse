Ext.define('MI.view.AddItemWindow', {
    extend: 'Ext.window.Window',
    title: 'დამატება',
    modal: true,
    layout: 'fit',
    width: 400,
    height: 300,
    config: {
        post: null
    },
    controller: {
        xclass: 'MI.view.MainController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },

    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            anchor: '100%',
            allowBlank: false
        },

        items: [

            {
                xtype: 'textfield',
                name: 'brand',
                fieldLabel: 'ბრენდი'
            },{
                xtype: 'combo',
                fieldLabel: 'საწყობი',
                reference: 'store',
                name: 'store',
                emptyText: 'საწყობი',
                typeAhead: true,
                queryMode: 'local',
                forceSelection: true,
                valueField: 'id',
                displayField: 'name',
            },{
                xtype: 'combo',
                fieldLabel: 'მომწოდებელი',
                reference: 'supplier',
                name: 'supplier',
                emptyText: 'მომწოდებელი',
                typeAhead: true,
                queryMode: 'local',
                forceSelection: true,
                valueField: 'id',
                displayField: 'name',
            }, {
                xtype: 'textfield',
                name: 'model',
                fieldLabel: 'მოდელი'

            }, {
                xtype: 'numberfield',
                reference: 'quantity',
                name: 'quantity',
                allowBlank: false,
                fieldLabel: 'რაოდენობა',

            }, {
                xtype: 'numberfield',
                reference: 'price',
                name: 'price',
                allowBlank: false,
                fieldLabel: 'ფასი',

            }],
        buttons: [{
            text: 'შენახვა',
            handler: 'saveItem'
        }],

    }]
})