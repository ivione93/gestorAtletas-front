Ext.define('gestorAtletas.view.competiciones.CompeticionesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.competicionesGrid',
    id: 'competicionesGrid',
    
    requires: [
        'gestorAtletas.store.CompeticionesStore',
        'gestorAtletas.controller.CompeticionesController'
    ],
    
    controller: 'competicionesController',
    
    title: 'Competiciones',
    border: true,
    width: 1356,
    height: 400,
    
    store: {
        type: 'competicionesStore',
        autoLoad: true
    },
    
    bind: {
    	selection: '{selectedItem}'
    },
    
    columns: [
    	{ text: 'ID',  dataIndex: 'idCompeticion', flex: 0.2 },
    	{ text: 'Competición',  dataIndex: 'nCompeticion', flex: 2 },
    	{ text: 'Lugar', dataIndex: 'lugar', flex: 1 },
    	{ text: 'Fecha', dataIndex: 'fecha', flex: 1 }
    ],
    
    bbar: [
    	//{ xtype: 'button', text: 'Eliminar', handler: 'eliminarCompeticion', disabled: true, bind: {disabled: '{!selectedItem}'}},
    	{ xtype: 'button', text: 'Añadir', handler: 'crearCompeticion' }
    ],
});