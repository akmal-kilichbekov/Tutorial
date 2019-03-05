sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/RatingIndicator",
    "sap/m/Label",
    "sap/m/Button"
], function(Control, RatingIndicator, Label, Button) {
    'use strict';

    return Control.extend("rroot.control.ProductRating", {
        metadata: {
            properties: {
                value: {
                    type: "float",
                    defaultValue: 0
                }
            },
            aggregations: {
                _rating: {

                }
            }
        },
        init: function() {

        }
    });

});