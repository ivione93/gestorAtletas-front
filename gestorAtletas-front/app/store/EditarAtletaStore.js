Ext.define('gestorAtletas.store.EditarAtletaStore', {
    extend: 'Ext.data.Store',

    alias: 'store.editarAtletaStore',
    model: 'gestorAtletas.model.AtletasModel',

    proxy: {
        type: 'rest',
        url: Config.server + 'atletas/edit',
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        writer: {type: 'json'}
    }
});
