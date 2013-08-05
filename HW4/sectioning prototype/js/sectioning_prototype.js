var tabCounter = 1;
function recall(){

  $( ".sorta" ).sortable().disableSelection();
	
	var $tabs = $( "#tabs" ).tabs();
	
	$tabs.find( ".ui-tabs-nav" ).sortable({
    axis: "x",
    stop: function() {
      $tabs.tabs( "refresh" );
    }
  });
	
  var $tab_items = $( "ul:first li", $tabs ).droppable({
    accept: ".connectedSortable li",
		hoverClass: "ui-state-hover",
		drop: function( event, ui ) { 
			var $item = $( this );
			var $list = $( $item.find( "a" ).attr( "href" ))
				.find( ".connectedSortable" );
				
			ui.draggable.hide( "fast", function() {
				$tabs.tabs( "option", "active", $tab_items.index( $item ) );
				$( this ).appendTo( $list );
			});
		}
  });
  var tabTitle = $( "#tab_title" ),
      tabContent = $( "#tab_content" ),
      tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
 
    var tabs = $( "#tabs" ).tabs();
 
    // modal dialog init: custom buttons and a "close" callback reseting the form inside
    var dialog = $( "#dialog" ).dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        Add: function() {
          addTab();
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
      }
    });
 
    // addTab form: calls addTab function on submit and closes the dialog
    var form = dialog.find( "form" ).submit(function( event ) {
      dialog.dialog( "close" );
      event.preventDefault();
    });
 
    // actual addTab function: adds new tab using the input from the form above
    function addTab() {
      var label = tabTitle.val() || "Section " + tabCounter,
        id = "section-" + tabCounter,
        li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) );
      tabs.find( ".ui-tabs-nav" ).append( li );
      tabs.append( "<div id='" + id + "'><ul class = 'sorta connectedSortable ui-helper-reset ' ><li class= 'ui-state-default showup'>Sample Question</li></ul></div><script>recall();</script>" );
      tabs.tabs( "refresh" );
      tabCounter++;
    }
 
    // addTab button: just opens the dialog
    $( "#add_tab" )
      .button()
      .click(function() {
        dialog.dialog( "open" );
      });
 
    // close icon: removing the tab on click
    tabs.delegate( "span.ui-icon-close", "click", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tabs.tabs( "refresh" );
    });
 
    tabs.bind( "keyup", function( event ) {
      if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
        var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        tabs.tabs( "refresh" );
      }
    });
  }