Ext.define('gestorAtletas.store.AmbitoStore', {
    extend: 'Ext.data.Store',

    alias: 'store.ambitoStore',
    model: 'gestorAtletas.model.AmbitoModel',

    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'ambito',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
