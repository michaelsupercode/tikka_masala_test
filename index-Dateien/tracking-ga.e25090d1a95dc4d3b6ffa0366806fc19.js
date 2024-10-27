(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:String(t)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function s(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function l(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,c(e,t,"get"))}function u(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,c(e,t,"set"),n),n}e.r(t),e.d(t,{hasLocalStorage:()=>b,isMobileViewport:()=>v,isMobileViewportForAdsIVW:()=>h,notificationPermission:()=>f,orientation:()=>p});Object.freeze({S:"mobile",M:"tablet",L:"desktop"}),Object.freeze({disqus:"5edcd338e9f29f59f3145eb5",facebook:"5f058a3252874c10f6723b3b",instagram:"5e717c8e69966540e4554f05",ivw:"5efefe25b8e05c065164a2e2",pinterest:"5e839a38b8e05c4e491e738e",rewe:"61543ab9cadf5705ef20368d",riddle:"5ef0df6ffabc265f5650e743",sovendus:"5f2bd972f66f0125e264ae21",tracdelight:"5e77acddd8d48d795087425b",twitter:"5e71760b69966540e4554f01",youtube:"5e7ac3fae30e7d1bc1ebf5e8"});var d=Object.freeze({XS:0,S:415,M:641,L:1001,XL:1280,XXL:1900});function v(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)<d.L}function h(e,t){return t?window.screen.width<d.M||e:Math.max(document.documentElement.clientWidth,window.innerWidth||0)<d.M||e}function f(){return"Notification"in window&&"permission"in window.Notification?window.Notification.permission:"default"}function p(){return("matchMedia"in window?window.matchMedia("(orientation: portrait)").matches:document.documentElement.clientWidth<=document.documentElement.clientHeight)?"portrait":"landscape"}function b(){try{return Boolean(window.localStorage)}catch(e){return!1}}var g="AdAAdSizesEvent",m="app:adreload-pi",y="bookmarks",w="consent:event",k="device:orientation-change",O="forum:interaction",_="group-gallery:intersect:item",S="link-toc:click",E="message:tracking",T="newsletter-subscription:event",P="notify:track",A="page:back-forward-cache",j="plant-meta:click",M="rewe:track",W="sidebar:update:teaser",C="tool:pi",L="tool:track",I="video:event",D="x-clamp:change";const U={buildVersion:"236",buildDate:"2024-09-25T10:30:14+02:00",buildJob:7913577095};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){return{ad_keywords:e.adKeywords,ad_zone:e.adZone,editorial_sources:e.sources,experiment_id:e.exp,first_headline:e.staticTitle,first_publication_date:e.firstPublicationDate,headline:e.pageTitle,hidden_sources:e.hiddenSources,id:e.id,ivw_code:e.ivwTopic,last_update_date:e.lastModified,main_section:e.mainCategory,molten_bundle_site_type:e.moltenBundleSiteType,number_authors:e.numAuthors,tags:e.technicalTags,type:e.documentType,special_id:e.specialId,sub_section_1:e.subCategory1,sub_section_2:e.subCategory2,sub_section_3:e.subCategory3,sub_type:e.subType}}function V(e){return{current_picture:e.page,number_of_pictures:e.totalPages}}function q(e){return{distribution_channel:e.distribution_channel,hashed_user_id:e.hashedUserId,login_status:e.isLoggedIn,product_content_category:e.paidCategory,product_content_mode:e.paidMode,product_content_status:e.paidStatus,product_user_status:e.paidCategoriesUserStatus,registration_status:e.isRegistered}}function N(e){return{app_version:e.appVersion,delivery_channel:e.deliveryChannel,development_version_id:e.buildVersion,device_orientation:e.orientation}}function R(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);t.buildVersion=U.buildVersion,Array.isArray(t.categories)&&(t.mainCategory=t.categories[0],t.subCategory1=t.categories[1],t.subCategory2=t.categories[2],t.subCategory3=t.categories[3]);var n=new Proxy(t,{get:function(e,t){var n;return null!==(n=e[t])&&void 0!==n?n:"not_set"}});return{content:B(n),gallery:V(n),login:q(n),tech:N(n)}}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t){K(e,t),t.add(e)}function G(e,t,n){K(e,t),t.set(e,n)}function K(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Q(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var Z=new WeakMap,$=new WeakMap,Y=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,ie=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakSet,ce=new WeakMap,le=new WeakMap,ue=new WeakMap,de=new WeakMap,ve=new WeakMap,he=new WeakMap,fe=new WeakMap,pe=new WeakMap,be=new WeakMap,ge=new WeakMap,me=new WeakMap,ye=new WeakMap,we=new WeakMap,ke=new WeakMap,Oe=new WeakMap,_e=new WeakMap,Se=new WeakMap,Ee=new WeakMap,Te=new WeakMap,Pe=new WeakMap,Ae=new WeakMap,je=new WeakMap,Me=new WeakSet,We=new WeakSet,Ce=new WeakSet,Le=new WeakSet,Ie=new WeakSet,De=new WeakSet,Ue=new WeakSet,xe=new WeakSet,Be=new WeakSet,Ve=new WeakSet,qe=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,Ve),F(this,Be),F(this,xe),F(this,Ue),F(this,De),F(this,Ie),F(this,Le),F(this,Ce),F(this,We),F(this,Me),F(this,se),G(this,Z,{writable:!0,value:void 0}),G(this,$,{writable:!0,value:void 0}),G(this,Y,{writable:!0,value:[]}),G(this,ee,{writable:!0,value:void 0}),G(this,te,{writable:!0,value:void 0}),G(this,ne,{writable:!0,value:void 0}),G(this,re,{writable:!0,value:void 0}),G(this,ie,{writable:!0,value:[]}),G(this,ae,{writable:!0,value:void 0}),G(this,oe,{writable:!0,value:void 0}),s(this,"handleAffiliateLinkIntersection",(function(e){var t;!0===e[0].isIntersecting&&e[0].target instanceof HTMLAnchorElement&&(i.trackEvent({eventCategory:"external_link",eventAction:"affiliate_show",eventLabel:e[0].target.href}),null===(t=l(i,Z))||void 0===t||t.unobserve(e[0].target))})),G(this,ce,{writable:!0,value:function(e){var t,n=[];null==e||null===(t=e.detail)||void 0===t||t.forEach((function(e){n.push({dimension80:e.slot,dimension86:e.size,dimension89:e.sitetype,id:e.slot,list:"ads"})}));var r={event:"EECads",ecommerce:{impressions:n}};l(i,Y).push(r),l(i,re).log.info("Push data (adTag impression):",r)}}),G(this,le,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,ue,{writable:!0,value:function(e){var t={eventAction:"add"===e.detail.action?"added":"removed",eventCategory:"Merkliste",eventLabel:"Artikel"};i.trackEvent(t)}}),G(this,de,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,ve,{writable:!0,value:function(){Q(i,Ie,Xe).call(i),Q(i,De,Fe).call(i)}}),G(this,he,{writable:!0,value:function(e,t){Q(i,Me,Re).call(i,e,t)}}),s(this,"handleEmbeddedTeaserClick",(function(e){e.currentTarget instanceof HTMLAnchorElement&&i.trackEvent({eventCategory:"teaser",eventAction:"click",eventLabel:"einklinker_".concat(e.currentTarget.href)})})),s(this,"handleEmbeddedTeaserIntersection",(function(e){!0===e[0].isIntersecting&&e[0].target instanceof HTMLAnchorElement&&i.trackEvent({eventCategory:"teaser",eventAction:"show",eventLabel:"einklinker_".concat(e[0].target.href)})})),G(this,fe,{writable:!0,value:function(e){i.trackEvent({eventCategory:"Newsletter",eventAction:e.action,eventLabel:e.label})}}),G(this,pe,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,be,{writable:!0,value:function(e){var t=e.count,n=e.element,r=e.index,a=e.isEmbeddedGallery,o=e.url;if(v()){if(0===r&&0===t||!n||n.dataset.dntGa||0===r&&!a)return;a||(n.dataset.dntGa="true")}else if(0===t&&0===r)return;var s={virtPath:o};void 0!==r&&(s.page=r+1),Q(i,Ie,Xe).call(i,s)}}),G(this,ge,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,me,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,ye,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,we,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,ke,{writable:!0,value:function(e){i.trackEvent(e)}}),G(this,Oe,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,_e,{writable:!0,value:function(e){if(e.currentTarget instanceof HTMLAnchorElement){var t=e.currentTarget,n=t.dataset,r=t.href;if(n.commerce){r||l(i,re).log.warn("Tracking","Unable to get href attribute from promotion element",e.currentTarget);try{Q(i,We,He).call(i,JSON.parse(n.commerce),r)}catch(e){l(i,re).log.error("Tracking","Unable to parse commerce data from promotion element",e)}}else l(i,re).log.error("Tracking","Unable to get commerce data from promotion element",e.currentTarget)}else l(i,re).log.error("Tracking","Promotion element is not an anchor element",e.currentTarget)}}),G(this,Se,{writable:!0,value:function(e,t){var n=e.filter((function(e){return e.intersectionRatio>0}));n.forEach((function(e){var n=e.target;return t.unobserve(n)}));try{var r=n.map((function(e){var t=e.target;return t instanceof HTMLElement&&t.dataset.commerce?JSON.parse(t.dataset.commerce):""}));r.length>0&&Q(i,Ce,ze).call(i,r)}catch(e){l(i,re).log.error("Tracking","Unable to parse commerce data from promotion element",e)}}}),G(this,Ee,{writable:!0,value:function(){i.trackEvent({eventAction:"click",eventCategory:"button",eventLabel:"rewe"})}}),G(this,Te,{writable:!0,value:function(e){e&&e.element&&Q(i,Be,Qe).call(i,e.element.querySelectorAll("[data-commerce]"))}}),G(this,Pe,{writable:!0,value:function(t){var n,a=t.action;e.videoEventArgs[a]&&(n=Q(i,Le,Je)).call.apply(n,[i].concat(r(e.videoEventArgs[a]),[t]))}}),G(this,Ae,{writable:!0,value:function(){Q(i,Ie,Xe).call(i)}}),G(this,je,{writable:!0,value:function(e){i.trackEvent(e)}}),u(this,re,t),u(this,Y,n),u(this,$,Array.from(document.querySelectorAll(".affiliate-widget__button"))),u(this,te,Array.from(document.querySelectorAll(".js-embedded-teaser"))),u(this,ae,Array.from(document.querySelectorAll("[data-commerce]")))}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e,t;"IntersectionObserver"in window&&(u(this,Z,new IntersectionObserver(this.handleAffiliateLinkIntersection)),Q(this,Ue,Ge).call(this,l(this,$)),u(this,ee,new IntersectionObserver(this.handleEmbeddedTeaserIntersection)),Q(this,xe,Ke).call(this,l(this,te)),u(this,oe,new IntersectionObserver(l(this,Se)))),Q(this,Be,Qe).call(this,l(this,ae)),u(this,ne,null!==(e=l(this,re).config.get("advertising.moltenBundleSiteType"))&&void 0!==e?e:null),(null!==(t=l(this,re).config.get("cache.tracking.data.sourcepointQueue"))&&void 0!==t?t:[]).forEach(this.trackConsentCallbacks.bind(this)),window.sourcepointCallback=this.trackConsentCallbacks.bind(this),Q(this,se,Ne).call(this)}},{key:"trackEvent",value:function(e){var t=X({event:"gaEvent",moltenBundleSiteType:l(this,ne)},e);l(this,Y).push(t),l(this,re).log.info("Tracking","Push data (event):",t)}},{key:"trackConsentCallbacks",value:function(e){var t=X({event:"gaEvent",eventCategory:"sourcepoint_consent",moltenBundleSiteType:l(this,ne)},e);l(this,Y).push(t),l(this,re).log.info("Tracking","Push data (consent callbacks):",t)}},{key:"validatePromotion",value:function(e){return e===Object(e)&&"id"in e&&"name"in e&&"creative"in e&&"position"in e}},{key:"destroy",value:function(){window.removeEventListener(g,l(this,ce)),l(this,re).eventObserver.remove(m,l(this,le)),l(this,re).eventObserver.remove(y,l(this,ue)),l(this,re).eventObserver.remove(w,l(this,he)),l(this,re).eventObserver.remove(k,l(this,ve)),l(this,re).eventObserver.remove(O,l(this,pe)),l(this,re).eventObserver.remove(_,l(this,be)),l(this,re).eventObserver.remove(S,l(this,me)),l(this,re).eventObserver.remove(E,l(this,Oe)),l(this,re).eventObserver.remove(T,l(this,fe)),l(this,re).eventObserver.remove(P,l(this,ke)),l(this,re).eventObserver.remove(A,l(this,de)),l(this,re).eventObserver.remove(j,l(this,ye)),l(this,re).eventObserver.remove(M,l(this,Ee)),l(this,re).eventObserver.remove(W,l(this,Te)),l(this,re).eventObserver.remove(C,l(this,Ae)),l(this,re).eventObserver.remove(L,l(this,je)),l(this,re).eventObserver.remove(I,l(this,Pe)),l(this,re).eventObserver.remove(D,l(this,we))}}])&&o(t.prototype,n),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Ne(){window.addEventListener(g,l(this,ce)),l(this,re).eventObserver.add(m,l(this,le)),l(this,re).eventObserver.add(y,l(this,ue)),l(this,re).eventObserver.add(w,l(this,he)),l(this,re).eventObserver.add(k,l(this,ve)),l(this,re).eventObserver.add(O,l(this,pe)),l(this,re).eventObserver.add(_,l(this,be)),l(this,re).eventObserver.add("group-gallery:navigate",l(this,ge)),l(this,re).eventObserver.add(S,l(this,me)),l(this,re).eventObserver.add(E,l(this,Oe)),l(this,re).eventObserver.add(T,l(this,fe)),l(this,re).eventObserver.add(P,l(this,ke)),l(this,re).eventObserver.add(A,l(this,de)),l(this,re).eventObserver.add(j,l(this,ye)),l(this,re).eventObserver.add(M,l(this,Ee)),l(this,re).eventObserver.add(W,l(this,Te)),l(this,re).eventObserver.add(C,l(this,Ae)),l(this,re).eventObserver.add(L,l(this,je)),l(this,re).eventObserver.add(I,l(this,Pe)),l(this,re).eventObserver.add(D,l(this,we))}function Re(e){var t=e.eventStatus,n=e.purpose,r=e.vendor,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.consentedVendors,o=i.grants,s={event:"gaEvent",eventCategory:"sourcepoint_consent",eventAction:t,eventLabel:"",moltenBundleSiteType:l(this,ne),purpose:n,vendor:r};a&&o&&(s=X(X({},s),{},{consentedVendors:a,grants:o})),l(this,Y).push(s),l(this,re).log.info("Tracking","Push data (consent event):",s)}function He(e,t){if(this.validatePromotion(e)&&Array.isArray(l(this,Y))){var n={event:"EECpromotionClick",ecommerce:{promoClick:{promotions:[e]}},moltenBundleSiteType:l(this,ne)};l(this,Y).push(n),l(this,re).log.info("Tracking","Push data (promotion click):",n)}else l(this,re).log.error("Tracking","Unable to push promotion click into `window.dataLayer`.",{promotion:e})}function ze(e){if(e.every(this.validatePromotion)&&Array.isArray(l(this,Y))){var t={event:"EECpromotionImpression",ecommerce:{promoView:{promotions:e}},moltenBundleSiteType:l(this,ne)};l(this,Y).push(t),l(this,re).log.info("Tracking","Push data (promotion impressions):",t)}else l(this,re).log.error("Tracking","Unable to push promotion impressions into `window.dataLayer`.",{promotions:e})}function Je(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="tracking"in n&&"staticTitle"in n.tracking?n.tracking.staticTitle:"",i="tracking"in n&&"hiddenSources"in n.tracking?n.tracking.hiddenSources:"",a={event:"gaEvent",eventCategory:"Media Tracking",eventLabel:r,moltenBundleSiteType:l(this,ne),adType:n.adType};null!=n&&n.isAudioOnly?(a.eventAction=t,a.audioHiddenSources=i,a.audioId=n.videoId,a.audioPlayer="Brightcove",a.totalAudioTime=n.duration):(a.eventAction=e,a.videoId=n.videoId,a.videoHiddenSources=i),l(this,Y).push(a),l(this,re).log.info("Tracking","Push data (video event):",a)}function Xe(e){var n,r;if(Array.isArray(l(this,Y))){var i,a,o=X(X({},l(this,re).config.get("cache.tracking.data.ga")),(i=l(this,re).config,z(z(z({},function(e){return{orientation:e.orientation()}}(a=t)),function(e){var t=e.get("page.isRestricted");return{paidCategoriesUser:e.get("loginState.userData.categories")?e.get("loginState.userData.categories"):"not_set",paidCategoriesUserStatus:e.get("loginState.userData.trackingStatus")?e.get("loginState.userData.trackingStatus"):"not_set",paidMode:t&&!0===e.get("loginState.hasFullAccess")?"full":t&&!1===e.get("loginState.hasFullAccess")?"partial":"not_set"}}(i)),function(e,t){var n,r,i=t.notificationPermission();return{distribution_channel:e.get("loginState.userData.type")?e.get("loginState.userData.type"):"not_set",hashedUserId:e.get("loginState.userData.hashedUserId")?e.get("loginState.userData.hashedUserId"):"not_set",isLoggedIn:null!==(n=e.get("loginState.isLoggedIn"))&&void 0!==n?n:"not_set",isRegistered:null!==(r=e.get("loginState.isRegistered"))&&void 0!==r?r:"not_set",webPushEnabled:"denied"===i?0:"granted"===i?1:"not_set"}}(i,a)))),s=X(X({},l(this,re).config.get("cache.tracking.data.ga4")),R(o)),c=X(X(X({},o),e),{},{event:"virtPath",moltenBundleSiteType:l(this,ne)}),u=X(X({},s),{},{event:"virt_path"});u.gallery.current_picture=null!==(n=null==e?void 0:e.page)&&void 0!==n?n:"not_set",u.content.virt_path_url=null!==(r=null==e?void 0:e.virtPath)&&void 0!==r?r:"not_set";for(var d=0,v=[c,u];d<v.length;d++){var h=v[d];l(this,Y).push(h),l(this,re).log.info("Tracking","Push data (virtual page view):",h)}}}function Fe(){var e={event:"gaEvent",eventCategory:"orientation_change",eventAction:"portrait"===p()?"landscape":"portrait",eventLabel:document.visibilityState,moltenBundleSiteType:l(this,ne)};Array.isArray(l(this,Y))&&(l(this,Y).push(e),l(this,re).log.info("Tracking","Push data (orientation change):",e))}function Ge(e){var t=this;e.forEach((function(e){var n;null===(n=l(t,Z))||void 0===n||n.observe(e)}))}function Ke(e){var t=this;e.forEach((function(e){var n;null===(n=l(t,ee))||void 0===n||n.observe(e),e.addEventListener("click",t.handleEmbeddedTeaserClick)}))}function Qe(e){var t=this;l(this,oe)&&e.forEach((function(e){var n,r=Q(t,Ve,Ze).call(t,e);(e.dataset.commerce=r,-1===l(t,ie).indexOf(r))&&(l(t,ie).push(r),null===(n=l(t,oe))||void 0===n||n.observe(e));e.addEventListener("click",l(t,_e))}))}function Ze(e){var t=function(e,t,n,r){var i=e.split(";");return[null!==t?t:i[0],null!==n?n:i[1],null!==r?r:i[2]].join(";")};try{var n=JSON.parse(e.dataset.commerce),r=document.querySelector(".article__sidebar");r&&r.contains(e)&&(n.position=t(n.position,"Sidebar","Artikel",null));var i=Array.from(document.querySelectorAll(".article__group--aside .teaser__link[data-commerce]")).indexOf(e);return i>-1&&(n.position=t(n.position,null,null,i+1)),JSON.stringify(n)}catch(e){l(this,re).log.error("Tracking","Unable to parse and enhance commerce data from promotion element",e)}return e.dataset.commerce}s(qe,"videoEventArgs",{"ads:ad-ended":["wb_End","audio_wb_End"],"ads:ad-started":["wb_Start","audio_wb_Start"],"ads:request":["wb_Request","audio_wb_Request"],ended:["eof","audio_eof"],"fullscreen:enter":["exit fullscreen","audio_exit fullscreen"],"fullscreen:exit":["enter fullscreen","audio_enter fullscreen"],"load:start":["PlayerLoad","audio_PlayerLoad"],pause:["pause","audio_pause"],"play:auto":["PlayAuto","audio_PlayAuto"],"play:button":["PlayButton","audio_PlayButton"],"play:initial":["started","audio_started"],"play:resume":["play_resume","audio_play_resume"],play:["play","audio_play"],ready:["videojs Ready","audiojs Ready"],seeked:["seek","audio_seek"],timeupdate:["pos","audio_pos"]});var $e=window.gujService;window.dataLayer=window.dataLayer||[],$e&&!$e.isAlreadyExecuted("file:///usr/src/app/client/site/partials/tracking-ga/scripts/tracking-ga.js")&&new qe($e,window.dataLayer).init()})();