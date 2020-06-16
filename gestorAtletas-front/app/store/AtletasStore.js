Ext.define('gestorAtletas.store.AtletasStore', {
    extend: 'Ext.data.Store',

    alias: 'store.atletasStore',
    model: 'gestorAtletas.model.AtletasModel',

    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'atletas/',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
