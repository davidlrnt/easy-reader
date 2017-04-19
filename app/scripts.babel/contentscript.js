'use strict';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    switch(request.action) {
    case 'init':
        console.log('init')
        init();
        break;
    default:
        console.log('defaut')
		}
  }
);

const init = () => {
  $.get(chrome.extension.getURL("templates/test.html"), function(content){console.log("got content", content)}, 'html')
  $('*').mouseenter(function (evt) {
    evt.stopPropagation();
    $(this).addClass('ezrdr-focused');
    $(this).on('click', function (evt) {
      $('*').unbind("mouseenter");

      evt.stopPropagation();
      overlay($(this).contents());
    });
  });

  $('*').mouseout(function () {
    $(this).removeClass('ezrdr-focused');
    $(this).off( 'click');
  });
}

const overlay = (content) => {
  let overlayDiv = document.createElement('div');
  let closeButton = document.createElement('button');

  closeButton.innerHTML = 'Go Back';
  
  overlayDiv.style.cssText = 'position:fixed;top:0;width:100%;height:100%;opacity:0.9;z-index:100;background:white;';

  $(overlayDiv).append(closeButton);
  $(overlayDiv).append(content);
  $(closeButton).on('click', function(){$(overlayDiv).remove()})
  document.body.appendChild(overlayDiv);
}

