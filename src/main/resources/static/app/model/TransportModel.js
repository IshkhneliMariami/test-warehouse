Ext.define('MI.model.TransportModel', {
    extend: 'Ext.data.Model',
    fields: ['id','name'],
    proxy: {
        url: '/transport',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})