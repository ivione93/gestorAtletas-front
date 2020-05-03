/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'gestorAtletas.Application',

    name: 'gestorAtletas',

    requires: [
        // This will automatically load all classes in the gestorAtletas namespace
        // so that application classes do not need to require each other.
        'gestorAtletas.*'
    ],

    // The name of the initial view to create.
    mainView: 'gestorAtletas.view.main.Main'
});
