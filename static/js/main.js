/*jslint browser: true*/
/*global $, jQuery, alert, console*/
$(document).ready(function () {
  "use strict";
  $(".highlight > pre:has(code[data-lang])").each(function() {
    $(this).addClass("lang");
    var lang = $(this).children("code:first").attr("data-lang");
    $(this).addClass(lang);  // add language named class
  });


  // ref: http://stackoverflow.com/a/9851769/1276501
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';
  // At least Safari 3+: "[object HTMLElementConstructor]"
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;
  // Chrome 1+
  var isChrome = !!window.chrome && !!window.chrome.webstore;
  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;

    // isSafari function only work for safari <= 9.0.3
    // is.js support safari >= 10.0
  if (isSafari || is.safari()) {
    $("body").css('font-family', 'Seravek');
  }
});

