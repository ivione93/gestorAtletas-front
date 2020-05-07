Ext.define('gestorAtletas.controller.RankingController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rankingController',
    
    buscar: function() {
    	var pruebaStoreGrid = Ext.getCmp('pruebaStoreGrid').getStore();
    	var gridStore = Ext.getCmp('rankingGrid').getStore();
    	var ambitoRanking = Ext.getCmp('ambitoRanking').getValue();
    	var sectorRanking = Ext.getCmp('sectorRanking').getValue();
    	var especialidadRanking = Ext.getCmp('especialidadRanking').getValue();
    	var categoriaRanking = Ext.getCmp('categoriaRanking').getValue();
    	var sexoRanking = Ext.getCmp('sexoRanking').getValue();
    	if(ambitoRanking != null && sectorRanking != null && especialidadRanking != null && categoriaRanking != null && sexoRanking != null) {
    		pruebaStoreGrid.getProxy().setUrl(Config.server + 'pruebas/sexo/' + sexoRanking 
    				+ '/categoria/' + categoriaRanking + '/ambito/' + ambitoRanking + '/sector/' + sectorRanking
    				+ '/especialidad/' + especialidadRanking);
    		pruebaStoreGrid.load();
        	buscarResultadosPrueba();
    	} else {
    		Ext.Msg.alert('Error', 'Tienes que completar todos los filtros');
    	}
    },

    limpiar: function() {
    	Ext.getCmp('ambitoRanking').setValue('');
    	Ext.getCmp('sectorRanking').setValue('');
    	Ext.getCmp('especialidadRanking').setValue('');
    	Ext.getCmp('categoriaRanking').setValue('');
    	Ext.getCmp('sexoRanking').setValue('');
    },
    
    abrirDetalleResultado: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    	var idAtleta = record.data.idAtleta;
		var idCompeticion = record.data.idCompeticion;
		var atletaResulStore = Ext.create('gestorAtletas.store.AtletasStore');
		atletaResulStore.getProxy().initConfig();
		atletaResulStore.getProxy().setUrl(Config.server + 'atletas/' + idAtleta);
		atletaResulStore.load();
		var competicionResulStore = Ext.create('gestorAtletas.store.CompeticionesStore');
		competicionResulStore.getProxy().initConfig();
		competicionResulStore.getProxy().setUrl(Config.server + 'competiciones/' + idCompeticion);
		competicionResulStore.load();
		var detalle = Ext.create('Ext.window.Window', {
    		title: 'Información',
    		id: 'atletaCompeticionResul',
    		resizable: false,
    		height: 450,
    		width: 550,
    		items: [
    			{
    				xtype: 'fieldset',
    				title: 'Atleta',
    				items: [{
    					xtype: 'grid',
        				store: atletaResulStore,
        				columns: [
        					{ text: 'ID', dataIndex: 'idAtleta', flex: 0.2, sortable: false, hideable: false },
        					{ text: 'Nombre', dataIndex: 'nombre', flex: 1, sortable: false, hideable: false },
        					{ text: 'Apellidos', dataIndex: 'apellidos', flex: 2,sortable: false, hideable: false },
        					{ text: 'F. nacimiento', dataIndex: 'fechaNacimiento', flex: 1, sortable: false, hideable: false },
        				]
    				}]
    			}, {
    				xtype: 'fieldset',
    				title: 'Competición',
    				items: [{
	    				xtype: 'grid',
	    				store: competicionResulStore,
	    				columns: [
	    					{ text: 'ID', dataIndex: 'idCompeticion', flex: 0.2,sortable: false, hideable: false },
	    					{ text: 'Competición', dataIndex: 'nCompeticion', flex: 2, sortable: false, hideable: false },
	    					{ text: 'Lugar', dataIndex: 'lugar', flex: 1, sortable: false, hideable: false },
	    					{ text: 'Fecha', dataIndex: 'fecha', flex: 1, sortable: false, hideable: false },
	    				]
    				}]
    			}, {
    				html: '<table style="text-align:center; width:100%">' +
    					    '<tr>' +
				    		  '<th style="font-size: 14pt">Marca</th>' +
				    		  '<th style="font-size: 14pt">Puntos</th>' +
				    		'</tr>' +
				    		'<tr>' +
			    		      '<td style="font-size: 16pt">' + record.data.marca + '</td>' +
			    		      '<td style="font-size: 16pt">' + record.data.puntos + '</td>' +
			    		    '</tr>' +
			    		  '</table>'
    			}
    		]
    	}).show();
    }
});

function buscarResultadosPrueba() {
	var pruebaStoreGrid = Ext.getCmp('pruebaStoreGrid').getStore();
	var gridStore = Ext.getCmp('rankingGrid').getStore();
	var rankingGrid = Ext.getCmp('rankingGrid');
	if(pruebaStoreGrid.data.length > 0){
		var idPrueba = pruebaStoreGrid.data.items[0].data.idPrueba;
    	gridStore.getProxy().initConfig();
    	gridStore.getProxy().setUrl(Config.server + 'resultados/prueba/' + idPrueba);
    	gridStore.getProxy().setExtraParams({});
    	gridStore.load();
    	rankingGrid.setVisible(true);
	} else {
		Ext.Msg.alert('Error', 'Vuelve a darle a buscar');
		rankingGrid.setVisible(false);
	}
};