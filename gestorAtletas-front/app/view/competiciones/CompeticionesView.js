Ext.define('gestorAtletas.view.competiciones.CompeticionesView', {
	extend: 'Ext.panel.Panel',
    alias: 'widget.competicionesView',
    
    require: [
    	'gestorAtletas.view.competiciones.CompeticionesSearch',
    	'gestorAtletas.view.competiciones.CompeticionesGrid'
    ],
    
    items: [
    	{
    		xtype: 'competicionesSearch'
    	}, {
    		xtype: 'competicionesGrid'
    	}
    ]
});