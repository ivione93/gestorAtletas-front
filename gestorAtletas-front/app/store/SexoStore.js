Ext.define('gestorAtletas.store.SexoStore', {
    extend: 'Ext.data.Store',

    alias: 'store.sexoStore',
    model: 'gestorAtletas.model.SexoModel',

    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'sexo',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
