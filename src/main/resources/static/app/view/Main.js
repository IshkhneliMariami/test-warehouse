Ext.define('MI.view.Main', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    controller: {
        xclass: 'MI.view.MainController',
    },
    viewModel:{
        xclass:'MI.view.MainViewModel'
    },

    items: [{
        xclass: 'MI.view.StoreForm',
        reference: 'form',
    },{
        xclass: 'MI.view.StoreGrid',
        flex: 1
    }]


});
