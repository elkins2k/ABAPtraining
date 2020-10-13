sap.ui.define( [
    "sap/ui/core/mvc/Controller"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller 
    */
function ( Controller ) {
        "use strict"
        return Controller.extend( "ns.HTML5Module.controller.Detail", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor( this )
                oRouter.getRoute( "detail" ).attachPatternMatched( this._onObjectMatched, this )
            },
            _onObjectMatched: function ( oEvent ) {
                msg = oEvent.getParameter( "arguments" ).Material
                var lbl = this.getView().byId( "idLabel" )
                lbl.setText( "Material Number : " + msg )
            }
        } )
    }
)