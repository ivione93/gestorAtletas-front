Ext.define('gestorAtletas.store.CategoriaStore', {
    extend: 'Ext.data.Store',

    alias: 'store.categoriaStore',
    model: 'gestorAtletas.model.CategoriaModel',

    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'categoria',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
