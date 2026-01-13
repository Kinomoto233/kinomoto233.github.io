function nf(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const tf="modulepreload",rf=function(e){return"/"+e},jo={},lf=function(n,t,r){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.allSettled(t.map(a=>{if(a=rf(a),a in jo)return;jo[a]=!0;const c=a.endsWith(".css"),$=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${$}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":tf,c||(m.as="script"),m.crossOrigin="",m.href=a,u&&m.setAttribute("nonce",u),document.head.appendChild(m),c)return new Promise((p,y)=>{m.addEventListener("load",p),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=o,window.dispatchEvent(u),!u.defaultPrevented)throw o}return l.then(o=>{for(const u of o||[])u.status==="rejected"&&i(u.reason);return n().catch(i)})};var Bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ku={exports:{}},Jr={},Yu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt=Symbol.for("react.element"),uf=Symbol.for("react.portal"),af=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),df=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),$f=Symbol.for("react.memo"),vf=Symbol.for("react.lazy"),Do=Symbol.iterator;function hf(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Zu={};function rt(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Xu}rt.prototype.isReactComponent={};rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ju(){}Ju.prototype=rt.prototype;function Fi(e,n,t){this.props=e,this.context=n,this.refs=Zu,this.updater=t||Xu}var Ai=Fi.prototype=new Ju;Ai.constructor=Fi;Gu(Ai,rt.prototype);Ai.isPureReactComponent=!0;var Mo=Array.isArray,bu=Object.prototype.hasOwnProperty,Ii={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function na(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)bu.call(n,r)&&!ea.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:qt,type:e,key:i,ref:o,props:l,_owner:Ii.current}}function yf(e,n){return{$$typeof:qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===qt}function _f(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Fo=/\/+/g;function yl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?_f(""+e.key):n.toString(36)}function vr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qt:case uf:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+yl(o,0):r,Mo(l)?(t="",e!=null&&(t=e.replace(Fo,"$&/")+"/"),vr(l,n,t,"",function(c){return c})):l!=null&&(Bi(l)&&(l=yf(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Fo,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Mo(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+yl(i,u);o+=vr(i,n,t,a,l)}else if(a=hf(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+yl(i,u++),o+=vr(i,n,t,a,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function bt(e,n,t){if(e==null)return e;var r=[],l=0;return vr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function gf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},hr={transition:null},zf={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:hr,ReactCurrentOwner:Ii};function ta(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:bt,forEach:function(e,n,t){bt(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return bt(e,function(){n++}),n},toArray:function(e){return bt(e,function(n){return n})||[]},only:function(e){if(!Bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=rt;R.Fragment=af;R.Profiler=cf;R.PureComponent=Fi;R.StrictMode=sf;R.Suspense=mf;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf;R.act=ta;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gu({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Ii.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)bu.call(n,a)&&!ea.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&u!==void 0?u[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:qt,type:e.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:df,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ff,_context:e},e.Consumer=e};R.createElement=na;R.createFactory=function(e){var n=na.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:pf,render:e}};R.isValidElement=Bi;R.lazy=function(e){return{$$typeof:vf,_payload:{_status:-1,_result:e},_init:gf}};R.memo=function(e,n){return{$$typeof:$f,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=hr.transition;hr.transition={};try{e()}finally{hr.transition=n}};R.unstable_act=ta;R.useCallback=function(e,n){return oe.current.useCallback(e,n)};R.useContext=function(e){return oe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};R.useEffect=function(e,n){return oe.current.useEffect(e,n)};R.useId=function(){return oe.current.useId()};R.useImperativeHandle=function(e,n,t){return oe.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return oe.current.useMemo(e,n)};R.useReducer=function(e,n,t){return oe.current.useReducer(e,n,t)};R.useRef=function(e){return oe.current.useRef(e)};R.useState=function(e){return oe.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return oe.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return oe.current.useTransition()};R.version="18.3.1";Yu.exports=R;var br=Yu.exports;const ra=of(br),Um=nf({__proto__:null,default:ra},[br]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=br,wf=Symbol.for("react.element"),kf=Symbol.for("react.fragment"),Ef=Object.prototype.hasOwnProperty,Cf=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xf={key:!0,ref:!0,__self:!0,__source:!0};function la(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Ef.call(n,r)&&!xf.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:wf,type:e,key:i,ref:o,props:l,_owner:Cf.current}}Jr.Fragment=kf;Jr.jsx=la;Jr.jsxs=la;Ku.exports=Jr;var Ao=Ku.exports,Ql={},ia={exports:{}},he={},oa={exports:{}},ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(w,x){var P=w.length;w.push(x);e:for(;0<P;){var H=P-1>>>1,Y=w[H];if(0<l(Y,x))w[H]=x,w[P]=Y,P=H;else break e}}function t(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var x=w[0],P=w.pop();if(P!==x){w[0]=P;e:for(var H=0,Y=w.length,Zt=Y>>>1;H<Zt;){var $n=2*(H+1)-1,hl=w[$n],vn=$n+1,Jt=w[vn];if(0>l(hl,P))vn<Y&&0>l(Jt,hl)?(w[H]=Jt,w[vn]=P,H=vn):(w[H]=hl,w[$n]=P,H=$n);else if(vn<Y&&0>l(Jt,P))w[H]=Jt,w[vn]=P,H=vn;else break e}}return x}function l(w,x){var P=w.sortIndex-x.sortIndex;return P!==0?P:w.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],c=[],$=1,m=null,p=3,y=!1,_=!1,g=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(w){for(var x=t(c);x!==null;){if(x.callback===null)r(c);else if(x.startTime<=w)r(c),x.sortIndex=x.expirationTime,n(a,x);else break;x=t(c)}}function v(w){if(g=!1,d(w),!_)if(t(a)!==null)_=!0,$l(z);else{var x=t(c);x!==null&&vl(v,x.startTime-w)}}function z(w,x){_=!1,g&&(g=!1,f(C),C=-1),y=!0;var P=p;try{for(d(x),m=t(a);m!==null&&(!(m.expirationTime>x)||w&&!Ee());){var H=m.callback;if(typeof H=="function"){m.callback=null,p=m.priorityLevel;var Y=H(m.expirationTime<=x);x=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(a)&&r(a),d(x)}else r(a);m=t(a)}if(m!==null)var Zt=!0;else{var $n=t(c);$n!==null&&vl(v,$n.startTime-x),Zt=!1}return Zt}finally{m=null,p=P,y=!1}}var k=!1,E=null,C=-1,V=5,N=-1;function Ee(){return!(e.unstable_now()-N<V)}function ot(){if(E!==null){var w=e.unstable_now();N=w;var x=!0;try{x=E(!0,w)}finally{x?ut():(k=!1,E=null)}}else k=!1}var ut;if(typeof s=="function")ut=function(){s(ot)};else if(typeof MessageChannel<"u"){var Oo=new MessageChannel,ef=Oo.port2;Oo.port1.onmessage=ot,ut=function(){ef.postMessage(null)}}else ut=function(){O(ot,0)};function $l(w){E=w,k||(k=!0,ut())}function vl(w,x){C=O(function(){w(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){_||y||(_=!0,$l(z))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(w){switch(p){case 1:case 2:case 3:var x=3;break;default:x=p}var P=p;p=x;try{return w()}finally{p=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,x){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var P=p;p=w;try{return x()}finally{p=P}},e.unstable_scheduleCallback=function(w,x,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,w){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=P+Y,w={id:$++,callback:x,priorityLevel:w,startTime:P,expirationTime:Y,sortIndex:-1},P>H?(w.sortIndex=P,n(c,w),t(a)===null&&w===t(c)&&(g?(f(C),C=-1):g=!0,vl(v,P-H))):(w.sortIndex=Y,n(a,w),_||y||(_=!0,$l(z))),w},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(w){var x=p;return function(){var P=p;p=x;try{return w.apply(this,arguments)}finally{p=P}}}})(ua);oa.exports=ua;var Pf=oa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=br,ve=Pf;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aa=new Set,Rt={};function Rn(e,n){Gn(e,n),Gn(e+"Capture",n)}function Gn(e,n){for(Rt[e]=n,e=0;e<n.length;e++)aa.add(n[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,Nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Io={},Bo={};function Tf(e){return Wl.call(Bo,e)?!0:Wl.call(Io,e)?!1:Nf.test(e)?Bo[e]=!0:(Io[e]=!0,!1)}function Lf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,n,t,r){if(n===null||typeof n>"u"||Lf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];b[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){b[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){b[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){b[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){b[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ui=/[\-:]([a-z])/g;function Vi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ui,Vi);b[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ui,Vi);b[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ui,Vi);b[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){b[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});b.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){b[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hi(e,n,t,r){var l=b.hasOwnProperty(n)?b[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Of(n,t,l,r)&&(t=null),r||l===null?Tf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ke=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,er=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),sa=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Wi=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),fa=Symbol.for("react.offscreen"),Uo=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=Uo&&e[Uo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,_l;function vt(e){if(_l===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);_l=n&&n[1]||""}return`
`+_l+e}var gl=!1;function zl(e,n){if(!e||gl)return"";gl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{gl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?vt(e):""}function jf(e){switch(e.tag){case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Ln:return"Portal";case ql:return"Profiler";case Qi:return"StrictMode";case Kl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case sa:return(e._context.displayName||"Context")+".Provider";case Wi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return n=e.displayName||null,n!==null?n:Xl(e.type)||"Memo";case Xe:n=e._payload,e=e._init;try{return Xl(e(n))}catch{}}return null}function Df(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(n);case 8:return n===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mf(e){var n=da(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nr(e){e._valueTracker||(e._valueTracker=Mf(e))}function pa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=da(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Vo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ma(e,n){n=n.checked,n!=null&&Hi(e,"checked",n,!1)}function Zl(e,n){ma(e,n);var t=cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Jl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Jl(e,n.type,cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ho(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Jl(e,n,t){(n!=="number"||Pr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ht=Array.isArray;function Qn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+cn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function bl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(ht(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:cn(t)}}function $a(e,n){var t=cn(n.value),r=cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Wo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function va(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?va(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tr,ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Nt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ff=["Webkit","ms","Moz","O"];Object.keys(gt).forEach(function(e){Ff.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),gt[n]=gt[e]})});function ya(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||gt.hasOwnProperty(e)&&gt[e]?(""+n).trim():n+"px"}function _a(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=ya(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Af=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,n){if(n){if(Af[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function ti(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Wn=null,qn=null;function qo(e){if(e=Xt(e)){if(typeof li!="function")throw Error(h(280));var n=e.stateNode;n&&(n=ll(n),li(e.stateNode,e.type,n))}}function ga(e){Wn?qn?qn.push(e):qn=[e]:Wn=e}function za(){if(Wn){var e=Wn,n=qn;if(qn=Wn=null,qo(e),n)for(e=0;e<n.length;e++)qo(n[e])}}function Sa(e,n){return e(n)}function wa(){}var Sl=!1;function ka(e,n,t){if(Sl)return e(n,t);Sl=!0;try{return Sa(e,n,t)}finally{Sl=!1,(Wn!==null||qn!==null)&&(wa(),za())}}function Tt(e,n){var t=e.stateNode;if(t===null)return null;var r=ll(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var ii=!1;if(He)try{var st={};Object.defineProperty(st,"passive",{get:function(){ii=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{ii=!1}function If(e,n,t,r,l,i,o,u,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch($){this.onError($)}}var zt=!1,Rr=null,Nr=!1,oi=null,Bf={onError:function(e){zt=!0,Rr=e}};function Uf(e,n,t,r,l,i,o,u,a){zt=!1,Rr=null,If.apply(Bf,arguments)}function Vf(e,n,t,r,l,i,o,u,a){if(Uf.apply(this,arguments),zt){if(zt){var c=Rr;zt=!1,Rr=null}else throw Error(h(198));Nr||(Nr=!0,oi=c)}}function Nn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ea(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ko(e){if(Nn(e)!==e)throw Error(h(188))}function Hf(e){var n=e.alternate;if(!n){if(n=Nn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Ko(l),e;if(i===r)return Ko(l),n;i=i.sibling}throw Error(h(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function Ca(e){return e=Hf(e),e!==null?xa(e):null}function xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xa(e);if(n!==null)return n;e=e.sibling}return null}var Pa=ve.unstable_scheduleCallback,Yo=ve.unstable_cancelCallback,Qf=ve.unstable_shouldYield,Wf=ve.unstable_requestPaint,Q=ve.unstable_now,qf=ve.unstable_getCurrentPriorityLevel,Yi=ve.unstable_ImmediatePriority,Ra=ve.unstable_UserBlockingPriority,Tr=ve.unstable_NormalPriority,Kf=ve.unstable_LowPriority,Na=ve.unstable_IdlePriority,el=null,Me=null;function Yf(e){if(Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Zf,Xf=Math.log,Gf=Math.LN2;function Zf(e){return e>>>=0,e===0?32:31-(Xf(e)/Gf|0)|0}var rr=64,lr=4194304;function yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~l;u!==0?r=yt(u):(i&=o,i!==0&&(r=yt(i)))}else o=t&~l,o!==0?r=yt(o):i!==0&&(r=yt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ne(n),l=1<<t,r|=e[t],n&=~l;return r}function Jf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ne(i),u=1<<o,a=l[o];a===-1?(!(u&t)||u&r)&&(l[o]=Jf(u,n)):a<=n&&(e.expiredLanes|=u),i&=~u}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ta(){var e=rr;return rr<<=1,!(rr&4194240)&&(rr=64),e}function wl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ne(n),e[n]=t}function ed(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ne(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Xi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ne(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var L=0;function La(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Oa,Gi,ja,Da,Ma,ai=!1,ir=[],nn=null,tn=null,rn=null,Lt=new Map,Ot=new Map,Ze=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(e,n){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Lt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(n.pointerId)}}function ct(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Xt(n),n!==null&&Gi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function td(e,n,t,r,l){switch(n){case"focusin":return nn=ct(nn,e,n,t,r,l),!0;case"dragenter":return tn=ct(tn,e,n,t,r,l),!0;case"mouseover":return rn=ct(rn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Lt.set(i,ct(Lt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ot.set(i,ct(Ot.get(i)||null,e,n,t,r,l)),!0}return!1}function Fa(e){var n=_n(e.target);if(n!==null){var t=Nn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ea(t),n!==null){e.blockedOn=n,Ma(e.priority,function(){ja(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=si(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ri=r,t.target.dispatchEvent(r),ri=null}else return n=Xt(t),n!==null&&Gi(n),e.blockedOn=t,!1;n.shift()}return!0}function Go(e,n,t){yr(e)&&t.delete(n)}function rd(){ai=!1,nn!==null&&yr(nn)&&(nn=null),tn!==null&&yr(tn)&&(tn=null),rn!==null&&yr(rn)&&(rn=null),Lt.forEach(Go),Ot.forEach(Go)}function ft(e,n){e.blockedOn===n&&(e.blockedOn=null,ai||(ai=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,rd)))}function jt(e){function n(l){return ft(l,e)}if(0<ir.length){ft(ir[0],e);for(var t=1;t<ir.length;t++){var r=ir[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&ft(nn,e),tn!==null&&ft(tn,e),rn!==null&&ft(rn,e),Lt.forEach(n),Ot.forEach(n),t=0;t<Ze.length;t++)r=Ze[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ze.length&&(t=Ze[0],t.blockedOn===null);)Fa(t),t.blockedOn===null&&Ze.shift()}var Kn=Ke.ReactCurrentBatchConfig,Or=!0;function ld(e,n,t,r){var l=L,i=Kn.transition;Kn.transition=null;try{L=1,Zi(e,n,t,r)}finally{L=l,Kn.transition=i}}function id(e,n,t,r){var l=L,i=Kn.transition;Kn.transition=null;try{L=4,Zi(e,n,t,r)}finally{L=l,Kn.transition=i}}function Zi(e,n,t,r){if(Or){var l=si(e,n,t,r);if(l===null)Ol(e,n,r,jr,t),Xo(e,r);else if(td(l,e,n,t,r))r.stopPropagation();else if(Xo(e,r),n&4&&-1<nd.indexOf(e)){for(;l!==null;){var i=Xt(l);if(i!==null&&Oa(i),i=si(e,n,t,r),i===null&&Ol(e,n,r,jr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,n,r,null,t)}}var jr=null;function si(e,n,t,r){if(jr=null,e=Ki(r),e=_n(e),e!==null)if(n=Nn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ea(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return jr=e,null}function Aa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qf()){case Yi:return 1;case Ra:return 4;case Tr:case Kf:return 16;case Na:return 536870912;default:return 16}default:return 16}}var be=null,Ji=null,_r=null;function Ia(){if(_r)return _r;var e,n=Ji,t=n.length,r,l="value"in be?be.value:be.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return _r=l.slice(e,1<r?1-r:void 0)}function gr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function Zo(){return!1}function ye(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?or:Zo,this.isPropagationStopped=Zo,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=ye(lt),Yt=B({},lt,{view:0,detail:0}),od=ye(Yt),kl,El,dt,nl=B({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dt&&(dt&&e.type==="mousemove"?(kl=e.screenX-dt.screenX,El=e.screenY-dt.screenY):El=kl=0,dt=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:El}}),Jo=ye(nl),ud=B({},nl,{dataTransfer:0}),ad=ye(ud),sd=B({},Yt,{relatedTarget:0}),Cl=ye(sd),cd=B({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=ye(cd),dd=B({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=ye(dd),md=B({},lt,{data:0}),bo=ye(md),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hd[e])?!!n[e]:!1}function eo(){return yd}var _d=B({},Yt,{key:function(e){if(e.key){var n=$d[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=ye(_d),zd=B({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eu=ye(zd),Sd=B({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),wd=ye(Sd),kd=B({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=ye(kd),Cd=B({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xd=ye(Cd),Pd=[9,13,27,32],no=He&&"CompositionEvent"in window,St=null;He&&"documentMode"in document&&(St=document.documentMode);var Rd=He&&"TextEvent"in window&&!St,Ba=He&&(!no||St&&8<St&&11>=St),nu=" ",tu=!1;function Ua(e,n){switch(e){case"keyup":return Pd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Va(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Nd(e,n){switch(e){case"compositionend":return Va(n);case"keypress":return n.which!==32?null:(tu=!0,nu);case"textInput":return e=n.data,e===nu&&tu?null:e;default:return null}}function Td(e,n){if(jn)return e==="compositionend"||!no&&Ua(e,n)?(e=Ia(),_r=Ji=be=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ba&&n.locale!=="ko"?null:n.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ld[e.type]:n==="textarea"}function Ha(e,n,t,r){ga(r),n=Dr(n,"onChange"),0<n.length&&(t=new bi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var wt=null,Dt=null;function Od(e){es(e,0)}function tl(e){var n=Fn(e);if(pa(n))return e}function jd(e,n){if(e==="change")return n}var Qa=!1;if(He){var xl;if(He){var Pl="oninput"in document;if(!Pl){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Pl=typeof lu.oninput=="function"}xl=Pl}else xl=!1;Qa=xl&&(!document.documentMode||9<document.documentMode)}function iu(){wt&&(wt.detachEvent("onpropertychange",Wa),Dt=wt=null)}function Wa(e){if(e.propertyName==="value"&&tl(Dt)){var n=[];Ha(n,Dt,e,Ki(e)),ka(Od,n)}}function Dd(e,n,t){e==="focusin"?(iu(),wt=n,Dt=t,wt.attachEvent("onpropertychange",Wa)):e==="focusout"&&iu()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Dt)}function Fd(e,n){if(e==="click")return tl(n)}function Ad(e,n){if(e==="input"||e==="change")return tl(n)}function Id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Le=typeof Object.is=="function"?Object.is:Id;function Mt(e,n){if(Le(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Wl.call(n,l)||!Le(e[l],n[l]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,n){var t=ou(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ou(t)}}function qa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ka(){for(var e=window,n=Pr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pr(e.document)}return n}function to(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bd(e){var n=Ka(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qa(t.ownerDocument.documentElement,t)){if(r!==null&&to(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=uu(t,i);var o=uu(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=He&&"documentMode"in document&&11>=document.documentMode,Dn=null,ci=null,kt=null,fi=!1;function au(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fi||Dn==null||Dn!==Pr(r)||(r=Dn,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kt&&Mt(kt,r)||(kt=r,r=Dr(ci,"onSelect"),0<r.length&&(n=new bi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Dn)))}function ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Mn={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Rl={},Ya={};He&&(Ya=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function rl(e){if(Rl[e])return Rl[e];if(!Mn[e])return e;var n=Mn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ya)return Rl[e]=n[t];return e}var Xa=rl("animationend"),Ga=rl("animationiteration"),Za=rl("animationstart"),Ja=rl("transitionend"),ba=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,n){ba.set(e,n),Rn(n,[e])}for(var Nl=0;Nl<su.length;Nl++){var Tl=su[Nl],Vd=Tl.toLowerCase(),Hd=Tl[0].toUpperCase()+Tl.slice(1);dn(Vd,"on"+Hd)}dn(Xa,"onAnimationEnd");dn(Ga,"onAnimationIteration");dn(Za,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Ja,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _t="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(_t));function cu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Vf(r,n,void 0,e),e.currentTarget=null}function es(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;cu(l,u,c),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,c=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;cu(l,u,c),i=a}}}if(Nr)throw e=oi,Nr=!1,oi=null,e}function D(e,n){var t=n[vi];t===void 0&&(t=n[vi]=new Set);var r=e+"__bubble";t.has(r)||(ns(n,e,2,!1),t.add(r))}function Ll(e,n,t){var r=0;n&&(r|=4),ns(t,e,r,n)}var ar="_reactListening"+Math.random().toString(36).slice(2);function Ft(e){if(!e[ar]){e[ar]=!0,aa.forEach(function(t){t!=="selectionchange"&&(Qd.has(t)||Ll(t,!1,e),Ll(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ar]||(n[ar]=!0,Ll("selectionchange",!1,n))}}function ns(e,n,t,r){switch(Aa(n)){case 1:var l=ld;break;case 4:l=id;break;default:l=Zi}t=l.bind(null,n,t,e),l=void 0,!ii||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Ol(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=_n(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}ka(function(){var c=i,$=Ki(t),m=[];e:{var p=ba.get(e);if(p!==void 0){var y=bi,_=e;switch(e){case"keypress":if(gr(t)===0)break e;case"keydown":case"keyup":y=gd;break;case"focusin":_="focus",y=Cl;break;case"focusout":_="blur",y=Cl;break;case"beforeblur":case"afterblur":y=Cl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wd;break;case Xa:case Ga:case Za:y=fd;break;case Ja:y=Ed;break;case"scroll":y=od;break;case"wheel":y=xd;break;case"copy":case"cut":case"paste":y=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=eu}var g=(n&4)!==0,O=!g&&e==="scroll",f=g?p!==null?p+"Capture":null:p;g=[];for(var s=c,d;s!==null;){d=s;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Tt(s,f),v!=null&&g.push(At(s,v,d)))),O)break;s=s.return}0<g.length&&(p=new y(p,_,null,t,$),m.push({event:p,listeners:g}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==ri&&(_=t.relatedTarget||t.fromElement)&&(_n(_)||_[Qe]))break e;if((y||p)&&(p=$.window===$?$:(p=$.ownerDocument)?p.defaultView||p.parentWindow:window,y?(_=t.relatedTarget||t.toElement,y=c,_=_?_n(_):null,_!==null&&(O=Nn(_),_!==O||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=c),y!==_)){if(g=Jo,v="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(g=eu,v="onPointerLeave",f="onPointerEnter",s="pointer"),O=y==null?p:Fn(y),d=_==null?p:Fn(_),p=new g(v,s+"leave",y,t,$),p.target=O,p.relatedTarget=d,v=null,_n($)===c&&(g=new g(f,s+"enter",_,t,$),g.target=d,g.relatedTarget=O,v=g),O=v,y&&_)n:{for(g=y,f=_,s=0,d=g;d;d=Tn(d))s++;for(d=0,v=f;v;v=Tn(v))d++;for(;0<s-d;)g=Tn(g),s--;for(;0<d-s;)f=Tn(f),d--;for(;s--;){if(g===f||f!==null&&g===f.alternate)break n;g=Tn(g),f=Tn(f)}g=null}else g=null;y!==null&&fu(m,p,y,g,!1),_!==null&&O!==null&&fu(m,O,_,g,!0)}}e:{if(p=c?Fn(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var z=jd;else if(ru(p))if(Qa)z=Ad;else{z=Md;var k=Dd}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=Fd);if(z&&(z=z(e,c))){Ha(m,z,t,$);break e}k&&k(e,p,c),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Jl(p,"number",p.value)}switch(k=c?Fn(c):window,e){case"focusin":(ru(k)||k.contentEditable==="true")&&(Dn=k,ci=c,kt=null);break;case"focusout":kt=ci=Dn=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,au(m,t,$);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":au(m,t,$)}var E;if(no)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else jn?Ua(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Ba&&t.locale!=="ko"&&(jn||C!=="onCompositionStart"?C==="onCompositionEnd"&&jn&&(E=Ia()):(be=$,Ji="value"in be?be.value:be.textContent,jn=!0)),k=Dr(c,C),0<k.length&&(C=new bo(C,e,null,t,$),m.push({event:C,listeners:k}),E?C.data=E:(E=Va(t),E!==null&&(C.data=E)))),(E=Rd?Nd(e,t):Td(e,t))&&(c=Dr(c,"onBeforeInput"),0<c.length&&($=new bo("onBeforeInput","beforeinput",null,t,$),m.push({event:$,listeners:c}),$.data=E))}es(m,n)})}function At(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Dr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Tt(e,t),i!=null&&r.unshift(At(e,i,l)),i=Tt(e,n),i!=null&&r.push(At(e,i,l))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fu(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var u=t,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,l?(a=Tt(t,i),a!=null&&o.unshift(At(t,a,u))):l||(a=Tt(t,i),a!=null&&o.push(At(t,a,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Wd=/\r\n?/g,qd=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(qd,"")}function sr(e,n,t){if(n=du(n),du(e)!==n&&t)throw Error(h(425))}function Mr(){}var di=null,pi=null;function mi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $i=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(Xd)}:$i;function Xd(e){setTimeout(function(){throw e})}function jl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),jt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);jt(n)}function ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var it=Math.random().toString(36).slice(2),De="__reactFiber$"+it,It="__reactProps$"+it,Qe="__reactContainer$"+it,vi="__reactEvents$"+it,Gd="__reactListeners$"+it,Zd="__reactHandles$"+it;function _n(e){var n=e[De];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[De]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=mu(e);e!==null;){if(t=e[De])return t;e=mu(e)}return n}e=t,t=e.parentNode}return null}function Xt(e){return e=e[De]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function ll(e){return e[It]||null}var hi=[],An=-1;function pn(e){return{current:e}}function M(e){0>An||(e.current=hi[An],hi[An]=null,An--)}function j(e,n){An++,hi[An]=e.current,e.current=n}var fn={},re=pn(fn),ce=pn(!1),kn=fn;function Zn(e,n){var t=e.type.contextTypes;if(!t)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Fr(){M(ce),M(re)}function $u(e,n,t){if(re.current!==fn)throw Error(h(168));j(re,n),j(ce,t)}function ts(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(h(108,Df(e)||"Unknown",l));return B({},t,r)}function Ar(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,kn=re.current,j(re,e),j(ce,ce.current),!0}function vu(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=ts(e,n,kn),r.__reactInternalMemoizedMergedChildContext=e,M(ce),M(re),j(re,e)):M(ce),j(ce,t)}var Ie=null,il=!1,Dl=!1;function rs(e){Ie===null?Ie=[e]:Ie.push(e)}function Jd(e){il=!0,rs(e)}function mn(){if(!Dl&&Ie!==null){Dl=!0;var e=0,n=L;try{var t=Ie;for(L=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ie=null,il=!1}catch(l){throw Ie!==null&&(Ie=Ie.slice(e+1)),Pa(Yi,mn),l}finally{L=n,Dl=!1}}return null}var In=[],Bn=0,Ir=null,Br=0,_e=[],ge=0,En=null,Be=1,Ue="";function hn(e,n){In[Bn++]=Br,In[Bn++]=Ir,Ir=e,Br=n}function ls(e,n,t){_e[ge++]=Be,_e[ge++]=Ue,_e[ge++]=En,En=e;var r=Be;e=Ue;var l=32-Ne(r)-1;r&=~(1<<l),t+=1;var i=32-Ne(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Be=1<<32-Ne(n)+l|t<<l|r,Ue=i+e}else Be=1<<i|t<<l|r,Ue=e}function ro(e){e.return!==null&&(hn(e,1),ls(e,1,0))}function lo(e){for(;e===Ir;)Ir=In[--Bn],In[Bn]=null,Br=In[--Bn],In[Bn]=null;for(;e===En;)En=_e[--ge],_e[ge]=null,Ue=_e[--ge],_e[ge]=null,Be=_e[--ge],_e[ge]=null}var $e=null,me=null,F=!1,Re=null;function is(e,n){var t=ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function hu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,me=ln(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=En!==null?{id:Be,overflow:Ue}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,me=null,!0):!1;default:return!1}}function yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(F){var n=me;if(n){var t=n;if(!hu(e,n)){if(yi(e))throw Error(h(418));n=ln(t.nextSibling);var r=$e;n&&hu(e,n)?is(r,t):(e.flags=e.flags&-4097|2,F=!1,$e=e)}}else{if(yi(e))throw Error(h(418));e.flags=e.flags&-4097|2,F=!1,$e=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function cr(e){if(e!==$e)return!1;if(!F)return yu(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!mi(e.type,e.memoizedProps)),n&&(n=me)){if(yi(e))throw os(),Error(h(418));for(;n;)is(e,n),n=ln(n.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=ln(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=$e?ln(e.stateNode.nextSibling):null;return!0}function os(){for(var e=me;e;)e=ln(e.nextSibling)}function Jn(){me=$e=null,F=!1}function io(e){Re===null?Re=[e]:Re.push(e)}var bd=Ke.ReactCurrentBatchConfig;function pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function fr(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function _u(e){var n=e._init;return n(e._payload)}function us(e){function n(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function t(f,s){if(!e)return null;for(;s!==null;)n(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=sn(f,s),f.index=0,f.sibling=null,f}function i(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,d,v){return s===null||s.tag!==6?(s=Vl(d,f.mode,v),s.return=f,s):(s=l(s,d),s.return=f,s)}function a(f,s,d,v){var z=d.type;return z===On?$(f,s,d.props.children,v,d.key):s!==null&&(s.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Xe&&_u(z)===s.type)?(v=l(s,d.props),v.ref=pt(f,s,d),v.return=f,v):(v=xr(d.type,d.key,d.props,null,f.mode,v),v.ref=pt(f,s,d),v.return=f,v)}function c(f,s,d,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Hl(d,f.mode,v),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function $(f,s,d,v,z){return s===null||s.tag!==7?(s=wn(d,f.mode,v,z),s.return=f,s):(s=l(s,d),s.return=f,s)}function m(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Vl(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case er:return d=xr(s.type,s.key,s.props,null,f.mode,d),d.ref=pt(f,null,s),d.return=f,d;case Ln:return s=Hl(s,f.mode,d),s.return=f,s;case Xe:var v=s._init;return m(f,v(s._payload),d)}if(ht(s)||at(s))return s=wn(s,f.mode,d,null),s.return=f,s;fr(f,s)}return null}function p(f,s,d,v){var z=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return z!==null?null:u(f,s,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case er:return d.key===z?a(f,s,d,v):null;case Ln:return d.key===z?c(f,s,d,v):null;case Xe:return z=d._init,p(f,s,z(d._payload),v)}if(ht(d)||at(d))return z!==null?null:$(f,s,d,v,null);fr(f,d)}return null}function y(f,s,d,v,z){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,u(s,f,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case er:return f=f.get(v.key===null?d:v.key)||null,a(s,f,v,z);case Ln:return f=f.get(v.key===null?d:v.key)||null,c(s,f,v,z);case Xe:var k=v._init;return y(f,s,d,k(v._payload),z)}if(ht(v)||at(v))return f=f.get(d)||null,$(s,f,v,z,null);fr(s,v)}return null}function _(f,s,d,v){for(var z=null,k=null,E=s,C=s=0,V=null;E!==null&&C<d.length;C++){E.index>C?(V=E,E=null):V=E.sibling;var N=p(f,E,d[C],v);if(N===null){E===null&&(E=V);break}e&&E&&N.alternate===null&&n(f,E),s=i(N,s,C),k===null?z=N:k.sibling=N,k=N,E=V}if(C===d.length)return t(f,E),F&&hn(f,C),z;if(E===null){for(;C<d.length;C++)E=m(f,d[C],v),E!==null&&(s=i(E,s,C),k===null?z=E:k.sibling=E,k=E);return F&&hn(f,C),z}for(E=r(f,E);C<d.length;C++)V=y(E,f,C,d[C],v),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?C:V.key),s=i(V,s,C),k===null?z=V:k.sibling=V,k=V);return e&&E.forEach(function(Ee){return n(f,Ee)}),F&&hn(f,C),z}function g(f,s,d,v){var z=at(d);if(typeof z!="function")throw Error(h(150));if(d=z.call(d),d==null)throw Error(h(151));for(var k=z=null,E=s,C=s=0,V=null,N=d.next();E!==null&&!N.done;C++,N=d.next()){E.index>C?(V=E,E=null):V=E.sibling;var Ee=p(f,E,N.value,v);if(Ee===null){E===null&&(E=V);break}e&&E&&Ee.alternate===null&&n(f,E),s=i(Ee,s,C),k===null?z=Ee:k.sibling=Ee,k=Ee,E=V}if(N.done)return t(f,E),F&&hn(f,C),z;if(E===null){for(;!N.done;C++,N=d.next())N=m(f,N.value,v),N!==null&&(s=i(N,s,C),k===null?z=N:k.sibling=N,k=N);return F&&hn(f,C),z}for(E=r(f,E);!N.done;C++,N=d.next())N=y(E,f,C,N.value,v),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?C:N.key),s=i(N,s,C),k===null?z=N:k.sibling=N,k=N);return e&&E.forEach(function(ot){return n(f,ot)}),F&&hn(f,C),z}function O(f,s,d,v){if(typeof d=="object"&&d!==null&&d.type===On&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case er:e:{for(var z=d.key,k=s;k!==null;){if(k.key===z){if(z=d.type,z===On){if(k.tag===7){t(f,k.sibling),s=l(k,d.props.children),s.return=f,f=s;break e}}else if(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Xe&&_u(z)===k.type){t(f,k.sibling),s=l(k,d.props),s.ref=pt(f,k,d),s.return=f,f=s;break e}t(f,k);break}else n(f,k);k=k.sibling}d.type===On?(s=wn(d.props.children,f.mode,v,d.key),s.return=f,f=s):(v=xr(d.type,d.key,d.props,null,f.mode,v),v.ref=pt(f,s,d),v.return=f,f=v)}return o(f);case Ln:e:{for(k=d.key;s!==null;){if(s.key===k)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){t(f,s.sibling),s=l(s,d.children||[]),s.return=f,f=s;break e}else{t(f,s);break}else n(f,s);s=s.sibling}s=Hl(d,f.mode,v),s.return=f,f=s}return o(f);case Xe:return k=d._init,O(f,s,k(d._payload),v)}if(ht(d))return _(f,s,d,v);if(at(d))return g(f,s,d,v);fr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(t(f,s.sibling),s=l(s,d),s.return=f,f=s):(t(f,s),s=Vl(d,f.mode,v),s.return=f,f=s),o(f)):t(f,s)}return O}var bn=us(!0),as=us(!1),Ur=pn(null),Vr=null,Un=null,oo=null;function uo(){oo=Un=Vr=null}function ao(e){var n=Ur.current;M(Ur),e._currentValue=n}function gi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){Vr=e,oo=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(se=!0),e.firstContext=null)}function we(e){var n=e._currentValue;if(oo!==e)if(e={context:e,memoizedValue:n,next:null},Un===null){if(Vr===null)throw Error(h(308));Un=e,Vr.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return n}var gn=null;function so(e){gn===null?gn=[e]:gn.push(e)}function ss(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,so(n)):(t.next=l.next,l.next=t),n.interleaved=t,We(e,r)}function We(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ge=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function on(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,We(e,t)}return l=r.interleaved,l===null?(n.next=n,so(r)):(n.next=l.next,l.next=n),r.interleaved=n,We(e,t)}function zr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xi(e,t)}}function gu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Hr(e,n,t,r){var l=e.updateQueue;Ge=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var $=e.alternate;$!==null&&($=$.updateQueue,u=$.lastBaseUpdate,u!==o&&(u===null?$.firstBaseUpdate=c:u.next=c,$.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;o=0,$=c=a=null,u=i;do{var p=u.lane,y=u.eventTime;if((r&p)===p){$!==null&&($=$.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var _=e,g=u;switch(p=n,y=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){m=_.call(y,m,p);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,p=typeof _=="function"?_.call(y,m,p):_,p==null)break e;m=B({},m,p);break e;case 2:Ge=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else y={eventTime:y,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},$===null?(c=$=y,a=m):$=$.next=y,o|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if($===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=$,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);xn|=o,e.lanes=o,e.memoizedState=m}}function zu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var Gt={},Fe=pn(Gt),Bt=pn(Gt),Ut=pn(Gt);function zn(e){if(e===Gt)throw Error(h(174));return e}function fo(e,n){switch(j(Ut,n),j(Bt,e),j(Fe,Gt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ei(n,e)}M(Fe),j(Fe,n)}function et(){M(Fe),M(Bt),M(Ut)}function fs(e){zn(Ut.current);var n=zn(Fe.current),t=ei(n,e.type);n!==t&&(j(Bt,e),j(Fe,t))}function po(e){Bt.current===e&&(M(Fe),M(Bt))}var A=pn(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ml=[];function mo(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var Sr=Ke.ReactCurrentDispatcher,Fl=Ke.ReactCurrentBatchConfig,Cn=0,I=null,q=null,X=null,Wr=!1,Et=!1,Vt=0,ep=0;function ee(){throw Error(h(321))}function $o(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Le(e[t],n[t]))return!1;return!0}function vo(e,n,t,r,l,i){if(Cn=i,I=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Sr.current=e===null||e.memoizedState===null?lp:ip,e=t(r,l),Et){i=0;do{if(Et=!1,Vt=0,25<=i)throw Error(h(301));i+=1,X=q=null,n.updateQueue=null,Sr.current=op,e=t(r,l)}while(Et)}if(Sr.current=qr,n=q!==null&&q.next!==null,Cn=0,X=q=I=null,Wr=!1,n)throw Error(h(300));return e}function ho(){var e=Vt!==0;return Vt=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?I.memoizedState=X=e:X=X.next=e,X}function ke(){if(q===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var n=X===null?I.memoizedState:X.next;if(n!==null)X=n,q=e;else{if(e===null)throw Error(h(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},X===null?I.memoizedState=X=e:X=X.next=e}return X}function Ht(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=ke(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=q,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,c=i;do{var $=c.lane;if((Cn&$)===$)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:$,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=m,o=r):a=a.next=m,I.lanes|=$,xn|=$}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=u,Le(r,n.memoizedState)||(se=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,I.lanes|=i,xn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Il(e){var n=ke(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Le(i,n.memoizedState)||(se=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function ds(){}function ps(e,n){var t=I,r=ke(),l=n(),i=!Le(r.memoizedState,l);if(i&&(r.memoizedState=l,se=!0),r=r.queue,yo(vs.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,Qt(9,$s.bind(null,t,r,l,n),void 0,null),G===null)throw Error(h(349));Cn&30||ms(t,n,l)}return l}function ms(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=I.updateQueue,n===null?(n={lastEffect:null,stores:null},I.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function $s(e,n,t,r){n.value=t,n.getSnapshot=r,hs(n)&&ys(e)}function vs(e,n,t){return t(function(){hs(n)&&ys(e)})}function hs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Le(e,t)}catch{return!0}}function ys(e){var n=We(e,1);n!==null&&Te(n,e,1,-1)}function Su(e){var n=je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},n.queue=e,e=e.dispatch=rp.bind(null,I,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=I.updateQueue,n===null?(n={lastEffect:null,stores:null},I.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function _s(){return ke().memoizedState}function wr(e,n,t,r){var l=je();I.flags|=e,l.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function ol(e,n,t,r){var l=ke();r=r===void 0?null:r;var i=void 0;if(q!==null){var o=q.memoizedState;if(i=o.destroy,r!==null&&$o(r,o.deps)){l.memoizedState=Qt(n,t,i,r);return}}I.flags|=e,l.memoizedState=Qt(1|n,t,i,r)}function wu(e,n){return wr(8390656,8,e,n)}function yo(e,n){return ol(2048,8,e,n)}function gs(e,n){return ol(4,2,e,n)}function zs(e,n){return ol(4,4,e,n)}function Ss(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ws(e,n,t){return t=t!=null?t.concat([e]):null,ol(4,4,Ss.bind(null,n,e),t)}function _o(){}function ks(e,n){var t=ke();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&$o(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Es(e,n){var t=ke();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&$o(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cs(e,n,t){return Cn&21?(Le(t,n)||(t=Ta(),I.lanes|=t,xn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,se=!0),e.memoizedState=t)}function np(e,n){var t=L;L=t!==0&&4>t?t:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),n()}finally{L=t,Fl.transition=r}}function xs(){return ke().memoizedState}function tp(e,n,t){var r=an(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ps(e))Rs(n,t);else if(t=ss(e,n,t,r),t!==null){var l=ie();Te(t,e,r,l),Ns(t,n,r)}}function rp(e,n,t){var r=an(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Rs(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,u=i(o,t);if(l.hasEagerState=!0,l.eagerState=u,Le(u,o)){var a=n.interleaved;a===null?(l.next=l,so(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=ss(e,n,l,r),t!==null&&(l=ie(),Te(t,e,r,l),Ns(t,n,r))}}function Ps(e){var n=e.alternate;return e===I||n!==null&&n===I}function Rs(e,n){Et=Wr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ns(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xi(e,t)}}var qr={readContext:we,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},lp={readContext:we,useCallback:function(e,n){return je().memoizedState=[e,n===void 0?null:n],e},useContext:we,useEffect:wu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,wr(4194308,4,Ss.bind(null,n,e),t)},useLayoutEffect:function(e,n){return wr(4194308,4,e,n)},useInsertionEffect:function(e,n){return wr(4,2,e,n)},useMemo:function(e,n){var t=je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=tp.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var n=je();return e={current:e},n.memoizedState=e},useState:Su,useDebugValue:_o,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=Su(!1),n=e[0];return e=np.bind(null,e[1]),je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=I,l=je();if(F){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),G===null)throw Error(h(349));Cn&30||ms(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,wu(vs.bind(null,r,i,e),[e]),r.flags|=2048,Qt(9,$s.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=je(),n=G.identifierPrefix;if(F){var t=Ue,r=Be;t=(r&~(1<<32-Ne(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Vt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ep++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ip={readContext:we,useCallback:ks,useContext:we,useEffect:yo,useImperativeHandle:ws,useInsertionEffect:gs,useLayoutEffect:zs,useMemo:Es,useReducer:Al,useRef:_s,useState:function(){return Al(Ht)},useDebugValue:_o,useDeferredValue:function(e){var n=ke();return Cs(n,q.memoizedState,e)},useTransition:function(){var e=Al(Ht)[0],n=ke().memoizedState;return[e,n]},useMutableSource:ds,useSyncExternalStore:ps,useId:xs,unstable_isNewReconciler:!1},op={readContext:we,useCallback:ks,useContext:we,useEffect:yo,useImperativeHandle:ws,useInsertionEffect:gs,useLayoutEffect:zs,useMemo:Es,useReducer:Il,useRef:_s,useState:function(){return Il(Ht)},useDebugValue:_o,useDeferredValue:function(e){var n=ke();return q===null?n.memoizedState=e:Cs(n,q.memoizedState,e)},useTransition:function(){var e=Il(Ht)[0],n=ke().memoizedState;return[e,n]},useMutableSource:ds,useSyncExternalStore:ps,useId:xs,unstable_isNewReconciler:!1};function xe(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function zi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ul={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),l=an(e),i=Ve(r,l);i.payload=n,t!=null&&(i.callback=t),n=on(e,i,l),n!==null&&(Te(n,e,l,r),zr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),l=an(e),i=Ve(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=on(e,i,l),n!==null&&(Te(n,e,l,r),zr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=an(e),l=Ve(t,r);l.tag=2,n!=null&&(l.callback=n),n=on(e,l,r),n!==null&&(Te(n,e,r,t),zr(n,e,r))}};function ku(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Mt(t,r)||!Mt(l,i):!0}function Ts(e,n,t){var r=!1,l=fn,i=n.contextType;return typeof i=="object"&&i!==null?i=we(i):(l=fe(n)?kn:re.current,r=n.contextTypes,i=(r=r!=null)?Zn(e,l):fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ul,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Eu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ul.enqueueReplaceState(n,n.state,null)}function Si(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},co(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=we(i):(i=fe(n)?kn:re.current,l.context=Zn(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(zi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ul.enqueueReplaceState(l,l.state,null),Hr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,n){try{var t="",r=n;do t+=jf(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Bl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function wi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var up=typeof WeakMap=="function"?WeakMap:Map;function Ls(e,n,t){t=Ve(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Yr||(Yr=!0,Oi=r),wi(e,n)},t}function Os(e,n,t){t=Ve(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){wi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){wi(e,n),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Cu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new up;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=zp.bind(null,e,n,t),n.then(e,e))}function xu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pu(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ve(-1,1),n.tag=2,on(t,n,1))),t.lanes|=1),e)}var ap=Ke.ReactCurrentOwner,se=!1;function le(e,n,t,r){n.child=e===null?as(n,null,t,r):bn(n,e.child,t,r)}function Ru(e,n,t,r,l){t=t.render;var i=n.ref;return Yn(n,l),r=vo(e,n,t,r,i,l),t=ho(),e!==null&&!se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,qe(e,n,l)):(F&&t&&ro(n),n.flags|=1,le(e,n,r,l),n.child)}function Nu(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!xo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,js(e,n,i,r,l)):(e=xr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Mt,t(o,r)&&e.ref===n.ref)return qe(e,n,l)}return n.flags|=1,e=sn(i,r),e.ref=n.ref,e.return=n,n.child=e}function js(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Mt(i,r)&&e.ref===n.ref)if(se=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(se=!0);else return n.lanes=e.lanes,qe(e,n,l)}return ki(e,n,t,r,l)}function Ds(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Hn,pe),pe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,j(Hn,pe),pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,j(Hn,pe),pe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,j(Hn,pe),pe|=r;return le(e,n,l,t),n.child}function Ms(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ki(e,n,t,r,l){var i=fe(t)?kn:re.current;return i=Zn(n,i),Yn(n,l),t=vo(e,n,t,r,i,l),r=ho(),e!==null&&!se?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,qe(e,n,l)):(F&&r&&ro(n),n.flags|=1,le(e,n,t,l),n.child)}function Tu(e,n,t,r,l){if(fe(t)){var i=!0;Ar(n)}else i=!1;if(Yn(n,l),n.stateNode===null)kr(e,n),Ts(n,t,r),Si(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var a=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=we(c):(c=fe(t)?kn:re.current,c=Zn(n,c));var $=t.getDerivedStateFromProps,m=typeof $=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Eu(n,o,r,c),Ge=!1;var p=n.memoizedState;o.state=p,Hr(n,r,o,l),a=n.memoizedState,u!==r||p!==a||ce.current||Ge?(typeof $=="function"&&(zi(n,t,$,r),a=n.memoizedState),(u=Ge||ku(n,t,u,r,p,a,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,cs(e,n),u=n.memoizedProps,c=n.type===n.elementType?u:xe(n.type,u),o.props=c,m=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=we(a):(a=fe(t)?kn:re.current,a=Zn(n,a));var y=t.getDerivedStateFromProps;($=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==a)&&Eu(n,o,r,a),Ge=!1,p=n.memoizedState,o.state=p,Hr(n,r,o,l);var _=n.memoizedState;u!==m||p!==_||ce.current||Ge?(typeof y=="function"&&(zi(n,t,y,r),_=n.memoizedState),(c=Ge||ku(n,t,c,r,p,_,a)||!1)?($||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=_),o.props=r,o.state=_,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Ei(e,n,t,r,i,l)}function Ei(e,n,t,r,l,i){Ms(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&vu(n,t,!1),qe(e,n,i);r=n.stateNode,ap.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=bn(n,e.child,null,i),n.child=bn(n,null,u,i)):le(e,n,u,i),n.memoizedState=r.state,l&&vu(n,t,!0),n.child}function Fs(e){var n=e.stateNode;n.pendingContext?$u(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$u(e,n.context,!1),fo(e,n.containerInfo)}function Lu(e,n,t,r,l){return Jn(),io(l),n.flags|=256,le(e,n,t,r),n.child}var Ci={dehydrated:null,treeContext:null,retryLane:0};function xi(e){return{baseLanes:e,cachePool:null,transitions:null}}function As(e,n,t){var r=n.pendingProps,l=A.current,i=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),j(A,l&1),e===null)return _i(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=cl(o,r,0,null),e=wn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=xi(t),n.memoizedState=Ci,e):go(n,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return sp(e,n,o,r,u,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=sn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=sn(u,i):(i=wn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?xi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Ci,r}return i=e.child,e=i.sibling,r=sn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function go(e,n){return n=cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function dr(e,n,t,r){return r!==null&&io(r),bn(n,e.child,null,t),e=go(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sp(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Bl(Error(h(422))),dr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=cl({mode:"visible",children:r.children},l,0,null),i=wn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&bn(n,e.child,null,o),n.child.memoizedState=xi(o),n.memoizedState=Ci,i);if(!(n.mode&1))return dr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(h(419)),r=Bl(i,r,void 0),dr(e,n,o,r)}if(u=(o&e.childLanes)!==0,se||u){if(r=G,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,We(e,l),Te(r,e,l,-1))}return Co(),r=Bl(Error(h(421))),dr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Sp.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,me=ln(l.nextSibling),$e=n,F=!0,Re=null,e!==null&&(_e[ge++]=Be,_e[ge++]=Ue,_e[ge++]=En,Be=e.id,Ue=e.overflow,En=n),n=go(n,r.children),n.flags|=4096,n)}function Ou(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),gi(e.return,n,t)}function Ul(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Is(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(le(e,n,r.children,t),r=A.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,t,n);else if(e.tag===19)Ou(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(A,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ul(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Qr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ul(n,!0,t,null,i);break;case"together":Ul(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function kr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),xn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=sn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=sn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function cp(e,n,t){switch(n.tag){case 3:Fs(n),Jn();break;case 5:fs(n);break;case 1:fe(n.type)&&Ar(n);break;case 4:fo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;j(Ur,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(j(A,A.current&1),n.flags|=128,null):t&n.child.childLanes?As(e,n,t):(j(A,A.current&1),e=qe(e,n,t),e!==null?e.sibling:null);j(A,A.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Is(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),j(A,A.current),r)break;return null;case 22:case 23:return n.lanes=0,Ds(e,n,t)}return qe(e,n,t)}var Bs,Pi,Us,Vs;Bs=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pi=function(){};Us=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,zn(Fe.current);var i=null;switch(t){case"input":l=Gl(e,l),r=Gl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=bl(e,l),r=bl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mr)}ni(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rt.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(i||(i=[]),i.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rt.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&D("scroll",e),i||u===a||(i=[])):(i=i||[]).push(c,a))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Vs=function(e,n,t,r){t!==r&&(n.flags|=4)};function mt(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function fp(e,n,t){var r=n.pendingProps;switch(lo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return fe(n.type)&&Fr(),ne(n),null;case 3:return r=n.stateNode,et(),M(ce),M(re),mo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(Mi(Re),Re=null))),Pi(e,n),ne(n),null;case 5:po(n);var l=zn(Ut.current);if(t=n.type,e!==null&&n.stateNode!=null)Us(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return ne(n),null}if(e=zn(Fe.current),cr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[De]=n,r[It]=i,e=(n.mode&1)!==0,t){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<_t.length;l++)D(_t[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Vo(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":Qo(r,i),D("invalid",r)}ni(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&sr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&sr(r.textContent,u,e),l=["children",""+u]):Rt.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&D("scroll",r)}switch(t){case"input":nr(r),Ho(r,i,!0);break;case"textarea":nr(r),Wo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Mr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=va(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[De]=n,e[It]=r,Bs(e,n,!1,!1),n.stateNode=e;e:{switch(o=ti(t,r),t){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<_t.length;l++)D(_t[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Vo(e,r),l=Gl(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),D("invalid",e);break;case"textarea":Qo(e,r),l=bl(e,r),D("invalid",e);break;default:l=r}ni(t,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?_a(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ha(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Nt(e,a):typeof a=="number"&&Nt(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rt.hasOwnProperty(i)?a!=null&&i==="onScroll"&&D("scroll",e):a!=null&&Hi(e,i,a,o))}switch(t){case"input":nr(e),Ho(e,r,!1);break;case"textarea":nr(e),Wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Mr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)Vs(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=zn(Ut.current),zn(Fe.current),cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[De]=n,(i=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:sr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[De]=n,n.stateNode=r}return ne(n),null;case 13:if(M(A),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&me!==null&&n.mode&1&&!(n.flags&128))os(),Jn(),n.flags|=98560,i=!1;else if(i=cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[De]=n}else Jn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),i=!1}else Re!==null&&(Mi(Re),Re=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||A.current&1?K===0&&(K=3):Co())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return et(),Pi(e,n),e===null&&Ft(n.stateNode.containerInfo),ne(n),null;case 10:return ao(n.type._context),ne(n),null;case 17:return fe(n.type)&&Fr(),ne(n),null;case 19:if(M(A),i=n.memoizedState,i===null)return ne(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)mt(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Qr(e),o!==null){for(n.flags|=128,mt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return j(A,A.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>tt&&(n.flags|=128,r=!0,mt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Qr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),mt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!F)return ne(n),null}else 2*Q()-i.renderingStartTime>tt&&t!==1073741824&&(n.flags|=128,r=!0,mt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=A.current,j(A,r?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return Eo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?pe&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function dp(e,n){switch(lo(n),n.tag){case 1:return fe(n.type)&&Fr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(),M(ce),M(re),mo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return po(n),null;case 13:if(M(A),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));Jn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M(A),null;case 4:return et(),null;case 10:return ao(n.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var pr=!1,te=!1,pp=typeof WeakSet=="function"?WeakSet:Set,S=null;function Vn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){U(e,n,r)}else t.current=null}function Ri(e,n,t){try{t()}catch(r){U(e,n,r)}}var ju=!1;function mp(e,n){if(di=Or,e=Ka(),to(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,u=-1,a=-1,c=0,$=0,m=e,p=null;n:for(;;){for(var y;m!==t||l!==0&&m.nodeType!==3||(u=o+l),m!==i||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break n;if(p===t&&++c===l&&(u=o),p===i&&++$===r&&(a=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}t=u===-1||a===-1?null:{start:u,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(pi={focusedElem:e,selectionRange:t},Or=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,O=_.memoizedState,f=n.stateNode,s=f.getSnapshotBeforeUpdate(n.elementType===n.type?g:xe(n.type,g),O);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(v){U(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return _=ju,ju=!1,_}function Ct(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ri(n,t,i)}l=l.next}while(l!==r)}}function al(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ni(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Hs(e){var n=e.alternate;n!==null&&(e.alternate=null,Hs(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[De],delete n[It],delete n[vi],delete n[Gd],delete n[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qs(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ti(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Mr));else if(r!==4&&(e=e.child,e!==null))for(Ti(e,n,t),e=e.sibling;e!==null;)Ti(e,n,t),e=e.sibling}function Li(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Li(e,n,t),e=e.sibling;e!==null;)Li(e,n,t),e=e.sibling}var Z=null,Pe=!1;function Ye(e,n,t){for(t=t.child;t!==null;)Ws(e,n,t),t=t.sibling}function Ws(e,n,t){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(el,t)}catch{}switch(t.tag){case 5:te||Vn(t,n);case 6:var r=Z,l=Pe;Z=null,Ye(e,n,t),Z=r,Pe=l,Z!==null&&(Pe?(e=Z,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Z.removeChild(t.stateNode));break;case 18:Z!==null&&(Pe?(e=Z,t=t.stateNode,e.nodeType===8?jl(e.parentNode,t):e.nodeType===1&&jl(e,t),jt(e)):jl(Z,t.stateNode));break;case 4:r=Z,l=Pe,Z=t.stateNode.containerInfo,Pe=!0,Ye(e,n,t),Z=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ri(t,n,o),l=l.next}while(l!==r)}Ye(e,n,t);break;case 1:if(!te&&(Vn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){U(t,n,u)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(te=(r=te)||t.memoizedState!==null,Ye(e,n,t),te=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function Mu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pp),n.forEach(function(r){var l=wp.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ce(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:Z=u.stateNode,Pe=!1;break e;case 3:Z=u.stateNode.containerInfo,Pe=!0;break e;case 4:Z=u.stateNode.containerInfo,Pe=!0;break e}u=u.return}if(Z===null)throw Error(h(160));Ws(i,o,l),Z=null,Pe=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){U(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qs(n,e),n=n.sibling}function qs(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(n,e),Oe(e),r&4){try{Ct(3,e,e.return),al(3,e)}catch(g){U(e,e.return,g)}try{Ct(5,e,e.return)}catch(g){U(e,e.return,g)}}break;case 1:Ce(n,e),Oe(e),r&512&&t!==null&&Vn(t,t.return);break;case 5:if(Ce(n,e),Oe(e),r&512&&t!==null&&Vn(t,t.return),e.flags&32){var l=e.stateNode;try{Nt(l,"")}catch(g){U(e,e.return,g)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ma(l,i),ti(u,o);var c=ti(u,i);for(o=0;o<a.length;o+=2){var $=a[o],m=a[o+1];$==="style"?_a(l,m):$==="dangerouslySetInnerHTML"?ha(l,m):$==="children"?Nt(l,m):Hi(l,$,m,c)}switch(u){case"input":Zl(l,i);break;case"textarea":$a(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Qn(l,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Qn(l,!!i.multiple,i.defaultValue,!0):Qn(l,!!i.multiple,i.multiple?[]:"",!1))}l[It]=i}catch(g){U(e,e.return,g)}}break;case 6:if(Ce(n,e),Oe(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(g){U(e,e.return,g)}}break;case 3:if(Ce(n,e),Oe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{jt(n.containerInfo)}catch(g){U(e,e.return,g)}break;case 4:Ce(n,e),Oe(e);break;case 13:Ce(n,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(wo=Q())),r&4&&Mu(e);break;case 22:if($=t!==null&&t.memoizedState!==null,e.mode&1?(te=(c=te)||$,Ce(n,e),te=c):Ce(n,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!$&&e.mode&1)for(S=e,$=e.child;$!==null;){for(m=S=$;S!==null;){switch(p=S,y=p.child,p.tag){case 0:case 11:case 14:case 15:Ct(4,p,p.return);break;case 1:Vn(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(g){U(r,t,g)}}break;case 5:Vn(p,p.return);break;case 22:if(p.memoizedState!==null){Au(m);continue}}y!==null?(y.return=p,S=y):Au(m)}$=$.sibling}e:for($=null,m=e;;){if(m.tag===5){if($===null){$=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=ya("display",o))}catch(g){U(e,e.return,g)}}}else if(m.tag===6){if($===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(g){U(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;$===m&&($=null),m=m.return}$===m&&($=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ce(n,e),Oe(e),r&4&&Mu(e);break;case 21:break;default:Ce(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Qs(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Nt(l,""),r.flags&=-33);var i=Du(e);Li(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Du(e);Ti(e,u,o);break;default:throw Error(h(161))}}catch(a){U(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $p(e,n,t){S=e,Ks(e)}function Ks(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||pr;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||te;u=pr;var c=te;if(pr=o,(te=a)&&!c)for(S=l;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Iu(l):a!==null?(a.return=o,S=a):Iu(l);for(;i!==null;)S=i,Ks(i),i=i.sibling;S=l,pr=u,te=c}Fu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Fu(e)}}function Fu(e){for(;S!==null;){var n=S;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||al(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!te)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:xe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&zu(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}zu(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var $=c.memoizedState;if($!==null){var m=$.dehydrated;m!==null&&jt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}te||n.flags&512&&Ni(n)}catch(p){U(n,n.return,p)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function Au(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function Iu(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{al(4,n)}catch(a){U(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){U(n,l,a)}}var i=n.return;try{Ni(n)}catch(a){U(n,i,a)}break;case 5:var o=n.return;try{Ni(n)}catch(a){U(n,o,a)}}}catch(a){U(n,n.return,a)}if(n===e){S=null;break}var u=n.sibling;if(u!==null){u.return=n.return,S=u;break}S=n.return}}var vp=Math.ceil,Kr=Ke.ReactCurrentDispatcher,zo=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,T=0,G=null,W=null,J=0,pe=0,Hn=pn(0),K=0,Wt=null,xn=0,sl=0,So=0,xt=null,ae=null,wo=0,tt=1/0,Ae=null,Yr=!1,Oi=null,un=null,mr=!1,en=null,Xr=0,Pt=0,ji=null,Er=-1,Cr=0;function ie(){return T&6?Q():Er!==-1?Er:Er=Q()}function an(e){return e.mode&1?T&2&&J!==0?J&-J:bd.transition!==null?(Cr===0&&(Cr=Ta()),Cr):(e=L,e!==0||(e=window.event,e=e===void 0?16:Aa(e.type)),e):1}function Te(e,n,t,r){if(50<Pt)throw Pt=0,ji=null,Error(h(185));Kt(e,t,r),(!(T&2)||e!==G)&&(e===G&&(!(T&2)&&(sl|=t),K===4&&Je(e,J)),de(e,r),t===1&&T===0&&!(n.mode&1)&&(tt=Q()+500,il&&mn()))}function de(e,n){var t=e.callbackNode;bf(e,n);var r=Lr(e,e===G?J:0);if(r===0)t!==null&&Yo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Yo(t),n===1)e.tag===0?Jd(Bu.bind(null,e)):rs(Bu.bind(null,e)),Yd(function(){!(T&6)&&mn()}),t=null;else{switch(La(r)){case 1:t=Yi;break;case 4:t=Ra;break;case 16:t=Tr;break;case 536870912:t=Na;break;default:t=Tr}t=nc(t,Ys.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ys(e,n){if(Er=-1,Cr=0,T&6)throw Error(h(327));var t=e.callbackNode;if(Xn()&&e.callbackNode!==t)return null;var r=Lr(e,e===G?J:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Gr(e,r);else{n=r;var l=T;T|=2;var i=Gs();(G!==e||J!==n)&&(Ae=null,tt=Q()+500,Sn(e,n));do try{_p();break}catch(u){Xs(e,u)}while(!0);uo(),Kr.current=i,T=l,W!==null?n=0:(G=null,J=0,n=K)}if(n!==0){if(n===2&&(l=ui(e),l!==0&&(r=l,n=Di(e,l))),n===1)throw t=Wt,Sn(e,0),Je(e,r),de(e,Q()),t;if(n===6)Je(e,r);else{if(l=e.current.alternate,!(r&30)&&!hp(l)&&(n=Gr(e,r),n===2&&(i=ui(e),i!==0&&(r=i,n=Di(e,i))),n===1))throw t=Wt,Sn(e,0),Je(e,r),de(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:yn(e,ae,Ae);break;case 3:if(Je(e,r),(r&130023424)===r&&(n=wo+500-Q(),10<n)){if(Lr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=$i(yn.bind(null,e,ae,Ae),n);break}yn(e,ae,Ae);break;case 4:if(Je(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Ne(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vp(r/1960))-r,10<r){e.timeoutHandle=$i(yn.bind(null,e,ae,Ae),r);break}yn(e,ae,Ae);break;case 5:yn(e,ae,Ae);break;default:throw Error(h(329))}}}return de(e,Q()),e.callbackNode===t?Ys.bind(null,e):null}function Di(e,n){var t=xt;return e.current.memoizedState.isDehydrated&&(Sn(e,n).flags|=256),e=Gr(e,n),e!==2&&(n=ae,ae=t,n!==null&&Mi(n)),e}function Mi(e){ae===null?ae=e:ae.push.apply(ae,e)}function hp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Le(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Je(e,n){for(n&=~So,n&=~sl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ne(n),r=1<<t;e[t]=-1,n&=~r}}function Bu(e){if(T&6)throw Error(h(327));Xn();var n=Lr(e,0);if(!(n&1))return de(e,Q()),null;var t=Gr(e,n);if(e.tag!==0&&t===2){var r=ui(e);r!==0&&(n=r,t=Di(e,r))}if(t===1)throw t=Wt,Sn(e,0),Je(e,n),de(e,Q()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,yn(e,ae,Ae),de(e,Q()),null}function ko(e,n){var t=T;T|=1;try{return e(n)}finally{T=t,T===0&&(tt=Q()+500,il&&mn())}}function Pn(e){en!==null&&en.tag===0&&!(T&6)&&Xn();var n=T;T|=1;var t=Se.transition,r=L;try{if(Se.transition=null,L=1,e)return e()}finally{L=r,Se.transition=t,T=n,!(T&6)&&mn()}}function Eo(){pe=Hn.current,M(Hn)}function Sn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kd(t)),W!==null)for(t=W.return;t!==null;){var r=t;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fr();break;case 3:et(),M(ce),M(re),mo();break;case 5:po(r);break;case 4:et();break;case 13:M(A);break;case 19:M(A);break;case 10:ao(r.type._context);break;case 22:case 23:Eo()}t=t.return}if(G=e,W=e=sn(e.current,null),J=pe=n,K=0,Wt=null,So=sl=xn=0,ae=xt=null,gn!==null){for(n=0;n<gn.length;n++)if(t=gn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}gn=null}return e}function Xs(e,n){do{var t=W;try{if(uo(),Sr.current=qr,Wr){for(var r=I.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Wr=!1}if(Cn=0,X=q=I=null,Et=!1,Vt=0,zo.current=null,t===null||t.return===null){K=1,Wt=n,W=null;break}e:{var i=e,o=t.return,u=t,a=n;if(n=J,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,$=u,m=$.tag;if(!($.mode&1)&&(m===0||m===11||m===15)){var p=$.alternate;p?($.updateQueue=p.updateQueue,$.memoizedState=p.memoizedState,$.lanes=p.lanes):($.updateQueue=null,$.memoizedState=null)}var y=xu(o);if(y!==null){y.flags&=-257,Pu(y,o,u,i,n),y.mode&1&&Cu(i,c,n),n=y,a=c;var _=n.updateQueue;if(_===null){var g=new Set;g.add(a),n.updateQueue=g}else _.add(a);break e}else{if(!(n&1)){Cu(i,c,n),Co();break e}a=Error(h(426))}}else if(F&&u.mode&1){var O=xu(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Pu(O,o,u,i,n),io(nt(a,u));break e}}i=a=nt(a,u),K!==4&&(K=2),xt===null?xt=[i]:xt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=Ls(i,a,n);gu(i,f);break e;case 1:u=a;var s=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(un===null||!un.has(d)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=Os(i,u,n);gu(i,v);break e}}i=i.return}while(i!==null)}Js(t)}catch(z){n=z,W===t&&t!==null&&(W=t=t.return);continue}break}while(!0)}function Gs(){var e=Kr.current;return Kr.current=qr,e===null?qr:e}function Co(){(K===0||K===3||K===2)&&(K=4),G===null||!(xn&268435455)&&!(sl&268435455)||Je(G,J)}function Gr(e,n){var t=T;T|=2;var r=Gs();(G!==e||J!==n)&&(Ae=null,Sn(e,n));do try{yp();break}catch(l){Xs(e,l)}while(!0);if(uo(),T=t,Kr.current=r,W!==null)throw Error(h(261));return G=null,J=0,K}function yp(){for(;W!==null;)Zs(W)}function _p(){for(;W!==null&&!Qf();)Zs(W)}function Zs(e){var n=ec(e.alternate,e,pe);e.memoizedProps=e.pendingProps,n===null?Js(e):W=n,zo.current=null}function Js(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=dp(t,n),t!==null){t.flags&=32767,W=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,W=null;return}}else if(t=fp(t,n,pe),t!==null){W=t;return}if(n=n.sibling,n!==null){W=n;return}W=n=e}while(n!==null);K===0&&(K=5)}function yn(e,n,t){var r=L,l=Se.transition;try{Se.transition=null,L=1,gp(e,n,t,r)}finally{Se.transition=l,L=r}return null}function gp(e,n,t,r){do Xn();while(en!==null);if(T&6)throw Error(h(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ed(e,i),e===G&&(W=G=null,J=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mr||(mr=!0,nc(Tr,function(){return Xn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var o=L;L=1;var u=T;T|=4,zo.current=null,mp(e,t),qs(t,e),Bd(pi),Or=!!di,pi=di=null,e.current=t,$p(t),Wf(),T=u,L=o,Se.transition=i}else e.current=t;if(mr&&(mr=!1,en=e,Xr=l),i=e.pendingLanes,i===0&&(un=null),Yf(t.stateNode),de(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Yr)throw Yr=!1,e=Oi,Oi=null,e;return Xr&1&&e.tag!==0&&Xn(),i=e.pendingLanes,i&1?e===ji?Pt++:(Pt=0,ji=e):Pt=0,mn(),null}function Xn(){if(en!==null){var e=La(Xr),n=Se.transition,t=L;try{if(Se.transition=null,L=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Xr=0,T&6)throw Error(h(331));var l=T;for(T|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(S=c;S!==null;){var $=S;switch($.tag){case 0:case 11:case 15:Ct(8,$,i)}var m=$.child;if(m!==null)m.return=$,S=m;else for(;S!==null;){$=S;var p=$.sibling,y=$.return;if(Hs($),$===c){S=null;break}if(p!==null){p.return=y,S=p;break}S=y}}}var _=i.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var O=g.sibling;g.sibling=null,g=O}while(g!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ct(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var s=e.current;for(S=s;S!==null;){o=S;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,S=d;else e:for(o=s;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:al(9,u)}}catch(z){U(u,u.return,z)}if(u===o){S=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,S=v;break e}S=u.return}}if(T=l,mn(),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{L=t,Se.transition=n}}return!1}function Uu(e,n,t){n=nt(t,n),n=Ls(e,n,1),e=on(e,n,1),n=ie(),e!==null&&(Kt(e,1,n),de(e,n))}function U(e,n,t){if(e.tag===3)Uu(e,e,t);else for(;n!==null;){if(n.tag===3){Uu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=nt(t,e),e=Os(n,e,1),n=on(n,e,1),e=ie(),n!==null&&(Kt(n,1,e),de(n,e));break}}n=n.return}}function zp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,G===e&&(J&t)===t&&(K===4||K===3&&(J&130023424)===J&&500>Q()-wo?Sn(e,0):So|=t),de(e,n)}function bs(e,n){n===0&&(e.mode&1?(n=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):n=1);var t=ie();e=We(e,n),e!==null&&(Kt(e,n,t),de(e,t))}function Sp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),bs(e,t)}function wp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),bs(e,t)}var ec;ec=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ce.current)se=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return se=!1,cp(e,n,t);se=!!(e.flags&131072)}else se=!1,F&&n.flags&1048576&&ls(n,Br,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;kr(e,n),e=n.pendingProps;var l=Zn(n,re.current);Yn(n,t),l=vo(null,n,r,e,l,t);var i=ho();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(i=!0,Ar(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,co(n),l.updater=ul,n.stateNode=l,l._reactInternals=n,Si(n,r,e,t),n=Ei(null,n,r,!0,i,t)):(n.tag=0,F&&i&&ro(n),le(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(kr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Ep(r),e=xe(r,e),l){case 0:n=ki(null,n,r,e,t);break e;case 1:n=Tu(null,n,r,e,t);break e;case 11:n=Ru(null,n,r,e,t);break e;case 14:n=Nu(null,n,r,xe(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:xe(r,l),ki(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:xe(r,l),Tu(e,n,r,l,t);case 3:e:{if(Fs(n),e===null)throw Error(h(387));r=n.pendingProps,i=n.memoizedState,l=i.element,cs(e,n),Hr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=nt(Error(h(423)),n),n=Lu(e,n,r,t,l);break e}else if(r!==l){l=nt(Error(h(424)),n),n=Lu(e,n,r,t,l);break e}else for(me=ln(n.stateNode.containerInfo.firstChild),$e=n,F=!0,Re=null,t=as(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jn(),r===l){n=qe(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return fs(n),e===null&&_i(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,mi(r,l)?o=null:i!==null&&mi(r,i)&&(n.flags|=32),Ms(e,n),le(e,n,o,t),n.child;case 6:return e===null&&_i(n),null;case 13:return As(e,n,t);case 4:return fo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=bn(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:xe(r,l),Ru(e,n,r,l,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,j(Ur,r._currentValue),r._currentValue=o,i!==null)if(Le(i.value,o)){if(i.children===l.children&&!ce.current){n=qe(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ve(-1,t&-t),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var $=c.pending;$===null?a.next=a:(a.next=$.next,$.next=a),c.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),gi(i.return,t,n),u.lanes|=t;break}a=a.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),gi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}le(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Yn(n,t),l=we(l),r=r(l),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,l=xe(r,n.pendingProps),l=xe(r.type,l),Nu(e,n,r,l,t);case 15:return js(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:xe(r,l),kr(e,n),n.tag=1,fe(r)?(e=!0,Ar(n)):e=!1,Yn(n,t),Ts(n,r,l),Si(n,r,l,t),Ei(null,n,r,!0,e,t);case 19:return Is(e,n,t);case 22:return Ds(e,n,t)}throw Error(h(156,n.tag))};function nc(e,n){return Pa(e,n)}function kp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,n,t,r){return new kp(e,n,t,r)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wi)return 11;if(e===qi)return 14}return 2}function sn(e,n){var t=e.alternate;return t===null?(t=ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case On:return wn(t.children,l,i,n);case Qi:o=8,l|=8;break;case ql:return e=ze(12,t,n,l|2),e.elementType=ql,e.lanes=i,e;case Kl:return e=ze(13,t,n,l),e.elementType=Kl,e.lanes=i,e;case Yl:return e=ze(19,t,n,l),e.elementType=Yl,e.lanes=i,e;case fa:return cl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sa:o=10;break e;case ca:o=9;break e;case Wi:o=11;break e;case qi:o=14;break e;case Xe:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=ze(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function wn(e,n,t,r){return e=ze(7,e,r,n),e.lanes=t,e}function cl(e,n,t,r){return e=ze(22,e,r,n),e.elementType=fa,e.lanes=t,e.stateNode={isHidden:!1},e}function Vl(e,n,t){return e=ze(6,e,null,n),e.lanes=t,e}function Hl(e,n,t){return n=ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Cp(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,n,t,r,l,i,o,u,a){return e=new Cp(e,n,t,u,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=ze(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(i),e}function xp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function tc(e){if(!e)return fn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(fe(t))return ts(e,t,n)}return n}function rc(e,n,t,r,l,i,o,u,a){return e=Po(t,r,!0,e,l,i,o,u,a),e.context=tc(null),t=e.current,r=ie(),l=an(t),i=Ve(r,l),i.callback=n??null,on(t,i,l),e.current.lanes=l,Kt(e,l,r),de(e,r),e}function fl(e,n,t,r){var l=n.current,i=ie(),o=an(l);return t=tc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ve(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=on(l,n,o),e!==null&&(Te(e,l,o,i),zr(e,l,o)),o}function Zr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ro(e,n){Vu(e,n),(e=e.alternate)&&Vu(e,n)}function Pp(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function No(e){this._internalRoot=e}dl.prototype.render=No.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));fl(e,n,null,null)};dl.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pn(function(){fl(null,e,null,null)}),n[Qe]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Da();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ze.length&&n!==0&&n<Ze[t].priority;t++);Ze.splice(t,0,e),t===0&&Fa(e)}};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function Rp(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Zr(o);i.call(c)}}var o=rc(n,r,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=o,e[Qe]=o.current,Ft(e.nodeType===8?e.parentNode:e),Pn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=Zr(a);u.call(c)}}var a=Po(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=a,e[Qe]=a.current,Ft(e.nodeType===8?e.parentNode:e),Pn(function(){fl(n,a,t,r)}),a}function ml(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=Zr(o);u.call(a)}}fl(n,o,e,l)}else o=Rp(t,n,e,l,r);return Zr(o)}Oa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=yt(n.pendingLanes);t!==0&&(Xi(n,t|1),de(n,Q()),!(T&6)&&(tt=Q()+500,mn()))}break;case 13:Pn(function(){var r=We(e,1);if(r!==null){var l=ie();Te(r,e,1,l)}}),Ro(e,1)}};Gi=function(e){if(e.tag===13){var n=We(e,134217728);if(n!==null){var t=ie();Te(n,e,134217728,t)}Ro(e,134217728)}};ja=function(e){if(e.tag===13){var n=an(e),t=We(e,n);if(t!==null){var r=ie();Te(t,e,n,r)}Ro(e,n)}};Da=function(){return L};Ma=function(e,n){var t=L;try{return L=e,n()}finally{L=t}};li=function(e,n,t){switch(n){case"input":if(Zl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ll(r);if(!l)throw Error(h(90));pa(r),Zl(r,l)}}}break;case"textarea":$a(e,t);break;case"select":n=t.value,n!=null&&Qn(e,!!t.multiple,n,!1)}};Sa=ko;wa=Pn;var Np={usingClientEntryPoint:!1,Events:[Xt,Fn,ll,ga,za,ko]},$t={findFiberByHostInstance:_n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tp={bundleType:$t.bundleType,version:$t.version,rendererPackageName:$t.rendererPackageName,rendererConfig:$t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:$t.findFiberByHostInstance||Pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{el=$r.inject(Tp),Me=$r}catch{}}he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np;he.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(n))throw Error(h(200));return xp(e,n,null,t)};he.createRoot=function(e,n){if(!To(e))throw Error(h(299));var t=!1,r="",l=lc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Po(e,1,!1,null,null,t,!1,r,l),e[Qe]=n.current,Ft(e.nodeType===8?e.parentNode:e),new No(n)};he.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Ca(n),e=e===null?null:e.stateNode,e};he.flushSync=function(e){return Pn(e)};he.hydrate=function(e,n,t){if(!pl(n))throw Error(h(200));return ml(null,e,n,!0,t)};he.hydrateRoot=function(e,n,t){if(!To(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=lc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=rc(n,null,e,1,t??null,l,!1,i,o),e[Qe]=n.current,Ft(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new dl(n)};he.render=function(e,n,t){if(!pl(n))throw Error(h(200));return ml(null,e,n,!1,t)};he.unmountComponentAtNode=function(e){if(!pl(e))throw Error(h(40));return e._reactRootContainer?(Pn(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};he.unstable_batchedUpdates=ko;he.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!pl(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return ml(e,n,t,!1,r)};he.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),ia.exports=he;var Lp=ia.exports,Qu=Lp;Ql.createRoot=Qu.createRoot,Ql.hydrateRoot=Qu.hydrateRoot;const oc="comm-princ",uc="通信原理",ac=4,Op={id:oc,title:uc,order:ac},jp=Object.freeze(Object.defineProperty({__proto__:null,default:Op,id:oc,order:ac,title:uc},Symbol.toStringTag,{value:"Module"})),sc="总内容",cc="总内容",fc=1,Dp={id:sc,title:cc,order:fc},Mp=Object.freeze(Object.defineProperty({__proto__:null,default:Dp,id:sc,order:fc,title:cc},Symbol.toStringTag,{value:"Module"})),dc="第三章 复变函数的积分",pc=1,Fp={title:dc,order:pc},Ap=Object.freeze(Object.defineProperty({__proto__:null,default:Fp,order:pc,title:dc},Symbol.toStringTag,{value:"Module"})),mc="comp-anal",$c="复变函数",vc=2,Ip={id:mc,title:$c,order:vc},Bp=Object.freeze(Object.defineProperty({__proto__:null,default:Ip,id:mc,order:vc,title:$c},Symbol.toStringTag,{value:"Module"})),hc="第五章 留数",yc=5,Up={title:hc,order:yc},Vp=Object.freeze(Object.defineProperty({__proto__:null,default:Up,order:yc,title:hc},Symbol.toStringTag,{value:"Module"})),_c="第四章 级数",gc=4,Hp={title:_c,order:gc},Qp=Object.freeze(Object.defineProperty({__proto__:null,default:Hp,order:gc,title:_c},Symbol.toStringTag,{value:"Module"})),zc="dsp-1",Sc="第一章：离散时间信号",wc=1,Wp={id:zc,title:Sc,order:wc},qp=Object.freeze(Object.defineProperty({__proto__:null,default:Wp,id:zc,order:wc,title:Sc},Symbol.toStringTag,{value:"Module"})),kc="dsp",Ec="数字信号处理",Cc=5,Kp={id:kc,title:Ec,order:Cc},Yp=Object.freeze(Object.defineProperty({__proto__:null,default:Kp,id:kc,order:Cc,title:Ec},Symbol.toStringTag,{value:"Module"})),xc="e-fields-anal",Pc="第二章：静电场",Rc=2,Xp={id:xc,title:Pc,order:Rc},Gp=Object.freeze(Object.defineProperty({__proto__:null,default:Xp,id:xc,order:Rc,title:Pc},Symbol.toStringTag,{value:"Module"})),Nc="em-fields",Tc="电磁场与电磁波",Lc=3,Zp={id:Nc,title:Tc,order:Lc},Jp=Object.freeze(Object.defineProperty({__proto__:null,default:Zp,id:Nc,order:Lc,title:Tc},Symbol.toStringTag,{value:"Module"})),Oc="second-part",jc="第二部分",Dc=4,bp={id:Oc,title:jc,order:Dc},em=Object.freeze(Object.defineProperty({__proto__:null,default:bp,id:Oc,order:Dc,title:jc},Symbol.toStringTag,{value:"Module"})),Mc="time-varying-fields",Fc="第五章：时变电磁场",Ac=3,nm={id:Mc,title:Fc,order:Ac},tm=Object.freeze(Object.defineProperty({__proto__:null,default:nm,id:Mc,order:Ac,title:Fc},Symbol.toStringTag,{value:"Module"})),Ic="vector-analysis",Bc="第一章：矢量分析",Uc=1,rm={id:Ic,title:Bc,order:Uc},lm=Object.freeze(Object.defineProperty({__proto__:null,default:rm,id:Ic,order:Uc,title:Bc},Symbol.toStringTag,{value:"Module"})),Vc="calc-1",Hc="第一章：极限与连续",Qc=1,im={id:Vc,title:Hc,order:Qc},om=Object.freeze(Object.defineProperty({__proto__:null,default:im,id:Vc,order:Qc,title:Hc},Symbol.toStringTag,{value:"Module"})),Wc="calc-2",qc="第二章：导数与微分",Kc=2,um={id:Wc,title:qc,order:Kc},am=Object.freeze(Object.defineProperty({__proto__:null,default:um,id:Wc,order:Kc,title:qc},Symbol.toStringTag,{value:"Module"})),Yc="math",Xc="高等数学",Gc=1,sm={id:Yc,title:Xc,order:Gc},cm=Object.freeze(Object.defineProperty({__proto__:null,default:sm,id:Yc,order:Gc,title:Xc},Symbol.toStringTag,{value:"Module"})),Zc="series",Jc="第十二章：无穷级数",bc=12,fm={id:Zc,title:Jc,order:bc},dm=Object.freeze(Object.defineProperty({__proto__:null,default:fm,id:Zc,order:bc,title:Jc},Symbol.toStringTag,{value:"Module"})),pm=`---
id: 总内容
title: 总内容
order: 1
---

## 通信方式
**单工：**消息只能单方向传输（如无线电广播）
**半双工：**双向但不可同时进行（如对讲机，检索）
**全双工：**双向且可同时进行（如电话）

## 指标
**可靠性（质量）:**误码率（$P_e$）、误信率（$P_s$）
**有效性（速度）：**比特率（$R_b$）、波特率（$R_B$）、频带利用率（$\\eta$）
$$\\eta = \\frac{R_b}{B}$$
信源编码提高有效性（压缩），信道编码提高可靠性（增加冗余以纠错）。
真正衡量数字通信系统的有效性指标是频带利用率：单纯看传输速率（比特率）是不够的，因为高传输速率可能占用了极宽的带宽。单位带宽内的传输速率（即频带利用率）才是衡量系统“传输效率”最公正（真正）的指标。

码元传输速率（波特率）
每秒传输的码元个数，单位：波特（$Baud$）

$M$进制码元包含的比特数
$H=\\log_2^M(bit)$

信息传输速率（比特率）
每秒传输的平均信息量
$$R_b = R_B H(b/s)$$

频带利用率
$$\\eta = \\frac{R_B}{B}$$

信源熵
$$H(X) = -\\sum_{i=1}^{M} P(x_i) \\log_2 P(x_i)$$(bit/符号)

当信源**等概率分布**时，数字信源有最大熵：
信息论基本定理，当所有符号出现的概率相等时，信源的不确定性最大，熵最大。

周期信号的傅里叶级数
$$S(t)=\\sum_{n=-\\infty}^{\\infty}C_n e^{j2\\pi n f_0 t}$$

能量
$$E=\\int_{-\\infty}^{\\infty}s^2(t)dt$$
平均功率
$$E=\\lim\\limits_{T\\rightarrow \\infty}\\frac{1}{T}\\int_{-\\frac{T}{2}}^{\\frac{T}{2}}s^2(t)dt$$
**能量（有限）信号**：平均功率为0，能量有限
**功率（有限）信号**：能量无穷大，平均功率有限

**能量谱密度：**设能量信号的傅里叶变换（即频谱密度）为$S(f)$则其能量谱密度$G(f)$为
$$G(f)={\\left|S(f)\\right|}^2$$
**功率谱密度（$PSD$）：**设信号的傅里叶变换（即频谱密度）为$S(f)$则其能量谱密度$P(f)$为
$$P(f)=\\lim\\limits_{T\\rightarrow \\infty}^{\\left|S(f)\\right|}^2$$
周期信号的功率谱密度
$$P(f)=\\sum_{n=-\\infty}^{\\infty}|C_n|^2\\delta(f-nf_0)$$
经过系统的功率谱密度
$$P'(f)=P(f)\\left|H(f)\\right|^2$$
功率为功率谱密度在全频域的积分

## 相关函数
能量信号的自相关函数
$$R(\\tau)=\\int_{-\\infty}^{\\infty}s(t)s(t+\\tau)dt\\quad -\\infty<\\tau<\\infty$$
当$\\tau=0$时，$R(0)$等于信号的能量
$$R(0)=\\int_{-\\infty}^{\\infty}s^2(t)dt=E$$
自相关函数$R(\\tau)$和其能量谱密度\${\\left|S(f)\\right|}^2$是一对傅里叶变换
$$R(\\tau)=\\int_{-\\infty}^{\\infty}{\\left|S(f)\\right|}^2e^{j2\\pi f\\tau}df$$
$\${\\left|S(f)\\right|}^2=\\int_{-\\infty}^{\\infty}R(\\tau)e^{-j2\\pi f\\tau}d\\tau$$
互相关函数$R_{12}(\\tau)$在自相关函数里左$s$下标$1$右$s$下标$2$即可
互能量谱密度
$$S_{12}(f)=S_1^*(f)S_2(f)$$

功率信号的自相关函数
$$R(\\tau)=\\lim_{T\\rightarrow \\infty}\\frac{1}{T}\\int_{-\\frac{T}{2}}^{\\frac{T}{2}}s(t)s(t+\\tau)dt\\quad -\\infty<\\tau<\\infty$$
对于周期功率信号
$$R(\\tau)=\\frac{1}{T_0}\\int_{-\\frac{T_0}{2}}^{\\frac{T_0}{2}}s(t)s(t+\\tau)dt$$
当$\\tau=0$时，$R(0)$等于信号的平均功率
互的同理于能量信号

## 正交
若在周期$T$内，两个信号满足
$$\\int_{0}^{T}s_1(t)s_2(t)dt=0$$
则称这两个信号**正交**

# 随机过程
兼有随机变量和时间函数
## 数字特征
均值
$$E[\\xi(t)]=\\int_{-\\infty}^{\\infty}xf_1(x,t)dt=a(t)$$
方差
$$D[\\xi(t)]=E\\left\\{[\\xi(t)-a(t)]^2\\right\\}$$
$$=E[\\xi^2(t)]-a^2(t)=\\sigma ^2(t)$$
自相关函数
$$R(t_1,t_2)=E[\\xi(t_1)\\xi(t_2)]$$
$$=\\int_{-\\infty}^{\\infty}\\int_{-\\infty}^{\\infty}x_1x_2f_2(x_1x_2;t_1t_2)dx_1dx_2$$
互相关函数
$$R_{\\xi\\eta}(t_1,t_2)=E[\\xi(t_1)\\eta(t_2)]$$
## 平稳过程
**狭义平稳：**随机过程的统计特性与时间起点无关
一维与时间无关
二维只与间隔有关
**广义平稳：**均值与时间无关，相关函数只与$\\tau$有关
平稳过程的任意维分布函数和概率密度函数与时间起点无关
### 各态历经性（遍历性）
任一样本经历了平稳过程的所有可能状态：若
$$
\\begin{cases}
a = \\overline{a} \\\\
R(\\tau) = \\overline{R(\\tau)}
\\end{cases}
$$
则称该平稳过程具有**各态历经性（遍历性）**
### 特点
平均功率
$$S = R(0) = E[\\xi^2(t)]$$
直流功率
$$a^2 = R(\\infty) = \\lim_{\\tau \\to \\infty} E[\\xi(t)\\xi(t+\\tau)]$$
当$\\tau \\to \\infty$时，统计独立
$$a^2 = E[\\xi(t)]E[\\xi(t+\\tau)] = E^2[\\xi(t)]$$
方差
$$
\\sigma^2 = R(0) - R(\\infty)
$$
自相关函数为偶函数
$$
R(\\tau) = R(-\\tau)
$$
自相关函数存在上界
由
$$
E\\left\\{[\\xi(t)\\pm\\xi(t+\\tau)]^2\\right\\} \\geq 0
$$
展开二次式，利用期望的线性性质可得
$$
|R(\\tau)| \\leq R(0)
$$
**维纳-辛钦定理：**功率谱密度和自相关函数是一对傅里叶变换
各态历经（遍历）过程任一样本的$PSD=$过程的$PSD$
平稳过程$PSD$是偶函数

## 高斯过程
（1）若广义平稳，则平稳；
（2）若互不相关，则统计独立；
（3）若干个高斯过程的代数和仍是高斯型；
（4）高斯过程→线性变换→高斯过程

## 线性系统
平稳、高斯过程通过线性系统仍是平稳、高斯过程

## 窄带过程
窄带过程是平稳、高斯的则分量也必然是平稳、高斯的
同一时刻的分量是互不相关或统计独立的
包络的一维分布是瑞利分布，相位的一维分布是均匀分布，就一维分布而言包络和相位是统计独立的
### 加正弦波
包络服从广义瑞利分布（莱斯分布）
但当信号很小时退化为瑞利分布，信噪比很大近似为高斯分布
## 白噪声
理想的宽带过程，功率谱密度均匀分布在整个频率范围内为$\\frac{n_0}{2}$，自相关函数为$\\frac{n_0}{2}\\delta (t)$
### 高斯白噪声
指概率分布服从高斯分布的白噪声
高斯白噪声在任意两个不同时刻上的取值之间，不仅是互不相关的，而且还是统计独立的
一般通信系统中的热噪声是瞬时值服从**高斯分布或正态分布**且功率谱密度服从
均匀分布的高斯白噪声。
### 带限白噪声
白噪声通过带宽有限的信道或滤波器的情形

# 信道
理想(无失真传输)恒参信道的特性满足幅频特性为一常数群时延特性为一常数

信噪比$=\\frac{S}{N}$
## 信道容量
香农公式(白噪声背景下的连续信道容量)
$$C = B \\log_2 \\left(1 + \\frac{S}{N}\\right) \\, (\\text{b/s})$$

# 模拟调制
目的：频谱搬移，匹配信道特性，减小天线尺寸，实现多路复用，提高信道利用率，改善系统性能，实现频率分配
幅度调制：$AM, DSB, SSB, VSB$
角度调制：$FM, PM$
**性能比较：**
抗噪声性能：$FM$最好，$DSB/SSB$、$VSB$次之，$AM$最差；
频谱利用率：$SSB$最高，$VSB$较高，$DSB/AM$次之，$FM$最差；
功率利用率：$FM$最高，$DSB/SSB$、$VSB$次之，$AM$最差；
设备复杂度：$AM$最简，$DSB/FM$次之，$VSB$较复杂，$SSB$最复杂。

# 数字基带
## 传输码型
**AMI：**1变成正负1交替，0不变
**HDB_3：**若连0个数不超3个则AMI，否则第四个改为$V_+$或$V_-$
**双相码：**1变成10，0变成01
**CMI：**1变成11,00交替，0变成01
均衡的目的是消除或减小码间串扰
## 眼图
可观测到抽样失真、过零点失真、判决电平，无法判断码间干扰的大小情况(有争议)`,mm=`---
title: 解析函数的高阶导数
order: 1
---

# 高阶导数

## 高阶导数公式

$设f(z)在区域D内解析，那么f(z)的导函数仍满足解析条件，且它的n阶导数为$

$$ 
f^{(n)}(z_0)=\\frac{n!}{2\\pi i}\\oint\\limits_C\\frac{f(z)}{(z-z_0)^{\\color{olive} n+1}}dz\\ (n=1, 2, \\cdots) 
$$
$其中C为在函数f(z)的解析区域D内围绕z_0的任何一条正向简单闭曲线，而且该曲线围成的区域全含于D$
`,$m=`---
title: 孤立奇点
order: 1
---

# 定义
如果函数$f(z)$在$z_0$不解析，但在$z_0$的某一去心邻域内处处解析，则称$z_0$为$f(z)$的孤立奇点.

<Collapsible title="例1">
$z = 0$是函数$e^{\\frac{1}{z}}, \\frac{\\sin z}{z}$的孤立奇点.
$z = -1$是函数$\\frac{1}{z+1}$的孤立奇点.
</Collapsible>

<Collapsible title="例2">
指出函数$f(z) = \\frac{z^2}{\\sin \\frac{1}{z}}$在$z = 0$的奇点特性.
<Collapsible title="解">
函数的奇点为
$$z = 0,\\ z = \\frac{1}{k\\pi}\\ (k = \\pm 1, \\pm 2, \\cdots)$$
因为
$$\\lim _ { k \\rightarrow \\infty } \\frac { 1 } { k \\pi } = 0$$
即在$z=0$的无论多么小的去心邻域内，总有$f(z)$的奇点存在，所以$z=0$不是孤立奇点.
</Collapsible>
</Collapsible>

# 孤立奇点的分类
依据$f(z)$在其孤立奇点$z_0$的去心邻域内的**洛朗级数**的情况分为三类：
1. 可去奇点;
2. 极点;
3. 本性奇点.

## 1. 可去奇点
**定义** 若洛朗级数**不含**$z-z_0$**的负幂项**，那么孤立奇点$z_0$称为$f(z)$的**可去奇点**.
<Collapsible title="例3">
$\\frac { \\sin z } { z } = 1 - \\frac { z ^ { 2 } } { 3 ! } + \\frac { z ^ { 4 } } { 5 ! } - \\cdots$中不含负幂项，$z=0$是$\\frac { \\sin z } { z }$的可去奇点.
</Collapsible>

<Collapsible title="例4">
说明$z=0$为$\\frac { e ^ { z } - 1 } { z }$的可去奇点.
<Collapsible title="解1">
因为
$$\\frac { e ^ { z } - 1 } { z } &= \\frac { 1 } { z } \\left( 1 + z + \\frac { z ^ { 2 } } { 2 ! } + \\cdots + \\frac { z ^ { n } } { n ! } + \\cdots - 1 \\right) \\\\
&= 1 + \\frac { z } { 2 ! } + \\cdots + \\frac { z ^ { n - 1 } } { n ! } + \\cdots , \\quad 0 < | z | < + \\infty$$
所以
$$z=0为\\frac { e ^ { z } - 1 } { z }的可去奇点.$$
</Collapsible>
<Collapsible title="解2">
因为
$$\\lim _ { z \\rightarrow 0 } \\frac { e ^ { z } - 1 } { z } =\\frac{z}{z}= 1$$
所以
$$z=0为\\frac { e ^ { z } - 1 } { z }的可去奇点.$$
</Collapsible>
</Collapsible>

## 2. 极点
**定义** 若洛朗级数只有**有限多个**$z-z_0$的**负幂项**，其中关于$( z - z _ { 0 } ) ^ { - 1 }$的最高幂为$( z - z _ { 0 } ) ^ { - m }$，那么孤立奇点$z_0$称为函数$f(z)$的**m级极点**.
此时函数可表示为
$$f(z) = \\frac{g(z)}{(z-z_0)^m}$$
其中$g(z)$在$z_0$处解析且$g(z_0) \\neq 0$.
<Collapsible title="例5">
有理分式函数$f ( z ) = \\frac { 3 z + 2 } { z ^ { 2 } ( z + 2 ) }$，求其极点.
<Collapsible title="解">
因为
$$f(z)= \\frac { \\left( \\frac { 3 z + 2 } { z ^ { 2 } } \\right) } { z + 2 } = \\frac { \\left( \\frac { 3 z + 2 } { z +  2 } \\right) } { z^2 }$$
所以
$$z=-2为1级极点, z=0为2级极点.$$
</Collapsible>
</Collapsible>
<Collapsible title="例6">
求$\\frac { 1 } { z ^ { 3 } - z ^ { 2 } - z + 1 }$的奇点，如果是极点，指出它的级数.
<Collapsible title="解">
因为
$$\\frac{1}{z^3-z^2-z+1}=\\frac{1}{{(z-1)}^2(z+1)}$$
所以
$$z=1为2级极点, z=-1为1级极点.$$
</Collapsible>
</Collapsible>

## 3. 本性奇点
**定义** 若洛朗级数中含有**无限多个**$z-z_0$的**负幂项**，那么孤立奇点$z_0$称为$f(z)$的**本性奇点**.
<Collapsible title="例7">
$$e ^ { \\frac { 1 } { z } } = 1 + z ^ { - 1 } + \\frac { z ^ { - 2 } } { 2 ! } + \\cdots + \\frac { z ^ { - n } } { n ! } + \\cdots , \\quad ( 0 < | z | < \\infty )$$
所以
$$z=0为本性奇点.$$
</Collapsible>

# 总结
$$
\\begin{array}{|c|c|c|}
\\hline
孤立奇点&洛朗级数特点&\\lim\\limits_{z\\to z_0}f(z)\\\\
\\hline
可去奇点&无负幂项&存在且为有限值\\\\
\\hline
m级极点&有限多个负幂项，最负幂为-m&\\infty\\\\
\\hline
本性奇点&无穷多个负幂项&不存在且不为\\infty\\\\
\\hline
\\end{array}
$$`,vm=`---
title: 洛朗级数
order: 2
---

# 洛朗级数

## 定理
设函数$f(z)$在圆环域$D: R_1<|z-z_0|<R_2$内解析，则$f(z)$在$D$内可展开成洛朗级数
$$f(z) = \\sum\\limits_{n=-\\infty}^{+\\infty} c_n (z - z_0)^n$$
其中洛朗系数$c_n= \\frac{1}{2\\pi i} \\oint\\limits_C \\frac{f(\\zeta)}{{\\left(\\zeta - z_0\\right)}^{n+1}} d\\zeta$，$C$为$D$内绕$z_0$的任意一条简单正向闭曲线。

## 求函数的洛朗展开式（直接法和间接法）
<Collapsible title="例1">
在$0<|z|<\\infty$内，将$f(z)=\\frac{e^z}{z^2}$展开成洛朗级数
<Collapsible title="解法1(直接法)">
设
$$f(z)=\\displaystyle \\sum\\limits_{n=-\\infty}^\\infty c_n z^n$$
则
$$c_n=\\displaystyle \\frac{1}{2\\pi i} \\oint\\limits_C \\frac{f(\\zeta)}{(\\zeta - z_0)^{n+1}} d\\zeta=\\frac{1}{2\\pi i} \\oint\\limits_C \\frac{e^{\\zeta}}{{\\zeta}^{n+3}} d\\zeta\\displaystyle \\ \\ \\ \\ C:|z|=R(0<R<\\infty)$$

当$n\\leq-3$时
$$\\displaystyle \\oint\\limits_C \\frac{e^{\\zeta}}{{\\zeta}^{n+3}} d\\zeta=0\\\\$$

当$n\\geq-2$时，由高阶导数公式，得
$$
c_n=\\frac{1}{2\\pi i} \\oint\\limits_C \\frac{e^{\\zeta}}{{\\zeta}^{n+3}} d\\zeta=\\frac{1}{(n+2)!}(e^z)^{(n+2)}\\bigg|_{z=0}=\\frac{1}{(n+2)!}\\\\
$$
所以 
$$
\\displaystyle f(z)=\\sum\\limits_{n=-2}^\\infty \\frac{z^n}{(n+2)!} ，0<|z|<\\infty
$$
</Collapsible>
<Collapsible title="解法2(间接法)">
$$
f(z)=\\frac{1}{z^2}e^z=\\frac{1}{z^2}\\sum\\limits_{n=0}^\\infty \\frac{z^n}{n!}=\\sum\\limits_{n=0}^\\infty \\frac{z^{n-2}}{n!} ，0<|z|<\\infty
$$
</Collapsible>
</Collapsible>

<Collapsible title="例2">
将函数$\\frac{\\sin z}{z}$在$z_0=0$的去心邻域内展开成洛朗级数
<Collapsible title="解">
$$\\frac{\\sin z}{z}=\\frac{1}{z}\\sum\\limits_{n=0}^\\infty \\frac{(-1)^n z^{2n+1}}{(2n+1)!}=\\sum\\limits_{n=0}^\\infty \\frac{(-1)^n z^{2n}}{(2n+1)!}，0<|z|<\\infty$$

</Collapsible>
</Collapsible>

<Collapsible title="例3">
将函数$z{(z-2)}^{-1}$在$0<|z-2|<2$内展开成洛朗级数
<Collapsible title="解">
在$0<|z-2|<2$内
$$\\frac{1}{z(z-2)}=\\frac{1}{z-2}\\cdot \\frac{1}{2+(z-2)}=\\frac{1}{z-2}\\left(\\frac{1}{2}\\cdot \\frac{1}{1+\\frac{z-2}{2}}\\right)=\\frac{1}{z-2}\\cdot \\frac{1}{2}\\sum\\limits_{n=0}^\\infty (-1)^n{\\left(\\frac{z-2}{2}\\right)}^n=\\sum\\limits_{n=0}^\\infty \\frac{(-1)^n{(z-2)}^{n-1}}{2^{n+1}}$$
</Collapsible>
</Collapsible>

<Collapsible title="例4">
函数$f(z)=\\frac{1}{(z-1)(z-2)}$在圆环域:

$1)\\ 0<|z|<1;\\ \\ \\ \\ 2)\\ 1<|z|<2;\\ \\ \\ \\ 3)\\ 2<|z|<+\\infty.$ 

内是处处解析的，试把$f(z)$在这些区域内展开成洛朗级数
<Collapsible title="解">
$$f(z)=\\frac{1}{(z-1)(z-2)}=\\frac{1}{1-z}-\\frac{1}{2-z}$$

$1)$ 在$0<|z|<1$内

$$由\\left|z\\right|<1得\\left|\\frac{z}{2}\\right|<1$$

则
$$\\frac{1}{1-z}=\\sum\\limits_{n=0}^\\infty z^n,\\ \\ \\ \\ \\frac{1}{2-z}=\\frac{1}{2}\\cdot \\frac{1}{1-\\frac{z}{2}}=\\frac{1}{2}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{z}{2}\\right)}^n$$

