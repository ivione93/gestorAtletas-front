Ext.define('gestorAtletas.controller.EstadilloController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.estadilloController',
    
    generarEstadilloHungaro: function() {
    	var msg = 'Generación estadillo por tabla húngara: ';
    	var estadilloGrid = Ext.getCmp('estadilloGrid');
    	obtenerFiltros(msg);
    	estadilloGrid.setVisible(true);
    },
    
    generarEstadilloMarcas: function() {
    	var msg = 'Generación estadillo por marcas: ';
    	obtenerFiltros(msg);
    	Ext.getCmp('estadilloGrid').setVisible(true);
    }
});

function obtenerFiltros(msg) {
	var sexoEstadillo = Ext.getCmp('sexoEstadillo').getValue();
	var categoriaEstadillo = Ext.getCmp('categoriaEstadillo').getValue();
	var ambitoEstadillo = Ext.getCmp('ambitoEstadillo').getValue();
	alert(msg + sexoEstadillo + ' ' +
			categoriaEstadillo + ' ' + ambitoEstadillo);
};