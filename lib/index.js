(function(a,b){if('function'==typeof define&&define.amd)define(['exports','./manage_device','./track_changes','./size_changed'],b);else if('undefined'!=typeof exports)b(exports,require('./manage_device'),require('./track_changes'),require('./size_changed'));else{var c={exports:{}};b(c.exports,a.manage_device,a.track_changes,a.size_changed),a.index=c.exports}})(this,function(a,b,c,d){'use strict';function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(a,'__esModule',{value:!0});var f=e(b),g=e(c),h=e(d),i=function(){return'ontouchstart'in window||navigator.maxTouchPoints};a.default=function(a){a=a||{mobile:{min:0,max:767},tablet:{min:768,max:992},desktop:{min:993,max:null}};var b=(0,f.default)(a),c=window.innerWidth,d=[],e=i(),j=(0,h.default)(a,b,c);j(c);var k={addCallback:function addCallback(a){return'[object Function]'===Object.prototype.toString.call(a)&&(a=[a]),d=d.concat(a),k},getDevice:function getDevice(){return b()},getWidth:function getWidth(){return c},track:function track(){(0,g.default)(function(){var a=window.innerWidth,e=j(a);e&&(c=a,d.forEach(function(c){c(b(),a)}))})},touchAvailabile:function touchAvailabile(){return e}};return k}});