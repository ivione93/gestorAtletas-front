Ext.define('gestorAtletas.store.RankingStore', {
    extend: 'Ext.data.Store',

    alias: 'store.rankingStore',
    model: 'gestorAtletas.model.RankingModel',

    autoLoad: true,
    
    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'resultados',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
