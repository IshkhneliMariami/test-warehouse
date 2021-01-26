Ext.define('MI.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['MI.model.StoreModel'],


    stores: {
        store: {
            model: 'MI.model.StoreModel',
            autoLoad: true,
            autoSync: true,
        },
        suppliers: {
            fields: ['id', 'name'],
            data: [{id: 1, name: 'მომწოდებელი1'}, {id: 2, name: 'მომწოდებელი2'}, {id: 3, name: 'მომწოდებელი3'}, {
                id: 4,
                name: 'მომწოდებელი4'
            }],
        }, warehouses: {
            fields: ['id', 'name'],
            data: [{id: 1, name: 'საწყობი1'}, {id: 2, name: 'საწყობი2'}, {id: 3, name: 'საწყობი3'}, {
                id: 4,
                name: 'საწყობი4'
            }],
        },

    },
    data: {
        price: null,
    }
})