(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire1d24;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire1d24=o),o.register("Ujgju",(function(e,t){e.exports=Promise.all([import("./"+o("5V6iE").resolve("cYI1w")),o("22S8I")(new URL(o("5V6iE").resolve("9Dpy0"),import.meta.url).toString()),import("./"+o("5V6iE").resolve("5b8g1")),import("./"+o("5V6iE").resolve("dFv9D"))]).then((()=>o("8AonI")))})),o.register("22S8I",(function(e,t){var r=o("bDExm");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("link");if([].concat(n).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),r(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("bDExm",(function(e,t){var r={},n={},o={};e.exports=function(e,t){return function(i){var l=function(e){switch(e){case"preload":return n;case"prefetch":return o;default:return r}}(t);return l[i]?l[i]:l[i]=e.apply(null,arguments).catch((function(e){throw delete l[i],e}))}}})),o("5V6iE").register(JSON.parse('{"8iUX0":"connect_hardware.efe29100.js","dFv9D":"SettingsConnectHardware.c959b640.js","5b8g1":"SettingsConnectHardware.176435ec.js","9Dpy0":"SettingsConnectHardware.5cbd182e.css","cYI1w":"SettingsConnectHardware.d95aa848.js","7pN3b":"phishing.1096e7b7.js","8KxY3":"connect_hardware.9e2cd709.js"}'));var i=o("lDSNw"),l=o("lz7nT"),a=o("cZIbv");o("1KK14");var c=o("4yY1D"),s=o("dU2RF"),d=o("kBpKb"),u=o("bpTD2"),p=o("lMzyG"),f=(i=o("lDSNw"),a=o("cZIbv"),o("aanFI")),m=o("kn91D");const g=a.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,h=a.default.a`
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
`,E=a.default.a`
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
`;var v=o("5Doro"),y=o("a8kcR"),b=o("h5kyv"),w=o("d1qx3"),x=o("8DCD7"),D=o("bLLpR"),T=o("bcqzL");const S=e(i).lazy((()=>o("Ujgju")));c.fileLogger.init({provider:D.ClientFileLoggerProvider}),c.telemetry.init({appVersion:(0,w.getManifestVersion)()}),c.telemetry.setUser({id:b.analytics.getDeviceId()}),(0,x.initializeFeatureFlags)();const I=document.getElementById("root");(0,s.createRoot)(I).render(e(i).createElement(l.BrowserRouter,null,e(i).createElement(a.ThemeProvider,{theme:y.theme},e(i).createElement(v.QueryProvider,null,e(i).createElement(T.ThemedGlobalStyle,{backgroundColor:"#E2DFFE"}),e(i).createElement((()=>{const{t:t}=(0,p.useTranslation)();return e(i).createElement(g,null,e(i).createElement(E,{href:u.PHANTOM_WEBSITE_URL,target:"_blank",rel:"noopener noreferrer"},e(i).createElement(f.IconPhantomLogo,{width:32})),e(i).createElement(h,{"data-testid":"full-page-header-support-link",href:u.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},e(i).createElement(f.IconHelp,null),e(i).createElement(m.Text,{color:"#222222",size:16,weight:500,margin:"0 0 0 8px"},t("fullPageHeaderHelp"))))}),null),e(i).createElement(d.OnboardingAndConnectHardwareErrorBoundary,null,e(i).createElement(i.Suspense,{fallback:null},e(i).createElement(S,null))))))),b.analytics.capture("connectHardwareOpen");
//# sourceMappingURL=connect_hardware.efe29100.js.map
define=__define;})(window.define);