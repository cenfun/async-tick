!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("async-tick",[],t):"object"==typeof exports?exports["async-tick"]=t():e["async-tick"]=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var c in o)e.o(o,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:o[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{debounce:()=>c,microtask:()=>r,throttle:()=>n});class o{start(e){this.callback=e,this.started||(this.started=!0,this.create())}create(){if("function"!=typeof window.queueMicrotask){if("function"!=typeof Promise)throw new Error("Current browser does NOT support queueMicrotask or Promise");Promise.resolve().then((()=>{this.execute()}))}else window.queueMicrotask((()=>{this.execute()}))}execute(){if(!this.started)return;this.started=!1;const e=this.callback;this.callback=null,"function"==typeof e&&e.call(this)}cancel(){this.started=!1,this.callback=null}}const c=function(e){let t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const c=function(){clearTimeout(t),t=setTimeout((()=>{e.apply(this,arguments)}),o)};return c.cancel=()=>{clearTimeout(t)},c},n=function(e){let t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,c=0;const n=function(){const n=Date.now();if(n>c+o)return clearTimeout(t),c=n,void e.apply(this,arguments);clearTimeout(t),t=setTimeout((()=>{c=n,e.apply(this,arguments)}),o)};return n.cancel=()=>{clearTimeout(t),c=0},n},r=function(e){const t=new o,c=function(){t.start((()=>{e.apply(this,arguments)}))};return c.cancel=()=>{t.cancel()},c};return t})()));