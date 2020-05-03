Ext.define('gestorAtletas.store.EspecialidadStore', {
    extend: 'Ext.data.Store',

    alias: 'store.especialidadStore',
    model: 'gestorAtletas.model.EspecialidadModel',

    proxy: {
        type: 'rest',
        method: 'GET',
        url: Config.server + 'especialidad',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
