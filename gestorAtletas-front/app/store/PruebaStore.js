Ext.define('gestorAtletas.store.PruebaStore', {
    extend: 'Ext.data.Store',

    alias: 'store.pruebaStore',
    model: 'gestorAtletas.model.PruebaModel',
    
    autoSync: true,
    autoLoad: true,
    
    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'pruebas/',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
