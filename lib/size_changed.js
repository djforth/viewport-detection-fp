(function(a,b){if("function"==typeof define&&define.amd)define(["exports"],b);else if("undefined"!=typeof exports)b(exports);else{var c={exports:{}};b(c.exports),a.size_changed=c.exports}})(this,function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=function(a){return function(b){for(var f in a)if(a[f]){var c=a[f],d=c.min,e=c.max;if(null===e&&b>d)return f;if(b>d&&b<e)return f}return null}};a.default=function(a,c,d){var e=d,f=b(a);return function(a){if(a===e)return!1;e=a;var b=f(e);return null!==b&&c()!==b&&(c(b),!0)}}});