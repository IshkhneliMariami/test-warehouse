Ext.define('MI.model.WarehouseModel', {
    extend: 'Ext.data.Model',
    fields: ['id','name'],
    proxy: {
        url: '/warehouse',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})