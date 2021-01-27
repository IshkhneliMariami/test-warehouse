Ext.define('MI.model.SupplierModel', {
    extend: 'Ext.data.Model',
    fields: ['id','name'],
    proxy: {
        url: '/supplier',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})