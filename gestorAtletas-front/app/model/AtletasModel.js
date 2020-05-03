Ext.define('gestorAtletas.model.AtletasModel', {
    extend: 'Ext.data.Model',

    fields: [
    	{name: 'idAtleta', type: 'string'},
    	{name: 'nombre', type: 'string'}, 
    	{name: 'apellidos', type: 'string'},   
    	{name: 'fechaNacimiento', type: 'string', convert: function(newValue, model){
    		return Ext.util.Format.date(model.get('fechaNacimiento'), 'Y-m-d');
    	}}, 
    	{name: 'licencia', type: 'string'},
    	{name: 'ciudad', type: 'string'},  
    	{name: 'telefono', type: 'string'},  
    	{name: 'email', type: 'string'}, 
    	{name: 'idCategoria'},
    	{name: 'idSexo'}
    ]
});
