sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
    "use strict";

    return Controller.extend("rroot.controller.InvoiceDetail", {

        onInit: function() {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(oEvent) {
            this.getView().bindElement({
                path: "/" + oEvent.getParameter("arguments").invoicePath,
                model: "customer"
            });
        }
    });
});