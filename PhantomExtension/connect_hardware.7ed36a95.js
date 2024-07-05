(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequire1d24;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequire1d24=i),i.register("ldEcq",(function(e,t){e.exports=Promise.all([i("j1yuj")(i("2FqAO").getBundleURL("gF3Ru")+i("eOkdY").resolve("ci5Je")),i("gx8Ji")(i("2FqAO").getBundleURL("gF3Ru")+i("eOkdY").resolve("9Dpy0")),i("j1yuj")(i("2FqAO").getBundleURL("gF3Ru")+i("eOkdY").resolve("gx0XP")),i("j1yuj")(i("2FqAO").getBundleURL("gF3Ru")+i("eOkdY").resolve("dJiOZ"))]).then((()=>i("gUsWu")))})),i.register("gx8Ji",(function(e,t){"use strict";var r=i("hE0rk");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("link");if([].concat(n).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),r(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),i.register("9CNaJ",(function(e,t){"use strict";var r=i("9MCQQ"),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function a(e){return r.isMemo(e)?u:c[e.$$typeof]||n}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=u;var f=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var i=d(r);i&&i!==y&&e(t,i,n)}var u=l(r);s&&(u=u.concat(s(r)));for(var c=a(t),m=a(r),g=0;g<u.length;++g){var b=u[g];if(!(o[b]||n&&n[b]||m&&m[b]||c&&c[b])){var x=p(r,b);try{f(t,b,x)}catch(e){}}}}return t}})),i.register("9MCQQ",(function(e,t){"use strict";e.exports=i("dJlAX")})),i.register("dJlAX",(function(t,r){
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n,o,i,u,c,a,f,l,s,p,d,y,m,g,b,x,h,v,S,O,w,E,P,$,j,T,C,F;e(t.exports,"AsyncMode",(function(){return n}),(function(e){return n=e})),e(t.exports,"ConcurrentMode",(function(){return o}),(function(e){return o=e})),e(t.exports,"ContextConsumer",(function(){return i}),(function(e){return i=e})),e(t.exports,"ContextProvider",(function(){return u}),(function(e){return u=e})),e(t.exports,"Element",(function(){return c}),(function(e){return c=e})),e(t.exports,"ForwardRef",(function(){return a}),(function(e){return a=e})),e(t.exports,"Fragment",(function(){return f}),(function(e){return f=e})),e(t.exports,"Lazy",(function(){return l}),(function(e){return l=e})),e(t.exports,"Memo",(function(){return s}),(function(e){return s=e})),e(t.exports,"Portal",(function(){return p}),(function(e){return p=e})),e(t.exports,"Profiler",(function(){return d}),(function(e){return d=e})),e(t.exports,"StrictMode",(function(){return y}),(function(e){return y=e})),e(t.exports,"Suspense",(function(){return m}),(function(e){return m=e})),e(t.exports,"isAsyncMode",(function(){return g}),(function(e){return g=e})),e(t.exports,"isConcurrentMode",(function(){return b}),(function(e){return b=e})),e(t.exports,"isContextConsumer",(function(){return x}),(function(e){return x=e})),e(t.exports,"isContextProvider",(function(){return h}),(function(e){return h=e})),e(t.exports,"isElement",(function(){return v}),(function(e){return v=e})),e(t.exports,"isForwardRef",(function(){return S}),(function(e){return S=e})),e(t.exports,"isFragment",(function(){return O}),(function(e){return O=e})),e(t.exports,"isLazy",(function(){return w}),(function(e){return w=e})),e(t.exports,"isMemo",(function(){return E}),(function(e){return E=e})),e(t.exports,"isPortal",(function(){return P}),(function(e){return P=e})),e(t.exports,"isProfiler",(function(){return $}),(function(e){return $=e})),e(t.exports,"isStrictMode",(function(){return j}),(function(e){return j=e})),e(t.exports,"isSuspense",(function(){return T}),(function(e){return T=e})),e(t.exports,"isValidElementType",(function(){return C}),(function(e){return C=e})),e(t.exports,"typeOf",(function(){return F}),(function(e){return F=e}));var M="function"==typeof Symbol&&Symbol.for,k=M?Symbol.for("react.element"):60103,R=M?Symbol.for("react.portal"):60106,_=M?Symbol.for("react.fragment"):60107,N=M?Symbol.for("react.strict_mode"):60108,B=M?Symbol.for("react.profiler"):60114,H=M?Symbol.for("react.provider"):60109,L=M?Symbol.for("react.context"):60110,A=M?Symbol.for("react.async_mode"):60111,D=M?Symbol.for("react.concurrent_mode"):60111,U=M?Symbol.for("react.forward_ref"):60112,J=M?Symbol.for("react.suspense"):60113,q=M?Symbol.for("react.suspense_list"):60120,z=M?Symbol.for("react.memo"):60115,I=M?Symbol.for("react.lazy"):60116,Q=M?Symbol.for("react.block"):60121,Y=M?Symbol.for("react.fundamental"):60117,W=M?Symbol.for("react.responder"):60118,X=M?Symbol.for("react.scope"):60119;function V(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case k:switch(e=e.type){case A:case D:case _:case B:case N:case J:return e;default:switch(e=e&&e.$$typeof){case L:case U:case I:case z:case H:return e;default:return t}}case R:return t}}}function Z(e){return V(e)===D}n=A,o=D,i=L,u=H,c=k,a=U,f=_,l=I,s=z,p=R,d=B,y=N,m=J,g=function(e){return Z(e)||V(e)===A},b=Z,x=function(e){return V(e)===L},h=function(e){return V(e)===H},v=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===k},S=function(e){return V(e)===U},O=function(e){return V(e)===_},w=function(e){return V(e)===I},E=function(e){return V(e)===z},P=function(e){return V(e)===R},$=function(e){return V(e)===B},j=function(e){return V(e)===N},T=function(e){return V(e)===J},C=function(e){return"string"==typeof e||"function"==typeof e||e===_||e===D||e===B||e===N||e===J||e===q||"object"==typeof e&&null!==e&&(e.$$typeof===I||e.$$typeof===z||e.$$typeof===H||e.$$typeof===L||e.$$typeof===U||e.$$typeof===Y||e.$$typeof===W||e.$$typeof===X||e.$$typeof===Q)},F=V})),i("eOkdY").register(JSON.parse('{"gF3Ru":"connect_hardware.7ed36a95.js","dJiOZ":"SettingsConnectHardware.a51ea76b.js","gx0XP":"SettingsConnectHardware.c6bdffb4.js","9Dpy0":"SettingsConnectHardware.5cbd182e.css","ci5Je":"SettingsConnectHardware.68cbfb4e.js","3M59o":"phishing.f480c608.js","7h3OA":"connect_hardware.69b26c5f.js","b0KbB":"metaplex.a7fe443c.js","2IiBH":"metaplex.a9c3aa20.js","dW2iO":"multichainMigration.0d9b34d3.js"}'));var u=i("29o0l"),c=i("iQL9s"),a=i("gkfw3");i("8gulk");var f=i("csW2r"),l=i("3TM8f"),s=i("8Ub2g"),p=i("2onIY"),d=i("43063"),y=(u=i("29o0l"),a=i("gkfw3"),i("j81qC")),m=i("27SDj");const g=a.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,b=a.default.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  color: #aaa;
  svg {
    fill: #222222;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,x=a.default.a`
  display: flex;
  color: #aaa;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  svg {
    fill: #222222;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;var h=i("41yT6"),v=i("4K7Du"),S=i("twk6W"),O=i("gcdBN"),w=i("dNPkM"),E=i("17H3T"),P=i("ilZfT");const $=t(u).lazy((()=>i("ldEcq")));f.fileLogger.init({provider:E.ClientFileLoggerProvider}),f.telemetry.init({appVersion:(0,O.getManifestVersion)()}),f.telemetry.setUser({id:S.analytics.getDeviceId()}),(0,w.initializeFeatureFlags)();const j=document.getElementById("root");(0,l.createRoot)(j).render(t(u).createElement(c.BrowserRouter,null,t(u).createElement(a.ThemeProvider,{theme:v.theme},t(u).createElement(h.QueryProvider,null,t(u).createElement(P.ThemedGlobalStyle,{backgroundColor:"#E2DFFE"}),t(u).createElement((()=>{const{t:e}=(0,d.useTranslation)();return t(u).createElement(g,null,t(u).createElement(x,{href:p.PHANTOM_WEBSITE_URL,target:"_blank",rel:"noopener noreferrer"},t(u).createElement(y.IconPhantomLogo,{width:32})),t(u).createElement(b,{"data-testid":"full-page-header-support-link",href:p.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},t(u).createElement(y.IconHelp,null),t(u).createElement(m.Text,{color:"#222222",size:16,weight:500,margin:"0 0 0 8px"},e("fullPageHeaderHelp"))))}),null),t(u).createElement(s.OnboardingAndConnectHardwareErrorBoundary,null,t(u).createElement(u.Suspense,{fallback:null},t(u).createElement($,null))))))),S.analytics.capture("connectHardwareOpen")}();
//# sourceMappingURL=connect_hardware.7ed36a95.js.map
define=__define;})(window.define);