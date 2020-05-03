Ext.define('gestorAtletas.store.NuevaCompeticionStore', {
    extend: 'Ext.data.Store',

    alias: 'store.nuevaCompeticionStore',
    model: 'gestorAtletas.model.CompeticionesModel',

    proxy: {
        type: 'rest',
        url: Config.server + 'competiciones',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        writer: {type: 'json'}
    }
});
