Ext.define('gestorAtletas.controller.RankingController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rankingController',
    
    buscar: function() {
    	var rankingGrid = Ext.getCmp('rankingGrid');
    	var gridStore = Ext.getCmp('rankingGrid').getStore();
		var idPrueba = calcularPrueba();
    	gridStore.getProxy().initConfig();
    	gridStore.getProxy().setUrl(Config.server + 'resultados/prueba/' + idPrueba);
    	gridStore.getProxy().setExtraParams({});
    	gridStore.load();
    	rankingGrid.setVisible(true);
    },
    
    buscar1: function() {
    	var rankingGrid = Ext.getCmp('rankingGrid');
    	var gridStore = Ext.getCmp('rankingGrid').getStore();
    	var pruebaStore = Ext.create('gestorAtletas.store.PruebaStore');
    	//obtenerFiltros();
    	var ambitoRanking = Ext.getCmp('ambitoRanking').getValue();
    	var sectorRanking = Ext.getCmp('sectorRanking').getValue();
    	var especialidadRanking = Ext.getCmp('especialidadRanking').getValue();
    	var categoriaRanking = Ext.getCmp('categoriaRanking').getValue();
    	var sexoRanking = Ext.getCmp('sexoRanking').getValue();
    	if(ambitoRanking != null && sectorRanking != null && especialidadRanking != null && categoriaRanking != null && sexoRanking != null) {
    		pruebaStore.getProxy().setUrl(Config.server + 'pruebas/sexo/' + sexoRanking 
    				+ '/categoria/' + categoriaRanking + '/ambito/' + ambitoRanking + '/sector/' + sectorRanking
    				+ '/especialidad/' + especialidadRanking);
    	}
    	alert(pruebaStore.getProxy().getUrl());
    	pruebaStore.load();
    	if(pruebaStore.data.length > 0){
    		var idPrueba = pruebaStore.data.items[0].data.idPrueba;
        	gridStore.getProxy().initConfig();
        	gridStore.getProxy().setUrl(Config.server + 'resultados/prueba/' + idPrueba);
        	gridStore.getProxy().setExtraParams({});
        	gridStore.load();
        	rankingGrid.setVisible(true);
    	} else {
    		alert("No se han encontrado resultados");
    	}
    },

    limpiar: function() {
    	Ext.getCmp('ambitoRanking').setValue('');
    	Ext.getCmp('sectorRanking').setValue('');
    	Ext.getCmp('especialidadRanking').setValue('');
    	Ext.getCmp('categoriaRanking').setValue('');
    	Ext.getCmp('sexoRanking').setValue('');
    }
});

function obtenerFiltros() {
	var ambitoRanking = Ext.getCmp('ambitoRanking').getValue();
	var sectorRanking = Ext.getCmp('sectorRanking').getValue();
	var especialidadRanking = Ext.getCmp('especialidadRanking').getValue();
	var categoriaRanking = Ext.getCmp('categoriaRanking').getValue();
	var sexoRanking = Ext.getCmp('sexoRanking').getValue();
	alert(ambitoRanking + ' ' + sectorRanking + ' ' +
			especialidadRanking + ' ' + categoriaRanking + ' ' + sexoRanking);
};

function calcularPrueba() {
	var idPrueba = 0;
	var pruebaStore = Ext.create('gestorAtletas.store.PruebaStore');
	var ambitoRanking = Ext.getCmp('ambitoRanking').getValue();
	var sectorRanking = Ext.getCmp('sectorRanking').getValue();
	var especialidadRanking = Ext.getCmp('especialidadRanking').getValue();
	var categoriaRanking = Ext.getCmp('categoriaRanking').getValue();
	var sexoRanking = Ext.getCmp('sexoRanking').getValue();
	if(ambitoRanking != null && sectorRanking != null && especialidadRanking != null && categoriaRanking != null && sexoRanking != null) {
		pruebaStore.getProxy().setUrl(Config.server + 'pruebas/sexo/' + sexoRanking 
				+ '/categoria/' + categoriaRanking + '/ambito/' + ambitoRanking + '/sector/' + sectorRanking
				+ '/especialidad/' + especialidadRanking);
	}
	pruebaStore.fetch();
	pruebaStore.load();
	if(pruebaStore.data.length > 0){
		idPrueba = pruebaStore.data.items[0].data.idPrueba;
	} else {
		idPrueba = -1;
	}
	alert(idPrueba);
	return idPrueba;
};