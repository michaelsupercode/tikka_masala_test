"use strict";var foundation=foundation||{};foundation.logger=foundation.logger||{};foundation.logger.bundle=(()=>{var f=Object.create;var L=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var M=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var v=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),U=(t,e)=>{for(var r in e)L(t,r,{get:e[r],enumerable:!0})},I=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of h(e))!k.call(t,a)&&a!==r&&L(t,a,{get:()=>e[a],enumerable:!(o=D(e,a))||o.enumerable});return t};var V=(t,e,r)=>(r=t!=null?f(M(t)):{},I(e||!t||!t.__esModule?L(r,"default",{value:t,enumerable:!0}):r,t)),w=t=>I(L({},"__esModule",{value:!0}),t);var C=v(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.ErrorCodes=void 0;d.ErrorCodes={FALLBACK_DRM_ERROR:1e4,AUTHENTICATION_FAILED:11e3,TOKEN_PROBLEM:11100,TOKEN_INVALID:11110,TOKEN_MISSING:11120,PERMISSION_PROBLEM:11200,PAY_PERMISSION_MISSING:11210,DOWNLOAD_PERMISSION_MISSING:11220,RIGHTS_RESTRICTIONS_NOT_MET:12e3,GEOBLOCKING:12100,USING_OF_AN_ANONYM_PROXY_OR_VPN:12110,LOCATION_NOT_ALLOWED:12120,HDCP_REQUIREMENT_NOT_FULFILLED:12300,DEVICE_IS_DENYLISTED_BY_GOOGLE_FOR_WIDEVINE:12400,LICENSE:13e3,LICENSE_EXPIRED:13100,LICENSE_NOT_PERSISTABLE:13200,LICENSE_ENVIRONMENT:13300,INVALID_MISSING_FAIRPLAY_CERTIFICATE_URL:13310,INVALID_FAIRPLAY_CERTIFICATE_DATA:13320,CONTENT:2e4,MEDIA_FORMAT_UNSUPPORTED:20100,AVAILABILITY:21e3,CONTENT_NOT_AVAILABLE:21100,SOURCE_MATERIAL_NOT_AVAILABLE:21110,CONTENT_NOT_DOWNLOADABLE:21200,CLIENT:3e4,NO_PLAYABLE_TRACK_LEFT:30100,NETWORK_PROBLEM:31e3,BAD_INTERNET_CONNECTION:31110,PLATFORM:32e3,UNSUPPORTED_DRM:32100,NO_DRM_OPTION_AVAILABLE_ANY_MORE:32110,DRM_NOT_FULLY_IMPLEMENTED:32120,UNSUPPORTED_STREAM_TECH:32200,NO_MANIFESTS_PLAYABLE:32210,MANIFEST_NOT_SUPPORTED:32220,MAX_CONCURRENT_STREAMS_REACHED:33100,PLAYERCONFIG_PROBLEM:34e3,ADBLOCKER_DETECTED:34100,VIDEOSOURCES_CONFIG:34200,NO_MANIFEST_IN_CONFIG:34210,MISSING_PLAYER_ELEMENT_OR_ID:34300,FAULTY_ADVERTISING_ISLAND_CONFIGURED:34510,PLAYER_ALREADY_DESTROYED:35100,FAULTY_SETUP_FOR_NON_LINEAR_ADVERTISING:35210,MISSING_USER_INTERACTION:35310,OPERATION_ABORTED:35400,OPERATION_ABORTED_PLAY:35410,OPERATION_ABORTED_LOAD:35420,OPERATION_ABORTED_POWER_SAVING:35430,OPERATION_ABORTED_VIDEO_REMOVED:35440,DEPENDENCY:4e4,V3_UNAVAILABLE:41100,ENTITLEMENT_UNAVAILABLE:41200,DB_UNAVAILABLE:41300,GOOGLE_WIDEVINE_UNAVAILABLE:41400,MANIFEST_API_UNAVAILABLE:41500,OTHER_UNAVAILABLE:41600,ATV_SCHEDULER_UNAVAILABLE:41700,STUS_UNAVAILABLE:41800,ATV_SCHEDULER_REQUEST_FAILED_HTTP_STATUS_CODE_4XX:42700,ATV_SCHEDULER_REQUEST_FAILED_HTTP_STATUS_CODE_5XX:42710,STUS_RETURNS_4XX_ERROR:42800,ATV_SCHEDULER_REQUEST_TIMED_OUT:43700,INTERNAL_PLAYER_ERROR:5e4,UNEXPECTED_EVENT:51e3,PLAYER_DEPENDENCIES_COULD_NOT_BE_LOADED:52110,PLAYER_DEPENDENCY_MISSING:52120,PLAYER_DEPENDENCY_INVALID:52130,ERROR_NOT_TREATED:59e3}});var y=v(p=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0});p.ErrorCodes=void 0;var B=C();Object.defineProperty(p,"ErrorCodes",{enumerable:!0,get:function(){return B.ErrorCodes}})});var G={};U(G,{LogLevel:()=>i,LoggerImplementation:()=>u,PLAYER_LOG_QUERY_PARAM_KEY:()=>T,WILDCARD_NAMESPACE:()=>l,createLogger:()=>m,fromString:()=>P,getLogger:()=>b});var _=t=>t!=null&&typeof t=="object"&&!Array.isArray(t);var c=(t,e)=>{let r={...t};return _(t)&&_(e)&&Object.keys(e).forEach(o=>{_(e[o])?o in t?r={...r,[o]:c(t[o],e[o])}:r={...r,[o]:e[o]}:r={...r,[o]:e[o]}}),r};var E={GrunerUndJahr:"grunerundjahr",RTLPlusWatch:"rtlplusmpawatch",RTLPlusRadio:"rtlplusmparadio",RTLPlusAudiobook:"rtlplusmpaaudiobook",RTLPlusPodcast:"rtlplusmpapodcast",SuperRTLToggo:"superrtltoggo",MediaHub:"mediahub",RTLDigitalNews:"rtldigitalnews",CorporateSites:"corporatesites"},j={[E.RTLPlusWatch]:{Web:"web",Tizen:"tizen",LG:"lg",Magenta:"magenta",Sky:"sky",Chromecast:"chromecast"},[E.RTLPlusRadio]:{Web:"web",Tizen:"tizen",LG:"lg",Magenta:"magenta",Sky:"sky",Chromecast:"chromecast"},[E.RTLPlusAudiobook]:{Web:"web",Tizen:"tizen",LG:"lg",Magenta:"magenta",Sky:"sky",Chromecast:"chromecast"},[E.RTLPlusPodcast]:{Web:"web",Tizen:"tizen",LG:"lg",Magenta:"magenta",Sky:"sky",Chromecast:"chromecast"},[E.RTLDigitalNews]:{NTV:"ntv",Capital:"capital",Geo:"geo",RTL:"rtl",Sport:"sport",Stern:"stern",Wetter:"wetter"},[E.CorporateSites]:{BusinessPortal:"businessportal",Crime:"crime",GeoTV:"geotv",JournalistenSchule:"journalistenschule",Living:"living",Nitro:"nitro",Passion:"passion",RTLSuper:"rtlsuper",RTLUp:"rtlup",SchlagerLiebe:"schlagerliebe",VOX:"vox"},[E.GrunerUndJahr]:{BabyClub:"babyclub",Brigitte:"brigitte",Eltern:"eltern",EssenUndTrinken:"essenundtrinken",Gala:"gala",Geolino:"geolino",LivingAtHome:"livingathome",SchoenerWohnen:"schoenerwohnen",Urbia:"urbia",VIP:"vip",Vorname:"vorname"}};var i={None:0,Error:10,Warn:20,Info:30,Debug:40,Trace:50};var l="*";function P(t){let r=Object.entries(i).map(([o,a])=>[o.toLowerCase(),a]);return t.split(",").reduce((o,a)=>{var N;if(!a.includes("="))return o;let[n,s]=a.trim().split("=").map(A=>A.trim()),g=n.includes(".")?n.split("."):[n],O=(N=r.find(([A])=>A===s.toLowerCase()))==null?void 0:N[1];return typeof O=="number"&&o.push([g,O]),o},[]).map(([o,a])=>{let n=o.reverse(),s={[n[0]]:a};for(let g=1;g<n.length;g++)s={[n[g]]:s};return s}).reduce((o,a)=>c(o,a),{})}var T="playerLog";function m(t,e,r){let o=t.logger.bundle,n=new URL(location.href).searchParams.get(T);n&&(e=o.fromString(n));let s=new o.LoggerImplementation(e,l,r);t.logger=Object.assign(s,t.logger);let g=s.getLogger("loader.createPlayer");g.isLoggingActiveForLevel(o.LogLevel.Debug)&&g.debug("Logger initialized with config:",JSON.stringify(e))}var S=V(y()),b=t=>{var r;if(!t){let o=new Error("Cannot return a logger for an empty namespace");throw Object.assign(o,{code:S.ErrorCodes.INTERNAL_PLAYER_ERROR}),o}let e=(r=window.foundation)==null?void 0:r.logger;if(!e){let o=new Error("Logger on the window object wasn't initialized yet when getLogger() was called");throw Object.assign(o,{code:S.ErrorCodes.PLAYER_DEPENDENCY_MISSING}),o}return e.getLogger(t)};var R=i.Warn,u=class t{constructor(e={[l]:R},r=l,o=console){this.configuration=e;this.namespace=r;this.backend=o;this.logLevel=R;this.namespace||(this.namespace=l);let a=this.namespace.split(".");a.push(l);let n=this.configuration;for(let s of a){if(n=s in n?n[s]:n[l],typeof n=="number"){this.logLevel=n;break}if(!n){this.logLevel=R;break}}}getLogger(e){if(!e)return this;let r="foundation.";return e.startsWith(r)&&(e=e.slice(r.length)),new t(this.configuration,e,this.backend)}log(e,r,...o){if(this.isLoggingActiveForLevel(e)){let a=`[${this.namespace}]: ${r}`;switch(e){case i.Trace:this.backend.trace(a,...o);break;case i.Debug:this.backend.debug(a,...o);break;case i.Info:this.backend.info(a,...o);break;case i.Warn:this.backend.warn(a,...o);break;case i.Error:this.backend.error(a,...o);break;case i.None:break}}}getLevel(){return this.logLevel}debug(e,...r){this.log(i.Debug,e,...r)}error(e,...r){this.log(i.Error,e,...r)}info(e,...r){this.log(i.Info,e,...r)}trace(e,...r){this.log(i.Trace,e,...r)}warn(e,...r){this.log(i.Warn,e,...r)}isLoggingActiveForLevel(e){return e<=this.logLevel}};return w(G);})();