所以
$$f(z)=\\sum\\limits_{n=0}^\\infty z^n-\\frac{1}{2}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{z}{2}\\right)}^n=\\sum\\limits_{n=0}^\\infty \\left(1-\\frac{1}{2^{n+1}}\\right)z^n$$

$2)$ 在$1<|z|<2$内

$$由&|z|>1得 |\\frac{1}{z}|<1;\\\\
&|z|<2得 |\\frac{z}{2}|<1$$
所以
$$\\frac{1}{1-z}=-\\frac{1}{z}\\cdot \\frac{1}{1-\\frac{1}{z}}=-\\frac{1}{z}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{1}{z}\\right)}^n=-\\sum\\limits_{n=0}^\\infty {\\left(\\frac{1}{z}\\right)}^{n+1}$$
$$\\frac{1}{2-z}=\\frac{1}{2}\\cdot \\frac{1}{1-\\frac{z}{2}}=\\frac{1}{2}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{z}{2}\\right)}^n$$

所以
$$f(z)=\\frac{1}{2}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{z}{2}\\right)}^{n}-\\sum\\limits_{n=0}^\\infty {\\left(\\frac{1}{z}\\right)}^{n+1}$$
$3)$ 在$2<|z|<+\\infty$内
$$由|z|>2得\\left|\\frac{1}{z}\\right|<\\left|\\frac{2}{z}\\right|<1\\\\$$
$$\\frac{1}{2-z}=-\\frac{1}{z}\\cdot \\frac{1}{1-\\frac{2}{z}}=-\\frac{1}{z}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{2}{z}\\right)}^n$$
所以
$$f(z)=\\frac{1}{z}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{2}{z}\\right)}^{n}-\\frac{1}{z}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{1}{z}\\right)}^{n}=\\sum\\limits_{n=0}^\\infty {\\frac{2^n-1}{z^{n+1}}}$$
</Collapsible>
</Collapsible>

