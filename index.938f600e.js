function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire6c0d;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire6c0d=o),o.register("fINhe",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("fINhe").register(JSON.parse('{"e5iw0":"index.938f600e.js","d3url":"sw.3fef4cb3.js"}'));var i;function l(e,t=!1){t?document.querySelector("output").innerHTML+="<br>"+e:document.querySelector("output").innerHTML=e}i=new URL(o("fINhe").resolve("d3url"),import.meta.url).toString(),window.addEventListener("load",(function(){if("serviceWorker"in navigator){const e=new URL(i);navigator.serviceWorker.register(e,{type:"module",scope:"/"}).then((e=>console.log("[ServiceWorker] Register:",e))).catch((e=>console.error("[ServiceWorker] Register failed:",e)))}let e;"BeforeInstallPromptEvent"in window?l("⏳ BeforeInstallPromptEvent supported but not fired yet"):l("❌ BeforeInstallPromptEvent NOT supported"),window.addEventListener("appinstalled",(e=>{l("✅ AppInstalled fired",!0)})),window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),e=t,document.querySelector("#install").style.display="block",l("✅ BeforeInstallPromptEvent fired",!0)})),document.querySelector("#install").addEventListener("click",(async function(){if(e){e.prompt(),l("🆗 Installation Dialog opened");const{outcome:t}=await e.userChoice;e=null,"accepted"===t?l("😀 User accepted the install prompt.",!0):"dismissed"===t&&l("😟 User dismissed the install prompt"),document.querySelector("#install").style.display="none"}}))}));
//# sourceMappingURL=index.938f600e.js.map
