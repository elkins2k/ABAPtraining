sap.ui.define( [ "sap/ui/core/Control" ], /**
 * @param {typeof sap.ui.core.Control} oControl 
 */
function ( oControl ) {
    "use strict";
    return oControl.extend( "ns.HTML5Module.Custom.MyButton", {
        metadata: {
            properties: {
                "width": {
                    type: "sap.ui.core.CSSSize",
                    defaultValue: "100px"
                },
                "text": {
                    type: "string"
                },
                "height": {
                    type: "sap.ui.core.CSSSize",
                    defaultValue: "50px"
                }
            },
            events: {
                "hover": {}
            }
        },
        renderer:function( oRm, oControl ){
            oRm.write( "<div" );
            oRm.writeControlData( oControl );
            oRm.addStyle( "width", oControl.getProperty( "width" ) );
            oRm.addStyle( "height", oControl.getProperty( "height" ) );
            oRm.writeStyles();
            oRm.write( ">" )
            oRm.write( "<button type = 'button'" );
            oRm.writeControlData( oControl );
            oRm.addStyle( "width", oControl.getProperty( "width" ) );
            oRm.addStyle( "height", oControl.getProperty( "height" ) );
            oRm.writeStyles();
            oRm.write( ">" )
            oRm.write( oControl.getProperty( "text" ) );
            oRm.write( "</button></div>" );   
        },
        onmouseover: function ( event ) {
            this.fireHover();
        }
    })
})