sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
    'use strict';

    return Controller.extend("rroot.controller.InvoiceList", {
        formatter: formatter,

        onInit: function() {
            var oView = new JSONModel({
                currency: "USD"
            });

            this.getView().setModel(oView, "view");
        },

        onFilterInvoice: function(oEvent) {
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");

            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            var oList = this.byId("invoiceList");
            var oItems = oList.getBinding("items");
            oItems.filter(aFilter);
        },

        onNavigate: function(oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                invoicePath: oItem.getBindingContext("invoice").getPath().substr(1)
            });
        }

    });

});