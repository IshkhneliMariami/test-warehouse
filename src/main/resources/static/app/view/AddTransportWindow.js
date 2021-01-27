Ext.define('MI.view.AddTransportWindow', {
    extend: 'Ext.window.Window',
    title: 'ტრანსპორტის დამატება',
    modal: true,
    layout: 'fit',
    width: 300,
    height: 150,
    config: {
        post: null
    },
    controller: {
        xclass: 'MI.view.TransportController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },

    items: [{
        xtype: 'form',
        reference: 'transportForm',
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
            handler: 'saveTransport'
        }],

    }]
})