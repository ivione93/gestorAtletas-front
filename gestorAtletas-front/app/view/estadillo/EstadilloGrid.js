Ext.define('gestorAtletas.view.estadillo.EstadilloGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.estadilloGrid',
    id: 'estadilloGrid',
    
    title: 'Generación de estadillos',
    border: true,
    
    columns: [
    	 { text: 'Prueba',  dataIndex: '', flex: 1 },
         { text: 'Nombre', dataIndex: 'nombre', flex: 1 },
         { text: 'Apellidos', dataIndex: 'apellidos', flex: 1 },
         { text: 'Marca', dataIndex: '', flex: 1 },
         { text: 'Lugar', dataIndex: '', flex: 1 },
         { text: 'Categoría', dataIndex: '', flex: 1 },
         { text: 'Puntos', dataIndex: '', flex: 1 }
    ]
    
});