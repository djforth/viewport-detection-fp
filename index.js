(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.viewportDetection = factory());
}(this, (function () { 'use strict';

var include=function(a,b){return-1!=a.indexOf(b)};var ManageDevice = (function(a){var b='mobile',c=Object.keys(a);return function(a){return(console.log('device',a),!include(c,a))?b:(b=a,b)}});

var TrackChange = (function(a){window.addEventListener('resize',a,!1),window.addEventListener('orientationchange',a,!1);});

var CheckDevice=function(a){return function(b){for(var f in a)if(a[f]){var c=a[f],d=c.min,e=c.max;if(null===e&&b>d)return f;if(b>d&&b<e)return f}return null}};var SizeChanged = (function(a,b,c){var d=c,e=CheckDevice(a);return b(e(d)),function(a){if(a===d)return!1;d=a;var c=e(d);return null!==c&&b()!==c&&(b(c),!0)}});

var isTouchDevice=function(){return'ontouchstart'in window||navigator.maxTouchPoints};var index = (function(a){a=a||{mobile:{min:0,max:767},tablet:{min:768,max:992},desktop:{min:993,max:null}};var b=ManageDevice(a),c=window.innerWidth,d=[],e=isTouchDevice(),f=SizeChanged(a,b,c),g={addCallback:function addCallback(a){return'[object Function]'===Object.prototype.toString.call(a)&&(a=[a]),d=d.concat(a),g},getDevice:function getDevice(){return b()},getWidth:function getWidth(){return c},track:function track(){TrackChange(function(){var a=window.innerWidth,e=f(a);e&&(c=a,d.forEach(function(c){c(b(),a);}));});},touchAvailabile:function touchAvailabile(){return e}};return g});

return index;

})));
//# sourceMappingURL=index.js.map
