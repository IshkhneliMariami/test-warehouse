Ext.define('MI.view.AddSupplierWindow', {
    extend: 'Ext.window.Window',
    title: 'მომწოდებლის დამატება',
    modal: true,
    layout: 'fit',
    width: 300,
    height: 150,
    config: {
        post: null
    },
    controller: {
        xclass: 'MI.view.SupplierController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },

    items: [{
        xtype: 'form',
        reference: 'supplierForm',
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
            handler: 'saveSupplier'
        }],

    }]
})