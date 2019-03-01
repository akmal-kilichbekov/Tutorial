sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/DialogHelper"
], function(UIComponent, JSONModel, DialogHelper) {
    "use strict";

    return UIComponent.extend("rroot.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model
            var oData = {
                word: "Written word is"
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            this._openDialog = new DialogHelper(this.getRootControl());

            this.getRouter().initialize();
        },

        exit: function() {
            this._openDialog.destroy();
            delete this._openDialog;
        },

        openDialog: function() {
            this._openDialog.open();
        }

    });

});