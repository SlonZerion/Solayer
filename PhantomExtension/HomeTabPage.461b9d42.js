(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("izxKn",(function(a,i){var r;r=a.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return $}));var l=n("4xbAj"),o=n("iOvk1"),s=n("5slFC"),c=n("43063"),u=n("RVqnc"),d=n("cemvj"),m=n("29o0l"),g=n("6RB6n"),p=n("8cn6w"),b=n("aWXnn"),f=n("kckw8"),h=n("lsCEZ"),x=n("gGtJv"),y=n("i1NO2"),k=n("brWcm"),E=n("dKFQQ"),w=n("dRJ3q"),v=n("bJlxR"),B=n("d1JH7"),C=n("ih5ai"),A=n("d1Nvi"),T=n("gX5Te"),S=n("feAoQ"),M=n("kdiZd"),I=n("twk6W"),j=n("5iL5x"),F=n("lJodL");const D=e(m).memo((({visibilityOverrides:t,fungibles:n,isMainnet:a,onMouseEnter:i})=>{var r;const{t:l}=(0,c.useTranslation)(),{pushDetailView:s}=(0,y.useDetailViews)(),u=(0,m.useRef)(document.getElementById("tab-content"));(0,m.useEffect)((()=>{const e=document.getElementById("tab-content");e&&(u.current=e)}),[]);const d=(0,m.useCallback)((({networkID:t,chainName:n,fungibleKey:a,name:i,symbol:r,tokenAddress:l,type:c,walletAddress:u,spamStatus:d})=>{I.analytics.capture("assetDetailClick",{data:{address:l,chain:n,chainId:o.Chains.getChainID(t),isNativeOfType:n,networkId:t,type:"fungible",spamStatus:d,name:i}}),s(e(m).createElement(F.FungibleDetailPage,{networkID:t,chainName:n,name:i,symbol:r,fungibleKey:a,tokenAddress:l,type:c,walletAddress:u}))}),[s]),p=(0,m.useCallback)((({key:r,index:o,style:s})=>{const c=Math.min(o+1,n.length),u=[];for(let r=o;r<c;r++){const s=n[r],c=s.type,{chain:g,name:p,symbol:b,key:f,tokenAddress:h,walletAddress:x}=s.data,y=null!=p?p:l("assetDetailUnknownToken");u.push(e(m).createElement(E.FungibleTokenRow,Object.assign({},(0,E.fungibleToProps)(s,t),{key:`${f}-${o}`,onClick:()=>d({networkID:g.id,chainName:g.name,fungibleKey:f,name:y,symbol:b,tokenAddress:h,type:c,walletAddress:x,spamStatus:s.data.spamStatus}),onMouseEnter:i,showBalance:!0,showCurrencyValues:a})))}return e(m).createElement("div",{key:r,style:s},u)}),[n,a,d,i,l,t]);return e(m).createElement(g.WindowScroller,{scrollElement:null!==(r=u.current)&&void 0!==r?r:void 0},(({height:t=0,isScrolling:a,registerChild:i,scrollTop:r})=>e(m).createElement(g.AutoSizer,{disableHeight:!0,style:{width:"100%"}},(({width:l})=>e(m).createElement("div",{ref:i},e(m).createElement(g.List,{autoHeight:!0,width:l,height:t,scrollTop:r,isScrolling:a,rowCount:n.length,rowHeight:E.FUNGIBLE_TOKEN_ROW_HEIGHT+10,rowRenderer:p}))))))})),R=(0,u.toMilliseconds)({seconds:5}),H=(0,u.toMilliseconds)({seconds:10});var $=()=>{const{data:t,isHidingAllFungibles:n,isLoading:a,isErrorTokens:i,isReadOnlyAccount:r,refetch:o,shouldShowPartialError:u,partialErrorMessage:g}=(()=>{const{data:e}=T.hooks.useSelectedMultiChainAccount(),{showSendFungibleSelectionModal:t}=(0,k.useLegacyModals)(),n=(0,A.useNavigateToSwapper)(),{handleShowModalVisibility:a,handleHideModalVisibility:i}=(0,S.useModals)(),r=(0,m.useCallback)((()=>{e&&a("onramp")}),[a,e]),o=(0,m.useCallback)((()=>{e&&a("receive",{account:e,onCloseClick:()=>i("receive")})}),[i,a,e]),u=(0,m.useCallback)((()=>{n({})}),[n]),{t:g}=(0,c.useTranslation)(),p=(0,m.useMemo)((()=>({manageTokenList:g("homeManageTokenList"),errorTitle:g("homeErrorTitle"),errorDescription:g("homeErrorDescription"),errorButton:g("homeErrorButtonText")})),[g]),{ctaActions:b,shouldShowPartialError:f,partialErrorMessage:h}=T.hooks.useHomeViewState({onTappingBuy:r,onTappingReceive:o,onTappingSend:t,onTappingSwap:u,account:e}),{accountBalance:x,accountId:y}=(0,m.useMemo)((()=>{var t,n;return{accountBalance:null===(t=null==e?void 0:e.balance)||void 0===t?void 0:t.value,accountId:null!==(n=null==e?void 0:e.identifier)&&void 0!==n?n:""}}),[e]),E=null==e?void 0:e.isReadOnly,w=!T.hooks.useIsTestnetMode(),v=(0,s.useFungiblesStore)((e=>e.resetSendSlice));(0,m.useEffect)((function(){y&&v()}),[y,v]);const{fungibles:B,visibilityOverrides:C,portfolio:I,isHidingAllFungibles:j,isLoadingVisibilityOverrides:F,isLoadingTokens:D,isLoadingPrices:$,isErrorTokens:V,refetch:N}=T.hooks.useGetFungibleBalances({useTokenQueryOptions:{staleTime:R,refetchInterval:H}}),{mutate:O}=T.hooks.useSetMultiChainAccountBalance();(0,l.useSetAccountBalanceEffect)({accountBalance:x,accountId:y,value:I.value,setAccountBalance:O});const P=T.hooks.useSelectedNetworks();(0,M.useWalletBalanceAnalytics)(B,P,y);const L=(0,m.useMemo)((()=>B.filter((e=>(0,d.isVisibleFungible)(C,{key:e.data.key,spamStatus:e.data.spamStatus})))),[B,C]);return{data:(0,m.useMemo)((()=>({fungibles:L,earnings:I.earnings,value:I.value,isMainnet:w,translations:p,visibilityOverrides:C,ctaActions:b,showReceiveModal:o,showSendFungibleSelectionModal:t,handleShowModalVisibility:a,handleHideModalVisibility:i})),[C,L,I,p,w,o,t,a,i,b]),isHidingAllFungibles:j,isLoading:F||D||$,isErrorTokens:V,isReadOnlyAccount:E,refetch:N,shouldShowPartialError:f,partialErrorMessage:h}})(),{fungibles:y,translations:E,isMainnet:I,earnings:F,value:$,visibilityOverrides:V,ctaActions:N,handleShowModalVisibility:O}=t,{manageTokenList:P,errorTitle:L,errorDescription:z,errorButton:_}=E,W=y.length>0;return e(m).createElement(b.Column,{align:"center",padding:"16px"},e(m).createElement(w.Header,{earnings:F,value:$,hasFungibles:W,isErrorTokens:i,isLoading:a,isHidingAllFungibles:n,isReadOnlyAccount:r,showDollarValues:I,shouldShowPartialError:u,partialErrorMessage:g,ctaActions:N}),!r&&e(m).createElement(e(m).Fragment,null,e(m).createElement(C.ZeroBalanceBannersVisibility,null),e(m).createElement(p.ActionBannersVisibility,null)),!(0,j.isTestEnvironment)()&&e(m).createElement(e(m).Fragment,null,e(m).createElement(h.HelloBitcoinInterstitialVisibility,null),e(m).createElement(f.ForceUpgradeInterstitialVisibility,null)),a?[1,2,3].map((t=>e(m).createElement(x.RowSkeletonLoader,{key:`fungible-token-row-loader-${t}`}))):W?e(m).createElement(D,{visibilityOverrides:V,fungibles:y,isMainnet:I}):n?null:e(m).createElement(v.HomeError,{title:L,description:z,buttonText:_,refetch:o}),a?null:W||n?e(m).createElement(B.ManageTokenListButton,{buttonText:P,onClick:()=>O("fungibleVisibility")}):null)}})),n.register("8cn6w",(function(a,i){t(a.exports,"ActionBannersVisibility",(function(){return B}));var r=n("3ljHn"),l=n("ibwoK"),o=n("29o0l"),s=n("9w5Wb"),c=n("gkfw3"),u=n("gX5Te"),d=n("4RT7E"),m=n("gcdBN"),g=n("j81qC"),p=n("6I6Pd"),b=n("dd8D3"),f=n("5bn5I");const h=c.default.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${e=>e.animate?"height: "+(e.shouldCollapse?"100px":"120px"):""}
`,x=c.default.div`
  transition: transform 0.5s ease;
  width: 100%;
`,y=(0,c.default)(p.IconBackground)``,k=c.default.div`
  visibility: ${e=>e.isVisible?"visible":"hidden"};
`,E=c.default.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,w=e(o).memo((({banners:t,currentIndex:n,hasNextBanner:a,hasPrevBanner:i,onNextBannerClick:r,onPrevBannerClick:l})=>{const s=t.length<=1;return e(o).createElement(h,{animate:t.length>0,shouldCollapse:s},e(o).createElement(x,null,e(o).createElement(f.ActionBannerList,{banners:t,currentIndex:n}),!s&&e(o).createElement(E,null,e(o).createElement(k,{isVisible:i},e(o).createElement(y,{onClick:l},e(o).createElement(g.IconArrowLeftShort,null))),e(o).createElement(b.default,{numOfItems:t.length,currentIndex:n,maxVisible:5}),e(o).createElement(k,{isVisible:a},e(o).createElement(y,{onClick:r},e(o).createElement(g.IconArrowRightShort,null))))))})),v=()=>{const t=(()=>{const{data:t={banners:[]}}=u.hooks.useActionBanners({platform:"extension",appVersion:(0,m.getManifestVersion)()}),{data:n}=u.hooks.useSelectedMultiChainAccountIdentifier(),{banners:a}=t,i=e(s)(n),[r,c]=(0,o.useState)(0),g=(0,o.useCallback)((()=>{c((e=>e+1))}),[]),p=(0,o.useCallback)((()=>{c((e=>e-1))}),[]);return(0,o.useEffect)((()=>{if(a.length&&n)if(i!==n)c(0);else if(r>=a.length)c(a.length-1);else{const e=a[r],t=(0,l.generateActionBannerBaseAnalyticsPayload)(e);d.actionBannerAnalytics.onBannerSeen(t)}}),[r,a,n,i]),(0,o.useMemo)((()=>({banners:a,currentIndex:r,hasNextBanner:r<a.length-1,hasPrevBanner:r>0,onNextBannerClick:g,onPrevBannerClick:p})),[a,r,p,g])})();return e(o).createElement(w,Object.assign({},t))},B=()=>{const{data:[t]}=(0,r.useFeatureFlags)(["kill-action-banners"]);return t?null:e(o).createElement(v,null)}})),n.register("4RT7E",(function(e,a){t(e.exports,"actionBannerAnalytics",(function(){return l}));var i=n("ibwoK"),r=n("twk6W");const l=new(0,i.ActionBannerAnalytics)(r.analytics)})),n.register("dd8D3",(function(a,i){t(a.exports,"default",(function(){return d}));var r=n("29o0l"),l=n("gkfw3");const o=l.default.div`
  display: flex;
  justify-content: ${e=>e.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${e=>9*(e.maxVisible-1)+18}px;
`,s=l.default.div`
  align-items: center;
  display: flex;
  ${e=>e.shouldShift&&l.css`
      transform: translateX(calc(-${9}px * ${e.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,c=l.default.div`
  align-items: center;
  background-color: #999999;
  border-radius: 95px;
  display: flex;
  height: ${5}px;
  justify-content: center;
  margin: 0 ${2}px;
  min-width: ${5}px;
  transition: all 0.3s ease-in-out;
  ${e=>e.isActive&&l.css`
      min-width: ${14}px;
    `}
  ${e=>e.isSmall&&l.css`
      min-width: 3px;
      margin: 0 ${2}px;
      height: 3px;
    `}
`,u=l.default.div`
  width: ${14}px;
  height: ${5}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${2}px;
  background-color: #ab9ff2;
  transition: transform 0.3s ease-in-out;
  ${e=>e.position&&l.css`
      transform: translateX(${9*e.position}px);
    `}
`;var d=({numOfItems:t,currentIndex:n,maxVisible:a=5})=>{const i=t>a&&n>a-3,l=i?n-(a-3):0;return e(r).createElement(o,{shouldCenter:a>t,maxVisible:a},e(r).createElement(s,{shouldShift:i,shiftAmount:l},Array.from({length:t}).map(((t,a)=>{const l=(a===n-2||a===n+2)&&i;return e(r).createElement(c,{key:`pagination-dot-${a}`,isActive:n===a,isSmall:l})})),e(r).createElement(u,{position:n})))}})),n.register("5bn5I",(function(a,i){t(a.exports,"ActionBannerList",(function(){return u}));var r=n("29o0l"),l=n("gkfw3"),o=n("clXr3");const s=l.default.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${e=>`translateX(${-100*e.currentIndex}%)`};
`,c=l.default.li`
  align-items: center;
  display: flex;
  height: 74px;
  flex: 0 0 100%;
  padding: ${e=>e.isActive?"0":e.isNext||e.isPrevious?"0 6px":"0"};
`,u=({banners:t,currentIndex:n})=>e(r).createElement(s,{currentIndex:n},t.map(((t,a)=>e(r).createElement(c,{key:t.id,isActive:n===a,isNext:n+1===a,isPrevious:n-1===a},e(r).createElement(o.ActionBannerListItem,{banner:t,isActive:n===a})))))})),n.register("clXr3",(function(a,i){t(a.exports,"ActionBannerListItem",(function(){return v}));var r=n("43063"),l=n("ibwoK"),o=n("lz5BI"),s=n("29o0l"),c=n("gkfw3"),u=n("gX5Te"),d=n("43gjF"),m=n("feAoQ"),g=n("4RT7E"),p=n("hFkH3"),b=n("j81qC"),f=n("27SDj");const h=(0,c.default)(o.motion.button)`
  background: none;
  background-color: rgba(60, 49, 91, 0.4);
  border: 1px solid rgb(60, 49, 91);
  border-radius: 8px;
  cursor: pointer;
  height: ${e=>e.isActive?74:.9*74}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
  padding: 10px 12px;
  width: 100%;

  &:hover {
    background-color: rgba(60, 49, 91, 0.6);
  }
`,x=(0,c.default)(o.motion.div)`
  align-items: center;
  display: flex;
`,y=c.default.img`
  margin-right: 12px;
  width: 44px;
`,k=(0,c.default)(f.Text).attrs({lineHeight:17,size:14})`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  text-align: left;
`,E=c.default.div`
  position: relative;
  top: -15px;
  right: -3px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  height: 20px;
  justify-content: center;
  width: 20px;
`,w=e(s).memo((({banner:t,isActive:n,onClickBanner:a,onCloseBanner:i})=>e(s).createElement(h,{layout:!0,onClick:a,isActive:n},e(s).createElement(x,{layout:!0},e(s).createElement(y,{src:t.imageUrl}),e(s).createElement(k,{weight:600},t.description),e(s).createElement(E,{onClick:i},e(s).createElement(b.IconClose,{fill:"#ffffff",width:8})))))),v=t=>{const n=(({banner:t,isActive:n})=>{const{t:a}=(0,r.useTranslation)(),i=(0,d.useDeepLink)(),{mutateAsync:o}=u.hooks.useDismissActionBanner(),{handleShowModalVisibility:c,handleHideModalVisibility:b}=(0,m.useModals)(),f=(0,s.useCallback)((n=>{const r=(0,l.generateActionBannerBaseAnalyticsPayload)(t);switch(g.actionBannerAnalytics.onBannerClick(r),t.bannerType){case l.ActionBannerType.DirectLink:{const{destinationType:e,url:a}=t;i(n,{destinationType:e,url:a});break}case l.ActionBannerType.Modal:{const{interstitial:r,destinationType:o,url:u}=t,{title:d,lineItems:m=[],imageUrl:f,primaryButtonText:h=a("commandContinue"),secondaryButtonText:x=a("commandDismiss")}=r,y=(0,l.generateActionBannerInterstitialAnalyticsPayload)(t),k=m.map((e=>({icon:e.imageUrl,subtitle:e.description,title:e.title})));c("interstitial",{bodyTitle:d,details:k,icon:f,onDismiss:()=>{g.actionBannerAnalytics.onInterstitialDismiss(y)},FooterComponent:()=>e(s).createElement(p.ButtonPair,{primaryText:h,secondaryText:x,onPrimaryClicked:()=>{i(n,{destinationType:o,url:u}),g.actionBannerAnalytics.onInterstitialPrimaryClick(y),b("interstitial")},onSecondaryClicked:()=>{g.actionBannerAnalytics.onInterstitialSecondaryClick(y),b("interstitial")}})}),g.actionBannerAnalytics.onInterstitialSeen(y);break}}}),[t,c,b,a,i]),h=(0,s.useCallback)((e=>{e.stopPropagation(),o({actionBannerId:t.id});const n=(0,l.generateActionBannerBaseAnalyticsPayload)(t);g.actionBannerAnalytics.onBannerDismiss(n)}),[t,o]);return(0,s.useMemo)((()=>({isActive:n,banner:t,onClickBanner:f,onCloseBanner:h})),[t,n,f,h])})(t);return e(s).createElement(w,Object.assign({},n))}})),n.register("dRJ3q",(function(a,i){t(a.exports,"Header",(function(){return R}));var r=n("43063"),l=n("56oyT"),o=n("RVqnc"),s=n("29o0l"),c=n("gkfw3"),u=n("aWXnn"),d=n("lq7YC"),m=n("j81qC"),g=n("634r8"),p=n("bf8Wb"),b=n("hiI91"),f=n("27SDj"),h=n("c8OXT"),x=n("89k2q");const y=(0,c.default)(u.Column).attrs({align:"center"})`
  width: ${h.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,k=(0,c.default)(u.Column).attrs({align:"center"})`
  margin-top: 2rem;
`,E=(0,c.default)(u.Column).attrs({align:"center",justify:"center",width:"100%"})`
  height: 5.3rem;
`,w=(0,c.default)(b.SkeletonLoader).attrs({height:"8px",borderRadius:"6px",backgroundColor:"#484848"})`
  opacity: 0.2;
`,v=(0,c.default)(g.Row)`
  height: 8px;
  border-radius: 6px;
  background-color: ${(0,o.hexToRGB)("#999999",.5)};
  opacity: 0.5;
`,B=(0,c.default)(p.ShrinkingText)`
  margin-bottom: 11px;
`,C=c.default.div`
  display: flex;
  flex-direction: row;
  padding: 16px 5px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  border-radius: 62px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.2);
`,A=(0,c.default)(f.Text).attrs({size:15,weight:"600",color:"#FFF",lineHeight:20})``,T=(0,c.default)(f.Text).attrs({size:36,weight:"bold",color:"#777"})``,S=(0,c.default)(g.Row).attrs({justify:"center"})``,M=(0,c.default)(f.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,I=(0,c.default)(f.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,j=c.default.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 326px;
  margin-top: 2rem;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,F=c.default.div`
  padding: 16px;
  padding-bottom: 0px;
`,D=c.default.div`
  padding: 32px 16px;
  width: 100%;
`,R=e(s).memo((({hasFungibles:t,isErrorTokens:n,isLoading:a,isHidingAllFungibles:i,isReadOnlyAccount:l,value:c,earnings:u,showDollarValues:g,shouldShowPartialError:p,partialErrorMessage:b,ctaActions:f})=>{const{t:h}=(0,r.useTranslation)(),R=$(u),L=H({earnings:u,isNeutral:!g||a||i}),z=V(c),_=N(u),W=O(c,u),{buttonDisabled:q}=P({isLoading:a,isEnabled:t||i,isErrorTokens:n});return e(s).createElement(y,{background:L},p?e(s).createElement(F,null,e(s).createElement(x.PartialErrorBanner,{partialErrorMessage:b})):null,e(s).createElement(k,null,g?a?e(s).createElement(E,null,e(s).createElement(w,{width:"184px",margin:"0 0 10px 0"}),e(s).createElement(w,{width:"112px"})):t||i?e(s).createElement(e(s).Fragment,null,e(s).createElement(B,{maxFontSize:38,fontWeight:600},z),e(s).createElement(S,null,e(s).createElement(M,{color:R},_),e(s).createElement(I,{color:R,backgroundColor:(0,o.hexToRGB)(R,.1)},W))):n?e(s).createElement(E,null,e(s).createElement(v,{width:"184px",margin:"0 0 10px 0"}),e(s).createElement(v,{width:"112px"})):null:e(s).createElement(E,null,e(s).createElement(T,null,"–"))),l?e(s).createElement(j,null,e(s).createElement(C,null,e(s).createElement(m.IconEye,{width:20,height:20,fill:"#FFFFFF"}),e(s).createElement(A,null,h("readOnlyAccountBannerWarning")))):e(s).createElement(D,null,e(s).createElement(d.CTABar,{disabled:q,actions:f,uiContextName:"home",maxButtons:4})))})),H=({earnings:e,isNeutral:t})=>t||void 0===e||0===e?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":e>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)",$=e=>void 0===e||0===e?"#777777":e>0?"#21E56F":"#EB3742",V=e=>void 0===e?"-":0===e?"$0.00":(0,o.formatDollarAmount)(e),N=e=>void 0===e?"-":0===e?"+$0.00":(0,o.formatDollarAmount)(e,{includePlusPrefix:!0}),O=(e,t)=>{const n=void 0===t;return void 0===e||n?"-":`${n||t>=0?"+":"-"}${Math.abs((0,l.calculatePercentChange)(e-t,e)).toFixed(2)}%`},P=({isLoading:e,isEnabled:t,isErrorTokens:n})=>{let a="primary",i=!1;switch(!0){case e:a="secondary",i=!0;break;case t:a="primary",i=!1;break;case n:a="secondary",i=!0}return{buttonTheme:a,buttonDisabled:i}}})),n.register("lq7YC",(function(a,i){t(a.exports,"CTABar",(function(){return x}));var r=n("43063"),l=n("9yJOd"),o=n("29o0l"),s=n("gkfw3"),c=n("feAoQ"),u=n("6UR7D"),d=n("h7kan");const m=s.default.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${e=>`repeat(${e.buttonCount}, minmax(0, 1fr));`};
  width: 100%;
  height: 74px;
`,g=s.default.button`
  display: flex;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 16px;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`,p=s.default.div`
  height: 24px;
  overflow: hidden;
`,b=(0,s.default)(g)`
  background: #2a2a2a;
  * {
    color: ${e=>e.theme.grayLight};
  }
  &:hover:enabled {
    background: #333333;
  }
`,f=(0,s.default)(g)`
  background: #2a2a2a;
  * {
    color: ${e=>e.theme.grayLight};
  }
  &:hover:enabled {
    background: #333333;
  }
`,h=s.default.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  word-break: break-all;
`;function x({actions:t,shortcuts:n,hostname:a,headerText:i,maxButtons:s,uiContextName:g,disabled:x=!1}){var y;const{t:k}=(0,r.useTranslation)(),E=t.primary.length+t.more.length+(null!==(y=null==n?void 0:n.length)&&void 0!==y?y:0),w=t.more.length>0,v=Math.min(t.primary.length+(w?1:0),s),{handleShowModalVisibility:B,handleHideModalVisibility:C}=(0,c.useModals)(),A=(0,o.useCallback)(((e,n)=>{u.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:{name:g},position:n,type:e.type,typeSpecificMetadata:e.typeSpecificMetadata,maxButtons:s,primaryActions:t.primary,moreActions:t.more})}),[s,t.more,t.primary,g]);return e(o).createElement(m,{buttonCount:v},t.primary.map((t=>{var n;return e(o).createElement(b,{disabled:x,key:t.type,type:"button",onClick:()=>{A(t,"primary"),t.onClick(t.type)}},e(o).createElement(p,null,e(o).createElement(d.CTAIcon,{color:x?"gray":"accentPrimary",type:t.type})),e(o).createElement(h,null,null!==(n=t.singleWordAltText)&&void 0!==n?n:t.text))})),w?e(o).createElement(f,{disabled:x,type:"button",onClick:()=>{u.fungibleAnalytics.ctaBarTrackMoreButtonClick({uiContext:{name:g},maxButtons:s,totalButtons:E}),B("callToActionSheet",{headerText:i,actions:t,shortcuts:n,hostname:a,onClose:()=>{C("callToActionSheet")},trackAction:e=>{A(e,"more")}})}},e(o).createElement(l.icons.MoreHorizontal,{size:24,color:"accentPrimary"}),e(o).createElement(h,null,k("commandMore"))):null)}})),n.register("6UR7D",(function(e,a){t(e.exports,"fungibleAnalytics",(function(){return l}));var i=n("5slFC"),r=n("twk6W");const l=new(0,i.FungibleAnalytics)(r.analytics)})),n.register("bJlxR",(function(a,i){t(a.exports,"HomeError",(function(){return h}));var r=n("29o0l"),l=n("gkfw3"),o=n("aWXnn"),s=n("j81qC"),c=n("634r8"),u=n("27SDj");const d=(0,l.default)(o.Column).attrs({align:"center"})``,m=l.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,g=(0,l.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,p=(0,l.default)(u.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,b=(0,l.default)(u.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,f=(0,l.default)(u.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,h=e(r).memo((t=>e(r).createElement(d,null,e(r).createElement(m,null,e(r).createElement(g,null,e(r).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(r).createElement(p,null,t.title),e(r).createElement(b,null,t.description),e(r).createElement(f,{onClick:t.refetch},t.buttonText))))})),n.register("d1JH7",(function(a,i){t(a.exports,"ManageTokenListButton",(function(){return g}));var r=n("29o0l"),l=n("gkfw3"),o=n("j81qC"),s=n("6I6Pd"),c=n("634r8"),u=n("27SDj");const d=(0,l.default)(c.Row).attrs({justify:"center",margin:"0 auto",width:"auto"})`
  cursor: pointer;
  height: 48px;
  margin-bottom: 10px;
  p {
    font-weight: 500;
  }
  &:hover {
    p {
      color: #ab9ff2 !important;
    }
    svg {
      fill: #ab9ff2;
      path {
        stroke: #ab9ff2;
      }
      circle {
        stroke: #ab9ff2;
      }
    }
  }
`,m=(0,l.default)(u.Text).attrs({size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0})``,g=e(r).memo((t=>e(r).createElement(d,{onClick:t.onClick},e(r).createElement(s.IconWrapper,null,e(r).createElement(o.IconTokenListSettings,null)),e(r).createElement(m,null,t.buttonText))))})),n.register("ih5ai",(function(a,i){t(a.exports,"ZeroBalanceBannersVisibility",(function(){return b}));var r=n("3ljHn"),l=n("43063"),o=n("9yJOd"),s=n("29o0l"),c=n("aWXnn"),u=n("gX5Te"),d=n("feAoQ"),m=n("twk6W"),g=n("gcdBN"),p=n("5GxHf");const b=()=>{const{data:[t]}=(0,r.useFeatureFlags)(["enable-zero-balance-banners"]),{data:n}=u.hooks.useSelectedMultiChainAccount((e=>{var t;return 0===(null===(t=null==e?void 0:e.balance)||void 0===t?void 0:t.value)})),{data:a}=u.hooks.useActionBanners({platform:"extension",appVersion:(0,g.getManifestVersion)()}),i=a&&a.banners.length>0;return t&&n&&!i?e(s).createElement(f,null):null},f=()=>{const{t:t}=(0,l.useTranslation)(),{handleShowModalVisibility:n,handleHideModalVisibility:a}=(0,d.useModals)(),{data:i}=u.hooks.useSelectedMultiChainAccount(),r=(0,s.useCallback)((()=>{m.analytics.capture("zeroBalanceBannerBuyCryptoClickedByUser"),n("onramp")}),[n]),g=(0,s.useCallback)((()=>{m.analytics.capture("zeroBalanceBannerDepositCryptoClickedByUser"),i&&n("receive",{account:i,onCloseClick:()=>a("receive")})}),[a,n,i]);return e(s).createElement("div",{className:h},e(s).createElement(o.Text,{className:x,content:t("zeroBalanceHeading")}),e(s).createElement("div",{className:y,onClick:r},e(s).createElement(c.Column,null,e(s).createElement(o.Text,{className:k,color:"textSecondary",content:t("zeroBalanceBuyCryptoTitle")}),e(s).createElement(o.Text,{className:E,content:t("zeroBalanceBuyCryptoDescription")})),e(s).createElement("img",{className:w,src:"/images/zero-balance/buy-crypto.svg"})),e(s).createElement("div",{className:y,onClick:g},e(s).createElement(c.Column,null,e(s).createElement(o.Text,{className:k,color:"textSecondary",content:t("zeroBalanceDepositTitle")}),e(s).createElement(o.Text,{className:E,content:t("zeroBalanceDepositDescription")})),e(s).createElement("img",{className:w,src:"/images/zero-balance/transfer-crypto.svg"})))},{bannersStack:h,bannersStackHeading:x,banner:y,bannerTitle:k,bannerDescription:E,bannerImage:w}=p.zeroBalanceBannersClassNames})),n.register("5GxHf",(function(e,n){t(e.exports,"zeroBalanceBannersClassNames",(function(){return a}));var a={bannersStack:"_1srojxb13q _1srojxb116 _1srojxbu9 _1srojxbee _1srojxbb3 _1srojxbcd",bannersStackHeading:"_1srojxbc _1srojxb2nv",banner:"_1odu00w2",bannerTitle:"_1srojxbm _1srojxb2oa _1srojxb7",bannerDescription:"_1srojxbe _1srojxb2nv _1srojxb9y _1srojxbu8",bannerImage:"_1srojxbto _1srojxbus"}})),n.register("kdiZd",(function(e,a){t(e.exports,"useWalletBalanceAnalytics",(function(){return o}));var i=n("29o0l"),r=n("6UR7D"),l=n("gX5Te");function o(e,t,n){const a=l.hooks.useIsTestnetMode(),[o,s]=(0,i.useState)(!1);(0,i.useEffect)((()=>{a||s(!1)}),[n,a]),(0,i.useEffect)((()=>{!o&&t.length&&e.length&&!a&&(r.fungibleAnalytics.walletBalance(n,t,e),s(!0))}),[n,t,e,o,a])}})),n.register("foUnP",(function(e,a){t(e.exports,"WarningCardWithActions",(function(){return b}));var i=n("29o0l"),r=n("gkfw3"),l=n("91Dw6"),o=n("j81qC"),s=n("27SDj");const c=r.default.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.color};
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${e=>e.color};
  border-radius: 12px;
  gap: 8px;
`,u=r.default.div`
  display: flex;
  margin: 16px;
  gap: 8px;
`,d=r.default.div`
  display: flex;
  justify-content: ${e=>1===e.buttonCount?"center":"space-between"};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
`,m=r.default.div`
  padding: 3px;
`,g=r.default.button`
  border: none;
  background: transparent;
  color: #222222;
  cursor: pointer;
  padding: 8px;
  &:nth-child(1) {
    font-weight: 500;
  }
`,p=(0,r.default)(s.Text).attrs({size:14,weight:400,lineHeight:17,textAlign:"left",wordBreak:"break-word"})``,b=({message:e,inverted:t=!1,variant:n="warning",actions:a,Icon:r})=>{let s="#2A2A2A",b="#222222";switch(null!=r||(r="warning"!==n||t?o.IconExclamationMarkOctagon:o.IconExclamationMarkTriangle),n){case"warning":default:s=l.WARNING_COLOR;break;case"danger":s=l.DANGER_COLOR;break;case"error":b=l.ERROR_COLOR}return i.createElement(c,{color:s},i.createElement(u,null,i.createElement(m,null,i.createElement(r,{fill:b,width:18,height:18})),i.createElement(p,{color:b},e)),0===a.length?null:i.createElement(d,{buttonCount:a.length},a.map((e=>i.createElement(g,{key:e.label,onClick:e.onClick,type:"button"},e.label)))))}}))}();
//# sourceMappingURL=HomeTabPage.461b9d42.js.map
define=__define;})(window.define);