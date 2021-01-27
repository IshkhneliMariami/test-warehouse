Ext.define('MI.view.Main', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    controller: {
        xclass: 'MI.view.MainController',
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },

    items: [{
        xclass: 'MI.view.StoreForm',
        reference: 'form',
    }, {
        xclass: 'MI.view.ItemGrid',
        flex: 1,
    },{

        xclass: 'MI.view.StoreGrid',
        flex: 1
    }, {
        xtype: 'container',
        layout: 'hbox',
        flex: 1,
        items: [{

            xclass: 'MI.view.SupplierGrid',
            flex: 1
        }, {
            xclass: 'MI.view.WarehouseGrid',
            flex: 1
        },{
            xclass: 'MI.view.TransportGrid',
            flex: 1
        },{
            xclass: 'MI.view.DriverGrid',
            flex: 1
        }]
    }]


});
