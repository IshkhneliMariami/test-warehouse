Ext.define('MI.model.ItemModel', {
    extend: 'Ext.data.Model',
    fields: ['id','driver', 'transport', 'quantity'],
    proxy: {
        url: '/item',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})