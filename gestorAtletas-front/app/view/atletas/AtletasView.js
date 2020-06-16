Ext.define('gestorAtletas.view.atletas.AtletasView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.atletasView',
    
    requires: [
    	'gestorAtletas.view.atletas.AtletasSearch',
    	'gestorAtletas.view.atletas.AtletasGrid'
    ],
    scrollable: 'y',
    
    items:[
    	{
    		xtype: 'atletasSearch'
    	}, {
    		xtype: 'atletasGrid'    		
    	}
    ]
    
});
