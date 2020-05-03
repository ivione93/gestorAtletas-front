Ext.define('gestorAtletas.model.RankingModel', {
    extend: 'Ext.data.Model',

    fields: [
    	{name: 'idResultados', type: 'string'},
    	{name: 'idCompeticion', type: 'string'}, 
    	{name: 'idAtleta', type: 'string'},  
    	{name: 'idPrueba', type: 'string'},
    	{name: 'marca', type: 'string'},  
    	{name: 'puntos', type: 'string'}
    ]
});