<Collapsible title="例5">
求$f(z)=\\frac{z^2-2z+5}{(z-2)\\left(z^2+1\\right)}$在以下圆环域：
$1)\\ 1<|z|<2;$
$2)\\ 0<|z-2|<\\sqrt{5}$
内的洛朗展开式
<Collapsible title="解">
$1)$ 在$1<|z|<2$内
$$f(z)&=\\frac{1}{2(\\frac{z}{2}-1)}-\\frac{2}{z^2(1+\\frac{1}{z^2})}\\\\
&=-\\frac{1}{2}\\cdot \\frac{1}{1-\\frac{z}{2}}-\\frac{2}{z^2}\\cdot \\frac{1}{1+\\frac{1}{z^2}}\\\\
&=-\\frac{1}{2}\\sum\\limits_{n=0}^\\infty {{\\left(\\frac{z}{2}\\right)}^n}-\\frac{2}{z^2}\\sum\\limits_{n=0}^\\infty {{(-1)^n\\left(\\frac{1}{z^2}\\right)}^n}\\\\
&=-\\frac{1}{2}\\sum\\limits_{n=0}^\\infty {\\left(\\frac{z}{2}\\right)}^{n}-2\\sum\\limits_{n=0}^\\infty {(-1)^n\\left(\\frac{1}{z^2}\\right)}^{n+2}$$

