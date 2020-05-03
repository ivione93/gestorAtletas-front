Ext.define('gestorAtletas.controller.RankingController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rankingController',
    
    buscar: function() {
    	var rankingGrid = Ext.getCmp('rankingGrid');
    	obtenerFiltros();
    	rankingGrid.getStore().load();
    	rankingGrid.setVisible(true);
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