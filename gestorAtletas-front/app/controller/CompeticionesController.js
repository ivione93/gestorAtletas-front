Ext.define('gestorAtletas.controller.CompeticionesController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.competicionesController',
    
    buscar: function() {
    	var gridStore = Ext.getCmp('competicionesGrid').getStore();
    	gridStore.getProxy().initConfig();
    	gridStore.getProxy().setUrl(Config.server + 'competiciones');
    	gridStore.getProxy().setExtraParams({});
    	var nombreCompeticion = Ext.getCmp('nombreCompeticion').getValue();
    	var lugarCompeticion = Ext.getCmp('lugarCompeticion').getValue();
    	if(nombreCompeticion != '' || nombreCompeticion != null) {
    		gridStore.getProxy().setExtraParam('nCompeticion', nombreCompeticion);
    	}
    	if(lugarCompeticion != '' || lugarCompeticion != null) {
    		gridStore.getProxy().setExtraParam('lugar', lugarCompeticion);
    	}
    	if(nombreCompeticion == '' && lugarCompeticion == '') {
    		gridStore.proxy.url = Config.server + 'competiciones';
    	}
    	gridStore.load();
    },
    
    limpiar: function() {
    	Ext.getCmp('nombreCompeticion').setValue('');
    	Ext.getCmp('lugarCompeticion').setValue('');
    },
    
    crearCompeticion: function() {
    	var detalle = Ext.create('Ext.window.Window', {
    		id: 'nuevaCompeticion',
    		controller: 'competicionesController',
    		title: 'Nueva competición',
    		height: 250,
    		width: 500,
    		items: {
    			xtype: 'altaCompeticiones',
    		}
    	}).show();
    },
    
    eliminarCompeticion: function(btn) {
    	var grid = Ext.getCmp('competicionesGrid');
    	var competicion = grid.selection.data.idCompeticion;
    	Ext.MessageBox.show({
            title: 'Eliminar competición',
            msg: 'Se va a proceder a eliminar la competición seleccionada. <br />¿Desea continuar?',
            buttons: Ext.MessageBox.YESNO,
            icon: Ext.MessageBox.QUESTION,
            fn: function(btn){
            	var request = null;
            	if(btn == 'yes'){
            		request = {
            			url: 'localhost:9595/competiciones/delete/' + competicion,
            			method: 'delete',
            			header: {'Content-Type': null},
            			success: function(response){
            				Ext.Msg.alert('Eliminado');
            				grid.store.reload();
            			},
            			failure: function(response){
            				Ext.Msg.alert('No eliminado a BBDD');
            			}
            		};
            		Ext.Ajax.request(request);
            		grid.store.remove(grid.selModel.selected.items);
            	}
            }
    		
        });
    },
    
    cancelar: function() {
    	Ext.getCmp('nuevaCompeticion').close();
    },
    
    guardar: function() {
        var form = Ext.getCmp('altaCompeticiones').getForm();
        var grid = Ext.getCmp('competicionesGrid');
        if (form.isValid()) {
        	var nCompeticion = Ext.getCmp('nCompeticion').getValue();
        	var fecha = Ext.getCmp('fecha').getValue();
        	var lugar = Ext.getCmp('lugar').getValue();
        	
        	var store = Ext.create('gestorAtletas.store.NuevaCompeticionStore');
        	var model = Ext.create('gestorAtletas.model.CompeticionesModel', {
        		nCompeticion: nCompeticion,
        		fecha: fecha,
        		lugar: lugar
        	});
        	store.add(model);
        	store.sync({
        		success: function() {
        			Ext.Msg.alert('Aviso','Operación realizada correctamente');
        			grid.store.reload();
        		}, 
        		failure: function() {
        			Ext.Msg.alert('Error','Se produjo un error');
        		}
        	});
        }
    	Ext.getCmp('nuevaCompeticion').close();
    }
    
});