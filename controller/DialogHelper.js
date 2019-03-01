sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function(ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend("rroot.controller.DialogHelper", {
        constructor: function(oView) {
            this._oView = oView;
        },

        exit: function() {
            delete this._oView;
        },

        open: function() {
            var oView = this._oView;

            if (!oView.byId("openDialog")) {
                var oFragmentController = {
                    closeDialog: function() {
                        oView.byId("openDialog").close();
                    }
                };

                Fragment.load({
                    id: oView.getId(),
                    name: "rroot.view.Dialog"
                }).then(function(oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });

            } else {
                oView.byId("openDialog").open();
            }

        }


    });

});