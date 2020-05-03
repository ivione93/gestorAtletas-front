Ext.define('gestorAtletas.model.CompeticionesModel', {
    extend: 'Ext.data.Model',

    fields: [
    	{name: 'idCompeticion', type: 'string'},
    	{name: 'nCompeticion', type: 'string'}, 
    	{name: 'lugar', type: 'string'},
    	{name: 'fecha', type: 'string', convert: function(newValue, model){
    		return Ext.util.Format.date(model.get('fecha'), 'Y-m-d');
    	}}
    ]
});