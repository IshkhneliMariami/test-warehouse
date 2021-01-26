Ext.define('MI.model.StoreModel', {
    extend: 'Ext.data.Model',
    fields: ['id','store', 'supplier','quantity', 'price','model','brand'],
    proxy: {
        url: '/store',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})