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
        xclass: 'MI.view.ItemController'
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
                xtype: 'combo',
                fieldLabel: 'მძღოლი',
                reference: 'driver',
                name: 'driver',
                emptyText: 'მძღოლი',
                typeAhead: true,
                queryMode: 'local',
                forceSelection: true,
                valueField: 'id',
                displayField: 'name',
                bind: {
                    store: '{drivers}'
                }
            }, {
                xtype: 'combo',
                fieldLabel: 'ტრანსპორტი',
                reference: 'transport',
                name: 'transport',
                emptyText: 'ტრანსპორტი',
                typeAhead: true,
                queryMode: 'local',
                forceSelection: true,
                valueField: 'id',
                displayField: 'name',
                bind: {
                    store: '{transports}'
                }
            }, {
                xtype: 'numberfield',
                reference: 'quantity',
                name: 'quantity',
                allowBlank: false,
                fieldLabel: 'რაოდენობა',

            }],
        buttons: [{
            text: 'შენახვა',
            handler: 'saveItem'
        }],

    }]
})