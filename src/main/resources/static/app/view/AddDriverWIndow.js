Ext.define('MI.view.AddDriverWindow', {
    extend: 'Ext.window.Window',
    title: 'მძღოლის დამატება',
    modal: true,
    layout: 'fit',
    width: 300,
    height: 150,
    config: {
        post: null
    },
    controller: {
        xclass: 'MI.view.DriverController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },

    items: [{
        xtype: 'form',
        reference: 'driverForm',
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
            },  {
                xtype: 'textfield',
                name: 'idNumber',
                fieldLabel: 'პირადი ნომერი'
            }],
        buttons: [{
            text: 'შენახვა',
            handler: 'saveDriver'
        }],

    }]
})