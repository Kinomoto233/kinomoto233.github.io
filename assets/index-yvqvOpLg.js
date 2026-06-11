function Ff(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const Af="modulepreload",Bf=function(e){return"/"+e},Oo={},If=function(n,t,r){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.allSettled(t.map(s=>{if(s=Bf(s),s in Oo)return;Oo[s]=!0;const c=s.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${m}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Af,c||(p.as="script"),p.crossOrigin="",p.href=s,a&&p.setAttribute("nonce",a),document.head.appendChild(p),c)return new Promise(($,g)=>{p.addEventListener("load",$),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return l.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return n().catch(i)})};var I_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},Zr={},Ga={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt=Symbol.for("react.element"),Uf=Symbol.for("react.portal"),Vf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),qf=Symbol.for("react.provider"),Kf=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Xf=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),Mo=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=Mo&&e[Mo]||e["@@iterator"],typeof e=="function"?e:null)}var Ya={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xa=Object.assign,Ja={};function rt(e,n,t){this.props=e,this.context=n,this.refs=Ja,this.updater=t||Ya}rt.prototype.isReactComponent={};rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Za(){}Za.prototype=rt.prototype;function Fi(e,n,t){this.props=e,this.context=n,this.refs=Ja,this.updater=t||Ya}var Ai=Fi.prototype=new Za;Ai.constructor=Fi;Xa(Ai,rt.prototype);Ai.isPureReactComponent=!0;var Lo=Array.isArray,ba=Object.prototype.hasOwnProperty,Bi={current:null},es={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)ba.call(n,r)&&!es.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:qt,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function bf(e,n){return{$$typeof:qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===qt}function ed(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Fo=/\/+/g;function gl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ed(""+e.key):n.toString(36)}function _r(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qt:case Uf:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+gl(o,0):r,Lo(l)?(t="",e!=null&&(t=e.replace(Fo,"$&/")+"/"),_r(l,n,t,"",function(c){return c})):l!=null&&(Ii(l)&&(l=bf(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Fo,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Lo(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+gl(i,a);o+=_r(i,n,t,s,l)}else if(s=Zf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+gl(i,a++),o+=_r(i,n,t,s,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function bt(e,n,t){if(e==null)return e;var r=[],l=0;return _r(e,r,"","",function(i){return n.call(t,i,l++)}),r}function nd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},vr={transition:null},td={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:vr,ReactCurrentOwner:Bi};function ts(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:bt,forEach:function(e,n,t){bt(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return bt(e,function(){n++}),n},toArray:function(e){return bt(e,function(n){return n})||[]},only:function(e){if(!Ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=rt;R.Fragment=Vf;R.Profiler=Wf;R.PureComponent=Fi;R.StrictMode=Qf;R.Suspense=Yf;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=td;R.act=ts;R.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xa({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Bi.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)ba.call(n,s)&&!es.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:qt,type:e.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:Kf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qf,_context:e},e.Consumer=e};R.createElement=ns;R.createFactory=function(e){var n=ns.bind(null,e);return n.type=e,n};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Gf,render:e}};R.isValidElement=Ii;R.lazy=function(e){return{$$typeof:Jf,_payload:{_status:-1,_result:e},_init:nd}};R.memo=function(e,n){return{$$typeof:Xf,type:e,compare:n===void 0?null:n}};R.startTransition=function(e){var n=vr.transition;vr.transition={};try{e()}finally{vr.transition=n}};R.unstable_act=ts;R.useCallback=function(e,n){return oe.current.useCallback(e,n)};R.useContext=function(e){return oe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};R.useEffect=function(e,n){return oe.current.useEffect(e,n)};R.useId=function(){return oe.current.useId()};R.useImperativeHandle=function(e,n,t){return oe.current.useImperativeHandle(e,n,t)};R.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};R.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};R.useMemo=function(e,n){return oe.current.useMemo(e,n)};R.useReducer=function(e,n,t){return oe.current.useReducer(e,n,t)};R.useRef=function(e){return oe.current.useRef(e)};R.useState=function(e){return oe.current.useState(e)};R.useSyncExternalStore=function(e,n,t){return oe.current.useSyncExternalStore(e,n,t)};R.useTransition=function(){return oe.current.useTransition()};R.version="18.3.1";Ga.exports=R;var br=Ga.exports;const rs=Hf(br),H_=Ff({__proto__:null,default:rs},[br]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=br,ld=Symbol.for("react.element"),id=Symbol.for("react.fragment"),od=Object.prototype.hasOwnProperty,ad=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sd={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)od.call(n,r)&&!sd.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:ld,type:e,key:i,ref:o,props:l,_owner:ad.current}}Zr.Fragment=id;Zr.jsx=ls;Zr.jsxs=ls;Ka.exports=Zr;var Ao=Ka.exports,Ql={},is={exports:{}},ve={},os={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(w,E){var P=w.length;w.push(E);e:for(;0<P;){var V=P-1>>>1,G=w[V];if(0<l(G,E))w[V]=E,w[P]=G,P=V;else break e}}function t(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var E=w[0],P=w.pop();if(P!==E){w[0]=P;e:for(var V=0,G=w.length,Jt=G>>>1;V<Jt;){var mn=2*(V+1)-1,vl=w[mn],_n=mn+1,Zt=w[_n];if(0>l(vl,P))_n<G&&0>l(Zt,vl)?(w[V]=Zt,w[_n]=P,V=_n):(w[V]=vl,w[mn]=P,V=mn);else if(_n<G&&0>l(Zt,P))w[V]=Zt,w[_n]=P,V=_n;else break e}}return E}function l(w,E){var P=w.sortIndex-E.sortIndex;return P!==0?P:w.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],m=1,p=null,$=3,g=!1,h=!1,y=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(w){for(var E=t(c);E!==null;){if(E.callback===null)r(c);else if(E.startTime<=w)r(c),E.sortIndex=E.expirationTime,n(s,E);else break;E=t(c)}}function _(w){if(y=!1,d(w),!h)if(t(s)!==null)h=!0,ml(z);else{var E=t(c);E!==null&&_l(_,E.startTime-w)}}function z(w,E){h=!1,y&&(y=!1,f(x),x=-1),g=!0;var P=$;try{for(d(E),p=t(s);p!==null&&(!(p.expirationTime>E)||w&&!Ce());){var V=p.callback;if(typeof V=="function"){p.callback=null,$=p.priorityLevel;var G=V(p.expirationTime<=E);E=e.unstable_now(),typeof G=="function"?p.callback=G:p===t(s)&&r(s),d(E)}else r(s);p=t(s)}if(p!==null)var Jt=!0;else{var mn=t(c);mn!==null&&_l(_,mn.startTime-E),Jt=!1}return Jt}finally{p=null,$=P,g=!1}}var k=!1,C=null,x=-1,U=5,T=-1;function Ce(){return!(e.unstable_now()-T<U)}function ot(){if(C!==null){var w=e.unstable_now();T=w;var E=!0;try{E=C(!0,w)}finally{E?at():(k=!1,C=null)}}else k=!1}var at;if(typeof u=="function")at=function(){u(ot)};else if(typeof MessageChannel<"u"){var Do=new MessageChannel,Lf=Do.port2;Do.port1.onmessage=ot,at=function(){Lf.postMessage(null)}}else at=function(){D(ot,0)};function ml(w){C=w,k||(k=!0,at())}function _l(w,E){x=D(function(){w(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){h||g||(h=!0,ml(z))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return $},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(w){switch($){case 1:case 2:case 3:var E=3;break;default:E=$}var P=$;$=E;try{return w()}finally{$=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,E){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var P=$;$=w;try{return E()}finally{$=P}},e.unstable_scheduleCallback=function(w,E,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,w){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=P+G,w={id:m++,callback:E,priorityLevel:w,startTime:P,expirationTime:G,sortIndex:-1},P>V?(w.sortIndex=P,n(c,w),t(s)===null&&w===t(c)&&(y?(f(x),x=-1):y=!0,_l(_,P-V))):(w.sortIndex=G,n(s,w),h||g||(h=!0,ml(z))),w},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(w){var E=$;return function(){var P=$;$=E;try{return w.apply(this,arguments)}finally{$=P}}}})(as);os.exports=as;var ud=os.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=br,_e=ud;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ss=new Set,Rt={};function Rn(e,n){Xn(e,n),Xn(e+"Capture",n)}function Xn(e,n){for(Rt[e]=n,e=0;e<n.length;e++)ss.add(n[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bo={},Io={};function dd(e){return Wl.call(Io,e)?!0:Wl.call(Bo,e)?!1:fd.test(e)?Io[e]=!0:(Bo[e]=!0,!1)}function $d(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pd(e,n,t,r){if(n===null||typeof n>"u"||$d(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];b[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){b[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){b[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){b[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){b[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hi=/[\-:]([a-z])/g;function Ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Hi,Ui);b[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Hi,Ui);b[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Hi,Ui);b[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){b[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});b.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){b[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vi(e,n,t,r){var l=b.hasOwnProperty(n)?b[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(pd(n,t,l,r)&&(t=null),r||l===null?dd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ke=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,er=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),cs=Symbol.for("react.context"),Wi=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),fs=Symbol.for("react.offscreen"),Ho=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,hl;function _t(e){if(hl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);hl=n&&n[1]||""}return`
`+hl+e}var yl=!1;function zl(e,n){if(!e||yl)return"";yl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?_t(e):""}function md(e){switch(e.tag){case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case jn:return"Portal";case ql:return"Profiler";case Qi:return"StrictMode";case Kl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cs:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case Wi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return n=e.displayName||null,n!==null?n:Yl(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return Yl(e(n))}catch{}}return null}function _d(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(n);case 8:return n===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vd(e){var n=ds(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nr(e){e._valueTracker||(e._valueTracker=vd(e))}function $s(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ds(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,n){var t=n.checked;return I({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Uo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ps(e,n){n=n.checked,n!=null&&Vi(e,"checked",n,!1)}function Jl(e,n){ps(e,n);var t=cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Zl(e,n.type,cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Vo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Zl(e,n,t){(n!=="number"||Pr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var vt=Array.isArray;function Qn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+cn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function bl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return I({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(vt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:cn(t)}}function ms(e,n){var t=cn(n.value),r=cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Wo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function _s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ei(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?_s(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tr,vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Tt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gd=["Webkit","ms","Moz","O"];Object.keys(yt).forEach(function(e){gd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),yt[n]=yt[e]})});function gs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||yt.hasOwnProperty(e)&&yt[e]?(""+n).trim():n+"px"}function hs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=gs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var hd=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,n){if(n){if(hd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function ti(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Wn=null,qn=null;function qo(e){if(e=Yt(e)){if(typeof li!="function")throw Error(v(280));var n=e.stateNode;n&&(n=ll(n),li(e.stateNode,e.type,n))}}function ys(e){Wn?qn?qn.push(e):qn=[e]:Wn=e}function zs(){if(Wn){var e=Wn,n=qn;if(qn=Wn=null,qo(e),n)for(e=0;e<n.length;e++)qo(n[e])}}function Ss(e,n){return e(n)}function ws(){}var Sl=!1;function ks(e,n,t){if(Sl)return e(n,t);Sl=!0;try{return Ss(e,n,t)}finally{Sl=!1,(Wn!==null||qn!==null)&&(ws(),zs())}}function Nt(e,n){var t=e.stateNode;if(t===null)return null;var r=ll(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ii=!1;if(Ve)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){ii=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{ii=!1}function yd(e,n,t,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var zt=!1,Rr=null,Tr=!1,oi=null,zd={onError:function(e){zt=!0,Rr=e}};function Sd(e,n,t,r,l,i,o,a,s){zt=!1,Rr=null,yd.apply(zd,arguments)}function wd(e,n,t,r,l,i,o,a,s){if(Sd.apply(this,arguments),zt){if(zt){var c=Rr;zt=!1,Rr=null}else throw Error(v(198));Tr||(Tr=!0,oi=c)}}function Tn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Cs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ko(e){if(Tn(e)!==e)throw Error(v(188))}function kd(e){var n=e.alternate;if(!n){if(n=Tn(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Ko(l),e;if(i===r)return Ko(l),n;i=i.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function xs(e){return e=kd(e),e!==null?Es(e):null}function Es(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Es(e);if(n!==null)return n;e=e.sibling}return null}var Ps=_e.unstable_scheduleCallback,Go=_e.unstable_cancelCallback,Cd=_e.unstable_shouldYield,xd=_e.unstable_requestPaint,Q=_e.unstable_now,Ed=_e.unstable_getCurrentPriorityLevel,Gi=_e.unstable_ImmediatePriority,Rs=_e.unstable_UserBlockingPriority,Nr=_e.unstable_NormalPriority,Pd=_e.unstable_LowPriority,Ts=_e.unstable_IdlePriority,el=null,Le=null;function Rd(e){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:jd,Td=Math.log,Nd=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(Td(e)/Nd|0)|0}var rr=64,lr=4194304;function gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=gt(a):(i&=o,i!==0&&(r=gt(i)))}else o=t&~l,o!==0?r=gt(o):i!==0&&(r=gt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Te(n),l=1<<t,r|=e[t],n&=~l;return r}function Dd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Te(i),a=1<<o,s=l[o];s===-1?(!(a&t)||a&r)&&(l[o]=Dd(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ns(){var e=rr;return rr<<=1,!(rr&4194240)&&(rr=64),e}function wl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Te(n),e[n]=t}function Md(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Te(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Yi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Te(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var j=0;function js(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ds,Xi,Os,Ms,Ls,si=!1,ir=[],nn=null,tn=null,rn=null,jt=new Map,Dt=new Map,Je=[],Ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yo(e,n){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(n.pointerId)}}function ct(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Yt(n),n!==null&&Xi(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Fd(e,n,t,r,l){switch(n){case"focusin":return nn=ct(nn,e,n,t,r,l),!0;case"dragenter":return tn=ct(tn,e,n,t,r,l),!0;case"mouseover":return rn=ct(rn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return jt.set(i,ct(jt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Dt.set(i,ct(Dt.get(i)||null,e,n,t,r,l)),!0}return!1}function Fs(e){var n=hn(e.target);if(n!==null){var t=Tn(n);if(t!==null){if(n=t.tag,n===13){if(n=Cs(t),n!==null){e.blockedOn=n,Ls(e.priority,function(){Os(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ui(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ri=r,t.target.dispatchEvent(r),ri=null}else return n=Yt(t),n!==null&&Xi(n),e.blockedOn=t,!1;n.shift()}return!0}function Xo(e,n,t){gr(e)&&t.delete(n)}function Ad(){si=!1,nn!==null&&gr(nn)&&(nn=null),tn!==null&&gr(tn)&&(tn=null),rn!==null&&gr(rn)&&(rn=null),jt.forEach(Xo),Dt.forEach(Xo)}function ft(e,n){e.blockedOn===n&&(e.blockedOn=null,si||(si=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Ad)))}function Ot(e){function n(l){return ft(l,e)}if(0<ir.length){ft(ir[0],e);for(var t=1;t<ir.length;t++){var r=ir[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&ft(nn,e),tn!==null&&ft(tn,e),rn!==null&&ft(rn,e),jt.forEach(n),Dt.forEach(n),t=0;t<Je.length;t++)r=Je[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(t=Je[0],t.blockedOn===null);)Fs(t),t.blockedOn===null&&Je.shift()}var Kn=Ke.ReactCurrentBatchConfig,Dr=!0;function Bd(e,n,t,r){var l=j,i=Kn.transition;Kn.transition=null;try{j=1,Ji(e,n,t,r)}finally{j=l,Kn.transition=i}}function Id(e,n,t,r){var l=j,i=Kn.transition;Kn.transition=null;try{j=4,Ji(e,n,t,r)}finally{j=l,Kn.transition=i}}function Ji(e,n,t,r){if(Dr){var l=ui(e,n,t,r);if(l===null)Dl(e,n,r,Or,t),Yo(e,r);else if(Fd(l,e,n,t,r))r.stopPropagation();else if(Yo(e,r),n&4&&-1<Ld.indexOf(e)){for(;l!==null;){var i=Yt(l);if(i!==null&&Ds(i),i=ui(e,n,t,r),i===null&&Dl(e,n,r,Or,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Dl(e,n,r,null,t)}}var Or=null;function ui(e,n,t,r){if(Or=null,e=Ki(r),e=hn(e),e!==null)if(n=Tn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Cs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Or=e,null}function As(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ed()){case Gi:return 1;case Rs:return 4;case Nr:case Pd:return 16;case Ts:return 536870912;default:return 16}default:return 16}}var be=null,Zi=null,hr=null;function Bs(){if(hr)return hr;var e,n=Zi,t=n.length,r,l="value"in be?be.value:be.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return hr=l.slice(e,1<r?1-r:void 0)}function yr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function Jo(){return!1}function ge(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?or:Jo,this.isPropagationStopped=Jo,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=ge(lt),Gt=I({},lt,{view:0,detail:0}),Hd=ge(Gt),kl,Cl,dt,nl=I({},Gt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dt&&(dt&&e.type==="mousemove"?(kl=e.screenX-dt.screenX,Cl=e.screenY-dt.screenY):Cl=kl=0,dt=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Zo=ge(nl),Ud=I({},nl,{dataTransfer:0}),Vd=ge(Ud),Qd=I({},Gt,{relatedTarget:0}),xl=ge(Qd),Wd=I({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),qd=ge(Wd),Kd=I({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gd=ge(Kd),Yd=I({},lt,{data:0}),bo=ge(Yd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Zd[e])?!!n[e]:!1}function eo(){return bd}var e$=I({},Gt,{key:function(e){if(e.key){var n=Xd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(e){return e.type==="keypress"?yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n$=ge(e$),t$=I({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ea=ge(t$),r$=I({},Gt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),l$=ge(r$),i$=I({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),o$=ge(i$),a$=I({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s$=ge(a$),u$=[9,13,27,32],no=Ve&&"CompositionEvent"in window,St=null;Ve&&"documentMode"in document&&(St=document.documentMode);var c$=Ve&&"TextEvent"in window&&!St,Is=Ve&&(!no||St&&8<St&&11>=St),na=" ",ta=!1;function Hs(e,n){switch(e){case"keyup":return u$.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Us(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function f$(e,n){switch(e){case"compositionend":return Us(n);case"keypress":return n.which!==32?null:(ta=!0,na);case"textInput":return e=n.data,e===na&&ta?null:e;default:return null}}function d$(e,n){if(On)return e==="compositionend"||!no&&Hs(e,n)?(e=Bs(),hr=Zi=be=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Is&&n.locale!=="ko"?null:n.data;default:return null}}var $$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ra(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$$[e.type]:n==="textarea"}function Vs(e,n,t,r){ys(r),n=Mr(n,"onChange"),0<n.length&&(t=new bi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var wt=null,Mt=null;function p$(e){eu(e,0)}function tl(e){var n=Fn(e);if($s(n))return e}function m$(e,n){if(e==="change")return n}var Qs=!1;if(Ve){var El;if(Ve){var Pl="oninput"in document;if(!Pl){var la=document.createElement("div");la.setAttribute("oninput","return;"),Pl=typeof la.oninput=="function"}El=Pl}else El=!1;Qs=El&&(!document.documentMode||9<document.documentMode)}function ia(){wt&&(wt.detachEvent("onpropertychange",Ws),Mt=wt=null)}function Ws(e){if(e.propertyName==="value"&&tl(Mt)){var n=[];Vs(n,Mt,e,Ki(e)),ks(p$,n)}}function _$(e,n,t){e==="focusin"?(ia(),wt=n,Mt=t,wt.attachEvent("onpropertychange",Ws)):e==="focusout"&&ia()}function v$(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Mt)}function g$(e,n){if(e==="click")return tl(n)}function h$(e,n){if(e==="input"||e==="change")return tl(n)}function y$(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var je=typeof Object.is=="function"?Object.is:y$;function Lt(e,n){if(je(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Wl.call(n,l)||!je(e[l],n[l]))return!1}return!0}function oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aa(e,n){var t=oa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=oa(t)}}function qs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ks(){for(var e=window,n=Pr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pr(e.document)}return n}function to(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function z$(e){var n=Ks(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qs(t.ownerDocument.documentElement,t)){if(r!==null&&to(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=aa(t,i);var o=aa(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S$=Ve&&"documentMode"in document&&11>=document.documentMode,Mn=null,ci=null,kt=null,fi=!1;function sa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fi||Mn==null||Mn!==Pr(r)||(r=Mn,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kt&&Lt(kt,r)||(kt=r,r=Mr(ci,"onSelect"),0<r.length&&(n=new bi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mn)))}function ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ln={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},Rl={},Gs={};Ve&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function rl(e){if(Rl[e])return Rl[e];if(!Ln[e])return e;var n=Ln[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Gs)return Rl[e]=n[t];return e}var Ys=rl("animationend"),Xs=rl("animationiteration"),Js=rl("animationstart"),Zs=rl("transitionend"),bs=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,n){bs.set(e,n),Rn(n,[e])}for(var Tl=0;Tl<ua.length;Tl++){var Nl=ua[Tl],w$=Nl.toLowerCase(),k$=Nl[0].toUpperCase()+Nl.slice(1);dn(w$,"on"+k$)}dn(Ys,"onAnimationEnd");dn(Xs,"onAnimationIteration");dn(Js,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Zs,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ht="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C$=new Set("cancel close invalid load scroll toggle".split(" ").concat(ht));function ca(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,wd(r,n,void 0,e),e.currentTarget=null}function eu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;ca(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;ca(l,a,c),i=s}}}if(Tr)throw e=oi,Tr=!1,oi=null,e}function M(e,n){var t=n[_i];t===void 0&&(t=n[_i]=new Set);var r=e+"__bubble";t.has(r)||(nu(n,e,2,!1),t.add(r))}function jl(e,n,t){var r=0;n&&(r|=4),nu(t,e,r,n)}var sr="_reactListening"+Math.random().toString(36).slice(2);function Ft(e){if(!e[sr]){e[sr]=!0,ss.forEach(function(t){t!=="selectionchange"&&(C$.has(t)||jl(t,!1,e),jl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sr]||(n[sr]=!0,jl("selectionchange",!1,n))}}function nu(e,n,t,r){switch(As(n)){case 1:var l=Bd;break;case 4:l=Id;break;default:l=Ji}t=l.bind(null,n,t,e),l=void 0,!ii||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Dl(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=hn(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}ks(function(){var c=i,m=Ki(t),p=[];e:{var $=bs.get(e);if($!==void 0){var g=bi,h=e;switch(e){case"keypress":if(yr(t)===0)break e;case"keydown":case"keyup":g=n$;break;case"focusin":h="focus",g=xl;break;case"focusout":h="blur",g=xl;break;case"beforeblur":case"afterblur":g=xl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=l$;break;case Ys:case Xs:case Js:g=qd;break;case Zs:g=o$;break;case"scroll":g=Hd;break;case"wheel":g=s$;break;case"copy":case"cut":case"paste":g=Gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ea}var y=(n&4)!==0,D=!y&&e==="scroll",f=y?$!==null?$+"Capture":null:$;y=[];for(var u=c,d;u!==null;){d=u;var _=d.stateNode;if(d.tag===5&&_!==null&&(d=_,f!==null&&(_=Nt(u,f),_!=null&&y.push(At(u,_,d)))),D)break;u=u.return}0<y.length&&($=new g($,h,null,t,m),p.push({event:$,listeners:y}))}}if(!(n&7)){e:{if($=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",$&&t!==ri&&(h=t.relatedTarget||t.fromElement)&&(hn(h)||h[Qe]))break e;if((g||$)&&($=m.window===m?m:($=m.ownerDocument)?$.defaultView||$.parentWindow:window,g?(h=t.relatedTarget||t.toElement,g=c,h=h?hn(h):null,h!==null&&(D=Tn(h),h!==D||h.tag!==5&&h.tag!==6)&&(h=null)):(g=null,h=c),g!==h)){if(y=Zo,_="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=ea,_="onPointerLeave",f="onPointerEnter",u="pointer"),D=g==null?$:Fn(g),d=h==null?$:Fn(h),$=new y(_,u+"leave",g,t,m),$.target=D,$.relatedTarget=d,_=null,hn(m)===c&&(y=new y(f,u+"enter",h,t,m),y.target=d,y.relatedTarget=D,_=y),D=_,g&&h)n:{for(y=g,f=h,u=0,d=y;d;d=Nn(d))u++;for(d=0,_=f;_;_=Nn(_))d++;for(;0<u-d;)y=Nn(y),u--;for(;0<d-u;)f=Nn(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break n;y=Nn(y),f=Nn(f)}y=null}else y=null;g!==null&&fa(p,$,g,y,!1),h!==null&&D!==null&&fa(p,D,h,y,!0)}}e:{if($=c?Fn(c):window,g=$.nodeName&&$.nodeName.toLowerCase(),g==="select"||g==="input"&&$.type==="file")var z=m$;else if(ra($))if(Qs)z=h$;else{z=v$;var k=_$}else(g=$.nodeName)&&g.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(z=g$);if(z&&(z=z(e,c))){Vs(p,z,t,m);break e}k&&k(e,$,c),e==="focusout"&&(k=$._wrapperState)&&k.controlled&&$.type==="number"&&Zl($,"number",$.value)}switch(k=c?Fn(c):window,e){case"focusin":(ra(k)||k.contentEditable==="true")&&(Mn=k,ci=c,kt=null);break;case"focusout":kt=ci=Mn=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,sa(p,t,m);break;case"selectionchange":if(S$)break;case"keydown":case"keyup":sa(p,t,m)}var C;if(no)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else On?Hs(e,t)&&(x="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(Is&&t.locale!=="ko"&&(On||x!=="onCompositionStart"?x==="onCompositionEnd"&&On&&(C=Bs()):(be=m,Zi="value"in be?be.value:be.textContent,On=!0)),k=Mr(c,x),0<k.length&&(x=new bo(x,e,null,t,m),p.push({event:x,listeners:k}),C?x.data=C:(C=Us(t),C!==null&&(x.data=C)))),(C=c$?f$(e,t):d$(e,t))&&(c=Mr(c,"onBeforeInput"),0<c.length&&(m=new bo("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:c}),m.data=C))}eu(p,n)})}function At(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Mr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Nt(e,t),i!=null&&r.unshift(At(e,i,l)),i=Nt(e,n),i!=null&&r.push(At(e,i,l))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Nt(t,i),s!=null&&o.unshift(At(t,s,a))):l||(s=Nt(t,i),s!=null&&o.push(At(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var x$=/\r\n?/g,E$=/\u0000|\uFFFD/g;function da(e){return(typeof e=="string"?e:""+e).replace(x$,`
`).replace(E$,"")}function ur(e,n,t){if(n=da(n),da(e)!==n&&t)throw Error(v(425))}function Lr(){}var di=null,$i=null;function pi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mi=typeof setTimeout=="function"?setTimeout:void 0,P$=typeof clearTimeout=="function"?clearTimeout:void 0,$a=typeof Promise=="function"?Promise:void 0,R$=typeof queueMicrotask=="function"?queueMicrotask:typeof $a<"u"?function(e){return $a.resolve(null).then(e).catch(T$)}:mi;function T$(e){setTimeout(function(){throw e})}function Ol(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Ot(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Ot(n)}function ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function pa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var it=Math.random().toString(36).slice(2),Me="__reactFiber$"+it,Bt="__reactProps$"+it,Qe="__reactContainer$"+it,_i="__reactEvents$"+it,N$="__reactListeners$"+it,j$="__reactHandles$"+it;function hn(e){var n=e[Me];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[Me]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=pa(e);e!==null;){if(t=e[Me])return t;e=pa(e)}return n}e=t,t=e.parentNode}return null}function Yt(e){return e=e[Me]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function ll(e){return e[Bt]||null}var vi=[],An=-1;function $n(e){return{current:e}}function L(e){0>An||(e.current=vi[An],vi[An]=null,An--)}function O(e,n){An++,vi[An]=e.current,e.current=n}var fn={},re=$n(fn),ce=$n(!1),kn=fn;function Jn(e,n){var t=e.type.contextTypes;if(!t)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Fr(){L(ce),L(re)}function ma(e,n,t){if(re.current!==fn)throw Error(v(168));O(re,n),O(ce,t)}function tu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(v(108,_d(e)||"Unknown",l));return I({},t,r)}function Ar(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,kn=re.current,O(re,e),O(ce,ce.current),!0}function _a(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=tu(e,n,kn),r.__reactInternalMemoizedMergedChildContext=e,L(ce),L(re),O(re,e)):L(ce),O(ce,t)}var Be=null,il=!1,Ml=!1;function ru(e){Be===null?Be=[e]:Be.push(e)}function D$(e){il=!0,ru(e)}function pn(){if(!Ml&&Be!==null){Ml=!0;var e=0,n=j;try{var t=Be;for(j=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Be=null,il=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Ps(Gi,pn),l}finally{j=n,Ml=!1}}return null}var Bn=[],In=0,Br=null,Ir=0,he=[],ye=0,Cn=null,Ie=1,He="";function vn(e,n){Bn[In++]=Ir,Bn[In++]=Br,Br=e,Ir=n}function lu(e,n,t){he[ye++]=Ie,he[ye++]=He,he[ye++]=Cn,Cn=e;var r=Ie;e=He;var l=32-Te(r)-1;r&=~(1<<l),t+=1;var i=32-Te(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ie=1<<32-Te(n)+l|t<<l|r,He=i+e}else Ie=1<<i|t<<l|r,He=e}function ro(e){e.return!==null&&(vn(e,1),lu(e,1,0))}function lo(e){for(;e===Br;)Br=Bn[--In],Bn[In]=null,Ir=Bn[--In],Bn[In]=null;for(;e===Cn;)Cn=he[--ye],he[ye]=null,He=he[--ye],he[ye]=null,Ie=he[--ye],he[ye]=null}var me=null,pe=null,F=!1,Re=null;function iu(e,n){var t=ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function va(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,me=e,pe=ln(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,me=e,pe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Cn!==null?{id:Ie,overflow:He}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,me=e,pe=null,!0):!1;default:return!1}}function gi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hi(e){if(F){var n=pe;if(n){var t=n;if(!va(e,n)){if(gi(e))throw Error(v(418));n=ln(t.nextSibling);var r=me;n&&va(e,n)?iu(r,t):(e.flags=e.flags&-4097|2,F=!1,me=e)}}else{if(gi(e))throw Error(v(418));e.flags=e.flags&-4097|2,F=!1,me=e}}}function ga(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function cr(e){if(e!==me)return!1;if(!F)return ga(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!pi(e.type,e.memoizedProps)),n&&(n=pe)){if(gi(e))throw ou(),Error(v(418));for(;n;)iu(e,n),n=ln(n.nextSibling)}if(ga(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){pe=ln(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}pe=null}}else pe=me?ln(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=pe;e;)e=ln(e.nextSibling)}function Zn(){pe=me=null,F=!1}function io(e){Re===null?Re=[e]:Re.push(e)}var O$=Ke.ReactCurrentBatchConfig;function $t(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function fr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ha(e){var n=e._init;return n(e._payload)}function au(e){function n(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function t(f,u){if(!e)return null;for(;u!==null;)n(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=un(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,_){return u===null||u.tag!==6?(u=Ul(d,f.mode,_),u.return=f,u):(u=l(u,d),u.return=f,u)}function s(f,u,d,_){var z=d.type;return z===Dn?m(f,u,d.props.children,_,d.key):u!==null&&(u.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ye&&ha(z)===u.type)?(_=l(u,d.props),_.ref=$t(f,u,d),_.return=f,_):(_=Er(d.type,d.key,d.props,null,f.mode,_),_.ref=$t(f,u,d),_.return=f,_)}function c(f,u,d,_){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Vl(d,f.mode,_),u.return=f,u):(u=l(u,d.children||[]),u.return=f,u)}function m(f,u,d,_,z){return u===null||u.tag!==7?(u=wn(d,f.mode,_,z),u.return=f,u):(u=l(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ul(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case er:return d=Er(u.type,u.key,u.props,null,f.mode,d),d.ref=$t(f,null,u),d.return=f,d;case jn:return u=Vl(u,f.mode,d),u.return=f,u;case Ye:var _=u._init;return p(f,_(u._payload),d)}if(vt(u)||st(u))return u=wn(u,f.mode,d,null),u.return=f,u;fr(f,u)}return null}function $(f,u,d,_){var z=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return z!==null?null:a(f,u,""+d,_);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case er:return d.key===z?s(f,u,d,_):null;case jn:return d.key===z?c(f,u,d,_):null;case Ye:return z=d._init,$(f,u,z(d._payload),_)}if(vt(d)||st(d))return z!==null?null:m(f,u,d,_,null);fr(f,d)}return null}function g(f,u,d,_,z){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(d)||null,a(u,f,""+_,z);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case er:return f=f.get(_.key===null?d:_.key)||null,s(u,f,_,z);case jn:return f=f.get(_.key===null?d:_.key)||null,c(u,f,_,z);case Ye:var k=_._init;return g(f,u,d,k(_._payload),z)}if(vt(_)||st(_))return f=f.get(d)||null,m(u,f,_,z,null);fr(u,_)}return null}function h(f,u,d,_){for(var z=null,k=null,C=u,x=u=0,U=null;C!==null&&x<d.length;x++){C.index>x?(U=C,C=null):U=C.sibling;var T=$(f,C,d[x],_);if(T===null){C===null&&(C=U);break}e&&C&&T.alternate===null&&n(f,C),u=i(T,u,x),k===null?z=T:k.sibling=T,k=T,C=U}if(x===d.length)return t(f,C),F&&vn(f,x),z;if(C===null){for(;x<d.length;x++)C=p(f,d[x],_),C!==null&&(u=i(C,u,x),k===null?z=C:k.sibling=C,k=C);return F&&vn(f,x),z}for(C=r(f,C);x<d.length;x++)U=g(C,f,x,d[x],_),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?x:U.key),u=i(U,u,x),k===null?z=U:k.sibling=U,k=U);return e&&C.forEach(function(Ce){return n(f,Ce)}),F&&vn(f,x),z}function y(f,u,d,_){var z=st(d);if(typeof z!="function")throw Error(v(150));if(d=z.call(d),d==null)throw Error(v(151));for(var k=z=null,C=u,x=u=0,U=null,T=d.next();C!==null&&!T.done;x++,T=d.next()){C.index>x?(U=C,C=null):U=C.sibling;var Ce=$(f,C,T.value,_);if(Ce===null){C===null&&(C=U);break}e&&C&&Ce.alternate===null&&n(f,C),u=i(Ce,u,x),k===null?z=Ce:k.sibling=Ce,k=Ce,C=U}if(T.done)return t(f,C),F&&vn(f,x),z;if(C===null){for(;!T.done;x++,T=d.next())T=p(f,T.value,_),T!==null&&(u=i(T,u,x),k===null?z=T:k.sibling=T,k=T);return F&&vn(f,x),z}for(C=r(f,C);!T.done;x++,T=d.next())T=g(C,f,x,T.value,_),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?x:T.key),u=i(T,u,x),k===null?z=T:k.sibling=T,k=T);return e&&C.forEach(function(ot){return n(f,ot)}),F&&vn(f,x),z}function D(f,u,d,_){if(typeof d=="object"&&d!==null&&d.type===Dn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case er:e:{for(var z=d.key,k=u;k!==null;){if(k.key===z){if(z=d.type,z===Dn){if(k.tag===7){t(f,k.sibling),u=l(k,d.props.children),u.return=f,f=u;break e}}else if(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ye&&ha(z)===k.type){t(f,k.sibling),u=l(k,d.props),u.ref=$t(f,k,d),u.return=f,f=u;break e}t(f,k);break}else n(f,k);k=k.sibling}d.type===Dn?(u=wn(d.props.children,f.mode,_,d.key),u.return=f,f=u):(_=Er(d.type,d.key,d.props,null,f.mode,_),_.ref=$t(f,u,d),_.return=f,f=_)}return o(f);case jn:e:{for(k=d.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){t(f,u.sibling),u=l(u,d.children||[]),u.return=f,f=u;break e}else{t(f,u);break}else n(f,u);u=u.sibling}u=Vl(d,f.mode,_),u.return=f,f=u}return o(f);case Ye:return k=d._init,D(f,u,k(d._payload),_)}if(vt(d))return h(f,u,d,_);if(st(d))return y(f,u,d,_);fr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(t(f,u.sibling),u=l(u,d),u.return=f,f=u):(t(f,u),u=Ul(d,f.mode,_),u.return=f,f=u),o(f)):t(f,u)}return D}var bn=au(!0),su=au(!1),Hr=$n(null),Ur=null,Hn=null,oo=null;function ao(){oo=Hn=Ur=null}function so(e){var n=Hr.current;L(Hr),e._currentValue=n}function yi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Gn(e,n){Ur=e,oo=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ue=!0),e.firstContext=null)}function we(e){var n=e._currentValue;if(oo!==e)if(e={context:e,memoizedValue:n,next:null},Hn===null){if(Ur===null)throw Error(v(308));Hn=e,Ur.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return n}var yn=null;function uo(e){yn===null?yn=[e]:yn.push(e)}function uu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,uo(n)):(t.next=l.next,l.next=t),n.interleaved=t,We(e,r)}function We(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xe=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function on(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,N&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,We(e,t)}return l=r.interleaved,l===null?(n.next=n,uo(r)):(n.next=l.next,l.next=n),r.interleaved=n,We(e,t)}function zr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yi(e,t)}}function ya(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Vr(e,n,t,r){var l=e.updateQueue;Xe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(i!==null){var p=l.baseState;o=0,m=c=s=null,a=i;do{var $=a.lane,g=a.eventTime;if((r&$)===$){m!==null&&(m=m.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var h=e,y=a;switch($=n,g=t,y.tag){case 1:if(h=y.payload,typeof h=="function"){p=h.call(g,p,$);break e}p=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,$=typeof h=="function"?h.call(g,p,$):h,$==null)break e;p=I({},p,$);break e;case 2:Xe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,$=l.effects,$===null?l.effects=[a]:$.push(a))}else g={eventTime:g,lane:$,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=g,s=p):m=m.next=g,o|=$;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;$=a,a=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);if(m===null&&(s=p),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);En|=o,e.lanes=o,e.memoizedState=p}}function za(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var Xt={},Fe=$n(Xt),It=$n(Xt),Ht=$n(Xt);function zn(e){if(e===Xt)throw Error(v(174));return e}function fo(e,n){switch(O(Ht,n),O(It,e),O(Fe,Xt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ei(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ei(n,e)}L(Fe),O(Fe,n)}function et(){L(Fe),L(It),L(Ht)}function fu(e){zn(Ht.current);var n=zn(Fe.current),t=ei(n,e.type);n!==t&&(O(It,e),O(Fe,t))}function $o(e){It.current===e&&(L(Fe),L(It))}var A=$n(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ll=[];function po(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var Sr=Ke.ReactCurrentDispatcher,Fl=Ke.ReactCurrentBatchConfig,xn=0,B=null,q=null,Y=null,Wr=!1,Ct=!1,Ut=0,M$=0;function ee(){throw Error(v(321))}function mo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!je(e[t],n[t]))return!1;return!0}function _o(e,n,t,r,l,i){if(xn=i,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Sr.current=e===null||e.memoizedState===null?B$:I$,e=t(r,l),Ct){i=0;do{if(Ct=!1,Ut=0,25<=i)throw Error(v(301));i+=1,Y=q=null,n.updateQueue=null,Sr.current=H$,e=t(r,l)}while(Ct)}if(Sr.current=qr,n=q!==null&&q.next!==null,xn=0,Y=q=B=null,Wr=!1,n)throw Error(v(300));return e}function vo(){var e=Ut!==0;return Ut=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?B.memoizedState=Y=e:Y=Y.next=e,Y}function ke(){if(q===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var n=Y===null?B.memoizedState:Y.next;if(n!==null)Y=n,q=e;else{if(e===null)throw Error(v(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},Y===null?B.memoizedState=Y=e:Y=Y.next=e}return Y}function Vt(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=ke(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=q,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var m=c.lane;if((xn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,o=r):s=s.next=p,B.lanes|=m,En|=m}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,je(r,n.memoizedState)||(ue=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,En|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bl(e){var n=ke(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);je(i,n.memoizedState)||(ue=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function du(){}function $u(e,n){var t=B,r=ke(),l=n(),i=!je(r.memoizedState,l);if(i&&(r.memoizedState=l,ue=!0),r=r.queue,go(_u.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Qt(9,mu.bind(null,t,r,l,n),void 0,null),X===null)throw Error(v(349));xn&30||pu(t,n,l)}return l}function pu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function mu(e,n,t,r){n.value=t,n.getSnapshot=r,vu(n)&&gu(e)}function _u(e,n,t){return t(function(){vu(n)&&gu(e)})}function vu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!je(e,t)}catch{return!0}}function gu(e){var n=We(e,1);n!==null&&Ne(n,e,1,-1)}function Sa(e){var n=Oe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},n.queue=e,e=e.dispatch=A$.bind(null,B,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function hu(){return ke().memoizedState}function wr(e,n,t,r){var l=Oe();B.flags|=e,l.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function ol(e,n,t,r){var l=ke();r=r===void 0?null:r;var i=void 0;if(q!==null){var o=q.memoizedState;if(i=o.destroy,r!==null&&mo(r,o.deps)){l.memoizedState=Qt(n,t,i,r);return}}B.flags|=e,l.memoizedState=Qt(1|n,t,i,r)}function wa(e,n){return wr(8390656,8,e,n)}function go(e,n){return ol(2048,8,e,n)}function yu(e,n){return ol(4,2,e,n)}function zu(e,n){return ol(4,4,e,n)}function Su(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wu(e,n,t){return t=t!=null?t.concat([e]):null,ol(4,4,Su.bind(null,n,e),t)}function ho(){}function ku(e,n){var t=ke();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&mo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cu(e,n){var t=ke();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&mo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function xu(e,n,t){return xn&21?(je(t,n)||(t=Ns(),B.lanes|=t,En|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=t)}function L$(e,n){var t=j;j=t!==0&&4>t?t:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),n()}finally{j=t,Fl.transition=r}}function Eu(){return ke().memoizedState}function F$(e,n,t){var r=sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Pu(e))Ru(n,t);else if(t=uu(e,n,t,r),t!==null){var l=ie();Ne(t,e,r,l),Tu(t,n,r)}}function A$(e,n,t){var r=sn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Ru(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,je(a,o)){var s=n.interleaved;s===null?(l.next=l,uo(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=uu(e,n,l,r),t!==null&&(l=ie(),Ne(t,e,r,l),Tu(t,n,r))}}function Pu(e){var n=e.alternate;return e===B||n!==null&&n===B}function Ru(e,n){Ct=Wr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Tu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yi(e,t)}}var qr={readContext:we,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},B$={readContext:we,useCallback:function(e,n){return Oe().memoizedState=[e,n===void 0?null:n],e},useContext:we,useEffect:wa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,wr(4194308,4,Su.bind(null,n,e),t)},useLayoutEffect:function(e,n){return wr(4194308,4,e,n)},useInsertionEffect:function(e,n){return wr(4,2,e,n)},useMemo:function(e,n){var t=Oe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Oe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=F$.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=Oe();return e={current:e},n.memoizedState=e},useState:Sa,useDebugValue:ho,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Sa(!1),n=e[0];return e=L$.bind(null,e[1]),Oe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,l=Oe();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),X===null)throw Error(v(349));xn&30||pu(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,wa(_u.bind(null,r,i,e),[e]),r.flags|=2048,Qt(9,mu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Oe(),n=X.identifierPrefix;if(F){var t=He,r=Ie;t=(r&~(1<<32-Te(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Ut++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=M$++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},I$={readContext:we,useCallback:ku,useContext:we,useEffect:go,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:zu,useMemo:Cu,useReducer:Al,useRef:hu,useState:function(){return Al(Vt)},useDebugValue:ho,useDeferredValue:function(e){var n=ke();return xu(n,q.memoizedState,e)},useTransition:function(){var e=Al(Vt)[0],n=ke().memoizedState;return[e,n]},useMutableSource:du,useSyncExternalStore:$u,useId:Eu,unstable_isNewReconciler:!1},H$={readContext:we,useCallback:ku,useContext:we,useEffect:go,useImperativeHandle:wu,useInsertionEffect:yu,useLayoutEffect:zu,useMemo:Cu,useReducer:Bl,useRef:hu,useState:function(){return Bl(Vt)},useDebugValue:ho,useDeferredValue:function(e){var n=ke();return q===null?n.memoizedState=e:xu(n,q.memoizedState,e)},useTransition:function(){var e=Bl(Vt)[0],n=ke().memoizedState;return[e,n]},useMutableSource:du,useSyncExternalStore:$u,useId:Eu,unstable_isNewReconciler:!1};function Ee(e,n){if(e&&e.defaultProps){n=I({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function zi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:I({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var al={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),l=sn(e),i=Ue(r,l);i.payload=n,t!=null&&(i.callback=t),n=on(e,i,l),n!==null&&(Ne(n,e,l,r),zr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),l=sn(e),i=Ue(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=on(e,i,l),n!==null&&(Ne(n,e,l,r),zr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=sn(e),l=Ue(t,r);l.tag=2,n!=null&&(l.callback=n),n=on(e,l,r),n!==null&&(Ne(n,e,r,t),zr(n,e,r))}};function ka(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Lt(t,r)||!Lt(l,i):!0}function Nu(e,n,t){var r=!1,l=fn,i=n.contextType;return typeof i=="object"&&i!==null?i=we(i):(l=fe(n)?kn:re.current,r=n.contextTypes,i=(r=r!=null)?Jn(e,l):fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=al,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Ca(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&al.enqueueReplaceState(n,n.state,null)}function Si(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},co(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=we(i):(i=fe(n)?kn:re.current,l.context=Jn(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(zi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&al.enqueueReplaceState(l,l.state,null),Vr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,n){try{var t="",r=n;do t+=md(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Il(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function wi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var U$=typeof WeakMap=="function"?WeakMap:Map;function ju(e,n,t){t=Ue(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Gr||(Gr=!0,Di=r),wi(e,n)},t}function Du(e,n,t){t=Ue(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){wi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){wi(e,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function xa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new U$;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=tp.bind(null,e,n,t),n.then(e,e))}function Ea(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Pa(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ue(-1,1),n.tag=2,on(t,n,1))),t.lanes|=1),e)}var V$=Ke.ReactCurrentOwner,ue=!1;function le(e,n,t,r){n.child=e===null?su(n,null,t,r):bn(n,e.child,t,r)}function Ra(e,n,t,r,l){t=t.render;var i=n.ref;return Gn(n,l),r=_o(e,n,t,r,i,l),t=vo(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,qe(e,n,l)):(F&&t&&ro(n),n.flags|=1,le(e,n,r,l),n.child)}function Ta(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Eo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ou(e,n,i,r,l)):(e=Er(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Lt,t(o,r)&&e.ref===n.ref)return qe(e,n,l)}return n.flags|=1,e=un(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ou(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Lt(i,r)&&e.ref===n.ref)if(ue=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ue=!0);else return n.lanes=e.lanes,qe(e,n,l)}return ki(e,n,t,r,l)}function Mu(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Vn,$e),$e|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Vn,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,O(Vn,$e),$e|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,O(Vn,$e),$e|=r;return le(e,n,l,t),n.child}function Lu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ki(e,n,t,r,l){var i=fe(t)?kn:re.current;return i=Jn(n,i),Gn(n,l),t=_o(e,n,t,r,i,l),r=vo(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,qe(e,n,l)):(F&&r&&ro(n),n.flags|=1,le(e,n,t,l),n.child)}function Na(e,n,t,r,l){if(fe(t)){var i=!0;Ar(n)}else i=!1;if(Gn(n,l),n.stateNode===null)kr(e,n),Nu(n,t,r),Si(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=we(c):(c=fe(t)?kn:re.current,c=Jn(n,c));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ca(n,o,r,c),Xe=!1;var $=n.memoizedState;o.state=$,Vr(n,r,o,l),s=n.memoizedState,a!==r||$!==s||ce.current||Xe?(typeof m=="function"&&(zi(n,t,m,r),s=n.memoizedState),(a=Xe||ka(n,t,a,r,$,s,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,cu(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Ee(n.type,a),o.props=c,p=n.pendingProps,$=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=we(s):(s=fe(t)?kn:re.current,s=Jn(n,s));var g=t.getDerivedStateFromProps;(m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||$!==s)&&Ca(n,o,r,s),Xe=!1,$=n.memoizedState,o.state=$,Vr(n,r,o,l);var h=n.memoizedState;a!==p||$!==h||ce.current||Xe?(typeof g=="function"&&(zi(n,t,g,r),h=n.memoizedState),(c=Xe||ka(n,t,c,r,$,h,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,h,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,h,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=h),o.props=r,o.state=h,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),r=!1)}return Ci(e,n,t,r,i,l)}function Ci(e,n,t,r,l,i){Lu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&_a(n,t,!1),qe(e,n,i);r=n.stateNode,V$.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=bn(n,e.child,null,i),n.child=bn(n,null,a,i)):le(e,n,a,i),n.memoizedState=r.state,l&&_a(n,t,!0),n.child}function Fu(e){var n=e.stateNode;n.pendingContext?ma(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ma(e,n.context,!1),fo(e,n.containerInfo)}function ja(e,n,t,r,l){return Zn(),io(l),n.flags|=256,le(e,n,t,r),n.child}var xi={dehydrated:null,treeContext:null,retryLane:0};function Ei(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,n,t){var r=n.pendingProps,l=A.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(A,l&1),e===null)return hi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=cl(o,r,0,null),e=wn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ei(t),n.memoizedState=xi,e):yo(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Q$(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=un(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=un(a,i):(i=wn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Ei(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=xi,r}return i=e.child,e=i.sibling,r=un(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function yo(e,n){return n=cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function dr(e,n,t,r){return r!==null&&io(r),bn(n,e.child,null,t),e=yo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Q$(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Il(Error(v(422))),dr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=cl({mode:"visible",children:r.children},l,0,null),i=wn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&bn(n,e.child,null,o),n.child.memoizedState=Ei(o),n.memoizedState=xi,i);if(!(n.mode&1))return dr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(v(419)),r=Il(i,r,void 0),dr(e,n,o,r)}if(a=(o&e.childLanes)!==0,ue||a){if(r=X,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,We(e,l),Ne(r,e,l,-1))}return xo(),r=Il(Error(v(421))),dr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=rp.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,pe=ln(l.nextSibling),me=n,F=!0,Re=null,e!==null&&(he[ye++]=Ie,he[ye++]=He,he[ye++]=Cn,Ie=e.id,He=e.overflow,Cn=n),n=yo(n,r.children),n.flags|=4096,n)}function Da(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),yi(e.return,n,t)}function Hl(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Bu(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(le(e,n,r.children,t),r=A.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Da(e,t,n);else if(e.tag===19)Da(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(A,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Hl(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Qr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Hl(n,!0,t,null,i);break;case"together":Hl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function kr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),En|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function W$(e,n,t){switch(n.tag){case 3:Fu(n),Zn();break;case 5:fu(n);break;case 1:fe(n.type)&&Ar(n);break;case 4:fo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;O(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(A,A.current&1),n.flags|=128,null):t&n.child.childLanes?Au(e,n,t):(O(A,A.current&1),e=qe(e,n,t),e!==null?e.sibling:null);O(A,A.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Bu(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(A,A.current),r)break;return null;case 22:case 23:return n.lanes=0,Mu(e,n,t)}return qe(e,n,t)}var Iu,Pi,Hu,Uu;Iu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pi=function(){};Hu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,zn(Fe.current);var i=null;switch(t){case"input":l=Xl(e,l),r=Xl(e,r),i=[];break;case"select":l=I({},l,{value:void 0}),r=I({},r,{value:void 0}),i=[];break;case"textarea":l=bl(e,l),r=bl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lr)}ni(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rt.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&M("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Uu=function(e,n,t,r){t!==r&&(n.flags|=4)};function pt(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function q$(e,n,t){var r=n.pendingProps;switch(lo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return fe(n.type)&&Fr(),ne(n),null;case 3:return r=n.stateNode,et(),L(ce),L(re),po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(Li(Re),Re=null))),Pi(e,n),ne(n),null;case 5:$o(n);var l=zn(Ht.current);if(t=n.type,e!==null&&n.stateNode!=null)Hu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return ne(n),null}if(e=zn(Fe.current),cr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Me]=n,r[Bt]=i,e=(n.mode&1)!==0,t){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<ht.length;l++)M(ht[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":Uo(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":Qo(r,i),M("invalid",r)}ni(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ur(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ur(r.textContent,a,e),l=["children",""+a]):Rt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&M("scroll",r)}switch(t){case"input":nr(r),Vo(r,i,!0);break;case"textarea":nr(r),Wo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Lr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_s(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Me]=n,e[Bt]=r,Iu(e,n,!1,!1),n.stateNode=e;e:{switch(o=ti(t,r),t){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<ht.length;l++)M(ht[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":Uo(e,r),l=Xl(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=I({},r,{value:void 0}),M("invalid",e);break;case"textarea":Qo(e,r),l=bl(e,r),M("invalid",e);break;default:l=r}ni(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?hs(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&vs(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Tt(e,s):typeof s=="number"&&Tt(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rt.hasOwnProperty(i)?s!=null&&i==="onScroll"&&M("scroll",e):s!=null&&Vi(e,i,s,o))}switch(t){case"input":nr(e),Vo(e,r,!1);break;case"textarea":nr(e),Wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Lr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)Uu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=zn(Ht.current),zn(Fe.current),cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Me]=n,(i=r.nodeValue!==t)&&(e=me,e!==null))switch(e.tag){case 3:ur(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ur(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Me]=n,n.stateNode=r}return ne(n),null;case 13:if(L(A),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&pe!==null&&n.mode&1&&!(n.flags&128))ou(),Zn(),n.flags|=98560,i=!1;else if(i=cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Me]=n}else Zn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),i=!1}else Re!==null&&(Li(Re),Re=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||A.current&1?K===0&&(K=3):xo())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return et(),Pi(e,n),e===null&&Ft(n.stateNode.containerInfo),ne(n),null;case 10:return so(n.type._context),ne(n),null;case 17:return fe(n.type)&&Fr(),ne(n),null;case 19:if(L(A),i=n.memoizedState,i===null)return ne(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)pt(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Qr(e),o!==null){for(n.flags|=128,pt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(A,A.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>tt&&(n.flags|=128,r=!0,pt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Qr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),pt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!F)return ne(n),null}else 2*Q()-i.renderingStartTime>tt&&t!==1073741824&&(n.flags|=128,r=!0,pt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=A.current,O(A,r?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return Co(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?$e&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function K$(e,n){switch(lo(n),n.tag){case 1:return fe(n.type)&&Fr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(),L(ce),L(re),po(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $o(n),null;case 13:if(L(A),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));Zn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return L(A),null;case 4:return et(),null;case 10:return so(n.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var $r=!1,te=!1,G$=typeof WeakSet=="function"?WeakSet:Set,S=null;function Un(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function Ri(e,n,t){try{t()}catch(r){H(e,n,r)}}var Oa=!1;function Y$(e,n){if(di=Dr,e=Ks(),to(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,c=0,m=0,p=e,$=null;n:for(;;){for(var g;p!==t||l!==0&&p.nodeType!==3||(a=o+l),p!==i||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)$=p,p=g;for(;;){if(p===e)break n;if($===t&&++c===l&&(a=o),$===i&&++m===r&&(s=o),(g=p.nextSibling)!==null)break;p=$,$=p.parentNode}p=g}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for($i={focusedElem:e,selectionRange:t},Dr=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var h=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,D=h.memoizedState,f=n.stateNode,u=f.getSnapshotBeforeUpdate(n.elementType===n.type?y:Ee(n.type,y),D);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(_){H(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return h=Oa,Oa=!1,h}function xt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ri(n,t,i)}l=l.next}while(l!==r)}}function sl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ti(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Vu(e){var n=e.alternate;n!==null&&(e.alternate=null,Vu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Me],delete n[Bt],delete n[_i],delete n[N$],delete n[j$])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ni(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Lr));else if(r!==4&&(e=e.child,e!==null))for(Ni(e,n,t),e=e.sibling;e!==null;)Ni(e,n,t),e=e.sibling}function ji(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ji(e,n,t),e=e.sibling;e!==null;)ji(e,n,t),e=e.sibling}var J=null,Pe=!1;function Ge(e,n,t){for(t=t.child;t!==null;)Wu(e,n,t),t=t.sibling}function Wu(e,n,t){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(el,t)}catch{}switch(t.tag){case 5:te||Un(t,n);case 6:var r=J,l=Pe;J=null,Ge(e,n,t),J=r,Pe=l,J!==null&&(Pe?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Pe?(e=J,t=t.stateNode,e.nodeType===8?Ol(e.parentNode,t):e.nodeType===1&&Ol(e,t),Ot(e)):Ol(J,t.stateNode));break;case 4:r=J,l=Pe,J=t.stateNode.containerInfo,Pe=!0,Ge(e,n,t),J=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ri(t,n,o),l=l.next}while(l!==r)}Ge(e,n,t);break;case 1:if(!te&&(Un(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){H(t,n,a)}Ge(e,n,t);break;case 21:Ge(e,n,t);break;case 22:t.mode&1?(te=(r=te)||t.memoizedState!==null,Ge(e,n,t),te=r):Ge(e,n,t);break;default:Ge(e,n,t)}}function La(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new G$),n.forEach(function(r){var l=lp.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function xe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Pe=!1;break e;case 3:J=a.stateNode.containerInfo,Pe=!0;break e;case 4:J=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(J===null)throw Error(v(160));Wu(i,o,l),J=null,Pe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){H(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qu(n,e),n=n.sibling}function qu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xe(n,e),De(e),r&4){try{xt(3,e,e.return),sl(3,e)}catch(y){H(e,e.return,y)}try{xt(5,e,e.return)}catch(y){H(e,e.return,y)}}break;case 1:xe(n,e),De(e),r&512&&t!==null&&Un(t,t.return);break;case 5:if(xe(n,e),De(e),r&512&&t!==null&&Un(t,t.return),e.flags&32){var l=e.stateNode;try{Tt(l,"")}catch(y){H(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ps(l,i),ti(a,o);var c=ti(a,i);for(o=0;o<s.length;o+=2){var m=s[o],p=s[o+1];m==="style"?hs(l,p):m==="dangerouslySetInnerHTML"?vs(l,p):m==="children"?Tt(l,p):Vi(l,m,p,c)}switch(a){case"input":Jl(l,i);break;case"textarea":ms(l,i);break;case"select":var $=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Qn(l,!!i.multiple,g,!1):$!==!!i.multiple&&(i.defaultValue!=null?Qn(l,!!i.multiple,i.defaultValue,!0):Qn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Bt]=i}catch(y){H(e,e.return,y)}}break;case 6:if(xe(n,e),De(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){H(e,e.return,y)}}break;case 3:if(xe(n,e),De(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ot(n.containerInfo)}catch(y){H(e,e.return,y)}break;case 4:xe(n,e),De(e);break;case 13:xe(n,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(wo=Q())),r&4&&La(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(te=(c=te)||m,xe(n,e),te=c):xe(n,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(p=S=m;S!==null;){switch($=S,g=$.child,$.tag){case 0:case 11:case 14:case 15:xt(4,$,$.return);break;case 1:Un($,$.return);var h=$.stateNode;if(typeof h.componentWillUnmount=="function"){r=$,t=$.return;try{n=r,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(y){H(r,t,y)}}break;case 5:Un($,$.return);break;case 22:if($.memoizedState!==null){Aa(p);continue}}g!==null?(g.return=$,S=g):Aa(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=gs("display",o))}catch(y){H(e,e.return,y)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){H(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:xe(n,e),De(e),r&4&&La(e);break;case 21:break;default:xe(n,e),De(e)}}function De(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Qu(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Tt(l,""),r.flags&=-33);var i=Ma(e);ji(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ma(e);Ni(e,a,o);break;default:throw Error(v(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function X$(e,n,t){S=e,Ku(e)}function Ku(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||$r;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||te;a=$r;var c=te;if($r=o,(te=s)&&!c)for(S=l;S!==null;)o=S,s=o.child,o.tag===22&&o.memoizedState!==null?Ba(l):s!==null?(s.return=o,S=s):Ba(l);for(;i!==null;)S=i,Ku(i),i=i.sibling;S=l,$r=a,te=c}Fa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Fa(e)}}function Fa(e){for(;S!==null;){var n=S;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||sl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!te)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ee(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&za(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}za(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Ot(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}te||n.flags&512&&Ti(n)}catch($){H(n,n.return,$)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function Aa(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function Ba(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{sl(4,n)}catch(s){H(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){H(n,l,s)}}var i=n.return;try{Ti(n)}catch(s){H(n,i,s)}break;case 5:var o=n.return;try{Ti(n)}catch(s){H(n,o,s)}}}catch(s){H(n,n.return,s)}if(n===e){S=null;break}var a=n.sibling;if(a!==null){a.return=n.return,S=a;break}S=n.return}}var J$=Math.ceil,Kr=Ke.ReactCurrentDispatcher,zo=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,N=0,X=null,W=null,Z=0,$e=0,Vn=$n(0),K=0,Wt=null,En=0,ul=0,So=0,Et=null,se=null,wo=0,tt=1/0,Ae=null,Gr=!1,Di=null,an=null,pr=!1,en=null,Yr=0,Pt=0,Oi=null,Cr=-1,xr=0;function ie(){return N&6?Q():Cr!==-1?Cr:Cr=Q()}function sn(e){return e.mode&1?N&2&&Z!==0?Z&-Z:O$.transition!==null?(xr===0&&(xr=Ns()),xr):(e=j,e!==0||(e=window.event,e=e===void 0?16:As(e.type)),e):1}function Ne(e,n,t,r){if(50<Pt)throw Pt=0,Oi=null,Error(v(185));Kt(e,t,r),(!(N&2)||e!==X)&&(e===X&&(!(N&2)&&(ul|=t),K===4&&Ze(e,Z)),de(e,r),t===1&&N===0&&!(n.mode&1)&&(tt=Q()+500,il&&pn()))}function de(e,n){var t=e.callbackNode;Od(e,n);var r=jr(e,e===X?Z:0);if(r===0)t!==null&&Go(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Go(t),n===1)e.tag===0?D$(Ia.bind(null,e)):ru(Ia.bind(null,e)),R$(function(){!(N&6)&&pn()}),t=null;else{switch(js(r)){case 1:t=Gi;break;case 4:t=Rs;break;case 16:t=Nr;break;case 536870912:t=Ts;break;default:t=Nr}t=nc(t,Gu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gu(e,n){if(Cr=-1,xr=0,N&6)throw Error(v(327));var t=e.callbackNode;if(Yn()&&e.callbackNode!==t)return null;var r=jr(e,e===X?Z:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Xr(e,r);else{n=r;var l=N;N|=2;var i=Xu();(X!==e||Z!==n)&&(Ae=null,tt=Q()+500,Sn(e,n));do try{ep();break}catch(a){Yu(e,a)}while(!0);ao(),Kr.current=i,N=l,W!==null?n=0:(X=null,Z=0,n=K)}if(n!==0){if(n===2&&(l=ai(e),l!==0&&(r=l,n=Mi(e,l))),n===1)throw t=Wt,Sn(e,0),Ze(e,r),de(e,Q()),t;if(n===6)Ze(e,r);else{if(l=e.current.alternate,!(r&30)&&!Z$(l)&&(n=Xr(e,r),n===2&&(i=ai(e),i!==0&&(r=i,n=Mi(e,i))),n===1))throw t=Wt,Sn(e,0),Ze(e,r),de(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:gn(e,se,Ae);break;case 3:if(Ze(e,r),(r&130023424)===r&&(n=wo+500-Q(),10<n)){if(jr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=mi(gn.bind(null,e,se,Ae),n);break}gn(e,se,Ae);break;case 4:if(Ze(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Te(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J$(r/1960))-r,10<r){e.timeoutHandle=mi(gn.bind(null,e,se,Ae),r);break}gn(e,se,Ae);break;case 5:gn(e,se,Ae);break;default:throw Error(v(329))}}}return de(e,Q()),e.callbackNode===t?Gu.bind(null,e):null}function Mi(e,n){var t=Et;return e.current.memoizedState.isDehydrated&&(Sn(e,n).flags|=256),e=Xr(e,n),e!==2&&(n=se,se=t,n!==null&&Li(n)),e}function Li(e){se===null?se=e:se.push.apply(se,e)}function Z$(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!je(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ze(e,n){for(n&=~So,n&=~ul,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Te(n),r=1<<t;e[t]=-1,n&=~r}}function Ia(e){if(N&6)throw Error(v(327));Yn();var n=jr(e,0);if(!(n&1))return de(e,Q()),null;var t=Xr(e,n);if(e.tag!==0&&t===2){var r=ai(e);r!==0&&(n=r,t=Mi(e,r))}if(t===1)throw t=Wt,Sn(e,0),Ze(e,n),de(e,Q()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,gn(e,se,Ae),de(e,Q()),null}function ko(e,n){var t=N;N|=1;try{return e(n)}finally{N=t,N===0&&(tt=Q()+500,il&&pn())}}function Pn(e){en!==null&&en.tag===0&&!(N&6)&&Yn();var n=N;N|=1;var t=Se.transition,r=j;try{if(Se.transition=null,j=1,e)return e()}finally{j=r,Se.transition=t,N=n,!(N&6)&&pn()}}function Co(){$e=Vn.current,L(Vn)}function Sn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,P$(t)),W!==null)for(t=W.return;t!==null;){var r=t;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fr();break;case 3:et(),L(ce),L(re),po();break;case 5:$o(r);break;case 4:et();break;case 13:L(A);break;case 19:L(A);break;case 10:so(r.type._context);break;case 22:case 23:Co()}t=t.return}if(X=e,W=e=un(e.current,null),Z=$e=n,K=0,Wt=null,So=ul=En=0,se=Et=null,yn!==null){for(n=0;n<yn.length;n++)if(t=yn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}yn=null}return e}function Yu(e,n){do{var t=W;try{if(ao(),Sr.current=qr,Wr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Wr=!1}if(xn=0,Y=q=B=null,Ct=!1,Ut=0,zo.current=null,t===null||t.return===null){K=1,Wt=n,W=null;break}e:{var i=e,o=t.return,a=t,s=n;if(n=Z,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var $=m.alternate;$?(m.updateQueue=$.updateQueue,m.memoizedState=$.memoizedState,m.lanes=$.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Ea(o);if(g!==null){g.flags&=-257,Pa(g,o,a,i,n),g.mode&1&&xa(i,c,n),n=g,s=c;var h=n.updateQueue;if(h===null){var y=new Set;y.add(s),n.updateQueue=y}else h.add(s);break e}else{if(!(n&1)){xa(i,c,n),xo();break e}s=Error(v(426))}}else if(F&&a.mode&1){var D=Ea(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Pa(D,o,a,i,n),io(nt(s,a));break e}}i=s=nt(s,a),K!==4&&(K=2),Et===null?Et=[i]:Et.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=ju(i,s,n);ya(i,f);break e;case 1:a=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(an===null||!an.has(d)))){i.flags|=65536,n&=-n,i.lanes|=n;var _=Du(i,a,n);ya(i,_);break e}}i=i.return}while(i!==null)}Zu(t)}catch(z){n=z,W===t&&t!==null&&(W=t=t.return);continue}break}while(!0)}function Xu(){var e=Kr.current;return Kr.current=qr,e===null?qr:e}function xo(){(K===0||K===3||K===2)&&(K=4),X===null||!(En&268435455)&&!(ul&268435455)||Ze(X,Z)}function Xr(e,n){var t=N;N|=2;var r=Xu();(X!==e||Z!==n)&&(Ae=null,Sn(e,n));do try{b$();break}catch(l){Yu(e,l)}while(!0);if(ao(),N=t,Kr.current=r,W!==null)throw Error(v(261));return X=null,Z=0,K}function b$(){for(;W!==null;)Ju(W)}function ep(){for(;W!==null&&!Cd();)Ju(W)}function Ju(e){var n=ec(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?Zu(e):W=n,zo.current=null}function Zu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=K$(t,n),t!==null){t.flags&=32767,W=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,W=null;return}}else if(t=q$(t,n,$e),t!==null){W=t;return}if(n=n.sibling,n!==null){W=n;return}W=n=e}while(n!==null);K===0&&(K=5)}function gn(e,n,t){var r=j,l=Se.transition;try{Se.transition=null,j=1,np(e,n,t,r)}finally{Se.transition=l,j=r}return null}function np(e,n,t,r){do Yn();while(en!==null);if(N&6)throw Error(v(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Md(e,i),e===X&&(W=X=null,Z=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||pr||(pr=!0,nc(Nr,function(){return Yn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var o=j;j=1;var a=N;N|=4,zo.current=null,Y$(e,t),qu(t,e),z$($i),Dr=!!di,$i=di=null,e.current=t,X$(t),xd(),N=a,j=o,Se.transition=i}else e.current=t;if(pr&&(pr=!1,en=e,Yr=l),i=e.pendingLanes,i===0&&(an=null),Rd(t.stateNode),de(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Gr)throw Gr=!1,e=Di,Di=null,e;return Yr&1&&e.tag!==0&&Yn(),i=e.pendingLanes,i&1?e===Oi?Pt++:(Pt=0,Oi=e):Pt=0,pn(),null}function Yn(){if(en!==null){var e=js(Yr),n=Se.transition,t=j;try{if(Se.transition=null,j=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Yr=0,N&6)throw Error(v(331));var l=N;for(N|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(S=c;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:xt(8,m,i)}var p=m.child;if(p!==null)p.return=m,S=p;else for(;S!==null;){m=S;var $=m.sibling,g=m.return;if(Vu(m),m===c){S=null;break}if($!==null){$.return=g,S=$;break}S=g}}}var h=i.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var D=y.sibling;y.sibling=null,y=D}while(y!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:xt(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){o=S;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,S=d;else e:for(o=u;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(z){H(a,a.return,z)}if(a===o){S=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,S=_;break e}S=a.return}}if(N=l,pn(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{j=t,Se.transition=n}}return!1}function Ha(e,n,t){n=nt(t,n),n=ju(e,n,1),e=on(e,n,1),n=ie(),e!==null&&(Kt(e,1,n),de(e,n))}function H(e,n,t){if(e.tag===3)Ha(e,e,t);else for(;n!==null;){if(n.tag===3){Ha(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=nt(t,e),e=Du(n,e,1),n=on(n,e,1),e=ie(),n!==null&&(Kt(n,1,e),de(n,e));break}}n=n.return}}function tp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,X===e&&(Z&t)===t&&(K===4||K===3&&(Z&130023424)===Z&&500>Q()-wo?Sn(e,0):So|=t),de(e,n)}function bu(e,n){n===0&&(e.mode&1?(n=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):n=1);var t=ie();e=We(e,n),e!==null&&(Kt(e,n,t),de(e,t))}function rp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),bu(e,t)}function lp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),bu(e,t)}var ec;ec=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ue=!1,W$(e,n,t);ue=!!(e.flags&131072)}else ue=!1,F&&n.flags&1048576&&lu(n,Ir,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;kr(e,n),e=n.pendingProps;var l=Jn(n,re.current);Gn(n,t),l=_o(null,n,r,e,l,t);var i=vo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(i=!0,Ar(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,co(n),l.updater=al,n.stateNode=l,l._reactInternals=n,Si(n,r,e,t),n=Ci(null,n,r,!0,i,t)):(n.tag=0,F&&i&&ro(n),le(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(kr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=op(r),e=Ee(r,e),l){case 0:n=ki(null,n,r,e,t);break e;case 1:n=Na(null,n,r,e,t);break e;case 11:n=Ra(null,n,r,e,t);break e;case 14:n=Ta(null,n,r,Ee(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ee(r,l),ki(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ee(r,l),Na(e,n,r,l,t);case 3:e:{if(Fu(n),e===null)throw Error(v(387));r=n.pendingProps,i=n.memoizedState,l=i.element,cu(e,n),Vr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=nt(Error(v(423)),n),n=ja(e,n,r,t,l);break e}else if(r!==l){l=nt(Error(v(424)),n),n=ja(e,n,r,t,l);break e}else for(pe=ln(n.stateNode.containerInfo.firstChild),me=n,F=!0,Re=null,t=su(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zn(),r===l){n=qe(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return fu(n),e===null&&hi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,pi(r,l)?o=null:i!==null&&pi(r,i)&&(n.flags|=32),Lu(e,n),le(e,n,o,t),n.child;case 6:return e===null&&hi(n),null;case 13:return Au(e,n,t);case 4:return fo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=bn(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ee(r,l),Ra(e,n,r,l,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,O(Hr,r._currentValue),r._currentValue=o,i!==null)if(je(i.value,o)){if(i.children===l.children&&!ce.current){n=qe(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ue(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),yi(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),yi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}le(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Gn(n,t),l=we(l),r=r(l),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,l=Ee(r,n.pendingProps),l=Ee(r.type,l),Ta(e,n,r,l,t);case 15:return Ou(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ee(r,l),kr(e,n),n.tag=1,fe(r)?(e=!0,Ar(n)):e=!1,Gn(n,t),Nu(n,r,l),Si(n,r,l,t),Ci(null,n,r,!0,e,t);case 19:return Bu(e,n,t);case 22:return Mu(e,n,t)}throw Error(v(156,n.tag))};function nc(e,n){return Ps(e,n)}function ip(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,n,t,r){return new ip(e,n,t,r)}function Eo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function op(e){if(typeof e=="function")return Eo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wi)return 11;if(e===qi)return 14}return 2}function un(e,n){var t=e.alternate;return t===null?(t=ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Er(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Eo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dn:return wn(t.children,l,i,n);case Qi:o=8,l|=8;break;case ql:return e=ze(12,t,n,l|2),e.elementType=ql,e.lanes=i,e;case Kl:return e=ze(13,t,n,l),e.elementType=Kl,e.lanes=i,e;case Gl:return e=ze(19,t,n,l),e.elementType=Gl,e.lanes=i,e;case fs:return cl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:o=10;break e;case cs:o=9;break e;case Wi:o=11;break e;case qi:o=14;break e;case Ye:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=ze(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function wn(e,n,t,r){return e=ze(7,e,r,n),e.lanes=t,e}function cl(e,n,t,r){return e=ze(22,e,r,n),e.elementType=fs,e.lanes=t,e.stateNode={isHidden:!1},e}function Ul(e,n,t){return e=ze(6,e,null,n),e.lanes=t,e}function Vl(e,n,t){return n=ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ap(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,n,t,r,l,i,o,a,s){return e=new ap(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=ze(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(i),e}function sp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function tc(e){if(!e)return fn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(fe(t))return tu(e,t,n)}return n}function rc(e,n,t,r,l,i,o,a,s){return e=Po(t,r,!0,e,l,i,o,a,s),e.context=tc(null),t=e.current,r=ie(),l=sn(t),i=Ue(r,l),i.callback=n??null,on(t,i,l),e.current.lanes=l,Kt(e,l,r),de(e,r),e}function fl(e,n,t,r){var l=n.current,i=ie(),o=sn(l);return t=tc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ue(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=on(l,n,o),e!==null&&(Ne(e,l,o,i),zr(e,l,o)),o}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ua(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ro(e,n){Ua(e,n),(e=e.alternate)&&Ua(e,n)}function up(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function To(e){this._internalRoot=e}dl.prototype.render=To.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));fl(e,n,null,null)};dl.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pn(function(){fl(null,e,null,null)}),n[Qe]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ms();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Je.length&&n!==0&&n<Je[t].priority;t++);Je.splice(t,0,e),t===0&&Fs(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Va(){}function cp(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Jr(o);i.call(c)}}var o=rc(n,r,e,0,null,!1,!1,"",Va);return e._reactRootContainer=o,e[Qe]=o.current,Ft(e.nodeType===8?e.parentNode:e),Pn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Jr(s);a.call(c)}}var s=Po(e,0,!1,null,null,!1,!1,"",Va);return e._reactRootContainer=s,e[Qe]=s.current,Ft(e.nodeType===8?e.parentNode:e),Pn(function(){fl(n,s,t,r)}),s}function pl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=Jr(o);a.call(s)}}fl(n,o,e,l)}else o=cp(t,n,e,l,r);return Jr(o)}Ds=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=gt(n.pendingLanes);t!==0&&(Yi(n,t|1),de(n,Q()),!(N&6)&&(tt=Q()+500,pn()))}break;case 13:Pn(function(){var r=We(e,1);if(r!==null){var l=ie();Ne(r,e,1,l)}}),Ro(e,1)}};Xi=function(e){if(e.tag===13){var n=We(e,134217728);if(n!==null){var t=ie();Ne(n,e,134217728,t)}Ro(e,134217728)}};Os=function(e){if(e.tag===13){var n=sn(e),t=We(e,n);if(t!==null){var r=ie();Ne(t,e,n,r)}Ro(e,n)}};Ms=function(){return j};Ls=function(e,n){var t=j;try{return j=e,n()}finally{j=t}};li=function(e,n,t){switch(n){case"input":if(Jl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ll(r);if(!l)throw Error(v(90));$s(r),Jl(r,l)}}}break;case"textarea":ms(e,t);break;case"select":n=t.value,n!=null&&Qn(e,!!t.multiple,n,!1)}};Ss=ko;ws=Pn;var fp={usingClientEntryPoint:!1,Events:[Yt,Fn,ll,ys,zs,ko]},mt={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:mt.bundleType,version:mt.version,rendererPackageName:mt.rendererPackageName,rendererConfig:mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xs(e),e===null?null:e.stateNode},findFiberByHostInstance:mt.findFiberByHostInstance||up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mr.isDisabled&&mr.supportsFiber)try{el=mr.inject(dp),Le=mr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fp;ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(n))throw Error(v(200));return sp(e,n,null,t)};ve.createRoot=function(e,n){if(!No(e))throw Error(v(299));var t=!1,r="",l=lc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Po(e,1,!1,null,null,t,!1,r,l),e[Qe]=n.current,Ft(e.nodeType===8?e.parentNode:e),new To(n)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=xs(n),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Pn(e)};ve.hydrate=function(e,n,t){if(!$l(n))throw Error(v(200));return pl(null,e,n,!0,t)};ve.hydrateRoot=function(e,n,t){if(!No(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=lc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=rc(n,null,e,1,t??null,l,!1,i,o),e[Qe]=n.current,Ft(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new dl(n)};ve.render=function(e,n,t){if(!$l(n))throw Error(v(200));return pl(null,e,n,!1,t)};ve.unmountComponentAtNode=function(e){if(!$l(e))throw Error(v(40));return e._reactRootContainer?(Pn(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ve.unstable_batchedUpdates=ko;ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!$l(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return pl(e,n,t,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),is.exports=ve;var $p=is.exports,Qa=$p;Ql.createRoot=Qa.createRoot,Ql.hydrateRoot=Qa.hydrateRoot;const oc="comm-princ",ac="通信原理",sc=4,pp={id:oc,title:ac,order:sc},mp=Object.freeze(Object.defineProperty({__proto__:null,default:pp,id:oc,order:sc,title:ac},Symbol.toStringTag,{value:"Module"})),uc="总内容",cc="总内容",fc=1,_p={id:uc,title:cc,order:fc},vp=Object.freeze(Object.defineProperty({__proto__:null,default:_p,id:uc,order:fc,title:cc},Symbol.toStringTag,{value:"Module"})),dc="00-course-overview",$c="课程说明",pc=0,gp={id:dc,title:$c,order:pc},hp=Object.freeze(Object.defineProperty({__proto__:null,default:gp,id:dc,order:pc,title:$c},Symbol.toStringTag,{value:"Module"})),mc="01-introduction",_c="第 1 章 绪论",vc=1,yp={id:mc,title:_c,order:vc},zp=Object.freeze(Object.defineProperty({__proto__:null,default:yp,id:mc,order:vc,title:_c},Symbol.toStringTag,{value:"Module"})),gc="02-basics",hc="第 2 章 图像处理基础知识",yc=2,Sp={id:gc,title:hc,order:yc},wp=Object.freeze(Object.defineProperty({__proto__:null,default:Sp,id:gc,order:yc,title:hc},Symbol.toStringTag,{value:"Module"})),zc="03-enhancement",Sc="第 3 章 图像增强",wc=3,kp={id:zc,title:Sc,order:wc},Cp=Object.freeze(Object.defineProperty({__proto__:null,default:kp,id:zc,order:wc,title:Sc},Symbol.toStringTag,{value:"Module"})),kc="04-transforms",Cc="第 4 章 图像变换",xc=4,xp={id:kc,title:Cc,order:xc},Ep=Object.freeze(Object.defineProperty({__proto__:null,default:xp,id:kc,order:xc,title:Cc},Symbol.toStringTag,{value:"Module"})),Ec="05-restoration",Pc="第 5 章 图像复原",Rc=5,Pp={id:Ec,title:Pc,order:Rc},Rp=Object.freeze(Object.defineProperty({__proto__:null,default:Pp,id:Ec,order:Rc,title:Pc},Symbol.toStringTag,{value:"Module"})),Tc="06-segmentation",Nc="第 6 章 图像分割",jc=6,Tp={id:Tc,title:Nc,order:jc},Np=Object.freeze(Object.defineProperty({__proto__:null,default:Tp,id:Tc,order:jc,title:Nc},Symbol.toStringTag,{value:"Module"})),Dc="07-compression",Oc="第 7 章 图像压缩",Mc=7,jp={id:Dc,title:Oc,order:Mc},Dp=Object.freeze(Object.defineProperty({__proto__:null,default:jp,id:Dc,order:Mc,title:Oc},Symbol.toStringTag,{value:"Module"})),Lc="08-visual-supplement",Fc="视觉图示补充",Ac=8,Op={id:Lc,title:Fc,order:Ac},Mp=Object.freeze(Object.defineProperty({__proto__:null,default:Op,id:Lc,order:Ac,title:Fc},Symbol.toStringTag,{value:"Module"})),Bc="digital-image-processing",Ic="数字图像处理",Hc=6,Lp={id:Bc,title:Ic,order:Hc},Fp=Object.freeze(Object.defineProperty({__proto__:null,default:Lp,id:Bc,order:Hc,title:Ic},Symbol.toStringTag,{value:"Module"})),Uc="dsp-1",Vc="第一章：离散时间信号",Qc=1,Ap={id:Uc,title:Vc,order:Qc},Bp=Object.freeze(Object.defineProperty({__proto__:null,default:Ap,id:Uc,order:Qc,title:Vc},Symbol.toStringTag,{value:"Module"})),Wc="dsp",qc="数字信号处理",Kc=5,Ip={id:Wc,title:qc,order:Kc},Hp=Object.freeze(Object.defineProperty({__proto__:null,default:Ip,id:Wc,order:Kc,title:qc},Symbol.toStringTag,{value:"Module"})),Gc="总",Yc="总内容",Xc=1,Up={id:Gc,title:Yc,order:Xc},Vp=Object.freeze(Object.defineProperty({__proto__:null,default:Up,id:Gc,order:Xc,title:Yc},Symbol.toStringTag,{value:"Module"})),Jc="e-fields-anal",Zc="第二章：静电场",bc=2,Qp={id:Jc,title:Zc,order:bc},Wp=Object.freeze(Object.defineProperty({__proto__:null,default:Qp,id:Jc,order:bc,title:Zc},Symbol.toStringTag,{value:"Module"})),ef="em-fields",nf="电磁场与电磁波",tf=3,qp={id:ef,title:nf,order:tf},Kp=Object.freeze(Object.defineProperty({__proto__:null,default:qp,id:ef,order:tf,title:nf},Symbol.toStringTag,{value:"Module"})),rf="second-part",lf="第二部分",of=4,Gp={id:rf,title:lf,order:of},Yp=Object.freeze(Object.defineProperty({__proto__:null,default:Gp,id:rf,order:of,title:lf},Symbol.toStringTag,{value:"Module"})),af="time-varying-fields",sf="第五章：时变电磁场",uf=3,Xp={id:af,title:sf,order:uf},Jp=Object.freeze(Object.defineProperty({__proto__:null,default:Xp,id:af,order:uf,title:sf},Symbol.toStringTag,{value:"Module"})),cf="vector-analysis",ff="第一章：矢量分析",df=1,Zp={id:cf,title:ff,order:df},bp=Object.freeze(Object.defineProperty({__proto__:null,default:Zp,id:cf,order:df,title:ff},Symbol.toStringTag,{value:"Module"})),$f="calc-1",pf="第一章：极限与连续",mf=1,em={id:$f,title:pf,order:mf},nm=Object.freeze(Object.defineProperty({__proto__:null,default:em,id:$f,order:mf,title:pf},Symbol.toStringTag,{value:"Module"})),_f="calc-2",vf="第二章：导数与微分",gf=2,tm={id:_f,title:vf,order:gf},rm=Object.freeze(Object.defineProperty({__proto__:null,default:tm,id:_f,order:gf,title:vf},Symbol.toStringTag,{value:"Module"})),hf="math",yf="高等数学",zf=1,lm={id:hf,title:yf,order:zf},im=Object.freeze(Object.defineProperty({__proto__:null,default:lm,id:hf,order:zf,title:yf},Symbol.toStringTag,{value:"Module"})),Sf="series",wf="第十二章：无穷级数",kf=12,om={id:Sf,title:wf,order:kf},am=Object.freeze(Object.defineProperty({__proto__:null,default:om,id:Sf,order:kf,title:wf},Symbol.toStringTag,{value:"Module"})),Cf="第三章 复变函数的积分",xf=2,sm={title:Cf,order:xf},um=Object.freeze(Object.defineProperty({__proto__:null,default:sm,order:xf,title:Cf},Symbol.toStringTag,{value:"Module"})),Ef="复变函数",Pf="复变函数",Rf=2,cm={id:Ef,title:Pf,order:Rf},fm=Object.freeze(Object.defineProperty({__proto__:null,default:cm,id:Ef,order:Rf,title:Pf},Symbol.toStringTag,{value:"Module"})),Tf="第五章 留数",Nf=5,dm={title:Tf,order:Nf},$m=Object.freeze(Object.defineProperty({__proto__:null,default:dm,order:Nf,title:Tf},Symbol.toStringTag,{value:"Module"})),jf="第四章 级数",Df=4,pm={title:jf,order:Df},mm=Object.freeze(Object.defineProperty({__proto__:null,default:pm,order:Df,title:jf},Symbol.toStringTag,{value:"Module"})),Of="记忆点",Mf=1,_m={title:Of,order:Mf},vm=Object.freeze(Object.defineProperty({__proto__:null,default:_m,order:Mf,title:Of},Symbol.toStringTag,{value:"Module"})),gm=`---
id: 总内容
title: 总内容
order: 1
---

## 通信方式
**单工**：消息只能单方向传输（如无线电广播）
**半双工**：双向但不可同时进行（如对讲机，检索）
**全双工**：双向且可同时进行（如电话）

## 指标
**可靠性（质量）**：误码率（$P_e$）、误信率（$P_s$）
**有效性（速度）**：比特率（$R_b$）、波特率（$R_B$）、频带利用率（$\\eta$）
$$\\eta = \\frac{R_B}{B}$$
信源编码提高有效性（压缩），信道编码提高可靠性（增加冗余以纠错）。
真正衡量数字通信系统的有效性指标是频带利用率：单纯看传输速率（比特率）是不够的，因为高传输速率可能占用了极宽的带宽。单位带宽内的传输速率（即频带利用率）才是衡量系统“传输效率”最公正（真正）的指标。

码元传输速率（波特率）
每秒传输的码元个数，单位：波特（$Baud$）

$M$进制码元包含的比特数
$H=\\log_2M(bit)$

信息传输速率（比特率）
每秒传输的平均信息量
$$R_b = R_B H(b/s)$$

频带利用率
$$\\eta = \\frac{R_B}{B}$$

离散信源熵（平均信息量）
$$H(X) = -\\sum_{i=1}^{M} P(x_i) \\log_2 P(x_i)$$(bit/符号)

当信源**等概率分布**时，数字信源有最大熵：
信息论基本定理，当所有符号出现的概率相等时，信源的不确定性最大，熵最大。

周期信号的傅里叶级数
$$S(t)=\\sum_{n=-\\infty}^{\\infty}C_n e^{j2\\pi n f_0 t}$$

能量
$$E=\\int_{-\\infty}^{\\infty}s^2(t)dt$$
平均功率
$$P=\\lim\\limits_{T\\rightarrow \\infty}\\frac{1}{T}\\int_{-\\frac{T}{2}}^{\\frac{T}{2}}s^2(t)dt$$
**能量（有限）信号**：平均功率为0，能量有限
**功率（有限）信号**：能量无穷大，平均功率有限
比特能量$E_b$：传输一个比特消耗的平均能量$P=E_bR_b$

**能量谱密度**：设能量信号的傅里叶变换（即频谱密度）为$S(f)$则其能量谱密度$G(f)$为
$$G(f)={\\left|S(f)\\right|}^2$$
**功率谱密度（$PSD$）**：设信号的傅里叶变换（即频谱密度）为$S(f)$则其功率谱密度$P(f)$为
$$P(f)=\\lim\\limits_{T\\rightarrow \\infty}\\frac{1}{T}{{\\left|S_T(f)\\right|}^2}$$
$S_T(f)$为截断信号的傅里叶变换
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
**狭义平稳**：随机过程的统计特性与时间起点无关
一维与时间无关
二维只与间隔有关
**广义平稳**：均值与时间无关，相关函数只与$\\tau$有关
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
$$
R(\\tau) \\leftrightarrow P_\\xi(f)
$$
$$
R(\\tau) = \\int_{-\\infty}^{\\infty} P_\\xi(f) e^{j2\\pi f\\tau} df
$$

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

信噪比$=\\frac{S}{N}$后取$10lg$($dB$单位)，在这基础上要用信噪比计算都$dB$先转数值。若有信道损耗的话不能直接减，损耗指的是倍数，要算出取对数前的值再进行乘法计算
## 信道容量
香农公式(白噪声背景下的连续信道容量)
$$C = B \\log_2 \\left(1 + \\frac{S}{N}\\right) \\, (\\text{b/s})$$

# 模拟调制
目的：频谱搬移，匹配信道特性，减小天线尺寸，实现多路复用，提高信道利用率，改善系统性能，实现频率分配
幅度调制：$AM, DSB, SSB, VSB$
角度调制：$FM, PM$
$AM$带宽是$2f_m$，制度增益$\\frac{2}{3}$，$DSB$带宽是$2f_m$，制度增益(输出信噪比和输入信噪比之比)为$2$, $SSB$带宽是$f_m$，制度增益为$1$
$FM$信号的相位偏移随消息信号$m(t)$的积分呈线性变化
$$S_{FM}(t) = A \\cos\\left[ \\omega_c t + K_f \\int m(t) \\, dt \\right]$$
(应该不用记，知道这个大概形式能推出上面的结论就行？)
输入噪声功率$N=双边谱高度\\times总带宽$
**性能比较：**
抗噪声性能：$FM$最好，$DSB/SSB$、$VSB$次之，$AM$最差；
频谱利用率：$SSB$最高，$VSB$较高，$DSB/AM$次之，$FM$最差；
功率利用率：$FM$最高，$DSB/SSB$、$VSB$次之，$AM$最差；
设备复杂度：$AM$最简，$DSB/FM$次之，$VSB$较复杂，$SSB$最复杂。
## 频谱搬移
时域相乘，频域相卷积，即搬移
解调就是把接受到的信号乘以制度增益倍的$\\cos(\\omega_c t)$
之后原来的频谱图会一分为二并且高度降低到原来的一半，一半向左搬移$f_c$，一半向右搬移$f_c$

# 数字基带
系统带宽通常是最高频率减去0（除了DSB和AM）
## 传输码型
**差分码**：遇到1变电平0变11变0，遇到0不变
**AMI**：1变成正负1交替，0不变
**HDB_3**：若连0个数不超3个则AMI，否则第四个改为$V_+$或$V_-$
**双相码**：1变成10，0变成01
**CMI**：1变成11,00交替，0变成01
均衡的目的是消除或减小码间串扰
## 眼图
可观测到抽样失真、过零点失真、判决电平，无法判断码间干扰的大小情况(有争议)
## 码间串扰
**码间串扰**是指前面的码元对当前的码元在**抽样**时刻的影响
## 无码间串扰
无码间串扰的双极性基带传输系统的误码率为
$$\\frac{1}{2}\\mathrm{erfc}\\left(\\frac{A}{\\sqrt{2}\\sigma_n}\\right)$$
### 奈奎斯特带宽
理想低通滤波器的截止频率，或者在滚降特性中，传输函数幅度降为一半时所对应的频率
### 奈奎斯特准则
为了无码间串扰，滤波器形状关于$f_N$点奇对称的话，码元传输速率和特征频率应满足
$$R_B = 2f_N$$
余弦滚降系统的无码间串扰的最高（极限）频带利用率为
$$\\eta = \\frac{R_B}{B} = \\frac{2f_N}{(1+\\alpha)f_N} = \\frac{2}{1+\\alpha}$$
## 最佳判决门限电平
$$V_d^* = \\frac{\\sigma_n^2}{2A} \\ln \\frac{P(0)}{P(1)}$$
特殊地，当$P(1)=P(0)$时，最佳判决门限电平为$0$

部分响应：有控制的在某些码元的抽样时刻引入ISI(码间串扰)：提高频带利用率-理论极限值为2B/Hz，改善频谱特性-压缩传输频带，加快响应波形尾部的衰减-降低对定时的要求

采样定理：
低通
$$f_s \\ge 2f_H$$
带通
$$f_s = 2B\\left(1 + \\frac{k}{n}\\right)$$
n为fH除以B的整数部分，k为小数部分

贝叶斯公式
$$P(A_i|B) = \\frac{P(A_i B)}{P(B)} = \\frac{P(B|A_i)P(A_i)}{\\sum\\limits_{j=1}^{n} P(B|A_j)P(A_j)}$$
里面已有全概率公式，也就是分母变求和那块
概率链式法则
$$P(A_1,\\dots,A_n)=\\prod_{i=1}^n P(A_i|A_1,\\dots,A_{i-1})$$

MSK,OFDM最小频差TB分之1

ASK带宽2RB
FSK|f2-f1|+2RB
DPSK PSK带宽2fB
误码率
$$
\\begin{array}{|c|c|c|c|}
\\hline
& {\\textbf{相干解调精确值}} & \\textbf{相干解调近似值} & \\textbf{非相干解调}\\\\
\\hline
\\color{blue}\\mathbf{2ASK} & P_e = \\dfrac{1}{2}\\text{erfc}\\left(\\sqrt{\\dfrac{r}{4}}\\right) & \\approx \\dfrac{1}{\\sqrt{\\pi r}} e^{-r/4} & P_e \\approx \\dfrac{1}{2} e^{-r/4} \\\\
\\hline
\\color{magenta}\\mathbf{2FSK} & P_e = \\dfrac{1}{2}\\text{erfc}\\left(\\sqrt{\\dfrac{r}{2}}\\right) & \\approx \\dfrac{1}{\\sqrt{2\\pi r}} e^{-r/2} & P_e \\approx \\dfrac{1}{2} e^{-r/2} \\\\
\\hline
\\color{red}\\mathbf{2PSK} & P_e = \\dfrac{1}{2}\\text{erfc}\\left(\\sqrt{r}\\right) & \\approx \\dfrac{1}{2\\sqrt{\\pi r}} e^{-r} & \\\\
\\hline
\\color{red}\\mathbf{2DPSK} & P_e = \\text{erfc}\\left(\\sqrt{r}\\right) & \\approx \\dfrac{1}{\\sqrt{\\pi r}} e^{-r} & P_e = \\dfrac{1}{2} e^{-r} \\\\
\\hline
\\end{array}
$$

Pb为误比特率

奈奎斯特带宽二分之RB
奈奎斯特速率2B

匹配滤波器最大输出信噪比2E除以N0，E为输入信号脉冲的能量，N0为单边噪声PSD

高斯分布的概率密度函数（PDF）
$$f(x) = \\frac{1}{\\sqrt{2\\pi}\\,\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

判断系统是否无码间串扰
奈奎斯特最高速率是传码率的整数倍

判决门限
例子：因为发送“1”的可能性更大，接收机应该带有“偏见”，更倾向于将不确定的信号判决为“1”。通过降低判决门限（向负电压方向移动），扩大了判决为“1”的区域，从而利用先验概率信息来降低总的误判率。

输入噪声功率$N=双边谱高度\\times总带宽$
输入信号功率=峰值振幅的平方

MSK
$$
f_1 = f_c + \\frac{f_s}{4} \\\\
f_0 = f_c - \\frac{f_s}{4}
$$
其中fc为载波频率，fs为码元速率
频差为码元速率的一半
绘图码元波形：
码元对应周期数为码元频率除以码元速率

群同步
n位巴克码，容许错码数为m则漏同步概率
$$
P_m = 1 - \\sum_{i=0}^{m} C_n^i p^i (1-p)^{n-i}
$$
假同步
$$
P_m = 2^{-n} \\sum_{i=0}^{m} C_n^i
$$
$$(1+x)^{\\alpha} \\sim \\alpha x \\ (x \\to 0)$$`,hm=`---
id: course-overview
title: 课程说明
order: 1
---

# 数字图像处理知识点整理

资料来源：当前目录下第 1 章至第 7 章 PPT。整理范围覆盖绪论、图像处理基础、图像增强、图像变换、图像复原、图像分割、图像压缩。

说明：本文件已综合 PPT 文本内容与逐页渲染图片中的图示、曲线、流程、表格和前后对比结果。
`,ym=`---
id: 1-1
title: 1.1 数字图像
order: 1
---

# 1.1 数字图像

- 图像：具有视觉效果的画面都可称为图像，包括纸介质、底片、照片、电视、投影仪和计算机屏幕上的图像。
- 图像形成：光辐射能量照射物体后，经反射、透射或物体自身发光形成视觉信息；人眼、相机等感受装置可记录这些光能量。
- 按记录方式分类：
  - 模拟图像：通过光、电等物理量的连续强弱变化记录图像亮度信息。
  - 数字图像：用计算机可存储的数据记录图像亮度信息。
- 数字化：把空间连续、亮度连续的模拟图像离散化。
- 像素：数字图像的基本组成单位；二维黑白静止图像可看作像素矩阵，每个像素值表示该位置灰度值；彩色图像像素值通常由三基色分量组成。
- 空间分辨率：
  - 绝对分辨率：每个像素对应的实际物理尺寸。
  - 相对分辨率：图像数字化时对空间坐标离散化的精度。
  - 空间分辨率越高，细节越丰富，但数字化、存储、传输和处理代价也越大。
`,zm=`---
id: 1-2
title: 1.2 数字图像处理
order: 2
---

# 1.2 数字图像处理

- 数字图像处理：用数字计算机及相关数字技术，对数字图像施加某些运算和处理，使其达到预期目的。
- 数字处理相对模拟处理的优点：灵活性高、精度高、再现性好。
- 最大特点：图像信息量大，导致处理工作量巨大、处理时间长、存储空间占用大。
- 主要研究内容：
  - 图像增强：增强有用信息，削弱干扰和噪声，改善观察和分析效果；增强结果不一定与原图一致。
  - 图像几何处理：改变图像几何坐标、位置和形状，可用于几何变形与畸变校正。
  - 图像复原：根据退化模型尽量恢复退化、模糊图像，使复原图像尽可能接近原图。
  - 图像压缩编码：在尽量保持质量的前提下减少数据量，便于存储和传输。
  - 图像分割：从图像中提取目标、边界或区域，是图像分析和理解的第一步。
  - 图像数字化与重建：研究模拟图像到数字图像的离散化、数字图像到原始图像或三维图像的重建。
- 常见处理类型：
  - 点处理：输出像素仅由输入图像对应像素计算得到。
  - 几何处理：改变图像坐标、位置或形状。
  - 局域处理：输出像素由对应像素及其邻域像素加权计算。
  - 帧间处理：由多帧图像对应像素做代数运算，常用于序列图像降噪或运动检测。
  - 全局处理：每个输出像素由整幅图像的全部像素综合计算，常见于正交变换。
`,Sm=`---
id: 1-3
title: 1.3 相关学科
order: 3
---

# 1.3 相关学科

- 与数字信号处理：数字信号处理主要研究一维数字信号，图像处理研究二维数字信号；二者都涉及滤波、正交变换、编码等。
- 与计算机图形学：计算机图形学偏向由数学模型生成图形或图像，数字图像处理偏向对已有图像进行处理、分析和复原，可视为某种逆过程。
- 与计算机视觉：计算机视觉侧重对图像与场景的理解，数字图像处理侧重图像本身的滤波、增强、去噪、色彩、分割等；二者相互依赖。
`,wm=`---
id: 1-4
title: 1.4 应用与趋势
order: 4
---

# 1.4 应用与趋势

- 主要应用：遥感、医学图像、工业检测、实验图像、办公室自动化、OCR、军事侦察、公安识别、交通监控、车牌识别等。
- 发展趋势：
  - 由低分辨率向高分辨率发展。
  - 由二维图像向三维成像与重建发展。
  - 由静止图像向动态图像发展。
  - 由单态图像向多态图像发展。
  - 深度学习、大模型与传统图像处理技术逐渐融合，但传统图像处理仍是理解图像算法的基础。
`,km=`---
id: 2-1
title: 2.1 图像数字化
order: 1
---

# 2.1 图像数字化

- 数字图像通常由模拟图像经 A/D 转换器数字化得到。
- 常见图像传感器：CCD 阵列、CCD 线阵、CMOS。
- 图像传感器：
  - 主动传感器：带照射源，利用反射或透射射线能量成像。
  - 被动传感器：利用自然光或景物辐射成像。
- CCD 与 CMOS：
  - CCD：像素感光产生电荷，逐行转移到单一放大器转换；传统优势是低噪声、均匀性好、动态范围高，但功耗高、成本高、速度慢。
  - CMOS：每个像素带放大和转换电路，可独立读取；优势是低功耗、低成本、高速度、易集成，现代成像质量已大幅提升。
- 数字化包括采样和量化。
  - 采样：对空间坐标离散化。
  - 量化：对亮度或颜色值离散化。
- 采样定理：在确定图像空间频率最大值时，采样定理给出完全重建图像的最小采样间隔；采样间隔越小，分辨率越高，但开销越大。
`,Cm=`---
id: 2-2
title: 2.2 图像数据结构与颜色空间
order: 2
---

# 2.2 图像数据结构与颜色空间

- 灰度图像：只表示亮度信息，通常每像素 8 位，灰度范围 0-255，共 256 级；CT 等特殊应用可用 12 位或 16 位。
- 二值图像：只有 0 和 1 两个灰度级，理论上每像素只需 1 位；常用于文字识别、图纸识别等。
- 彩色图像：包含亮度和颜色信息，常用 RGB 模型；24 位真彩色中每个像素包含 R、G、B 三个 8 位分量，共 3 字节。
- RGB 彩色空间：红、绿、蓝三基色按不同比例相加生成颜色；每个分量通常为 0-255。
- CMY/CMYK 彩色空间：适用于不发光物体和印刷；青、洋红、黄为三减色，因难以合成纯黑，印刷常加入黑色 K。
- HSI 彩色空间：
  - H：色调，用角度表示颜色类别。
  - S：饱和度，表示颜色纯度。
  - I：强度，表示亮度。
  - HSI 更符合人类视觉描述，常用于彩色图像处理。
- RGB 到 HSI 的关键公式：
  - $$I=\\frac{R+G+B}{3}$$
  - $$S=1-\\frac{\\min(R,G,B)}{I}$$
  - $H$ 由角度 $\\theta$ 决定，若 $B\\le G$，则 $H=\\theta$；否则 $H=360^\\circ-\\theta$。
- 图像存储结构：数字图像常用二维数组或矩阵表示，行对应高度，列对应宽度，元素值为像素灰度或颜色值。
`,xm=`---
id: 2-3
title: 2.3 图像文件格式
order: 3
---

# 2.3 图像文件格式

- 常见格式：BMP、PNG、GIF、JPEG、TIFF、PSD、DICOM、MPEG。
- BMP：
  - Windows 推荐的位图格式，不压缩直接存储图像数据。
  - 常用 DIB 格式，与设备无关。
  - 文件通常包括位图文件头、位图信息头、调色板和位图数据。
  - 位图数据从下到上、从左到右存储；每行字节数通常需为 4 的倍数。
- JPEG：
  - 静止图像压缩标准，扩展名 \`.jpg\` 或 \`.jpeg\`。
  - 支持灰度图像和真彩色图像，压缩效率高。
  - 主要方法包括预测编码 DPCM、离散余弦变换 DCT 和熵编码。
  - JPEG 是有损压缩，恢复图像与原图有轻微误差，但常被认为视觉上难以察觉。
- OpenCV：常用图像处理库，可大幅简化图像读取、格式转换和算法实现。
`,Em=`---
id: 2-4
title: 2.4 图像质量评价
order: 4
---

# 2.4 图像质量评价

- 图像质量评价分为客观定量评价和主观评价。
- 客观评价：用指标描述图像质量，常见于压缩后图像与基准图比较。
- 均方误差 MSE：
  - $$\\mathrm{MSE}=\\frac{1}{MN}\\sum_x\\sum_y\\left[f_r(x,y)-f(x,y)\\right]^2$$
- 峰值信噪比 PSNR：
  - $$\\mathrm{PSNR}=10\\log_{10}\\frac{(f_{\\max}-f_{\\min})^2}{\\mathrm{MSE}}$$
- 客观评价优点：原则上不受人为因素干扰；缺点是可能不能完全反映人眼主观感受。
- 主观评价：由观察者或专业判读员按标准评分，主观性强但仍是重要评价方法。
`,Pm=`---
id: 3-1
title: 3.1 引言
order: 1
---

# 3.1 引言

- 图像增强目标：改善视觉效果，突出感兴趣信息，抑制噪声或干扰，为观察、识别和后续处理服务。
- 处理域：
  - 空域处理：直接在图像空间内对像素灰度值进行运算。
  - 频域处理：先把图像变换到频域，处理频谱后再反变换回空域。
`,Rm=`---
id: 3-2
title: 3.2 直接灰度变换
order: 2
---

# 3.2 直接灰度变换

- 对数变换：
  - 形式：$$s=c\\log(1+r)$$
  - 作用：扩展暗部灰度、压缩亮部灰度，适合增强暗区细节。
- 幂次变换：
  - 形式：$$s=cr^\\gamma$$
  - $\\gamma<1$ 时提升暗部，$\\gamma>1$ 时压低暗部、强调亮部。
- 分段线性变换：
  - 通过设定 $(r_1,s_1)$、$(r_2,s_2)$ 等控制点，对不同灰度区间采用不同线性映射。
  - 可用于灰度拉伸、对比度增强和指定灰度范围突出。
- 自动灰度拉伸：可根据图像灰度最大值、最小值自动设置映射区间。
`,Tm=`---
id: 3-3
title: 3.3 直方图修正
order: 3
---

# 3.3 直方图修正

- 灰度直方图：
  - 若灰度分为 $L$ 个级别，$h(r_k)=n_k$，其中 $r_k$ 是第 $k$ 级灰度，$n_k$ 是该灰度像素数量。
  - 直方图反映图像灰度分布，可用概率密度函数 PDF 描述。
- 直方图均衡化：
  - 计算各灰度级概率。
  - 计算累计分布函数 CDF。
  - 用 $s_k=\\operatorname{round}\\left[(L-1)\\,\\mathrm{CDF}(k)\\right]$ 将原灰度映射到新灰度。
  - 目标是让灰度分布更均匀，增强整体对比度。
- 直方图规定化：
  - 将图像直方图变换为指定目标分布。
  - 与均衡化相比，规定化更可控，适合需要特定视觉风格或灰度分布的场景。
`,Nm=`---
id: 3-4
title: 3.4 图像平滑
order: 4
---

# 3.4 图像平滑

- 平滑主要用于减少噪声，但会不可避免损失细节。
- 均值滤波：
  - 用邻域像素平均值替代中心像素。
  - 可用系数全为 $\\frac{1}{mn}$ 的卷积核实现。
  - 对随机噪声有一定效果，但容易模糊边缘，对椒盐噪声效果有限。
- 高斯滤波：
  - 邻域中心权重大，远离中心权重小。
  - 相比均值滤波更自然，能兼顾平滑与细节保留。
- 核大小影响：
  - 小模板如 $3\\times3$ 更适合保留边缘。
  - 大模板如 $7\\times7$ 更适合消除大面积噪声，但模糊更明显。
- 中值滤波：
  - 将邻域像素排序，用中值替代中心像素。
  - 属于非线性滤波。
  - 对椒盐噪声尤其有效，通常比均值或高斯滤波更能保留边缘。
`,jm=`---
id: 3-5
title: 3.5 图像锐化
order: 5
---

# 3.5 图像锐化

- 锐化目标：增强边缘和细节，使灰度变化更陡峭。
- 一阶差分：$\\frac{df}{dx}=f(x+1)-f(x)$。
- 二阶差分：$\\frac{d^2f}{dx^2}=f(x+1)+f(x-1)-2f(x)$。
- 拉普拉斯算子：
  - $$\\nabla^2 f=\\frac{\\partial^2 f}{\\partial x^2}+\\frac{\\partial^2 f}{\\partial y^2}$$
  - 离散形式：$$\\nabla^2 f=f(x+1,y)+f(x-1,y)+f(x,y+1)+f(x,y-1)-4f(x,y)$$
  - 可用四邻域或八邻域模板实现。
- 非锐化掩蔽：
  - 模糊原图像。
  - 原图减去模糊图像，得到非锐化模板。
  - 将模板加回原图。
- 高提升滤波：将非锐化模板按大于 1 的系数加到原图，可实现更强锐化。
- 深度学习视角：平滑和锐化中的卷积核是人工设计的滤波模板，CNN 可通过数据训练自动学习卷积参数。
`,Dm=`---
id: 4-1
title: 4.1 傅里叶变换
order: 1
---

# 4.1 傅里叶变换

- 傅里叶变换将信号或图像从空域/时域表示转换为频域表示。
- 一维 DFT：
  - $$F(u)=\\sum_{x=0}^{N-1}f(x)e^{-j2\\pi ux/N}$$
  - $$f(x)=\\frac{1}{N}\\sum_{u=0}^{N-1}F(u)e^{j2\\pi ux/N}$$
- 二维 DFT：
  - 对图像行做一次 DFT，再对列做一次 DFT，即可得到图像 DFT。
  - $F(u,v)$ 是复数，可表示为实部、虚部，也可表示为幅度和相位。
- 频率意义：
  - 低频：图像整体亮度、平滑区域和主要轮廓。
  - 高频：边缘、细节、纹理和噪声。
- 幅度与相位：
  - 幅度反映频率成分强弱。
  - 相位对图像结构位置非常重要。
- 频谱中心化：
  - 乘以 $(-1)^{x+y}$ 可将傅里叶频谱低频部分平移到中心，便于观察和滤波。
`,Om=`---
id: 4-2
title: 4.2 频域滤波
order: 2
---

# 4.2 频域滤波

- 图像平滑：通常抑制高频、保留低频。
- 图像锐化或边缘提取：通常强调高频、抑制低频。
- 理想低通滤波器：
  - 以频域原点为圆心，半径 $D_0$ 内频率无衰减通过，半径外频率全部截断。
  - 缺点：过渡过于突兀，可能产生振铃等不自然效果。
- 布特沃斯低通滤波器：
  - $$H(u,v)=\\frac{1}{1+\\left[\\frac{D(u,v)}{D_0}\\right]^{2n}}$$
  - 过渡更自然，阶数影响过渡陡峭程度。
- 高通滤波器：保留高频，用于边缘提取。
- 高频强调滤波器：可用高通结果乘系数再加常量，增强细节同时保留部分低频信息。
`,Mm=`---
id: 4-3
title: 4.3 离散余弦变换 DCT
order: 3
---

# 4.3 离散余弦变换 DCT

- DCT 可理解为对经过镜像扩展、对称化的数据进行类似傅里叶变换，使结果主要为实数。
- DCT 能将图像能量集中在少数低频系数上，是 JPEG 等压缩方法的重要基础。
- 与 DFT 相比，DCT 避免复数表达，更适合图像压缩编码。
`,Lm=`---
id: 4-4
title: 4.4 图像金字塔与小波变换
order: 4
---

# 4.4 图像金字塔与小波变换

- 图像金字塔：从高分辨率到低分辨率的多尺度图像表示。
- 高斯金字塔：
  - 下采样前先进行高斯滤波，降低高频，减少混叠。
  - 常用于快速定位、模板匹配和 coarse-to-fine 处理。
- 直接下采样的问题：
  - 会降低采样率。
  - 若原信号带宽较大，会产生混叠现象。
- 拉普拉斯金字塔：
  - 表示相邻尺度之间的差异。
  - 多数系数接近 0，可用于压缩和渐进传输。
- 渐进传输：先传输低分辨率版本，再逐步补充细节。
- 小波变换：
  - 通过具有局部性的小波基分析信号在不同位置和尺度上的特征。
  - 比傅里叶基更强调时频/空频局部信息。
- Haar 小波：
  - 父小波对应低频/平均信息。
  - 母小波对应高频/差分细节。
  - 例：序列 $[8,4,1,3]$，两两求和除 2 得低频 $[6,2]$，两两求差除 2 得高频 $[2,-1]$；继续对低频分解可得到更低尺度近似和细节。
- 二维小波分解：先按行、再按列，可得到低频-低频、低频-高频、高频-低频、高频-高频四类子带。
- 小波图像融合：
  - 低频部分可取均值以保持亮度和整体结构。
  - 高频部分可按绝对值取最大以保留更清晰细节。
`,Fm=`---
id: 5-1
title: 5.1 基本概念
order: 1
---

# 5.1 基本概念

- 图像退化原因：
  - 传感器噪声。
  - 摄像机未聚焦。
  - 物体与摄像设备相对运动。
  - 随机大气湍流。
  - 光学系统像差。
  - 成像光源或射线散射。
  - 胶片非线性和几何畸变。
- 图像复原：基于对退化类型、机制和过程的了解，建立数学模型并用反过程补偿失真。
- 复原与增强的区别：
  - 复原偏客观，目标是接近原图。
  - 增强偏主观，目标是得到用户更喜欢或更易观察的图像。
- 盲复原：退化过程未知时进行的复原。
`,Am=`---
id: 5-2
title: 5.2 图像退化模型
order: 2
---

# 5.2 图像退化模型

- 空域退化模型：
  - $$g(x,y)=h(x,y)*f(x,y)+\\eta(x,y)$$
  - $h(x,y)$ 为退化函数，$\\eta(x,y)$ 为噪声。
- 频域模型：
  - $$G(u,v)=H(u,v)F(u,v)+N(u,v)$$
- 若仅有噪声：
  - $$g(x,y)=f(x,y)+\\eta(x,y)$$
- 复原难点：退化函数和噪声往往未知；逆过程会放大丢失信息和噪声。
`,Bm=`---
id: 5-3
title: 5.3 噪声模型与滤波
order: 3
---

# 5.3 噪声模型与滤波

- 高斯噪声：
  - 由均值 $\\mu$ 和标准差 $\\sigma$ 描述。
  - 大量自然噪声和传感器噪声可近似为高斯分布。
- 瑞利噪声：适合描述近似偏移的直方图。
- 伽马噪声：由参数 $a$、$b$ 描述，$b$ 为正整数。
- 指数噪声：伽马噪声在特定参数下的特殊情况。
- 均匀噪声：在 $[a,b]$ 范围内概率相同。
- 椒盐噪声：像素随机变为极暗或极亮，常见为 0 和 255。
- 周期噪声：
  - 来源于电力或机电干扰。
  - 唯一一种空间依赖型噪声。
  - 可通过频域滤波显著减少。
- 噪声估计：
  - 理想方式是用同一传感器拍摄纯色对象，估计噪声概率分布。
  - 可用均值 $\\mu=\\sum_i z_i p(z_i)$ 和方差 $\\sigma^2=\\sum_i (z_i-\\mu)^2p(z_i)$ 描述。
`,Im=`---
id: 5-4
title: 5.4 空域复原滤波器
order: 4
---

# 5.4 空域复原滤波器

- 算术均值滤波：
  - $$\\hat f(x,y)=\\frac{1}{mn}\\sum_{(s,t)\\in S_{xy}}g(s,t)$$
  - 实现简单，适合一定随机噪声，但会模糊细节。
- 几何均值滤波：
  - 对邻域像素做几何平均。
  - 平滑时通常比算术均值保留更多细节。
- 谐波均值滤波：
  - $$\\hat f(x,y)=\\frac{mn}{\\sum_{(s,t)\\in S_{xy}}\\frac{1}{g(s,t)}}$$
  - 可处理高斯噪声和盐噪声，但不擅长胡椒噪声。
- 逆谐波均值滤波：
  - $$\\hat f(x,y)=\\frac{\\sum_{(s,t)\\in S_{xy}}g(s,t)^{Q+1}}{\\sum_{(s,t)\\in S_{xy}}g(s,t)^Q}$$
  - $Q>0$ 消除胡椒噪声。
  - $Q<0$ 消除盐噪声。
  - $Q=0$ 退化为算术均值滤波。
  - $Q=-1$ 退化为谐波均值滤波。
`,Hm=`---
id: 5-5
title: 5.5 退化函数估计
order: 5
---

# 5.5 退化函数估计

- 图像观察估计法：
  - 选择包含简单结构的小区域。
  - 人工恢复局部无退化图像。
  - 用 $H_s(u,v)=\\frac{G_s(u,v)}{F_s(u,v)}$ 估计退化函数。
- 试验估计法：
  - 用类似成像设备拍摄小亮点。
  - 小亮点近似冲激函数，其傅里叶变换近似常数，可由成像结果估计 $H(u,v)$。
- 数学建模：
  - 根据退化物理机制建立模型。
  - 大气湍流模型例：$H(u,v)=\\exp\\left[-k(u^2+v^2)^{5/6}\\right]$。
  - 均匀线性运动模糊可由曝光时间内平面运动积分建模。
`,Um=`---
id: 5-6
title: 5.6 频域复原
order: 6
---

# 5.6 频域复原

- 逆滤波：
  - 无噪声时：$F(u,v)=\\frac{G(u,v)}{H(u,v)}$。
  - 有噪声时：$\\frac{G}{H}=F+\\frac{N}{H}$，若 $H(u,v)$ 很小，噪声会被严重放大。
  - 实际常限定半径，只在部分频率范围内处理。
- 维纳滤波：
  - 目标是使估计图像与原图之间的均方误差最小。
  - 滤波器形式可写为：$W(u,v)=\\frac{H^*(u,v)}{|H(u,v)|^2+S_N(u,v)/S_F(u,v)}$。
  - 工程中常将噪声功率谱与图像功率谱比值近似为常数 $K$。
  - 一般比单纯逆滤波更抗噪。
`,Vm=`---
id: 5-7
title: 5.7 暗通道先验去雾
order: 7
---

# 5.7 暗通道先验去雾

- 有雾成像模型：
  - $$I(x)=J(x)t(x)+A[1-t(x)]$$
  - $I(x)$：有雾图像。
  - $J(x)$：场景辐射亮度，即希望恢复的清晰图像。
  - $t(x)$：介质透射率。
  - $A$：全局大气光。
- 暗通道先验：在清晰无雾图像的局部图像块中，至少有一个颜色通道值非常低，甚至接近 0。
  - $$J_{\\mathrm{dark}}(x)=\\min_{c\\in\\{R,G,B\\}}\\left(\\min_{y\\in\\Omega(x)}J^c(y)\\right)$$
- 大气光估计：
  - 在暗通道中取最亮的前 0.1% 像素。
  - 找到这些像素在原图中对应点，取其像素平均或高亮值作为 $A$。
- 透射率估计：
  - $$\\tilde t(x)=1-\\omega\\min_c\\left(\\min_{y\\in\\Omega(x)}\\frac{I^c(y)}{A^c}\\right)$$
  - $\\omega$ 常取 0.95，用于保留少量雾感和深度线索。
- 透射率细化：可用 matting 或引导滤波修正粗糙透射率。
`,Qm=`---
id: 5-8
title: 5.8 几何校正
order: 8
---

# 5.8 几何校正

- 几何畸变：成像系统非线性、拍摄角度等导致图像几何失真。
- 透视畸变：如建筑物近大远小、平行线不再平行。
- 径向畸变：
  - 由透镜径向曲率不一致引起，表现为桶形畸变或枕形畸变。
  - 畸变量可用半径多项式建模。
  - 常用标定板拍摄、拟合畸变校正系数后校正。
- 切向畸变：
  - 由镜头与传感器平面不平行引起。
  - 影响通常较小。
- 常用工具：OpenCV 中的张正友标定法可用于相机标定和畸变校正。
`,Wm=`---
id: 6-1
title: 6.1 图像分割概念
order: 1
---

# 6.1 图像分割概念

- 图像分割：按图像独有特征把图像划分为不同区域，提取关注目标。
- 作用：图像处理关键环节，是目标描述、特征检测、识别、分析和理解的基础。
- 常见依据：灰度、轮廓、颜色、纹理等。
`,qm=`---
id: 6-2
title: 6.2 边缘检测
order: 2
---

# 6.2 边缘检测

- 边缘：图像中灰度、颜色、纹理等属性突然变化的位置，承载大量结构信息。
- 常见理想边缘模型：台阶边缘、斜坡边缘、屋顶边缘。
- 边缘的微分性质：
  - 一阶导数在边缘处出现峰值。
  - 二阶导数在边缘处出现过零点。
- 梯度算子：基于一阶微分，用差分近似求导。
- Roberts 算子：
  - 使用 $2\\times2$ 邻域。
  - 沿对角方向计算差分，对倾斜边缘敏感。
- Sobel 算子：
  - 使用 $3\\times3$ 模板。
  - 对水平、竖直方向边缘敏感。
  - 中心邻域权重更大，具有一定平滑噪声作用。
- Prewitt 算子：
  - 与 Sobel 类似，但没有对中心邻域赋更高权重，实现更简单。
- 梯度算子对噪声敏感，常需先平滑。
- 拉普拉斯算子：
  - 二阶微分算子，通过过零点检测边缘。
  - 对噪声非常敏感，通常需要先平滑。
- LoG 算子：
  - 先高斯平滑，再拉普拉斯检测。
  - 用于克服拉普拉斯对噪声过敏的问题。
- Canny 算子：
  - 优良边缘检测应满足：检测性能好、定位性能好、单边缘唯一响应。
  - 步骤：
    1. 高斯滤波降噪。
    2. 用 Sobel 或 Prewitt 计算梯度幅值和方向。
    3. 非极大值抑制，使边缘变细。
    4. 双阈值检测区分强边缘、弱边缘和非边缘。
    5. 通过边缘连接完成最终检测。
`,Km=`---
id: 6-3
title: 6.3 Hough 变换
order: 3
---

# 6.3 Hough 变换

- 目的：从大量边缘点中快速检测直线、圆等参数化形状。
- 直线极坐标表达：
  - $\\rho=x\\cos\\theta+y\\sin\\theta$
- 思路：
  - 图像空间中的一个点对应参数空间中的一条曲线。
  - 多个共线点对应的曲线会在参数空间相交。
  - 交点位置的 $(\\rho,\\theta)$ 即为经过这些点的直线参数。
- 累加器算法：
  - 将 $\\rho$-$\\theta$ 参数空间离散化。
  - 对每个边缘点遍历 $\\theta$，计算 $\\rho$ 并在累加器中投票。
  - 累加值超过阈值的参数单元对应图像中的直线。
- Hough 圆检测可自学，核心仍是把图像空间点投票到参数空间。
`,Gm=`---
id: 6-4
title: 6.4 阈值分割
order: 4
---

# 6.4 阈值分割

- 阈值分割：通过设置阈值 $T$，把图像分成目标和背景。
- 多阈值分割：当图像中有多个亮度不同的目标，可设多个阈值，把图像分为多个灰度区间。
- 直方图双峰法：
  - 适用于目标与背景灰度差大、直方图出现两个明显峰且中间有低谷的情况。
  - 取两个峰之间低谷灰度作为阈值。
- 迭代阈值法：
  - 选初始阈值 $T$。
  - 用 $T$ 分割图像，分别计算两类灰度均值 $m_1$、$m_2$。
  - 更新 $$T=\\frac{m_1+m_2}{2}$$
  - 重复直到阈值变化小于设定值。
- Otsu 大津法：
  - 思想：选择能使类间方差最大的阈值。
  - 由图像直方图即可执行。
  - 对每个候选阈值 $k$，计算两类概率 $P_1(k)$、$P_2(k)$，两类均值 $m_1(k)$、$m_2(k)$ 和全局均值 $m_G$。
  - 类间方差：$\\sigma_B^2=P_1(k)P_2(k)\\left[m_1(k)-m_2(k)\\right]^2$。
  - 取使类间方差最大的 $k^*$ 作为阈值。
- 动态门限法：
  - 将图像分为多个子图像。
  - 对每个子图像分别设定阈值。
  - 适用于光照不均、全局阈值效果差的情况。
`,Ym=`---
id: 6-5
title: 6.5 区域分割
order: 5
---

# 6.5 区域分割

- 区域生长：
  - 从种子像素出发。
  - 按灰度、颜色、梯度等相似性准则，把邻近像素并入区域。
  - 新加入像素继续作为种子，直到无满足条件像素。
- 区域生长关键问题：
  - 选择能代表目标区域的种子像素。
  - 设定生长准则。
  - 设定停止条件。
- 种子选择例：
  - 军用红外目标检测中，可选最亮像素作为目标种子。
  - 可先聚类，再选接近聚类中心的像素作为种子。
- 图割：
  - 常用于交互式前景/背景分割。
  - 将每个像素看成图节点，相邻像素间连接边。
  - 边界项描述相邻像素的连接强度，差异越大、距离越远，连接值越小。
  - 增加前景源点和背景汇点，按用户标记设置较大连接强度。
  - 找代价最小的切割，把像素划分为前景或背景。
- 最大流最小割：
  - 最小割问题可转化为最大流问题。
  - 常见求解思想是增广路径。
  - 相关算法包括 Ford-Fulkerson、Dinic、EK、Boykov-Kolmogorov 等。
`,Xm=`---
id: 6-6
title: 6.6 形态学分割
order: 6
---

# 6.6 形态学分割

- 形态学主要处理二值图像，通过结构元素改变目标形态。
- 腐蚀：
  - 邻域全为前景时中心才保留前景。
  - 效果：收缩目标、剔除边缘、滤除小物体、断开细窄连接。
- 膨胀：
  - 邻域中只要有前景，中心就设为前景。
  - 效果：扩大目标、填补小孔洞、连通断裂线条。
- 开运算：
  - 先腐蚀后膨胀。
  - 作用：去除小噪点、断开细小粘连，同时尽量保持目标整体形状。
- 闭运算：
  - 先膨胀后腐蚀。
  - 作用：填补小孔洞、弥合小裂缝、连接邻近断裂区域。
- 边界检测：可通过“膨胀图像减原图”或“原图减腐蚀图像”等方式提取边界。
`,Jm=`---
id: 6-7
title: 6.7 FCN 全卷积神经网络
order: 7
---

# 6.7 FCN 全卷积神经网络

- 语义分割目标：输出每个像素的类别。
- FCN 思想：把分类网络尾部改造成对每个像素输出类别的结构。
- 常见基础网络与方法：AlexNet、VGGNet、FCN、空洞卷积、DeepLab、CRF、ResNet 等。
- 分类网络预训练参数可作为语义分割模型的特征基础。
`,Zm=`---
id: 7-1
title: 7.1 压缩背景
order: 1
---

# 7.1 压缩背景

- 未压缩图像和视频数据量巨大：
  - 一张 1080P 彩色图像约 $\\frac{1920\\times1080\\times3}{1024^2}=5.93\\,\\mathrm{MB}$。
  - 2 小时、25 帧每秒的 1080P 彩色视频未压缩可达约 1 TB。
- 有损压缩可更高压缩率，但会丢失信息；无损压缩不能突破信息熵下界。
- 可压缩原因来自冗余：
  - 空域冗余：相邻像素相关性高，可相互预测。
  - 时域冗余：视频相邻帧差异小。
  - 频域冗余：变换后大量信息可由较少频域系数表示。
  - 信息熵冗余：不同符号概率不均匀，等长编码会浪费空间。
`,bm=`---
id: 7-2
title: 7.2 霍夫曼编码与信息熵
order: 2
---

# 7.2 霍夫曼编码与信息熵

- 霍夫曼编码：一种变长编码，给高概率符号分配短码，给低概率符号分配长码。
- 编码必须满足唯一可译性，常用前缀码保证解码不歧义。
- 霍夫曼编码步骤：
  1. 按符号出现概率排序。
  2. 取两个最小概率相加，合成联合概率。
  3. 将联合概率放回概率集合。
  4. 重复直到只剩一个概率为 1 的根节点。
  5. 根据编码树分配码字。
- 平均码长：$L=\\sum_i p_i l_i$，其中 $l_i$ 为符号码长。
- 香农信息量：
  - $$I(x)=-\\log_2 p(x)=\\log_2\\frac{1}{p(x)}$$
  - 事件概率越小，信息量越大。
  - 必然事件信息量为 0。
  - 独立事件共同发生的信息量可相加。
- 信息熵：
  - $$H=-\\sum_x p(x)\\log_2p(x)$$
  - 信息熵是信源无损编码平均码长的理论下界。
- 霍夫曼编码通常能接近信息熵下界，但不能突破无损压缩极限。
`,e_=`---
id: 7-3
title: 7.3 像素预测
order: 3
---

# 7.3 像素预测

- 图像中大多数相邻像素灰度差值较小，直接存灰度值不如存预测残差。
- 一维预测例：
  - 原像素序列：$120,121,120,122,123$
  - 可存为：$120,1,-1,2,1$
- 二维预测：
  - 可用左、上、左上像素加权预测当前像素。
  - 经典公式：$$\\text{预测值}=\\text{左}+\\text{上}-\\text{左上}$$
- 像素预测常与霍夫曼编码结合：
  - 预测残差分布更集中，熵更低，更适合变长编码。
`,n_=`---
id: 7-4
title: 7.4 行程编码
order: 4
---

# 7.4 行程编码

- 行程编码 RLE：把连续重复的符号记录为“符号 + 重复次数”。
- 适用场景：长串重复符号或大片相同像素区域。
- 例：\`abbbbbbbbbbbbb\` 可表示为 \`a1b13\`。
- 局限：对于 \`abababab\` 这类频繁变化数据，行程编码可能变长。
- 优化：可维护状态表或按扫描顺序优化，使重复段更长。
- 图像文件可结合霍夫曼树、符号表、图像宽高、游程状态表和编码数据进行存储。

---
`,t_=`---
id: overview
title: 视觉图示补充 概览
order: 1
---

# 视觉图示补充

说明：本文件是在把 7 个 PPT 全部渲染为 PNG 后，按“看幻灯片图片”的方式重新阅读得到的补充。它主要补足单纯抽取文字时容易遗漏的图示、流程、对比图、曲线、表格和视觉案例。
`,r_=`---
id: reading-guide
title: 一、阅读方式
order: 2
---

# 一、阅读方式

- 已将全部 PPT 逐页渲染为图片后阅读，重点核对了图示、流程、表格、曲线和前后对比图。
- 中间渲染图仅用于阅读复核，最终内容已合并进本知识点文件。
`,l_=`---
id: visual-ch1
title: 二、第 1 章 绪论：视觉补充
order: 3
---

# 二、第 1 章 绪论：视觉补充

1. 数字图像课程的开篇大量使用“真实图像案例”来说明图像的范围：风景、新闻、战争场面、医学、遥感、工业检测、办公自动化、公安识别等。
2. 模拟图像与数字图像的区别在视觉上用“连续图像到像素网格”的示意表达：连续亮度分布经数字化后变成规则网格中的像素值。
3. 空间分辨率页通过不同尺寸采样网格强调：同一对象用更密集的像素阵列采样，细节更丰富，但代价更大。
4. 图像增强、几何处理、复原、压缩、分割等研究内容都配了前后对比图：
   - 增强：月牙图像灰度拉伸后更清楚。
   - 几何处理：畸变图像经校正后形状恢复。
   - 复原：运动模糊图像恢复清晰。
   - 压缩：JPEG2000 压缩图视觉差异不明显。
   - 分割：Canny 边缘图、语义分割彩图显示“从像素到目标区域”的转化。
5. 与相关学科关系页用表格表达：
   - 数字信号处理是一维信号，数字图像处理是二维信号。
   - 计算机图形学偏生成，图像处理偏对已有图像分析处理。
   - 计算机视觉偏理解场景，图像处理偏滤波、增强、去噪、色彩等底层处理。
6. 发展趋势页用实际图像示例强调：
   - 分辨率提升带来更多细节。
   - 2D 到 3D 通过 CT/MR 等断层图像体现。
   - 单态到多态通过同一场景的可见光、红外等多模态图像体现。
   - SAM、文生图、文生视频作为深度学习/大模型时代的视觉例子。
`,i_=`---
id: visual-ch2
title: 三、第 2 章 基础知识：视觉补充
order: 4
---

# 三、第 2 章 基础知识：视觉补充

1. “人怎么看到东西”页用眼球和脑的图说明视觉成像链路：光进入眼睛，经视神经传递到大脑形成视觉感知。
2. CCD/CMOS 页有两类视觉信息：
   - 流程图：模拟图像经图像传感器、放大/采样/量化等环节形成数字图像。
   - 对比表：CCD 与 CMOS 在工作原理、成像质量、功耗、成本、集成、速度和主流应用上的差异。
3. 采样与量化页用小鸭或物体轮廓图展示：
   - 采样间隔越小，轮廓越接近原始连续形状。
   - 采样间隔变大，像素块更明显，空间细节丢失。
   - 灰阶越少，明暗层次越粗糙，图像出现明显分层。
4. 灰度模式、二值模式、彩色模式均有 Lena 或剪影图辅助：
   - 灰度图是单通道亮度。
   - 二值图只保留黑白前景/背景关系。
   - 彩色图由 RGB 三通道叠加形成。
5. RGB/CMY/HSI 页的图示重点：
   - RGB 适合发光设备，是加色混合。
   - CMY/CMYK 适合印刷，是减色混合。
   - HSI 色调用角度表示，饱和度体现颜色纯度，强度体现亮度。
6. 图像矩阵页用坐标格和矩阵形式说明：图像的行列索引与像素矩阵下标一一对应，便于编程寻址。
7. BMP/JPEG 页的视觉重点：
   - BMP 文件结构被拆成文件头、信息头、调色板、位图数据。
   - JPEG 页强调压缩编码流程与 DCT、熵编码，旁边用“代码量巨大 vs OpenCV 两行”的视觉对比说明库的重要性。
8. 图像质量评价页的视觉重点：
   - MSE/PSNR 公式旁边配有“单个像素误差”提示，强调评价是按像素差异累计。
   - ISO12233 与 IEEE 分辨率测试卡用于客观测量。
   - 主观评价页用大量样例图和评分表说明主观评价依赖观察者和标准。
`,o_=`---
id: visual-ch3
title: 四、第 3 章 图像增强：视觉补充
order: 5
---

# 四、第 3 章 图像增强：视觉补充

1. 引言部分通过噪声图、素描图、朋友圈修图场景说明增强的目的不是“恢复真实”，而是让目标更容易看、更适合后续处理。
2. 空域与频域处理流程图显示：
   - 空域：$f(x,y)\\rightarrow\\text{图像处理}\\rightarrow g(x,y)$。
   - 频域：$f(x,y)$ 先正变换到 $F(u,v)$，处理为 $G(u,v)$，再反变换回 $g(x,y)$。
3. 直接灰度变换的曲线是重点：
   - 对数变换曲线在低灰度区斜率大，拉开暗部。
   - 幂次变换用不同 $\\gamma$ 曲线展示暗部拉伸或压缩。
   - 分段线性变换用 $(r_1,s_1)$、$(r_2,s_2)$ 控制局部对比度。
4. 直方图均衡化页通过 3-bit、8 灰级、4096 像素的表格演示：
   - 先统计各灰度级像素数与概率。
   - 再累加得到 CDF。
   - 最后映射到新灰度级。
5. 直方图规定化页用 PDF/CDF 的图示强调：不是简单拉平直方图，而是把原图灰度分布匹配到指定分布。
6. 平滑滤波视觉重点：
   - 均值滤波例子中，异常值 77 被邻域平均稀释，但图像整体会变糊。
   - 高斯核 $\\begin{bmatrix}1&2&1\\\\2&4&2\\\\1&2&1\\end{bmatrix}$ 强调中心权重大，滤波更自然。
   - 模板越大，去噪越强，细节损失越明显。
   - 15x15 均值模板用于哈勃图像，再阈值处理提取亮目标，体现平滑可作为分割预处理。
7. 中值滤波视觉重点：
   - 将邻域灰度排序后取中值，异常椒盐值会被排到两端。
   - 高斯滤波与中值滤波对椒盐噪声的对比图显示：中值滤波更适合去除孤立黑白噪点。
8. 锐化视觉重点：
   - 微分曲线显示边缘对应灰度突变，锐化就是让边缘更陡。
   - 拉普拉斯模板有四邻域和八邻域版本。
   - 使用 \`double\` 类型计算拉普拉斯结果，再合成回 \`uint8\` 图像，避免负值和溢出问题。
   - 非锐化掩蔽页用 $(a)$ 原图 $\\rightarrow$ $(b)$ 高斯模糊 $\\rightarrow$ $(c)$ 模板 $\\rightarrow$ $(d)$ 非锐化 $\\rightarrow$ $(e)$ 高提升 展示完整流程。
`,a_=`---
id: visual-ch4
title: 五、第 4 章 图像变换：视觉补充
order: 6
---

# 五、第 4 章 图像变换：视觉补充

1. 傅里叶变换部分不仅有公式，还用频谱图强调：
   - 未中心化时低频在角落附近。
   - 乘 $(-1)^{x+y}$ 或频谱平移后低频移动到中心。
2. 幅度与相位对比页显示：
   - 只保留幅度或只保留相位得到的反变换图效果差别很大。
   - 相位对图像结构位置非常关键。
3. 频域低通滤波图：
   - 理想低通用圆形通带直接截断高频，半径 $D_0$ 越小图像越模糊。
   - 过渡突兀会导致不自然效果。
   - 布特沃斯低通的灰度过渡更平滑。
4. 高频处理图：
   - 高通滤波提取边缘。
   - 高频强调滤波结合直方图均衡化，可增强细节和整体对比。
5. 离散余弦变换视觉重点：
   - 通过平移和镜像把数据构造成关于 y 轴对称的形式，使变换结果更适合用实数余弦表示。
   - 视觉上说明 DCT 与图像压缩的能量集中有关。
6. 图像金字塔视觉重点：
   - 多级分辨率图像从高清到低清形成金字塔。
   - coarse-to-fine：先在低分辨率快速定位，再在高分辨率确认。
   - 直接下采样会产生混叠，必须先低通/高斯滤波。
7. 拉普拉斯金字塔视觉重点：
   - 差值层大量像素接近 0。
   - 可用于压缩和渐进传输。
8. 小波变换视觉重点：
   - 小波基是局部的“观察者”，既关心频率也关心位置。
   - Haar 小波用成对平均和成对差分分离低频、高频。
   - 二维小波分解产生 LL、HL、LH、HH 子带，分别对应低频和不同方向的细节。
9. 图像融合页视觉重点：
   - 多张同场景不同清晰区域的图可通过小波融合变清晰。
   - 低频取均值保持亮度一致。
   - 高频取绝对值后最大值保留最清晰细节。
   - 若低频也取最大值，会导致亮度怪异。
`,s_=`---
id: visual-ch5
title: 六、第 5 章 图像复原：视觉补充
order: 7
---

# 六、第 5 章 图像复原：视觉补充

1. 退化示意图以“原图、运动模糊、运动模糊+噪声、复原图”展示：复原不是简单变好看，而是逆向补偿退化。
2. 图像复原和增强对比页的视觉重点：增强可以让图更符合主观喜好，复原要求更接近真实原图。
3. 噪声分布页用曲线图展示高斯、瑞利、伽马、指数、均匀、椒盐噪声：
   - 高斯噪声呈钟形曲线，由均值和方差控制。
   - 均匀噪声在区间内概率相等。
   - 椒盐噪声集中在极暗和极亮点。
   - 周期噪声在图像上呈条纹，在频谱中表现为共轭脉冲。
4. 噪声估计页通过“传感器拍纯色对象”的图示说明：应尽量从空白/均匀区域估计噪声统计特性。
5. 均值、几何均值、谐波均值、逆谐波均值滤波页的视觉重点：
   - 不同滤波器处理同一噪声图的效果不同。
   - 逆谐波滤波器若 $Q$ 符号选错，会让椒盐噪声处理更糟。
6. 退化函数估计页用三种流程图表达：
   - 图像观察估计法：选简单结构局部，构造近似无退化图。
   - 试验估计法：拍摄小亮点，近似冲激响应。
   - 数学建模：根据大气湍流、运动模糊等物理过程建模。
7. 逆滤波与维纳滤波视觉对比：
   - 逆滤波半径越大，恢复更多频率但噪声也更容易混入。
   - 维纳滤波图像更接近原始图，说明它比直接逆滤波更稳健。
8. 暗通道先验去雾视觉重点：
   - 有雾图像模型由真实场景衰减项和大气光项组成。
   - 清晰图像局部块至少有一个通道很暗，暗通道接近 0。
   - 暗通道最亮的前 0.1% 像素更可能对应大气光区域，而不是普通白色物体。
   - 粗透射率会块状，需要 matting 或引导滤波细化。
   - 引导滤波前后对比图显示边缘更自然、块状伪影减少。
9. 几何校正视觉重点：
   - 透视畸变表现为平行线不再平行、近大远小。
   - 径向畸变表现为桶形或枕形。
   - 标定板与同心圆示意图说明可用已知几何关系拟合畸变校正系数。
   - 切向畸变由镜头与传感器不平行导致，通常影响较小。
`,u_=`---
id: visual-ch6
title: 七、第 6 章 图像分割：视觉补充
order: 8
---

# 七、第 6 章 图像分割：视觉补充

1. 分割引言页用棋盘例子强调：人能看懂不等于算法能识别，算法常需先分割棋盘、交叉点和棋子。
2. 边缘模型页用台阶、斜坡、屋顶边缘说明不同边缘剖面。
3. 微分性质图：
   - 实际边缘常因噪声和模糊变成斜坡。
   - 一阶导数峰值表示灰度变化最大处。
   - 二阶导数过零点对应边缘位置。
4. Roberts/Sobel/Prewitt 对比图：
   - Roberts 使用 2x2 对角差分，对倾斜边缘敏感，但棋盘线提取不完整。
   - Sobel 使用 3x3 模板，对水平/垂直边缘更敏感，边缘更完整但噪声也可能更多。
   - 先高斯平滑再 Sobel 可减少噪声，但也会丢失部分边缘。
5. 拉普拉斯与 LoG：
   - 拉普拉斯过零点可定位边缘，但噪声点很多。
   - LoG 通过先高斯滤波再拉普拉斯，减弱噪声敏感性。
6. Canny 流程视觉重点：
   - 梯度图、非极大值抑制图、高阈值图、低阈值图、最终 Canny 图逐步展示“边缘变细并连接”的过程。
   - 双阈值中，高阈值保留可靠边缘，低阈值辅助连接潜在边缘。
7. Hough 变换视觉重点：
   - 图像空间边缘点很多，两两连线暴力搜索不可行。
   - 每个边缘点在 $\\rho$-$\\theta$ 空间投票，真实直线形成累加峰。
   - 棋盘检测示例显示：Hough 可找直线，但任务目标若是棋盘区域，还可能需要角点检测或后处理。
8. 阈值分割视觉重点：
   - 同一马图像在 $T=100$ 和 $T=160$ 下分割结果不同，说明阈值敏感。
   - 双峰法适合直方图有明显目标峰和背景峰的图像。
   - Otsu 图示强调两类均值与全局均值分离越大越好。
   - 动态门限图显示光照不均时可分块设置局部阈值。
9. 区域生长视觉重点：
   - 不同种子点和阈值会产生不同区域。
   - 种子选择、生长准则、停止条件是算法成败关键。
10. 图割视觉重点：
   - 用户标记前景和背景后，图割将像素建成图节点。
   - 相邻像素差异越大，连接强度越弱，越可能成为边界。
   - 最小割图示转化为最大流，水管容量类比帮助理解“最大流等于最小割”。
11. 形态学视觉重点：
   - 腐蚀会让前景收缩，细小连接可能断开。
   - 膨胀会让前景扩大，断裂线条可连接。
   - 开运算去小噪点、断细粘连。
   - 闭运算填小孔、补小裂缝。
   - 边界检测可通过膨胀后减原图得到外边界。
12. FCN/DeepLab 页视觉重点：
   - 分类网络学习类别特征，语义分割要把输出改为每个像素的类别。
   - 反卷积/上采样、空洞卷积、CRF、DeepLab 等方法用于提升分割精度。
`,c_=`---
id: visual-ch7
title: 八、第 7 章 图像压缩：视觉补充
order: 9
---

# 八、第 7 章 图像压缩：视觉补充

1. 数据量页用 1080P 图片和 2 小时视频计算强调：未压缩图像/视频体积巨大，压缩是工程必需。
2. 有损/无损页用“图像相减”展示：有损压缩后与原图相减能看到损失信息；无损压缩不能无限压缩。
3. 冗余类型视觉补充：
   - 空域冗余页用规则条纹与杂乱条纹对比，规则排列更容易预测。
   - 时域冗余页用相邻视频帧几乎相同的视觉例子说明视频压缩可利用帧间相似。
   - 频域冗余通过前面变换章节示例支撑：少量低频或重要频率可表示主要视觉内容。
   - 信息熵冗余由不同灰度/符号概率不均匀造成。
4. 霍夫曼编码视觉重点：
   - \`abbbbb\` 从 ASCII 48 bit 到自定义 1 bit 符号码可变短，但必须存编码表。
   - \`abbbbbcccccccc\` 展示变长编码必须唯一可译，不能随便用 $0$、$00$、$01$。
   - 霍夫曼树图清楚展示从小概率合并到根节点，再分配 0/1 码字。
   - 平均码长计算图把码长与概率相乘求和。
5. 信息熵视觉重点：
   - 香农信息量公式 $-\\log_2p(x)$ 与“概率越小信息量越大”的概念配图出现。
   - 信息熵是所有事件信息量按概率加权求和，是无损压缩的理论下界。
6. 图像文件格式示意：
   - 霍夫曼树、对应值、图像宽高、编码数据构成压缩文件基本结构。
   - 加入像素预测后，还需符号表格保存残差符号映射。
7. 像素预测视觉重点：
   - 直接存灰度值改为存预测残差，序列 $120,121,120,122,123$ 变成 $120,1,-1,2,1$。
   - 二维预测可用左、上、左上像素预测当前像素。
8. 行程编码视觉重点：
   - 长重复串适合 RLE，如 \`a1b13\`。
   - 交替串 \`abababab\` 不适合，会变长。
   - 图像扫描顺序会影响重复段长度；合理扫描可提高游程编码效果。
   - 图像压缩格式图中加入游程状态表长度、游程状态表、编码数据。
`,f_=`---
id: visual-priority
title: 九、应优先掌握的“看图出题点”
order: 10
---

# 九、应优先掌握的“看图出题点”

1. 能根据前后对比图判断属于增强、复原、分割、压缩还是几何校正。
2. 能根据曲线判断对数变换、幂次变换、分段线性变换的灰度作用。
3. 能根据直方图和 CDF 表完成直方图均衡化映射。
4. 能根据滤波结果判断均值、高斯、中值滤波的适用噪声。
5. 能根据滤波核判断平滑或锐化。
6. 能根据频谱图判断低频中心化、低通、高通、频率截断和边缘增强。
7. 能根据金字塔图说明下采样前为什么要低通。
8. 能根据 Haar 小波分解图写出低频、高频子带的含义。
9. 能根据退化模型图区分噪声、退化函数和复原滤波器。
10. 能根据噪声曲线识别高斯、均匀、椒盐、周期噪声。
11. 能根据暗通道图说明大气光估计和透射率估计。
12. 能根据一阶/二阶导数图说明边缘位置。
13. 能根据 Canny 中间结果说明非极大值抑制和双阈值连接。
14. 能根据 Hough 参数空间投票图解释直线检测。
15. 能根据 Otsu 图解释类间方差最大准则。
16. 能根据区域生长图说明种子点和阈值对结果的影响。
17. 能根据图割图说明区域项、边界项、最小割和最大流。
18. 能根据形态学处理图判断腐蚀、膨胀、开运算、闭运算。
19. 能根据霍夫曼树图写出码字和平均码长。
20. 能根据游程编码图判断数据是否适合 RLE。
`,d_=`---
id: discrete-signals
title: 序列的运算
order: 1
---

# 序列的运算

离散时间信号通常用序列 $x[n]$ 表示。
`,$_=`---
id: 总内容
title: 总内容
order: 1
---

初值定理（因果序列）
$$
\\lim_{z \\to \\infty} X(z) = x(0)
$$

频域变时域
$$
x(n) = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} X(e^{j\\omega}) e^{j\\omega n} \\, d\\omega
$$

帕塞瓦尔定理（能量守恒）
$$
\\sum_{n=-\\infty}^{\\infty} |x(n)|^2 = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} |X(e^{j\\omega})|^2 \\, d\\omega
$$

频域微分性质
$$
x(n) \\leftrightarrow X(e^{j\\omega}) \\\\
-jnx(n) \\leftrightarrow \\frac{dX(e^{j\\omega})}{d\\omega}
$$

因果序列
$n < 0$时，$h(n) = 0$

傅里叶变换实部虚部
$$
H(e^{j\\omega}) = H_R(e^{j\\omega}) + jH_I(e^{j\\omega})
$$
$$
H_R(e^{j\\omega}) \\leftrightarrow h_e(n) \\\\
h_e(n) = \\frac{h(n) + h(-n)}{2}
$$
所以因果知实部可得
$$
h(n) = 
\\begin{cases}
2h_e(n), & n > 0 \\\\
h_e(0), & n = 0 \\\\
0, & n < 0
\\end{cases}
$$

$$
1 + a^2 - 2a\\cos\\omega = (1 - ae^{j\\omega})(1 - ae^{-j\\omega})
$$
观察到类似完全平方然后配凑

常见傅里叶变换对
$$
a^n u(n) \\leftrightarrow \\frac{1}{1 - a e^{-j\\omega}} \\quad |a|<1$$
由时间反转性质
$$
a^{-n} u(-n) \\leftrightarrow \\frac{1}{1 - a e^{j\\omega}}
$$

$H(e^{j\\omega})$矩形 $\\leftrightarrow \\frac{\\sin(\\omega_c n)}{\\pi n}$
这道题还要算n=0

$$
u(n) = 
\\begin{cases}
1, & n \\ge 0 \\\\
0, & n < 0
\\end{cases}
$$

DFT共轭对称
实部$\\operatorname{Re}\\{X(k)\\}$对应时域
$$
w(n) = x_{ep}(n) = \\frac{1}{2}\\left[x(n) + x((N-n)_N)\\right]
$$
$$
x\\left((N-n)_N\\right)
$$
是时间反转序列（即倒序，首位不变，其余倒置）`,p_=`---
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
静电场是有源无旋场，为保守场，源于电荷`,m_=`---
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
</Collapsible>`,__=`---
id: 三平
title: 平均电能、平均磁能、平均能密
order: 2
---

# 平均电能、平均磁能、平均能密
$$W _ { e } = \\frac { 1 } { 2 } \\vec { E } \\cdot \\vec { D } = \\frac { 1 } { 2 } \\varepsilon | \\vec { E } | ^ { 2 }$$
$$W _ { m } = \\frac { 1 } { 2 } \\vec { H } \\cdot \\vec { B } = \\frac { 1 } { 2 } \\mu | \\vec { H } | ^ { 2 }$$
波印亭
$$\\vec { S } = \\vec { E } \\times \\vec { H } = \\vec { E } _ { 0 } \\times \\vec { H } _ { 0 } \\cos ^ { 2 } ( \\omega t + \\phi )$$$$W_{e,av} = \\frac{1}{T} \\int_0^T W_e dt$$
$$W_{m,av} = \\frac{1}{T} \\int_0^T W_m dt$$
能流矢量（平均波印亭）
$$\\vec{S}_{av} &= \\frac{1}{T} \\int_0^T \\vec{S} dt\\\\
&=\\frac{1}{2} \\operatorname{Re} \\left[ \\vec{E} \\times \\vec{H}^* \\right]$$
功率
$$P = \\int_S \\vec{S}_{av} \\cdot d\\vec{S}$$
## 复数转实数
$\\cdot e^{j\\omega t}$后取实部
`,v_=`---
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
$$\\theta _ { b } = \\arctan \\sqrt { \\frac { \\varepsilon _ { 2 } } { \\varepsilon _ { 1 } } }$$`,g_=`---
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
$$\\varepsilon_0 = \\frac{1}{36\\pi} \\times 10^{-9} \\, \\text{F/m}$$
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
能量的传输速度等于相速`,h_=`---
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
$$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$$（记忆：正余同余正）
$$\\cos(A+B) = \\cos A \\cos B - \\sin A \\sin B$$（余余反正正）
$$\\sin A - \\sin B = 2 \\cos \\frac { A + B } { 2 } \\sin \\frac { A - B } { 2 }$$
$$\\cos A - \\cos B = - 2 \\sin \\frac { A + B } { 2 } \\sin \\frac { A - B } { 2 }$$
$$\\sin A + \\sin B = 2 \\sin \\frac { A + B } { 2 } \\cos \\frac { A - B } { 2 }$$
$$\\cos A + \\cos B = 2 \\cos \\frac { A + B } { 2 } \\cos \\frac { A - B } { 2 }$$
$$a\\cos\\theta - b\\sin\\theta = \\sqrt{a^2 + b^2} \\cos(\\theta + \\varphi),\\ \\tan\\varphi = \\frac{b}{a}$$`,y_=`---
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
良导体中磁场滞后$\\frac { \\pi } { 4 }$
$$v = \\frac{\\lambda}{T} = \\frac{\\frac{2\\pi}{\\beta}}{\\frac{2\\pi}{\\omega}}=\\frac { w } { \\beta }$$
$$\\lambda = \\frac { 2 \\pi } { \\beta }$$`,z_=`---
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
$$\\vec{J}_{e} = \\frac{\\partial \\vec{D}}{\\partial t}$$`,S_=`---
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
\\nabla \\times \\vec{E} = -\\mu \\dfrac{\\partial \\vec{H}}{\\partial t} \\\\
\\nabla \\cdot (\\mu \\vec{H}) = 0 \\\\
\\nabla \\cdot (\\varepsilon \\vec{E}) = \\rho
\\end{cases}
$$
## 物理意义
时变电场的激发源除电荷之外，还有变化的磁场；时变磁场的激发源除传导电流外，还有变化的电场
电场和磁场互为激发源，相互激发
电场和磁场不再相互独立，构成一个整体——电磁场
## 波动方程
$$
\\begin{cases}
\\nabla^2 \\vec{E} = \\mu\\varepsilon \\dfrac{\\partial^2 \\vec{E}}{\\partial t^2} \\\\
\\nabla^2 \\vec{H} = \\mu\\varepsilon \\dfrac{\\partial^2 \\vec{H}}{\\partial t^2}
\\end{cases}
$$
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
</Collapsible>`,w_=`---
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

`,k_=`---
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
$$\\int _ { V } \\nabla \\cdot \\vec { A } ( \\vec { r } ) d V = \\oint _ { S } \\vec { A } ( \\vec { r } ) \\cdot d \\vec{S}$$`,C_=`---
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
可分解为有源无旋场和无源有旋场的叠加`,x_=`---
id: continuity
title: 函数的连续性
order: 2
---

# 函数的连续性

若 $\\lim\\limits_{x \\to x_0} f(x) = f(x_0)$，则称 $f(x)$ 在 $x_0$ 处连续。
`,E_=`---
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
`,P_=`---
id: derivatives
title: 导数的几何意义
order: 1
---

# 导数的几何意义

导数 $f'(x_0)$ 表示曲线 $y=f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率。
`,R_=`---
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

$\\int_{0}^{x} S(x)dx=\\sum\\limits_{n=0}^{\\infty}\\int_{0}^{x}(a_n x^{n})dx=\\sum\\limits_{n=0}^{\\infty} \\frac{a_n}{n+1} x^{n+1}$`,T_=`---
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
`,N_=`---
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
$$`,j_=`---
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
</Collapsible>`,D_=`---
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
</Collapsible>`,O_=`---
title: 记忆点
order: 1
---

## 求根公式
$$
z^{\\frac{1}{n}} = r^{\\frac{1}{n}} e^{i \\frac{\\theta + 2k\\pi}{n}}
$$

# 区域
翻翻PPT

# 柯西黎曼方程（C-R方程）
$$
\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y},\\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}
$$
证明过程中可推出
$$
f'(z) = \\frac{\\partial u}{\\partial x} + i \\frac{\\partial v}{\\partial x}
$$

# 初等函数
$\\mathrm{Ln} z$的主值
$$
\\ln z = \\ln|z| + i \\arg z
$$
$$
\\mathrm{Ln}\\,z = \\ln z + 2k\\pi i
$$
当$y \\to \\infty$时$|\\sin yi|,|\\cos yi|\\to\\infty$
$$(\\cosh z)' = \\sinh z$$(无负号)

# 柯西-古萨基本定理（柯西积分定理）
如果函数在单连通域内处处解析，那么函数沿此区域内的任何一条封闭曲线的积分为零
$$
\\oint\\limits_C f(z)\\,dz = 0
$$
若曲线是区域边界，则如果函数还在边界连续那么定理仍成立
**推论**：此时积分与路径无关

## 复合闭路定理
### 单
设函数在多连通域内解析，$C$和$C_1$为$D$内的任意两条闭曲线，以$C$和$C_1$为边界的区域全含于$D$则
$$
\\oint\\limits_C f(z)\\,dz = \\oint\\limits_{C_1} f(z)\\,dz
$$
### 多
若函数在$D$内解析，设$C$为$D$内的一条闭曲线，$C_1, C_2, \\cdots , C_n$是在$C$内部互不包含互不相交的闭曲线，并且以$C, C_1, C_2, \\cdots , C_n$为边界的区域全含于$D$那么
$$
\\oint\\limits_C f(z)\\,dz = \\sum_{i=1}^n \\oint\\limits_{C_i} f(z)\\,dz
$$
$$
\\oint\\limits_{\\Gamma} f(z)\\,dz = 0
$$
其中$\\Gamma$为$C, C_1, C_2, \\cdots , C_n$组成的复合闭路，方向为：$C$逆时针，其余顺时针
### 重要结论
$$
\\oint\\limits_{\\Gamma} \\frac{1}{(z-a)^{n+1}}\\,dz = 
\\begin{cases}
2\\pi i, & n=0 \\\\
0, & n\\ne 0
\\end{cases}
$$

# 柯西积分公式
若函数在区域内解析，闭曲线内部完全含于区域，对曲线内一点
$$
f(z_0) = \\frac{1}{2\\pi i} \\oint\\limits_C \\frac{f(z)}{z - z_0} \\, dz
$$

# 高阶导数定理
若函数在区域内解析，闭曲线内部完全含于区域，对曲线内一点
$$
f^{(n)}(z) = \\frac{n!}{2\\pi i} \\oint\\limits_C \\frac{f(z)}{(z - z_0)^{n+1}} \\, dz
$$
只要可导则任意阶可导

# 级数
## 收敛的必要条件
$$
\\lim_{n\\to\\infty} \\alpha _n = 0
$$

## 绝对收敛和条件收敛
若$\\sum\\limits_{n=1}^{\\infty} |\\alpha_n|$收敛（即**绝对收敛**，否则称为**条件收敛**），则$\\sum\\limits_{n=1}^{\\infty} \\alpha_n$也收敛，且
$$
\\left| \\sum\\limits_{n=0}^{\\infty} \\alpha _n \\right| \\le \\sum\\limits_{n=0}^{\\infty} |\\alpha _n|
$$
$$
\\sum\\limits_{n=0}^{\\infty} |\\alpha _n| \\text{ 收敛 } \\iff \\sum_{n=0}^{\\infty} |a_n|, \\sum\\limits_{n=0}^{\\infty} |b_n| \\text{ 收敛}
$$

## 幂级数
### 阿贝尔（Abel）定理（收敛定理）
若$\\sum\\limits_{n=0}^{\\infty} c_n z^n$在$z_0$处收敛，则对满足$|z| < |z_0|$的$z$，级数**绝对收敛**；反之，若在$z_0$处发散，则对满足$|z| > |z_0|$的$z$，级数发散

### 收敛半径
**比值法**
$$
\\lim_{n\\to\\infty} \\left| \\frac{c_{n+1}}{c_n} \\right| = \\lambda \\Rightarrow R = \\frac{1}{\\lambda}
$$
$$
\\lambda =
\\begin{cases}
0 \\Rightarrow R = \\infty \\\\
\\infty \\Rightarrow R = 0
\\end{cases}
$$
若极限不存在
$$
\\lambda = \\limsup_{n \\to \\infty} \\left| \\frac{c_{n+1}}{c_n} \\right|
$$\\
其中$\\limsup_{n \\to \\infty}$可直接看作要求极限的函数无穷远处最大的那个数
**注意**：此时算出的收敛半径不一定是最大的那个
**根值法**
$$
\\lim_{n\\to\\infty} \\sqrt[n]{|c_n|} = \\lambda \\Rightarrow R = \\frac{1}{\\lambda}
$$
若极限不存在
$$
\\lambda = \\limsup_{n \\to \\infty} \\sqrt[n]{|c_n|}
$$

### 幂级数的复合运算
若当$|z| < r$时$f(z) = \\sum\\limits_{n=0}^{\\infty} c_n z^n$，且$|z| < R$内$g(z)$解析和$|g(z)| < r$，则
$$
f[g(z)] = \\sum\\limits_{n=0}^{\\infty} c_n [g(z)]^n, \\ |z| < R
$$

### 逐项求导和积分
若$f(z) = \\sum\\limits_{n=0}^{\\infty} c_n (z - a)^n,\\ |z - a| < R$，则
$$
f'(z) = \\sum\\limits_{n=1}^{\\infty} n c_n (z - a)^{n-1},\\ |z - a| < R
$$
$$
\\int\\limits_C f(z)\\,dz = \\sum\\limits_{n=0}^{\\infty} \\left( c_n \\int\\limits_C (z - a)^n \\, dz \\right),\\ |z - a| < R
$$
或
$$
\\int_a^z f(\\zeta)\\,d\\zeta = \\sum\\limits_{n=0}^\\infty \\frac{c_n}{n+1}(z-a)^{n+1}
$$

## 泰勒级数
设$f(z)$在区域$D$内解析，$z_0 \\in D$.只要圆盘$K:|z - z_0| < R$包含在$D$内，则在该圆盘内$f(z)$可以展开为唯一的幂级数
$$f(z) = \\sum\\limits_{n=0}^{\\infty} a_n {(z - z_0)}^n$$
其中，系数$a_n= \\frac{f^{(n)}(z_0)}{n!}$，这个级数称为$f(z)$在$z_0$处的**泰勒级数**或**泰勒展开式**. 特别地，当$z_0=0$时，称为**麦克劳林级数**或**麦克劳林展开式**.

**注**：若$D$内包含奇点，设最近的奇点为$\\alpha$，则$R=|z_0-\\alpha|$.

### 常见函数的泰勒展开式
$$
&e^z =1+z+\\frac{z^2}{2!}+\\cdots+\\frac{z^n}{n!}+\\cdots=\\sum\\limits_{n=0}^{\\infty} \\frac{z^n}{n!}\\\\
&\\frac{1}{1-z} = 1+z+z^2+\\cdots+z^n+\\cdots= \\sum\\limits_{n=0}^{\\infty} z^n,\\ |z|<1\\\\
&\\frac{1}{1+z} =1-z+z^2-\\cdots+(-1)^n z^n+\\cdots= \\sum\\limits_{n=0}^{\\infty} (-1)^n z^n,\\ |z|<1\\\\
&\\sin z = z-\\frac{z^3}{3!}+\\cdots+\\frac{(-1)^n z^{2n+1}}{(2n+1)!}+\\cdots= \\sum\\limits_{n=0}^{\\infty} \\frac{(-1)^n z^{2n+1}}{(2n+1)!}\\\\
&\\cos z = 1-\\frac{z^2}{2!}+\\cdots+\\frac{(-1)^n z^{2n}}{(2n)!}+\\cdots= \\sum\\limits_{n=0}^{\\infty} \\frac{(-1)^n z^{2n}}{(2n)!}\\\\
&\\ln(1+z) = z-\\frac{z^2}{2}+\\frac{z^3}{3}-\\cdots+\\frac{(-1)^n z^{n+1}}{n+1}+\\cdots= \\sum\\limits_{n=0}^{\\infty} \\frac{(-1)^n z^{n+1}}{n+1},\\ |z|<1\\\\
&(1+z)^\\alpha =1+ \\alpha z + \\frac{\\alpha(\\alpha-1)}{2!}z^2 + \\cdots + \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}z^n + \\cdots = \\sum\\limits_{n=0}^{\\infty} \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-n+1)}{n!}z^n,\\ |z|<1
$$

## 洛朗级数
设函数$f(z)$在圆环域$D: R_1<|z-z_0|<R_2$内解析，则$f(z)$在$D$内可展开成唯一的洛朗级数
$$f(z) = \\sum\\limits_{n=-\\infty}^{\\infty} c_n (z - z_0)^n$$
其中洛朗系数$c_n= \\frac{1}{2\\pi i} \\oint\\limits_C \\frac{f(\\zeta)}{{\\left(\\zeta - z_0\\right)}^{n+1}} d\\zeta$，$C$为$D$内绕$z_0$的任意一条简单正向闭曲线。

# 孤立奇点
## 可去奇点
若在这点洛朗级数**无负幂项**或极限**存在且有限**则为**可去奇点**
## 极点
若在这点洛朗级数只有**有限个**负幂项，其中关于$( z - z _ { 0 } ) ^ { - 1 }$的最高幂为$( z - z _ { 0 } ) ^ { - m }$，那么孤立奇点$z_0$称为函数$f(z)$的**m级极点**.
此时函数可表示为
$$f(z) = \\frac{g(z)}{(z-z_0)^m}$$
其中$g(z)$在$z_0$处解析且$g(z_0) \\neq 0$.
若为极点则极限无穷大

### 判别方法
1. 定义
2. $f(z) = \\frac{g(z)}{(z-z_0)^m}$，其中$g(z)$在$z_0$处解析且$g(z_0) \\neq 0$.
3. 极限无穷大

## 本性奇点
若洛朗级数中含有**无限多个**$z-z_0$的**负幂项**，那么孤立奇点$z_0$称为$f(z)$的**本性奇点**

# 孤立奇点总结
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
$$

## 零点
$m$级零点的充要条件
$$
f^{(n)}(z_0)=0\\ ,\\ (n=0,1,2,\\cdots m-1), f^{(m)}(z_0)\\ne 0
$$

### 零点和极点的关系
若是某函数m级极点则是此函数倒数的零点，反之亦然

# 留数
$$
\\operatorname{Res}[f(z),z_0]=\\frac{1}{2\\pi i}\\oint\\limits_C f(z)\\,dz
$$

## 留数定理
曲线包围各个奇点
$$
\\oint\\limits_C f(z)\\,dz = 2\\pi i \\cdot \\sum_{k=1}^n \\operatorname{Res}[f(z), z_k]
$$

## 计算方法
1. 若点为**可去奇点**则留数为0
2. 若为**极点**则
**规则1** 1级极点
$$
\\operatorname{Res}[f(z),z_0]=\\lim_{z\\to z_0}(z-z_0)f(z)
$$
**规则2** m级
$$
\\operatorname{Res}[f(z),z_0]=\\frac{1}{(m-1)!}\\lim_{z\\to z_0}\\left[(z-z_0)^m f(z)\\right]^{(m)}
$$
**规则3** 
$f(z)=\\frac{P(z)}{Q(z)}$，$P(z_0)\\ne 0,Q(z)=0,Q'(z)\\ne 0$，为1级极点
$$
\\operatorname{Res}[f(z),z_0]=\\frac{P(z_0)}{Q'(z_0)}
$$

## 无穷远点处的留数
曲线变为绕原点，若留数**正号**则曲线**顺时针**

### 定理
只有有限个孤立奇点，则留数总和为$0$
可得
$$
\\oint\\limits_C f(z)\\,dz = 2\\pi i \\sum_{k=1}^n \\operatorname{Res}[f(z), z_k] \\\\
= -2\\pi i \\operatorname{Res}[f(z), \\infty]
$$

### 无穷远点处留数的计算
$$
\\operatorname{Res}[f(z),\\infty] = -\\operatorname{Res}\\left[f\\left(\\frac{1}{z}\\right)\\cdot\\frac{1}{z^2},0\\right]
$$
可得
$$
\\oint\\limits_C f(z)\\,dz = 2\\pi i \\operatorname{Res}\\left[f\\left(\\frac{1}{z}\\right)\\cdot\\frac{1}{z^2}, 0\\right]
$$`,M_=e=>{const n=/^---\r?\n([\s\S]*?)\r?\n---/,t=e.match(n);if(!t)return{attributes:{},body:e};const r=t[1],l=e.replace(n,"").trim(),i={};return r.split(`
`).forEach(o=>{const a=o.split(":");if(a.length>=2){const s=a[0].trim(),c=a.slice(1).join(":").trim();c==="true"?i[s]=!0:c==="false"?i[s]=!1:!isNaN(Number(c))&&c!==""?i[s]=Number(c):i[s]=c}}),{attributes:i,body:l}},Wa=Object.assign({"../contents/comm-princ/meta.json":mp,"../contents/comm-princ/总内容/meta.json":vp,"../contents/digital-image-processing/00-course-overview/meta.json":hp,"../contents/digital-image-processing/01-introduction/meta.json":zp,"../contents/digital-image-processing/02-basics/meta.json":wp,"../contents/digital-image-processing/03-enhancement/meta.json":Cp,"../contents/digital-image-processing/04-transforms/meta.json":Ep,"../contents/digital-image-processing/05-restoration/meta.json":Rp,"../contents/digital-image-processing/06-segmentation/meta.json":Np,"../contents/digital-image-processing/07-compression/meta.json":Dp,"../contents/digital-image-processing/08-visual-supplement/meta.json":Mp,"../contents/digital-image-processing/meta.json":Fp,"../contents/dsp/dsp-1/meta.json":Bp,"../contents/dsp/meta.json":Hp,"../contents/dsp/总/meta.json":Vp,"../contents/em-fields/e-fields-anal/meta.json":Wp,"../contents/em-fields/meta.json":Kp,"../contents/em-fields/second-part/meta.json":Yp,"../contents/em-fields/time-varying-fields/meta.json":Jp,"../contents/em-fields/vector-analysis/meta.json":bp,"../contents/math/calc-1/meta.json":nm,"../contents/math/calc-2/meta.json":rm,"../contents/math/meta.json":im,"../contents/math/series/meta.json":am,"../contents/复变函数/integrals/meta.json":um,"../contents/复变函数/meta.json":fm,"../contents/复变函数/residue/meta.json":$m,"../contents/复变函数/series/meta.json":mm,"../contents/复变函数/记忆点/meta.json":vm}),qa=Object.assign({"../contents/comm-princ/总内容/总内容.md":gm,"../contents/digital-image-processing/00-course-overview/course-overview.md":hm,"../contents/digital-image-processing/01-introduction/1-1.md":ym,"../contents/digital-image-processing/01-introduction/1-2.md":zm,"../contents/digital-image-processing/01-introduction/1-3.md":Sm,"../contents/digital-image-processing/01-introduction/1-4.md":wm,"../contents/digital-image-processing/02-basics/2-1.md":km,"../contents/digital-image-processing/02-basics/2-2.md":Cm,"../contents/digital-image-processing/02-basics/2-3.md":xm,"../contents/digital-image-processing/02-basics/2-4.md":Em,"../contents/digital-image-processing/03-enhancement/3-1.md":Pm,"../contents/digital-image-processing/03-enhancement/3-2.md":Rm,"../contents/digital-image-processing/03-enhancement/3-3.md":Tm,"../contents/digital-image-processing/03-enhancement/3-4.md":Nm,"../contents/digital-image-processing/03-enhancement/3-5.md":jm,"../contents/digital-image-processing/04-transforms/4-1.md":Dm,"../contents/digital-image-processing/04-transforms/4-2.md":Om,"../contents/digital-image-processing/04-transforms/4-3.md":Mm,"../contents/digital-image-processing/04-transforms/4-4.md":Lm,"../contents/digital-image-processing/05-restoration/5-1.md":Fm,"../contents/digital-image-processing/05-restoration/5-2.md":Am,"../contents/digital-image-processing/05-restoration/5-3.md":Bm,"../contents/digital-image-processing/05-restoration/5-4.md":Im,"../contents/digital-image-processing/05-restoration/5-5.md":Hm,"../contents/digital-image-processing/05-restoration/5-6.md":Um,"../contents/digital-image-processing/05-restoration/5-7.md":Vm,"../contents/digital-image-processing/05-restoration/5-8.md":Qm,"../contents/digital-image-processing/06-segmentation/6-1.md":Wm,"../contents/digital-image-processing/06-segmentation/6-2.md":qm,"../contents/digital-image-processing/06-segmentation/6-3.md":Km,"../contents/digital-image-processing/06-segmentation/6-4.md":Gm,"../contents/digital-image-processing/06-segmentation/6-5.md":Ym,"../contents/digital-image-processing/06-segmentation/6-6.md":Xm,"../contents/digital-image-processing/06-segmentation/6-7.md":Jm,"../contents/digital-image-processing/07-compression/7-1.md":Zm,"../contents/digital-image-processing/07-compression/7-2.md":bm,"../contents/digital-image-processing/07-compression/7-3.md":e_,"../contents/digital-image-processing/07-compression/7-4.md":n_,"../contents/digital-image-processing/08-visual-supplement/overview.md":t_,"../contents/digital-image-processing/08-visual-supplement/reading-guide.md":r_,"../contents/digital-image-processing/08-visual-supplement/visual-ch1.md":l_,"../contents/digital-image-processing/08-visual-supplement/visual-ch2.md":i_,"../contents/digital-image-processing/08-visual-supplement/visual-ch3.md":o_,"../contents/digital-image-processing/08-visual-supplement/visual-ch4.md":a_,"../contents/digital-image-processing/08-visual-supplement/visual-ch5.md":s_,"../contents/digital-image-processing/08-visual-supplement/visual-ch6.md":u_,"../contents/digital-image-processing/08-visual-supplement/visual-ch7.md":c_,"../contents/digital-image-processing/08-visual-supplement/visual-priority.md":f_,"../contents/dsp/dsp-1/discrete-signals.md":d_,"../contents/dsp/总/总内容.md":$_,"../contents/em-fields/e-fields-anal/basic-equations.md":p_,"../contents/em-fields/e-fields-anal/p-d.md":m_,"../contents/em-fields/second-part/三平.md":__,"../contents/em-fields/second-part/全反射和全透射.md":v_,"../contents/em-fields/second-part/均匀平面电磁波的传播特性.md":g_,"../contents/em-fields/second-part/垂直入射.md":h_,"../contents/em-fields/second-part/导电媒质.md":y_,"../contents/em-fields/time-varying-fields/faraday-law.md":z_,"../contents/em-fields/time-varying-fields/maxwell-equations.md":S_,"../contents/em-fields/vector-analysis/circulation-curl.md":w_,"../contents/em-fields/vector-analysis/flux-divergence.md":k_,"../contents/em-fields/vector-analysis/helmholtz.md":C_,"../contents/math/calc-1/continuity.md":x_,"../contents/math/calc-1/limits.md":E_,"../contents/math/calc-2/derivatives.md":P_,"../contents/math/series/normal.md":R_,"../contents/复变函数/integrals/high-order-derivatives.md":T_,"../contents/复变函数/residue/isolated-singularity.md":N_,"../contents/复变函数/series/laurent.md":j_,"../contents/复变函数/series/taylor.md":D_,"../contents/复变函数/记忆点/记忆点.md":O_}),L_=()=>{try{const e=[],n={},t=new Map,r=o=>{if(!t.has(o)){const a=`../contents/${o}/meta.json`,s=Wa[a]||{};t.set(o,{id:s.id||o,title:s.title||o,order:s.order||999,chapters:[],_chaptersMap:new Map})}return t.get(o)},l=(o,a)=>{if(!o._chaptersMap.has(a)){const s=`../contents/${o.id}/${a}/meta.json`,c=Wa[s]||{},m=a.match(/^(\d+)/),p=m?parseInt(m[1],10):999,$={id:c.id||a,title:c.title||a,order:c.order!==void 0?c.order:p,notes:[]};o._chaptersMap.set(a,$),o.chapters.push($)}return o._chaptersMap.get(a)};return Object.keys(qa).forEach(o=>{try{const a=o.split("/");if(a.length===5){const s=a[2],c=a[3],m=a[4],p=qa[o],$=r(s),g=l($,c),h=typeof p=="string"?p:"",{attributes:y,body:D}=M_(h),f=m.replace(".md",""),u=f.match(/^(\d+)/),d=u?parseInt(u[1],10):999,_=y.id||f,z=y.order!==void 0?y.order:d,k=y.title||f;g.notes.push({id:_,title:k,order:z});const C=`${s}/${c}/${_}`;n[C]=D}}catch(a){console.warn("Skipping file due to error:",o,a)}}),{catalog:Array.from(t.values()).sort((o,a)=>o.order-a.order).map(o=>(o.chapters.sort((a,s)=>a.order-s.order),o.chapters.forEach(a=>{a.notes.sort((s,c)=>s.order-c.order)}),delete o._chaptersMap,o)),notesContent:n}}catch(e){return console.error("Critical error in loadCatalog:",e),{catalog:[{id:"error",title:"Loading Error",chapters:[]}],notesContent:{}}}},{catalog:F_,notesContent:A_}=L_(),U_=F_,V_=A_,jo=(e,n="Startup Error")=>{document.body.innerHTML=`
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
    `},B_=async()=>{try{const{default:e}=await If(async()=>{const{default:t}=await import("./App-C_WoWSO5.js");return{default:t}},[]);Ql.createRoot(document.getElementById("root")).render(Ao.jsx(rs.StrictMode,{children:Ao.jsx(e,{})}))}catch(e){jo(e)}};window.addEventListener("error",e=>jo(e.error||e.message,"Runtime Error"));window.addEventListener("unhandledrejection",e=>jo(e.reason,"Promise Rejection"));B_();export{H_ as R,I_ as a,U_ as c,Hf as g,Ao as j,V_ as n,br as r};
