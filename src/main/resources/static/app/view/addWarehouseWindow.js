Ext.define('MI.view.AddWarehouseWindow', {
    extend: 'Ext.window.Window',
    title: 'საწყობის დამატება',
    modal: true,
    layout: 'fit',
    width: 300,
    height: 150,
    config: {
        post: null
    },
    controller: {
        xclass: 'MI.view.WarehouseController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },

    items: [{
        xtype: 'form',
        reference: 'warehouseForm',
        bodyPadding: 10,
        fieldDefaults: {
            anchor: '100%',
            allowBlank: false
        },

        items: [

            {
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'სახელი'
            }],
        buttons: [{
            text: 'შენახვა',
            handler: 'saveWarehouse'
        }],

    }]
})