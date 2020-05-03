Ext.define('gestorAtletas.controller.AtletasController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.atletasController',
    
    buscar: function() {
    	var gridStore = Ext.getCmp('atletasGrid').getStore();
    	gridStore.getProxy().initConfig();
    	gridStore.getProxy().setUrl(Config.server + 'atletas');
    	gridStore.getProxy().setExtraParams({});
    	var categoriaAtleta = Ext.getCmp('categoriaAtleta').getValue();
    	var nombreAtleta = Ext.getCmp('nombreAtleta').getValue();
    	var apellidosAtleta = Ext.getCmp('apellidosAtleta').getValue();
    	var sexoAtleta = Ext.getCmp('sexoAtleta').getValue();
    	var licenciaAtleta = Ext.getCmp('licenciaAtleta').getValue();
    	if(categoriaAtleta != null && sexoAtleta != null) {
    		gridStore.getProxy().setUrl(Config.server + 'atletas/categoria/' + categoriaAtleta 
    				+ '/sexo/' + sexoAtleta);
    	} else if(categoriaAtleta != null && sexoAtleta == null) {
    		gridStore.getProxy().setUrl(Config.server + 'atletas/categoria/' + categoriaAtleta);
    	} else if(categoriaAtleta == null && sexoAtleta != null) {
    		gridStore.getProxy().setUrl(Config.server + 'atletas/sexo/' + sexoAtleta);
    		
    	}
    	if(nombreAtleta != '' || nombreAtleta != null) {
    		gridStore.getProxy().setExtraParam('nombre', nombreAtleta);
    	}
    	if(apellidosAtleta != '' || apellidosAtleta != null) {
    		gridStore.getProxy().setExtraParam('apellidos', apellidosAtleta);
    	}
    	if(licenciaAtleta != '' || licenciaAtleta != null) {
    		gridStore.getProxy().setExtraParam('licencia', licenciaAtleta);
    	}
    	if(categoriaAtleta == null && nombreAtleta == '' && apellidosAtleta == '' && 
    		sexoAtleta == null && licenciaAtleta == '') {
    		gridStore.proxy.url = Config.server + 'atletas';
    	}
    	gridStore.load();
    },
    
    limpiar: function() {
    	Ext.getCmp('categoriaAtleta').setValue('');
    	Ext.getCmp('nombreAtleta').setValue('');
    	Ext.getCmp('apellidosAtleta').setValue('');
    	Ext.getCmp('sexoAtleta').setValue('');
    	Ext.getCmp('licenciaAtleta').setValue('');
    },
    
    abrirDetalleAtleta: function() {
    	var atletaSel = Ext.getCmp('atletasGrid').selection.data;
    	var detalle = Ext.create('Ext.window.Window', {
    		title: atletaSel.nombre + ' ' + atletaSel.apellidos,
    		id: 'editarAtleta',
    		controller: 'atletasController',
    		height: 500,
    		width: 500,
    		items: {
    			xtype: 'atletasInfo',
    			edicionAtl: 'Editar'
    		},
    		listeners: {
    	    	beforeshow: function () {
    	    		Ext.getCmp('categoriaAtl').setValue(atletaSel.idCategoria);
    	    		Ext.getCmp('sexoAtl').setValue(atletaSel.idSexo);
    	    		Ext.getCmp('nombreAtl').setValue(atletaSel.nombre);
    	    		Ext.getCmp('apellidosAtl').setValue(atletaSel.apellidos);
    	    		Ext.getCmp('fechaNacimientoAtl').setValue(atletaSel.fechaNacimiento);
    	    		Ext.getCmp('ciudadAtl').setValue(atletaSel.ciudad);
    	    		Ext.getCmp('licenciaAtl').setValue(atletaSel.licencia);
    	    		Ext.getCmp('telefonoAtl').setValue(atletaSel.telefono);
    	    		Ext.getCmp('emailAtl').setValue(atletaSel.email);
    	    	}
    	    },
    	}).show();
    },
    
    abrirNuevoAtleta: function() {
    	var detalle = Ext.create('Ext.window.Window', {
    		id: 'nuevoAtleta',
    		controller: 'atletasController',
    		edicionAtl: 'Nuevo',
    		title: 'Alta de atleta',
    		height: 480,
    		width: 520,
    		items: {
    			xtype: 'atletasInfo',
    			edicionAtl: 'Nuevo'
    		}
    	}).show();
    },
    
    eliminarAtleta: function(btn) {
    	var grid = Ext.getCmp('atletasGrid');
    	var atleta = grid.selection.data.idAtleta;
    	Ext.MessageBox.show({
            title: 'Eliminar atleta',
            msg: 'Se va a proceder a eliminar al atleta seleccionado. <br />¿Desea continuar?',
            buttons: Ext.MessageBox.YESNO,
            icon: Ext.MessageBox.QUESTION,
            fn: function(btn){
            	var request = null;
            	if(btn == 'yes'){
            		request = {
            			url: 'localhost:9595/atletas/delete/' + atleta,
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
    	var edicionAtl = Ext.getCmp('atletasInfo').edicionAtl;
    	if(edicionAtl == 'Editar'){
    		Ext.getCmp('editarAtleta').close();
    	} else if (edicionAtl == 'Nuevo') {
    		Ext.getCmp('nuevoAtleta').close();
    	}
    },
    
    guardar: function() {
    	var edicionAtl = Ext.getCmp('atletasInfo').edicionAtl;
        var form = Ext.getCmp('atletasInfo').getForm();
        var grid = Ext.getCmp('atletasGrid');
        if (form.isValid()) {
        	var categoriaAtl = Ext.getCmp('categoriaAtl').getValue();
        	var sexoAtl = Ext.getCmp('sexoAtl').getValue();
        	var nombreAtl = Ext.getCmp('nombreAtl').getValue();
        	var apellidosAtl = Ext.getCmp('apellidosAtl').getValue();
        	var fechaNacimientoAtl = Ext.getCmp('fechaNacimientoAtl').getValue();
        	var fechaNac = Ext.util.Format.date(fechaNacimientoAtl, 'Y-m-d');
        	var ciudadAtl = Ext.getCmp('ciudadAtl').getValue();
        	var licenciaAtl = Ext.getCmp('licenciaAtl').getValue();
        	var telefonoAtl = Ext.getCmp('telefonoAtl').getValue();
        	var emailAtl = Ext.getCmp('emailAtl').getValue();
        	
        	if(edicionAtl == 'Editar'){
        		var idAtleta = grid.selection.data.idAtleta;
        		var store = Ext.create('gestorAtletas.store.EditarAtletaStore');
            	var model = Ext.create('gestorAtletas.model.AtletasModel', {
            		idAtleta: idAtleta,
            		nombre: nombreAtl,
            		apellidos: apellidosAtl,
            		fechaNacimiento: fechaNac,
            		ciudad: ciudadAtl,
            		licencia: licenciaAtl,
            		telefono: telefonoAtl,
            		email: emailAtl,
            		idCategoria: categoriaAtl,
            		idSexo: sexoAtl
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
        	} else if (edicionAtl == 'Nuevo') {
        		var store = Ext.create('gestorAtletas.store.NuevoAtletaStore');
            	var model = Ext.create('gestorAtletas.model.NuevoAtletaModel', {
            		nombre: nombreAtl,
            		apellidos: apellidosAtl,
            		fechaNacimiento: fechaNac,
            		ciudad: ciudadAtl,
            		licencia: licenciaAtl,
            		telefono: telefonoAtl,
            		email: emailAtl,
            		idCategoria: categoriaAtl,
            		idSexo: sexoAtl
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
        }
        if(edicionAtl == 'Editar'){
    		Ext.getCmp('editarAtleta').close();
    	} else if (edicionAtl == 'Nuevo') {
    		Ext.getCmp('nuevoAtleta').close();
    	}
    }
    
});