(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,n||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:String(n)}function r(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function o(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,a(e,t,"get"))}function s(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,a(e,t,"set"),n),n}var c=Object.freeze({S:"mobile",M:"tablet",L:"desktop"}),l=(Object.freeze({disqus:"5edcd338e9f29f59f3145eb5",facebook:"5f058a3252874c10f6723b3b",instagram:"5e717c8e69966540e4554f05",ivw:"5efefe25b8e05c065164a2e2",pinterest:"5e839a38b8e05c4e491e738e",rewe:"61543ab9cadf5705ef20368d",riddle:"5ef0df6ffabc265f5650e743",sovendus:"5f2bd972f66f0125e264ae21",tracdelight:"5e77acddd8d48d795087425b",twitter:"5e71760b69966540e4554f01",youtube:"5e7ac3fae30e7d1bc1ebf5e8"}),Object.freeze({XS:0,S:415,M:641,L:1001,XL:1280,XXL:1900}),"message:ads"),u="message:gujTracker:track:v1",f="tool:adreload",v="tool:pi",h="tool:track";function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class b{#e=new Map;add(e,t){const n=(this.#e.has(e)?this.#e:this.#e.set(e,new Set)).get(e);return n&&n.add(t),this}remove(e,t){return e||t?e&&!t?this.#t(e):e&&t&&this.#n(e,t):this.#r(),this}#r(){this.#e.clear()}#n(e,t){const n=this.#e.get(e);if(n){for(const[e]of n.entries())if(e===t){n.delete(e);break}0===n.size&&this.#e.delete(e)}}#t(e){const t=this.#e.get(e);t&&(t.clear(),this.#e.delete(e))}dispatch(e,...t){window?.webkit?.messageHandlers?.eventObserver?.postMessage&&window.webkit.messageHandlers.eventObserver.postMessage(e),window?.eventObserver?.postMessage&&window.eventObserver.postMessage(e);const n=this.#e.get(e);return n?(n.forEach((e=>e(...t))),this):this}}function y(e){return null===e?"Null":void 0===e?"Undefined":e.constructor.name}function m(e){return"Object"===y(e)}function w(e){return"String"===y(e)}function k(e){return w(e)&&e.startsWith("gujTracker")}function O(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}var M=new WeakMap,S=function(){function t(n){e(this,t),O(this,M,{writable:!0,value:void 0}),p(this,"origins",[]),s(this,M,n)}return i(t,[{key:"onMessage",value:function(e){var t=e.origin,n=e.data;return!(function(e){return!(!w(e)||!e.startsWith("setIframeHeight"))||!(!m(e)||!("sentinel"in e)||"amp"!==e.sentinel&&"dpa"!==e.sentinel||!("type"in e)||"embed-size"!==e.type)}(n)||this.origins.length&&!this.isOriginMatch(t)||this.ignoreMessage(n))&&(this.handleMessage(o(this,M),n),!0)}},{key:"isOriginMatch",value:function(e){var t=o(this,M).config.get("tenant.name");return this.origins.some((function(n){return e.match(n.replace("[tenantName]",t))}))}},{key:"ignoreMessage",value:function(e){return!1}},{key:"handleMessage",value:function(e,t){}}]),t}();function j(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}var q=new WeakMap,W=new WeakMap,N=new WeakMap,T=new WeakMap,C=function(){function t(n,r){var i=this;e(this,t),A(this,q,{writable:!0,value:void 0}),p(this,"events",new b),A(this,W,{writable:!0,value:void 0}),A(this,N,{writable:!0,value:[]}),A(this,T,{writable:!0,value:function(e){var t,n=j(o(i,N));try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.onMessage(e)){i.events.dispatch("sent",r);break}}}catch(e){n.e(e)}finally{n.f()}}}),s(this,q,n),s(this,W,r),o(this,q).addEventListener("message",o(this,T))}return i(t,[{key:"registerService",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new S(o(this,W)),n=0,r=Object.entries(e);n<r.length;n++){var i=g(r[n],2),a=i[0],s=i[1];t[a]=s}return o(this,N).push(t),t}},{key:"destroy",value:function(){o(this,q).removeEventListener("message",o(this,T))}}]),t}();const L={origins:[window.location.origin,"https://www\\.(dev\\.|stage\\.)?[tenantName]\\.de"],ignoreMessage:function(e){return!["click_next","picked_answer"].includes(null==e?void 0:e.type)},handleMessage:function(e){e.eventObserver.dispatch(v),e.eventObserver.dispatch(f,{frequency:2})}},z={origins:["https://games\\.softgames\\.com","https://tools\\.(dev\\.)?[tenantName]\\.de","https://(dev\\.)?weblications\\.guj\\.de"],ignoreMessage:function(e){return!w(e)},handleMessage:function(e,t){var n=g(t.match(/^([\w.]+):*(.*)$/),3),r=n[1],i=n[2],a=void 0===i?null:i;e.eventObserver.dispatch("message:".concat(r.replace(/\./g,":")),JSON.parse(a))}};const I={origins:["https://embed\\.dpa-electionslive\\.com","https://ticker\\.[tenantName]\\.de"],ignoreMessage:function(e){return function(e){return w(e)&&e.startsWith("scrollToAnchor")}(e)||"postUri"===(null==e?void 0:e.request)||"view"===(null==e?void 0:e.type)},handleMessage:function(e){e.eventObserver.dispatch(v),e.eventObserver.dispatch(f,{frequency:2})}};var _=["einmalbetrag","sparplan","entnahmeplan","einmalbetrag und sparplan","weiter","einzelkonto","gemeinschaftskonto","geschäftskonto","kinderkonto","nachhaltigkeit","performance","geringe gebühren","webinare und events","persönliche beratung","viele anlagestrategien","ohne auswahl weiter","konservativ","ausgeglichen","risikoaffin","berechnen","fee","performance","activity","strategies","ring-chart","open-detail","details-changed"];const $={origins:["https://(.*)?\\.fmh\\.de"],ignoreMessage:function(e){if(k(e))try{var t=g(e.match(/^([\w.]+):?([\w.]+)?:*(.*)$/),4)[3],n=void 0===t?null:t,r=JSON.parse(n);return!["click","change"].includes(r.type)}catch(e){return console.error("Failed to parse JSON config.",e),!0}return!(m(e)&&"eventAction"in e&&"eventLabel"in e&&w(e.eventLabel)&&"click"===e.eventAction&&_.includes(e.eventLabel))},handleMessage:function(e){e.eventObserver.dispatch(v),e.eventObserver.dispatch(f,{frequency:2})}},x={origins:["https://(.*)?\\.homeday\\.de"],ignoreMessage:function(e){return!k(e)},handleMessage:function(e,t){var n=g(t.match(/^([\w.]+):*(.*)$/),3),r=n[1],i=n[2],a=void 0===i?null:i,o=JSON.parse(a);o.frequency.game="homeday",e.eventObserver.dispatch("message:".concat(r.replace(/\./g,":")),o)}};const J={origins:["https://spiele\\.[tenantName]\\.de"],ignoreMessage:function(e){return"click"!==e},handleMessage:function(e){e.eventObserver.dispatch(v),e.eventObserver.dispatch(f,{frequency:2})}};const P={origins:["https://www\\.riddle\\.com"],ignoreMessage:function(e){return!("riddleEvent"in e&&"page-change"===e.riddleEvent||"riddleEvent"in e&&e.riddleEvent.action.startsWith("answer-poll"))},handleMessage:function(e){e.eventObserver.dispatch(v),e.eventObserver.dispatch(f,{frequency:2})}};const U={origins:["https://[tenantName]\\.roomle\\.com"],ignoreMessage:function(e){return!k(e)},handleMessage:function(e,t){try{var n=g(t.match(/^([\w.]+):?([\w.]+)?:*(.*)$/),4)[3],r=void 0===n?null:n,i=JSON.parse(r);"pageview"===(null==i?void 0:i.category)&&(e.eventObserver.dispatch(v),e.eventObserver.dispatch(f,{frequency:2}))}catch(e){console.error("Failed to parse JSON config.",e)}}};const X={origins:[window.location.origin,"https://www\\.(dev\\.|stage\\.)?[tenantName]\\.de"],ignoreMessage:function(e){return!k(e)},handleMessage:function(e,t){var n=g(t.match(/^([\w.]+):*(.*)$/),3)[2],r=void 0===n?null:n,i=JSON.parse(r),a=i.eventCategory,o=i.eventAction,s=i.eventLabel,c=i.trackingPixel;if(c)window.MoltenBundle.createTrackingPixel(c);else{var l=function(){e.eventObserver.dispatch(f,{frequency:2})},u={eventCategory:a,eventAction:o,eventLabel:s};"Ernaehrungstool"===a?"click"===o&&"ergebnis_anzeigen"===s?(e.eventObserver.dispatch(v),l()):"click"!==o&&"filter"!==o&&"remove"!==o||e.eventObserver.dispatch(h,u):"filter"!==o&&"click"!==o||(e.eventObserver.dispatch(h,u),e.eventObserver.dispatch(v),l())}}};const F={origins:["https://app\\.23degrees\\.io"],ignoreMessage:function(e){return"tooltip_open"!==(null==e?void 0:e.action)},handleMessage:function(e){e.eventObserver.dispatch(v),e.eventObserver.dispatch(f,{frequency:2})}},H=[L,z,I,$,x,J,P,U,X,F];function B(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t,n){K(e,t),t.set(e,n)}function K(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}var Q=new WeakMap,R=new WeakMap,V=new WeakMap,Y=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakSet,ne=function(){function t(n,r){var i,a,l=this;e(this,t),K(i=this,a=te),a.add(i),G(this,Q,{writable:!0,value:void 0}),G(this,R,{writable:!0,value:{}}),G(this,V,{writable:!0,value:void 0}),G(this,Y,{writable:!0,value:void 0}),G(this,Z,{writable:!0,value:function(e){var t,n;o(l,V).ads.reloadSpecificAdsByFrequency(o(l,V).config.get("advertising.siteType")===c.S?["mobile_1"]:["rectangle_1","skyscraper_1","skyscraper_3","superbanner_1","wallpaper_1"],null!==(t=null==e||null===(n=e.frequency)||void 0===n?void 0:n.ads)&&void 0!==t?t:1)}}),G(this,ee,{writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.frequency,n=void 0===t?{}:t,r=n.game;delete n.game;for(var i=0,a=Object.keys(n);i<a.length;i++){var s=a[i];if(!r||!n[s])return;o(l,R)[r]=o(l,R)[r]||{},o(l,R)[r][s]=o(l,R)[r][s]||{},o(l,R)[r][s].counter=o(l,R)[r][s].counter||0,o(l,R)[r][s].frequency=o(l,R)[r][s].frequency||n[s],o(l,R)[r][s].counter++,"ads"!==s&&o(l,R)[r][s].counter%o(l,R)[r][s].frequency!=0||o(l,V).eventObserver.dispatch("message:".concat(s),e)}o(l,V).log.info("MessageObserver",e)}}),s(this,Q,n),s(this,V,r)}return i(t,[{key:"init",value:function(){o(this,V).eventObserver.add(l,o(this,Z)),o(this,V).eventObserver.add(u,o(this,ee)),s(this,Y,function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(this,te,re).call(this))}},{key:"destroy",value:function(){o(this,V).eventObserver.remove(l,o(this,Z)),o(this,V).eventObserver.remove(u,o(this,ee)),o(this,Y).destroy()}}]),t}();function re(){var e,t=new C(o(this,Q),o(this,V)),n=B(H);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.registerService(r)}}catch(e){n.e(e)}finally{n.f()}return t}var ie=window.gujService,ae=window;ae instanceof Window&&ie&&!ie.isAlreadyExecuted("file:///usr/src/app/client/site/partials/message-handler/scripts/message-handler.js")&&new ne(ae,ie).init()})();