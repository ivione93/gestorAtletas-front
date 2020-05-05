Ext.define('gestorAtletas.model.PruebaModel', {
    extend: 'Ext.data.Model',

    fields: [
    	{name: 'idPrueba', type: 'string'},
    	{name: 'idSexo', type: 'string'}, 
    	{name: 'idCategoria', type: 'string'},  
    	{name: 'idAmbito', type: 'string'},
    	{name: 'idSector', type: 'string'},  
    	{name: 'idEspecialidad', type: 'string'}
    ]
});