$2)$ 在$0<|z-2|<\\sqrt{5}$ 内
$$
f(z)&=\\frac{1}{z-2}-\\frac{2}{z^2+1}\\\\
&=\\frac{1}{z-2}-i\\left(\\frac{1}{z+i}-\\frac{1}{z-i}\\right)\\\\
&=\\frac{1}{z-2}-i\\left[\\frac{1}{(z-2)+(i+2)}-\\frac{1}{(z-2)+(2-i)}\\right]\\\\
&=\\frac{1}{z-2}+i\\left[\\frac{1}{(2-i)\\left(1+\\frac{z-2}{2-i}\\right)}-\\frac{1}{(2+i)\\left(1+\\frac{z-2}{2+i}\\right)}\\right]\\\\
&=\\frac{1}{z-2}+i\\left[\\frac{1}{(2-i)}\\sum\\limits_{n=0}^\\infty {(-1)^n\\left(\\frac{z-2}{2-i}\\right)}^n-\\frac{1}{(2+i)}\\sum\\limits_{n=0}^\\infty {(-1)^n\\left(\\frac{z-2}{2+i}\\right)}^n\\right]\\\\
&=\\frac{1}{z-2}+i\\sum\\limits_{n=0}^\\infty {(-1)^n(z-2)^n\\left[\\frac{1}{(2-i)^{n+1}}-\\frac{1}{(2+i)^{n+1}}\\right]}\\\\
&=\\frac{1}{z-2}+i\\sum\\limits_{n=0}^\\infty {(2-z)^n\\frac{(2+i)^{n+1}-(2-i)^{n+1}}{5^{n+1}}}
$$
</Collapsible>
</Collapsible>`,hm=`---
title: 泰勒级数
order: 1
---

