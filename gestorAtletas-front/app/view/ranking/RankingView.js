Ext.define('gestorAtletas.view.ranking.RankingView', {
	extend: 'Ext.panel.Panel',
    alias: 'widget.rankingView',
    
    require: [
    	'gestorAtletas.controller.rankingController',
    	'gestorAtletas.view.estadillo.RankingSearch',
    	'gestorAtletas.view.estadillo.RankingGrid'
    ],
    
    controller: 'rankingController',
    
    items: [
    	{
    		xtype: 'rankingSearch'
    	}, {
    		xtype: 'rankingGrid',
    		hidden: true
    	}
    ]
});