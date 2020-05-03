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
        /*{ text: 'Nombre', dataIndex: 'nombre', flex: 1,
        	renderer: function(value, meta, record) {
    			return record.data.atleta.nombre;
    		}
    	},
        { text: 'Apellidos', dataIndex: 'apellidos', flex: 1,
        	renderer: function(value, meta, record) {
    			return record.data.atleta.apellidos;
    		}
    	},*/
        { text: 'Marca', dataIndex: 'marca', flex: 1 },
        { text: 'Puntos', dataIndex: 'puntos', flex: 1 }
    ]
    
});