Ext.define('MI.view.StoreForm', {
    extend: 'Ext.form.Panel',
    border: false,
    bodyPadding: 20,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    fieldDefaults: {
        anchor: '100%',
        labelAlign: 'top',
    },
    items: [{
        xtype: 'container',
        layout: 'hbox',
        defaultType: 'fieldset',
        defaults: {
            border: false,
            flex: 1
        },
        items: [{
            items: [{
                xtype: 'textfield',
                reference: 'brand',
                name: 'brand',
                fieldLabel: 'ბრენდი',

            }, {
                xtype: 'textfield',
                reference: 'model',
                name: 'model',
                fieldLabel: 'მოდელი',

            }]
        }, {
            items: [{
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

            }]
        }, {
            items: [{
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
                renderer: 'warehouseNameRenderer',
                bind: {
                    store: '{warehouses}'
                }
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
                renderer:'supplierNameRenderer',
                bind: {
                    store: '{suppliers}'
                }

            },]
        }],
    }],
    buttons: [{
        text: 'გასუფთავება',
        handler: 'reset',
        scale: 'medium'
    }, {
        text: 'შენახვა',
        handler: 'save',
        scale: 'medium'
    }]
})