# 泰勒级数
## 泰勒定理
设$f(z)$在区域$D$内解析，$z_0 \\in D$.只要圆盘$K:|z - z_0| < R$包含在$D$内，则在该圆盘内$f(z)$可以展开为唯一的幂级数
$$f(z) = \\sum\\limits_{n=0}^{\\infty} a_n {(z - z_0)}^n$$
其中，系数$a_n= \\frac{f^{(n)}(z_0)}{n!}$，这个级数称为$f(z)$在$z_0$处的**泰勒级数**或**泰勒展开式**. 特别地，当$z_0=0$时，称为**麦克劳林级数**或**麦克劳林展开式**.

**注**：若$D$内包含奇点，设最近的奇点为$\\alpha$，则$R=|z_0-\\alpha|$.

## 将函数展开成泰勒级数
### 1. 直接法：
由泰勒定理计算系数，然后写出泰勒级数
<Collapsible title="例">
求$e^z, \\sin z, \\cos z$在$z=0$处的泰勒展开式.
<Collapsible title="解">
$$&{\\left(e^z\\right)}^{(n)}=e^z\\\\
&{\\left(e^z\\right)}^{(n)}\\bigg|_{z=0} = 1$$

$$e^z=1+z+\\frac{z^2}{2!}+\\cdots+\\frac{z^n}{n!}+\\cdots=\\sum\\limits_{n=0}^\\infty \\frac{z^n}{n!}$$

