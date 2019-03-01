sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], function(Controller, MessageToast, JSONModel, ResourceModel, History, UIComponent) {
    "use strict";

    return Controller.extend("rroot.controller.App", {
        openDialog: function() {
            this.getOwnerComponent().openDialog();
        },

        onNavBack: function() {
            var oHistory = History.getInstance();
            var sPrevPage = oHistory.getPreviousHash();

            if (sPrevPage !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("main", {}, true);
            }
        }

    });
});