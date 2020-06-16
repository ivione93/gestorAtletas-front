Ext.define('gestorAtletas.view.atletas.AtletasGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.atletasGrid',
    id: 'atletasGrid',

    requires: [
        'gestorAtletas.store.AtletasStore',
        'gestorAtletas.controller.AtletasController'
    ],
    
    controller: 'atletasController',

    title: 'Atletas',
    enableLocking: true,
    rowselect: true,
    border: true,
    width: 1356,
    height: 400,

    store: {
        type: 'atletasStore',
        autoLoad: true
    },
    
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true,
    },
    
    bind: {
    	selection: '{selectedItem}'
    },

    columns: [
    	{ text: 'ID',  dataIndex: 'idAtleta', flex: 0.2 },
        { text: 'Nombre',  dataIndex: 'nombre', flex: 1 },
        { text: 'Apellidos', dataIndex: 'apellidos', flex: 1  },
        { text: 'F. Nacimiento', dataIndex: 'fechaNacimiento', flex: 1 },
        { text: 'Ciudad', dataIndex: 'ciudad', flex: 1 },
        { text: 'Categoría', dataIndex: 'idCategoria', flex: 1, 
        	renderer: function(value, meta, record) {
        		switch (record.data.idCategoria) {
					case 1:
						value = 'Máster'
						break;
					case 9:
						value = 'Absoluto'
						break;
					default:
						break;
				}
        		return value;
        	} 
        },        	
        { text: 'Sexo', dataIndex: 'idSexo', flex: 0.3,
        	renderer: function(value, meta, record) {
        		if(record.data.idSexo == 1) {
        			value = 'M';
        		} else {
        			value = 'F';
        		}
        		return value;
        	} 
        }
    ],
    
    bbar: [
    	{ xtype: 'button', text: 'Eliminar', handler: 'eliminarAtleta', disabled: true, bind: {disabled: '{!selectedItem}'} },
    	{ xtype: 'button', text: 'Modificar', handler: 'abrirDetalleAtleta', disabled: true, bind: {disabled: '{!selectedItem}'} },
    	{ xtype: 'button', text: 'Añadir', handler: 'abrirNuevoAtleta' },
    	'->',
    	{ xtype: 'button', text: 'Añadir resultado', handler: 'abrirNuevoResultado', disabled: true, bind: {disabled: '{!selectedItem}'} }
    ],
    
    plugins: {
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<p><b>Licencia:</b> {licencia}</p>',
                '<p><b>Teléfono:</b> {telefono}</p>',
                '<p><b>Email:</b> {email}</p>'),
            expandOnDblClick: false,
        }
    }
});
