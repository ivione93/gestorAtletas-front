Ext.define('gestorAtletas.view.ranking.RankingSearch', {
    extend: 'Ext.form.Panel',
    alias: 'widget.rankingSearch',
    
    require: [
    	'gestorAtletas.controller.RankingController',
    ],
    
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
    				xtype: 'combobox',
    				id: 'sexoRanking',
    				fieldLabel: 'Sexo',
    				displayField: 'nSexo',
    				valueField: 'idSexo',
    				queryMode: 'local',
    				width: '20%',
    				emptyText: 'Seleccione sexo',
    				flex: 1,
    				store: {
    			        type: 'sexoStore',
    			        autoLoad: true
    			    }
    			}, {
    				xtype: 'combobox',
    				id: 'categoriaRanking',
    				fieldLabel: 'Categoria',
    				displayField: 'nCategoria',
    				valueField: 'idCategoria',
    				queryMode: 'local',
    				width: '20%',
    				emptyText: 'Seleccione categoría',
    				flex: 1,
    				store: {
    			        type: 'categoriaStore',
    			        autoLoad: true
    			    }
    			}, {
    				xtype: 'combobox',
    				id: 'ambitoRanking',
    				fieldLabel: 'Ámbito',
    				displayField: 'nAmbito',
    				valueField: 'idAmbito',
    				queryMode: 'local',
    				width: '20%',
    				emptyText: 'Seleccione ámbito',
    				flex: 1,
    				store: {
    			        type: 'ambitoStore',
    			        autoLoad: true
    			    }
    			}, {
    				xtype: 'combobox',
    				id: 'sectorRanking',
    				fieldLabel: 'Sector',
    				displayField: 'nSector',
    				valueField: 'idSector',
    				queryMode: 'local',
    				width: '20%',
    				emptyText: 'Seleccione sector',
    				flex: 1,
    				store: {
    			        type: 'sectorStore',
    			        autoLoad: true
    			    }
    			}, {
    				xtype: 'combobox',
    				id: 'especialidadRanking',
    				fieldLabel: 'Especialidad',
    				displayField: 'nEspecialidad',
    				valueField: 'idEspecialidad',
    				queryMode: 'local',
    				width: '20%',
    				emptyText: 'Seleccione especialidad',
    				flex: 1,
    				store: {
    			        type: 'especialidadStore',
    			        autoLoad: true
    			    }
    			}
    		]
    	}, {
    		xtype: 'grid',
    		id: 'pruebaStoreGrid',
    		store: {
    	        type: 'pruebaStore',
    	        autoLoad: false,
    	        listeners: {
    	        	/*afterload: function() {
    	        		var pruebaStoreGrid = Ext.getCmp('pruebaStoreGrid').getStore();
    	            	var rankingGrid = Ext.getCmp('rankingGrid');
    	            	var gridStore = Ext.getCmp('rankingGrid').getStore();
    	            	if(pruebaStoreGrid.data.length > 0){
    	            		var idPrueba = pruebaStoreGrid.data.items[0].data.idPrueba;
    	                	gridStore.getProxy().initConfig();
    	                	gridStore.getProxy().setUrl(Config.server + 'resultados/prueba/' + idPrueba);
    	                	gridStore.getProxy().setExtraParams({});
    	                	gridStore.load();
    	                	rankingGrid.setVisible(true);
    	            	} else {
    	            		alert("No se han encontrado resultados");
    	            	}
    	        	}*/
    	        	afterload: 'buscarResultadosPrueba'
    	        }
    	    },
    		columns: [
    			{ text: 'Prueba', dataIndex: 'idPrueba', flex: 1 },
    			{ text: 'Sexo', dataIndex: 'idSexo', flex: 1 },
    			{ text: 'Ambito', dataIndex: 'idAmbito', flex: 1 },
    			{ text: 'idCategoria', dataIndex: 'idCategoria', flex: 1 },
    			{ text: 'idSector', dataIndex: 'idSector', flex: 1 },
    			{ text: 'idEspecialidad', dataIndex: 'idEspecialidad', flex: 1 },
    		]
    	}
    ],
    bbar: [
    	{ xtype: 'button', text: 'Limpiar', handler: 'limpiar' },
    	{ xtype: 'button', text: 'Buscar', handler: 'buscar' }
    ]
});