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
    		alert('Tienes que completar todos los filtros');
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
		alert("Vuelve a darle a buscar");
		rankingGrid.setVisible(false);
	}
};