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
  $("*").mouseenter(function (evt) {
    evt.stopPropagation();
    $(this).css({ "border-color": "#C1E0FF",
      "border-width": "5px",
      "border-style": "solid" });
    $(this).on('click', function (evt) {
      evt.stopPropagation();
      $(this).css({
        width: "100%",
        height: "100vh",
        "background-color": "white",
        position: "fixed",
        top: 0,
        left: 0,
        "z-index": 999
      })
    });
  });

  $("*").mouseout(function () {
    $(this).css({ "border-color": "inherit",
      "border-width": "inherit",
      "border-style": "inherit" });
    $(this).off( "click");
  });
}

