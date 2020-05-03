Ext.define('gestorAtletas.view.competiciones.CompeticionesSearch', {
    extend: 'Ext.form.Panel',
    alias: 'widget.competicionesSearch',
    
    requires: [
        'gestorAtletas.controller.CompeticionesController'
    ],
    
    controller: 'competicionesController',
    
    items: [
    	{
    		xtype: 'fieldset',
    		title: 'Filtros de búsqueda',
    		border: true,
    		layout: 'hbox',
    		defaults: {
    			margin: 5
    		},
    		items: [
    			{
    				xtype: 'textfield',
    				id: 'nombreCompeticion',
    				fieldLabel: 'Competición',
    	            name: 'nombre',
    	            flex: 2
    			}, {
    				xtype: 'textfield',
    				id: 'lugarCompeticion',
    				fieldLabel: 'Lugar',
    	            name: 'lugar',
    	            flex: 1
    			}
    		]
    	}
    ],
    bbar: [
    	{ xtype: 'button', text: 'Limpiar', handler: 'limpiar' },
    	{ xtype: 'button', text: 'Buscar', handler: 'buscar' }
    ]
});