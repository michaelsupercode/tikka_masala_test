"use strict";var foundation=foundation||{};foundation.plugin=foundation.plugin||{};foundation.plugin.googleAnalytics4=(()=>{var Y=Object.create;var A=Object.defineProperty;var W=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty;var N=(n,o)=>()=>(o||n((o={exports:{}}).exports,o),o.exports),j=(n,o)=>{for(var e in o)A(n,e,{get:o[e],enumerable:!0})},x=(n,o,e,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of G(o))!q.call(n,i)&&i!==e&&A(n,i,{get:()=>o[i],enumerable:!(t=W(o,i))||t.enumerable});return n};var h=(n,o,e)=>(e=n!=null?Y($(n)):{},x(o||!n||!n.__esModule?A(e,"default",{value:n,enumerable:!0}):e,n)),K=n=>x(A({},"__esModule",{value:!0}),n);var F=N(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.ErrorCodes=void 0;S.ErrorCodes={FALLBACK_DRM_ERROR:1e4,AUTHENTICATION_FAILED:11e3,TOKEN_PROBLEM:11100,TOKEN_INVALID:11110,TOKEN_MISSING:11120,PERMISSION_PROBLEM:11200,PAY_PERMISSION_MISSING:11210,DOWNLOAD_PERMISSION_MISSING:11220,RIGHTS_RESTRICTIONS_NOT_MET:12e3,GEOBLOCKING:12100,USING_OF_AN_ANONYM_PROXY_OR_VPN:12110,LOCATION_NOT_ALLOWED:12120,HDCP_REQUIREMENT_NOT_FULFILLED:12300,DEVICE_IS_DENYLISTED_BY_GOOGLE_FOR_WIDEVINE:12400,LICENSE:13e3,LICENSE_EXPIRED:13100,LICENSE_NOT_PERSISTABLE:13200,LICENSE_ENVIRONMENT:13300,INVALID_MISSING_FAIRPLAY_CERTIFICATE_URL:13310,INVALID_FAIRPLAY_CERTIFICATE_DATA:13320,CONTENT:2e4,MEDIA_FORMAT_UNSUPPORTED:20100,AVAILABILITY:21e3,CONTENT_NOT_AVAILABLE:21100,SOURCE_MATERIAL_NOT_AVAILABLE:21110,CONTENT_NOT_DOWNLOADABLE:21200,CLIENT:3e4,NO_PLAYABLE_TRACK_LEFT:30100,NETWORK_PROBLEM:31e3,BAD_INTERNET_CONNECTION:31110,PLATFORM:32e3,UNSUPPORTED_DRM:32100,NO_DRM_OPTION_AVAILABLE_ANY_MORE:32110,DRM_NOT_FULLY_IMPLEMENTED:32120,UNSUPPORTED_STREAM_TECH:32200,NO_MANIFESTS_PLAYABLE:32210,MANIFEST_NOT_SUPPORTED:32220,MAX_CONCURRENT_STREAMS_REACHED:33100,PLAYERCONFIG_PROBLEM:34e3,ADBLOCKER_DETECTED:34100,VIDEOSOURCES_CONFIG:34200,NO_MANIFEST_IN_CONFIG:34210,MISSING_PLAYER_ELEMENT_OR_ID:34300,FAULTY_ADVERTISING_ISLAND_CONFIGURED:34510,PLAYER_ALREADY_DESTROYED:35100,FAULTY_SETUP_FOR_NON_LINEAR_ADVERTISING:35210,MISSING_USER_INTERACTION:35310,OPERATION_ABORTED:35400,OPERATION_ABORTED_PLAY:35410,OPERATION_ABORTED_LOAD:35420,OPERATION_ABORTED_POWER_SAVING:35430,OPERATION_ABORTED_VIDEO_REMOVED:35440,DEPENDENCY:4e4,V3_UNAVAILABLE:41100,ENTITLEMENT_UNAVAILABLE:41200,DB_UNAVAILABLE:41300,GOOGLE_WIDEVINE_UNAVAILABLE:41400,MANIFEST_API_UNAVAILABLE:41500,OTHER_UNAVAILABLE:41600,ATV_SCHEDULER_UNAVAILABLE:41700,STUS_UNAVAILABLE:41800,ATV_SCHEDULER_REQUEST_FAILED_HTTP_STATUS_CODE_4XX:42700,ATV_SCHEDULER_REQUEST_FAILED_HTTP_STATUS_CODE_5XX:42710,STUS_RETURNS_4XX_ERROR:42800,ATV_SCHEDULER_REQUEST_TIMED_OUT:43700,INTERNAL_PLAYER_ERROR:5e4,UNEXPECTED_EVENT:51e3,PLAYER_DEPENDENCIES_COULD_NOT_BE_LOADED:52110,PLAYER_DEPENDENCY_MISSING:52120,PLAYER_DEPENDENCY_INVALID:52130,ERROR_NOT_TREATED:59e3}});var u=N(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.ErrorCodes=void 0;var z=F();Object.defineProperty(T,"ErrorCodes",{enumerable:!0,get:function(){return z.ErrorCodes}})});var oe={};j(oe,{GoogleAnalytics4Plugin:()=>E});var f={Opener:"opener",Closer:"closer",Bumper:"bumper",Commercial:"commercial",ContentFrame:"contentframe",Overlay:"overlay",Sponsored:"sponsored",Unknown:"unknown"},m={PreRoll:"PRE_ROLL",MidRoll:"MID_ROLL",PostRoll:"POST_ROLL",NonLinear:"NON_LINEAR"},b={AdStarted:"advertising:AdStarted",AdStopped:"advertising:AdStopped",AdSlotStarted:"advertising:AdSlotStarted",AdSlotStopped:"advertising:AdSlotStopped",AdSlotCompleted:"advertising:AdSlotCompleted"};var g={GrunerUndJahr:"grunerundjahr",RTLPlusWatch:"rtlplusmpawatch",RTLPlusRadio:"rtlplusmparadio",RTLPlusAudiobook:"rtlplusmpaaudiobook",RTLPlusPodcast:"rtlplusmpapodcast",SuperRTLToggo:"superrtltoggo",MediaHub:"mediahub",RTLDigitalNews:"rtldigitalnews",CorporateSites:"corporatesites"},ue={[g.RTLPlusWatch]:{Web:"web",Tizen:"tizen",LG:"lg",Magenta:"magenta",Sky:"sky",Chromecast:"chromecast"},[g.RTLPlusRadio]:{Web:"web",Tizen:"tizen",LG:"lg",Magenta:"magenta",Sky:"sky",Chromecast:"chromecast"},[g.RTLPlusAudiobook]:{Web:"web",Tizen:"tizen",LG:"lg",Magenta:"magenta",Sky:"sky",Chromecast:"chromecast"},[g.RTLPlusPodcast]:{Web:"web",Tizen:"tizen",LG:"lg",Magenta:"magenta",Sky:"sky",Chromecast:"chromecast"},[g.RTLDigitalNews]:{NTV:"ntv",Capital:"capital",Geo:"geo",RTL:"rtl",Sport:"sport",Stern:"stern",Wetter:"wetter"},[g.CorporateSites]:{BusinessPortal:"businessportal",Crime:"crime",GeoTV:"geotv",JournalistenSchule:"journalistenschule",Living:"living",Nitro:"nitro",Passion:"passion",RTLSuper:"rtlsuper",RTLUp:"rtlup",SchlagerLiebe:"schlagerliebe",VOX:"vox"},[g.GrunerUndJahr]:{BabyClub:"babyclub",Brigitte:"brigitte",Eltern:"eltern",EssenUndTrinken:"essenundtrinken",Gala:"gala",Geolino:"geolino",LivingAtHome:"livingathome",SchoenerWohnen:"schoenerwohnen",Urbia:"urbia",VIP:"vip",Vorname:"vorname"}};var C={None:0,Error:10,Warn:20,Info:30,Debug:40,Trace:50};var P={PlayerCreated:"player:PlayerCreated",MediaStarted:"player:MediaStarted",ContentStart:"player:ContentStart",ContentEnd:"player:ContentEnd",SessionStart:"player:SessionStart",SessionEnd:"player:SessionEnd",Destroy:"player:Destroy",HDCPFallback:"player:HDCPFallback",CueEnter:"player:CueEnter",CueExit:"player:CueExit",Error:"player:Error",Muted:"player:Muted",Unmuted:"player:Unmuted",Play:"player:Play",Paused:"player:Paused",PlaybackSpeedChanged:"player:PlaybackSpeedChanged",Playing:"player:Playing",Ready:"player:Ready",Seek:"player:Seek",Seeked:"player:Seeked",StallStarted:"player:StallStarted",StallEnded:"player:StallEnded",TimeChanged:"player:TimeChanged",VolumeChanged:"player:VolumeChanged",AudioTrackSelected:"player:AudioTrackSelected",TextTrackSelected:"player:SubtitlesSelected",SubtitlesSelected:"player:SubtitlesSelected",MetadataUpdated:"player:MetadataUpdated"};var Z=h(u());var L=h(u());var c=n=>{var e;if(!n){let t=new Error("Cannot return a logger for an empty namespace");throw Object.assign(t,{code:L.ErrorCodes.INTERNAL_PLAYER_ERROR}),t}let o=(e=window.foundation)==null?void 0:e.logger;if(!o){let t=new Error("Logger on the window object wasn't initialized yet when getLogger() was called");throw Object.assign(t,{code:L.ErrorCodes.PLAYER_DEPENDENCY_MISSING}),t}return o.getLogger(n)},Ae=C.Warn;var ee=h(u());var te=h(u());var ie=h(u());var re=h(u());var ae=h(u());var se=h(u());var ne=h(u()),p={...P,UpdateMetaData:"player:UpdateMetaData",TimedMetadata:"player:TimedMetadata",MetricAdded:"player:MetricAdded",PlayerLoaded:"player:PlayerLoaded",MediaLoad:"player:MediaLoad",MediaLoaded:"player:MediaLoaded",Destroyed:"player:Destroyed",Metadata:"player:Metadata",PlaybackFinished:"player:PlaybackFinished",ContentReady:"player:ContentReady",SourceLoaded:"player:SourceLoaded",SourceUnloaded:"player:SourceUnloaded",StallingFix:"player:StallingFix",MediaAdaptation:"player:MediaAdaptation",AutoplaySuccessful:"player:AutoplaySuccessful",TrackChanged:"player:TrackChanged",KeySystemSelected:"player:KeySystemSelected"};var v={...b,AdSlotsCreated:"advertising:AdSlotsCreated",InitAdSlot:"advertising:InitAdSlot",AdSlotReady:"advertising:AdSlotReady",PauseAd:"advertising:PauseAd",ResumeAd:"advertising:ResumeAd",SkipAd:"advertising:SkipAd",StartAdSlot:"advertising:StartAdSlot",StopAdSlot:"advertising:StopAdSlot",OpenClickThrough:"advertising:OpenClickThrough",HomadActivation:"advertising:HomadActivation",HomadPenalty:"advertising:HomadPenalty",AdError:"advertising:AdError",AdQuartileReached:"advertising:AdQuartileReached"};var H=class{setPlayer(n){this.player=n}};var E=class extends H{constructor(e){super();this.pluginConfig=e;this.googleAnalyticsLogger=c("plugin.googleAnalytics4.GoogleAnalyticsPlugin");this.startedEventWasFired=!1;this.contentEndedEventWasFired=!1;this.paused=!1}getKey(){return"foundation.plugin.googleAnalytics4"}playerInitialized(){return this.player&&(this.addInitialEvents(),this.addAdvertisingEvents(),this.addContentEvents()),Promise.resolve()}beforeLoadMedia(e){var i,a,r;if(!this.player)return Promise.resolve(e);this.startedEventWasFired=!1,this.contentEndedEventWasFired=!1,this.paused=!1,this.lastTimerTriggered=void 0;let t=this.player.getMediaConfig();return(i=t==null?void 0:t.plugins)!=null&&i[this.getKey()]&&(this.mediaPluginConfig=t.plugins[this.getKey()]),this.mediaMetadata=(t==null?void 0:t.metadata)||{},(a=this.mediaPluginConfig)!=null&&a.firstPublicationDate&&(this.mediaMetadata.firstPublicationDate=this.mediaPluginConfig.firstPublicationDate),(r=this.mediaPluginConfig)!=null&&r.lastPublicationDate&&(this.mediaMetadata.lastPublicationDate=this.mediaPluginConfig.lastPublicationDate),Promise.resolve(e)}addInitialEvents(){this.player&&(this.player.addEventListener(p.Ready,()=>{this.trackPi(`${this.getContentType()}_player_loaded`,{...this.createContentConfig(),[`${this.getContentType()}_player_loaded`]:1})}),this.player.addEventListener(v.AdSlotStarted,()=>{this.trackStart()}),this.player.addEventListener(p.MediaStarted,()=>{this.trackStart()}),this.player.addEventListener(p.MetadataUpdated,e=>{var s;let{title:t,program:i,season:a,lastPublicationDate:r,firstPublicationDate:d}=e.metadata;this.mediaMetadata=(s=this.mediaMetadata)!=null?s:{},this.mediaMetadata.title=t,this.mediaMetadata.program=i,this.mediaMetadata.season=a,this.mediaMetadata.lastPublicationDate=r,this.mediaMetadata.firstPublicationDate=d}))}trackStart(){this.startedEventWasFired||(this.startedEventWasFired=!0,this.trackPi(`${this.getContentType()}_started`,{...this.createContentConfig(),[`${this.getContentType()}_started`]:1}))}addAdvertisingEvents(){var e,t,i,a;(e=this.player)==null||e.addEventListener(v.InitAdSlot,()=>{let r=this.createAdConfig();r&&this.trackPi(`${this.getContentType()}_wb_requested`,{...r,[`${this.getContentType()}_wb_requested`]:1})}),(t=this.player)==null||t.addEventListener(v.AdSlotCompleted,()=>{var d,s;let r=(s=(d=this.player)==null?void 0:d.getAdvertisingAdapter())==null?void 0:s.getCurrentAdSlot();if((r==null?void 0:r.getClips())===0){let l=this.createAdConfig();l&&this.trackPi(`${this.getContentType()}_wb_not_loaded`,{...l,[`${this.getContentType()}_wb_not_loaded`]:1})}}),(i=this.player)==null||i.addEventListener(v.AdStarted,()=>{let r=this.createAdSlotConfig();r&&this.trackPi(`${this.getContentType()}_wb_started`,{...r,[`${this.getContentType()}_wb_started`]:1})}),(a=this.player)==null||a.addEventListener(v.AdStopped,()=>{let r=this.createAdSlotConfig();r&&this.trackPi(`${this.getContentType()}_wb_ended`,{...r,[`${this.getContentType()}_wb_ended`]:1})})}addContentEvents(){var e,t,i,a,r,d;(e=this.player)==null||e.addEventListener(p.ContentStart,()=>{var s;this.contentEndedEventWasFired=!1,this.trackPi(`${this.getContentType()}_content_started`,{...this.createContentConfig(),[`${this.getContentType()}_content_started`]:1,length:Math.ceil(((s=this.player)==null?void 0:s.getDuration("content"))||0)})}),(t=this.player)==null||t.addEventListener(p.Paused,()=>{var s,l;this.startedEventWasFired&&!((l=(s=this.player)==null?void 0:s.getAdvertisingAdapter())!=null&&l.isAd())&&(this.trackPi(`${this.getContentType()}_paused`,this.createContentConfig()),this.paused=!0)}),(i=this.player)==null||i.addEventListener(p.Playing,()=>{var s,l;this.paused&&((s=this.player)!=null&&s.isPlaying())&&!((l=this.player.getAdvertisingAdapter())!=null&&l.isAd())&&(this.trackPi(`${this.getContentType()}_play_resumed`,this.createContentConfig()),this.paused=!1)}),(a=this.player)==null||a.addEventListener(p.Seeked,()=>{this.trackPi(`${this.getContentType()}_seeked`,{...this.createContentConfig(),[`${this.getContentType()}_seeked`]:1})}),(r=this.player)==null||r.addEventListener(p.TimeChanged,()=>{this.trackTimeChanged()}),(d=this.player)==null||d.addEventListener(p.ContentEnd,()=>{this.trackContentEndedOnce()})}trackTimeChanged(){var a,r,d,s;if((r=(a=this.player)==null?void 0:a.getAdvertisingAdapter())!=null&&r.isAd())return;let e=this.pluginConfig.progressTrackingIntervalInSeconds||10,t=Math.floor(((d=this.player)==null?void 0:d.getCurrentTime(!0))||0);if((((s=this.player)==null?void 0:s.getDuration("content"))||0)-t<=3)this.trackContentEndedOnce();else{let l=(this.lastTimerTriggered||0)>t,y=(this.lastTimerTriggered||0)+e<=t;(l||y)&&(this.lastTimerTriggered=t,this.trackPi(`${this.getContentType()}_progressed`,{...this.createContentConfig(),[`${this.getContentType()}_progressed`]:e}))}}trackContentEndedOnce(){var t;if(this.contentEndedEventWasFired)return;this.contentEndedEventWasFired=!0;let e=((t=this.player)==null?void 0:t.getDuration("content"))||0;this.trackPi(`${this.getContentType()}_content_ended`,{...this.createContentConfig(),[`${this.getContentType()}_content_ended`]:1,[`${this.getContentType()}_progressed`]:e-(this.lastTimerTriggered||0)})}trackPi(e,t){var i;window.dataLayer=(i=window.dataLayer)!=null?i:[],window.dataLayer.push({media:void 0}),window.dataLayer.push({event:e,media:t})}createContentConfig(){var t,i,a,r,d,s,l,y,_,R,w,M,D,k,O,I;let e={id:this.getMediaId(),headline:((t=this.mediaPluginConfig)==null?void 0:t.headline)||"",player_version:((i=this.player)==null?void 0:i.getVersion())||"",start_mode:this.isAutoplay()?"auto":"user",type:((a=this.mediaPluginConfig)==null?void 0:a.contentType)||"video"};return(d=(r=this.mediaPluginConfig)==null?void 0:r.tags)!=null&&d.length&&(e.tags=this.mediaPluginConfig.tags),(l=(s=this.mediaPluginConfig)==null?void 0:s.editorialSources)!=null&&l.length&&(e.editorial_sources=this.mediaPluginConfig.editorialSources),(y=this.mediaPluginConfig)!=null&&y.firstPublicationDate&&(e.first_publication_date=this.mediaPluginConfig.firstPublicationDate),(_=this.mediaMetadata)!=null&&_.firstPublicationDate&&(e.first_publication_date=this.mediaMetadata.firstPublicationDate),(R=this.mediaPluginConfig)!=null&&R.firstHeadline&&(e.first_headline=this.mediaPluginConfig.firstHeadline),(w=this.mediaPluginConfig)!=null&&w.lastPublicationDate&&(e.last_publication_date=this.mediaPluginConfig.lastPublicationDate),(M=this.mediaMetadata)!=null&&M.lastPublicationDate&&(e.last_publication_date=this.mediaMetadata.lastPublicationDate),(D=this.mediaPluginConfig)!=null&&D.keywords&&(e.keywords=this.mediaPluginConfig.keywords),(k=this.mediaPluginConfig)!=null&&k.editorialUnit&&(e.editorial_unit=this.mediaPluginConfig.editorialUnit),(O=this.mediaPluginConfig)!=null&&O.embedType&&(e.embed_type=this.mediaPluginConfig.embedType),(I=this.mediaPluginConfig)!=null&&I.playlist&&(e.playlist=this.mediaPluginConfig.playlist),e}isAutoplay(){var e,t;return((t=(e=this.player)==null?void 0:e.getMedia())==null?void 0:t.autoplay)&&this.player.canAutoplay()||!1}createAdSlotConfig(){var r,d,s,l;let e=(d=(r=this.player)==null?void 0:r.getAdvertisingAdapter())==null?void 0:d.getCurrentAdSlot();if(!e){this.googleAnalyticsLogger.error("Advertising tracking called without playing ad.");return}let t=this.mapAdType(e.getType());if(t===void 0||!this.shouldTrackAdClip((s=e.getCurrentClip())==null?void 0:s.type))return;let a=e.getPlayedClips().filter(y=>this.shouldTrackAdClip(y.type)).length;return{...this.createContentConfig(),ad_id:(l=e.getCurrentClip())==null?void 0:l.id,ad_slot:`${this.mapAdType(e.getType())} ${a+1}`,ad_type:t,id:this.getMediaId()}}createAdConfig(){var i,a;let e=(a=(i=this.player)==null?void 0:i.getAdvertisingAdapter())==null?void 0:a.getCurrentAdSlot();if(!e){this.googleAnalyticsLogger.error("Advertising tracking called without playing ad.");return}let t=this.mapAdType(e.getType());if(t!==void 0)return{...this.createContentConfig(),ad_type:t,id:this.getMediaId()}}shouldTrackAdClip(e){switch(e){case f.Commercial:case f.Sponsored:case f.ContentFrame:case f.Overlay:return!0}return!1}mapAdType(e){switch(e){case m.MidRoll:return"midroll";case m.NonLinear:return"nonlinear";case m.PostRoll:return"postroll";case m.PreRoll:return"preroll"}}getMediaId(){var e,t,i,a;return(e=this.mediaPluginConfig)!=null&&e.id?this.mediaPluginConfig.id:(a=(i=(t=this.player)==null?void 0:t.getMediaConfig())==null?void 0:i.id)!=null?a:""}getContentType(){var e;switch((e=this.mediaPluginConfig)==null?void 0:e.contentType){case"audio":case"audioevent":case"audiolivestream":return"audio";case"video":case"videoevent":case"videolivestream":return"video";default:return"video"}}};return K(oe);})();