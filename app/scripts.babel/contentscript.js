'use strict';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    switch(request.action) {
    case "init":
        console.log("init")
        init();
        break;
    default:
        console.log("defaut")
		}
  }
);

const init = () => {
	console.log($("*"))
	$("*").mouseenter(function(evt){   
		evt.stopPropagation();
		$(this).addClass( "ez-reader-focused" );
    $(this).css({"border-color": "#C1E0FF", 
             "border-width":"5px", 
             "border-style":"solid"});
	});

	$("*").mouseout(function () {
		console.log("mouseout unbind")
		// $(this).removeAttr('style');
    $(this).css({ "border-color": "inherit",
            "border-width": "inherit",
            "border-style": "inherit" });
    });
		// $('.ez-reader-focused').off('click');

	// $('.ez-reader-focused').on('click', function(evt){
 //    	evt.stopPropagation();
 //    	console.log("CLICK STOP")
 //    })
}