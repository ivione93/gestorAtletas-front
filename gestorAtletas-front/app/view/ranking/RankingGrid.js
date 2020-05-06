Ext.define('gestorAtletas.view.ranking.RankingGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.rankingGrid',
    id: 'rankingGrid',
    
    title: 'Ranking',
    border: true,
    
    store: {
        type: 'rankingStore',
        autoLoad: false
    },
    
    columns: [
    	{ text: 'Prueba', dataIndex: 'idPrueba', flex: 1 },
    	{ text: 'Competicion',  dataIndex: 'idCompeticion', flex: 1 },
    	{ text: 'Atleta',  dataIndex: 'idAtleta', flex: 1 },
        { text: 'Marca', dataIndex: 'marca', flex: 1 },
        { text: 'Puntos', dataIndex: 'puntos', flex: 1 }
    ],
    
    listeners: {
    	celldblclick: function(a, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    		var idAtleta = tr.data.idAleta;
    		var idPrueba = tr.prueba.idPrueba;
    		var idCompeticion = tr.data.idCompeticion;a
    		alert(cellIndex);
    	}
    }
    
});