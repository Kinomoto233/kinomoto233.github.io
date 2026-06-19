function Mf(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in n)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(n,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const Lf="modulepreload",Of=function(n){return"/"+n},Mo={},Bf=function(e,t,r){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.allSettled(t.map(u=>{if(u=Of(u),u in Mo)return;Mo[u]=!0;const c=u.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const $=document.createElement("link");if($.rel=c?"stylesheet":Lf,c||($.as="script"),$.crossOrigin="",$.href=u,a&&$.setAttribute("nonce",a),document.head.appendChild($),c)return new Promise((p,h)=>{$.addEventListener("load",p),$.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return l.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};var z1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Af(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wa={exports:{}},Zr={},Ka={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt=Symbol.for("react.element"),Ff=Symbol.for("react.portal"),Hf=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Uf=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Wf=Symbol.for("react.memo"),Kf=Symbol.for("react.lazy"),Lo=Symbol.iterator;function Xf(n){return n===null||typeof n!="object"?null:(n=Lo&&n[Lo]||n["@@iterator"],typeof n=="function"?n:null)}var Xa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ya=Object.assign,Ja={};function rt(n,e,t){this.props=n,this.context=e,this.refs=Ja,this.updater=t||Xa}rt.prototype.isReactComponent={};rt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};rt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Za(){}Za.prototype=rt.prototype;function Bi(n,e,t){this.props=n,this.context=e,this.refs=Ja,this.updater=t||Xa}var Ai=Bi.prototype=new Za;Ai.constructor=Bi;Ya(Ai,rt.prototype);Ai.isPureReactComponent=!0;var Oo=Array.isArray,ba=Object.prototype.hasOwnProperty,Fi={current:null},nu={key:!0,ref:!0,__self:!0,__source:!0};function eu(n,e,t){var r,l={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)ba.call(e,r)&&!nu.hasOwnProperty(r)&&(l[r]=e[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(n&&n.defaultProps)for(r in a=n.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:qt,type:n,key:i,ref:o,props:l,_owner:Fi.current}}function Yf(n,e){return{$$typeof:qt,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Hi(n){return typeof n=="object"&&n!==null&&n.$$typeof===qt}function Jf(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Bo=/\/+/g;function hl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Jf(""+n.key):e.toString(36)}function _r(n,e,t,r,l){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case qt:case Ff:o=!0}}if(o)return o=n,l=l(o),n=r===""?"."+hl(o,0):r,Oo(l)?(t="",n!=null&&(t=n.replace(Bo,"$&/")+"/"),_r(l,e,t,"",function(c){return c})):l!=null&&(Hi(l)&&(l=Yf(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Bo,"$&/")+"/")+n)),e.push(l)),1;if(o=0,r=r===""?".":r+":",Oo(n))for(var a=0;a<n.length;a++){i=n[a];var u=r+hl(i,a);o+=_r(i,e,t,u,l)}else if(u=Xf(n),typeof u=="function")for(n=u.call(n),a=0;!(i=n.next()).done;)i=i.value,u=r+hl(i,a++),o+=_r(i,e,t,u,l);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bt(n,e,t){if(n==null)return n;var r=[],l=0;return _r(n,r,"","",function(i){return e.call(t,i,l++)}),r}function Zf(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var an={current:null},vr={transition:null},bf={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:vr,ReactCurrentOwner:Fi};function tu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:bt,forEach:function(n,e,t){bt(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return bt(n,function(){e++}),e},toArray:function(n){return bt(n,function(e){return e})||[]},only:function(n){if(!Hi(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};R.Component=rt;R.Fragment=Hf;R.Profiler=Uf;R.PureComponent=Bi;R.StrictMode=If;R.Suspense=qf;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;R.act=tu;R.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=Ya({},n.props),l=n.key,i=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Fi.current),e.key!==void 0&&(l=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(u in e)ba.call(e,u)&&!nu.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:qt,type:n.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(n){return n={$$typeof:Qf,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Vf,_context:n},n.Consumer=n};R.createElement=eu;R.createFactory=function(n){var e=eu.bind(null,n);return e.type=n,e};R.createRef=function(){return{current:null}};R.forwardRef=function(n){return{$$typeof:Gf,render:n}};R.isValidElement=Hi;R.lazy=function(n){return{$$typeof:Kf,_payload:{_status:-1,_result:n},_init:Zf}};R.memo=function(n,e){return{$$typeof:Wf,type:n,compare:e===void 0?null:e}};R.startTransition=function(n){var e=vr.transition;vr.transition={};try{n()}finally{vr.transition=e}};R.unstable_act=tu;R.useCallback=function(n,e){return an.current.useCallback(n,e)};R.useContext=function(n){return an.current.useContext(n)};R.useDebugValue=function(){};R.useDeferredValue=function(n){return an.current.useDeferredValue(n)};R.useEffect=function(n,e){return an.current.useEffect(n,e)};R.useId=function(){return an.current.useId()};R.useImperativeHandle=function(n,e,t){return an.current.useImperativeHandle(n,e,t)};R.useInsertionEffect=function(n,e){return an.current.useInsertionEffect(n,e)};R.useLayoutEffect=function(n,e){return an.current.useLayoutEffect(n,e)};R.useMemo=function(n,e){return an.current.useMemo(n,e)};R.useReducer=function(n,e,t){return an.current.useReducer(n,e,t)};R.useRef=function(n){return an.current.useRef(n)};R.useState=function(n){return an.current.useState(n)};R.useSyncExternalStore=function(n,e,t){return an.current.useSyncExternalStore(n,e,t)};R.useTransition=function(){return an.current.useTransition()};R.version="18.3.1";Ka.exports=R;var br=Ka.exports;const ru=Af(br),S1=Mf({__proto__:null,default:ru},[br]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=br,ed=Symbol.for("react.element"),td=Symbol.for("react.fragment"),rd=Object.prototype.hasOwnProperty,ld=nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,id={key:!0,ref:!0,__self:!0,__source:!0};function lu(n,e,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rd.call(e,r)&&!id.hasOwnProperty(r)&&(l[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)l[r]===void 0&&(l[r]=e[r]);return{$$typeof:ed,type:n,key:i,ref:o,props:l,_owner:ld.current}}Zr.Fragment=td;Zr.jsx=lu;Zr.jsxs=lu;Wa.exports=Zr;var Ao=Wa.exports,Ql={},iu={exports:{}},hn={},ou={exports:{}},au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(k,E){var P=k.length;k.push(E);n:for(;0<P;){var V=P-1>>>1,K=k[V];if(0<l(K,E))k[V]=E,k[P]=K,P=V;else break n}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var E=k[0],P=k.pop();if(P!==E){k[0]=P;n:for(var V=0,K=k.length,Jt=K>>>1;V<Jt;){var me=2*(V+1)-1,vl=k[me],_e=me+1,Zt=k[_e];if(0>l(vl,P))_e<K&&0>l(Zt,vl)?(k[V]=Zt,k[_e]=P,V=_e):(k[V]=vl,k[me]=P,V=me);else if(_e<K&&0>l(Zt,P))k[V]=Zt,k[_e]=P,V=_e;else break n}}return E}function l(k,E){var P=k.sortIndex-E.sortIndex;return P!==0?P:k.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var u=[],c=[],m=1,$=null,p=3,h=!1,y=!1,g=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(k){for(var E=t(c);E!==null;){if(E.callback===null)r(c);else if(E.startTime<=k)r(c),E.sortIndex=E.expirationTime,e(u,E);else break;E=t(c)}}function _(k){if(g=!1,d(k),!y)if(t(u)!==null)y=!0,ml(z);else{var E=t(c);E!==null&&_l(_,E.startTime-k)}}function z(k,E){y=!1,g&&(g=!1,f(C),C=-1),h=!0;var P=p;try{for(d(E),$=t(u);$!==null&&(!($.expirationTime>E)||k&&!Cn());){var V=$.callback;if(typeof V=="function"){$.callback=null,p=$.priorityLevel;var K=V($.expirationTime<=E);E=n.unstable_now(),typeof K=="function"?$.callback=K:$===t(u)&&r(u),d(E)}else r(u);$=t(u)}if($!==null)var Jt=!0;else{var me=t(c);me!==null&&_l(_,me.startTime-E),Jt=!1}return Jt}finally{$=null,p=P,h=!1}}var w=!1,x=null,C=-1,U=5,T=-1;function Cn(){return!(n.unstable_now()-T<U)}function ot(){if(x!==null){var k=n.unstable_now();T=k;var E=!0;try{E=x(!0,k)}finally{E?at():(w=!1,x=null)}}else w=!1}var at;if(typeof s=="function")at=function(){s(ot)};else if(typeof MessageChannel<"u"){var Do=new MessageChannel,Df=Do.port2;Do.port1.onmessage=ot,at=function(){Df.postMessage(null)}}else at=function(){D(ot,0)};function ml(k){x=k,w||(w=!0,at())}function _l(k,E){C=D(function(){k(n.unstable_now())},E)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_continueExecution=function(){y||h||(y=!0,ml(z))},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(k){switch(p){case 1:case 2:case 3:var E=3;break;default:E=p}var P=p;p=E;try{return k()}finally{p=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(k,E){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=p;p=k;try{return E()}finally{p=P}},n.unstable_scheduleCallback=function(k,E,P){var V=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,k){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,k={id:m++,callback:E,priorityLevel:k,startTime:P,expirationTime:K,sortIndex:-1},P>V?(k.sortIndex=P,e(c,k),t(u)===null&&k===t(c)&&(g?(f(C),C=-1):g=!0,_l(_,P-V))):(k.sortIndex=K,e(u,k),y||h||(y=!0,ml(z))),k},n.unstable_shouldYield=Cn,n.unstable_wrapCallback=function(k){var E=p;return function(){var P=p;p=E;try{return k.apply(this,arguments)}finally{p=P}}}})(au);ou.exports=au;var od=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=br,vn=od;function v(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uu=new Set,Rt={};function Re(n,e){Ye(n,e),Ye(n+"Capture",e)}function Ye(n,e){for(Rt[n]=e,n=0;n<e.length;n++)uu.add(e[n])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Ho={};function sd(n){return Gl.call(Ho,n)?!0:Gl.call(Fo,n)?!1:ud.test(n)?Ho[n]=!0:(Fo[n]=!0,!1)}function cd(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function fd(n,e,t,r){if(e===null||typeof e>"u"||cd(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(n,e,t,r,l,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){b[n]=new un(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];b[e]=new un(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){b[n]=new un(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){b[n]=new un(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){b[n]=new un(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){b[n]=new un(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){b[n]=new un(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){b[n]=new un(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){b[n]=new un(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ii=/[\-:]([a-z])/g;function Ui(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ii,Ui);b[e]=new un(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ii,Ui);b[e]=new un(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ii,Ui);b[e]=new un(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){b[n]=new un(n,1,!1,n.toLowerCase(),null,!1,!1)});b.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){b[n]=new un(n,1,!1,n.toLowerCase(),null,!0,!0)});function Vi(n,e,t,r){var l=b.hasOwnProperty(e)?b[e]:null;(l!==null?l.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fd(e,t,l,r)&&(t=null),r||l===null?sd(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):l.mustUseProperty?n[l.propertyName]=t===null?l.type===3?!1:"":t:(e=l.attributeName,r=l.attributeNamespace,t===null?n.removeAttribute(e):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var Kn=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),je=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),cu=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),fu=Symbol.for("react.offscreen"),Io=Symbol.iterator;function ut(n){return n===null||typeof n!="object"?null:(n=Io&&n[Io]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,yl;function _t(n){if(yl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);yl=e&&e[1]||""}return`
`+yl+n}var gl=!1;function zl(n,e){if(!n||gl)return"";gl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){r=c}n.call(e.prototype)}else{try{throw Error()}catch(c){r=c}n()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=o&&0<=a);break}}}finally{gl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?_t(n):""}function dd(n){switch(n.tag){case 5:return _t(n.type);case 16:return _t("Lazy");case 13:return _t("Suspense");case 19:return _t("SuspenseList");case 0:case 2:case 15:return n=zl(n.type,!1),n;case 11:return n=zl(n.type.render,!1),n;case 1:return n=zl(n.type,!0),n;default:return""}}function Xl(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case De:return"Fragment";case je:return"Portal";case ql:return"Profiler";case Qi:return"StrictMode";case Wl:return"Suspense";case Kl:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case cu:return(n.displayName||"Context")+".Consumer";case su:return(n._context.displayName||"Context")+".Provider";case Gi:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case qi:return e=n.displayName||null,e!==null?e:Xl(n.type)||"Memo";case Yn:e=n._payload,n=n._init;try{return Xl(n(e))}catch{}}return null}function pd(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(e);case 8:return e===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function du(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $d(n){var e=du(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function er(n){n._valueTracker||(n._valueTracker=$d(n))}function pu(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=du(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Yl(n,e){var t=e.checked;return H({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Uo(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=ce(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $u(n,e){e=e.checked,e!=null&&Vi(n,"checked",e,!1)}function Jl(n,e){$u(n,e);var t=ce(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Zl(n,e.type,t):e.hasOwnProperty("defaultValue")&&Zl(n,e.type,ce(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Vo(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Zl(n,e,t){(e!=="number"||Pr(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var vt=Array.isArray;function Qe(n,e,t,r){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&r&&(n[t].defaultSelected=!0)}else{for(t=""+ce(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,r&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function bl(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return H({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Qo(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(v(92));if(vt(t)){if(1<t.length)throw Error(v(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ce(t)}}function mu(n,e){var t=ce(e.value),r=ce(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Go(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function _u(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?_u(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tr,vu=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,l){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,l)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Tt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},md=["Webkit","ms","Moz","O"];Object.keys(gt).forEach(function(n){md.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),gt[e]=gt[n]})});function hu(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||gt.hasOwnProperty(n)&&gt[n]?(""+e).trim():e+"px"}function yu(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=hu(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,l):n[t]=l}}var _d=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ei(n,e){if(e){if(_d[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function ti(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ri=null;function Wi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var li=null,Ge=null,qe=null;function qo(n){if(n=Xt(n)){if(typeof li!="function")throw Error(v(280));var e=n.stateNode;e&&(e=ll(e),li(n.stateNode,n.type,e))}}function gu(n){Ge?qe?qe.push(n):qe=[n]:Ge=n}function zu(){if(Ge){var n=Ge,e=qe;if(qe=Ge=null,qo(n),e)for(n=0;n<e.length;n++)qo(e[n])}}function Su(n,e){return n(e)}function ku(){}var Sl=!1;function wu(n,e,t){if(Sl)return n(e,t);Sl=!0;try{return Su(n,e,t)}finally{Sl=!1,(Ge!==null||qe!==null)&&(ku(),zu())}}function Nt(n,e){var t=n.stateNode;if(t===null)return null;var r=ll(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(v(231,e,typeof t));return t}var ii=!1;if(Qn)try{var st={};Object.defineProperty(st,"passive",{get:function(){ii=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{ii=!1}function vd(n,e,t,r,l,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(m){this.onError(m)}}var zt=!1,Rr=null,Tr=!1,oi=null,hd={onError:function(n){zt=!0,Rr=n}};function yd(n,e,t,r,l,i,o,a,u){zt=!1,Rr=null,vd.apply(hd,arguments)}function gd(n,e,t,r,l,i,o,a,u){if(yd.apply(this,arguments),zt){if(zt){var c=Rr;zt=!1,Rr=null}else throw Error(v(198));Tr||(Tr=!0,oi=c)}}function Te(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function xu(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Wo(n){if(Te(n)!==n)throw Error(v(188))}function zd(n){var e=n.alternate;if(!e){if(e=Te(n),e===null)throw Error(v(188));return e!==n?null:n}for(var t=n,r=e;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Wo(l),n;if(i===r)return Wo(l),e;i=i.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?n:e}function Cu(n){return n=zd(n),n!==null?Eu(n):null}function Eu(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Eu(n);if(e!==null)return e;n=n.sibling}return null}var Pu=vn.unstable_scheduleCallback,Ko=vn.unstable_cancelCallback,Sd=vn.unstable_shouldYield,kd=vn.unstable_requestPaint,Q=vn.unstable_now,wd=vn.unstable_getCurrentPriorityLevel,Ki=vn.unstable_ImmediatePriority,Ru=vn.unstable_UserBlockingPriority,Nr=vn.unstable_NormalPriority,xd=vn.unstable_LowPriority,Tu=vn.unstable_IdlePriority,nl=null,Bn=null;function Cd(n){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(nl,n,void 0,(n.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:Rd,Ed=Math.log,Pd=Math.LN2;function Rd(n){return n>>>=0,n===0?32:31-(Ed(n)/Pd|0)|0}var rr=64,lr=4194304;function ht(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jr(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,l=n.suspendedLanes,i=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=ht(a):(i&=o,i!==0&&(r=ht(i)))}else o=t&~l,o!==0?r=ht(o):i!==0&&(r=ht(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&l)&&(l=r&-r,i=e&-e,l>=i||l===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Nn(e),l=1<<t,r|=n[t],e&=~l;return r}function Td(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes;0<i;){var o=31-Nn(i),a=1<<o,u=l[o];u===-1?(!(a&t)||a&r)&&(l[o]=Td(a,e)):u<=e&&(n.expiredLanes|=a),i&=~a}}function ai(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nu(){var n=rr;return rr<<=1,!(rr&4194240)&&(rr=64),n}function kl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Wt(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Nn(e),n[e]=t}function jd(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var l=31-Nn(t),i=1<<l;e[l]=0,r[l]=-1,n[l]=-1,t&=~i}}function Xi(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Nn(t),l=1<<r;l&e|n[r]&e&&(n[r]|=e),t&=~l}}var j=0;function ju(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Du,Yi,Mu,Lu,Ou,ui=!1,ir=[],te=null,re=null,le=null,jt=new Map,Dt=new Map,Zn=[],Dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(n,e){switch(n){case"focusin":case"focusout":te=null;break;case"dragenter":case"dragleave":re=null;break;case"mouseover":case"mouseout":le=null;break;case"pointerover":case"pointerout":jt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(e.pointerId)}}function ct(n,e,t,r,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},e!==null&&(e=Xt(e),e!==null&&Yi(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function Md(n,e,t,r,l){switch(e){case"focusin":return te=ct(te,n,e,t,r,l),!0;case"dragenter":return re=ct(re,n,e,t,r,l),!0;case"mouseover":return le=ct(le,n,e,t,r,l),!0;case"pointerover":var i=l.pointerId;return jt.set(i,ct(jt.get(i)||null,n,e,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Dt.set(i,ct(Dt.get(i)||null,n,e,t,r,l)),!0}return!1}function Bu(n){var e=ye(n.target);if(e!==null){var t=Te(e);if(t!==null){if(e=t.tag,e===13){if(e=xu(t),e!==null){n.blockedOn=e,Ou(n.priority,function(){Mu(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hr(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=si(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);ri=r,t.target.dispatchEvent(r),ri=null}else return e=Xt(t),e!==null&&Yi(e),n.blockedOn=t,!1;e.shift()}return!0}function Yo(n,e,t){hr(n)&&t.delete(e)}function Ld(){ui=!1,te!==null&&hr(te)&&(te=null),re!==null&&hr(re)&&(re=null),le!==null&&hr(le)&&(le=null),jt.forEach(Yo),Dt.forEach(Yo)}function ft(n,e){n.blockedOn===e&&(n.blockedOn=null,ui||(ui=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Ld)))}function Mt(n){function e(l){return ft(l,n)}if(0<ir.length){ft(ir[0],n);for(var t=1;t<ir.length;t++){var r=ir[t];r.blockedOn===n&&(r.blockedOn=null)}}for(te!==null&&ft(te,n),re!==null&&ft(re,n),le!==null&&ft(le,n),jt.forEach(e),Dt.forEach(e),t=0;t<Zn.length;t++)r=Zn[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<Zn.length&&(t=Zn[0],t.blockedOn===null);)Bu(t),t.blockedOn===null&&Zn.shift()}var We=Kn.ReactCurrentBatchConfig,Dr=!0;function Od(n,e,t,r){var l=j,i=We.transition;We.transition=null;try{j=1,Ji(n,e,t,r)}finally{j=l,We.transition=i}}function Bd(n,e,t,r){var l=j,i=We.transition;We.transition=null;try{j=4,Ji(n,e,t,r)}finally{j=l,We.transition=i}}function Ji(n,e,t,r){if(Dr){var l=si(n,e,t,r);if(l===null)Dl(n,e,r,Mr,t),Xo(n,r);else if(Md(l,n,e,t,r))r.stopPropagation();else if(Xo(n,r),e&4&&-1<Dd.indexOf(n)){for(;l!==null;){var i=Xt(l);if(i!==null&&Du(i),i=si(n,e,t,r),i===null&&Dl(n,e,r,Mr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else Dl(n,e,r,null,t)}}var Mr=null;function si(n,e,t,r){if(Mr=null,n=Wi(r),n=ye(n),n!==null)if(e=Te(n),e===null)n=null;else if(t=e.tag,t===13){if(n=xu(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Mr=n,null}function Au(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wd()){case Ki:return 1;case Ru:return 4;case Nr:case xd:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var ne=null,Zi=null,yr=null;function Fu(){if(yr)return yr;var n,e=Zi,t=e.length,r,l="value"in ne?ne.value:ne.textContent,i=l.length;for(n=0;n<t&&e[n]===l[n];n++);var o=t-n;for(r=1;r<=o&&e[t-r]===l[i-r];r++);return yr=l.slice(n,1<r?1-r:void 0)}function gr(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function or(){return!0}function Jo(){return!1}function yn(n){function e(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?or:Jo,this.isPropagationStopped=Jo,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),e}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=yn(lt),Kt=H({},lt,{view:0,detail:0}),Ad=yn(Kt),wl,xl,dt,el=H({},Kt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==dt&&(dt&&n.type==="mousemove"?(wl=n.screenX-dt.screenX,xl=n.screenY-dt.screenY):xl=wl=0,dt=n),wl)},movementY:function(n){return"movementY"in n?n.movementY:xl}}),Zo=yn(el),Fd=H({},el,{dataTransfer:0}),Hd=yn(Fd),Id=H({},Kt,{relatedTarget:0}),Cl=yn(Id),Ud=H({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),Vd=yn(Ud),Qd=H({},lt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gd=yn(Qd),qd=H({},lt,{data:0}),bo=yn(qd),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Xd[n])?!!e[n]:!1}function no(){return Yd}var Jd=H({},Kt,{key:function(n){if(n.key){var e=Wd[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=gr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(n){return n.type==="keypress"?gr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zd=yn(Jd),bd=H({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),na=yn(bd),np=H({},Kt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),ep=yn(np),tp=H({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),rp=yn(tp),lp=H({},el,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ip=yn(lp),op=[9,13,27,32],eo=Qn&&"CompositionEvent"in window,St=null;Qn&&"documentMode"in document&&(St=document.documentMode);var ap=Qn&&"TextEvent"in window&&!St,Hu=Qn&&(!eo||St&&8<St&&11>=St),ea=" ",ta=!1;function Iu(n,e){switch(n){case"keyup":return op.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Me=!1;function up(n,e){switch(n){case"compositionend":return Uu(e);case"keypress":return e.which!==32?null:(ta=!0,ea);case"textInput":return n=e.data,n===ea&&ta?null:n;default:return null}}function sp(n,e){if(Me)return n==="compositionend"||!eo&&Iu(n,e)?(n=Fu(),yr=Zi=ne=null,Me=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hu&&e.locale!=="ko"?null:e.data;default:return null}}var cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ra(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!cp[n.type]:e==="textarea"}function Vu(n,e,t,r){gu(r),e=Lr(e,"onChange"),0<e.length&&(t=new bi("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var kt=null,Lt=null;function fp(n){ns(n,0)}function tl(n){var e=Be(n);if(pu(e))return n}function dp(n,e){if(n==="change")return e}var Qu=!1;if(Qn){var El;if(Qn){var Pl="oninput"in document;if(!Pl){var la=document.createElement("div");la.setAttribute("oninput","return;"),Pl=typeof la.oninput=="function"}El=Pl}else El=!1;Qu=El&&(!document.documentMode||9<document.documentMode)}function ia(){kt&&(kt.detachEvent("onpropertychange",Gu),Lt=kt=null)}function Gu(n){if(n.propertyName==="value"&&tl(Lt)){var e=[];Vu(e,Lt,n,Wi(n)),wu(fp,e)}}function pp(n,e,t){n==="focusin"?(ia(),kt=e,Lt=t,kt.attachEvent("onpropertychange",Gu)):n==="focusout"&&ia()}function $p(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl(Lt)}function mp(n,e){if(n==="click")return tl(e)}function _p(n,e){if(n==="input"||n==="change")return tl(e)}function vp(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Dn=typeof Object.is=="function"?Object.is:vp;function Ot(n,e){if(Dn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Gl.call(e,l)||!Dn(n[l],e[l]))return!1}return!0}function oa(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function aa(n,e){var t=oa(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=oa(t)}}function qu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?qu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Wu(){for(var n=window,e=Pr();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Pr(n.document)}return e}function to(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hp(n){var e=Wu(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&qu(t.ownerDocument.documentElement,t)){if(r!==null&&to(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!n.extend&&i>r&&(l=r,r=i,i=l),l=aa(t,i);var o=aa(t,r);l&&o&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yp=Qn&&"documentMode"in document&&11>=document.documentMode,Le=null,ci=null,wt=null,fi=!1;function ua(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fi||Le==null||Le!==Pr(r)||(r=Le,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wt&&Ot(wt,r)||(wt=r,r=Lr(ci,"onSelect"),0<r.length&&(e=new bi("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Le)))}function ar(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Oe={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionend:ar("Transition","TransitionEnd")},Rl={},Ku={};Qn&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete Oe.animationend.animation,delete Oe.animationiteration.animation,delete Oe.animationstart.animation),"TransitionEvent"in window||delete Oe.transitionend.transition);function rl(n){if(Rl[n])return Rl[n];if(!Oe[n])return n;var e=Oe[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ku)return Rl[n]=e[t];return n}var Xu=rl("animationend"),Yu=rl("animationiteration"),Ju=rl("animationstart"),Zu=rl("transitionend"),bu=new Map,sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function de(n,e){bu.set(n,e),Re(e,[n])}for(var Tl=0;Tl<sa.length;Tl++){var Nl=sa[Tl],gp=Nl.toLowerCase(),zp=Nl[0].toUpperCase()+Nl.slice(1);de(gp,"on"+zp)}de(Xu,"onAnimationEnd");de(Yu,"onAnimationIteration");de(Ju,"onAnimationStart");de("dblclick","onDoubleClick");de("focusin","onFocus");de("focusout","onBlur");de(Zu,"onTransitionEnd");Ye("onMouseEnter",["mouseout","mouseover"]);Ye("onMouseLeave",["mouseout","mouseover"]);Ye("onPointerEnter",["pointerout","pointerover"]);Ye("onPointerLeave",["pointerout","pointerover"]);Re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Re("onBeforeInput",["compositionend","keypress","textInput","paste"]);Re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(yt));function ca(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,gd(r,e,void 0,n),n.currentTarget=null}function ns(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],l=r.event;r=r.listeners;n:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break n;ca(l,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break n;ca(l,a,c),i=u}}}if(Tr)throw n=oi,Tr=!1,oi=null,n}function L(n,e){var t=e[_i];t===void 0&&(t=e[_i]=new Set);var r=n+"__bubble";t.has(r)||(es(e,n,2,!1),t.add(r))}function jl(n,e,t){var r=0;e&&(r|=4),es(t,n,r,e)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Bt(n){if(!n[ur]){n[ur]=!0,uu.forEach(function(t){t!=="selectionchange"&&(Sp.has(t)||jl(t,!1,n),jl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ur]||(e[ur]=!0,jl("selectionchange",!1,e))}}function es(n,e,t,r){switch(Au(e)){case 1:var l=Od;break;case 4:l=Bd;break;default:l=Ji}t=l.bind(null,e,t,n),l=void 0,!ii||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function Dl(n,e,t,r,l){var i=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=ye(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue n}a=a.parentNode}}r=r.return}wu(function(){var c=i,m=Wi(t),$=[];n:{var p=bu.get(n);if(p!==void 0){var h=bi,y=n;switch(n){case"keypress":if(gr(t)===0)break n;case"keydown":case"keyup":h=Zd;break;case"focusin":y="focus",h=Cl;break;case"focusout":y="blur",h=Cl;break;case"beforeblur":case"afterblur":h=Cl;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ep;break;case Xu:case Yu:case Ju:h=Vd;break;case Zu:h=rp;break;case"scroll":h=Ad;break;case"wheel":h=ip;break;case"copy":case"cut":case"paste":h=Gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=na}var g=(e&4)!==0,D=!g&&n==="scroll",f=g?p!==null?p+"Capture":null:p;g=[];for(var s=c,d;s!==null;){d=s;var _=d.stateNode;if(d.tag===5&&_!==null&&(d=_,f!==null&&(_=Nt(s,f),_!=null&&g.push(At(s,_,d)))),D)break;s=s.return}0<g.length&&(p=new h(p,y,null,t,m),$.push({event:p,listeners:g}))}}if(!(e&7)){n:{if(p=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",p&&t!==ri&&(y=t.relatedTarget||t.fromElement)&&(ye(y)||y[Gn]))break n;if((h||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=t.relatedTarget||t.toElement,h=c,y=y?ye(y):null,y!==null&&(D=Te(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=c),h!==y)){if(g=Zo,_="onMouseLeave",f="onMouseEnter",s="mouse",(n==="pointerout"||n==="pointerover")&&(g=na,_="onPointerLeave",f="onPointerEnter",s="pointer"),D=h==null?p:Be(h),d=y==null?p:Be(y),p=new g(_,s+"leave",h,t,m),p.target=D,p.relatedTarget=d,_=null,ye(m)===c&&(g=new g(f,s+"enter",y,t,m),g.target=d,g.relatedTarget=D,_=g),D=_,h&&y)e:{for(g=h,f=y,s=0,d=g;d;d=Ne(d))s++;for(d=0,_=f;_;_=Ne(_))d++;for(;0<s-d;)g=Ne(g),s--;for(;0<d-s;)f=Ne(f),d--;for(;s--;){if(g===f||f!==null&&g===f.alternate)break e;g=Ne(g),f=Ne(f)}g=null}else g=null;h!==null&&fa($,p,h,g,!1),y!==null&&D!==null&&fa($,D,y,g,!0)}}n:{if(p=c?Be(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var z=dp;else if(ra(p))if(Qu)z=_p;else{z=$p;var w=pp}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=mp);if(z&&(z=z(n,c))){Vu($,z,t,m);break n}w&&w(n,p,c),n==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&Zl(p,"number",p.value)}switch(w=c?Be(c):window,n){case"focusin":(ra(w)||w.contentEditable==="true")&&(Le=w,ci=c,wt=null);break;case"focusout":wt=ci=Le=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,ua($,t,m);break;case"selectionchange":if(yp)break;case"keydown":case"keyup":ua($,t,m)}var x;if(eo)n:{switch(n){case"compositionstart":var C="onCompositionStart";break n;case"compositionend":C="onCompositionEnd";break n;case"compositionupdate":C="onCompositionUpdate";break n}C=void 0}else Me?Iu(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Hu&&t.locale!=="ko"&&(Me||C!=="onCompositionStart"?C==="onCompositionEnd"&&Me&&(x=Fu()):(ne=m,Zi="value"in ne?ne.value:ne.textContent,Me=!0)),w=Lr(c,C),0<w.length&&(C=new bo(C,n,null,t,m),$.push({event:C,listeners:w}),x?C.data=x:(x=Uu(t),x!==null&&(C.data=x)))),(x=ap?up(n,t):sp(n,t))&&(c=Lr(c,"onBeforeInput"),0<c.length&&(m=new bo("onBeforeInput","beforeinput",null,t,m),$.push({event:m,listeners:c}),m.data=x))}ns($,e)})}function At(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Lr(n,e){for(var t=e+"Capture",r=[];n!==null;){var l=n,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Nt(n,t),i!=null&&r.unshift(At(n,i,l)),i=Nt(n,e),i!=null&&r.push(At(n,i,l))),n=n.return}return r}function Ne(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fa(n,e,t,r,l){for(var i=e._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=Nt(t,i),u!=null&&o.unshift(At(t,u,a))):l||(u=Nt(t,i),u!=null&&o.push(At(t,u,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var kp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function da(n){return(typeof n=="string"?n:""+n).replace(kp,`
`).replace(wp,"")}function sr(n,e,t){if(e=da(e),da(n)!==e&&t)throw Error(v(425))}function Or(){}var di=null,pi=null;function $i(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mi=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(n){return pa.resolve(null).then(n).catch(Ep)}:mi;function Ep(n){setTimeout(function(){throw n})}function Ml(n,e){var t=e,r=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){n.removeChild(l),Mt(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Mt(e)}function ie(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function $a(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var it=Math.random().toString(36).slice(2),On="__reactFiber$"+it,Ft="__reactProps$"+it,Gn="__reactContainer$"+it,_i="__reactEvents$"+it,Pp="__reactListeners$"+it,Rp="__reactHandles$"+it;function ye(n){var e=n[On];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Gn]||t[On]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=$a(n);n!==null;){if(t=n[On])return t;n=$a(n)}return e}n=t,t=n.parentNode}return null}function Xt(n){return n=n[On]||n[Gn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Be(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(v(33))}function ll(n){return n[Ft]||null}var vi=[],Ae=-1;function pe(n){return{current:n}}function O(n){0>Ae||(n.current=vi[Ae],vi[Ae]=null,Ae--)}function M(n,e){Ae++,vi[Ae]=n.current,n.current=e}var fe={},rn=pe(fe),fn=pe(!1),we=fe;function Je(n,e){var t=n.type.contextTypes;if(!t)return fe;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=e[i];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=l),l}function dn(n){return n=n.childContextTypes,n!=null}function Br(){O(fn),O(rn)}function ma(n,e,t){if(rn.current!==fe)throw Error(v(168));M(rn,e),M(fn,t)}function ts(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in e))throw Error(v(108,pd(n)||"Unknown",l));return H({},t,r)}function Ar(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fe,we=rn.current,M(rn,n),M(fn,fn.current),!0}function _a(n,e,t){var r=n.stateNode;if(!r)throw Error(v(169));t?(n=ts(n,e,we),r.__reactInternalMemoizedMergedChildContext=n,O(fn),O(rn),M(rn,n)):O(fn),M(fn,t)}var Hn=null,il=!1,Ll=!1;function rs(n){Hn===null?Hn=[n]:Hn.push(n)}function Tp(n){il=!0,rs(n)}function $e(){if(!Ll&&Hn!==null){Ll=!0;var n=0,e=j;try{var t=Hn;for(j=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Hn=null,il=!1}catch(l){throw Hn!==null&&(Hn=Hn.slice(n+1)),Pu(Ki,$e),l}finally{j=e,Ll=!1}}return null}var Fe=[],He=0,Fr=null,Hr=0,gn=[],zn=0,xe=null,In=1,Un="";function ve(n,e){Fe[He++]=Hr,Fe[He++]=Fr,Fr=n,Hr=e}function ls(n,e,t){gn[zn++]=In,gn[zn++]=Un,gn[zn++]=xe,xe=n;var r=In;n=Un;var l=32-Nn(r)-1;r&=~(1<<l),t+=1;var i=32-Nn(e)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,In=1<<32-Nn(e)+l|t<<l|r,Un=i+n}else In=1<<i|t<<l|r,Un=n}function ro(n){n.return!==null&&(ve(n,1),ls(n,1,0))}function lo(n){for(;n===Fr;)Fr=Fe[--He],Fe[He]=null,Hr=Fe[--He],Fe[He]=null;for(;n===xe;)xe=gn[--zn],gn[zn]=null,Un=gn[--zn],gn[zn]=null,In=gn[--zn],gn[zn]=null}var _n=null,mn=null,B=!1,Tn=null;function is(n,e){var t=Sn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function va(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,_n=n,mn=ie(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,_n=n,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=xe!==null?{id:In,overflow:Un}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Sn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,_n=n,mn=null,!0):!1;default:return!1}}function hi(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yi(n){if(B){var e=mn;if(e){var t=e;if(!va(n,e)){if(hi(n))throw Error(v(418));e=ie(t.nextSibling);var r=_n;e&&va(n,e)?is(r,t):(n.flags=n.flags&-4097|2,B=!1,_n=n)}}else{if(hi(n))throw Error(v(418));n.flags=n.flags&-4097|2,B=!1,_n=n}}}function ha(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;_n=n}function cr(n){if(n!==_n)return!1;if(!B)return ha(n),B=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!$i(n.type,n.memoizedProps)),e&&(e=mn)){if(hi(n))throw os(),Error(v(418));for(;e;)is(n,e),e=ie(e.nextSibling)}if(ha(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){mn=ie(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}mn=null}}else mn=_n?ie(n.stateNode.nextSibling):null;return!0}function os(){for(var n=mn;n;)n=ie(n.nextSibling)}function Ze(){mn=_n=null,B=!1}function io(n){Tn===null?Tn=[n]:Tn.push(n)}var Np=Kn.ReactCurrentBatchConfig;function pt(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,n));var l=r,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof n!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,n))}return n}function fr(n,e){throw n=Object.prototype.toString.call(e),Error(v(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ya(n){var e=n._init;return e(n._payload)}function as(n){function e(f,s){if(n){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function t(f,s){if(!n)return null;for(;s!==null;)e(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=se(f,s),f.index=0,f.sibling=null,f}function i(f,s,d){return f.index=d,n?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,s,d,_){return s===null||s.tag!==6?(s=Ul(d,f.mode,_),s.return=f,s):(s=l(s,d),s.return=f,s)}function u(f,s,d,_){var z=d.type;return z===De?m(f,s,d.props.children,_,d.key):s!==null&&(s.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Yn&&ya(z)===s.type)?(_=l(s,d.props),_.ref=pt(f,s,d),_.return=f,_):(_=Er(d.type,d.key,d.props,null,f.mode,_),_.ref=pt(f,s,d),_.return=f,_)}function c(f,s,d,_){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Vl(d,f.mode,_),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function m(f,s,d,_,z){return s===null||s.tag!==7?(s=ke(d,f.mode,_,z),s.return=f,s):(s=l(s,d),s.return=f,s)}function $(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Ul(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case nr:return d=Er(s.type,s.key,s.props,null,f.mode,d),d.ref=pt(f,null,s),d.return=f,d;case je:return s=Vl(s,f.mode,d),s.return=f,s;case Yn:var _=s._init;return $(f,_(s._payload),d)}if(vt(s)||ut(s))return s=ke(s,f.mode,d,null),s.return=f,s;fr(f,s)}return null}function p(f,s,d,_){var z=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return z!==null?null:a(f,s,""+d,_);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case nr:return d.key===z?u(f,s,d,_):null;case je:return d.key===z?c(f,s,d,_):null;case Yn:return z=d._init,p(f,s,z(d._payload),_)}if(vt(d)||ut(d))return z!==null?null:m(f,s,d,_,null);fr(f,d)}return null}function h(f,s,d,_,z){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(d)||null,a(s,f,""+_,z);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case nr:return f=f.get(_.key===null?d:_.key)||null,u(s,f,_,z);case je:return f=f.get(_.key===null?d:_.key)||null,c(s,f,_,z);case Yn:var w=_._init;return h(f,s,d,w(_._payload),z)}if(vt(_)||ut(_))return f=f.get(d)||null,m(s,f,_,z,null);fr(s,_)}return null}function y(f,s,d,_){for(var z=null,w=null,x=s,C=s=0,U=null;x!==null&&C<d.length;C++){x.index>C?(U=x,x=null):U=x.sibling;var T=p(f,x,d[C],_);if(T===null){x===null&&(x=U);break}n&&x&&T.alternate===null&&e(f,x),s=i(T,s,C),w===null?z=T:w.sibling=T,w=T,x=U}if(C===d.length)return t(f,x),B&&ve(f,C),z;if(x===null){for(;C<d.length;C++)x=$(f,d[C],_),x!==null&&(s=i(x,s,C),w===null?z=x:w.sibling=x,w=x);return B&&ve(f,C),z}for(x=r(f,x);C<d.length;C++)U=h(x,f,C,d[C],_),U!==null&&(n&&U.alternate!==null&&x.delete(U.key===null?C:U.key),s=i(U,s,C),w===null?z=U:w.sibling=U,w=U);return n&&x.forEach(function(Cn){return e(f,Cn)}),B&&ve(f,C),z}function g(f,s,d,_){var z=ut(d);if(typeof z!="function")throw Error(v(150));if(d=z.call(d),d==null)throw Error(v(151));for(var w=z=null,x=s,C=s=0,U=null,T=d.next();x!==null&&!T.done;C++,T=d.next()){x.index>C?(U=x,x=null):U=x.sibling;var Cn=p(f,x,T.value,_);if(Cn===null){x===null&&(x=U);break}n&&x&&Cn.alternate===null&&e(f,x),s=i(Cn,s,C),w===null?z=Cn:w.sibling=Cn,w=Cn,x=U}if(T.done)return t(f,x),B&&ve(f,C),z;if(x===null){for(;!T.done;C++,T=d.next())T=$(f,T.value,_),T!==null&&(s=i(T,s,C),w===null?z=T:w.sibling=T,w=T);return B&&ve(f,C),z}for(x=r(f,x);!T.done;C++,T=d.next())T=h(x,f,C,T.value,_),T!==null&&(n&&T.alternate!==null&&x.delete(T.key===null?C:T.key),s=i(T,s,C),w===null?z=T:w.sibling=T,w=T);return n&&x.forEach(function(ot){return e(f,ot)}),B&&ve(f,C),z}function D(f,s,d,_){if(typeof d=="object"&&d!==null&&d.type===De&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case nr:n:{for(var z=d.key,w=s;w!==null;){if(w.key===z){if(z=d.type,z===De){if(w.tag===7){t(f,w.sibling),s=l(w,d.props.children),s.return=f,f=s;break n}}else if(w.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Yn&&ya(z)===w.type){t(f,w.sibling),s=l(w,d.props),s.ref=pt(f,w,d),s.return=f,f=s;break n}t(f,w);break}else e(f,w);w=w.sibling}d.type===De?(s=ke(d.props.children,f.mode,_,d.key),s.return=f,f=s):(_=Er(d.type,d.key,d.props,null,f.mode,_),_.ref=pt(f,s,d),_.return=f,f=_)}return o(f);case je:n:{for(w=d.key;s!==null;){if(s.key===w)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){t(f,s.sibling),s=l(s,d.children||[]),s.return=f,f=s;break n}else{t(f,s);break}else e(f,s);s=s.sibling}s=Vl(d,f.mode,_),s.return=f,f=s}return o(f);case Yn:return w=d._init,D(f,s,w(d._payload),_)}if(vt(d))return y(f,s,d,_);if(ut(d))return g(f,s,d,_);fr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(t(f,s.sibling),s=l(s,d),s.return=f,f=s):(t(f,s),s=Ul(d,f.mode,_),s.return=f,f=s),o(f)):t(f,s)}return D}var be=as(!0),us=as(!1),Ir=pe(null),Ur=null,Ie=null,oo=null;function ao(){oo=Ie=Ur=null}function uo(n){var e=Ir.current;O(Ir),n._currentValue=e}function gi(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Ke(n,e){Ur=n,oo=Ie=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(cn=!0),n.firstContext=null)}function wn(n){var e=n._currentValue;if(oo!==n)if(n={context:n,memoizedValue:e,next:null},Ie===null){if(Ur===null)throw Error(v(308));Ie=n,Ur.dependencies={lanes:0,firstContext:n}}else Ie=Ie.next=n;return e}var ge=null;function so(n){ge===null?ge=[n]:ge.push(n)}function ss(n,e,t,r){var l=e.interleaved;return l===null?(t.next=t,so(e)):(t.next=l.next,l.next=t),e.interleaved=t,qn(n,r)}function qn(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Jn=!1;function co(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cs(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function oe(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,N&2){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,qn(n,t)}return l=r.interleaved,l===null?(e.next=e,so(r)):(e.next=l.next,l.next=e),r.interleaved=e,qn(n,t)}function zr(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Xi(n,t)}}function ga(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=e:i=i.next=e}else l=i=e;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Vr(n,e,t,r){var l=n.updateQueue;Jn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var m=n.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(i!==null){var $=l.baseState;o=0,m=c=u=null,a=i;do{var p=a.lane,h=a.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});n:{var y=n,g=a;switch(p=e,h=t,g.tag){case 1:if(y=g.payload,typeof y=="function"){$=y.call(h,$,p);break n}$=y;break n;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,p=typeof y=="function"?y.call(h,$,p):y,p==null)break n;$=H({},$,p);break n;case 2:Jn=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,p=l.effects,p===null?l.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=h,u=$):m=m.next=h,o|=p;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;p=a,a=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(m===null&&(u=$),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=m,e=l.shared.interleaved,e!==null){l=e;do o|=l.lane,l=l.next;while(l!==e)}else i===null&&(l.shared.lanes=0);Ee|=o,n.lanes=o,n.memoizedState=$}}function za(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var Yt={},An=pe(Yt),Ht=pe(Yt),It=pe(Yt);function ze(n){if(n===Yt)throw Error(v(174));return n}function fo(n,e){switch(M(It,e),M(Ht,n),M(An,Yt),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ni(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ni(e,n)}O(An),M(An,e)}function nt(){O(An),O(Ht),O(It)}function fs(n){ze(It.current);var e=ze(An.current),t=ni(e,n.type);e!==t&&(M(Ht,n),M(An,t))}function po(n){Ht.current===n&&(O(An),O(Ht))}var A=pe(0);function Qr(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ol=[];function $o(){for(var n=0;n<Ol.length;n++)Ol[n]._workInProgressVersionPrimary=null;Ol.length=0}var Sr=Kn.ReactCurrentDispatcher,Bl=Kn.ReactCurrentBatchConfig,Ce=0,F=null,q=null,X=null,Gr=!1,xt=!1,Ut=0,jp=0;function nn(){throw Error(v(321))}function mo(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Dn(n[t],e[t]))return!1;return!0}function _o(n,e,t,r,l,i){if(Ce=i,F=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sr.current=n===null||n.memoizedState===null?Op:Bp,n=t(r,l),xt){i=0;do{if(xt=!1,Ut=0,25<=i)throw Error(v(301));i+=1,X=q=null,e.updateQueue=null,Sr.current=Ap,n=t(r,l)}while(xt)}if(Sr.current=qr,e=q!==null&&q.next!==null,Ce=0,X=q=F=null,Gr=!1,e)throw Error(v(300));return n}function vo(){var n=Ut!==0;return Ut=0,n}function Ln(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?F.memoizedState=X=n:X=X.next=n,X}function xn(){if(q===null){var n=F.alternate;n=n!==null?n.memoizedState:null}else n=q.next;var e=X===null?F.memoizedState:X.next;if(e!==null)X=e,q=n;else{if(n===null)throw Error(v(310));q=n,n={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},X===null?F.memoizedState=X=n:X=X.next=n}return X}function Vt(n,e){return typeof e=="function"?e(n):e}function Al(n){var e=xn(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var r=q,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,c=i;do{var m=c.lane;if((Ce&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:n(r,c.action);else{var $={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=$,o=r):u=u.next=$,F.lanes|=m,Ee|=m}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,Dn(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){l=n;do i=l.lane,F.lanes|=i,Ee|=i,l=l.next;while(l!==n)}else l===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Fl(n){var e=xn(),t=e.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=n;var r=t.dispatch,l=t.pending,i=e.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=n(i,o.action),o=o.next;while(o!==l);Dn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function ds(){}function ps(n,e){var t=F,r=xn(),l=e(),i=!Dn(r.memoizedState,l);if(i&&(r.memoizedState=l,cn=!0),r=r.queue,ho(_s.bind(null,t,r,n),[n]),r.getSnapshot!==e||i||X!==null&&X.memoizedState.tag&1){if(t.flags|=2048,Qt(9,ms.bind(null,t,r,l,e),void 0,null),Y===null)throw Error(v(349));Ce&30||$s(t,e,l)}return l}function $s(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=F.updateQueue,e===null?(e={lastEffect:null,stores:null},F.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ms(n,e,t,r){e.value=t,e.getSnapshot=r,vs(e)&&hs(n)}function _s(n,e,t){return t(function(){vs(e)&&hs(n)})}function vs(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Dn(n,t)}catch{return!0}}function hs(n){var e=qn(n,1);e!==null&&jn(e,n,1,-1)}function Sa(n){var e=Ln();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:n},e.queue=n,n=n.dispatch=Lp.bind(null,F,n),[e.memoizedState,n]}function Qt(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=F.updateQueue,e===null?(e={lastEffect:null,stores:null},F.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function ys(){return xn().memoizedState}function kr(n,e,t,r){var l=Ln();F.flags|=n,l.memoizedState=Qt(1|e,t,void 0,r===void 0?null:r)}function ol(n,e,t,r){var l=xn();r=r===void 0?null:r;var i=void 0;if(q!==null){var o=q.memoizedState;if(i=o.destroy,r!==null&&mo(r,o.deps)){l.memoizedState=Qt(e,t,i,r);return}}F.flags|=n,l.memoizedState=Qt(1|e,t,i,r)}function ka(n,e){return kr(8390656,8,n,e)}function ho(n,e){return ol(2048,8,n,e)}function gs(n,e){return ol(4,2,n,e)}function zs(n,e){return ol(4,4,n,e)}function Ss(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ks(n,e,t){return t=t!=null?t.concat([n]):null,ol(4,4,Ss.bind(null,e,n),t)}function yo(){}function ws(n,e){var t=xn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&mo(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function xs(n,e){var t=xn();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&mo(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function Cs(n,e,t){return Ce&21?(Dn(t,e)||(t=Nu(),F.lanes|=t,Ee|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,cn=!0),n.memoizedState=t)}function Dp(n,e){var t=j;j=t!==0&&4>t?t:4,n(!0);var r=Bl.transition;Bl.transition={};try{n(!1),e()}finally{j=t,Bl.transition=r}}function Es(){return xn().memoizedState}function Mp(n,e,t){var r=ue(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ps(n))Rs(e,t);else if(t=ss(n,e,t,r),t!==null){var l=on();jn(t,n,r,l),Ts(t,e,r)}}function Lp(n,e,t){var r=ue(n),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ps(n))Rs(e,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,Dn(a,o)){var u=e.interleaved;u===null?(l.next=l,so(e)):(l.next=u.next,u.next=l),e.interleaved=l;return}}catch{}finally{}t=ss(n,e,l,r),t!==null&&(l=on(),jn(t,n,r,l),Ts(t,e,r))}}function Ps(n){var e=n.alternate;return n===F||e!==null&&e===F}function Rs(n,e){xt=Gr=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ts(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Xi(n,t)}}var qr={readContext:wn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},Op={readContext:wn,useCallback:function(n,e){return Ln().memoizedState=[n,e===void 0?null:e],n},useContext:wn,useEffect:ka,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,kr(4194308,4,Ss.bind(null,e,n),t)},useLayoutEffect:function(n,e){return kr(4194308,4,n,e)},useInsertionEffect:function(n,e){return kr(4,2,n,e)},useMemo:function(n,e){var t=Ln();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Ln();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=Mp.bind(null,F,n),[r.memoizedState,n]},useRef:function(n){var e=Ln();return n={current:n},e.memoizedState=n},useState:Sa,useDebugValue:yo,useDeferredValue:function(n){return Ln().memoizedState=n},useTransition:function(){var n=Sa(!1),e=n[0];return n=Dp.bind(null,n[1]),Ln().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=F,l=Ln();if(B){if(t===void 0)throw Error(v(407));t=t()}else{if(t=e(),Y===null)throw Error(v(349));Ce&30||$s(r,e,t)}l.memoizedState=t;var i={value:t,getSnapshot:e};return l.queue=i,ka(_s.bind(null,r,i,n),[n]),r.flags|=2048,Qt(9,ms.bind(null,r,i,t,e),void 0,null),t},useId:function(){var n=Ln(),e=Y.identifierPrefix;if(B){var t=Un,r=In;t=(r&~(1<<32-Nn(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ut++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jp++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Bp={readContext:wn,useCallback:ws,useContext:wn,useEffect:ho,useImperativeHandle:ks,useInsertionEffect:gs,useLayoutEffect:zs,useMemo:xs,useReducer:Al,useRef:ys,useState:function(){return Al(Vt)},useDebugValue:yo,useDeferredValue:function(n){var e=xn();return Cs(e,q.memoizedState,n)},useTransition:function(){var n=Al(Vt)[0],e=xn().memoizedState;return[n,e]},useMutableSource:ds,useSyncExternalStore:ps,useId:Es,unstable_isNewReconciler:!1},Ap={readContext:wn,useCallback:ws,useContext:wn,useEffect:ho,useImperativeHandle:ks,useInsertionEffect:gs,useLayoutEffect:zs,useMemo:xs,useReducer:Fl,useRef:ys,useState:function(){return Fl(Vt)},useDebugValue:yo,useDeferredValue:function(n){var e=xn();return q===null?e.memoizedState=n:Cs(e,q.memoizedState,n)},useTransition:function(){var n=Fl(Vt)[0],e=xn().memoizedState;return[n,e]},useMutableSource:ds,useSyncExternalStore:ps,useId:Es,unstable_isNewReconciler:!1};function Pn(n,e){if(n&&n.defaultProps){e=H({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function zi(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:H({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var al={isMounted:function(n){return(n=n._reactInternals)?Te(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=on(),l=ue(n),i=Vn(r,l);i.payload=e,t!=null&&(i.callback=t),e=oe(n,i,l),e!==null&&(jn(e,n,l,r),zr(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=on(),l=ue(n),i=Vn(r,l);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=oe(n,i,l),e!==null&&(jn(e,n,l,r),zr(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=on(),r=ue(n),l=Vn(t,r);l.tag=2,e!=null&&(l.callback=e),e=oe(n,l,r),e!==null&&(jn(e,n,r,t),zr(e,n,r))}};function wa(n,e,t,r,l,i,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ot(t,r)||!Ot(l,i):!0}function Ns(n,e,t){var r=!1,l=fe,i=e.contextType;return typeof i=="object"&&i!==null?i=wn(i):(l=dn(e)?we:rn.current,r=e.contextTypes,i=(r=r!=null)?Je(n,l):fe),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=al,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=l,n.__reactInternalMemoizedMaskedChildContext=i),e}function xa(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&al.enqueueReplaceState(e,e.state,null)}function Si(n,e,t,r){var l=n.stateNode;l.props=t,l.state=n.memoizedState,l.refs={},co(n);var i=e.contextType;typeof i=="object"&&i!==null?l.context=wn(i):(i=dn(e)?we:rn.current,l.context=Je(n,i)),l.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(zi(n,e,i,t),l.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&al.enqueueReplaceState(l,l.state,null),Vr(n,t,l,r),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308)}function et(n,e){try{var t="",r=e;do t+=dd(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:l,digest:null}}function Hl(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ki(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Fp=typeof WeakMap=="function"?WeakMap:Map;function js(n,e,t){t=Vn(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Kr||(Kr=!0,Di=r),ki(n,e)},t}function Ds(n,e,t){t=Vn(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var l=e.value;t.payload=function(){return r(l)},t.callback=function(){ki(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){ki(n,e),typeof r!="function"&&(ae===null?ae=new Set([this]):ae.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Ca(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Fp;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(t)||(l.add(t),n=bp.bind(null,n,e,t),e.then(n,n))}function Ea(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Pa(n,e,t,r,l){return n.mode&1?(n.flags|=65536,n.lanes=l,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vn(-1,1),e.tag=2,oe(t,e,1))),t.lanes|=1),n)}var Hp=Kn.ReactCurrentOwner,cn=!1;function ln(n,e,t,r){e.child=n===null?us(e,null,t,r):be(e,n.child,t,r)}function Ra(n,e,t,r,l){t=t.render;var i=e.ref;return Ke(e,l),r=_o(n,e,t,r,i,l),t=vo(),n!==null&&!cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,Wn(n,e,l)):(B&&t&&ro(e),e.flags|=1,ln(n,e,r,l),e.child)}function Ta(n,e,t,r,l){if(n===null){var i=t.type;return typeof i=="function"&&!Eo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Ms(n,e,i,r,l)):(n=Er(t.type,null,r,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ot,t(o,r)&&n.ref===e.ref)return Wn(n,e,l)}return e.flags|=1,n=se(i,r),n.ref=e.ref,n.return=e,e.child=n}function Ms(n,e,t,r,l){if(n!==null){var i=n.memoizedProps;if(Ot(i,r)&&n.ref===e.ref)if(cn=!1,e.pendingProps=r=i,(n.lanes&l)!==0)n.flags&131072&&(cn=!0);else return e.lanes=n.lanes,Wn(n,e,l)}return wi(n,e,t,r,l)}function Ls(n,e,t){var r=e.pendingProps,l=r.children,i=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Ve,$n),$n|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,M(Ve,$n),$n|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,M(Ve,$n),$n|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,M(Ve,$n),$n|=r;return ln(n,e,l,t),e.child}function Os(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function wi(n,e,t,r,l){var i=dn(t)?we:rn.current;return i=Je(e,i),Ke(e,l),t=_o(n,e,t,r,i,l),r=vo(),n!==null&&!cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,Wn(n,e,l)):(B&&r&&ro(e),e.flags|=1,ln(n,e,t,l),e.child)}function Na(n,e,t,r,l){if(dn(t)){var i=!0;Ar(e)}else i=!1;if(Ke(e,l),e.stateNode===null)wr(n,e),Ns(e,t,r),Si(e,t,r,l),r=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=dn(t)?we:rn.current,c=Je(e,c));var m=t.getDerivedStateFromProps,$=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";$||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&xa(e,o,r,c),Jn=!1;var p=e.memoizedState;o.state=p,Vr(e,r,o,l),u=e.memoizedState,a!==r||p!==u||fn.current||Jn?(typeof m=="function"&&(zi(e,t,m,r),u=e.memoizedState),(a=Jn||wa(e,t,a,r,p,u,c))?($||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cs(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,$=e.pendingProps,p=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=wn(u):(u=dn(t)?we:rn.current,u=Je(e,u));var h=t.getDerivedStateFromProps;(m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==$||p!==u)&&xa(e,o,r,u),Jn=!1,p=e.memoizedState,o.state=p,Vr(e,r,o,l);var y=e.memoizedState;a!==$||p!==y||fn.current||Jn?(typeof h=="function"&&(zi(e,t,h,r),y=e.memoizedState),(c=Jn||wa(e,t,c,r,p,y,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),r=!1)}return xi(n,e,t,r,i,l)}function xi(n,e,t,r,l,i){Os(n,e);var o=(e.flags&128)!==0;if(!r&&!o)return l&&_a(e,t,!1),Wn(n,e,i);r=e.stateNode,Hp.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&o?(e.child=be(e,n.child,null,i),e.child=be(e,null,a,i)):ln(n,e,a,i),e.memoizedState=r.state,l&&_a(e,t,!0),e.child}function Bs(n){var e=n.stateNode;e.pendingContext?ma(n,e.pendingContext,e.pendingContext!==e.context):e.context&&ma(n,e.context,!1),fo(n,e.containerInfo)}function ja(n,e,t,r,l){return Ze(),io(l),e.flags|=256,ln(n,e,t,r),e.child}var Ci={dehydrated:null,treeContext:null,retryLane:0};function Ei(n){return{baseLanes:n,cachePool:null,transitions:null}}function As(n,e,t){var r=e.pendingProps,l=A.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(l&2)!==0),a?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(l|=1),M(A,l&1),n===null)return yi(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,n=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=cl(o,r,0,null),n=ke(n,r,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=Ei(t),e.memoizedState=Ci,n):go(e,o));if(l=n.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Ip(n,e,o,r,a,l,t);if(i){i=r.fallback,o=e.mode,l=n.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==l?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=se(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=se(a,i):(i=ke(i,o,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=n.child.memoizedState,o=o===null?Ei(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=n.childLanes&~t,e.memoizedState=Ci,r}return i=n.child,n=i.sibling,r=se(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function go(n,e){return e=cl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function dr(n,e,t,r){return r!==null&&io(r),be(e,n.child,null,t),n=go(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ip(n,e,t,r,l,i,o){if(t)return e.flags&256?(e.flags&=-257,r=Hl(Error(v(422))),dr(n,e,o,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=r.fallback,l=e.mode,r=cl({mode:"visible",children:r.children},l,0,null),i=ke(i,l,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&be(e,n.child,null,o),e.child.memoizedState=Ei(o),e.memoizedState=Ci,i);if(!(e.mode&1))return dr(n,e,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(v(419)),r=Hl(i,r,void 0),dr(n,e,o,r)}if(a=(o&n.childLanes)!==0,cn||a){if(r=Y,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,qn(n,l),jn(r,n,l,-1))}return Co(),r=Hl(Error(v(421))),dr(n,e,o,r)}return l.data==="$?"?(e.flags|=128,e.child=n.child,e=n$.bind(null,n),l._reactRetry=e,null):(n=i.treeContext,mn=ie(l.nextSibling),_n=e,B=!0,Tn=null,n!==null&&(gn[zn++]=In,gn[zn++]=Un,gn[zn++]=xe,In=n.id,Un=n.overflow,xe=e),e=go(e,r.children),e.flags|=4096,e)}function Da(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),gi(n.return,e,t)}function Il(n,e,t,r,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Fs(n,e,t){var r=e.pendingProps,l=r.revealOrder,i=r.tail;if(ln(n,e,r.children,t),r=A.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Da(n,t,e);else if(n.tag===19)Da(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(M(A,r),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(t=e.child,l=null;t!==null;)n=t.alternate,n!==null&&Qr(n)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Il(e,!1,l,t,i);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Qr(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}Il(e,!0,t,null,i);break;case"together":Il(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wr(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Wn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ee|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(v(153));if(e.child!==null){for(n=e.child,t=se(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=se(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Up(n,e,t){switch(e.tag){case 3:Bs(e),Ze();break;case 5:fs(e);break;case 1:dn(e.type)&&Ar(e);break;case 4:fo(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,l=e.memoizedProps.value;M(Ir,r._currentValue),r._currentValue=l;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(M(A,A.current&1),e.flags|=128,null):t&e.child.childLanes?As(n,e,t):(M(A,A.current&1),n=Wn(n,e,t),n!==null?n.sibling:null);M(A,A.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return Fs(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(A,A.current),r)break;return null;case 22:case 23:return e.lanes=0,Ls(n,e,t)}return Wn(n,e,t)}var Hs,Pi,Is,Us;Hs=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Pi=function(){};Is=function(n,e,t,r){var l=n.memoizedProps;if(l!==r){n=e.stateNode,ze(An.current);var i=null;switch(t){case"input":l=Yl(n,l),r=Yl(n,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=bl(n,l),r=bl(n,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Or)}ei(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rt.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rt.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&L("scroll",n),i||a===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Us=function(n,e,t,r){t!==r&&(e.flags|=4)};function $t(n,e){if(!B)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function en(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function Vp(n,e,t){var r=e.pendingProps;switch(lo(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return dn(e.type)&&Br(),en(e),null;case 3:return r=e.stateNode,nt(),O(fn),O(rn),$o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(cr(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(Oi(Tn),Tn=null))),Pi(n,e),en(e),null;case 5:po(e);var l=ze(It.current);if(t=e.type,n!==null&&e.stateNode!=null)Is(n,e,t,r,l),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(v(166));return en(e),null}if(n=ze(An.current),cr(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[On]=e,r[Ft]=i,n=(e.mode&1)!==0,t){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(l=0;l<yt.length;l++)L(yt[l],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":Uo(r,i),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},L("invalid",r);break;case"textarea":Qo(r,i),L("invalid",r)}ei(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&sr(r.textContent,a,n),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&sr(r.textContent,a,n),l=["children",""+a]):Rt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&L("scroll",r)}switch(t){case"input":er(r),Vo(r,i,!0);break;case"textarea":er(r),Go(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Or)}r=l,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_u(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=o.createElement(t,{is:r.is}):(n=o.createElement(t),t==="select"&&(o=n,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):n=o.createElementNS(n,t),n[On]=e,n[Ft]=r,Hs(n,e,!1,!1),e.stateNode=n;n:{switch(o=ti(t,r),t){case"dialog":L("cancel",n),L("close",n),l=r;break;case"iframe":case"object":case"embed":L("load",n),l=r;break;case"video":case"audio":for(l=0;l<yt.length;l++)L(yt[l],n);l=r;break;case"source":L("error",n),l=r;break;case"img":case"image":case"link":L("error",n),L("load",n),l=r;break;case"details":L("toggle",n),l=r;break;case"input":Uo(n,r),l=Yl(n,r),L("invalid",n);break;case"option":l=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),L("invalid",n);break;case"textarea":Qo(n,r),l=bl(n,r),L("invalid",n);break;default:l=r}ei(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?yu(n,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vu(n,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Tt(n,u):typeof u=="number"&&Tt(n,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rt.hasOwnProperty(i)?u!=null&&i==="onScroll"&&L("scroll",n):u!=null&&Vi(n,i,u,o))}switch(t){case"input":er(n),Vo(n,r,!1);break;case"textarea":er(n),Go(n);break;case"option":r.value!=null&&n.setAttribute("value",""+ce(r.value));break;case"select":n.multiple=!!r.multiple,i=r.value,i!=null?Qe(n,!!r.multiple,i,!1):r.defaultValue!=null&&Qe(n,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(n.onclick=Or)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(n&&e.stateNode!=null)Us(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(v(166));if(t=ze(It.current),ze(An.current),cr(e)){if(r=e.stateNode,t=e.memoizedProps,r[On]=e,(i=r.nodeValue!==t)&&(n=_n,n!==null))switch(n.tag){case 3:sr(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sr(r.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return en(e),null;case 13:if(O(A),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(B&&mn!==null&&e.mode&1&&!(e.flags&128))os(),Ze(),e.flags|=98560,i=!1;else if(i=cr(e),r!==null&&r.dehydrated!==null){if(n===null){if(!i)throw Error(v(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[On]=e}else Ze(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),i=!1}else Tn!==null&&(Oi(Tn),Tn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||A.current&1?W===0&&(W=3):Co())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return nt(),Pi(n,e),n===null&&Bt(e.stateNode.containerInfo),en(e),null;case 10:return uo(e.type._context),en(e),null;case 17:return dn(e.type)&&Br(),en(e),null;case 19:if(O(A),i=e.memoizedState,i===null)return en(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)$t(i,!1);else{if(W!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Qr(n),o!==null){for(e.flags|=128,$t(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,n=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,n=o.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return M(A,A.current&1|2),e.child}n=n.sibling}i.tail!==null&&Q()>tt&&(e.flags|=128,r=!0,$t(i,!1),e.lanes=4194304)}else{if(!r)if(n=Qr(o),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),$t(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!B)return en(e),null}else 2*Q()-i.renderingStartTime>tt&&t!==1073741824&&(e.flags|=128,r=!0,$t(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Q(),e.sibling=null,t=A.current,M(A,r?t&1|2:t&1),e):(en(e),null);case 22:case 23:return xo(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$n&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function Qp(n,e){switch(lo(e),e.tag){case 1:return dn(e.type)&&Br(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return nt(),O(fn),O(rn),$o(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return po(e),null;case 13:if(O(A),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Ze()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return O(A),null;case 4:return nt(),null;case 10:return uo(e.type._context),null;case 22:case 23:return xo(),null;case 24:return null;default:return null}}var pr=!1,tn=!1,Gp=typeof WeakSet=="function"?WeakSet:Set,S=null;function Ue(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){I(n,e,r)}else t.current=null}function Ri(n,e,t){try{t()}catch(r){I(n,e,r)}}var Ma=!1;function qp(n,e){if(di=Dr,n=Wu(),to(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var o=0,a=-1,u=-1,c=0,m=0,$=n,p=null;e:for(;;){for(var h;$!==t||l!==0&&$.nodeType!==3||(a=o+l),$!==i||r!==0&&$.nodeType!==3||(u=o+r),$.nodeType===3&&(o+=$.nodeValue.length),(h=$.firstChild)!==null;)p=$,$=h;for(;;){if($===n)break e;if(p===t&&++c===l&&(a=o),p===i&&++m===r&&(u=o),(h=$.nextSibling)!==null)break;$=p,p=$.parentNode}$=h}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(pi={focusedElem:n,selectionRange:t},Dr=!1,S=e;S!==null;)if(e=S,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,S=n;else for(;S!==null;){e=S;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,D=y.memoizedState,f=e.stateNode,s=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:Pn(e.type,g),D);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(_){I(e,e.return,_)}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}return y=Ma,Ma=!1,y}function Ct(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ri(e,t,i)}l=l.next}while(l!==r)}}function ul(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Ti(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Vs(n){var e=n.alternate;e!==null&&(n.alternate=null,Vs(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[On],delete e[Ft],delete e[_i],delete e[Pp],delete e[Rp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qs(n){return n.tag===5||n.tag===3||n.tag===4}function La(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Qs(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ni(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Or));else if(r!==4&&(n=n.child,n!==null))for(Ni(n,e,t),n=n.sibling;n!==null;)Ni(n,e,t),n=n.sibling}function ji(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(ji(n,e,t),n=n.sibling;n!==null;)ji(n,e,t),n=n.sibling}var J=null,Rn=!1;function Xn(n,e,t){for(t=t.child;t!==null;)Gs(n,e,t),t=t.sibling}function Gs(n,e,t){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 5:tn||Ue(t,e);case 6:var r=J,l=Rn;J=null,Xn(n,e,t),J=r,Rn=l,J!==null&&(Rn?(n=J,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Rn?(n=J,t=t.stateNode,n.nodeType===8?Ml(n.parentNode,t):n.nodeType===1&&Ml(n,t),Mt(n)):Ml(J,t.stateNode));break;case 4:r=J,l=Rn,J=t.stateNode.containerInfo,Rn=!0,Xn(n,e,t),J=r,Rn=l;break;case 0:case 11:case 14:case 15:if(!tn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ri(t,e,o),l=l.next}while(l!==r)}Xn(n,e,t);break;case 1:if(!tn&&(Ue(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){I(t,e,a)}Xn(n,e,t);break;case 21:Xn(n,e,t);break;case 22:t.mode&1?(tn=(r=tn)||t.memoizedState!==null,Xn(n,e,t),tn=r):Xn(n,e,t);break;default:Xn(n,e,t)}}function Oa(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Gp),e.forEach(function(r){var l=e$.bind(null,n,r);t.has(r)||(t.add(r),r.then(l,l))})}}function En(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=n,o=e,a=o;n:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Rn=!1;break n;case 3:J=a.stateNode.containerInfo,Rn=!0;break n;case 4:J=a.stateNode.containerInfo,Rn=!0;break n}a=a.return}if(J===null)throw Error(v(160));Gs(i,o,l),J=null,Rn=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){I(l,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qs(e,n),e=e.sibling}function qs(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(En(e,n),Mn(n),r&4){try{Ct(3,n,n.return),ul(3,n)}catch(g){I(n,n.return,g)}try{Ct(5,n,n.return)}catch(g){I(n,n.return,g)}}break;case 1:En(e,n),Mn(n),r&512&&t!==null&&Ue(t,t.return);break;case 5:if(En(e,n),Mn(n),r&512&&t!==null&&Ue(t,t.return),n.flags&32){var l=n.stateNode;try{Tt(l,"")}catch(g){I(n,n.return,g)}}if(r&4&&(l=n.stateNode,l!=null)){var i=n.memoizedProps,o=t!==null?t.memoizedProps:i,a=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&$u(l,i),ti(a,o);var c=ti(a,i);for(o=0;o<u.length;o+=2){var m=u[o],$=u[o+1];m==="style"?yu(l,$):m==="dangerouslySetInnerHTML"?vu(l,$):m==="children"?Tt(l,$):Vi(l,m,$,c)}switch(a){case"input":Jl(l,i);break;case"textarea":mu(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Qe(l,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?Qe(l,!!i.multiple,i.defaultValue,!0):Qe(l,!!i.multiple,i.multiple?[]:"",!1))}l[Ft]=i}catch(g){I(n,n.return,g)}}break;case 6:if(En(e,n),Mn(n),r&4){if(n.stateNode===null)throw Error(v(162));l=n.stateNode,i=n.memoizedProps;try{l.nodeValue=i}catch(g){I(n,n.return,g)}}break;case 3:if(En(e,n),Mn(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Mt(e.containerInfo)}catch(g){I(n,n.return,g)}break;case 4:En(e,n),Mn(n);break;case 13:En(e,n),Mn(n),l=n.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ko=Q())),r&4&&Oa(n);break;case 22:if(m=t!==null&&t.memoizedState!==null,n.mode&1?(tn=(c=tn)||m,En(e,n),tn=c):En(e,n),Mn(n),r&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!m&&n.mode&1)for(S=n,m=n.child;m!==null;){for($=S=m;S!==null;){switch(p=S,h=p.child,p.tag){case 0:case 11:case 14:case 15:Ct(4,p,p.return);break;case 1:Ue(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,t=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(g){I(r,t,g)}}break;case 5:Ue(p,p.return);break;case 22:if(p.memoizedState!==null){Aa($);continue}}h!==null?(h.return=p,S=h):Aa($)}m=m.sibling}n:for(m=null,$=n;;){if($.tag===5){if(m===null){m=$;try{l=$.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=$.stateNode,u=$.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=hu("display",o))}catch(g){I(n,n.return,g)}}}else if($.tag===6){if(m===null)try{$.stateNode.nodeValue=c?"":$.memoizedProps}catch(g){I(n,n.return,g)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===n)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===n)break n;for(;$.sibling===null;){if($.return===null||$.return===n)break n;m===$&&(m=null),$=$.return}m===$&&(m=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:En(e,n),Mn(n),r&4&&Oa(n);break;case 21:break;default:En(e,n),Mn(n)}}function Mn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Qs(t)){var r=t;break n}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Tt(l,""),r.flags&=-33);var i=La(n);ji(n,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=La(n);Ni(n,a,o);break;default:throw Error(v(161))}}catch(u){I(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Wp(n,e,t){S=n,Ws(n)}function Ws(n,e,t){for(var r=(n.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||pr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||tn;a=pr;var c=tn;if(pr=o,(tn=u)&&!c)for(S=l;S!==null;)o=S,u=o.child,o.tag===22&&o.memoizedState!==null?Fa(l):u!==null?(u.return=o,S=u):Fa(l);for(;i!==null;)S=i,Ws(i),i=i.sibling;S=l,pr=a,tn=c}Ba(n)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Ba(n)}}function Ba(n){for(;S!==null;){var e=S;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tn)if(t===null)r.componentDidMount();else{var l=e.elementType===e.type?t.memoizedProps:Pn(e.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&za(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}za(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var $=m.dehydrated;$!==null&&Mt($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}tn||e.flags&512&&Ti(e)}catch(p){I(e,e.return,p)}}if(e===n){S=null;break}if(t=e.sibling,t!==null){t.return=e.return,S=t;break}S=e.return}}function Aa(n){for(;S!==null;){var e=S;if(e===n){S=null;break}var t=e.sibling;if(t!==null){t.return=e.return,S=t;break}S=e.return}}function Fa(n){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ul(4,e)}catch(u){I(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var l=e.return;try{r.componentDidMount()}catch(u){I(e,l,u)}}var i=e.return;try{Ti(e)}catch(u){I(e,i,u)}break;case 5:var o=e.return;try{Ti(e)}catch(u){I(e,o,u)}}}catch(u){I(e,e.return,u)}if(e===n){S=null;break}var a=e.sibling;if(a!==null){a.return=e.return,S=a;break}S=e.return}}var Kp=Math.ceil,Wr=Kn.ReactCurrentDispatcher,zo=Kn.ReactCurrentOwner,kn=Kn.ReactCurrentBatchConfig,N=0,Y=null,G=null,Z=0,$n=0,Ve=pe(0),W=0,Gt=null,Ee=0,sl=0,So=0,Et=null,sn=null,ko=0,tt=1/0,Fn=null,Kr=!1,Di=null,ae=null,$r=!1,ee=null,Xr=0,Pt=0,Mi=null,xr=-1,Cr=0;function on(){return N&6?Q():xr!==-1?xr:xr=Q()}function ue(n){return n.mode&1?N&2&&Z!==0?Z&-Z:Np.transition!==null?(Cr===0&&(Cr=Nu()),Cr):(n=j,n!==0||(n=window.event,n=n===void 0?16:Au(n.type)),n):1}function jn(n,e,t,r){if(50<Pt)throw Pt=0,Mi=null,Error(v(185));Wt(n,t,r),(!(N&2)||n!==Y)&&(n===Y&&(!(N&2)&&(sl|=t),W===4&&bn(n,Z)),pn(n,r),t===1&&N===0&&!(e.mode&1)&&(tt=Q()+500,il&&$e()))}function pn(n,e){var t=n.callbackNode;Nd(n,e);var r=jr(n,n===Y?Z:0);if(r===0)t!==null&&Ko(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&Ko(t),e===1)n.tag===0?Tp(Ha.bind(null,n)):rs(Ha.bind(null,n)),Cp(function(){!(N&6)&&$e()}),t=null;else{switch(ju(r)){case 1:t=Ki;break;case 4:t=Ru;break;case 16:t=Nr;break;case 536870912:t=Tu;break;default:t=Nr}t=ec(t,Ks.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ks(n,e){if(xr=-1,Cr=0,N&6)throw Error(v(327));var t=n.callbackNode;if(Xe()&&n.callbackNode!==t)return null;var r=jr(n,n===Y?Z:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Yr(n,r);else{e=r;var l=N;N|=2;var i=Ys();(Y!==n||Z!==e)&&(Fn=null,tt=Q()+500,Se(n,e));do try{Jp();break}catch(a){Xs(n,a)}while(!0);ao(),Wr.current=i,N=l,G!==null?e=0:(Y=null,Z=0,e=W)}if(e!==0){if(e===2&&(l=ai(n),l!==0&&(r=l,e=Li(n,l))),e===1)throw t=Gt,Se(n,0),bn(n,r),pn(n,Q()),t;if(e===6)bn(n,r);else{if(l=n.current.alternate,!(r&30)&&!Xp(l)&&(e=Yr(n,r),e===2&&(i=ai(n),i!==0&&(r=i,e=Li(n,i))),e===1))throw t=Gt,Se(n,0),bn(n,r),pn(n,Q()),t;switch(n.finishedWork=l,n.finishedLanes=r,e){case 0:case 1:throw Error(v(345));case 2:he(n,sn,Fn);break;case 3:if(bn(n,r),(r&130023424)===r&&(e=ko+500-Q(),10<e)){if(jr(n,0)!==0)break;if(l=n.suspendedLanes,(l&r)!==r){on(),n.pingedLanes|=n.suspendedLanes&l;break}n.timeoutHandle=mi(he.bind(null,n,sn,Fn),e);break}he(n,sn,Fn);break;case 4:if(bn(n,r),(r&4194240)===r)break;for(e=n.eventTimes,l=-1;0<r;){var o=31-Nn(r);i=1<<o,o=e[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kp(r/1960))-r,10<r){n.timeoutHandle=mi(he.bind(null,n,sn,Fn),r);break}he(n,sn,Fn);break;case 5:he(n,sn,Fn);break;default:throw Error(v(329))}}}return pn(n,Q()),n.callbackNode===t?Ks.bind(null,n):null}function Li(n,e){var t=Et;return n.current.memoizedState.isDehydrated&&(Se(n,e).flags|=256),n=Yr(n,e),n!==2&&(e=sn,sn=t,e!==null&&Oi(e)),n}function Oi(n){sn===null?sn=n:sn.push.apply(sn,n)}function Xp(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Dn(i(),l))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(n,e){for(e&=~So,e&=~sl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Nn(e),r=1<<t;n[t]=-1,e&=~r}}function Ha(n){if(N&6)throw Error(v(327));Xe();var e=jr(n,0);if(!(e&1))return pn(n,Q()),null;var t=Yr(n,e);if(n.tag!==0&&t===2){var r=ai(n);r!==0&&(e=r,t=Li(n,r))}if(t===1)throw t=Gt,Se(n,0),bn(n,e),pn(n,Q()),t;if(t===6)throw Error(v(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,he(n,sn,Fn),pn(n,Q()),null}function wo(n,e){var t=N;N|=1;try{return n(e)}finally{N=t,N===0&&(tt=Q()+500,il&&$e())}}function Pe(n){ee!==null&&ee.tag===0&&!(N&6)&&Xe();var e=N;N|=1;var t=kn.transition,r=j;try{if(kn.transition=null,j=1,n)return n()}finally{j=r,kn.transition=t,N=e,!(N&6)&&$e()}}function xo(){$n=Ve.current,O(Ve)}function Se(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,xp(t)),G!==null)for(t=G.return;t!==null;){var r=t;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:nt(),O(fn),O(rn),$o();break;case 5:po(r);break;case 4:nt();break;case 13:O(A);break;case 19:O(A);break;case 10:uo(r.type._context);break;case 22:case 23:xo()}t=t.return}if(Y=n,G=n=se(n.current,null),Z=$n=e,W=0,Gt=null,So=sl=Ee=0,sn=Et=null,ge!==null){for(e=0;e<ge.length;e++)if(t=ge[e],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}ge=null}return n}function Xs(n,e){do{var t=G;try{if(ao(),Sr.current=qr,Gr){for(var r=F.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Ce=0,X=q=F=null,xt=!1,Ut=0,zo.current=null,t===null||t.return===null){W=1,Gt=e,G=null;break}n:{var i=n,o=t.return,a=t,u=e;if(e=Z,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,$=m.tag;if(!(m.mode&1)&&($===0||$===11||$===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var h=Ea(o);if(h!==null){h.flags&=-257,Pa(h,o,a,i,e),h.mode&1&&Ca(i,c,e),e=h,u=c;var y=e.updateQueue;if(y===null){var g=new Set;g.add(u),e.updateQueue=g}else y.add(u);break n}else{if(!(e&1)){Ca(i,c,e),Co();break n}u=Error(v(426))}}else if(B&&a.mode&1){var D=Ea(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Pa(D,o,a,i,e),io(et(u,a));break n}}i=u=et(u,a),W!==4&&(W=2),Et===null?Et=[i]:Et.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var f=js(i,u,e);ga(i,f);break n;case 1:a=u;var s=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ae===null||!ae.has(d)))){i.flags|=65536,e&=-e,i.lanes|=e;var _=Ds(i,a,e);ga(i,_);break n}}i=i.return}while(i!==null)}Zs(t)}catch(z){e=z,G===t&&t!==null&&(G=t=t.return);continue}break}while(!0)}function Ys(){var n=Wr.current;return Wr.current=qr,n===null?qr:n}function Co(){(W===0||W===3||W===2)&&(W=4),Y===null||!(Ee&268435455)&&!(sl&268435455)||bn(Y,Z)}function Yr(n,e){var t=N;N|=2;var r=Ys();(Y!==n||Z!==e)&&(Fn=null,Se(n,e));do try{Yp();break}catch(l){Xs(n,l)}while(!0);if(ao(),N=t,Wr.current=r,G!==null)throw Error(v(261));return Y=null,Z=0,W}function Yp(){for(;G!==null;)Js(G)}function Jp(){for(;G!==null&&!Sd();)Js(G)}function Js(n){var e=nc(n.alternate,n,$n);n.memoizedProps=n.pendingProps,e===null?Zs(n):G=e,zo.current=null}function Zs(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Qp(t,e),t!==null){t.flags&=32767,G=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{W=6,G=null;return}}else if(t=Vp(t,e,$n),t!==null){G=t;return}if(e=e.sibling,e!==null){G=e;return}G=e=n}while(e!==null);W===0&&(W=5)}function he(n,e,t){var r=j,l=kn.transition;try{kn.transition=null,j=1,Zp(n,e,t,r)}finally{kn.transition=l,j=r}return null}function Zp(n,e,t,r){do Xe();while(ee!==null);if(N&6)throw Error(v(327));t=n.finishedWork;var l=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(v(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(jd(n,i),n===Y&&(G=Y=null,Z=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||$r||($r=!0,ec(Nr,function(){return Xe(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=kn.transition,kn.transition=null;var o=j;j=1;var a=N;N|=4,zo.current=null,qp(n,t),qs(t,n),hp(pi),Dr=!!di,pi=di=null,n.current=t,Wp(t),kd(),N=a,j=o,kn.transition=i}else n.current=t;if($r&&($r=!1,ee=n,Xr=l),i=n.pendingLanes,i===0&&(ae=null),Cd(t.stateNode),pn(n,Q()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)l=e[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Kr)throw Kr=!1,n=Di,Di=null,n;return Xr&1&&n.tag!==0&&Xe(),i=n.pendingLanes,i&1?n===Mi?Pt++:(Pt=0,Mi=n):Pt=0,$e(),null}function Xe(){if(ee!==null){var n=ju(Xr),e=kn.transition,t=j;try{if(kn.transition=null,j=16>n?16:n,ee===null)var r=!1;else{if(n=ee,ee=null,Xr=0,N&6)throw Error(v(331));var l=N;for(N|=4,S=n.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(S=c;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:Ct(8,m,i)}var $=m.child;if($!==null)$.return=m,S=$;else for(;S!==null;){m=S;var p=m.sibling,h=m.return;if(Vs(m),m===c){S=null;break}if(p!==null){p.return=h,S=p;break}S=h}}}var y=i.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var D=g.sibling;g.sibling=null,g=D}while(g!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else n:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ct(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break n}S=i.return}}var s=n.current;for(S=s;S!==null;){o=S;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,S=d;else n:for(o=s;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(z){I(a,a.return,z)}if(a===o){S=null;break n}var _=a.sibling;if(_!==null){_.return=a.return,S=_;break n}S=a.return}}if(N=l,$e(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(nl,n)}catch{}r=!0}return r}finally{j=t,kn.transition=e}}return!1}function Ia(n,e,t){e=et(t,e),e=js(n,e,1),n=oe(n,e,1),e=on(),n!==null&&(Wt(n,1,e),pn(n,e))}function I(n,e,t){if(n.tag===3)Ia(n,n,t);else for(;e!==null;){if(e.tag===3){Ia(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ae===null||!ae.has(r))){n=et(t,n),n=Ds(e,n,1),e=oe(e,n,1),n=on(),e!==null&&(Wt(e,1,n),pn(e,n));break}}e=e.return}}function bp(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=on(),n.pingedLanes|=n.suspendedLanes&t,Y===n&&(Z&t)===t&&(W===4||W===3&&(Z&130023424)===Z&&500>Q()-ko?Se(n,0):So|=t),pn(n,e)}function bs(n,e){e===0&&(n.mode&1?(e=lr,lr<<=1,!(lr&130023424)&&(lr=4194304)):e=1);var t=on();n=qn(n,e),n!==null&&(Wt(n,e,t),pn(n,t))}function n$(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),bs(n,t)}function e$(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(e),bs(n,t)}var nc;nc=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||fn.current)cn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return cn=!1,Up(n,e,t);cn=!!(n.flags&131072)}else cn=!1,B&&e.flags&1048576&&ls(e,Hr,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wr(n,e),n=e.pendingProps;var l=Je(e,rn.current);Ke(e,t),l=_o(null,e,r,n,l,t);var i=vo();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(i=!0,Ar(e)):i=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,co(e),l.updater=al,e.stateNode=l,l._reactInternals=e,Si(e,r,n,t),e=xi(null,e,r,!0,i,t)):(e.tag=0,B&&i&&ro(e),ln(null,e,l,t),e=e.child),e;case 16:r=e.elementType;n:{switch(wr(n,e),n=e.pendingProps,l=r._init,r=l(r._payload),e.type=r,l=e.tag=r$(r),n=Pn(r,n),l){case 0:e=wi(null,e,r,n,t);break n;case 1:e=Na(null,e,r,n,t);break n;case 11:e=Ra(null,e,r,n,t);break n;case 14:e=Ta(null,e,r,Pn(r.type,n),t);break n}throw Error(v(306,r,""))}return e;case 0:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:Pn(r,l),wi(n,e,r,l,t);case 1:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:Pn(r,l),Na(n,e,r,l,t);case 3:n:{if(Bs(e),n===null)throw Error(v(387));r=e.pendingProps,i=e.memoizedState,l=i.element,cs(n,e),Vr(e,r,null,t);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){l=et(Error(v(423)),e),e=ja(n,e,r,t,l);break n}else if(r!==l){l=et(Error(v(424)),e),e=ja(n,e,r,t,l);break n}else for(mn=ie(e.stateNode.containerInfo.firstChild),_n=e,B=!0,Tn=null,t=us(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ze(),r===l){e=Wn(n,e,t);break n}ln(n,e,r,t)}e=e.child}return e;case 5:return fs(e),n===null&&yi(e),r=e.type,l=e.pendingProps,i=n!==null?n.memoizedProps:null,o=l.children,$i(r,l)?o=null:i!==null&&$i(r,i)&&(e.flags|=32),Os(n,e),ln(n,e,o,t),e.child;case 6:return n===null&&yi(e),null;case 13:return As(n,e,t);case 4:return fo(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=be(e,null,r,t):ln(n,e,r,t),e.child;case 11:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:Pn(r,l),Ra(n,e,r,l,t);case 7:return ln(n,e,e.pendingProps,t),e.child;case 8:return ln(n,e,e.pendingProps.children,t),e.child;case 12:return ln(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,l=e.pendingProps,i=e.memoizedProps,o=l.value,M(Ir,r._currentValue),r._currentValue=o,i!==null)if(Dn(i.value,o)){if(i.children===l.children&&!fn.current){e=Wn(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Vn(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),gi(i.return,t,e),a.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),gi(o,t,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ln(n,e,l.children,t),e=e.child}return e;case 9:return l=e.type,r=e.pendingProps.children,Ke(e,t),l=wn(l),r=r(l),e.flags|=1,ln(n,e,r,t),e.child;case 14:return r=e.type,l=Pn(r,e.pendingProps),l=Pn(r.type,l),Ta(n,e,r,l,t);case 15:return Ms(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:Pn(r,l),wr(n,e),e.tag=1,dn(r)?(n=!0,Ar(e)):n=!1,Ke(e,t),Ns(e,r,l),Si(e,r,l,t),xi(null,e,r,!0,n,t);case 19:return Fs(n,e,t);case 22:return Ls(n,e,t)}throw Error(v(156,e.tag))};function ec(n,e){return Pu(n,e)}function t$(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(n,e,t,r){return new t$(n,e,t,r)}function Eo(n){return n=n.prototype,!(!n||!n.isReactComponent)}function r$(n){if(typeof n=="function")return Eo(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Gi)return 11;if(n===qi)return 14}return 2}function se(n,e){var t=n.alternate;return t===null?(t=Sn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Er(n,e,t,r,l,i){var o=2;if(r=n,typeof n=="function")Eo(n)&&(o=1);else if(typeof n=="string")o=5;else n:switch(n){case De:return ke(t.children,l,i,e);case Qi:o=8,l|=8;break;case ql:return n=Sn(12,t,e,l|2),n.elementType=ql,n.lanes=i,n;case Wl:return n=Sn(13,t,e,l),n.elementType=Wl,n.lanes=i,n;case Kl:return n=Sn(19,t,e,l),n.elementType=Kl,n.lanes=i,n;case fu:return cl(t,l,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case su:o=10;break n;case cu:o=9;break n;case Gi:o=11;break n;case qi:o=14;break n;case Yn:o=16,r=null;break n}throw Error(v(130,n==null?n:typeof n,""))}return e=Sn(o,t,e,l),e.elementType=n,e.type=r,e.lanes=i,e}function ke(n,e,t,r){return n=Sn(7,n,r,e),n.lanes=t,n}function cl(n,e,t,r){return n=Sn(22,n,r,e),n.elementType=fu,n.lanes=t,n.stateNode={isHidden:!1},n}function Ul(n,e,t){return n=Sn(6,n,null,e),n.lanes=t,n}function Vl(n,e,t){return e=Sn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function l$(n,e,t,r,l){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(n,e,t,r,l,i,o,a,u){return n=new l$(n,e,t,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Sn(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},co(i),n}function i$(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function tc(n){if(!n)return fe;n=n._reactInternals;n:{if(Te(n)!==n||n.tag!==1)throw Error(v(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(v(171))}if(n.tag===1){var t=n.type;if(dn(t))return ts(n,t,e)}return e}function rc(n,e,t,r,l,i,o,a,u){return n=Po(t,r,!0,n,l,i,o,a,u),n.context=tc(null),t=n.current,r=on(),l=ue(t),i=Vn(r,l),i.callback=e??null,oe(t,i,l),n.current.lanes=l,Wt(n,l,r),pn(n,r),n}function fl(n,e,t,r){var l=e.current,i=on(),o=ue(l);return t=tc(t),e.context===null?e.context=t:e.pendingContext=t,e=Vn(i,o),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=oe(l,e,o),n!==null&&(jn(n,l,o,i),zr(n,l,o)),o}function Jr(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ua(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ro(n,e){Ua(n,e),(n=n.alternate)&&Ua(n,e)}function o$(){return null}var lc=typeof reportError=="function"?reportError:function(n){console.error(n)};function To(n){this._internalRoot=n}dl.prototype.render=To.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(v(409));fl(n,e,null,null)};dl.prototype.unmount=To.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Pe(function(){fl(null,n,null,null)}),e[Gn]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Lu();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Zn.length&&e!==0&&e<Zn[t].priority;t++);Zn.splice(t,0,n),t===0&&Bu(n)}};function No(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Va(){}function a$(n,e,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Jr(o);i.call(c)}}var o=rc(e,r,n,0,null,!1,!1,"",Va);return n._reactRootContainer=o,n[Gn]=o.current,Bt(n.nodeType===8?n.parentNode:n),Pe(),o}for(;l=n.lastChild;)n.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Jr(u);a.call(c)}}var u=Po(n,0,!1,null,null,!1,!1,"",Va);return n._reactRootContainer=u,n[Gn]=u.current,Bt(n.nodeType===8?n.parentNode:n),Pe(function(){fl(e,u,t,r)}),u}function $l(n,e,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=Jr(o);a.call(u)}}fl(e,o,n,l)}else o=a$(t,e,n,l,r);return Jr(o)}Du=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ht(e.pendingLanes);t!==0&&(Xi(e,t|1),pn(e,Q()),!(N&6)&&(tt=Q()+500,$e()))}break;case 13:Pe(function(){var r=qn(n,1);if(r!==null){var l=on();jn(r,n,1,l)}}),Ro(n,1)}};Yi=function(n){if(n.tag===13){var e=qn(n,134217728);if(e!==null){var t=on();jn(e,n,134217728,t)}Ro(n,134217728)}};Mu=function(n){if(n.tag===13){var e=ue(n),t=qn(n,e);if(t!==null){var r=on();jn(t,n,e,r)}Ro(n,e)}};Lu=function(){return j};Ou=function(n,e){var t=j;try{return j=n,e()}finally{j=t}};li=function(n,e,t){switch(e){case"input":if(Jl(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var l=ll(r);if(!l)throw Error(v(90));pu(r),Jl(r,l)}}}break;case"textarea":mu(n,t);break;case"select":e=t.value,e!=null&&Qe(n,!!t.multiple,e,!1)}};Su=wo;ku=Pe;var u$={usingClientEntryPoint:!1,Events:[Xt,Be,ll,gu,zu,wo]},mt={findFiberByHostInstance:ye,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s$={bundleType:mt.bundleType,version:mt.version,rendererPackageName:mt.rendererPackageName,rendererConfig:mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cu(n),n===null?null:n.stateNode},findFiberByHostInstance:mt.findFiberByHostInstance||o$,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mr.isDisabled&&mr.supportsFiber)try{nl=mr.inject(s$),Bn=mr}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u$;hn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(e))throw Error(v(200));return i$(n,e,null,t)};hn.createRoot=function(n,e){if(!No(n))throw Error(v(299));var t=!1,r="",l=lc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=Po(n,1,!1,null,null,t,!1,r,l),n[Gn]=e.current,Bt(n.nodeType===8?n.parentNode:n),new To(e)};hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(v(188)):(n=Object.keys(n).join(","),Error(v(268,n)));return n=Cu(e),n=n===null?null:n.stateNode,n};hn.flushSync=function(n){return Pe(n)};hn.hydrate=function(n,e,t){if(!pl(e))throw Error(v(200));return $l(null,n,e,!0,t)};hn.hydrateRoot=function(n,e,t){if(!No(n))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=lc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=rc(e,null,n,1,t??null,l,!1,i,o),n[Gn]=e.current,Bt(n),r)for(n=0;n<r.length;n++)t=r[n],l=t._getVersion,l=l(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,l]:e.mutableSourceEagerHydrationData.push(t,l);return new dl(e)};hn.render=function(n,e,t){if(!pl(e))throw Error(v(200));return $l(null,n,e,!1,t)};hn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(v(40));return n._reactRootContainer?(Pe(function(){$l(null,null,n,!1,function(){n._reactRootContainer=null,n[Gn]=null})}),!0):!1};hn.unstable_batchedUpdates=wo;hn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!pl(t))throw Error(v(200));if(n==null||n._reactInternals===void 0)throw Error(v(38));return $l(n,e,t,!1,r)};hn.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(n){console.error(n)}}ic(),iu.exports=hn;var c$=iu.exports,Qa=c$;Ql.createRoot=Qa.createRoot,Ql.hydrateRoot=Qa.hydrateRoot;const oc="comm-princ",ac="通信原理",uc=4,f$={id:oc,title:ac,order:uc},d$=Object.freeze(Object.defineProperty({__proto__:null,default:f$,id:oc,order:uc,title:ac},Symbol.toStringTag,{value:"Module"})),sc="总内容",cc="总内容",fc=1,p$={id:sc,title:cc,order:fc},$$=Object.freeze(Object.defineProperty({__proto__:null,default:p$,id:sc,order:fc,title:cc},Symbol.toStringTag,{value:"Module"})),dc="dsp-1",pc="第一章：离散时间信号",$c=1,m$={id:dc,title:pc,order:$c},_$=Object.freeze(Object.defineProperty({__proto__:null,default:m$,id:dc,order:$c,title:pc},Symbol.toStringTag,{value:"Module"})),mc="dsp",_c="数字信号处理",vc=5,v$={id:mc,title:_c,order:vc},h$=Object.freeze(Object.defineProperty({__proto__:null,default:v$,id:mc,order:vc,title:_c},Symbol.toStringTag,{value:"Module"})),hc="总",yc="总内容",gc=1,y$={id:hc,title:yc,order:gc},g$=Object.freeze(Object.defineProperty({__proto__:null,default:y$,id:hc,order:gc,title:yc},Symbol.toStringTag,{value:"Module"})),zc="e-fields-anal",Sc="第二章：静电场",kc=2,z$={id:zc,title:Sc,order:kc},S$=Object.freeze(Object.defineProperty({__proto__:null,default:z$,id:zc,order:kc,title:Sc},Symbol.toStringTag,{value:"Module"})),wc="em-fields",xc="电磁场与电磁波",Cc=3,k$={id:wc,title:xc,order:Cc},w$=Object.freeze(Object.defineProperty({__proto__:null,default:k$,id:wc,order:Cc,title:xc},Symbol.toStringTag,{value:"Module"})),Ec="second-part",Pc="第二部分",Rc=4,x$={id:Ec,title:Pc,order:Rc},C$=Object.freeze(Object.defineProperty({__proto__:null,default:x$,id:Ec,order:Rc,title:Pc},Symbol.toStringTag,{value:"Module"})),Tc="time-varying-fields",Nc="第五章：时变电磁场",jc=3,E$={id:Tc,title:Nc,order:jc},P$=Object.freeze(Object.defineProperty({__proto__:null,default:E$,id:Tc,order:jc,title:Nc},Symbol.toStringTag,{value:"Module"})),Dc="vector-analysis",Mc="第一章：矢量分析",Lc=1,R$={id:Dc,title:Mc,order:Lc},T$=Object.freeze(Object.defineProperty({__proto__:null,default:R$,id:Dc,order:Lc,title:Mc},Symbol.toStringTag,{value:"Module"})),Oc="calc-1",Bc="第一章：极限与连续",Ac=1,N$={id:Oc,title:Bc,order:Ac},j$=Object.freeze(Object.defineProperty({__proto__:null,default:N$,id:Oc,order:Ac,title:Bc},Symbol.toStringTag,{value:"Module"})),Fc="calc-2",Hc="第二章：导数与微分",Ic=2,D$={id:Fc,title:Hc,order:Ic},M$=Object.freeze(Object.defineProperty({__proto__:null,default:D$,id:Fc,order:Ic,title:Hc},Symbol.toStringTag,{value:"Module"})),Uc="math",Vc="高等数学",Qc=1,L$={id:Uc,title:Vc,order:Qc},O$=Object.freeze(Object.defineProperty({__proto__:null,default:L$,id:Uc,order:Qc,title:Vc},Symbol.toStringTag,{value:"Module"})),Gc="series",qc="第十二章：无穷级数",Wc=12,B$={id:Gc,title:qc,order:Wc},A$=Object.freeze(Object.defineProperty({__proto__:null,default:B$,id:Gc,order:Wc,title:qc},Symbol.toStringTag,{value:"Module"})),Kc="第三章 复变函数的积分",Xc=2,F$={title:Kc,order:Xc},H$=Object.freeze(Object.defineProperty({__proto__:null,default:F$,order:Xc,title:Kc},Symbol.toStringTag,{value:"Module"})),Yc="复变函数",Jc="复变函数",Zc=2,I$={id:Yc,title:Jc,order:Zc},U$=Object.freeze(Object.defineProperty({__proto__:null,default:I$,id:Yc,order:Zc,title:Jc},Symbol.toStringTag,{value:"Module"})),bc="第五章 留数",nf=5,V$={title:bc,order:nf},Q$=Object.freeze(Object.defineProperty({__proto__:null,default:V$,order:nf,title:bc},Symbol.toStringTag,{value:"Module"})),ef="第四章 级数",tf=4,G$={title:ef,order:tf},q$=Object.freeze(Object.defineProperty({__proto__:null,default:G$,order:tf,title:ef},Symbol.toStringTag,{value:"Module"})),rf="记忆点",lf=1,W$={title:rf,order:lf},K$=Object.freeze(Object.defineProperty({__proto__:null,default:W$,order:lf,title:rf},Symbol.toStringTag,{value:"Module"})),of="数字图像处理",af="数字图像处理",uf=6,X$={id:of,title:af,order:uf},Y$=Object.freeze(Object.defineProperty({__proto__:null,default:X$,id:of,order:uf,title:af},Symbol.toStringTag,{value:"Module"})),sf="第1章-绪论",cf="第 1 章 绪论",ff=1,J$={id:sf,title:cf,order:ff},Z$=Object.freeze(Object.defineProperty({__proto__:null,default:J$,id:sf,order:ff,title:cf},Symbol.toStringTag,{value:"Module"})),df="第2章-基础知识",pf="第 2 章 基础知识",$f=2,b$={id:df,title:pf,order:$f},nm=Object.freeze(Object.defineProperty({__proto__:null,default:b$,id:df,order:$f,title:pf},Symbol.toStringTag,{value:"Module"})),mf="第3章-图像增强",_f="第 3 章 图像增强",vf=3,em={id:mf,title:_f,order:vf},tm=Object.freeze(Object.defineProperty({__proto__:null,default:em,id:mf,order:vf,title:_f},Symbol.toStringTag,{value:"Module"})),hf="第4章-图像变换",yf="第 4 章 图像变换",gf=4,rm={id:hf,title:yf,order:gf},lm=Object.freeze(Object.defineProperty({__proto__:null,default:rm,id:hf,order:gf,title:yf},Symbol.toStringTag,{value:"Module"})),zf="第5章-图像复原",Sf="第 5 章 图像复原",kf=5,im={id:zf,title:Sf,order:kf},om=Object.freeze(Object.defineProperty({__proto__:null,default:im,id:zf,order:kf,title:Sf},Symbol.toStringTag,{value:"Module"})),wf="第6章-图像分割",xf="第 6 章 图像分割",Cf=6,am={id:wf,title:xf,order:Cf},um=Object.freeze(Object.defineProperty({__proto__:null,default:am,id:wf,order:Cf,title:xf},Symbol.toStringTag,{value:"Module"})),Ef="第7章-图像压缩",Pf="第 7 章 图像压缩",Rf=7,sm={id:Ef,title:Pf,order:Rf},cm=Object.freeze(Object.defineProperty({__proto__:null,default:sm,id:Ef,order:Rf,title:Pf},Symbol.toStringTag,{value:"Module"})),Tf="说明",Nf="说明",jf=0,fm={id:Tf,title:Nf,order:jf},dm=Object.freeze(Object.defineProperty({__proto__:null,default:fm,id:Tf,order:jf,title:Nf},Symbol.toStringTag,{value:"Module"})),pm=`---
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
$$(1+x)^{\\alpha} \\sim \\alpha x \\ (x \\to 0)$$`,$m=`---
id: discrete-signals
title: 序列的运算
order: 1
---

# 序列的运算

离散时间信号通常用序列 $x[n]$ 表示。
`,mm=`---
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
是时间反转序列（即倒序，首位不变，其余倒置）`,_m=`---
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
静电场是有源无旋场，为保守场，源于电荷`,vm=`---
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
</Collapsible>`,hm=`---
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
`,ym=`---
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
$$\\theta _ { b } = \\arctan \\sqrt { \\frac { \\varepsilon _ { 2 } } { \\varepsilon _ { 1 } } }$$`,gm=`---
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
能量的传输速度等于相速`,zm=`---
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
$$a\\cos\\theta - b\\sin\\theta = \\sqrt{a^2 + b^2} \\cos(\\theta + \\varphi),\\ \\tan\\varphi = \\frac{b}{a}$$`,Sm=`---
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
$$\\lambda = \\frac { 2 \\pi } { \\beta }$$`,km=`---
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
$$\\vec{J}_{e} = \\frac{\\partial \\vec{D}}{\\partial t}$$`,wm=`---
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
</Collapsible>`,xm=`---
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

`,Cm=`---
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
$$\\int _ { V } \\nabla \\cdot \\vec { A } ( \\vec { r } ) d V = \\oint _ { S } \\vec { A } ( \\vec { r } ) \\cdot d \\vec{S}$$`,Em=`---
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
可分解为有源无旋场和无源有旋场的叠加`,Pm=`---
id: continuity
title: 函数的连续性
order: 2
---

# 函数的连续性

若 $\\lim\\limits_{x \\to x_0} f(x) = f(x_0)$，则称 $f(x)$ 在 $x_0$ 处连续。
`,Rm=`---
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
`,Tm=`---
id: derivatives
title: 导数的几何意义
order: 1
---

# 导数的几何意义

导数 $f'(x_0)$ 表示曲线 $y=f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率。
`,Nm=`---
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

$\\int_{0}^{x} S(x)dx=\\sum\\limits_{n=0}^{\\infty}\\int_{0}^{x}(a_n x^{n})dx=\\sum\\limits_{n=0}^{\\infty} \\frac{a_n}{n+1} x^{n+1}$`,jm=`---
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
`,Dm=`---
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
$$`,Mm=`---
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
</Collapsible>`,Lm=`---
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
</Collapsible>`,Om=`---
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
$$`,Bm=`# 数字图像处理：考试重点与猜题清单

> 基于 7 份 PPT、共 401 页逐页看图整理。\`★★★\` 建议能独立完成计算，\`★★\` 建议会写公式和步骤，\`★\` 以概念辨析为主。

## 最可能的大题

| 优先级 | 题型 | 为什么可疑 | 典型结果 |
|---|---|---|---|
| ★★★ | 3×3 窗口滤波 | 第 3 章连续演示均值、高斯、中值；思考题明确点名“直方图均衡化 + 中值滤波” | 高斯核常出现三位小数 |
| ★★★ | 直方图均衡化 | PPT 给了完整 CDF 与映射步骤 | CDF 是小数，映射值取整 |
| ★★★ | 香农信息熵 + 霍夫曼编码 | 第 7 章把建树、平均码长、熵放在同一例题中 | 熵、效率天然为小数 |
| ★★★ | 腐蚀、膨胀、开闭运算 | 老师提示重点；可直接给二值矩阵和结构元素核 | 逐点判断，无复杂算术 |
| ★★ | MSE / PSNR | 第 2 章唯一成组的质量评价公式 | PSNR 常保留 3 位小数 |
| ★★ | Otsu 最大类间方差 | 第 6 章给出完整算法步骤 | 概率、均值、方差均为小数 |
| ★★ | RGB→HSI | 第 2 章给出反余弦公式 | 饱和度、色调角可为小数 |
| ★★ | 噪声统计量与均值类滤波 | 第 5 章公式密集：均值/方差、算术/几何/谐波/逆谐波 | 多数需小数运算 |

## “保留小数点后 3 位”的重点猜测

1. **高斯滤波**：课件窗口
   \\[
   \\begin{bmatrix}3&4&4\\\\9&77&6\\\\3&6&1\\end{bmatrix},\\quad
   \\frac1{16}\\begin{bmatrix}1&2&1\\\\2&4&2\\\\1&2&1\\end{bmatrix}
   \\]
   加权和为 \`369\`，输出 \`369/16=23.0625≈23.063\`。这是最贴合老师提示的候选。
2. **信息熵**：课件概率 \`[0.1,0.4,0.06,0.1,0.04,0.3]\`，熵 \`H=2.144 bit/符号\`。
3. **MSE/PSNR**：先求 MSE，再算对数，PSNR 通常保留三位小数。
4. **Otsu**：逐阈值算类间方差，比较的小数通常保留三位。
5. **RGB→HSI**：\`S\` 和色调角 \`H\` 可能要求三位小数。
6. **几何/谐波/逆谐波均值滤波、噪声均值方差**：乘方、开方和倒数会产生小数。

## 3×3 窗口一题多问模板

对窗口 \`3,4,4,9,77,6,3,6,1\`：

- 算术均值：\`117/9=13\`
- 排序：\`1,3,3,4,4,6,6,9,77\`
- 中值：第 5 个数，\`4\`
- 最大值滤波：\`77\`
- 最小值滤波：\`1\`
- 高斯核滤波：\`23.063\`

口诀：**线性滤波做乘加；中值/最大/最小先排序；核中心必须对准待求像素。**

## 必须纠正的课件口径

第 6 章第 82、83 页的标题与标准定义相反。标准定义是：

- 开运算：\`先腐蚀，后膨胀\`，去小亮点、断细连接、平滑外轮廓。
- 闭运算：\`先膨胀，后腐蚀\`，填小黑洞、连小断裂、平滑内轮廓。

考试若沿用课件原话，建议在答案中同时写公式，避免只写名称：
\`A∘B=(A⊖B)⊕B\`，\`A•B=(A⊕B)⊖B\`。

## 临场计算检查

1. 概率和是否为 \`1\`。
2. 核权重和是否为 \`1\`；若不是，是否需要归一化。
3. 直方图均衡化使用 \`L-1\`，不是 \`L\`。
4. PSNR 的对数底数是 \`10\`；信息熵的对数底数是 \`2\`。
5. 中值取排序后的中间项，不是平均值。
6. 边界如何处理要写明：补零、复制、镜像或只算有效区域。

## 课件没讲清楚时的答题策略

- 先写对象和符号含义，再写公式，最后代数值。只写答案很难拿步骤分。
- 遇到核，先圈出核原点/中心；遇到形态学，再说明前景是 1 还是 0。
- 遇到取整、边界、卷积是否翻核等未说明条件，主动声明采用的约定。
- 课件动画导致公式缺失的部分，本套笔记已补入标准公式和可执行步骤。
- 第 6 章开闭运算页存在标签颠倒，答题用公式消除歧义。
`,Am=`# 第1章 绪论 · 1.1 数字图像

## 核心概念

- 图像是物体反射或透射光被视觉/成像装置记录的结果。
- 模拟图像用连续物理量记录亮度；数字图像用离散数字记录。
- 数字化包含两步：**空间采样**与**幅值量化**。
- 像素是数字图像的基本组成单元；灰度图像的像素值表示亮度，彩色图像的像素通常包含多个颜色分量。

## 分辨率

- 空间分辨率越高，像素越密，能表达的空间细节越多。
- 绝对分辨率常用像素尺寸描述；相对分辨率描述单位物理长度内的采样密度。
- 分辨率提高会增加存储、传输和计算开销。

## 易考辨析

- “数字图像一定比模拟图像清晰”是错的；清晰度取决于采样、量化、光学系统和噪声。
- 灰度级数为 \`L\` 时，存储一个像素至少需 \`ceil(log2 L)\` bit。

PPT 对应页：4-8。

## 补讲：采样和量化到底分别改变什么

可以把连续图像想成一张“无限密、亮度无限细”的纸：

1. **采样**决定在哪里取点，把连续坐标 \`(x,y)\` 变成整数网格 \`(m,n)\`。采样太稀，细条纹可能变成假条纹，这叫混叠。
2. **量化**决定每个点能用多少个亮度等级表示。量化位数太低，平滑渐变会变成一圈一圈的假轮廓。

所以：空间分辨率不足主要丢**位置细节**；灰度分辨率不足主要丢**亮度层次**。两者不能互相补偿。

若图像大小为 \`M×N\`、每像素 \`b\` bit，未压缩数据量为 \`M×N×b\` bit；RGB 三通道、每通道 8 bit 时每像素为 24 bit。
`,Fm=`# 第1章 绪论 · 1.2 数字图像处理

## 定义与特点

数字图像处理是利用计算机及相关数字技术，对图像进行运算以获得预期结果。优点是灵活、精度高、可重复；主要代价是数据量大、计算与存储需求高。

## 主要任务

- 图像增强：突出有用信息，不要求与原图严格一致。
- 几何处理：平移、旋转、缩放、校正等。
- 图像复原：依据退化模型估计原图。
- 压缩编码：减少表示图像所需的数据量。
- 图像分割：把图像划分为目标与背景或多个对象区域。
- 数字化与重建：模拟图像离散化、二维/三维图像重建。

## 处理范围

- 点处理：输出像素只依赖同位置输入像素。
- 局部处理：输出依赖邻域窗口。
- 全局处理：输出依赖整幅图像统计或变换。
- 前向处理：逐帧流水运算；反馈处理：根据结果迭代修正。

PPT 对应页：9-19。

## 补讲：点、局部、全局处理如何判断

不要看算法名字，直接看“求一个输出像素时用了哪些输入”：

- 只用同坐标一个像素：点处理，如负片、伽马变换。
- 使用中心周围一个窗口：局部处理，如均值、中值、Sobel、形态学。
- 依赖整幅图的统计量或变换系数：全局处理，如全局直方图均衡化、DFT。

同一算法也可能出现不同类型。例如全局阈值依赖整幅直方图，属于全局决策；真正给每个像素做二值比较时又是点运算。
`,Hm=`# 第1章 绪论 · 1.3 相关学科和领域

## 与数字信号处理

数字信号处理常研究一维信号，数字图像处理主要研究二维信号；二者共享采样、变换、滤波和编码等方法。

## 与计算机图形学

- 计算机图形学：由模型生成图像，偏“从描述到图像”。
- 图像处理：对已有图像变换、增强、分析，偏“从图像到图像/信息”。
- 二者在三维重建、渲染、神经表示等方向交叉。

## 与计算机视觉

图像处理强调低层操作；计算机视觉进一步从图像推断物体、结构和语义。典型链路：预处理 → 特征/表示 → 检测、识别、理解。

PPT 对应页：20-23。

`,Im=`# 第1章 绪论 · 1.4 应用与发展趋势

## 主要应用

- 遥感：资源调查、灾害监测、城市规划、环境与军事侦察。
- 医学：CT、MR、超声、病理分析和辅助诊断。
- 工业：无损检测、PCB 检测、机器人视觉、质量控制。
- 办公与公共安全：OCR、人脸/指纹/车牌识别、监控。

## 发展趋势

- 低分辨率向高分辨率、二维向三维、静态向动态、单模态向多模态发展。
- 传统图像处理提供明确模型和可解释算子；深度学习/大模型侧重数据驱动表示。二者常结合，而不是简单替代。

PPT 对应页：24-35。

`,Um=`# 第2章 基础知识 · 2.1 图像数字化

## 成像与传感器

- 数字图像通常由模拟图像经 A/D 转换获得。
- 常见传感器：CCD、CMOS。CCD 逐行转移电荷，图像一致性好；CMOS 可在像素附近读出，速度快、功耗低、易集成。
- 主动传感器自带能量源；被动传感器接收环境辐射或反射。

## 采样与量化

- 采样决定空间坐标的离散程度；采样间隔越小，空间分辨率越高。
- 量化决定灰度/颜色幅值的离散级数；位数越高，量化误差通常越小。
- 采样不足会混叠；量化级数太少会出现假轮廓。

PPT 对应页：4-10。

## 补讲：为什么采样不足会混叠

采样后，超过采样频率一半的高频成分会“伪装”成较低频率。二维图像中常表现为摩尔纹、锯齿和错误方向的条纹。

避免方法：

1. 提高采样率。
2. 采样前先做低通抗混叠滤波，去掉无法被当前采样率表示的高频。
3. 缩小图像时不能只隔点取样，应先低通再下采样。

量化误差可理解为“真实亮度与最近量化级之间的差”。位数每增加 1 bit，灰度级数翻倍。
`,Vm="# 第2章 基础知识 · 2.2 图像数据结构与彩色空间\n\n## 图像模式\n\n- 灰度图：常用 8 bit，范围 `0-255`，共 256 级。\n- 二值图：只有 `0/1`；常由灰度图阈值化得到。\n- RGB 彩色图：每像素含 R/G/B 三分量；各 8 bit 时共 24 bit，可表示 `256^3=16,777,216` 种颜色。\n\n## 彩色空间\n\n- RGB：面向发光与显示设备，加色模型。\n- CMY/CMYK：面向印刷与反射物体，减色模型。\n- HSI：色调 Hue、饱和度 Saturation、强度 Intensity，更接近人的颜色描述。\n\nRGB→HSI 常用公式：\n\n\\[\nI=\\frac{R+G+B}{3},\\qquad\nS=1-\\frac{3\\min(R,G,B)}{R+G+B}\n\\]\n\n\\[\n\\theta=\\arccos\\frac{\\tfrac12[(R-G)+(R-B)]}\n{\\sqrt{(R-G)^2+(R-G)(R-B)}}\n\\]\n\n若 `B≤G`，`H=θ`；否则 `H=360°-θ`。\n\n### 三位小数示例\n\n`R=100,G=150,B=200`：`I=150`，`S=0.333`，`θ=150°`，因 `B>G`，所以 `H=210°`。\n\nPPT 对应页：12-19；色调公式在第 18 页。\n\n## 补讲：RGB 转 HSI 的实际步骤\n\n1. 先算强度 `I`，它是三个通道的平均。\n2. 再算饱和度 `S`。若 `R=G=B`，颜色是灰色，`S=0`。\n3. 用反余弦先得到 `θ∈[0°,180°]`。\n4. 用 `B≤G` 或 `B>G` 判断色调落在色环的哪一半，得到最终 `H∈[0°,360°)`。\n\n为什么还要第 4 步？因为 `arccos` 只返回 `0°-180°`，无法单独区分色环上下半圈。\n\n特殊情况：`R=G=B` 时色调没有物理意义，公式分母也可能为 0。答题可写 `S=0，H 置 0 或不定义`，不要强行除零。\n",Qm=`# 第2章 基础知识 · 2.3 图像文件格式

## 常见格式

- BMP：通常不压缩，结构直观，文件较大。
- JPEG：面向连续色调图像的有损压缩，核心包括预测编码、DCT 与熵编码。
- PNG：无损压缩，支持透明通道。
- GIF：调色板图像，支持简单动画。
- TIFF/DICOM：常用于出版、扫描与医学影像。

## BMP 要点

典型 BMP 包含文件头、信息头、可选调色板和位图数据。像素行常按 4 字节对齐；读取时要注意行填充、BGR 顺序及自底向上存储。

PPT 对应页：20-25。

`,Gm=`# 第2章 基础知识 · 2.4 图像质量评价

## 客观评价

均方误差：

$
MSE=\\frac1{MN}\\sum\\limits_{x}\\sum\\limits_{y}[f_r(x,y)-f(x,y)]^2
$

峰值信噪比：

$
PSNR=10\\lg\\frac{(f_{max}-f_{min})^2}{MSE}
$

8 bit 图像通常取动态范围 \`255\`。MSE 越小、PSNR 越大，一般表示重建越接近原图，但未必完全符合人眼感受。

### 三位小数示例

若四个像素的平方误差和为 \`10\`，则 \`MSE=10/4=2.500\`；

\\[
PSNR=10\\log_{10}(255^2/2.5)=44.151\\text{ dB}
\\]

## 主观评价

由观察者按规定标准评分。它更贴近视觉体验，但受人员、环境和规则影响，可重复性较弱。

PPT 对应页：26-34；MSE/PSNR 在第 28 页。

## 补讲：PSNR 为什么用对数

\`255²/MSE\` 的数值范围可能非常大，取 \`10log10\` 后更容易比较，并以 dB 表示。计算顺序必须是：

1. 每个对应像素作差。
2. 差值平方后求和。
3. 除以像素总数得到 MSE。
4. 把 MSE 代入 PSNR。

若两幅图完全相同，\`MSE=0\`，理论上 \`PSNR=+∞\`，不是 0。

PSNR 只比较逐像素误差。两幅图即使视觉质量不同，也可能有相近 PSNR；这就是为什么实际还会结合 SSIM 或主观评价。
`,qm=`# 第3章 图像增强 · 3.1 引言

图像增强的目标是让特定信息更易观察或后续处理，不要求增强结果严格等于真实场景。方法可分为空间域增强和频率域增强。

- 空间域：直接对像素或邻域操作，如灰度变换、直方图均衡、平滑、锐化。
- 频率域：先变换到频域，对频率分量处理后逆变换。
- 低频主要对应缓慢变化与主体亮度；高频主要对应边缘、细节，也可能包含噪声。

PPT 对应页：3-8。

`,Wm=`# 第3章 图像增强 · 3.2 直接灰度变换

## 对数变换

\\[
s=c\\log(1+r)
\\]

扩展低灰度、压缩高灰度，常用于显示动态范围很大的频谱。

## 幂律（伽马）变换

\\[
s=cr^\\gamma
\\]

- \`γ<1\`：整体变亮，扩展暗部。
- \`γ>1\`：整体变暗，压缩暗部。
- \`γ=1\`：线性映射。

## 分段线性变换

用折线分别控制不同灰度区间，可做对比度拉伸、灰度切片。考试常给两个控制点 \`(r1,s1),(r2,s2)\`，要求写三段斜率和映射式；注意区间端点连续。

PPT 对应页：9-16。

## 补讲：如何从曲线判断图像变亮还是变暗

把输入 \`r\` 与输出 \`s\` 放在同一坐标系：

- 变换曲线在直线 \`s=r\` 上方，说明同一输入被映射到更大灰度，图像变亮。
- 曲线在 \`s=r\` 下方，图像变暗。

伽马变换常先把 8 bit 灰度归一化到 \`[0,1]\`，算完再乘 255。若直接对 \`0-255\` 做幂运算，数值意义会不同。

分段线性题的稳妥做法：每段使用点斜式 \`s-s1=k(r-r1)\`，斜率由该段两个端点求出。最后检查三段在连接点是否连续。
`,Km=`# 第3章 图像增强 · 3.3 直方图修正与均衡化

## 基本思想

直方图横轴是灰度级，纵轴是像素数或概率。均衡化用累计分布函数把输入灰度映射到新灰度，使输出灰度尽量均匀展开。

离散形式：

\\[
p(r_k)=\\frac{n_k}{MN},\\quad
CDF(k)=\\sum_{j=0}^{k}p(r_j),\\quad
s_k=\\operatorname{round}[(L-1)CDF(k)]
\\]

## PPT 例题完整计算

3-bit 图像，\`L=8\`：

| r | 概率 p | CDF | \`round(7×CDF)\` |
|---:|---:|---:|---:|
| 0 | 0.19 | 0.19 | 1 |
| 1 | 0.25 | 0.44 | 3 |
| 2 | 0.21 | 0.65 | 5 |
| 3 | 0.16 | 0.81 | 6 |
| 4 | 0.08 | 0.89 | 6 |
| 5 | 0.06 | 0.95 | 7 |
| 6 | 0.03 | 0.98 | 7 |
| 7 | 0.02 | 1.00 | 7 |

因此映射为 \`0→1, 1→3, 2→5, 3→6, 4→6, 5→7, 6→7, 7→7\`。

## 易错点

- 用 \`L-1\`，不是 \`L\`。
- 先归一化得到概率，再累计。
- 多个输入灰度映射到同一输出灰度是正常现象。
- 均衡化并不保证直方图完全平坦。

PPT 对应页：17-27；计算过程在第 21-22 页。

## 补讲：为什么使用 CDF

直方图概率只说明“每一级有多少”，CDF 则说明“从最暗到当前灰度累计占多少”。CDF 单调不减，因此用它做映射不会打乱原有明暗顺序。

完整答题格式建议写成四列：\`灰度 r → 概率 p → CDF → 新灰度 s\`。只写最终映射通常拿不到完整步骤分。

### 映射后如何得到新直方图

把映射到同一输出灰度的原像素数相加。例如 PPT 中 \`r=3\` 和 \`r=4\` 都映到 \`s=6\`，所以新灰度 6 的像素数是原灰度 3、4 像素数之和。

### round、floor 还是取整

不同教材可能使用 \`round\` 或 \`floor\`。本课件例题明确用了 \`round[(L-1)CDF]\`，考试应优先沿用这个口径，并在答案开头写清取整规则。
`,Xm=`# 第3章 图像增强 · 3.4 图像平滑与统计滤波

> 本节是最高优先级计算题。

## 核与卷积

核（kernel）是随窗口滑动的权重矩阵。将核中心对准待求像素，逐元素相乘并求和。边界需说明补零、复制、镜像或只算有效区域。

## 均值与高斯滤波

3×3 算术均值核：

\\[
\\frac19\\begin{bmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{bmatrix}
\\]

3×3 近似高斯核：

\\[
\\frac1{16}\\begin{bmatrix}1&2&1\\\\2&4&2\\\\1&2&1\\end{bmatrix}
\\]

均值滤波平滑强但模糊边缘；高斯核让中心附近权重更大，通常比均值滤波自然。

## 中值、最大值、最小值

- 中值滤波：邻域排序后取中间值，善于去除椒盐噪声并较好保边。
- 最大值滤波：取邻域最大值，扩张亮区域、抑制黑色盐噪声。
- 最小值滤波：取邻域最小值，扩张暗区域、抑制白色胡椒噪声。

## PPT 3×3 窗口完整例题

\\[
W=\\begin{bmatrix}3&4&4\\\\9&77&6\\\\3&6&1\\end{bmatrix}
\\]

1. 算术均值：\`(3+4+4+9+77+6+3+6+1)/9=13\`。
2. 排序：\`1,3,3,4,4,6,6,9,77\`。
3. 中值：\`4\`；最大值：\`77\`；最小值：\`1\`。
4. 高斯核加权和：

\\[
\\frac{3+8+4+18+308+12+3+12+1}{16}
=\\frac{369}{16}=23.0625\\approx\\boxed{23.063}
\\]

这道高斯核计算是“保留三位小数”最强候选。

## 滤波器选择

- 高斯/均匀随机噪声：均值类滤波可用。
- 椒盐噪声：优先中值滤波。
- 窗口越大，去噪越强但细节损失越多。

PPT 对应页：28-45；计算页 30-36、42；第 61 页思考题点名中值滤波。

## 补讲：核到底怎么移动

以 3×3 核为例，核中心压在待求输出像素上。核左上角对应图像窗口左上角，逐项乘、全部相加，所得数写到**输出图像的中心位置**。下一位置再移动核，不能在已经修改过的输出上继续算。

线性滤波公式：

\\[
g(x,y)=\\sum_{i=-a}^{a}\\sum_{j=-b}^{b}w(i,j)f(x-i,y-j)
\\]

严格卷积会把核翻转；许多图像处理库实际执行相关运算，不翻核。对均值核和对称高斯核，两者结果相同；对 Sobel 这类非对称核，方向符号可能不同。

## 补讲：边界像素怎么算

- 补零：简单，但边缘会被拉暗。
- 复制：用最近边界像素延伸。
- 镜像：把边界附近内容反射，通常更自然。
- valid：只计算核完全落在图内的位置，输出尺寸变小。

考试若未说明，先写“只计算内部有效点”或声明自己的补边方式。

## 补讲：为什么中值能去椒盐噪声

椒盐噪声通常是极大值或极小值。排序后它们落在序列两端，不容易成为中间项；均值却会被极端值明显拉偏。因此中值滤波是非线性滤波，不能写成固定卷积核。
`,Ym=`# 第3章 图像增强 · 3.5 图像锐化

## 一阶与二阶差分

一阶差分在灰度变化区间产生较宽响应；二阶差分在边缘两侧产生正负响应并在过渡处过零，对细节敏感但也放大噪声。

一维二阶差分：

\\[
f''(x)\\approx f(x+1)+f(x-1)-2f(x)
\\]

二维拉普拉斯：

\\[
\\nabla^2f=f(x+1,y)+f(x-1,y)+f(x,y+1)+f(x,y-1)-4f(x,y)
\\]

常用四邻域核：

\\[
\\begin{bmatrix}0&1&0\\\\1&-4&1\\\\0&1&0\\end{bmatrix}
\\]

若使用中心为正的相反号核，锐化时加减关系也要相应改变。典型形式：\`g=f-c∇²f\`，符号由核约定决定。

## 易错点

- 拉普拉斯是二阶算子，本身不提供边缘方向。
- 锐化前常先平滑，避免把噪声一起增强。

PPT 对应页：46-60。

## 补讲：拉普拉斯到底加还是减

关键不在背“加/减”，而在看核中心符号：

- 若核中心为 \`-4\` 或 \`-8\`，常用 \`g=f-∇²f\`。
- 若核中心为 \`+4\` 或 \`+8\`，常用 \`g=f+∇²f\`。

两种写法本质相同，只是拉普拉斯核整体差一个负号。答题时先写出核，再决定加减。

锐化结果还可能超出 \`0-255\`。实际显示前要截断或归一化；计算题若只问中间响应，不应提前截断负值。
`,Jm=`# 第4章 图像变换 · 4.1 傅里叶变换

## 二维 DFT

对 \`M×N\` 图像：

\\[
F(u,v)=\\sum_{x=0}^{M-1}\\sum_{y=0}^{N-1}f(x,y)
e^{-j2\\pi(ux/M+vy/N)}
\\]

\\[
f(x,y)=\\frac1{MN}\\sum_{u=0}^{M-1}\\sum_{v=0}^{N-1}F(u,v)
e^{j2\\pi(ux/M+vy/N)}
\\]

频谱包含幅度和相位；只看幅度不能完整重建图像。频谱中心化常乘 \`(-1)^(x+y)\`。

## 频域滤波步骤

1. 图像补零并中心化。
2. 做 DFT。
3. 与频域滤波器 \`H(u,v)\` 相乘。
4. 逆 DFT、取实部、去中心化和裁剪。

## 滤波器

- 理想低通：截止陡峭，空间域易振铃。
- Butterworth 低通：过渡平滑，阶数越高越接近理想低通。
- 高频用于边缘/锐化，低频用于平滑/主体亮度。

PPT 对应页：3-24。

## 补讲：频谱图在看什么

\`F(u,v)\` 是复数，通常分成：

- 幅度 \`|F|\`：该频率成分有多强。
- 相位 \`arg(F)\`：这些成分在空间中如何对齐，决定结构位置。

频谱显示常用 \`log(1+|F|)\`，否则中心低频过亮、其他区域几乎看不见。中心化后：中心附近是低频，离中心越远频率越高；方向与原图纹理方向通常呈垂直关系。

## 补讲：为什么相位很重要

只保留幅度、丢掉相位，通常无法恢复原图结构；保留相位而把幅度设为常数，仍常能辨认主要轮廓。因此“频谱亮不亮”不是图像全部信息。

## 补讲：频域滤波为什么会振铃

理想低通在截止频率处突然从 1 跳到 0，频域不连续，对应空间域的冲激响应有长尾和正负摆动，于是边缘附近出现明暗波纹。Butterworth 或 Gaussian 过渡更平滑，振铃更弱。
`,Zm=`# 第4章 图像变换 · 4.2 离散余弦变换

DCT 只使用实数余弦基，把空间信息集中到少量低频系数，具有较好的能量聚集性，是 JPEG 的核心步骤之一。

二维 DCT 可分离为先对行做一维 DCT、再对列做一维 DCT。典型压缩流程：分块 → DCT → 量化 → 熵编码；解码按相反顺序进行。

易考辨析：DFT 系数一般为复数；DCT 系数为实数。量化是 JPEG 有损的主要来源。

PPT 对应页：25-27。

## 补讲：DCT 为什么适合 JPEG

自然图像相邻像素变化通常缓慢，一个 8×8 小块的大部分能量会集中在左上角低频系数。量化时可以精细保留低频、粗略处理高频，视觉损失较小却能制造大量零系数，方便后续游程与熵编码。

JPEG 的“有损”主要发生在量化，不是 DCT 本身。若 DCT 后不量化并使用足够精度，变换可逆。

DC 系数表示该块的平均亮度趋势；其余 AC 系数表示不同方向和频率的变化。
`,bm=`# 第4章 图像变换 · 4.3 小波变换及应用

## 多尺度思想

傅里叶变换擅长整体频率分析，但缺少局部位置信息；小波通过平移和尺度变化同时描述“何时/何处”与“什么频率”。

连续小波族可写作：

\\[
\\psi_{a,b}(t)=\\frac1{\\sqrt{|a|}}\\psi\\left(\\frac{t-b}{a}\\right)
\\]

## Haar 小波

对相邻样本做平均与差分：平均得到低频近似，差分得到高频细节；递归分解低频即可形成多尺度表示。

二维图像每一级通常得到 \`LL、LH、HL、HH\`：

- LL：低低频，主体轮廓；
- LH/HL：方向性边缘；
- HH：对角细节和噪声。

应用包括压缩、去噪、图像融合、金字塔和多尺度检测。下采样前要低通，避免混叠。

PPT 对应页：28-64。

## 补讲：Haar 小波手算一遍

对序列 \`[8,4,1,3]\`，使用“平均/差分”直观版本：

1. 两两求平均：\`[(8+4)/2,(1+3)/2]=[6,2]\`，这是低频近似。
2. 两两求半差：\`[(8-4)/2,(1-3)/2]=[2,-1]\`，这是高频细节。
3. 对低频 \`[6,2]\` 再分解：平均为 \`4\`，半差为 \`2\`。

最终可写成 \`[4,2,2,-1]\`，包含一项更粗尺度近似和不同尺度细节。重建时反过来用 \`a+d\`、\`a-d\` 恢复。

有些教材使用 \`1/√2\` 的正交归一化，系数数值会不同，但分组、低频/高频含义和可逆过程相同。考试先看题目采用哪种归一化。

## 补讲：二维四个子带怎么看

先沿行做低通/高通，再沿列做低通/高通：

- \`LL\`：两方向都低通，缩小版主体。
- \`LH\`：一个方向低、一个方向高，突出某一方向边缘。
- \`HL\`：突出与 LH 垂直的边缘。
- \`HH\`：两方向都高通，包含对角细节和较多噪声。

多层小波只继续分解 \`LL\`，不是把四个子带全部反复分解。
`,n1=`# 第5章 图像复原 · 5.1 基本概念

图像增强以改善观察/使用效果为目标；图像复原把退化过程建模，并据此估计未退化图像，强调客观模型。

常见退化原因：传感器噪声、离焦、相对运动、大气湍流、光学像差、散射、非线性几何畸变。

复原一般是病态逆问题：退化信息不完全、噪声与模型误差会被逆运算放大，因此常需先验、约束或正则化。

PPT 对应页：3-8。

## 补讲：增强和复原如何区分

同样是“让图变清楚”，判断标准不同：

- 增强关心结果是否更适合看或识别，允许主观调整。
- 复原假设存在退化模型，目标是估计退化前的图像。

例如拉高对比度是增强；已知运动模糊方向与长度后做反卷积是复原。复原不一定视觉更讨喜，因为它受到模型和噪声约束。
`,e1=`# 第5章 图像复原 · 5.2 图像退化模型

线性、空间不变退化模型：

\\[
g(x,y)=h(x,y)*f(x,y)+\\eta(x,y)
\\]

频域形式：

\\[
G(u,v)=H(u,v)F(u,v)+N(u,v)
\\]

其中 \`f\` 为原图，\`h/H\` 为点扩散函数/退化传递函数，\`η/N\` 为噪声，\`g/G\` 为观测图像。

若无噪声且 \`H\` 不为零，理论上可逆滤波 \`F=G/H\`；实际中 \`H\` 很小时会严重放大噪声。

PPT 对应页：9-10。

## 补讲：卷积模型每一项的物理含义

点扩散函数 \`h\` 表示“理想点经过系统后扩散成什么形状”。整幅图可看成许多加权点源，线性空间不变系统把每个点都扩散成同样形状并叠加，因此形成卷积 \`h*f\`。

退化顺序是先模糊、再叠加噪声。不能简单写成 \`h*(f+η)\`，因为那表示噪声也经过同一模糊系统，物理模型不同。

空间域卷积在频域变成乘法，所以复原常转到频域。但 \`H\` 很小的频率意味着系统几乎丢掉了该信息，除以很小数会同时放大噪声和数值误差。
`,t1=`# 第5章 图像复原 · 5.3 图像复原方法

## 噪声模型

### 高斯噪声

\\[
p(z)=\\frac1{\\sqrt{2\\pi}\\sigma}e^{-(z-\\mu)^2/(2\\sigma^2)}
\\]

### 瑞利噪声

对 \`z≥a\`：\`p(z)=2(z-a)e^{-(z-a)^2/b}/b\`，否则为 0。

\\[
\\mu=a+\\sqrt{\\frac{\\pi b}{4}},\\qquad
\\sigma^2=\\frac{b(4-\\pi)}4
\\]

### 伽马/爱尔兰噪声

\\[
p(z)=\\frac{a^b z^{b-1}}{(b-1)!}e^{-az},\\ z\\ge0;
\\quad \\mu=\\frac ba,\\ \\sigma^2=\\frac b{a^2}
\\]

### 指数与均匀噪声

- 指数：\`p(z)=ae^{-az}\`，\`μ=1/a\`，\`σ²=1/a²\`。
- 均匀 \`[a,b]\`：\`μ=(a+b)/2\`，\`σ²=(b-a)²/12\`。
- 椒盐噪声：灰度概率集中在两个极端值。

## 从直方图估计均值与方差

\\[
\\mu=\\sum_i z_i p(z_i),\\qquad
\\sigma^2=\\sum_i(z_i-\\mu)^2p(z_i)
\\]

这两式涉及概率乘加，属于“三位小数”候选。

## 空间域均值类滤波

算术均值：

\\[
\\hat f=\\frac1{mn}\\sum_{(s,t)\\in S_{xy}}g(s,t)
\\]

几何均值：

\\[
\\hat f=\\left[\\prod_{(s,t)\\in S_{xy}}g(s,t)\\right]^{1/(mn)}
\\]

谐波均值：

\\[
\\hat f=\\frac{mn}{\\sum_{(s,t)\\in S_{xy}}1/g(s,t)}
\\]

逆谐波均值：

\\[
\\hat f=\\frac{\\sum g^{Q+1}}{\\sum g^Q}
\\]

- \`Q>0\` 消除胡椒噪声；\`Q<0\` 消除盐噪声。
- \`Q=0\` 退化为算术均值；\`Q=-1\` 退化为谐波均值。

## 频域复原

逆滤波：\`\\hat F=G/H\`，简单但在 \`H≈0\` 处不稳定。

维纳滤波在最小均方误差意义下折中逆退化与抑噪：

\\[
\\hat F=\\frac{H^*}{|H|^2+S_N/S_F}G
\\]

若用常数 \`K≈S_N/S_F\`，则为工程常见简化形式。

## 暗通道先验去雾

大气散射模型：\`I(x)=J(x)t(x)+A(1-t(x))\`。暗通道：

\\[
J^{dark}(x)=\\min_{c\\in\\{r,g,b\\}}\\min_{y\\in\\Omega(x)}J^c(y)
\\]

流程：估计暗通道 → 估计大气光 \`A\` → 估计/细化透射率 \`t\` → 恢复 \`J\`。

PPT 对应页：11-73；均值类滤波 29-34，维纳滤波 48-51。

## 补讲：四种均值滤波怎么选

- 算术均值：最普通，所有像素同权；平滑强，细节损失也明显。
- 几何均值：大值影响比算术均值弱，通常保留细节稍好；窗口内有 0 时乘积为 0。
- 谐波均值：对大值抑制较强，适合盐噪声，不适合含 0 的窗口。
- 逆谐波均值：用 \`Q\` 选择抑制方向，但一个固定 \`Q\` 不能同时消除盐和胡椒。

课件中“盐/胡椒”容易记反，可从极值推导：胡椒是低值/黑点，要让高值更占优势，所以取 \`Q>0\`；盐是高值/白点，要削弱高值，所以取 \`Q<0\`。

## 补讲：逆滤波与维纳滤波的区别

逆滤波只考虑撤销模糊：\`G/H\`。当 \`H≈0\` 时噪声被无限放大。

维纳滤波的分母多了噪声与信号功率比 \`S_N/S_F\`。噪声弱、\`H\` 可靠时更接近逆滤波；噪声强或 \`H\` 很小时主动抑制该频率，不强行恢复已经丢失的信息。

所以维纳滤波不是“完全去模糊”，而是在恢复锐度和抑制噪声之间最小化均方误差。

## 补讲：噪声参数题怎么做

先确认题目给的是分布参数，还是灰度直方图：

1. 给参数 \`a,b,μ,σ\`：直接使用对应分布公式。
2. 给离散灰度及概率：统一用 \`μ=Σzp(z)\` 和 \`σ²=Σ(z-μ)²p(z)\`。
3. 给像素计数：先除以总像素数变成概率。

最后检查概率和是否为 1，方差不能为负。
`,r1=`# 第5章 图像复原 · 5.4 几何校正

## 几何畸变

- 径向畸变：桶形/枕形，由镜头径向非线性引起。
- 切向畸变：镜头与传感器不平行或装配偏心引起。

径向模型常写成：

\\[
x_d=x(1+k_1r^2+k_2r^4+k_3r^6),\\quad
y_d=y(1+k_1r^2+k_2r^4+k_3r^6)
\\]

校正流程：采集标定板 → 建立世界点与像点对应 → 估计内参和畸变系数 → 反向映射 → 插值。

PPT 第 77 页给出多组半径与畸变系数小数，但更像拟合数据而非手算大题。若考计算，通常给系数与点坐标，要求代入并保留小数。

PPT 对应页：74-80。

## 补讲：为什么通常使用反向映射

正向映射把原图每个像素投到新位置，目标网格上可能出现空洞或多个像素挤到同一点。反向映射则对输出图每个像素，反求它在输入图中的连续坐标，因此不会漏掉输出像素。

反求坐标通常不是整数，需要插值：

- 最近邻：最快，锯齿明显。
- 双线性：用周围 4 点加权，常用且平滑。
- 双三次：用 16 点，质量更好但计算更大。

标定得到的 \`k1,k2,...\` 是模型系数，不是“直接把图拉直”的像素偏移；必须结合半径 \`r\` 和成像内参计算。
`,l1=`# 第6章 图像分割 · 6.1 边缘检测

边缘是灰度、颜色或纹理突变的位置。数字图像中用差分近似导数；一阶算子找梯度峰值，二阶算子常找过零点。

## Roberts、Sobel/Prewitt

Roberts 使用 2×2 对角差分，对细边缘敏感但抗噪弱。

Sobel 常用核：

\\[
G_x=\\begin{bmatrix}-1&0&1\\\\-2&0&2\\\\-1&0&1\\end{bmatrix},\\quad
G_y=\\begin{bmatrix}-1&-2&-1\\\\0&0&0\\\\1&2&1\\end{bmatrix}
\\]

\\[
M=\\sqrt{G_x^2+G_y^2},\\qquad
\\alpha=\\operatorname{atan2}(G_y,G_x)
\\]

PPT 中 \`Gx=Gy=69\` 时，\`M=69√2≈97.581\`，方向 \`45°\`；这也是三位小数型计算。

## Laplacian 与 LoG

Laplacian 是二阶、无方向算子，对噪声敏感；LoG 先高斯平滑再拉普拉斯，通过过零检测边缘。

## Canny 五步

1. 高斯平滑。
2. 计算梯度幅值和方向。
3. 非极大值抑制：沿梯度方向保留局部最大值。
4. 双阈值检测：强边缘、弱边缘、非边缘。
5. 滞后连接：保留与强边缘连通的弱边缘。

PPT 对应页：4-26；Sobel 计算在第 22 页。

## 补讲：Sobel 方向为什么容易混

\`Gx\` 表示沿 x 方向灰度变化，因此对**竖直边缘**响应强；\`Gy\` 对**水平边缘**响应强。梯度方向指向灰度增长最快方向，边缘走向与梯度方向垂直。

计算角度要用 \`atan2(Gy,Gx)\`，它能根据正负号判断象限；只用 \`arctan(Gy/Gx)\` 会丢象限，并在 \`Gx=0\` 时除零。

## 补讲：Canny 的非极大值抑制

梯度算完后边缘往往有几像素宽。对每个像素，沿梯度方向比较两侧邻点：只有当前幅值比两侧都大才保留，否则置 0。梯度方向连续，但实现时常近似为 \`0°、45°、90°、135°\` 四类。

双阈值后：大于高阈值的是强边缘；低于低阈值直接删除；介于两者之间的弱边缘只有与强边缘连通时才保留。这一步既减少噪声，又避免真实边缘被一次阈值切断。
`,i1=`# 第6章 图像分割 · 6.2 Hough 变换

## 直线检测

避免斜率无穷，通常使用极坐标参数：

\\[
\\rho=x\\cos\\theta+y\\sin\\theta
\\]

图像空间中的一个边缘点，在参数空间对应一条正弦曲线；多条曲线的交点/累加器峰值对应一条直线。

## 算法步骤

1. 离散化 \`(ρ,θ)\`，累加器清零。
2. 对每个边缘点遍历 \`θ\`，计算 \`ρ\`。
3. 对应累加单元加 1。
4. 检测局部峰值并反推直线。

量化过粗会定位误差大，过细会增加计算并使票数分散。圆检测扩展到 \`(a,b,r)\` 参数空间，计算量更高。

PPT 对应页：27-33。

## 补讲：为什么一个点变成一条曲线

固定图像点 \`(x0,y0)\`，让 \`θ\` 从 0 到 180°变化，每个 \`θ\` 都能算出一个 \`ρ=x0cosθ+y0sinθ\`，于是参数空间中得到一条曲线。

同一直线上的多个图像点具有同一组真实参数 \`(ρ*,θ*)\`，它们的曲线会在该点相交。因此 Hough 不是直接“连边缘点”，而是在参数空间寻找投票峰值。

手算题步骤：列出边缘点 → 选定若干离散 \`θ\` → 逐点计算 \`ρ\` → 填累加器 → 找最大票数单元 → 写回直线方程。

注意：\`ρ\` 可以为负；若数组下标不能为负，需要整体加偏移量。
`,o1=`# 第6章 图像分割 · 6.3 阈值分割与 Otsu

## 基本阈值分割

二值阈值：\`g=0 (f≤T)\`，\`g=1 (f>T)\`。多阈值把灰度轴分成多个区间。

双峰直方图法适合目标与背景灰度分离明显的图像；迭代阈值法反复计算两类均值并更新 \`T=(μ0+μ1)/2\`。

## Otsu 最大类间方差

对候选阈值 \`k\`：

\\[
\\omega_0(k)=\\sum_{i=0}^{k}p_i,\\quad
\\omega_1=1-\\omega_0
\\]

\\[
\\mu_0=\\frac{\\sum_{i=0}^{k}ip_i}{\\omega_0},\\quad
\\mu_1=\\frac{\\sum_{i=k+1}^{L-1}ip_i}{\\omega_1}
\\]

\\[
\\sigma_B^2(k)=\\omega_0\\omega_1(\\mu_0-\\mu_1)^2
\\]

使 \`σB²\` 最大的 \`k\` 为最优阈值。也可用 \`σB²=ω0(μ0-μT)²+ω1(μ1-μT)²\`。

### 三位小数自测例

灰度 \`0,1,2,3\` 的概率为 \`0.2,0.2,0.4,0.2\`：

| k | 类间方差 |
|---:|---:|
| 0 | 0.640 |
| 1 | 0.807 |
| 2 | 0.490 |

最大值在 \`k=1\`，所以阈值取 \`1\`。

## 易错点

- 跳过 \`ω0=0\` 或 \`ω1=0\` 的阈值，避免除零。
- 对每个阈值都要重新计算类概率和类均值。
- Otsu 适合类间差异明显的直方图；光照不均时可用局部/自适应阈值。

PPT 对应页：34-50；Otsu 步骤在第 40-44 页。

## 补讲：Otsu 每个量为什么这样定义

阈值 \`k\` 把直方图分成 \`[0,k]\` 和 \`[k+1,L-1]\`：

- \`ω0,ω1\` 是两类各占多少像素。
- \`μ0,μ1\` 是两类各自的平均灰度。
- \`σB²\` 同时考虑两类距离和两类大小。

只让 \`|μ0-μ1|\` 最大并不够：如果一类只有一个像素，也可能均值相距很远但分割毫无意义。乘上 \`ω0ω1\` 会惩罚极端失衡的划分。

高效计算时不必每个阈值重新遍历灰度：从小到大更新累计概率 \`ω0\` 和累计灰度和 \`m0=Σip_i\`，再由总均值求另一类均值。
`,a1=`# 第6章 图像分割 · 6.4 区域分割与图割

## 区域生长

从种子点出发，按灰度、颜色或纹理相似准则吸收邻域像素，直到没有满足条件的像素。

关键三点：种子选择、相似性准则、停止条件。PPT 示例使用“邻域灰度与区域均值差小于阈值”。种子不当会欠分割或越界生长。

## 图割

把像素/超像素作为节点，边权表示相似性或断开代价；增加源点 \`S\`（前景）和汇点 \`T\`（背景）。最小割最小化数据项与平滑项，依据最大流最小割定理，最小割容量等于最大流。

Ford-Fulkerson 思路：

1. 在残量网络找一条增广路径。
2. 取路径上最小剩余容量作为增广量。
3. 更新正向/反向残量。
4. 直到不存在增广路径。

PPT 对应页：51-72；区域生长计算在第 54-55 页，最大流过程在第 63-69 页。

## 补讲：区域生长时均值会变化

新像素是否加入，通常与**当前区域均值**比较。像素一旦加入，就要重新计算区域均值，再判断下一批邻点。不能一直拿种子灰度当固定均值，除非题目明确如此。

PPT 第 55 页示例：四邻点平均为 \`8.25\`，阈值为 2，所以灰度 7 与均值差 \`1.25<2\`，被接受；加入后区域均值变为 8，再继续判断。

## 补讲：残量网络中的反向边

发送一部分流量后，正向剩余容量减少，同时产生等量反向容量。反向边表示后续可以“撤回并改道”之前的流量，没有它，贪心选择一条较差路径后可能无法达到真正最大流。

最大流结束条件不是“当前路径满了”，而是残量网络中从 \`S\` 到 \`T\` 已经找不到任何增广路径。
`,u1=`# 第6章 图像分割 · 6.5 形态学与开闭运算

> 老师点名重点。结构元素也称形态学核，必须标清原点/中心。

## 二值腐蚀与膨胀

集合定义：

\\[
A\\ominus B=\\{z\\mid B_z\\subseteq A\\}
\\]

\\[
A\\oplus B=\\{a+b\\mid a\\in A,b\\in B\\}
\\]

窗口判断：

- 腐蚀：核覆盖的前景位置必须全部命中，中心才保留前景。缩小亮目标、去小亮点、断细连接。
- 膨胀：核内只要有一个前景命中，中心就设为前景。扩大亮目标、填小孔、连小断裂。

灰度形态学中，在常见平坦结构元素约定下：**膨胀相当于最大值滤波，腐蚀相当于最小值滤波**。

## 标准开闭运算

\\[
\\text{开运算 }A\\circ B=(A\\ominus B)\\oplus B
\\]

先腐蚀后膨胀：去小亮点、断细连接、平滑外轮廓，大目标尺寸大致恢复。

\\[
\\text{闭运算 }A\\bullet B=(A\\oplus B)\\ominus B
\\]

先膨胀后腐蚀：填小暗孔、连小裂缝、平滑内轮廓。

## 课件纠错

PPT 第 82 页标题写“闭运算”，内容却是“先腐蚀后膨胀”；第 83 页标题写“开运算”，内容却是“先膨胀后腐蚀”。**两页标签与标准定义相反。** 答题最好写公式，不只写名称。

## 小集合例题

令 \`A={(1,1),(1,2),(2,1)}\`，结构元素 \`B={(0,0),(0,1)}\`，原点为 \`(0,0)\`：

- \`A⊕B={(1,1),(1,2),(1,3),(2,1),(2,2)}\`
- \`A⊖B={(1,1)}\`
- \`A∘B={(1,1),(1,2)}\`
- \`A•B=A\`

做矩阵题时，把结构元素原点依次放到每个候选像素，按“腐蚀全中、膨胀任一中”判断。

## 边界提取

内部边界常写为：\`β(A)=A-(A⊖B)\`。

PPT 对应页：73-84；腐蚀 75，膨胀 80，开闭运算 82-83。

## 补讲：结构元素原点为什么重要

结构元素不是只有形状，还包含一个原点。判断结果写回原点所在的图像位置；同一个形状若原点不同，输出会发生平移甚至形状差异。

做题前先完成三件事：

1. 确认前景用 1 还是 0 表示。
2. 标出结构元素中参与判断的位置和原点。
3. 确认边界外按 0 处理，还是只算有效区域。

## 补讲：二值形态学和最大/最小滤波的联系

在二值图中，膨胀是邻域“任一为 1 则输出 1”，等价于取最大值；腐蚀是邻域“全部为 1 才输出 1”，等价于取最小值。

灰度图的平坦结构元素同样对应局部最大/最小。但非平坦结构元素还会在取极值前加减结构元素高度，不能简单只取原灰度极值。

## 补讲：开闭运算的性质

- 开运算具有反扩张性：\`A∘B⊆A\`。
- 闭运算具有扩张性：\`A⊆A•B\`。
- 二者都具有幂等性：做一次后再做相同开/闭运算，结果不再变化。
- 开运算适合去掉比结构元素小的亮结构；闭运算适合填补比结构元素小的暗结构。
`,s1=`# 第6章 图像分割 · 6.6 FCN 全卷积神经网络

FCN 把分类网络末端全连接层改为卷积层，输出空间类别图；再通过上采样/反卷积恢复到输入分辨率，实现像素级语义分割。

要点：

- 下采样扩大感受野、提取语义，但损失空间精度。
- 上采样恢复尺寸；跳跃连接融合浅层定位信息与深层语义信息。
- 空洞卷积在不进一步降低分辨率的情况下扩大感受野。
- 常用指标包括像素准确率和 mIoU。

PPT 对应页：85-91。

`,c1=`# 第7章 图像压缩 · 7.1 图像压缩背景

## 数据量计算

未压缩图像大小：

\\[
\\text{字节数}=W\\times H\\times \\text{通道数}\\times \\frac{\\text{每通道位数}}8
\\]

1080P、RGB、每通道 8 bit：

\\[
1920\\times1080\\times3=6,220,800\\text{ B}
\\approx5.93\\text{ MiB}
\\]

视频还需乘帧率与时长。单位换算时分清 \`MB=10^6 B\` 与 \`MiB=2^20 B\`。

## 可压缩的原因

- 空间冗余：相邻像素相关。
- 时间冗余：相邻视频帧相似。
- 频域冗余：能量集中在少数低频系数。
- 编码冗余：高概率符号若仍使用长码会浪费比特。
- 视觉冗余：人眼对部分高频或色彩细节不敏感。

无损压缩可精确恢复；有损压缩以允许失真换更高压缩率。

PPT 对应页：3-9；1080P 计算在第 4 页。

## 补讲：压缩率的几种写法

不同题目可能用不同定义：

- 压缩比 \`CR=原始大小/压缩后大小\`，越大越好。
- 压缩率也可能写成 \`压缩后/原始\`，越小越好。
- 节省比例 \`1-压缩后/原始\`。

例如 100 MB 压到 20 MB：压缩比为 \`5:1\`，压缩后占原来的 \`20%\`，节省 \`80%\`。答题必须带定义，不能只写“压缩率=5”。

无损压缩减少的是统计/编码冗余；有损压缩还会主动丢弃视觉上不重要的信息。
`,f1=`# 第7章 图像压缩 · 7.2 霍夫曼编码与信息熵

> 与“三位小数”提示高度吻合，建议完整掌握。

## 霍夫曼编码步骤

1. 按概率从小到大排列符号。
2. 合并概率最小的两个节点。
3. 把合并节点放回并重新排序。
4. 重复直到根节点概率为 1。
5. 从根到叶给左右分支标 \`0/1\`，得到前缀码。

霍夫曼码不唯一，但在二进制前缀码中平均码长最优。

## 平均码长

\\[
\\bar L=\\sum_i p_i l_i
\\]

PPT 例题：

| 符号 | p | 码字 | 长度 |
|---|---:|---|---:|
| A1 | 0.10 | 011 | 3 |
| A2 | 0.40 | 1 | 1 |
| A3 | 0.06 | 01010 | 5 |
| A4 | 0.10 | 0100 | 4 |
| A5 | 0.04 | 01011 | 5 |
| A6 | 0.30 | 00 | 2 |

\\[
\\bar L=0.1\\times3+0.4\\times1+0.06\\times5+0.1\\times4+0.04\\times5+0.3\\times2
=2.200
\\]

## 香农信息量与信息熵

单个事件的信息量：

\\[
I(x_i)=-\\log_2p_i
\\]

信息熵：

\\[
H(X)=-\\sum_i p_i\\log_2p_i
\\]

代入 PPT 概率：

\\[
H=2.143534\\ldots\\approx\\boxed{2.144\\text{ bit/符号}}
\\]

编码效率：

\\[
\\eta=\\frac{H}{\\bar L}=\\frac{2.143534}{2.2}=0.974334\\approx97.433\\%
\\]

平均冗余：\`L-H=0.056 bit/符号\`。

## 必背结论

- \`H≤L<H+1\`（二进制霍夫曼码）。
- 无损平均码长不能低于熵的极限。
- 概率越小，信息量越大；概率为 1 时信息量为 0。
- 独立事件联合发生，信息量相加。

PPT 对应页：10-20；建树 13-15，熵 16-18。

## 补讲：霍夫曼树为什么可能不唯一

若多个节点概率相同，合并顺序和左右分支标号都可能不同，因此具体码字不唯一。但只要每次都合并最小概率节点，得到的码长分配仍是最优的，平均码长通常相同。

检查是否为前缀码：任何一个完整码字都不能是另一个码字的开头。例如已有 \`0\`，就不能再使用 \`00\` 或 \`01\`。

## 补讲：熵、平均码长和效率的关系

- 熵 \`H\` 是信源理论上的平均最少比特数，不一定是整数。
- 单个码字长度必须是整数，所以霍夫曼平均码长 \`L\` 通常略大于 \`H\`。
- 效率 \`η=H/L\`，不可能超过 1；若算出大于 1，说明概率、码长或对数底数算错。

计算 \`-p log2 p\` 时建议保留至少 5-6 位中间小数，最后统一保留 3 位，避免逐项过早取整造成误差。

## 补讲：如何完整画树

每次把两个最小概率节点圈出并写出和；把新节点重新放回排序表；直到 1。最后从根往叶标 0/1，再从叶回读码字。不要在合并过程中直接凭感觉写码。
`,d1=`# 第7章 图像压缩 · 7.3 像素预测

预测编码利用相邻像素相关性，不直接编码当前像素，而编码预测残差：

\\[
e(x,y)=f(x,y)-\\hat f(x,y)
\\]

只要预测器可由已解码像素重建，残差编码可无损。常见预测器使用左、上、左上像素的线性组合。

## PPT 一维例题

像素序列 \`120,121,120,122,123\`，第一项直接保存，之后用前一项预测：

- \`121-120=1\`
- \`120-121=-1\`
- \`122-120=2\`
- \`123-122=1\`

编码序列变为 \`120,1,-1,2,1\`。残差更集中在 0 附近，更适合熵编码。

PPT 对应页：21-24；例题在第 22 页。

## 补讲：为什么残差小就能压缩

原灰度可能分布在 \`0-255\`，而相邻像素的残差通常集中在 0 附近，出现频率很不均匀。对这种尖锐分布做霍夫曼、算术或 Golomb 编码，平均码长会更短。

预测编码必须保证解码端能得到同样的预测值。因此预测只能使用已经解码的左、上、左上等像素，不能偷偷使用未来像素。

残差可能为负，实际编码常使用有符号映射，例如 \`0→0, -1→1, 1→2, -2→3, 2→4\`，再对非负整数熵编码。
`,p1=`# 第7章 图像压缩 · 7.4 行程编码

行程编码（RLE）把连续相同符号表示为“符号 + 连续长度”。适合大面积同值区域、二值图、扫描文档和简单图形。

例：\`abbbbbbbbbbbbb\` 可表示为 \`a1b13\`；但 \`ababababababab\` 几乎没有长行程，RLE 反而可能增大数据。

图像中需约定扫描顺序，常见为逐行从左到右，也可采用蛇形或针对边缘结构的路径以增加连续性。

易错点：计数值本身也占位；若长度超过计数字段上限，需要拆成多段。

PPT 对应页：25-29。

## 补讲：什么时候 RLE 反而变大

若每段都要存“符号 + 长度”，当平均行程很短时，长度字段的额外开销可能超过节省量。可以粗略比较：原来每个符号 \`b\` bit；一段长度 \`r\` 原需 \`rb\` bit，RLE 需 \`b+c\` bit。只有 \`r>(b+c)/b\` 才真正节省。

二值图可只保存起始颜色和各段长度，省去每段重复存符号；扫描路径也会影响行程长度，所以文档图像通常按行扫描，轮廓图有时采用更贴合边界的路径。
`,$1=`## 腐蚀、膨胀与开闭运算

### 1. 腐蚀
$$
A \\ominus B
$$
**流程**：

（1） 选定结构元素核

（2） 逐像素遍历二值图，只有核覆盖范围内所有像素全为白色，中心点才保留白色 

（3） 不满足则置黑，物体边界向内收缩

**简言之**：邻域全白才留白，剔除边缘、缩小目标、滤除细小杂物。


### 2. 膨胀
$$
A \\oplus B
$$
**流程**：

（1） 选定结构元素核

（2） 逐像素遍历二值图，只要核内有一个像素为前景，中心点就设为前景，扩大目标区域


### 3. 开运算
$$
A \\circ B = (A \\ominus B) \\oplus B
$$
$$
开运算 = 先腐蚀，后膨胀，去小白点
$$

### 4. 闭运算
$$
A \\bullet B = (A \\oplus B) \\ominus B
$$
$$
闭运算 = 先膨胀，后腐蚀，填小黑洞
$$

## 信息熵

信息熵为香农信息量×信息概率之和
$$
\\sum_{i=0}^k p_i \\log_{2}{p_i}
$$

## 客观评价

均方误差：

$$
MSE=\\frac1{MN}\\sum_{x}\\sum_{y}[f_r(x,y)-f(x,y)]^2
$$

峰值信噪比：

$$
PSNR=10\\lg\\frac{(f_{max}-f_{min})^2}{MSE}
$$

## RGB→HSI

$$
I=\\frac{R+G+B}{3},\\qquad
S=1-\\frac{\\min(R,G,B)}{I}
$$

$$
\\theta=\\arccos\\frac{\\tfrac12[(R-G)+(R-B)]}
{\\sqrt{(R-G)^2+(R-G)(R-B)}}
$$

## 几何/谐波/逆谐波均值滤波

1. 算术均值滤波
$$
\\hat f(x,y)=\\frac{1}{mn}\\sum_{(s,t)\\in S_{xy}} g(s,t)
$$

2. 几何均值滤波
$$
\\hat f(x,y)=
\\left[
\\prod_{(s,t)\\in S_{xy}} g(s,t)
\\right]^{\\frac{1}{mn}}
$$

3. 谐波均值滤波
$$
\\hat f(x,y)=
\\frac{mn}
{\\displaystyle\\sum_{(s,t)\\in S_{xy}}\\frac{1}{g(s,t)}}
$$

4. 逆谐波均值滤波
$$
\\hat f(x,y)=
\\frac{
\\displaystyle\\sum_{(s,t)\\in S_{xy}} g(s,t)^{Q+1}
}
{
\\displaystyle\\sum_{(s,t)\\in S_{xy}} g(s,t)^Q
}
$$

## Otsu步骤

（1）计算输入图像的归一化直方图。使用 $p_i$ 表示各灰度分量出现概率

（2）计算累计概率
$$
P_1(k)=\\sum_{i=0}^{k}p_i
$$

（3）计算累计均值
$$
m(k)=\\sum_{i=0}^{k} i p_i
$$

（4）计算图像全局平均灰度值 
$$
m_G=\\sum_{i=0}^{L-1} i p_i=m(L-1)
$$

（5）计算类间方差 
$$
\\sigma_B^2(k)=
\\frac{\\left[m_G P_1(k)-m(k)\\right]^2}
{P_1(k)\\left[1-P_1(k)\\right]}
$$

（6）检测 $𝜎_𝐵^2$ 中的最大值 $𝜎_𝐵^2 (𝑘^∗)$，相应的$𝑘^∗$即为所求阈值

（7）利用$𝑘^∗$得到二值标签图像，完成图像分割
`,m1=`# 数字图像处理：考试重点与猜题清单

> 基于 7 份 PPT、共 401 页逐页看图整理。\`★★★\` 建议能独立完成计算，\`★★\` 建议会写公式和步骤，\`★\` 以概念辨析为主。

## 最可能的大题

| 优先级 | 题型 | 为什么可疑 | 典型结果 |
|---|---|---|---|
| ★★★ | 3×3 窗口滤波 | 第 3 章连续演示均值、高斯、中值；思考题明确点名“直方图均衡化 + 中值滤波” | 高斯核常出现三位小数 |
| ★★★ | 直方图均衡化 | PPT 给了完整 CDF 与映射步骤 | CDF 是小数，映射值取整 |
| ★★★ | 香农信息熵 + 霍夫曼编码 | 第 7 章把建树、平均码长、熵放在同一例题中 | 熵、效率天然为小数 |
| ★★★ | 腐蚀、膨胀、开闭运算 | 老师提示重点；可直接给二值矩阵和结构元素核 | 逐点判断，无复杂算术 |
| ★★ | MSE / PSNR | 第 2 章唯一成组的质量评价公式 | PSNR 常保留 3 位小数 |
| ★★ | Otsu 最大类间方差 | 第 6 章给出完整算法步骤 | 概率、均值、方差均为小数 |
| ★★ | RGB→HSI | 第 2 章给出反余弦公式 | 饱和度、色调角可为小数 |
| ★★ | 噪声统计量与均值类滤波 | 第 5 章公式密集：均值/方差、算术/几何/谐波/逆谐波 | 多数需小数运算 |

## “保留小数点后 3 位”的重点猜测

1. **高斯滤波**：课件窗口
   \\[
   \\begin{bmatrix}3&4&4\\\\9&77&6\\\\3&6&1\\end{bmatrix},\\quad
   \\frac1{16}\\begin{bmatrix}1&2&1\\\\2&4&2\\\\1&2&1\\end{bmatrix}
   \\]
   加权和为 \`369\`，输出 \`369/16=23.0625≈23.063\`。这是最贴合老师提示的候选。
2. **信息熵**：课件概率 \`[0.1,0.4,0.06,0.1,0.04,0.3]\`，熵 \`H=2.144 bit/符号\`。
3. **MSE/PSNR**：先求 MSE，再算对数，PSNR 通常保留三位小数。
4. **Otsu**：逐阈值算类间方差，比较的小数通常保留三位。
5. **RGB→HSI**：\`S\` 和色调角 \`H\` 可能要求三位小数。
6. **几何/谐波/逆谐波均值滤波、噪声均值方差**：乘方、开方和倒数会产生小数。

## 3×3 窗口一题多问模板

对窗口 \`3,4,4,9,77,6,3,6,1\`：

- 算术均值：\`117/9=13\`
- 排序：\`1,3,3,4,4,6,6,9,77\`
- 中值：第 5 个数，\`4\`
- 最大值滤波：\`77\`
- 最小值滤波：\`1\`
- 高斯核滤波：\`23.063\`

口诀：**线性滤波做乘加；中值/最大/最小先排序；核中心必须对准待求像素。**

## 必须纠正的课件口径

第 6 章第 82、83 页的标题与标准定义相反。标准定义是：

- 开运算：\`先腐蚀，后膨胀\`，去小亮点、断细连接、平滑外轮廓。
- 闭运算：\`先膨胀，后腐蚀\`，填小黑洞、连小断裂、平滑内轮廓。

考试若沿用课件原话，建议在答案中同时写公式，避免只写名称：
\`A∘B=(A⊖B)⊕B\`，\`A•B=(A⊕B)⊖B\`。

## 临场计算检查

1. 概率和是否为 \`1\`。
2. 核权重和是否为 \`1\`；若不是，是否需要归一化。
3. 直方图均衡化使用 \`L-1\`，不是 \`L\`。
4. PSNR 的对数底数是 \`10\`；信息熵的对数底数是 \`2\`。
5. 中值取排序后的中间项，不是平均值。
6. 边界如何处理要写明：补零、复制、镜像或只算有效区域。

## 课件没讲清楚时的答题策略

- 先写对象和符号含义，再写公式，最后代数值。只写答案很难拿步骤分。
- 遇到核，先圈出核原点/中心；遇到形态学，再说明前景是 1 还是 0。
- 遇到取整、边界、卷积是否翻核等未说明条件，主动声明采用的约定。
- 课件动画导致公式缺失的部分，本套笔记已补入标准公式和可执行步骤。
- 第 6 章开闭运算页存在标签颠倒，答题用公式消除歧义。
`,_1=n=>{const e=/^---\r?\n([\s\S]*?)\r?\n---/,t=n.match(e);if(!t)return{attributes:{},body:n};const r=t[1],l=n.replace(e,"").trim(),i={};return r.split(`
`).forEach(o=>{const a=o.split(":");if(a.length>=2){const u=a[0].trim(),c=a.slice(1).join(":").trim();c==="true"?i[u]=!0:c==="false"?i[u]=!1:!isNaN(Number(c))&&c!==""?i[u]=Number(c):i[u]=c}}),{attributes:i,body:l}},Ga=Object.assign({"../contents/comm-princ/meta.json":d$,"../contents/comm-princ/总内容/meta.json":$$,"../contents/dsp/dsp-1/meta.json":_$,"../contents/dsp/meta.json":h$,"../contents/dsp/总/meta.json":g$,"../contents/em-fields/e-fields-anal/meta.json":S$,"../contents/em-fields/meta.json":w$,"../contents/em-fields/second-part/meta.json":C$,"../contents/em-fields/time-varying-fields/meta.json":P$,"../contents/em-fields/vector-analysis/meta.json":T$,"../contents/math/calc-1/meta.json":j$,"../contents/math/calc-2/meta.json":M$,"../contents/math/meta.json":O$,"../contents/math/series/meta.json":A$,"../contents/复变函数/integrals/meta.json":H$,"../contents/复变函数/meta.json":U$,"../contents/复变函数/residue/meta.json":Q$,"../contents/复变函数/series/meta.json":q$,"../contents/复变函数/记忆点/meta.json":K$,"../contents/数字图像处理/meta.json":Y$,"../contents/数字图像处理/第1章-绪论/meta.json":Z$,"../contents/数字图像处理/第2章-基础知识/meta.json":nm,"../contents/数字图像处理/第3章-图像增强/meta.json":tm,"../contents/数字图像处理/第4章-图像变换/meta.json":lm,"../contents/数字图像处理/第5章-图像复原/meta.json":om,"../contents/数字图像处理/第6章-图像分割/meta.json":um,"../contents/数字图像处理/第7章-图像压缩/meta.json":cm,"../contents/数字图像处理/说明/meta.json":dm}),qa=Object.assign({"../contents/comm-princ/总内容/总内容.md":pm,"../contents/dsp/dsp-1/discrete-signals.md":$m,"../contents/dsp/总/总内容.md":mm,"../contents/em-fields/e-fields-anal/basic-equations.md":_m,"../contents/em-fields/e-fields-anal/p-d.md":vm,"../contents/em-fields/second-part/三平.md":hm,"../contents/em-fields/second-part/全反射和全透射.md":ym,"../contents/em-fields/second-part/均匀平面电磁波的传播特性.md":gm,"../contents/em-fields/second-part/垂直入射.md":zm,"../contents/em-fields/second-part/导电媒质.md":Sm,"../contents/em-fields/time-varying-fields/faraday-law.md":km,"../contents/em-fields/time-varying-fields/maxwell-equations.md":wm,"../contents/em-fields/vector-analysis/circulation-curl.md":xm,"../contents/em-fields/vector-analysis/flux-divergence.md":Cm,"../contents/em-fields/vector-analysis/helmholtz.md":Em,"../contents/math/calc-1/continuity.md":Pm,"../contents/math/calc-1/limits.md":Rm,"../contents/math/calc-2/derivatives.md":Tm,"../contents/math/series/normal.md":Nm,"../contents/复变函数/integrals/high-order-derivatives.md":jm,"../contents/复变函数/residue/isolated-singularity.md":Dm,"../contents/复变函数/series/laurent.md":Mm,"../contents/复变函数/series/taylor.md":Lm,"../contents/复变函数/记忆点/记忆点.md":Om,"../contents/数字图像处理/第1章-绪论/00-考试重点与猜题清单.md":Bm,"../contents/数字图像处理/第1章-绪论/1.1-数字图像.md":Am,"../contents/数字图像处理/第1章-绪论/1.2-数字图像处理.md":Fm,"../contents/数字图像处理/第1章-绪论/1.3-相关学科和领域.md":Hm,"../contents/数字图像处理/第1章-绪论/1.4-应用与发展趋势.md":Im,"../contents/数字图像处理/第2章-基础知识/2.1-图像数字化.md":Um,"../contents/数字图像处理/第2章-基础知识/2.2-图像数据结构与彩色空间.md":Vm,"../contents/数字图像处理/第2章-基础知识/2.3-图像文件格式.md":Qm,"../contents/数字图像处理/第2章-基础知识/2.4-图像质量评价.md":Gm,"../contents/数字图像处理/第3章-图像增强/3.1-引言.md":qm,"../contents/数字图像处理/第3章-图像增强/3.2-直接灰度变换.md":Wm,"../contents/数字图像处理/第3章-图像增强/3.3-直方图修正与均衡化.md":Km,"../contents/数字图像处理/第3章-图像增强/3.4-图像平滑与统计滤波.md":Xm,"../contents/数字图像处理/第3章-图像增强/3.5-图像锐化.md":Ym,"../contents/数字图像处理/第4章-图像变换/4.1-傅里叶变换.md":Jm,"../contents/数字图像处理/第4章-图像变换/4.2-离散余弦变换.md":Zm,"../contents/数字图像处理/第4章-图像变换/4.3-小波变换及应用.md":bm,"../contents/数字图像处理/第5章-图像复原/5.1-图像复原的基本概念.md":n1,"../contents/数字图像处理/第5章-图像复原/5.2-图像退化模型.md":e1,"../contents/数字图像处理/第5章-图像复原/5.3-图像复原方法.md":t1,"../contents/数字图像处理/第5章-图像复原/5.4-图像几何校正.md":r1,"../contents/数字图像处理/第6章-图像分割/6.1-边缘检测.md":l1,"../contents/数字图像处理/第6章-图像分割/6.2-Hough变换.md":i1,"../contents/数字图像处理/第6章-图像分割/6.3-阈值分割与Otsu.md":o1,"../contents/数字图像处理/第6章-图像分割/6.4-区域分割与图割.md":a1,"../contents/数字图像处理/第6章-图像分割/6.5-形态学与开闭运算.md":u1,"../contents/数字图像处理/第6章-图像分割/6.6-FCN全卷积神经网络.md":s1,"../contents/数字图像处理/第7章-图像压缩/7.1-图像压缩背景.md":c1,"../contents/数字图像处理/第7章-图像压缩/7.2-霍夫曼编码与信息熵.md":f1,"../contents/数字图像处理/第7章-图像压缩/7.3-像素预测.md":d1,"../contents/数字图像处理/第7章-图像压缩/7.4-行程编码.md":p1,"../contents/数字图像处理/说明/公式与步骤.md":$1,"../contents/数字图像处理/说明/考试重点与猜题清单.md":m1}),v1=()=>{try{const n=[],e={},t=new Map,r=o=>{if(!t.has(o)){const a=`../contents/${o}/meta.json`,u=Ga[a]||{};t.set(o,{id:u.id||o,title:u.title||o,order:u.order||999,chapters:[],_chaptersMap:new Map})}return t.get(o)},l=(o,a)=>{if(!o._chaptersMap.has(a)){const u=`../contents/${o.id}/${a}/meta.json`,c=Ga[u]||{},m=a.match(/^(\d+)/),$=m?parseInt(m[1],10):999,p={id:c.id||a,title:c.title||a,order:c.order!==void 0?c.order:$,notes:[]};o._chaptersMap.set(a,p),o.chapters.push(p)}return o._chaptersMap.get(a)};return Object.keys(qa).forEach(o=>{try{const a=o.split("/");if(a.length===5){const u=a[2],c=a[3],m=a[4],$=qa[o],p=r(u),h=l(p,c),y=typeof $=="string"?$:"",{attributes:g,body:D}=_1(y),f=m.replace(".md",""),s=f.match(/^(\d+)/),d=s?parseInt(s[1],10):999,_=g.id||f,z=g.order!==void 0?g.order:d,w=g.title||f;h.notes.push({id:_,title:w,order:z});const x=`${u}/${c}/${_}`;e[x]=D}}catch(a){console.warn("Skipping file due to error:",o,a)}}),{catalog:Array.from(t.values()).sort((o,a)=>o.order-a.order).map(o=>(o.chapters.sort((a,u)=>a.order-u.order),o.chapters.forEach(a=>{a.notes.sort((u,c)=>u.order-c.order)}),delete o._chaptersMap,o)),notesContent:e}}catch(n){return console.error("Critical error in loadCatalog:",n),{catalog:[{id:"error",title:"Loading Error",chapters:[]}],notesContent:{}}}},{catalog:h1,notesContent:y1}=v1(),k1=h1,w1=y1,jo=(n,e="Startup Error")=>{document.body.innerHTML=`
        <div style="
            color: #d8000c; 
            background-color: #ffbaba;
            padding: 20px;
            margin: 20px;
            border: 1px solid #d8000c;
            border-radius: 5px;
            font-family: sans-serif;
        ">
            <h1 style="margin-top: 0;">${e}</h1>
            <pre style="white-space: pre-wrap; word-wrap: break-word;">${n.toString()}
${n.stack||""}</pre>
        </div>
    `},g1=async()=>{try{const{default:n}=await Bf(async()=>{const{default:t}=await import("./App--fQT7UBA.js");return{default:t}},[]);Ql.createRoot(document.getElementById("root")).render(Ao.jsx(ru.StrictMode,{children:Ao.jsx(n,{})}))}catch(n){jo(n)}};window.addEventListener("error",n=>jo(n.error||n.message,"Runtime Error"));window.addEventListener("unhandledrejection",n=>jo(n.reason,"Promise Rejection"));g1();export{S1 as R,z1 as a,k1 as c,Af as g,Ao as j,w1 as n,br as r};
