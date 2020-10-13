sap.ui.define( [
    "sap/ui/core/mvc/Controller"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller 
    */
    function ( Controller ) {
        "use strict"
        return Controller.extend( "ns.HTML5Modules.controller.Overview", {
            onInit: function () {
                var jsonModel = new sap.ui.model.json.JSONModel();
                jsonModel.loadData( "model/materialDetails.json" );
                this.getView().byId( "__list0" ).setModel( jsonModel );
            },
            onSelect: function ( oEvent ) {
                var selection = oEvent.getSource().getSelectedItem().getIntro();
                var oRouter = sap.ui.core.UIComponent.getRouterFor( this );
                oRouter.navTo( "detail", {
                    MaterialNum: selection
                } );
            }
        } );
    }
);