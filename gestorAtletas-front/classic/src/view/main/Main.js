/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('gestorAtletas.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'gestorAtletas.view.main.MainController',
        'gestorAtletas.view.main.MainModel',
        'gestorAtletas.view.main.List',
        'gestorAtletas.view.atletas.AtletasView',
        'gestorAtletas.view.estadillo.EstadilloView',
        'gestorAtletas.view.ranking.RankingView',
        'gestorAtletas.view.competiciones.CompeticionesView'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax',
        },
        title: {
            bind: {
                text: 'Gestor Atletas'
            },
            flex: 0,
            height: 5,
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        bodyPadding: 5,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Atletas',
        iconCls: 'fa-running',
        items: [{
            xtype: 'atletasView'
        }]
    }, {
    	title: 'Ranking',
        iconCls: 'fa-award',
        items: [{
            xtype: 'rankingView'
        }]
    }, {
        title: 'Competiciones',
        iconCls: 'fa-calendar-alt',
        items: [{
            xtype: 'competicionesView'
        }]
    },/* {
        title: 'Estadillo',
        iconCls: 'fa-cubes',
        items: [{
            xtype: 'estadilloView'
        }]
    }*/]
});
