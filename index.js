!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.viewportDetection=t()}(this,function(){"use strict";var n=function(n){return function(t){for(var e in n)if(n[e]){var i=n[e],r=i.min,o=i.max;if(null===o&&t>=r)return e;if(t>=r&&t<o)return e}return null}},t=function(n,t){return-1!=n.indexOf(t)},e=function(e,i){var r=n(e)(i),o=Object.keys(e);return function(n){return t(o,n)?r=n:r}},i=function(n){window.addEventListener("resize",n,!1),window.addEventListener("orientationchange",n,!1)},r=function(t,e,i){var r=i,o=n(t);return e(o(r)),function(n){if(n===r)return!1;var t=o(r=n);return null!==t&&e()!==t&&(e(t),!0)}},o=function(){return"ontouchstart"in window||navigator.maxTouchPoints};return function(n){var t=n||{mobile:{min:0,max:767},tablet:{min:768,max:1023},desktop:{min:1024,max:null}},u=window.innerWidth,c=e(t,u),f=[],a=o(),d=r(t,c,u),l={addCallback:function(n){return"[object Function]"===Object.prototype.toString.call(n)&&(n=[n]),f=f.concat(n),l},getDevice:function(){return c()},getWidth:function(){return u},track:function(){i(function(){var n=window.innerWidth;d(n)&&(u=n,f.forEach(function(t){t(c(),n)}))})},touchAvailable:function(){return a}};return l}});
//# sourceMappingURL=index.js.map
