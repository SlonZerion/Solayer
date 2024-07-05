(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("8AonI",(function(o,r){var i;i=o.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),t(o.exports,"default",(function(){return m}),(function(e){return m=e}));var a=n("7dqns"),l=n("c1thM"),c=n("lDSNw"),u=n("LqQFk"),d=n("03gS4"),s=n("gMNJN"),p=n("gdILj"),f=n("2Nky4"),g=n("8GZOc"),h=n("bQHLl"),v=n("1GS29"),w=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((o=o.apply(e,t||[])).next())}))};var m=()=>{var t;const{mutateAsync:n}=s.hooks.useConnectLedgerAccounts(),{hardwareStepStack:o,pushStep:r,popStep:i,currentStep:m,setOnConnectHardwareAccounts:x,setOnConnectHardwareDone:k,setExistingAccounts:y}=(0,g.useHardwareOnboardingStore)(),{data:C=[],isFetched:E,isError:b}=s.hooks.useAllMultiChainAccounts(),S=(0,u.default)(o,((e,t)=>(null==e?void 0:e.length)===t.length)),A=o.length>(null!=S?S:[]).length,B=0===(null==S?void 0:S.length),O={initial:{x:B?0:A?150:-150,opacity:B?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},H=(0,c.useCallback)((()=>{var e,t,n,o,r;(null===(e=m())||void 0===e?void 0:e.props.preventBack)||((null===(t=m())||void 0===t?void 0:t.props.onBackCallback)&&(null===(r=null===(n=m())||void 0===n?void 0:(o=n.props).onBackCallback)||void 0===r||r.call(o)),i())}),[m,i]);return(0,p.useEffectOnce)((()=>{x((e=>w(void 0,void 0,void 0,(function*(){yield n(e)})))),k((()=>window.close())),r(e(c).createElement(h.ConnectHardware,null))}),0===o.length),(0,c.useEffect)((()=>{y({data:C,isFetched:E,isError:b})}),[C,E,b,y]),e(c).createElement(v.ConnectHardwareContainer,null,e(c).createElement(d.StepHeader,{totalSteps:f.TOTAL_CONNECT_HARDWARE_STEPS,onBackClick:H,showBackButton:!(null===(t=m())||void 0===t?void 0:t.props.preventBack),currentStepIndex:o.length-1}),e(c).createElement(a.AnimatePresence,{mode:"wait"},e(c).createElement(l.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${o.length}_${null==S?void 0:S.length}`},O),e(c).createElement(v.ConnectHardwareContainerPadding,null,m()))))}})),n.register("03gS4",(function(o,r){t(o.exports,"StepHeader",(function(){return h}));var i=n("4y59b"),a=n("lDSNw"),l=n("cZIbv"),c=n("gR1av"),u=n("miiws"),d=n("aanFI"),s=n("6l2nq");const p=(0,l.default)(s.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
`,f=l.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,g=l.default.div`
  width: 24px;
  height: 24px;
`,h=({onBackClick:t,totalSteps:n,currentStepIndex:o,isHidden:r,showBackButtonOnFirstStep:l,showBackButton:s=!0})=>{const h=s&&(l||0!==o);return e(a).createElement(p,{opacity:r?0:1},h?e(a).createElement(c.ChevronCircle,{right:1,onClick:t},e(a).createElement(d.IconChevronLeft,null)):e(a).createElement(g,null),e(a).createElement(f,null,(0,i.range)(n).map((t=>{const n=t<=o?"#AB9FF2":"#333";return e(a).createElement(u.Circle,{key:t,diameter:12,color:n})}))),e(a).createElement(g,null))}})),n.register("gR1av",(function(e,o){t(e.exports,"ChevronCircle",(function(){return a}));var r=n("cZIbv"),i=n("miiws");const a=(0,r.default)(i.Circle)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${e=>e.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${e=>e.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${e=>e.top?`top: ${e.top}px;`:""}
    ${e=>e.right?`right: ${e.right}px;`:""}
  }
`})),n.register("2Nky4",(function(e,n){t(e.exports,"TOTAL_CONNECT_HARDWARE_STEPS",(function(){return o}));const o=3}));
//# sourceMappingURL=SettingsConnectHardware.c959b640.js.map
define=__define;})(window.define);