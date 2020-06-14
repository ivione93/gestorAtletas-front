Ext.define('gestorAtletas.view.atletas.AtletasResultados', {
    extend: 'Ext.form.Panel',
    xtype: 'form-contact',
    alias: 'widget.atletasResultados',
    id: 'atletasResultados',
    
    url: Config.server + 'atletas',
    method: 'POST',
    
    title: 'Info',
    header: false,
	
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
        
        defaults: {
        	margin: '3%'
        },

        items: [{
        	flex: 1,
            xtype: 'textfield',
            fieldLabel: 'Competición (id)',
            name: 'competicionAtletaResultado',
            id: 'competicionAtletaResultado',
            allowBlank: false
        }, {
        	flex: 1,
            xtype: 'textfield',
            fieldLabel: 'Prueba (id)',
            name: 'pruebaAtletaResultado',
            id: 'pruebaAtletaResultado',
            allowBlank: false
        }, {
        	flex: 1,
            xtype: 'textfield',
            fieldLabel: 'Marca (mm:ss.ms)',
            name: 'marcaAtletaResultado',
            id: 'marcaAtletaResultado',
            allowBlank: false
        }]
    }],

    buttons: [{
        text: 'Cancelar',
        handler: 'cancelarResultado'
    }, {
        text: 'Guardar',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: 'guardarResultado'
    }]
});