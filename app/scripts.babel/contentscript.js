'use strict';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    switch(request.action) {
    case "init":
        console.log("init")
        break;
    default:
        console.log("defaut")
		}
  }
);