因为
$$e^z在复平面处处解析$$
所以
$$级数的收敛半径R = \\infty$$

仿照上例，可得$\\sin z,\\ \\cos z$的泰勒展开式

$$&\\sin z = z-\\frac{z^3}{3!}+\\cdots+\\frac{(-1)^n z^{2n+1}}{(2n+1)!}+\\cdots= \\sum\\limits_{n=0}^{\\infty} \\frac{(-1)^n z^{2n+1}}{(2n+1)!}\\\\
&\\cos z = 1-\\frac{z^2}{2!}+\\cdots+\\frac{(-1)^n z^{2n}}{(2n)!}+\\cdots= \\sum\\limits_{n=0}^{\\infty} \\frac{(-1)^n z^{2n}}{(2n)!}$$
</Collapsible>
</Collapsible>

### 2. 间接法：
借助于一些已知函数的展开式 , 结合解析函数的性质,  幂级数运算性质 (逐项求导, 积分等)和其它数学技巧 (代换等) , 求函数的泰勒展开式.
<Collapsible title="例">
利用间接法求$\\sin z$在$z=0$处的泰勒展开式.
<Collapsible title="解">
因为
$$\\sin z = \\frac{e^{iz} - e^{-iz}}{2i},\\ 且 e^z = \\sum\\limits_{n=0}^\\infty \\frac{z^n}{n!}$$

所以
$$\\sin z = \\frac{1}{2i} \\sum\\limits_{n=0}^\\infty \\frac{(iz)^n - (-iz)^n}{n!}$$

当$n$为偶数时
$$(iz)^n - (-iz)^n = 0$$

所以只需讨论$n$为奇数时的情况，令$n=2k+1$，则

$$\\sin z &= \\frac{1}{2i} \\sum\\limits_{k=0}^\\infty \\frac{2(iz)^{2k+1}}{(2k+1)!}= \\sum\\limits_{k=0}^\\infty \\frac{(-1)^k z^{2k+1}}{(2k+1)!}$$
</Collapsible>
</Collapsible>

## 常见函数的泰勒展开式
$$
&e^z =1+z+\\frac{z^2}{2!}+\\cdots+\\frac{z^n}{n!}+\\cdots=\\sum\\limits_{n=0}^{\\infty} \\frac{z^n}{n!}\\\\
&\\frac{1}{1-z} = 1+z+z^2+\\cdots+z^n+\\cdots= \\sum\\limits_{n=0}^{\\infty} z^n,\\ |z|<1\\\\
&\\frac{1}{1+z} =1-z+z^2-\\cdots+(-1)^n z^n+\\cdots= \\sum\\limits_{n=0}^{\\infty} (-1)^n z^n,\\ |z|<1\\\\
&\\sin z = z-\\frac{z^3}{3!}+\\cdots+\\frac{(-1)^n z^{2n+1}}{(2n+1)!}+\\cdots= \\sum\\limits_{n=0}^{\\infty} \\frac{(-1)^n z^{2n+1}}{(2n+1)!}\\\\
&\\cos z = 1-\\frac{z^2}{2!}+\\cdots+\\frac{(-1)^n z^{2n}}{(2n)!}+\\cdots= \\sum\\limits_{n=0}^{\\infty} \\frac{(-1)^n z^{2n}}{(2n)!}\\\\
&\\ln(1+z) = z-\\frac{z^2}{2}+\\frac{z^3}{3}-\\cdots+\\frac{(-1)^n z^{n+1}}{n+1}+\\cdots= \\sum\\limits_{n=0}^{\\infty} \\frac{(-1)^n z^{n+1}}{n+1},\\ |z|<1\\\\
&(1+z)^\\alpha =1+ \\alpha z + \\frac{\\alpha(\\alpha-1)}{2!}z^2 + \\cdots + \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}z^n + \\cdots = \\sum\\limits_{n=0}^{\\infty} \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}z^n,\\ |z|<1
$$

## 典例
<Collapsible title="例1">
把函数$\\frac{1}{{(1+z)}^2}$展开成$z$的幂级数.
<Collapsible title="解">
因为
$$\\frac{1}{{(1+z)}^2}有一奇点z=-1，且在|z|<1时解析$$

所以
$$\\frac{1}{1+z}=\\sum\\limits_{n=0}^\\infty (-1)^n z^n$$
又
$$\\frac{1}{{(1+z)}^2}=-(\\frac{1}{1+z})'$$

所以
$$\\frac{1}{{(1+z)}^2}&=-\\left(\\sum\\limits_{n=0}^\\infty (-1)^n z^n\\right)'=-\\sum\\limits_{n=0}^\\infty \\left[(-1)^nz^n\\right]'\\\\
&=\\sum\\limits_{n=1}^\\infty (-1)^{n-1} n z^{n-1},\\ |z|<1$$
</Collapsible>
</Collapsible>

<Collapsible title="例2">
求对数函数的主值$\\ln {(1+z)}$在$z=0$处的泰勒展开式.
<Collapsible title="解">
因为
$$奇点z=-1,\\ 且在|z|<1时解析$$

所以
$$\\frac{1}{1+z}=\\sum\\limits_{n=0}^\\infty {(-1)^n z^n}$$

又
$$\\ln {(1+z)}=\\int_{0}^{z} {\\frac{1}{1+z}}dz$$

所以
$$\\ln {(1+z)}&=\\int_{0}^{z} {\\left(\\sum\\limits_{n=0}^\\infty {(-1)^n z^n}\\right)}dz=\\sum\\limits_{n=0}^\\infty {\\left(\\int_{0}^{z} {(-1)^n z^n }dz\\right)}\\\\
&=\\sum\\limits_{n=0}^\\infty {\\frac{(-1)^n z^{n+1}}{n+1}},\\ |z|<1$$
</Collapsible>
</Collapsible>

<Collapsible title="例3">
求$\\arctan z$在$z=0$处的幂级数展开式.
<Collapsible title="解">
因为
$$\\arctan z=\\int_{0}^{z} {\\frac{1}{1+z^2}}dz,$$
$$\\frac{1}{1+z^2}=\\frac{1}{1-(-z)^2}=\\sum\\limits_{n=0}^\\infty {(-z)^{2n}},\\ |z|<1$$

所以
$$\\arctan z&=\\int_{0}^{z} {\\left(\\sum\\limits_{n=0}^\\infty {(-1)^n z^{2n}}\\right)}dz=\\sum\\limits_{n=0}^\\infty {\\left(\\int_{0}^{z} {(-1)^n z^{2n} }dz\\right)}\\\\
&=\\sum\\limits_{n=0}^\\infty {\\frac{(-1)^n z^{2n+1}}{2n+1}},\\ |z|<1$$
</Collapsible>
</Collapsible>

<Collapsible title="例4">
求\${\\cos}^2z$在$z=0$处的幂级数展开式.
<Collapsible title="解">
因为
$\${\\cos}^2z=\\frac{1+\\cos 2z}{2}$$

又
$$\\cos 2z=\\sum\\limits_{n=0}^\\infty \\frac{(-1)^n (2z)^{2n}}{(2n)!}$$

所以
$\${\\cos}^2z=\\frac{1}{2}+\\frac{1}{2}\\sum\\limits_{n=0}^\\infty \\frac{(-1)^n (2z)^{2n}}{(2n)!}$$
</Collapsible>
</Collapsible>`,ym=`---
id: discrete-signals
title: 序列的运算
order: 1
---

# 序列的运算

离散时间信号通常用序列 $x[n]$ 表示。
`,_m=`---
id: basic-equations
title: 静电场基本方程
order: 1
---

# 点电荷产生的电场
单个点电荷$q$的电场为
$$\\vec { E } ( \\vec { r } ) = \\frac { \\vec { F } } { q _ { s } } =  \\frac{\\frac { q q _ { s } } { 4 \\pi \\varepsilon _ { 0 } R ^ { 2 } } \\vec { e_ { R } }  }{q _ { s }}= \\frac { q } { 4 \\pi \\varepsilon _ { 0 } R ^ { 2 } } \\vec { e_ { R } } = - \\frac { q } { 4 \\pi \\varepsilon _ { 0 } } \\nabla \\left( \\frac { 1 } { R } \\right)$$
多个点电荷
$$\\vec { E } = \\frac { 1 } { 4 \\pi \\varepsilon _ { 0 } } \\sum _ { i = 1 } ^ { n } \\frac { q _ { i } } { R _ { i } ^ { 3 } } \\vec { R } _ { i }$$
连续分布的电荷系统产生的电场
$$\\vec { E } = \\frac { 1 } { 4 \\pi \\varepsilon _ { 0 } } \\int _ { V } \\frac { \\rho } { R ^ { 3 } } \\vec { R } d v$$
# 静电场基本方程
## 高斯定理微分形式
真空中静电场的散度为
$$\\nabla \\cdot \\vec{E}(\\vec{r}) = \\begin{cases} 0, & \\vec{r}\\text{处无电荷} \\\\ \\dfrac{\\rho(\\vec{r})}{\\varepsilon_0}, & \\vec{r}\\text{处电荷密度为}\\rho \\end{cases}$$
## 高斯定理
$$\\oint_{S} \\vec{E} \\cdot d\\vec{S} = \\frac{Q}{\\varepsilon_0}$$
$S$为高斯面，$Q$为高斯面所围电荷
### 利用高斯定理求解静电场
适用于呈对称分布的电场
<Collapsible title="例1">
半径为$a$的球形带电体，电荷总量$Q$均匀分布在球体内。求$\\vec{E}(\\vec{r})$
<Collapsible title="解">
电场大小只与$R$有关，取同心球面为高斯面
电荷总量在球外为恒定值，在球内可用表达式表达，所以分两类讨论
$r\\ge a$
由高斯定理
$$\\oint_S \\vec{E} \\cdot d\\vec{S} &= \\vec{E} \\cdot (4\\pi r^2 \\vec{e}_r) = \\frac{Q}{\\varepsilon_0}\\\\
\\vec{E} &= \\frac{Q}{4\\pi\\varepsilon_0 r^2} \\vec{e}_r$$
$r<a$
电荷密度
$$\\rho = \\frac{Q}{V} = \\frac{3Q}{4\\pi a^3}$$
带电量
$$Q ^ { \\prime } = \\rho V = \\frac { 3 Q } { 4 \\pi a ^ { 3 } } \\cdot \\frac { 4 } { 3 } \\pi r ^ { 3 } = \\frac { r ^ { 3 } } { a ^ { 3 } } Q$$
由高斯定理
$$\\oint_S \\vec{E} \\cdot d\\vec{S} &= \\vec{E} \\cdot (4\\pi r^2 \\vec{e}_r) = \\frac{Q^ { \\prime } }{\\varepsilon_0}\\\\
\\vec{E} &= \\frac{Q r}{4\\pi\\varepsilon_0 a^3} \\vec{e}_r$$
所以
$$\\vec{E} = \\begin{cases} \\dfrac{Q}{4\\pi\\varepsilon_0 r^2} \\vec{e}_r, & r > a \\\\ \\dfrac{Q r}{4\\pi\\varepsilon_0 a^3} \\vec{e}_r, & r \\leq a \\end{cases}$$
</Collapsible>
</Collapsible>
<Collapsible title="例2">
求半径为$R$，均匀带电量$q$(>0)的球壳内、外的电场分布
<Collapsible title="解">
取同心球面为高斯面，由高斯定理
$$\\oint_S \\vec{E} \\cdot d\\vec{S} &= \\vec{E}\\cdot (4\\pi r^2 \\vec{e}_r) = \\begin{cases} 0, & r < R \\\\ \\dfrac{q}{\\varepsilon_0}, & r \\geq R \\end{cases}\\\\\\vec{E} &= \\begin{cases} 0, & r < R \\\\ \\dfrac{q}{4\\pi\\varepsilon_0 r^2} \\vec{e}_r, & r \\geq R \\end{cases}$$
</Collapsible>
</Collapsible>
<Collapsible title="例3">
一个均匀分布带电球层，电荷体密度为$\\rho$，球层内表面半径为$R$，外表面为$2R$，求电场分布
<Collapsible title="解">
取同心球面为高斯面
带电量
$r\\le R$
$$q=0$$
$R<r\\le 2R$
带电体积
$$V = \\frac{4}{3} \\pi ( r^3 - R^3 )$$
所以
$$q = \\rho V = \\frac{4}{3} \\pi ( r^3 - R^3 ) \\rho$$
$r>2R$
$$V = \\frac{4}{3} \\pi [(2R)^3 - R^3] = \\frac{28}{3} \\pi R^3$$
$$q = \\frac{28}{3} \\pi R^3 \\rho$$
所以，由高斯定理
$$\\oint_S \\vec{E} \\cdot d\\vec{S} = \\vec{E} \\cdot (4\\pi r^2\\vec{e}_r) = \\frac{q}{\\varepsilon_0}$$
得
$$\\vec{E} = \\begin{cases} 0 & , r \\le R \\\\ \\dfrac{(r^3 - R^3)\\rho}{3\\varepsilon_0 r^2} & , R < r \\le 2R \\\\ \\dfrac{7R^3\\rho}{3\\varepsilon_0 r^2} & , r > 2R \\end{cases}$$
</Collapsible>
</Collapsible>
## 环路定律
$$\\int_{l} \\vec{E} \\cdot d\\vec{l} = \\frac{q}{4\\pi\\varepsilon_0} \\int \\frac{\\vec{e}_r \\cdot d\\vec{l}}{R^2} = \\frac{q}{4\\pi\\varepsilon_0} \\int_{R_A}^{R_B} \\frac{dR}{R^2} = \\frac{q}{4\\pi\\varepsilon_0} \\left( \\frac{1}{R_A} - \\frac{1}{R_B} \\right)$$
当$AB$点重合时
$$\\oint_{l} \\vec{E} \\cdot d\\vec{l} = 0$$
由斯托克斯公式
$$\\nabla \\times \\vec { E } ( \\vec { r } ) = 0$$
环路定律说明：在静电场将单位电荷沿任一闭合路径运动，静电场做功为零即静电场为保守场。静电场旋度处处为零即静电场不存在漩涡源。
# 总结
静电场是有源无旋场，为保守场，源于电荷`,gm=`---
id: p-d
title: 介质的极化和电位移矢量
order: 2
---

