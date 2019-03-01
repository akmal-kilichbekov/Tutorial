sap.ui.define([], function() {
    'use strict';

    return {
        statusText: function(sStatus) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case "A":
                    return resourceBundle.getText("StatusNew");
                case "B":
                    return resourceBundle.getText("StatusProgress");
                case "C":
                    return resourceBundle.getText("StatusCompleted");
                default:
                    return sStatus;
            }
        }
    };

});