Ext.define('gestorAtletas.view.estadillo.EstadilloSearch', {
    extend: 'Ext.form.Panel',
    alias: 'widget.estadilloSearch',
    id: 'estadilloSearch',
    
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
    				id: 'sexoEstadillo',
    				fieldLabel: 'Sexo',
    				displayField: 'nSexo',
    				valueField: 'idSexo',
    				queryMode: 'local',
    				width: '20%',
    				emptyText: 'Seleccione sexo',
    				flex: 1,
    				store: {
    			        type: 'sexoStore',
    			        autoLoad: true
    			    }
    			}, {
    				xtype: 'combobox',
    				id: 'categoriaEstadillo',
    				fieldLabel: 'Categoria',
    				displayField: 'nCategoria',
    				valueField: 'idCategoria',
    				queryMode: 'local',
    				width: '20%',
    				emptyText: 'Seleccione categoría',
    				flex: 1,
    				store: {
    			        type: 'categoriaStore',
    			        autoLoad: true
    			    }
    			}, {
    				xtype: 'combobox',
    				id: 'ambitoEstadillo',
    				fieldLabel: 'Ámbito',
    				displayField: 'nAmbito',
    				valueField: 'idAmbito',
    				queryMode: 'local',
    				width: '20%',
    				emptyText: 'Seleccione ámbito',
    				flex: 1,
    				store: {
    			        type: 'ambitoStore',
    			        autoLoad: true
    			    }
    			}
    		]
    	}
    ]
    
});