# 极化和极化强度矢量
## 介质极化
**电偶极子**：由2个相距很近的带等量异号点电荷组成的系统
**电偶极矩**：表示电偶极子的大小和取向
$$\\vec{p}=q\\vec{l}$$
**无极分子**：在没有外电场时，分子内部的正电荷中心与负电荷中心重合。分子固有的电偶极矩为零
**有极分子**：在没有外电场时，分子内部的正负电荷中心不重合。分子就具有电偶极矩
**介质的极化**：在外场影响下，无极分子变为有极分子，有极分子的取向一致。宏观上出现电偶极矩
## 极化强度矢量
单位体积内电偶极矩矢量和
$$\\vec { p } = \\lim _ { \\Delta V \\rightarrow 0 } \\frac { \\sum\\limits_{i = 1}^{ n } \\vec { p _ { i } } } { \\Delta V }$$
对于线性介质，极化强度和外加电场成正比
$$\\vec { P } = \\chi _ { e } \\varepsilon _ { 0 } \\vec { E }$$
$\\chi _ { e }$为介质极化系数

# 极化电荷（束缚电荷）
媒质被极化后，在其内部和分界面上会出现电荷分布，这种电荷称为**极化电荷**。相对于自由电子，极化电荷不能自由移动，所以也称为**束缚电荷**
## 极化电荷体密度
$$\\rho _ { \\mathrm { p } } = - \\nabla \\cdot \\vec { P }$$
## 电位移矢量
$$\\vec { D } = \\varepsilon _ { 0 } \\vec { E } + \\vec { P }$$
对于线性介质
$$\\vec { P } = \\chi _ { e } \\varepsilon _ { 0 } \\vec { E }$$
所以
$$\\vec { D } = ( 1 + \\chi _ { e } ) \\varepsilon _ { 0 } \\vec { E } = \\varepsilon _ { 0 } \\varepsilon _ { r } \\vec { E } = \\varepsilon \\vec { E }$$
其中，$\\varepsilon _ { 0 }$称为相对介电常数$\\varepsilon$称为介电常数
<Collapsible title="例">
在线性均匀媒质中，已知电位移矢量$\\vec{D}$的$z$分量为$D_z=20nC/m^2$，极化强度$\\vec{P}=\\vec{e_x}9-\\vec{e_y}21+\\vec{e_z}15nC/m^2$，求介质中的电场强度和电位移矢量
<Collapsible title="解">
$$\\vec { D } &= \\varepsilon _ { 0 } \\vec { E } + \\vec { P } = \\frac { \\varepsilon _ { 0 } } { \\varepsilon _ { r } } \\vec { D } + \\vec { P }\\\\
\\vec { P } &= ( 1 - \\frac { 1 } { \\varepsilon _ { r } } ) \\vec { D }\\\\
\\varepsilon _ { r } &= 4\\\\
\\vec { D } &= \\frac { 4 } { 3 } \\vec { P } = 12 \\vec { e } _ { x } - 28 \\vec { e } _ { y } + 20 \\vec { e } _ { z }nC / m ^ { 2 }\\\\
\\vec { E } &= \\frac { \\vec { D } } { 4 \\varepsilon _ { 0 } } = \\frac { 1 } { \\varepsilon _ { 0 } } ( 3 \\vec { e } _ { x } - 7 \\vec { e } _ { y } + 5 \\vec { e } _ { z } )nC / m ^ { 2 }
$$
</Collapsible>
</Collapsible>

# 介质静电场基本方程
## 介质中的高斯定理
真空中
$$\\oint_{S} \\varepsilon_{0} \\vec{E} \\cdot d\\vec{S} = q$$
$$\\nabla \\cdot \\varepsilon_{0}\\vec{E} = \\rho$$
类似地，在介质中
$$\\oint_{S} \\varepsilon \\vec{E} \\cdot d\\vec{S} = \\oint_{S} \\vec{D} \\cdot d\\vec{S} = q$$
$$\\nabla \\cdot \\vec{D} = \\rho$$
## 介质中的环路定律
在介质中，静电场仍为保守场
$$\\oint_{l} \\vec{E} \\cdot d\\vec{l} = 0$$
$$\\nabla \\times \\vec{E} = 0$$
## 对基本方程的讨论
式子中$q$为自由电荷电量，不包含极化部分
$$
\\oint_S \\vec{D} \\cdot d\\vec{S} &= q\\\\
\\oint_S (\\vec{D}_0 + \\vec{P}) \\cdot d\\vec{S} &= q\\\\
\\oint_S \\vec{D}_0 \\cdot d\\vec{S} + \\oint_S \\vec{P} \\cdot d\\vec{S} &= q
$$
由散度定理，极化电荷体密度
$$\\oint_{S} \\vec{P} \\cdot d\\vec{S} = \\int_{V} \\nabla \\cdot \\vec{P} dV = -q_{p}$$
得$$\\oint_S \\vec{D}_0 \\cdot d\\vec{S} = q + q_p$$
即：电介质中，穿过闭合面$S$的电通量由真空中的电通量和极化电荷穿过闭合面$S$的电通量组成
## 边界条件
场在不同介质分界面上的变化规律称为**边界条件**
$$E_{1t} = E_{2t}$$
即电场强度的切向分量在边界面两侧是连续的
<Collapsible title="例">
球形电容器内导体半径为$a$，外球壳半径为$b$。其间充满介电常数为$\\varepsilon_1$和$\\varepsilon_2$的两种均匀媒质（上半球面为$\\varepsilon_2$下半球面为$\\varepsilon_1$）设内导体带电荷为$q$，外球壳接地，求球壳间的电场
<Collapsible title="解">
取定$r$，由对称性，上半球面电场为恒定$E_2$，下半球面为恒定$E_1$，又由边界条件可得$E_1=E_2=E$
所以取同心球面为高斯面，由高斯定理
$$\\oint_S \\vec{D} \\cdot d\\vec{S} &= \\oint_S (\\vec{D}_1 + \\vec{D}_2) \\cdot d\\vec{S} \\\\ 
&= (\\vec{D}_1 + \\vec{D}_2) \\cdot (2\\pi r^2 \\vec{e}_r)\\\\
&=( \\varepsilon _ { 1 } + \\varepsilon _ { 2 } ) \\vec { E }\\cdot ( 2 \\pi r ^ { 2 } \\vec { e } _ { r } ) = q\\\\
\\vec { E } &= \\frac { q } { 2 \\pi ( \\varepsilon _ { 1 } + \\varepsilon _ { 2 } ) r ^ { 2 } } \\vec { e } _ { r }$$
</Collapsible>
</Collapsible>`,zm=`---
id: 三平
title: 平均电能、平均磁能、平均能密
order: 2
---

# 平均电能、平均磁能、平均能密
$$W _ { e } = \\frac { 1 } { 2 } \\vec { E } \\cdot \\vec { D } = \\frac { 1 } { 2 } \\varepsilon | \\vec { E } | ^ { 2 }$$
$$W _ { m } = \\frac { 1 } { 2 } \\vec { H } \\cdot \\vec { B } = \\frac { 1 } { 2 } \\mu | \\vec { H } | ^ { 2 }$$
$$\\vec { S } = \\vec { E } \\times \\vec { H } = \\vec { E } _ { 0 } \\times \\vec { H } _ { 0 } \\cos ^ { 2 } ( \\omega t + \\phi )$$$$W_{e,av} = \\frac{1}{T} \\int_0^T W_e dt$$
$$W_{m,av} = \\frac{1}{T} \\int_0^T W_m dt$$
能流矢量（波印亭）
$$\\vec{S}_{av} = \\frac{1}{T} \\int_0^T \\vec{S} dt$$
## 复数转实数
$\\cdot e^{j\\omega t}$后取实部
`,Sm=`---
id: 全反射和全透射
title: 全反射和全透射
order: 4
---

# 全反射
非磁性介质从光密到光疏（$\\varepsilon_1 > \\varepsilon_2$），入射角（$\\theta_i \\ge \\theta_c$）
折射定律
$$\\frac { \\sin \\theta _ { i } } { \\sin \\theta _ { c } } = \\sqrt { \\frac { \\varepsilon _ { 2 } } { \\varepsilon _ { 1 } } }$$
透射角$>$入射角，当透射角$=90°$时，入射角增大，透射角消失即全反射
$$\\theta _ { c } = \\arcsin \\sqrt { \\frac { \\varepsilon _ { 2 } } { \\varepsilon _ { 1 } } }$$
平面波向理想导体表面斜射时，无论入射角均为发生全反射。因电磁波无法进入，必然被全部反射。

# 全透射
反射系数为0时没有反射，也叫做全透射
折射定律其他形式
$$\\frac { \\sin \\theta _ { i } } { \\sin \\theta _ { t } } = \\frac { n _ { 2 } } { n _ { 1 } }$$
在非磁性介质中（$\\mu_{1} = \\mu_{2}$）只有平行极化波有全投射现象
布儒斯特角（极化角）
$$\\theta _ { b } + \\theta _ { t } = \\frac { \\pi } { 2 }$$
$$\\theta _ { b } = \\arctan \\sqrt { \\frac { \\varepsilon _ { 2 } } { \\varepsilon _ { 1 } } }$$`,wm=`---
id: 均匀平面电磁波的传播特性
title: 均匀平面电磁波的传播特性
order: 1
---

# 均匀平面电磁波的传播特性
相位常数
$$\\beta = { \\frac { 2 \\pi } { \\lambda } }$$
对于无耗介质
$$\\beta = \\omega \\sqrt { \\varepsilon \\mu } = \\frac { \\omega } { c } \\sqrt { \\varepsilon _ { r } \\mu _ { r } }$$
以及一些波的公式
$$c = \\lambda f$$
$$\\omega = 2 \\pi f$$
相位
$$+ z &: ( \\omega t - k z ) \\\\ - z &: ( \\omega t + k z )$$
## 电场与磁场的相互转换
$$\\vec { E } &= \\eta \\vec { H } \\times \\vec { e } _ { k }\\\\
\\vec { H } &= \\frac { 1 } { \\eta } ( \\vec { e } _ { k } \\times \\vec { E } )$$
记忆：
$$\\vec{E} \\rightarrow \\vec{H} \\rightarrow \\vec{e}_k \\rightarrow \\vec{E} \\rightarrow \\vec{H}$$
真空中
$$\\eta _ { 0 } = 1 2 0 \\pi$$
## 任意方向的电磁波
相位因子
$$e ^ { - j \\vec { k } \\cdot \\vec { r } } = e ^ { - j ( k _ { x } x + k _ { y } y + k _ { z } z ) }$$
$$\\vec { k } = k _ { x } \\vec { e } _ { x } + k _ { y } \\vec { e } _ { y } + k _ { z } \\vec { e } _ { z }$$
$$\\beta = k = | \\vec { k } |$$
求参：
$$\\vec { k } \\cdot \\vec { E } = \\vec { k } \\cdot \\vec { H } = 0$$
叉乘验算用点乘
## 特性
电场、磁场与传播方向之间相互垂直，是横电磁波（TEM波）
无衰减，电场与磁场的振幅不变
波阻抗为实数，电场与磁场同相位
电磁波的相速与频率无关，无色散
电场能量密度等于磁场能量密度
能量的传输速度等于相速`,km=`---
id: 垂直入射
title: 均匀平面电磁波的垂直入射
order: 3
---

# 均匀平面电磁波的垂直入射
理想导体反射后电场反向磁场正向，系数都为1，变相位
电流密度
$$\\vec { J } _ { s } = \\vec { n } \\times \\vec { H }$$
$ \\vec { n }$为从导体到波的方向
反射系数
$$\\rho = \\frac { \\eta _ { 2 } - \\eta _ { 1 } } { \\eta _ { 2 } + \\eta _ { 1 } }$$
透射系数
$$\\tau = 1 + \\rho$$
运算顺序
传输方向、电场方向、磁场方向
$$\\vec { S } / / \\vec { E } \\times \\vec { H }$$

