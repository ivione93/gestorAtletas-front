Ext.define('gestorAtletas.model.NuevoResultadoModel', {
    extend: 'Ext.data.Model',

    fields: [
    	{name: 'idCompeticion'},
    	{name: 'idAtleta'},
    	{name: 'idPrueba'},
    	{name: 'marca', type: 'string'},  
    	{name: 'puntos', type: 'string'}
    ]
});
