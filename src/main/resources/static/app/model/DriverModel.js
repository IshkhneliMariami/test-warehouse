Ext.define('MI.model.DriverModel', {
    extend: 'Ext.data.Model',
    fields: ['id','name', 'idNumber'],
    proxy: {
        url: '/driver',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})