## 水平极化波
1区电场
加上反射后总
$$\\vec { E } _ { i } ( z ) = \\vec { e } _ { x } { E } _ { i m } ( e ^ { - j \\beta _ { 1 } z } + \\rho e ^ { j \\beta _ { 1 } z } )$$
2区电场
透射
$$\\vec { E } _ { t } = \\vec { e } _ { x } \\tau { E } _ { t m } e ^ { - j \\beta _ { 2 } z }$$
$$\\rho _ { // } = \\frac { \\eta _ { 2 } \\cos \\theta _ { t } - \\eta _ { 1 } \\cos \\theta _ { i } } { \\eta _ { 2 } \\cos \\theta _ { t } + \\eta _ { 1 } \\cos \\theta _ { i } }$$
$$\\tau_{//} = 1 + \\rho_{//} \\frac { \\cos \\theta_e } { \\cos \\theta_i }$$

## 一些数学公式
$$\\sin \\alpha = \\cos ( \\alpha - \\frac { \\pi } { 2 } )$$
$$\\sin A - \\sin B = 2 \\cos \\frac { A + B } { 2 } \\sin \\frac { A - B } { 2 }$$
$$\\cos A - \\cos B = - 2 \\sin \\frac { A + B } { 2 } \\sin \\frac { A - B } { 2 }$$
$$\\sin A + \\sin B = 2 \\sin \\frac { A + B } { 2 } \\cos \\frac { A - B } { 2 }$$
$$\\cos A + \\cos B = 2 \\cos \\frac { A + B } { 2 } \\cos \\frac { A - B } { 2 }$$
$$a\\cos\\theta - b\\sin\\theta = \\sqrt{a^2 + b^2} \\cos(\\theta + \\varphi),\\ \\tan\\varphi = \\frac{b}{a}$$`,Em=`---
id: 导电媒质
title: 导电煤质中的电磁波
order: 5
---

# 导电煤质中的电磁波
良导体
$$\\frac { \\sigma } { \\omega \\varepsilon } \\gg 1$$
弱导体
$$\\frac { \\sigma } { \\omega \\varepsilon } \\ll 1$$
一般导体则大概为1
此时$$\\eta \\rightarrow \\eta _ { c } = \\sqrt { \\frac { 2 \\pi f \\mu } { \\sigma } } e ^ { - j \\frac { \\pi } { 4 } }$$
衰减常数和相位常数
$$\\alpha = \\sqrt { \\pi f \\mu \\sigma } \\approx \\beta$$
幅度衰减，量$\\cdot e^{-\\alpha z}$
磁场滞后$\\frac { \\pi } { 4 }$
$$v = \\frac { w } { \\beta }$$
$$\\lambda = \\frac { 2 \\pi } { \\beta }$$`,Cm=`---
id: faraday-law
title: 法拉第电磁感应定律
order: 1
---

# 法拉第电磁感应定律
当穿过导体回路的磁通量发生改变时，回路中产生的感应电动势与回路磁通量的时间变化率成正比
$$\\varepsilon _ { i n } = - { \\frac { d \\phi } { d t } }$$
"-"表示回路中产生的感应电动势总是要阻止回路磁通量的改变
感应电动势产生感应电场$\\vec{E}_{in}$
定义
$$\\varepsilon _ { i n } = \\oint _ { C } { \\vec { E } } _ { i n } d { \\vec { l } }$$
由上述两式可得
$$\\oint _ { C } { \\vec { E } } _ { i n } \\cdot d { \\vec { l } } &= - { \\frac { d \\phi } { d t } }\\\\
&= \\frac { d } { d t } \\oint _ { S } { \\vec { B } } \\cdot d { \\vec { S } }$$
## 微分形式
$$\\nabla \\times \\vec{E} = - \\frac { d \\vec{B} } { d t }$$
物理意义：随时间变化的磁场将产生电场
感应电场是有旋场
# 位移电流
在电容器之间，存在着因变化的电场而形成的电流，其性质与传导电流完全不同，量值与回路中自由电流相等。
定义位移电流
$$\\vec{J}_{e} = \\frac{\\partial \\vec{D}}{\\partial t}$$`,xm=`---
id: maxwell-equations
title: 麦克斯韦方程组
order: 2
---

# 麦克斯韦方程组
## 微分形式
$$
\\begin{cases}
\\nabla \\times \\vec{H} = \\vec{J_e} + \\vec{J_d} = \\vec{J_e} + \\dfrac{\\partial \\vec{D}}{\\partial t} \\quad (安培环路定律推广)\\\\
\\nabla \\times \\vec{E} = -\\dfrac{\\partial \\vec{B}}{\\partial t} \\quad (法拉第电磁感应定律)\\\\
\\nabla \\cdot \\vec{B} = 0 \\quad (磁场散度定理)\\\\
\\nabla \\cdot \\vec{D} = \\rho \\quad (电场散度定理)
\\end{cases}
$$
## 积分形式
$$
\\begin{cases}
\\oint_C \\vec{H} \\cdot d\\vec{l} = \\int_S \\left( \\vec{J_e} + \\dfrac{\\partial \\vec{D}}{\\partial t} \\right) \\cdot d\\vec{S} \\\\
\\oint_C \\vec{E} \\cdot d\\vec{l} = -\\int_S \\dfrac{\\partial \\vec{B}}{\\partial t} \\cdot d\\vec{S} \\\\
\\oint_S \\vec{B} \\cdot d\\vec{S} = 0 \\\\
\\oint_S \\vec{D} \\cdot d\\vec{S} = \\int_V \\rho \\, dV = Q
\\end{cases}
$$
## 限定形式
在介质中，场量之间必须满足介质的本构关系。在线性、各向同性介质中
$$\\vec{D} = \\varepsilon \\vec{E}, \\quad\\vec{B} = \\mu \\vec{H}, \\quad \\vec{J} = \\gamma \\vec{E}$$
代入麦克斯韦方程组得
$$
\\begin{cases}
\\nabla \\times \\vec{H} = \\gamma \\vec{E} + \\varepsilon \\dfrac{\\partial \\vec{E}}{\\partial t} \\\\
\\nabla \\times \\vec{E} = -\\mu \\dfrac{\\partial \\vec{B}}{\\partial t} \\\\
\\nabla \\cdot (\\mu \\vec{H}) = 0 \\\\
\\nabla \\cdot (\\varepsilon \\vec{E}) = \\rho
\\end{cases}
$$
## 物理意义
时变电场的激发源除电荷之外，还有变化的磁场；时变磁场的激发源除传导电流外，还有变化的电场
电场和磁场互为激发源，相互激发
电场和磁场不再相互独立，构成一个整体——电磁场
# 例题
<Collapsible title="例">
在$z=0$，$z=d$位置有两个无限大理想导体板，在极板间存在时变电磁场，其电场强度为
$$\\vec{E} = \\vec{e}_y E_0 \\sin\\left(\\frac{\\pi}{d} z\\right) \\cos(\\omega t - k_x x)$$
求：该时变场相伴的磁场强度$H$
<Collapsible title="解">
由麦克斯韦方程组
$$\\nabla \\times \\vec{E} &= - \\frac { \\partial \\vec { B } } { \\partial t }\\\\
- \\frac { \\partial \\vec { B } } { \\partial t } &= \\vec { e } _ { z } \\frac { \\partial E _ { y } } { \\partial x } - \\vec { e } _ { x } \\frac { \\partial E _ { y } } { \\partial z }\\\\
\\frac { \\partial \\vec { B } } { \\partial t } &= - \\vec { e } _ { z } E _ { 0 } k _ { x } \\sin ( \\frac { \\pi } { d } z ) \\sin ( \\omega t - k _ { x } x ) + \\vec { e } _ { x } \\frac { \\pi E _ { 0 } } { d } \\cos ( \\frac { \\pi } { d } z ) \\cos ( \\omega t - k _ { x } x )\\\\
\\vec{B} &= \\int \\frac{\\partial \\vec{B}}{\\partial t} dt\\\\
&= \\vec{e}_z \\frac{E_0 k_x}{\\omega} \\sin\\left(\\frac{\\pi}{d} z\\right) \\cos(\\omega t - k_x x) + \\vec{e}_x \\frac{\\pi E_0}{\\omega d} \\cos\\left(\\frac{\\pi}{d} z\\right) \\sin(\\omega t - k_x x)\\\\
\\vec{H} &= \\frac{\\vec{B}}{\\mu_0} = \\vec{e}_x \\frac{\\pi E_0}{\\omega d \\mu_0} \\cos\\left(\\frac{\\pi}{d} z\\right) \\sin(\\omega t - k_x x) + \\vec{e}_z \\frac{E_0 k_x}{\\omega \\mu_0} \\sin\\left(\\frac{\\pi}{d} z\\right) \\cos(\\omega t - k_x x)$$
</Collapsible>
</Collapsible>`,Pm=`---
id: circulation-curl
title: 矢量场的环流和旋度
order: 2
---

# 环量
环绕即闭合曲线，所以**环量**为场矢量沿闭合曲线的积分
$$\\Gamma = \\oint _ { C } { \\vec { A } } ( { \\vec { r } } ) \\cdot d { \\vec { r } }$$
## 环量的计算
$$\\Gamma = \\oint _ { C } ( A _ { x } d x + A _ { y } d y + A _ { z } d z )$$
意义：若矢量场环流不为零，则回路中存在产生矢量场的漩涡源。
## 环量面密度
面$S$的法线方向为$\\vec{n}$，**环量面密度**
$$\\mathrm { r o t } _ { n } { \\vec { A } } = \\lim _ { \\Delta S \\to 0 } { \\frac { \\oint _ { l } { \\vec { A } } \\cdot d { \\vec { l } } } { \\Delta S } }$$
# 旋度
$$\\mathrm { r o t } \\vec { A } = \\vec { n } \\lim _ { \\Delta S \\to 0 } \\frac { \\oint _ { l } \\vec { A } \\cdot d \\vec { l } } { \\Delta S } \\bigg| _ { \\mathrm { m a x } }$$
# 旋度的计算
$$\\mathrm { r o t } \\vec { A } = \\nabla \\times \\vec { A } = \\left| \\begin{array} { c c c } { { \\vec { e } _ { x } } } & { { \\vec { e } _ { y } } } & { { \\vec { e } _ { z } } } \\\\ { { \\frac { \\partial } { \\partial x } } } & { { \\frac { \\partial } { \\partial y } } } & { { \\frac { \\partial } { \\partial z } } } \\\\ { { A _ { x } } } & { { A _ { y } } } & { { A _ { z } } } \\end{array} \\right|$$
# 斯托克斯定理
矢量场的旋度的面积分等于该矢量场在该面的闭合曲线的线积分
$$\\int _ { S } ( \\nabla \\times \\vec { A } ) d \\vec { S } = \\oint _ { C } \\vec { A } \\cdot d \\vec { l }$$
# 旋度的重要性质
任意矢量场旋度的散度等于零
$$\\nabla \\cdot ( \\nabla \\cdot \\vec { A } ) = 0$$

`,Rm=`---
id: flux-divergence
title: 矢量场的通量和散度
order: 1
---

# 通量
矢量场$\\vec{A}(\\vec{r})$“流经”曲面一点的“量”可以通过
$$| \\vec { A } ( s ) | | \\vec { n } | \\cos \\theta = \\vec { A } ( s ) \\cdot \\vec { n }$$
表示，若要求流经一个面的量，也就是**通量**就是面积分
$$\\phi = \\int _ { S } \\vec { A } ( \\vec { r } ) \\cdot d \\vec { S }$$

# 散度
通量在闭合曲面某点分散的“度”，即
$$\\operatorname { d i v } \\vec { A } ( \\vec { r } ) = \\lim _ { \\Delta V \\to 0 } \\frac { \\oint _ { S } \\vec { A } ( \\vec { r } ) \\cdot d \\vec { S } } { \\Delta V }$$
若$\\operatorname { d i v }=0$恒成立则称为无源场反之有源场（此时$\\operatorname { d i v }$称为源密度）。

## 散度的计算
$$\\operatorname { d i v } \\vec { A } ( \\vec { r } ) = \\frac { \\partial A _ { x } } { \\partial x } + \\frac { \\partial A _ { y } } { \\partial y } + \\frac { \\partial A _ { z } } { \\partial z }= \\nabla \\cdot \\vec { A } ( \\vec { r } )$$
式中
$$\\nabla = \\left( \\vec{e}_x \\frac{\\partial}{\\partial x} + \\vec{e}_y \\frac{\\partial}{\\partial y} + \\vec{e}_z \\frac{\\partial}{\\partial z} \\right)$$
称为哈密顿算符

# 散度定理（矢量场的高斯定理）
矢量场散度的体积分等于矢量场在该体积的边界面$S$的积分
$$\\int _ { V } \\nabla \\cdot \\vec { A } ( \\vec { r } ) d V = \\oint _ { S } \\vec { A } ( \\vec { r } ) \\cdot d \\vec{S}$$`,Nm=`---
id: helmholtz
title: 亥姆霍兹定理
order: 3
---

# 亥姆霍兹定理
在有限区域内，任意矢量场由其散度、旋度和边界条件（即在边界上的分布）唯一确定

# 矢量场的分类
## 调和场
散度和旋度均为零
## 有源无旋场
旋度处处为零，散度有不为零的地方
由斯托克斯定理可得其沿任何闭合路径积分结果等于零，也称为**保守场**
## 无源有旋场
散度处处为零，旋度有不为零（称为漩涡源密度）的地方
## 有源有旋场
散度和旋度都有不为零的地方
可分解为有源无旋场和无源有旋场的叠加`,Tm=`---
id: continuity
title: 函数的连续性
order: 2
---

# 函数的连续性

若 $\\lim\\limits_{x \\to x_0} f(x) = f(x_0)$，则称 $f(x)$ 在 $x_0$ 处连续。
`,Lm=`---
id: limits
title: 极限的定义与性质
order: 1
---

# 极限的定义与性质

如果当 $x$ 足够接近 $x_0$ 时，我们可以使 $f(x)$ 任意接近 $A$，那么函数 $f(x)$ 当 $x$ 趋近于 $x_0$ 时的极限就是 $A$。

$$ \\lim\\limits_{x \\to x_0} f(x) = A $$

<Collapsible title="例题：基本极限计算">
求 $\\lim\\limits_{x \\to 1} (x^2 + 2x)$。

<Collapsible title="查看解答">
$$ 1^2 + 2(1) = 3 $$
</Collapsible>
</Collapsible>
`,Om=`---
id: derivatives
title: 导数的几何意义
order: 1
---

# 导数的几何意义

导数 $f'(x_0)$ 表示曲线 $y=f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率。
`,jm=`---
title: 一般级数
---

# 一般级数
## 常数项级数
**性质1**（级数收敛的必要条件）如果级数$\\sum\\limits_{n=1}^{\\infty} a_n$收敛，那么$\\lim\\limits_{n\\to\\infty} a_n=0$

**性质5**（级数的结合律）若级数$\\sum\\limits_{n=1}^{\\infty} a_n$收敛，那么其按某一规律加括号后所成的级数仍收敛于原级数的和

**推论**：若级数$\\sum\\limits_{n=1}^{\\infty} a_n$按某一规律加括号后所成的级数发散，则原级数必发散

## 正项级数
**定义** 级数$\\sum\\limits_{n=1}^{\\infty} a_n$的项$a_n\\ge0$的级数称为正项级数

**定理1**（正项级数收敛的充要条件）正项级数$\\sum\\limits_{n=1}^{\\infty} a_n$收敛的充要条件是它的部分和数列$\\{S_n\\}$有界

**定理2**（比较审敛法）设$\\sum\\limits_{n=1}^{\\infty} a_n$和$\\sum\\limits_{n=1}^{\\infty} b_n$是两个正项级数，且$\\forall n\\in\\mathbb{N}^*$，$a_n\\le b_n$，则

（1）$\\sum\\limits_{n=1}^{\\infty} b_n$收敛，则$\\sum\\limits_{n=1}^{\\infty} a_n$收敛

（2）$\\sum\\limits_{n=1}^{\\infty} a_n$发散，则$\\sum\\limits_{n=1}^{\\infty} b_n$发散

**定理3**（比较审敛法的极限形式）设$\\sum\\limits_{n=1}^{\\infty} a_n$和$\\sum\\limits_{n=1}^{\\infty} b_n$是两个正项级数，且$\\lim\\limits_{n\\to\\infty} \\frac{a_n}{b_n}=c$，则

（1）$c<\\infty$，则$\\sum\\limits_{n=1}^{\\infty} a_n$和$\\sum\\limits_{n=1}^{\\infty} b_n$同敛散性

（2）$c=0$，且$\\sum\\limits_{n=1}^{\\infty} b_n$收敛，则$\\sum\\limits_{n=1}^{\\infty} a_n$收敛

（3）$c=\\infty$，且$\\sum\\limits_{n=1}^{\\infty} b_n$发散，则$\\sum\\limits_{n=1}^{\\infty} a_n$发散

**定理4**（比值审敛法）设$\\sum\\limits_{n=1}^{\\infty} a_n$是正项级数，且$\\lim\\limits_{n\\to\\infty} \\frac{a_{n+1}}{a_n}=c$，则

（1）$c<1$，则$\\sum\\limits_{n=1}^{\\infty} a_n$收敛

（2）$c>1$或$c=\\infty$，则$\\sum\\limits_{n=1}^{\\infty} a_n$发散

**定理5**（根值审敛法）设$\\sum\\limits_{n=1}^{\\infty} a_n$是正项级数，且$\\lim\\limits_{n\\to\\infty} \\sqrt[n]{a_n}=c$，则

（1）$c<1$，则$\\sum\\limits_{n=1}^{\\infty} a_n$收敛

（2）$c>1$，则$\\sum\\limits_{n=1}^{\\infty} a_n$发散

## 交错级数
**定义** 级数$\\sum\\limits_{n=1}^{\\infty} (-1)^{n+1} a_n$称为交错级数，其中$a_n>0$

**定理1**（莱布尼兹判别法）设$\\sum\\limits_{n=1}^{\\infty} a_n$是交错级数，且满足：

（1）$a_n$单调递减

（2）$\\lim\\limits_{n\\to\\infty} a_n=0$

则$\\sum\\limits_{n=1}^{\\infty} a_n$收敛，且其和$S\\le a_1$，其余项满足：$|r_n|\\le a_{n+1}$

## 级数的绝对收敛和条件收敛
**定义**：对级数$\\sum\\limits_{n=1}^{\\infty} a_n$，若$\\sum\\limits_{n=1}^{\\infty} |a_n|$收敛，则称$\\sum\\limits_{n=1}^{\\infty} a_n$绝对收敛；若$\\sum\\limits_{n=1}^{\\infty} a_n$收敛，但$\\sum\\limits_{n=1}^{\\infty} |a_n|$发散，则称$\\sum\\limits_{n=1}^{\\infty} a_n$条件收敛

**定理1**（绝对收敛一定收敛）若级数$\\sum\\limits_{n=1}^{\\infty} a_n$绝对收敛，则$\\sum\\limits_{n=1}^{\\infty} a_n$收敛

**$\\star$定理2**（交换律）若级数$\\sum\\limits_{n=1}^{\\infty} a_n$绝对收敛，则$\\sum\\limits_{n=1}^{\\infty} a_n$的任意项可以任意调换顺序，且和不变

**$\\star$定理3**（乘法法则）若级数$\\sum\\limits_{n=1}^{\\infty} a_n$和$\\sum\\limits_{n=1}^{\\infty} b_n$绝对收敛，则对所有乘积$a_ib_j$按任意顺序排列得到的级数$\\sum\\limits_{n=1}^{\\infty} a_ib_j$绝对收敛，且$\\sum\\limits_{n=1}^{\\infty} a_ib_j=\\left(\\sum\\limits_{n=1}^{\\infty} a_n\\right)\\left(\\sum\\limits_{n=1}^{\\infty} b_n\\right)$

## 幂级数
**定义** 形如$\\sum\\limits_{n=0}^{\\infty} a_n {(x-x_0)}^n = a_0 + a_1 (x-x_0) + a_2 {(x-x_0)}^2 + \\cdots + a_n {(x-x_0)}^n + \\cdots$的级数称为幂级数，其中$a_n$称为幂级数的系数

**定理1**（Abel定理）若幂级数$\\sum\\limits_{n=0}^{\\infty} a_n x^n$在$x=x_0$处收敛，则对满足不等式$|x|<|x_0|$的一切$x$，幂级数都绝对收敛; 反之，若幂级数在$x=x_0$处发散，则对满足不等式$|x|>|x_0|$的一切$x$，该幂级数也发散

**求收敛半径**

**法1**（比值法）若幂级数$\\sum\\limits_{n=0}^{\\infty} a_n x^n$的系数$a_n$满足$\\lim\\limits_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|=\\rho$,则：

（1）$\\rho\\neq0$，$R=\\frac{1}{\\rho}$

（2）$\\rho=0$，$R=\\infty$

（3）$\\rho=\\infty$，$R=0$

**法2**（根值法）若幂级数$\\sum\\limits_{n=0}^{\\infty} a_n x^n$的系数$a_n$满足$\\lim\\limits_{n\\to\\infty} \\sqrt[n]{|a_n|}=\\rho$，则：

（1）$\\rho\\neq0$，$R=\\frac{1}{\\rho}$

（2）$\\rho=0$，$R=\\infty$

（3）$\\rho=\\infty$，$R=0$

**定理2**（逐项求导和积分）若幂级数$\\sum\\limits_{n=0}^{\\infty} a_n x^n$的收敛半径$R>0$，则其和函数$S(x)$在收敛域上连续，且在收敛区间内可逐项求导和积分，收敛半径不变：

$S'(x)=\\sum\\limits_{n=0}^{\\infty}(a_n x^{n})'=\\sum\\limits_{n=1}^{\\infty} na_n x^{n-1}$

$\\int_{0}^{x} S(x)dx=\\sum\\limits_{n=0}^{\\infty}\\int_{0}^{x}(a_n x^{n})dx=\\sum\\limits_{n=0}^{\\infty} \\frac{a_n}{n+1} x^{n+1}$`,Dm=e=>{const n=/^---\r?\n([\s\S]*?)\r?\n---/,t=e.match(n);if(!t)return{attributes:{},body:e};const r=t[1],l=e.replace(n,"").trim(),i={};return r.split(`
`).forEach(o=>{const u=o.split(":");if(u.length>=2){const a=u[0].trim(),c=u.slice(1).join(":").trim();c==="true"?i[a]=!0:c==="false"?i[a]=!1:!isNaN(Number(c))&&c!==""?i[a]=Number(c):i[a]=c}}),{attributes:i,body:l}},Wu=Object.assign({"../contents/comm-princ/meta.json":jp,"../contents/comm-princ/总内容/meta.json":Mp,"../contents/comp-anal/integrals/meta.json":Ap,"../contents/comp-anal/meta.json":Bp,"../contents/comp-anal/residue/meta.json":Vp,"../contents/comp-anal/series/meta.json":Qp,"../contents/dsp/dsp-1/meta.json":qp,"../contents/dsp/meta.json":Yp,"../contents/em-fields/e-fields-anal/meta.json":Gp,"../contents/em-fields/meta.json":Jp,"../contents/em-fields/second-part/meta.json":em,"../contents/em-fields/time-varying-fields/meta.json":tm,"../contents/em-fields/vector-analysis/meta.json":lm,"../contents/math/calc-1/meta.json":om,"../contents/math/calc-2/meta.json":am,"../contents/math/meta.json":cm,"../contents/math/series/meta.json":dm}),qu=Object.assign({"../contents/comm-princ/总内容/总内容.md":pm,"../contents/comp-anal/integrals/high-order-derivatives.md":mm,"../contents/comp-anal/residue/isolated-singularity.md":$m,"../contents/comp-anal/series/laurent.md":vm,"../contents/comp-anal/series/taylor.md":hm,"../contents/dsp/dsp-1/discrete-signals.md":ym,"../contents/em-fields/e-fields-anal/basic-equations.md":_m,"../contents/em-fields/e-fields-anal/p-d.md":gm,"../contents/em-fields/second-part/三平.md":zm,"../contents/em-fields/second-part/全反射和全透射.md":Sm,"../contents/em-fields/second-part/均匀平面电磁波的传播特性.md":wm,"../contents/em-fields/second-part/垂直入射.md":km,"../contents/em-fields/second-part/导电媒质.md":Em,"../contents/em-fields/time-varying-fields/faraday-law.md":Cm,"../contents/em-fields/time-varying-fields/maxwell-equations.md":xm,"../contents/em-fields/vector-analysis/circulation-curl.md":Pm,"../contents/em-fields/vector-analysis/flux-divergence.md":Rm,"../contents/em-fields/vector-analysis/helmholtz.md":Nm,"../contents/math/calc-1/continuity.md":Tm,"../contents/math/calc-1/limits.md":Lm,"../contents/math/calc-2/derivatives.md":Om,"../contents/math/series/normal.md":jm}),Mm=()=>{try{const e=[],n={},t=new Map,r=o=>{if(!t.has(o)){const u=`../contents/${o}/meta.json`,a=Wu[u]||{};t.set(o,{id:a.id||o,title:a.title||o,order:a.order||999,chapters:[],_chaptersMap:new Map})}return t.get(o)},l=(o,u)=>{if(!o._chaptersMap.has(u)){const a=`../contents/${o.id}/${u}/meta.json`,c=Wu[a]||{},$=u.match(/^(\d+)/),m=$?parseInt($[1],10):999,p={id:c.id||u,title:c.title||u,order:c.order!==void 0?c.order:m,notes:[]};o._chaptersMap.set(u,p),o.chapters.push(p)}return o._chaptersMap.get(u)};return Object.keys(qu).forEach(o=>{try{const u=o.split("/");if(u.length===5){const a=u[2],c=u[3],$=u[4],m=qu[o],p=r(a),y=l(p,c),_=typeof m=="string"?m:"",{attributes:g,body:O}=Dm(_),f=$.replace(".md",""),s=f.match(/^(\d+)/),d=s?parseInt(s[1],10):999,v=g.id||f,z=g.order!==void 0?g.order:d,k=g.title||f;y.notes.push({id:v,title:k,order:z});const E=`${a}/${c}/${v}`;n[E]=O}}catch(u){console.warn("Skipping file due to error:",o,u)}}),{catalog:Array.from(t.values()).sort((o,u)=>o.order-u.order).map(o=>(o.chapters.sort((u,a)=>u.order-a.order),o.chapters.forEach(u=>{u.notes.sort((a,c)=>a.order-c.order)}),delete o._chaptersMap,o)),notesContent:n}}catch(e){return console.error("Critical error in loadCatalog:",e),{catalog:[{id:"error",title:"Loading Error",chapters:[]}],notesContent:{}}}},{catalog:Fm,notesContent:Am}=Mm(),Vm=Fm,Hm=Am,Lo=(e,n="Startup Error")=>{document.body.innerHTML=`
        <div style="
            color: #d8000c; 
            background-color: #ffbaba;
            padding: 20px;
            margin: 20px;
            border: 1px solid #d8000c;
            border-radius: 5px;
            font-family: sans-serif;
        ">
            <h1 style="margin-top: 0;">${n}</h1>
            <pre style="white-space: pre-wrap; word-wrap: break-word;">${e.toString()}
${e.stack||""}</pre>
        </div>
    `},Im=async()=>{try{const{default:e}=await lf(async()=>{const{default:t}=await import("./App-CnPdmHWN.js");return{default:t}},[]);Ql.createRoot(document.getElementById("root")).render(Ao.jsx(ra.StrictMode,{children:Ao.jsx(e,{})}))}catch(e){Lo(e)}};window.addEventListener("error",e=>Lo(e.error||e.message,"Runtime Error"));window.addEventListener("unhandledrejection",e=>Lo(e.reason,"Promise Rejection"));Im();export{Um as R,Bm as a,Vm as c,of as g,Ao as j,Hm as n,br as r};
