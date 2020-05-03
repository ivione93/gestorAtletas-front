Ext.define('gestorAtletas.store.NuevoResultadoStore', {
    extend: 'Ext.data.Store',

    alias: 'store.nuevoResultadoStore',
    model: 'gestorAtletas.model.NuevoResultadoModel',

    proxy: {
        type: 'rest',
        url: Config.server + 'resultados/new',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        writer: {type: 'json'}
    }
});
