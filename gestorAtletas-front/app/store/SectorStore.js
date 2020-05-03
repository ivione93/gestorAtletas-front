Ext.define('gestorAtletas.store.SectorStore', {
    extend: 'Ext.data.Store',

    alias: 'store.sectorStore',
    model: 'gestorAtletas.model.SectorModel',

    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'sector',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
