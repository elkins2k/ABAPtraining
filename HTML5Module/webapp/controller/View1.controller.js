sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("ns.HTML5Module.controller.View1", {
            onInit: function () {

            },
            onButtonPress: function () {
                window.alert(this.getView().byId("input0")._lastValue);
            },
            onPressBtn: function () {
                this._getDialog().open();
            },
            _getDialog: function() {
                if ( !this._oDialog ) {
                    this._oDialog = sap.ui.xmlfragment ( "ns.HTML5Module.Fragments.buttonDialog", this );
                    this.getView().addDependent( this._oDialog );
                }
                return this._oDialog;
            },
            onClose: function () {
                this._getDialog().close();
            },
            fnHover: function () {
                sap.m.MessageToast.show( "Hover triggered" );
            }
        });
    });
