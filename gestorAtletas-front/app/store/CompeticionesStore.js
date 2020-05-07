Ext.define('gestorAtletas.store.CompeticionesStore', {
    extend: 'Ext.data.Store',

    alias: 'store.competicionesStore',
    model: 'gestorAtletas.model.CompeticionesModel',

    autoLoad: true,
    
    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'competiciones/',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
