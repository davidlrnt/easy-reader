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

let appState = {

}

let container;

const init = () => {
	if(!container) {
		$.get(chrome.extension.getURL("templates/overlay.html"), function(content){container = content}, 'html')
	}
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
	let overlay = $(container);
  content.clone().appendTo(overlay.find('.ezrdr-content'))
  overlay.find('button').on('click', function () {
    overlay.remove();
  });
  $('body').append(overlay);
}
