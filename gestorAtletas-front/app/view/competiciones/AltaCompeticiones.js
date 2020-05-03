Ext.define('gestorAtletas.view.competiciones.AltaCompeticiones', {
    extend: 'Ext.form.Panel',
    xtype: 'form-register',
    alias: 'widget.altaCompeticiones',
    id: 'altaCompeticiones',
    
    url: Config.server + 'competiciones',
    method: 'POST',
    
    title: 'Info',
    header: false,
	
    bodyPadding: 10,
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    items: [
    	{
    		xtype: 'textfield',
	        fieldLabel: 'Nombre',
	        name: 'nCompeticion',
	        id: 'nCompeticion',
	        allowBlank: false,
	    }, {
	    	xtype: 'datefield',
	        fieldLabel: 'Fecha',
	        name: 'fecha',
	        id: 'fecha',
	        format: 'Y-m-d',
	        altFormats: 'Y-m-d',
	        allowBlank: false,
	    }, {
	    	xtype: 'textfield',
	        fieldLabel: 'Lugar',
	        name: 'lugar',
	        id: 'lugar',
	        allowBlank: false,
	    }, {
	    	html: 'Posibles pruebas'
	    }
	],

    // Reset and Submit buttons
    buttons: [{
        text: 'Cancelar',
        handler: 'cancelar'
    }, {
        text: 'Guardar',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: 'guardar'
    }],
	
	

});