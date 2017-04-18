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
      console.log("click", $(this).contents());
      overlay($(this).contents());
      // $(this).css({
      //   width: "100%",
      //   height: "100vh",
      //   "background-color": "white",
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   "z-index": 999
      // })
    });
  });

  $("*").mouseout(function () {
    $(this).css({ "border-color": "inherit",
      "border-width": "inherit",
      "border-style": "inherit" });
    $(this).off( "click");
  });
}

const overlay = (content) => {
  console.log("overlay");
  let overlayDiv = document.createElement('div');
  let closeButton = document.createElement('button');

  closeButton.innerHTML = 'Go Back';
  
  overlayDiv.style.cssText = 'position:fixed;top:0;width:100%;height:100%;opacity:0.9;z-index:100;background:white;';

  $(overlayDiv).append(closeButton);
  $(overlayDiv).append(content);
  $(closeButton).on('click', function(){$(overlayDiv).remove()})
  document.body.appendChild(overlayDiv);
}

