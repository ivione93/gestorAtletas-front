Ext.define('gestorAtletas.store.NuevoAtletaStore', {
    extend: 'Ext.data.Store',

    alias: 'store.nuevoAtletaStore',
    model: 'gestorAtletas.model.NuevoAtletaModel',

    proxy: {
        type: 'rest',
        url: Config.server + 'atletas',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        writer: {type: 'json'}
    }
});
