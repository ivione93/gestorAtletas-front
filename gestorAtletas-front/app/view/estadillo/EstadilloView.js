Ext.define('gestorAtletas.view.estadillo.EstadilloView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.estadilloView',
    
    require: [
    	'gestorAtletas.controller.EstadilloController',
    	'gestorAtletas.view.estadillo.EstadilloSearch'
    ],
    
    controller: 'estadilloController',
    
    bbar: [
    	{ xtype: 'button', text: 'Por tabla húngara', handler: 'generarEstadilloHungaro' },
    	{ xtype: 'button', text: 'Por marcas', 	      handler: 'generarEstadilloMarcas' },
    ],
    
    items: [
    	{
    		xtype: 'estadilloSearch'
    	}, {
    		xtype: 'estadilloGrid',
    		hidden: true
    	}
    ]
});