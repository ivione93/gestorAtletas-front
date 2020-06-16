Ext.define('gestorAtletas.view.atletas.AtletasSearch', {
    extend: 'Ext.form.Panel',
    alias: 'widget.atletasSearch',
    
    requires: [
        'gestorAtletas.store.SexoStore',
        'gestorAtletas.store.CategoriaStore',
        'gestorAtletas.controller.AtletasController'
    ],
    
    controller: 'atletasController',
    
    items: [
    	{
    		xtype: 'fieldset',
    		title: 'Filtros de búsqueda',
    		border: true,
    		layout: 'hbox',
    		defaults: {
    			margin: 5
    		},
    		items: [
    			{
    				xtype: 'combobox',
    				id: 'categoriaAtleta',
    				fieldLabel: 'Categoria',
    				displayField: 'nCategoria',
    				valueField: 'idCategoria',
    				queryMode: 'local',
    				width: '18%',
    				emptyText: 'Categoría',
    				store: {
    			        type: 'categoriaStore',
    			        autoLoad: true
    			    }
    			}, {
    				xtype: 'textfield',
    				id: 'nombreAtleta',
    				fieldLabel: 'Nombre',
    	            name: 'nombre',
    	            width: '19%',
    			}, {
    				xtype: 'textfield',
    				id: 'apellidosAtleta',
    				fieldLabel: 'Apellidos',
    		        name: 'apellidos',
    		        width: '30%',
    			}, {
    				xtype: 'combobox',
    				id: 'sexoAtleta',
    				fieldLabel: 'Sexo',
    				displayField: 'nSexo',
    				valueField: 'idSexo',
    				queryMode: 'local',
    				width: '18%',
    				emptyText: 'Sexo',
    				store: {
    			        type: 'sexoStore',
    			        autoLoad: true
    			    }
    			}, {
    				xtype: 'textfield',
    				id: 'licenciaAtleta',
    				fieldLabel: 'Licencia',
    		        name: 'licencia',
    		        width: '15%',
    			}
    		]
    	}
    ],
    bbar: [
    	{ xtype: 'button', text: 'Limpiar', handler: 'limpiar' },
    	{ xtype: 'button', text: 'Buscar', handler: 'buscar' }
    ]
});