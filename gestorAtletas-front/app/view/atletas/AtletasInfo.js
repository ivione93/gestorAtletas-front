Ext.define('gestorAtletas.view.atletas.AtletasInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'form-contact',
    alias: 'widget.atletasInfo',
    id: 'atletasInfo',
    
    url: Config.server + 'atletas',
    method: 'POST',
    
    title: 'Info',
    header: false,
    
    config: {
    	edicionAtl: null
    },
	
    bodyPadding: 10,
    
    fieldDefaults: {
        labelAlign: 'top',
        labelWidth: 100,
        msgTarget: 'side'
    },
    
    items: [{
        xtype: 'fieldcontainer',
        layout: 'hbox',
        defaultType: 'textfield',

        fieldDefaults: {
            labelAlign: 'top'
        },

        items: [{
            flex: 1,
            xtype: 'combobox',
			id: 'categoriaAtl',
			fieldLabel: 'Categoria',
			displayField: 'nCategoria',
			valueField: 'idCategoria',
			queryMode: 'local',
			emptyText: 'Seleccione categoría',
			store: {
		        type: 'categoriaStore',
		        autoLoad: true
		    }
        }, {
            flex: 1,
            margin: '0 0 0 5',
            xtype: 'combobox',
			id: 'sexoAtl',
			fieldLabel: 'Sexo',
			displayField: 'nSexo',
			valueField: 'idSexo',
			queryMode: 'local',
			emptyText: 'Seleccione sexo',
			store: {
		        type: 'sexoStore',
		        autoLoad: true
		    }
        }]
    }, {
        xtype: 'fieldcontainer',
        layout: 'hbox',
        defaultType: 'textfield',

        fieldDefaults: {
            labelAlign: 'top'
        },

        items: [{
            flex: 1,
            xtype: 'textfield',
	        fieldLabel: 'Nombre',
	        name: 'nombreAtl',
	        id: 'nombreAtl',
	        allowBlank: false
        }, {
            flex: 1,
            margin: '0 0 0 5',
            xtype: 'datefield',
	        fieldLabel: 'Fecha nacimiento',
	        name: 'fechaNacimientoAtl',
	        id: 'fechaNacimientoAtl',
	        format: 'Y-m-d',
	        altFormats: 'Y-m-d',
	        allowBlank: false
        }]
    }, {
        xtype: 'fieldcontainer',
        layout: 'hbox',
        defaultType: 'textfield',

        fieldDefaults: {
            labelAlign: 'top'
        },

        items: [{
            flex: 2,
            xtype: 'textfield',
	        fieldLabel: 'Apellidos',
	        name: 'apellidosAtl',
	        id: 'apellidosAtl',
	        allowBlank: false
        }]
    }, {
        xtype: 'fieldcontainer',
        layout: 'hbox',
        defaultType: 'textfield',

        fieldDefaults: {
            labelAlign: 'top'
        },

        items: [{
            flex: 1,
            xtype: 'textfield',
	        fieldLabel: 'Ciudad',
	        name: 'ciudadAtl',
	        id: 'ciudadAtl',
	        allowBlank: false
        }, {
            flex: 1,
            margin: '0 0 0 5',
            xtype: 'textfield',
	        fieldLabel: 'Licencia',
	        name: 'licenciaAtl',
	        id: 'licenciaAtl',
	        allowBlank: false
        }]
    }, {
        xtype: 'fieldcontainer',
        layout: 'hbox',
        defaultType: 'textfield',

        fieldDefaults: {
            labelAlign: 'top'
        },

        items: [{
            flex: 1,
            xtype: 'textfield',
	        fieldLabel: 'Teléfono',
	        name: 'telefonoAtl',
	        id: 'telefonoAtl',
	        allowBlank: false
        }, {
            flex: 1,
            margin: '0 0 0 5',
            xtype: 'textfield',
	        fieldLabel: 'Email',
	        name: 'emailAtl',
	        id: 'emailAtl',
	        allowBlank: false
        }]
    }],

    buttons: [{
        text: 'Cancelar',
        handler: 'cancelar'
    }, {
        text: 'Guardar',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: 'guardar'
    }]
});