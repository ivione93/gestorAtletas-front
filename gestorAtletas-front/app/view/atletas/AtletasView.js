Ext.define('gestorAtletas.view.atletas.AtletasView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.atletasView',
    
    requires: [
    	'gestorAtletas.view.atletas.AtletasSearch',
    	'gestorAtletas.view.atletas.AtletasGrid'
    ],
    
    items:[
    	{
    		xtype: 'atletasSearch'
    	}, {
    		xtype: 'atletasGrid'    		
    	}
    ]
    
});
