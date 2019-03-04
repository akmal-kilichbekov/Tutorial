sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function(Controller) {
    'use strict';

    return Controller.extend("rroot.controller.CustomerList", {
        onPress: function(oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                invoicePath: oItem.getBindingContext("customer").getPath().substr(1)
            });
        }

    });

});