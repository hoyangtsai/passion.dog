!function(){function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequire6c0d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},r.parcelRequire6c0d=o),o.register("aMXMs",(function(r,n){var t,o;e(r.exports,"register",(function(){return t}),(function(e){return t=e})),e(r.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)i[r[n]]=e[r[n]]},o=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),o.register("NDYsD",(function(r,n){var t;e(r.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var r=o[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=r),r}})),o("aMXMs").register(JSON.parse('{"7EiNB":"index.e97dc879.js","l8sZQ":"sw.c52014a4.js"}'));var i;i=o("NDYsD").getBundleURL("7EiNB")+o("aMXMs").resolve("l8sZQ"),window.addEventListener("load",(function(){if("serviceWorker"in navigator){const e=new URL(i);navigator.serviceWorker.register(e,{type:"module",scope:"/"}).then((e=>console.log("Service worker registered successfully:",e))).catch((e=>console.error("Service worker registration failed:",e)))}}))}();
//# sourceMappingURL=index.e97dc879.js.map
