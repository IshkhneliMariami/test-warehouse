Ext.define('MI.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['MI.model.StoreModel', 'MI.model.SupplierModel', 'MI.model.WarehouseModel', 'MI.model.TransportModel', 'MI.model.DriverModel','MI.model.ItemModel'],


    stores: {
        store: {
            model: 'MI.model.StoreModel',
            autoLoad: true,
            autoSync: true,
        },
        suppliers: {
            model: 'MI.model.SupplierModel',
            autoLoad: true,
            autoSync: true,
        },
        warehouses: {
            model: 'MI.model.WarehouseModel',
            autoLoad: true,
            autoSync: true,
        },
        transports: {
            model: 'MI.model.TransportModel',
            autoLoad: true,
            autoSync: true,
        },
        drivers: {
            model: 'MI.model.DriverModel',
            autoLoad: true,
            autoSync: true,
        },
        items: {
            model: 'MI.model.ItemModel',
            autoLoad: true,
            autoSync: true,
        }

        // suppliers: {
        //     fields: ['id', 'name'],
        //     data: [{id: 1, name: 'მომწოდებელი1'}, {id: 2, name: 'მომწოდებელი2'}, {id: 3, name: 'მომწოდებელი3'}, {
        //         id: 4,
        //         name: 'მომწოდებელი4'
        //     }],
        // }, warehouses: {
        //     fields: ['id', 'name'],
        //     data: [{id: 1, name: 'საწყობი1'}, {id: 2, name: 'საწყობი2'}, {id: 3, name: 'საწყობი3'}, {
        //         id: 4,
        //         name: 'საწყობი4'
        //     }],
        // },

    },
    data: {
        price: null,
    }
})