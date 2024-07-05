(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("lXzah",(function(r,l){var a;a=r.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),t(r.exports,"ExplorePageContent",(function(){return y})),t(r.exports,"default",(function(){return P}));var o=n("hM5LD"),i=n("RVqnc"),s=n("70W8C"),c=n("29o0l"),d=n("88tsI"),u=n("iQL9s"),p=n("gkfw3"),m=n("27SDj"),f=n("elSIy"),x=n("eaUwt"),g=n("a0hzK"),h=n("4iDyO"),E=n("kQTlk"),k=n("gX5Te"),w=n("kWfcq"),b=n("gcdBN");function y(){var t;const n=(0,u.useLocation)(),{t:r}=(0,d.useTranslation)(),{data:l}=k.hooks.useShouldShowQuests({platform:"extension",appVersion:(0,b.getManifestVersion)()}),{error:a,refetch:p}=k.hooks.useQuests({platform:"extension",appVersion:(0,b.getManifestVersion)()}),{setActiveSection:m,activeSection:y}=(0,o.useExplore)();(0,c.useEffect)((()=>{var e;"quests"===(null===(e=n.state)||void 0===e?void 0:e.tab)&&l&&m("quests")}),[null===(t=n.state)||void 0===t?void 0:t.tab,l,a,m]);const{error:P,refetch:R}=k.hooks.useExploreSites(),{error:D,refetch:A}=k.hooks.useExploreRecommendedSites(),{refetch:M}=k.hooks.useExploreTokens(),{refetch:j}=k.hooks.useExploreCollections(),{refetch:$}=k.hooks.useExploreRecommendedTokens(),{refetch:N}=k.hooks.useExploreRecommendedCollections(),{refetch:O}=k.hooks.useLearn(),B=P&&D,F=(0,c.useCallback)((()=>{switch(y){case"sites":A(),R();break;case"collections":N(),j();break;case"tokens":$(),M();break;case"quests":l&&p();break;case"learn":O()}}),[y,A,R,N,j,$,M,l,O,p]),[q,z]=e(c).useState(""),_=(0,i.useDebouncedState)(q,250),Q=e(s)((e=>{e&&w.exploreAnalytics.onExploreSearchedByUser({searchTerm:e})}),1e3),H=k.hooks.useEnabledNetworkIDs(),V=(0,o.useExploreSearchList)({searchQuery:_,networkIds:H,platform:"extension"}),{showSpinner:X,showSearchResults:U}=V;return(0,c.useEffect)((()=>{Q(_)}),[_,Q]),B?e(c).createElement(C,null,e(c).createElement(f.ExplorePageError,{title:r("exploreErrorTitle"),buttonText:r("exploreErrorButtonText"),description:r("exploreErrorDescription"),refetch:F})):e(c).createElement(v,null,e(c).createElement(x.ExploreSearchHeader,{value:q,onChange:z,isLoading:X}),e(c).createElement(S,{hide:U},e(c).createElement(E.ExploreTabsTitles,null)),e(c).createElement(I,{hide:U},e(c).createElement(h.ExploreTabs,null),"tokens"===y&&e(c).createElement(L,null,e(c).createElement(T,null,r("exploreTokensLegalDisclaimer")))),e(c).createElement(I,{hide:!U},e(c).createElement(g.ExploreSearchResults,Object.assign({},V))))}const v=p.default.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`,C=p.default.div`
  padding: 16px;
`,S=p.default.div`
  display: ${({hide:e})=>e?"none":"initial"};
  overflow-x: hidden;
`,I=(0,p.default)(S)`
  display: ${({hide:e})=>e?"none":"flex"};
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
`,L=p.default.div`
  padding: 12px 16px;
`,T=(0,p.default)(m.Text)`
  color: #999;
  font-feature-settings: "calt" off;

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
`;var P=()=>e(c).createElement(o.ExploreProvider,{appVersion:(0,b.getManifestVersion)(),platform:"extension",initialSection:"sites"},e(c).createElement(y,null))})),n.register("elSIy",(function(r,l){t(r.exports,"ExplorePageError",(function(){return h}));var a=n("29o0l"),o=n("gkfw3"),i=n("aWXnn"),s=n("j81qC"),c=n("634r8"),d=n("27SDj");const u=(0,o.default)(i.Column).attrs({align:"center"})``,p=o.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,o.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,f=(0,o.default)(d.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,x=(0,o.default)(d.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,g=(0,o.default)(d.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,h=e(a).memo((t=>e(a).createElement(u,null,e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(a).createElement(f,null,t.title),e(a).createElement(x,null,t.description),e(a).createElement(g,{onClick:t.refetch},t.buttonText))))})),n.register("eaUwt",(function(r,l){t(r.exports,"ExploreSearchHeader",(function(){return d}));var a=n("3ljHn"),o=n("43063"),i=n("29o0l"),s=n("gkfw3"),c=n("kGh2H");const d=({value:t,isLoading:n,onChange:r})=>{const{t:l}=(0,o.useTranslation)(),{data:[s]}=(0,a.useFeatureFlags)(["enable-explore-token-search"]);return e(i).createElement(u,null,e(i).createElement(c.SearchInput,{placeholder:l(s?"dappBrowserExtSearchPlaceholder":"dappBrowserExtSearchPlaceholderLegacy"),value:t,onChange:e=>{"value"in e.target&&"string"==typeof e.target.value&&r(e.target.value)},showClearIcon:!!t,showLoadingIcon:n,onClear:()=>{r("")}}))},u=s.default.div`
  padding: 16px;
  padding-bottom: 0;
`})),n.register("a0hzK",(function(r,l){t(r.exports,"ExploreSearchResults",(function(){return y}));var a=n("iOvk1"),o=n("3ljHn"),i=n("5slFC"),s=n("9yJOd"),c=n("RVqnc"),d=n("lz5BI"),u=n("29o0l"),p=n("88tsI"),m=n("gkfw3"),f=n("qppYH"),x=n("4Wvp3"),g=n("hiI91"),h=n("i1NO2"),E=n("cbiYb"),k=n("kWfcq");const w=m.default.div`
  border-bottom: solid 1px;
  border-color: ${e=>e.isLast?s.tokens.colors.legacy.bgWallet:s.tokens.colors.legacy.borderSecondary};
`,b={searchResultsContainer:(0,s.atoms)({marginTop:16,width:"100%"}),searchResultsHeaderContainer:(0,s.atoms)({paddingX:16,paddingY:4,display:"flex",alignItems:"flex-end",justifyContent:"space-between"}),searchResult:(0,s.atoms)({display:"flex",alignItems:"center",paddingX:16,gap:16,height:56,maxHeight:56,cursor:"pointer"}),searchResultTextContainer:(0,s.atoms)({display:"flex",flexDirection:"column",width:"100%",paddingY:10}),hover:(0,s.atoms)({cursor:"pointer"}),picturePlaceholder:(0,s.atoms)({borderRadius:6,height:32,width:32}),noResultsContainer:(0,s.atoms)({position:"absolute",top:64,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:56}),tokenSecondaryContainer:(0,s.atoms)({display:"flex",gap:4,alignItems:"center"}),dotContainer:(0,s.atoms)({display:"flex",justifyContent:"center",alignItems:"center",width:8}),dot:(0,s.atoms)({backgroundColor:"textSecondary",width:4,height:4,borderRadius:"circle"})},y=({searchedDapps:t,tokens:n,priceMap:r,isPriceMapLoading:l,showMoreDapps:d,setShowMoreDapps:m,renderShowMoreDappsButton:w})=>{const{data:[y]}=(0,o.useFeatureFlags)(["enable-explore-token-search"]),{t:C}=(0,p.useTranslation)(),{pushDetailView:S}=(0,h.useDetailViews)(),I=(0,u.useMemo)((()=>t.map(((t,n)=>({key:t.id,image:e(u).createElement(x.ShapedImage,{src:t.imageUrl,size:"small",shape:"square"}),textMain:e(u).createElement(s.Text,{content:t.name,font:"body"}),textSecondary:e(u).createElement(s.Text,{content:t.category||"",font:"caption",color:"textSecondary"}),onClick:()=>{window.open((0,c.getOriginAndHostname)(t.domain).origin),k.exploreAnalytics.onExploreSearchItemClickedByUser({itemDetails:{position:n+1,title:t.name,id:t.id}})}})))),[t]),L=(0,u.useMemo)((()=>n.map((t=>{const n=(0,a.encodeCaip19)((0,i.getFungibleCaip19FromFungible)(t)),o=r[n],d=null==o?void 0:o.price,p=void 0!==d,m=null==o?void 0:o.usd_24h_change,x=void 0!==m,h=p||x;return{key:n,image:e(u).createElement(f.EcosystemImage,{image:{type:"fungible",src:t.data.logoUri,fallback:t.data.symbol||t.data.tokenAddress},tokenType:t.type,chainMeta:t.data.chain,size:32}),textMain:e(u).createElement(s.Text,{content:t.data.name||"",font:"body"}),textSecondary:e(u).createElement("div",{className:b.tokenSecondaryContainer},e(u).createElement(s.Text,{content:t.data.symbol||"",font:"caption",color:"textSecondary"}),l?e(u).createElement(e(u).Fragment,null,e(u).createElement(g.SkeletonLoader,{width:"36px",height:"14px",borderRadius:"8px"}),e(u).createElement(g.SkeletonLoader,{width:"48px",height:"14px",borderRadius:"8px"})):e(u).createElement(e(u).Fragment,null,h?e(u).createElement("div",{className:b.dotContainer},e(u).createElement("div",{className:b.dot})):null,p?e(u).createElement(s.Price,{value:d,font:"caption",color:"textSecondary"}):null,x?e(u).createElement(s.Text,{content:`${(0,c.formatNumber)(m,{includePlusPrefix:!0})}%`,font:"caption",color:m>=0?"accentSuccess":"accentAlert"}):null)),onClick:()=>{var r;S(e(u).createElement(E.PublicFungibleDetailPage,{caip19:n,title:null!==(r=t.data.name)&&void 0!==r?r:void 0,entryPoint:"explore-search"}))}}}))),[l,r,S,n]);return t.length||n.length?e(u).createElement(e(u).Fragment,null,I.length?e(u).createElement(v,{testId:"explore-search-results",title:e(u).createElement(s.Text,{content:C("exploreSites"),font:"title1Semibold"}),items:I,showMore:d,setShowMore:m,renderShowMoreButton:w}):null,L.length?e(u).createElement(v,{testId:"explore-search-results",title:e(u).createElement(s.Text,{content:C("exploreTokens"),font:"title1Semibold"}),items:L,showMore:!0,setShowMore:c.NOOP,renderShowMoreButton:!1}):null):e(u).createElement("div",{className:b.noResultsContainer,"data-testid":"explore-search-results-nodata"},e(u).createElement(s.Text,{content:C(y?"dappBrowserSearchNoAppsTokens":"dappBrowserSearchNoApps"),font:"bodyMedium",color:"textSecondary"}))},v=({items:t,title:n,testId:r,renderShowMoreButton:l,showMore:a,setShowMore:o})=>{const{t:i}=(0,p.useTranslation)();return e(u).createElement("div",{className:b.searchResultsContainer,"data-testid":r},e(u).createElement("div",{className:b.searchResultsHeaderContainer},n,l?e(u).createElement(s.Text,{className:b.hover,content:i(a?"exploreShowLess":"exploreShowMore"),font:"caption",color:"textSecondary",onClick:()=>o(!a)}):null),t.map(((n,r)=>e(u).createElement(d.motion.div,{key:n.key,className:b.searchResult,onClick:()=>{n.onClick&&n.onClick()},whileHover:{background:s.tokens.colors.legacy.bgButton},style:{background:s.tokens.colors.legacy.bgWallet},transition:{ease:[.5,1,.89,1],duration:.1}},e(u).createElement("div",null,n.image),e(u).createElement(w,{isLast:r===t.length-1,className:b.searchResultTextContainer},n.textMain,n.textSecondary)))))}})),n.register("4Wvp3",(function(r,l){t(r.exports,"ShapedImage",(function(){return f}));var a=n("RVqnc"),o=n("29o0l"),i=n("gkfw3"),s=n("6UMd8"),c=n("izu1Y"),d=n("hiI91");const u=e=>{if("number"==typeof e)return e;switch(null!=e?e:"small"){case"normal":return 48;case"small":return 32;case"xsmall":return 24;case"xxsmall":return 16}},p=(0,i.default)(c.PImage)`
  border-radius: ${e=>e.borderradius}px;
  width: 100%;
  height: 100%;
`,m=i.default.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{var t;return(0,a.hexToRGB)(e.color,null!==(t=e.alpha)&&void 0!==t?t:.1)}};
`,f=({src:t,fallback:n,alt:r,size:l="normal",shape:a="circle",style:i})=>{const c=null!=n?n:e(o).createElement(x,null,"?"),f=u(l),g=u(l),h=(e=>"square"===e?6:0)(a);return"circle"===a?e(o).createElement(s.Circle,{color:"#222222",diameter:f,style:i},e(o).createElement(p,{src:t,fallback:c,alt:r||void 0,width:f,height:g,borderradius:h,loader:e(o).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${f}px`,height:`${g}px`})})):e(o).createElement(m,{color:"#222222",width:f,height:g,style:i},e(o).createElement(p,{src:t,fallback:c,alt:r||"",width:f,height:g,borderradius:h,loader:e(o).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${f}px`,height:`${g}px`})}))},x=i.default.div`
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("kWfcq",(function(e,r){t(e.exports,"exploreAnalytics",(function(){return o}));var l=n("hM5LD"),a=n("twk6W");const o=new(0,l.ExploreAnalytics)(a.analytics)})),n.register("4iDyO",(function(r,l){t(r.exports,"ExploreTabs",(function(){return f}));var a=n("RVqnc"),o=n("29o0l"),i=n("hURGI"),s=n("lSj6f"),c=n("eD0bo"),d=n("9EnUg"),u=n("4gU20"),p=n("Dly5J"),m=n("TiCFQ");function f(){const{sections:t,activeSection:n,activeSectionIdx:r}=(0,s.useExploreSections)(),l=(0,o.useMemo)((()=>t.map((t=>{switch(t){case"sites":return{section:t,render:e(o).createElement(p.ExploreTabSites,null)};case"tokens":return{section:t,render:e(o).createElement(m.ExploreTabTokens,null)};case"collections":return{section:t,render:e(o).createElement(u.ExploreTabCollections,null)};case"quests":return{section:t,render:e(o).createElement(i.Quests,null)};case"learn":return{section:t,render:e(o).createElement(d.Learn,null)};default:return null}})).filter(a.filterBoolean)),[t]);return e(o).createElement(c.default,{activeIndex:r,activeSection:n,items:l})}})),n.register("hURGI",(function(r,l){t(r.exports,"Quests",(function(){return f}),(function(e){return f=e}));var a=n("4xbAj"),o=n("29o0l"),i=n("gkfw3"),s=n("gX5Te"),c=n("gcdBN"),d=n("dzdn8"),u=n("adrCr"),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const m=e(o).memo((({quests:t,isLoading:n})=>n?e(o).createElement("div",null,e(o).createElement(d.QuestSkeletonHeader,null),e(o).createElement(d.QuestSkeleton,null),e(o).createElement(d.QuestSkeleton,null)):e(o).createElement("div",null,e(o).createElement(u.QuestsList,{quests:t})))),f=()=>{const t=(()=>{const{data:e=[],isLoading:t,error:n}=s.hooks.useQuests({platform:"extension",appVersion:(0,c.getManifestVersion)()}),{data:r}=s.hooks.useSelectedMultiChainAccount(),{data:l}=s.hooks.useIsAnalyticsOptedOut();return(0,o.useMemo)((()=>({shouldShowQuests:!l&&(null==r?void 0:r.type)!==a.AccountType.ReadOnly&&!n,quests:e,isLoading:t})),[r,e,l,t,n])})(),{shouldShowQuests:n}=t,r=p(t,["shouldShowQuests"]);return n?e(o).createElement(x,{"data-testid":"quests"},e(o).createElement(m,Object.assign({},r))):null},x=i.default.div`
  padding: 16px;
  padding-top: 0;
`})),n.register("dzdn8",(function(r,l){t(r.exports,"Separator",(function(){return x})),t(r.exports,"QuestSkeletonHeader",(function(){return g})),t(r.exports,"QuestSkeleton",(function(){return h}));var a=n("29o0l"),o=n("gkfw3"),i=n("aWXnn"),s=n("634r8"),c=n("hiI91");const d="14px",u="8px",p="#484848",m=(0,o.default)(c.SkeletonLoader)`
  width: 100%;
  height: 144px;
  border-top-left-radius: ${u};
  border-top-right-radius: ${u};
`,f=(0,o.default)(c.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,x=o.default.div`
  background: #474747;
  height: 1px;
  opacity: 0.6;
  width: 100%;
`,g=()=>e(a).createElement(c.SkeletonLoader,{align:"center",width:"150px",height:"30px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 auto 17px auto"}),h=()=>e(a).createElement(e(a).Fragment,null,e(a).createElement(c.SkeletonLoader,{width:"100%",height:"308px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 0 10px 0"},e(a).createElement(i.Column,null,e(a).createElement(m,{align:"flex-start",justify:"flex-end",margin:"0 0 10px"},e(a).createElement(f,{align:"flex-start",justify:"flex-end",width:"65px",height:"20px",margin:"10px 10px 0 0",borderRadius:"32px"})),e(a).createElement(i.Column,{padding:"16px"},e(a).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:"8px",margin:"0 0 17px 0"}),e(a).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u})),e(a).createElement(x,null),e(a).createElement(s.Row,{padding:"16px"},e(a).createElement(c.SkeletonLoader,{width:"40px",height:"40px",backgroundColor:p,borderRadius:u}),e(a).createElement(i.Column,{width:"auto",margin:"0 0 0 10px"},e(a).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:u,margin:"0 0 5px 0"}),e(a).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u}))))))})),n.register("adrCr",(function(r,l){t(r.exports,"QuestsList",(function(){return i}));var a=n("29o0l"),o=n("jG8Ox");const i=({quests:t})=>e(a).createElement(e(a).Fragment,null,t.map((t=>e(a).createElement(o.QuestListItem,Object.assign({key:t.id},t)))))})),n.register("jG8Ox",(function(e,r){t(e.exports,"QuestListItem",(function(){return L}));var l=n("43063"),a=n("ibwoK"),o=n("29o0l"),i=n("gkfw3"),s=n("evHvm"),c=n("43gjF"),d=n("feAoQ"),u=n("eKiPG"),p=n("hFkH3"),m=n("6UMd8"),f=n("27SDj"),x=n("hOnAa"),g=n("dzdn8"),h=n("jOfN3");const E=(0,i.default)(s.ExploreTile)`
  border: 1px solid rgba(71, 71, 71, 0.4);
  border-radius: ${12}px;
  box-shadow: ${e=>e.isPreview?"":"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"};
  cursor: ${e=>e.isDisabled||e.isPreview?"auto":"pointer"};
  margin-bottom: 24px;
  position: relative;
`,k=i.default.div`
  background-color: rgba(44, 45, 48, 0.5);
  border-radius: ${12}px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,w=i.default.div`
  align-items: center;
  border-top-left-radius: ${12}px;
  border-top-right-radius: ${12}px;
  display: flex;
  height: 144px;
  justify-content: center;
  overflow: hidden;
`,b=i.default.img`
  max-width: 100%;
`,y=i.default.div`
  padding: 16px;
`,v=(0,i.default)(f.Text)`
  margin-bottom: 8px;
`,C=(0,i.default)(f.Text)``,S=(0,i.default)(m.Circle).attrs({diameter:32})`
  background-color: transparent;
  border: 1px solid #333333;
`,I=o.memo((e=>{const{titleLong:t,imageUrl:n,description:r,isCompleted:l,reward:a,badge:i,isPreview:s,questState:c,onClickQuest:d,onClickQuestRewardPreview:u,onClaimQuestReward:p}=e;return o.createElement(E,{onClick:d,isDisabled:l,isPreview:s,"data-testid":"quest-list-item"},o.createElement(w,null,o.createElement(b,{src:n}),i&&o.createElement(h.QuestStatusBadge,Object.assign({},i)),s&&o.createElement(k,null)),o.createElement(g.Separator,null),o.createElement(y,null,o.createElement(v,{textAlign:"left",size:16,weight:500,lineHeight:19},t),o.createElement(C,{color:"#999",textAlign:"left",weight:400,lineHeight:17,size:14},r)),a&&o.createElement(o.Fragment,null,o.createElement(g.Separator,null),o.createElement(x.QuestRewardSection,{isQuestCompleted:l,questState:c,reward:a,onClickQuestRewardPreview:u,onClaimQuestReward:p})))})),L=e=>{const t=(e=>{const{t:t}=(0,l.useTranslation)(),{id:n,titleShort:r,networkIds:i,interstitial:s,reward:m,isPreview:x,previewUrl:g,questState:h}=e,{handleShowModalVisibility:E,handleHideModalVisibility:k}=(0,d.useModals)(),w=(0,c.useDeepLink)(),b=o.useMemo((()=>["claimed","completed_unclaimable","completed"].includes(h)),[h]),y=o.useCallback((e=>{if(x&&null!=g)return u.questAnalytics.onQuestPreviewUrlClick({questId:n,shortName:r},g),void w(e,{destinationType:a.DeepLinkDestination.ExternalLink,url:g});if(b||null==s)return;const{destinationType:t,url:l,lineItems:i,primaryButtonText:c,secondaryButtonText:d,title:m}=s,h=c.length>19||d.length>19;u.questAnalytics.onQuestSelected({questId:n,shortName:r}),E("interstitial",{bodyTitle:m,details:i.map(((e,t)=>({icon:o.createElement(S,null,o.createElement(f.Text,{size:14},t+1)),title:e.title,subtitle:e.description}))),icon:s.imageUrl,onDismiss:()=>{u.questAnalytics.onQuestInterstitialDismiss({questId:n,shortName:r})},FooterComponent:()=>o.createElement(p.ButtonGroup,{vertical:h,buttons:[{text:d,onClick:()=>{u.questAnalytics.onQuestInterstitialSecondaryClick({questId:n,shortName:r,buttonText:d}),k("interstitial")}},{text:c,theme:"primary",onClick:()=>{u.questAnalytics.onQuestInterstitialPrimaryClick({questId:n,shortName:r,buttonText:c}),w(e,{destinationType:t,url:l}),k("interstitial")}}]})})}),[E,k,s,w,n,b,x,g,r]),v=o.useCallback((e=>{if(b||null==m||m.hasClaimed)return;e.stopPropagation();const{title:n,description:r,imageUrl:l}=m;E("interstitial",{bodyTitle:n,bodyDescription:r,icon:l,FooterComponent:()=>o.createElement(p.Button,{onClick:()=>k("interstitial")},t("commandDismiss"))})}),[b,E,k,m,t]),C=o.useCallback((()=>{null==m||m.hasClaimed||(u.questAnalytics.onQuestRewardClaimed({questId:n,shortName:r}),E("claimReward",{questId:n,networkIds:i,onPressDismiss:()=>k("claimReward")}))}),[m,n,i,E,k,r]);return o.useMemo((()=>Object.assign(Object.assign({},e),{isCompleted:b,onClickQuestRewardPreview:v,onClaimQuestReward:C,onClickQuest:y})),[b,e,y,v,C])})(e);return o.createElement(I,Object.assign({},t))}})),n.register("evHvm",(function(r,l){t(r.exports,"ExploreTile",(function(){return s}),(function(e){return s=e}));var a=n("lz5BI"),o=n("29o0l"),i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const s=t=>{var{hideAnimation:n}=t,r=i(t,["hideAnimation"]);return e(o).createElement(a.motion.div,Object.assign({whileHover:n?void 0:{scale:.97},transition:{ease:[.16,1,.3,1],duration:.4}},r))}})),n.register("eKiPG",(function(e,r){t(e.exports,"questAnalytics",(function(){return o}));var l=n("hnZYD"),a=n("twk6W");const o=new(0,l.QuestAnalytics)(a.analytics)})),n.register("hOnAa",(function(r,l){t(r.exports,"QuestRewardSection",(function(){return f}));var a=n("43063"),o=n("29o0l"),i=n("gkfw3"),s=n("hFkH3"),c=n("j81qC"),d=n("27SDj");const u=i.default.div`
  padding: 16px;
`,p=i.default.div`
  align-self: center;
  margin-right: 8px;
`,m=(0,i.default)(s.Button).attrs({theme:"primary"})`
  align-self: center;
  height: 32px;
  max-width: 80px;
  padding: 8px 14px;
  width: auto;
`,f=({isQuestCompleted:t,questState:n,reward:r,onClickQuestRewardPreview:l,onClaimQuestReward:i})=>{const{t:s}=(0,a.useTranslation)(),f="completed"===n||"claimed"===n,x=s("claimed"===n?"pastParticipleClaimed":"commandClaim");return e(o).createElement(u,null,e(o).createElement("div",{style:{display:"flex"}},e(o).createElement("div",{onClick:l,style:{cursor:t?"auto":"pointer",display:"flex",flexGrow:1,marginRight:16}},e(o).createElement(p,null,e(o).createElement(c.IconReward,null)),e(o).createElement("div",null,e(o).createElement(d.Text,{color:"#999",textAlign:"left",size:13,lineHeight:16},s("reward")),e(o).createElement(d.Text,{textAlign:"left",size:14,weight:600,lineHeight:16},r.title))),f&&e(o).createElement(m,{onClick:i,disabled:"claimed"===n},e(o).createElement(d.Text,{color:"#222",weight:600,lineHeight:16,size:13},x))))}})),n.register("jOfN3",(function(r,l){t(r.exports,"QuestStatusBadge",(function(){return d}));var a=n("29o0l"),o=n("gkfw3"),i=n("j81qC"),s=n("27SDj"),c=n("leCQw");const d=({text:t,color:n,tooltip:r})=>r?e(a).createElement(u,null,e(a).createElement(c.QuestBadgeTooltip,Object.assign({},r),e(a).createElement(p,null,e(a).createElement(m,{color:n},t),e(a).createElement(i.IconInfo,{width:16,fill:n,"data-testid":"quest-status-badge-info-icon"})))):e(a).createElement(u,null,e(a).createElement(p,null,e(a).createElement(m,{color:n},t))),u=o.default.div`
  position: absolute;
  top: 8px;
  right: 8px;
`,p=o.default.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  background: rgba(34, 34, 34, 0.8);
  backdrop-filter: blur(2px);
  border-radius: 32px;
  padding: 4px 8px;
`,m=(0,o.default)(s.Text)`
  color: ${e=>e.color};
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
`})),n.register("leCQw",(function(e,r){t(e.exports,"QuestBadgeTooltip",(function(){return s}));var l=n("29o0l"),a=n("gkfw3"),o=n("il2BD"),i=n("27SDj");const s=({children:e,lineOne:t,lineTwo:n})=>{const r=l.createElement(c,{onClick:e=>{e.stopPropagation()}},l.createElement(d,null,t),n&&l.createElement(d,null,n));return l.createElement(o.TooltipInteractive,{content:r,alignment:"bottomRightDirect",index:0},e)},c=a.default.div`
  display: flex;
  cursor: default;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
  padding: 12px 16px;
  max-width: 226px;
`,d=(0,a.default)(i.Text).attrs({lineHeight:17,size:14,textAlign:"start"})``})),n.register("lSj6f",(function(e,r){t(e.exports,"useExploreSections",(function(){return s}));var l=n("hM5LD"),a=n("29o0l"),o=n("gX5Te"),i=n("gcdBN");const s=()=>{const{data:e}=o.hooks.useShouldShowQuests({platform:"extension",appVersion:(0,i.getManifestVersion)()}),{activeSection:t,sections:n}=(0,l.useExplore)(),r=(0,a.useMemo)((()=>n.filter((t=>!("quests"===t&&!e)))),[n,e]),s=(0,a.useMemo)((()=>r.indexOf(t)),[t,r]);return{sections:r,activeSection:t,activeSectionIdx:s}}})),n.register("eD0bo",(function(r,l){t(r.exports,"default",(function(){return s}));var a=n("29o0l"),o=n("3w1Ia"),i=n("gkfw3");function s({activeIndex:t,activeSection:n,items:r,animateFirstTime:l=!1}){const[i,s]=e(a).useState(!0),u=(0,o.default)(t),p=t-(u||0)>0;return(0,a.useEffect)((()=>{t!==u&&s(!1)}),[t,u,s]),e(a).createElement(d,null,r.map(((r,o)=>e(a).createElement(c,{key:r.section,testID:`animation-item-${o}`,active:n===r.section,isLeft:p,shouldAnimate:!!l||!i,inView:!p&&t===o-1||p&&t===o+1||t===o},"function"==typeof r.render?r.render():r.render))))}const c=({active:t,children:n,testID:r,isLeft:l,shouldAnimate:o,inView:i})=>e(a).createElement(u,{active:t,"data-testid":r,shouldAnimate:o,isLeft:l,inView:i},i&&n),d=i.default.div`
  position: relative;
  width: 100%;
  height: ${e=>e.height?`${e.height}px`:"auto"};
  padding-top: 16px;
`,u=i.default.div`
  display: ${e=>e.active?"block":"none"};
  visibility: ${e=>e.inView?"visible":"hidden"};
  animation-name: ${e=>e.isLeft?e.active?p:x:e.active?f:m};
  animation-duration: ${e=>e.shouldAnimate?"0.5s":"0s"};
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  transition: opacity 0.5s ease-in-out;
`,p=i.keyframes`
  0% {
    left: 300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,m=i.keyframes`
  0% {
    left: 0px;
    opacity: 1;
  };
  90% {
    left: 300px;
    opacity: 0;
  };
  100%  {
    left: 600px;
    opacity: 0;
  };
`,f=i.keyframes`
  0% {
    left: -300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,x=i.keyframes`
  0% {
    left: 0px;
    opacity: 1;
  };
  90% {
    left: -300px;
    opacity: 0;
  };
  100%  {
    left: -600px;
    opacity: 0;
  };
`})),n.register("9EnUg",(function(r,l){t(r.exports,"Learn",(function(){return p}));var a=n("29o0l"),o=n("88tsI"),i=n("gkfw3"),s=n("8pWVO"),c=n("gX5Te"),d=n("4LOwo"),u=n("aErJr");const p=()=>{const{isLoading:t,data:n,error:r,refetch:l}=c.hooks.useLearn(),{t:i}=(0,o.useTranslation)();return r&&!t&&!n||0===(null==n?void 0:n.data.length)?e(a).createElement(f,null,e(a).createElement(s.ErrorView,{title:i("exploreLearnErrorTitle"),description:i("exploreLearnErrorDescription"),refetch:l})):e(a).createElement(m,{"data-testid":"learn-container"},t?e(a).createElement(u.LearnSkeleton,null):e(a).createElement(d.LearnCards,{items:(null==n?void 0:n.data)||[]}))},m=i.default.div`
  padding: 0 16px 16px 16px;
`,f=i.default.div`
  padding: 16px;
`})),n.register("4LOwo",(function(r,l){t(r.exports,"LearnCards",(function(){return f}));var a=n("29o0l"),o=n("gkfw3"),i=n("27SDj"),s=n("43gjF"),c=n("kWfcq"),d=n("cSCtg"),u=n("evHvm");const p=({item:t,position:n})=>{const r=(0,s.useDeepLink)();return e(a).createElement(g,{hidePointer:!t.page,hideAnimation:!t.page,halfWidth:"half-width"===t.layout,"data-testid":"learn-card-tip",onClick:e=>{c.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"tip"}}),t.page&&r(e,{destinationType:t.page,url:t.url})}},e(a).createElement(E,{background:t.backgroundColor},e(a).createElement(k,null,e(a).createElement(w,null,e(a).createElement(C,{color:"black",opacity:.5},e(a).createElement(I,{"data-testid":"learn-card-tip-icon"},e(a).createElement("img",{width:"16px",height:"16px",src:t.icon})),t.title)),e(a).createElement(w,null,e(a).createElement(v,{opacity:.7},t.description)))))},m=({item:t,position:n})=>{const r=(0,a.useCallback)((()=>{c.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"article"}})}),[t.id,t.title,n]);return"half-width"===t.layout?e(a).createElement(h,{href:t.url,onClick:r},e(a).createElement(g,{halfWidth:!0,"data-testid":"learn-card-article-half"},e(a).createElement(E,null,e(a).createElement(y,{style:{height:"50%"}},e(a).createElement(S,{src:t.backgroundImageUrl})),e(a).createElement(b,{background:t.backgroundColor},e(a).createElement(v,null,t.title))))):e(a).createElement(h,{href:t.url,onClick:r},e(a).createElement(g,{"data-testid":"learn-card-article-full"},e(a).createElement(E,{background:t.backgroundColor},e(a).createElement(k,null,e(a).createElement(v,null,t.title),e(a).createElement(C,{color:"#474747"},t.description))),e(a).createElement(E,null,e(a).createElement(S,{src:t.backgroundImageUrl}))))},f=({items:t})=>e(a).createElement(x,{"data-testid":"learn-cards"},t.map(((t,n)=>"learnArticle"===t.type?e(a).createElement(m,{item:t,key:t.title,position:n}):e(a).createElement(p,{item:t,key:t.title,position:n})))),x=o.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 8px;
`,g=(0,o.default)(u.ExploreTile)`
  border-radius: 16px;
  height: ${d.EXPLORE_CARD_SIZE_PX};
  display: flex;
  overflow: hidden;
  cursor: ${e=>e.hidePointer?"auto":"pointer"};
  width: ${e=>e.halfWidth?"calc(50% - 4px)":"auto"};
`,h=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`,E=o.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${e=>e.background||"auto"};
`,k=o.default.div`
  padding: 12px 16px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`,w=o.default.div`
  display: flex;
`,b=(0,o.default)(w)`
  padding: 16px;
  background: ${e=>e.background||"auto"};
`,y=(0,o.default)(w)`
  flex: 1;
`,v=(0,o.default)(i.Text)`
  text-align: left;
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.36px;
`,C=(0,o.default)(i.Text)`
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
`,S=o.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,I=o.default.span`
  display: flex;
  margin-right: 4px;
`})),n.register("cSCtg",(function(e,r){t(e.exports,"EXPLORE_CARD_SIZE",(function(){return l})),t(e.exports,"EXPLORE_CARD_SIZE_PX",(function(){return a}));const l=(n("c8OXT").PHANTOM_WIDTH-40)/2,a=`${l}px`})),n.register("aErJr",(function(r,l){t(r.exports,"LearnSkeleton",(function(){return u}));var a=n("29o0l"),o=n("gkfw3"),i=n("hiI91"),s=n("cSCtg");const c=()=>e(a).createElement(m,null,e(a).createElement(x,null,e(a).createElement(h,{width:"110px"}),e(a).createElement(h,{width:"90px"}),e(a).createElement(h,{width:"105px"})),e(a).createElement(f,null,e(a).createElement(h,{width:"64px"}))),d=()=>e(a).createElement(m,null,e(a).createElement(x,null,e(a).createElement(h,{width:"110px"}),e(a).createElement(h,{width:"90px"}))),u=()=>e(a).createElement(p,{"data-testid":"learn-skeleton"},e(a).createElement(c,null),e(a).createElement(g,null,e(a).createElement(d,null),e(a).createElement(d,null)),e(a).createElement(c,null)),p=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 10px;
`,m=(0,o.default)(i.SkeletonLoader)`
  background: #323232;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${s.EXPLORE_CARD_SIZE_PX};
  border-radius: 14px;
  padding: 16px;
  justify-content: flex-end;
`,f=o.default.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`,x=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g=o.default.div`
  display: flex;
  gap: 8px;
`,h=(0,o.default)(i.SkeletonLoader)`
  height: 16px;
  border-radius: 16px;
`})),n.register("4gU20",(function(r,l){t(r.exports,"ExploreTabCollections",(function(){return u}));var a=n("29o0l"),o=n("gX5Te"),i=n("45Lgr"),s=n("ebFSn"),c=n("g8Ra9"),d=n("c3TWf");const u=()=>{const{isExploreCollectionsLoading:t}=o.hooks.useIsExploreCollectionsLoading();return e(a).createElement("div",null,e(a).createElement(i.CarouselCollections,null),t?e(a).createElement(c.ExploreFiltersSkeleton,null):e(a).createElement(s.default,{tab:"collections"}),e(a).createElement(d.ExploreListCollections,null))}})),n.register("45Lgr",(function(r,l){t(r.exports,"CarouselCollections",(function(){return p}));var a=n("29o0l"),o=n("gkfw3"),i=n("gX5Te"),s=n("kWfcq"),c=n("kri2B"),d=n("erfH8"),u=n("jdxan");function p(){var t;const{isExploreCollectionsLoading:n}=i.hooks.useIsExploreCollectionsLoading(),{error:r,data:l}=i.hooks.useExploreRecommendedCollections(),o=(0,a.useCallback)(((t,n)=>e(a).createElement(m,{href:t.marketplacePages[0].collectionUrl},e(a).createElement(u.CarouselCardContainer,{key:`carousel-card-collections-${n}`,onPress:()=>{s.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(d.CarouselCardCollection,{collection:t})))),[null==l?void 0:l.uuid]);return e(a).createElement(c.default,{name:"collections",items:l?l.data:[],renderCard:o,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const m=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("kri2B",(function(r,l){t(r.exports,"default",(function(){return w}));var a=n("ha3TG"),o=n("1fwzV"),i=n("lz5BI"),s=n("kdk4D"),c=n("48pU7"),d=n("29o0l"),u=n("gkfw3"),p=n("j81qC"),m=n("kWfcq"),f=n("cSCtg"),x=n("evHvm"),g=n("60S1R");const h=-1*(f.EXPLORE_CARD_SIZE+8),E={type:"spring",stiffness:256.1,damping:24,mass:1},k=2;function w({items:t,renderCard:n,isLoading:r,isEmpty:l,name:i}){const[u,f]=(0,d.useState)(0),[x,w]=(0,d.useState)(!1),S=(0,s.useMotionValue)(0),I=(0,d.useMemo)((()=>h*(t.length-k)),[t]),L=(0,d.useCallback)((e=>e<0?0:e>t.length-1?t.length-1:e),[t]),T=(0,d.useCallback)((()=>L(Math.round(S.get()/h))),[S,L]);(0,c.useMotionValueEvent)(S,"change",(()=>{f(T())}));const P=(0,d.useCallback)((e=>{const t=L(e)*h;(0,a.animate)(S,t,E),m.exploreAnalytics.onExploreCarouselDragged({listName:i})}),[L,S,i]),R={fill:"#222",width:16,height:16};return r?e(d).createElement(g.CarouselSkeleton,null):l?null:e(d).createElement(b,{"data-testid":`explore-carousel-${i}`},e(d).createElement(o.AnimatePresence,{initial:!1},u>=1&&e(d).createElement(C,{onClick:()=>P(u-1)},e(d).createElement(p.IconArrowLeftThin,Object.assign({},R)))),e(d).createElement(o.AnimatePresence,{initial:!1},u<=t.length-k-1&&e(d).createElement(C,{isRight:!0,onClick:()=>P(u+1)},e(d).createElement(p.IconArrowRightThin,Object.assign({},R)))),e(d).createElement(y,{style:{x:S},drag:t.length>k?"x":void 0,dragConstraints:{left:I,right:0},onDragStart:()=>w(!0),onDragEnd:()=>{w(!1),P(T()),m.exploreAnalytics.onExploreCarouselDragged({listName:i})},onWheel:e=>{if(0===e.deltaX)return;const t=S.get()-e.deltaX;return t>0?S.set(0):t<I?S.set(I):S.set(t)}},t.map(((r,l)=>e(d).createElement(v,{key:`carousel-item-${l}`,isLast:l===t.length-1,onClick:e=>{x&&(e.stopPropagation(),e.preventDefault())}},n(r,l))))))}const b=u.default.div`
  width: 100vw;
  margin-bottom: 24px;
`,y=(0,u.default)(i.motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`,v=(0,u.default)(x.ExploreTile)`
  position: relative;
  margin-right: ${e=>e.isLast?0:8}px;
`,C=(0,u.default)(i.motion.div).attrs({transition:{ease:[.16,1,.3,1],duration:.5},initial:{opacity:0,translateY:8},animate:{opacity:1,translateY:0},exit:{opacity:0,translateY:8}})`
  background: #ab9ff2;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: ${e=>e.isRight?"auto":"4px"};
  right: ${e=>e.isRight?"4px":"auto"};
  top: ${f.EXPLORE_CARD_SIZE/2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.19),
    0px 3px 3px 0px rgba(0, 0, 0, 0.17),
    0px 7px 4px 0px rgba(0, 0, 0, 0.1),
    0px 12px 5px 0px rgba(0, 0, 0, 0.03),
    0px 18px 5px 0px rgba(0, 0, 0, 0);
`})),n.register("48pU7",(function(e,r){t(e.exports,"useMotionValueEvent",(function(){return a}));var l=n("29o0l");function a(e,t,n){(0,l.useInsertionEffect)((()=>e.on(t,n)),[e,t,n])}})),n.register("60S1R",(function(r,l){t(r.exports,"CarouselSkeleton",(function(){return c}));var a=n("29o0l"),o=n("gkfw3"),i=n("hiI91"),s=n("cSCtg");function c({items:t=10}){const n=(0,a.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(a).createElement(u,null,n.map((t=>e(a).createElement(d,{key:t}))))}function d(){return e(a).createElement(p,null,e(a).createElement(f,null,e(a).createElement(x,null,e(a).createElement(i.SkeletonLoader,{width:"90px",height:"16px",marginBottom:"4px",borderRadius:"16px"}),e(a).createElement(i.SkeletonLoader,{width:"64px",height:"16px",borderRadius:"16px"})),e(a).createElement(m,null)))}const u=o.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 24px;
`,p=(0,o.default)(i.SkeletonLoader)`
  background: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 6px 8px 8px 12px;

  margin-right: 8px;
  border-radius: 16px;
  height: ${s.EXPLORE_CARD_SIZE_PX};
  width: ${s.EXPLORE_CARD_SIZE_PX};
  min-width: ${s.EXPLORE_CARD_SIZE_PX};
`,m=(0,o.default)(i.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
  margin-bottom: 8px;
`,f=o.default.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`,x=o.default.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-end;
`})),n.register("erfH8",(function(r,l){t(r.exports,"CarouselCardCollection",(function(){return d}));var a=n("RVqnc"),o=n("kAKNF"),i=n("29o0l"),s=n("gkfw3"),c=n("gEaMM");const d=({collection:t})=>{const n=(0,i.useMemo)((()=>{const n=new(e(o))(t.floorPrices[0].value,10).dividedBy(new(e(o))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,a.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]);return e(i).createElement(c.CarouselBackgroundImageCard,{src:t.imageUrl},e(i).createElement(u,null,e(i).createElement("div",null,e(i).createElement(p,null,(0,a.truncateString)(t.name,9)),e(i).createElement(m,null,n))))},u=s.default.div`
  width: 100%;
  padding: 8px 12px;
`,p=s.default.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`,m=s.default.div`
  font-weight: 600;
  color: ${e=>e.theme.grayLight};
  font-size: 14px;
  line-height: 18px;
`})),n.register("gEaMM",(function(r,l){t(r.exports,"CarouselBackgroundImageCard",(function(){return c}));var a=n("29o0l"),o=n("gkfw3"),i=n("izu1Y"),s=n("cSCtg");const c=({src:t,children:n})=>e(a).createElement(e(a).Fragment,null,e(a).createElement(d,{src:t}),e(a).createElement(u,null,n)),d=(0,o.default)(i.PImage)`
  width: ${s.EXPLORE_CARD_SIZE_PX};
  height: ${s.EXPLORE_CARD_SIZE_PX};
  border-radius: 16px;
`,u=o.default.div`
  position: absolute;
  left: 0;
  background: rgba(24, 24, 24, 0.8);
  backdrop-filter: blur(24px);
  width: 100%;
  height: 54px;

  /* reduce by 1 pixel to prevent border-radius clipping issue */
  bottom: -1px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`})),n.register("jdxan",(function(r,l){t(r.exports,"CarouselCardContainer",(function(){return s}));var a=n("29o0l"),o=n("gkfw3"),i=n("cSCtg");function s({children:t,onPress:n}){return e(a).createElement(c,{onClick:n},t,e(a).createElement(d,null))}const c=o.default.div`
  width: ${i.EXPLORE_CARD_SIZE_PX};
  height: ${i.EXPLORE_CARD_SIZE_PX};
  position: relative;
  cursor: pointer;
  overflow: hidden;
`,d=o.default.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`})),n.register("ebFSn",(function(r,l){t(r.exports,"default",(function(){return E}));var a=n("iOvk1"),o=n("hM5LD"),i=n("3ljHn"),s=n("43063"),c=n("lz5BI"),d=n("29o0l"),u=n("gkfw3"),p=n("hnPyv"),m=n("j81qC"),f=n("gX5Te"),x=n("4K7Du"),g=n("kWfcq");const h="200px";function E({tab:t}){const{data:n,mutate:r}=f.hooks.useExploreSelectedNetwork(),{currentSortOption:l,getSortOptions:a,setSortOption:o}=f.hooks.useExploreSortOption(),i=a(t),s=l(t);return e(d).createElement(y,{"data-testid":`explore-filters-${t}`},e(d).createElement(b,{value:s,options:i,onChange:e=>{(e=>{o(t,e)})(e),g.exploreAnalytics.onExploreFilterChangedByUser({filterType:"sort",filterValue:e,listName:t})}}),e(d).createElement(w,{value:n,onChange:e=>{r(e),g.exploreAnalytics.onExploreFilterChangedByUser({filterType:"network",filterValue:e,listName:t})}}))}const k=({networkLabel:t,NetworkIcon:n})=>{const[r,l]=e(d).useState(!1);return e(d).createElement(C,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1)},e(d).createElement("span",{style:{color:r?x.theme.purple:x.theme.white}},t)," ",e(d).createElement(n,{width:20,height:20,fill:r?x.theme.purple:x.theme.white}))};function w({value:t,onChange:n}){const{t:r}=(0,s.useTranslation)(),{data:[l]}=(0,i.useFeatureFlags)(["enable-bitcoin-explore"]),{data:c}=f.hooks.useSelectedMultiChainAccount(),u=(0,d.useMemo)((()=>{const t=[],i=c?(0,o.getAccountMainnetNetworkIds)(c,l):[];return i.includes(a.SolanaNetworkID.Mainnet)&&t.push({label:e(d).createElement(k,{networkLabel:"Solana",NetworkIcon:m.IconChainSolana}),key:"Solana",onClick:()=>n(a.SolanaNetworkID.Mainnet)}),i.includes(a.EthereumNetworkID.Mainnet)&&t.push({label:e(d).createElement(k,{networkLabel:"Ethereum",NetworkIcon:m.IconChainEthereum}),key:"Ethereum",onClick:()=>n(a.EthereumNetworkID.Mainnet)}),i.includes(a.PolygonNetworkID.Mainnet)&&t.push({label:e(d).createElement(k,{networkLabel:"Polygon",NetworkIcon:m.IconChainPolygon}),key:"Polygon",onClick:()=>n(a.PolygonNetworkID.Mainnet)}),i.includes(a.BitcoinNetworkID.Mainnet)&&l&&t.push({label:e(d).createElement(k,{networkLabel:"Bitcoin",NetworkIcon:m.IconChainBitcoin}),key:"Bitcoin",onClick:()=>n(a.BitcoinNetworkID.Mainnet)}),t.length>1&&t.push({label:e(d).createElement(k,{networkLabel:r("exploreFilterByall_networks"),NetworkIcon:m.IconStackedLayers}),key:"all_networks",onClick:()=>n("all_networks")}),t}),[n,r,l,c]);return u.length>1?e(d).createElement(v,null,e(d).createElement(p.Dropdown,{items:u,dropdownWidth:h,noDropdownItemPadding:!0},e(d).createElement(S,null,e(d).createElement(I,null,(e=>{switch(e){case a.SolanaNetworkID.Mainnet:return"Solana";case a.EthereumNetworkID.Mainnet:return"Ethereum";case a.PolygonNetworkID.Mainnet:return"Polygon";case a.BitcoinNetworkID.Mainnet:return"Bitcoin";case"all_networks":return r("exploreFilterByall_networks");default:return""}})(t)),e(d).createElement(m.IconChevronDown,{width:12,height:12,fill:"#999999"})))):null}function b({options:t,value:n,onChange:r}){const{t:l}=(0,s.useTranslation)(),a=(0,d.useMemo)((()=>t.map((e=>({label:l(`exploreSortBy${e}`),key:e,onClick:()=>{r(e)}})))),[r,t,l]);return e(d).createElement(v,null,e(d).createElement(p.Dropdown,{items:a,dropdownWidth:h},e(d).createElement(S,{"data-testid":"exploreSortBy-button"},e(d).createElement(I,null,l(`exploreSortBy${n}`)),e(d).createElement(m.IconChevronDown,{width:12,height:12,fill:"#999999"}))))}const y=u.default.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 8px 16px 4px 16px;
`,v=u.default.div`
  margin-right: 4px;
`,C=u.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 7px 0;
`,S=(0,u.default)(c.motion.div).attrs({activeOpacity:.6,whileHover:{background:"#3B3C40"},transition:{ease:[.5,1,.89,1],duration:.1},style:{background:"#2a2a2a"}})`
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  border-radius: 48px;
  display: flex;
  height: 32px;
  cursor: pointer;
`,I=u.default.div`
  margin-right: 6px;
  color: ${e=>e.theme.white};
  font-size: 15px;
  font-weight: 600;
`})),n.register("g8Ra9",(function(r,l){t(r.exports,"ExploreFiltersSkeleton",(function(){return s}));var a=n("29o0l"),o=n("gkfw3"),i=n("hiI91");function s(){return e(a).createElement(c,null,e(a).createElement(d,{width:"99px",height:"26px"}),e(a).createElement(d,{width:"124px",height:"26px"}))}const c=o.default.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px 16px 16px;
`,d=(0,o.default)(i.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 48px;
  margin-right: 4px;
`})),n.register("c3TWf",(function(r,l){t(r.exports,"ExploreListCollections",(function(){return x}));var a=n("43063"),o=n("29o0l"),i=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("fBlwq"),u=n("fMvHQ"),p=n("jWARq"),m=n("3n8yM"),f=n("kDfwQ");function x(){const{isExploreCollectionsLoading:t}=s.hooks.useIsExploreCollectionsLoading(),{error:n,data:r}=s.hooks.useExploreCollections(),{t:l}=(0,a.useTranslation)();return n&&!r?e(o).createElement(d.ExploreNetworkError,null):e(o).createElement(u.default,{items:r?r.data:[],renderItem:(t,n)=>e(o).createElement(g,{key:`list-collections-${n}`,href:t.marketplacePages[0].collectionUrl},e(o).createElement(m.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==r?void 0:r.uuid)||"",listName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(o).createElement(p.ListItemCollection,{collection:t,position:n+1}))),listName:"collections",header:e(o).createElement(f.ListHeader,{titles:["#",l("exploreFloor"),l("exploreVolume")]}),isLoading:t})}const g=i.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("fBlwq",(function(r,l){t(r.exports,"ExploreNetworkError",(function(){return x}));var a=n("29o0l"),o=n("88tsI"),i=n("gkfw3"),s=n("j81qC"),c=n("634r8"),d=n("27SDj");const u=i.default.div`
  padding: 0 16px;
  margin-bottom: 16px;
`,p=i.default.div`
  padding: 16px;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #2a2a2a;
`,m=(0,i.default)(c.Row).attrs({align:"center",justify:"center"})`
  width: 24px;
  height: 24px;
`,f=(0,i.default)(d.Text).attrs({size:14,weight:400,lineHeight:21,marginLeft:8,color:"#EB3742"})``,x=()=>{const{t:t}=(0,o.useTranslation)();return e(a).createElement(u,{"data-testid":"explore-network-error"},e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(s.IconExclamationMarkCircle,{width:18,exclamationFill:"transparent",circleFill:"#EB3742"})),e(a).createElement(f,null,t("exploreNetworkError"))))}})),n.register("fMvHQ",(function(r,l){t(r.exports,"default",(function(){return u}));var a=n("1fwzV"),o=n("lz5BI"),i=n("29o0l"),s=n("gkfw3"),c=n("evHvm"),d=n("NfYUA");function u({items:t,listName:n,renderItem:r,header:l,isLoading:o}){return e(i).createElement(p,{"data-testid":`explore-list-${n}`},l,e(i).createElement(a.AnimatePresence,null,o&&e(i).createElement(f,null,e(i).createElement(d.ListSkeleton,null))),!o&&t.map(((t,l)=>e(i).createElement(m,{key:`list-item-${n}-${l}`,"data-testid":`list-item-${n}-${l}`,whileHover:{background:"#333"},style:{background:"#222"},transition:{ease:[.5,1,.89,1],duration:.1}},e(i).createElement(c.ExploreTile,null,r(t,l))))))}const p=s.default.div`
  flex-direction: column;
  width: 100%;
`,m=(0,s.default)(o.motion.div)`
  flex: 1;
  width: 100%;
  cursor: pointer;
`,f=(0,s.default)(o.motion.div).attrs({initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"}})``})),n.register("NfYUA",(function(r,l){t(r.exports,"ListSkeleton",(function(){return s}));var a=n("29o0l"),o=n("gkfw3"),i=n("hiI91");function s({items:t=10}){const n=(0,a.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(a).createElement(d,{"data-testid":"explore-list-skeleton"},n.map(((t,n)=>e(a).createElement(c,{key:t,index:n+1}))))}function c({index:t}){return e(a).createElement(u,null,e(a).createElement(p,null,e(a).createElement(f,null,e(a).createElement(x,null,t)),e(a).createElement(g,null),e(a).createElement("div",null,e(a).createElement(i.SkeletonLoader,{width:"95px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(a).createElement(i.SkeletonLoader,{width:"69px",height:"20px",borderRadius:"16px"}))),e(a).createElement(m,null,e(a).createElement(i.SkeletonLoader,{width:"69px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(a).createElement(i.SkeletonLoader,{width:"38px",height:"20px",borderRadius:"16px"})))}const d=o.default.div`
  padding: 0 16px;
  flex-direction: column;
  width: 100%;
`,u=o.default.div`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
  padding: 12px 0;
`,p=o.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,m=o.default.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`,f=o.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,x=o.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
`,g=(0,o.default)(i.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
`})),n.register("jWARq",(function(r,l){t(r.exports,"ListItemCollection",(function(){return u}));var a=n("RVqnc"),o=n("kAKNF"),i=n("29o0l"),s=n("gkfw3"),c=n("izu1Y"),d=n("hiI91");const u=({collection:t,position:n})=>{const r=(0,i.useMemo)((()=>{const n=new(e(o))(t.floorPrices[0].value,10).dividedBy(new(e(o))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,a.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]),l=(0,i.useMemo)((()=>{const n=new(e(o))(t.volume||0,10).dividedBy(new(e(o))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,a.formatNumber)(n,{compact:n>=1e3})} ${t.floorPrices[0].paymentToken.symbol}`}),[t.volume,t.floorPrices]);return e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(x,null,e(i).createElement(g,null,n)),e(i).createElement(b,{src:t.imageUrl,width:48,height:48,fallback:e(i).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(i).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(i).createElement("div",null,e(i).createElement(h,null,(0,a.truncateString)(t.name,15)),e(i).createElement(E,null,r))),e(i).createElement(f,null,e(i).createElement(k,null,l),e(i).createElement(w,{green:t.volumePercentChange>=0},(0,a.formatNumber)(t.volumePercentChange,{compact:!0,includePlusPrefix:!0}),"%")))},p=s.default.div`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
`,m=s.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,f=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`,x=s.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,g=s.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,h=s.default.div`
  font-size: 17px;
  line-height: 22px;
  height: 22px;
  overflow-x: hidden;
`,E=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,k=s.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
`,w=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
  text-align: right;
`,b=(0,s.default)(c.PImage)`
  border-radius: 14px;
  width: 48px;
  height: 48px;
`})),n.register("3n8yM",(function(r,l){t(r.exports,"ListItemContainer",(function(){return o}));var a=n("29o0l");function o({children:t,onPress:n}){return e(a).createElement(i,{onClick:n},t)}const i=n("gkfw3").default.div`
  width: 100%;
  padding: 12px 16px;
`})),n.register("kDfwQ",(function(r,l){t(r.exports,"ListHeader",(function(){return i}));var a=n("29o0l"),o=n("gkfw3");const i=({titles:t})=>e(a).createElement(s,null,e(a).createElement(c,null,e(a).createElement(p,null,e(a).createElement(u,null,t[0])),e(a).createElement(u,null,t[1])),e(a).createElement(d,null,e(a).createElement(u,null,t[2]))),s=o.default.div`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 4px;
  padding-top: 12px;
`,c=o.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,d=o.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  display: flex;
`,u=o.default.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: ${e=>e.theme.grayLight};
`,p=o.default.div`
  width: 74px;
  padding-left: 4px;
`})),n.register("Dly5J",(function(r,l){t(r.exports,"ExploreTabSites",(function(){return u}));var a=n("29o0l"),o=n("gX5Te"),i=n("744R7"),s=n("ebFSn"),c=n("g8Ra9"),d=n("lwG9A");const u=()=>{const{isExploreSitesLoading:t}=o.hooks.useIsExploreSitesLoading();return e(a).createElement("div",null,e(a).createElement(i.CarouselSites,null),t?e(a).createElement(c.ExploreFiltersSkeleton,null):e(a).createElement(s.default,{tab:"sites"}),e(a).createElement(d.ExploreListSites,null))}})),n.register("744R7",(function(r,l){t(r.exports,"CarouselSites",(function(){return m}));var a=n("RVqnc"),o=n("29o0l"),i=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("kri2B"),u=n("jdxan"),p=n("8sm7E");function m(){var t;const{isExploreSitesLoading:n}=s.hooks.useIsExploreSitesLoading(),{error:r,data:l}=s.hooks.useExploreRecommendedSites(),i=(0,o.useCallback)(((t,n)=>e(o).createElement(f,{key:`carousel-card-sites-${n}`,href:(0,a.formatSearchURI)(t.url)},e(o).createElement(u.CarouselCardContainer,{onPress:()=>{c.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(o).createElement(p.CarouselCardSite,{site:t})))),[null==l?void 0:l.uuid]);return e(o).createElement(d.default,{name:"sites",items:l?l.data:[],renderCard:i,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const f=i.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("8sm7E",(function(r,l){t(r.exports,"CarouselCardSite",(function(){return d}));var a=n("43063"),o=n("29o0l"),i=n("gkfw3"),s=n("izu1Y"),c=n("gEaMM");const d=({site:t})=>{const{t:n}=(0,a.useTranslation)();return e(o).createElement(c.CarouselBackgroundImageCard,{src:t.backgroundImageUrl},e(o).createElement(u,null,e(o).createElement(f,null,e(o).createElement(p,null,t.name),e(o).createElement(m,null,n(`exploreCategory${t.category.replaceAll(" ","")}`,{defaultValue:t.category}))),e(o).createElement(x,null,e(o).createElement(g,{src:t.imageUrl}))))},u=i.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 12px 8px 12px;
`,p=i.default.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  white-space: nowrap;
  -webkit-mask-image: linear-gradient(91deg, black 85%, transparent);
`,m=i.default.div`
  color: ${e=>e.theme.grayLight};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`,f=i.default.div`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
`,x=i.default.div`
  transform: translateY(-12px);
`,g=(0,i.default)(s.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 14px;
`})),n.register("lwG9A",(function(r,l){t(r.exports,"ExploreListSites",(function(){return f}));var a=n("RVqnc"),o=n("29o0l"),i=n("gkfw3"),s=n("gX5Te"),c=n("kWfcq"),d=n("fBlwq"),u=n("fMvHQ"),p=n("3n8yM"),m=n("8H5kP");function f(){const{isExploreSitesLoading:t}=s.hooks.useIsExploreSitesLoading(),{error:n,data:r}=s.hooks.useExploreSites();return n&&!r?e(o).createElement(d.ExploreNetworkError,null):e(o).createElement(u.default,{items:r?r.data:[],renderItem:(t,n)=>e(o).createElement(x,{key:`list-sites-${n}`,href:(0,a.formatSearchURI)(t.url)},e(o).createElement(p.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==r?void 0:r.uuid)||"",listName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(o).createElement(m.ListItemSite,{site:t,position:n+1}))),listName:"sites",isLoading:t,header:null})}const x=i.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("8H5kP",(function(r,l){t(r.exports,"ListItemSite",(function(){return u}));var a=n("43063"),o=n("RVqnc"),i=n("29o0l"),s=n("gkfw3"),c=n("izu1Y"),d=n("hiI91");const u=({site:t,position:n})=>{const{t:r}=(0,a.useTranslation)();return e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(f,null,n)),e(i).createElement(h,{src:t.imageUrl,width:48,height:48,fallback:e(i).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(i).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(i).createElement("div",null,e(i).createElement(x,null,(0,o.truncateString)(t.name,15)),e(i).createElement(g,null,r(`exploreCategory${t.category.replaceAll(" ","")}`,{defaultValue:t.category}))))},p=s.default.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  display: flex;
  align-items: center;
`,m=s.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=s.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,x=s.default.div`
  font-size: 17px;
  line-height: 22px;
`,g=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,h=(0,s.default)(c.PImage)`
  border-radius: 14px;
  width: 48px;
  height: 48px;
`})),n.register("TiCFQ",(function(r,l){t(r.exports,"ExploreTabTokens",(function(){return u}));var a=n("29o0l"),o=n("gX5Te"),i=n("fhtEP"),s=n("ebFSn"),c=n("g8Ra9"),d=n("bQ2R6");const u=()=>{const{isExploreTokensLoading:t}=o.hooks.useIsExploreTokensLoading(),{currentSortOption:n}=o.hooks.useExploreSortOption(),r=n("tokens");return e(a).createElement("div",null,e(a).createElement(i.CarouselTokens,null),t?e(a).createElement(c.ExploreFiltersSkeleton,null):e(a).createElement(s.default,{tab:"tokens"}),e(a).createElement(d.ExploreListTokens,{displayType:r}))}})),n.register("fhtEP",(function(r,l){t(r.exports,"CarouselTokens",(function(){return E}));var a=n("iOvk1"),o=n("hM5LD"),i=n("3ljHn"),s=n("5slFC"),c=n("29o0l"),d=n("i1NO2"),u=n("gX5Te"),p=n("cbiYb"),m=n("kWfcq"),f=n("d1Nvi"),x=n("kri2B"),g=n("jdxan"),h=n("bcPY6");function E(){var t;const{data:n}=u.hooks.useExploreSelectedNetwork(),{isExploreTokensLoading:r}=u.hooks.useIsExploreTokensLoading(),{error:l,data:E}=u.hooks.useExploreRecommendedTokens(),k=(0,f.useNavigateToSwapper)(),{data:w}=u.hooks.useSelectedMultiChainAccount(),b=null==w?void 0:w.isReadOnly,{pushDetailView:y}=(0,d.useDetailViews)(),{data:[v,C]}=(0,i.useFeatureFlags)(["enable-public-fungible-detail-page","enable-public-fungible-detail-page-from-explore"]),S=v&&C,I=(0,c.useCallback)(((t,r)=>e(c).createElement(g.CarouselCardContainer,{key:`carousel-card-token-${r}`,onPress:()=>{var l,i;const d=null!==(l=t.tokens.find((e=>e.data.chain.id===n)))&&void 0!==l?l:t.tokens[0];if(S){const t=(0,a.encodeCaip19)((0,s.getFungibleCaip19FromFungible)(d));y(e(c).createElement(p.PublicFungibleDetailPage,{caip19:t,title:null!==(i=d.data.name)&&void 0!==i?i:void 0,entryPoint:"explore"}))}else{if(!(0,o.shouldNavigateToSwapper)(b,t))return;k({buyFungible:d})}m.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==E?void 0:E.uuid)||"",carouselName:"tokens",itemDetails:{position:r,title:t.tokens[0].data.name||t.id,id:t.id||""}})}},e(c).createElement(h.CarouselCardToken,{token:t}))),[S,b,null==E?void 0:E.uuid,n,y,k]);return e(c).createElement(x.default,{name:"tokens",items:E?E.data:[],renderCard:I,isLoading:r,isEmpty:!(!l||(null==E?void 0:E.data)&&0!==(null===(t=null==E?void 0:E.data)||void 0===t?void 0:t.length))})}})),n.register("bcPY6",(function(r,l){t(r.exports,"CarouselCardToken",(function(){return d}));var a=n("RVqnc"),o=n("29o0l"),i=n("gkfw3"),s=n("izu1Y"),c=n("cSCtg");const d=({token:t})=>{const n=t.tokens[0];return e(o).createElement(u,null,e(o).createElement(p,null,e(o).createElement(m,null,e(o).createElement(f,null,(0,a.truncateString)(n.data.name||"",12)),e(o).createElement(x,null,n.data.symbol)),e(o).createElement(g,{src:n.data.logoUri||""})),e(o).createElement(h,null,e(o).createElement(E,null,(0,a.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(o).createElement(k,{green:parseFloat(t.priceChangePercentage)>=0},(0,a.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%"}))))},u=i.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${c.EXPLORE_CARD_SIZE_PX};
  width: ${c.EXPLORE_CARD_SIZE_PX};
  padding: 10px 12px;
  background-color: #2c2d30;
  border-radius: 16px;
`,p=i.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`,m=i.default.div`
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`,f=i.default.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,x=i.default.div`
  color: ${e=>e.theme.grayLight};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,g=(0,i.default)(s.PImage)`
  width: 32px;
  height: 32px;
  border-radius: 100px;
`,h=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,E=i.default.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.44px;
`,k=i.default.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
`})),n.register("bQ2R6",(function(r,l){t(r.exports,"ExploreListTokens",(function(){return y}));var a=n("iOvk1"),o=n("hM5LD"),i=n("3ljHn"),s=n("5slFC"),c=n("43063"),d=n("29o0l"),u=n("gkfw3"),p=n("i1NO2"),m=n("gX5Te"),f=n("cbiYb"),x=n("kWfcq"),g=n("d1Nvi"),h=n("fBlwq"),E=n("fMvHQ"),k=n("3n8yM"),w=n("9AQVS"),b=n("kDfwQ");function y({displayType:t}){const{data:n}=m.hooks.useExploreSelectedNetwork(),{isExploreTokensLoading:r}=m.hooks.useIsExploreTokensLoading(),{error:l,data:u}=m.hooks.useExploreTokens(),{t:y}=(0,c.useTranslation)(),{data:C}=m.hooks.useSelectedMultiChainAccount(),S=null==C?void 0:C.isReadOnly,I=(0,g.useNavigateToSwapper)(),{data:[L,T]}=(0,i.useFeatureFlags)(["enable-public-fungible-detail-page","enable-public-fungible-detail-page-from-explore"]),P=L&&T,R=(0,d.useMemo)((()=>{switch(t){case"market_cap":return["#",y("exploreToken"),y("exploreCap")];case"gainers":case"losers":return["#",y("exploreToken"),y("explorePrice")];default:return["#",y("exploreToken"),y("explore24hVolume")]}}),[t,y]),{pushDetailView:D}=(0,p.useDetailViews)();return l&&!u?e(d).createElement(h.ExploreNetworkError,null):e(d).createElement(E.default,{items:u?u.data:[],renderItem:(r,l)=>e(d).createElement(k.ListItemContainer,{key:`list-tokens-${l}`,onPress:()=>{var t,i;const c=null!==(t=r.tokens.find((e=>e.data.chain.id===n)))&&void 0!==t?t:r.tokens[0];if(P){const t=(0,a.encodeCaip19)((0,s.getFungibleCaip19FromFungible)(c));D(e(d).createElement(f.PublicFungibleDetailPage,{caip19:t,title:null!==(i=c.data.name)&&void 0!==i?i:void 0,entryPoint:"explore"}))}else{if(!(0,o.shouldNavigateToSwapper)(S,r))return;I({buyFungible:c})}x.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==u?void 0:u.uuid)||"",listName:"tokens",itemDetails:{position:l,title:c.data.name||r.id,id:r.id}})}},e(d).createElement(v,null,e(d).createElement(w.ListItemToken,{token:r,position:l+1,displayType:t}))),listName:"tokens",isLoading:r,header:e(d).createElement(b.ListHeader,{titles:R})})}const v=u.default.div`
  cursor: pointer;
`})),n.register("9AQVS",(function(r,l){t(r.exports,"ListItemToken",(function(){return d}));var a=n("RVqnc"),o=n("29o0l"),i=n("gkfw3"),s=n("izu1Y"),c=n("hiI91");const d=({token:t,position:n,displayType:r})=>{const l=t.tokens[0],i=(0,o.useMemo)((()=>{switch(r){case"market_cap":return e(o).createElement(e(o).Fragment,null,e(o).createElement(k,null,(0,a.formatDollarAmount)(parseFloat(t.marketCap)||0,{compact:!0})),e(o).createElement(w,{green:parseFloat(t.marketCapChangePercentage)>=0},(0,a.formatNumber)(parseFloat(t.marketCapChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})));case"volume":return e(o).createElement(e(o).Fragment,null,e(o).createElement(k,null,(0,a.formatDollarAmount)(parseFloat(t.volume)||0,{compact:!0})));default:return e(o).createElement(e(o).Fragment,null,e(o).createElement(k,null,(0,a.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(o).createElement(w,{green:parseFloat(t.priceChangePercentage)>=0},(0,a.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})))}}),[r,t]);return e(o).createElement(u,null,e(o).createElement(p,null,e(o).createElement(x,null,e(o).createElement(g,null,n)),e(o).createElement(b,{src:l.data.logoUri||"",width:48,height:48,fallback:e(o).createElement(v,null,e(o).createElement(y,null,l.data.symbol)),loader:e(o).createElement(c.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement(m,null,e(o).createElement(h,null,(0,a.truncateString)(l.data.name||"",15)),e(o).createElement(E,null,l.data.symbol))),e(o).createElement(f,null,i))},u=i.default.div`
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
`,p=i.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
  overflow: hidden;
`,m=i.default.div`
  overflow: hidden;
`,f=i.default.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  display: flex;
  flex: 1;
`,x=i.default.div`
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,g=i.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,h=i.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,E=i.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,k=i.default.div`
  font-size: 17px;
  line-height: 22px;
`,w=i.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
`,b=(0,i.default)(s.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`,y=i.default.div.attrs({numberOfLines:1})`
  color: ${e=>e.theme.white};
  font-size: 12px;
`,v=i.default.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  border-radius: 100px;
  background-color: ${e=>e.theme.buttonGray};
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("kQTlk",(function(r,l){t(r.exports,"ExploreTabsTitles",(function(){return u}));var a=n("hM5LD"),o=n("29o0l"),i=n("88tsI"),s=n("kWfcq"),c=n("lSj6f"),d=n("lzZgH");const u=()=>{const{activeSectionIdx:t,sections:n}=(0,c.useExploreSections)(),{setActiveSection:r}=(0,a.useExplore)(),{t:l}=(0,i.useTranslation)(),u=(0,o.useMemo)((()=>n.map((e=>{switch(e){case"sites":return l("exploreSites");case"tokens":return l("exploreTokens");case"collections":return l("exploreCollections");case"quests":return l("quests");case"learn":return l("exploreLearn");default:return""}}))),[n,l]);return e(o).createElement(d.default,{values:u,activeTabIndex:t,setActiveTabIndex:e=>{const t=n[e];r(t),s.exploreAnalytics.onExploreTabClickedByUser({tabName:t})}})}})),n.register("lzZgH",(function(r,l){t(r.exports,"default",(function(){return m}));var a=n("ha3TG"),o=n("lz5BI"),i=n("kdk4D"),s=n("29o0l"),c=n("gkfw3"),d=n("kWfcq");const u=16,p={duration:.3,delay:0,ease:"easeOut"};function m({values:t,activeTabIndex:n,setActiveTabIndex:r}){const l=(0,s.useRef)(null),[o,c]=(0,s.useState)(null),[m,E]=(0,s.useState)(0);(0,s.useEffect)((()=>{l.current&&E(l.current.scrollWidth)}),[t]);const k=(0,i.useMotionValue)(0),w=(0,s.useMemo)((()=>{const e=window.innerWidth-m-u;return Math.min(0,e)}),[m]),b=(0,s.useCallback)(((e,t)=>{const{left:n,right:r}=e.getBoundingClientRect(),l=r>window.innerWidth-u;if(l||n<u){const e=void 0!==t?t:l?w:0;return(0,a.animate)(k,e,p)}}),[k,w]);return e(s).createElement(f,{ref:l},e(s).createElement(x,{drag:"x",style:{x:k},dragConstraints:{left:w,right:0},onDragStart:()=>{c(k.get())},onDragEnd:()=>{c(null),d.exploreAnalytics.onExploreTabTitlesDragged()},onWheel:e=>{if(0===e.deltaX)return;const t=k.get()-e.deltaX;return t>0?k.set(0):t<w?k.set(w):k.set(t)}},t.map(((t,l)=>{const a=n===l;return e(s).createElement(g,{"data-testid":`tab-title-${t}`,key:`tab-title-${l}`,active:n===l},e(s).createElement(h,{onClick:e=>{if(null!==o)return e.stopPropagation(),void e.preventDefault();r(l),b(e.currentTarget)},isActive:a},t))}))))}const f=c.default.div`
  border-bottom: 1px solid ${e=>e.theme.border};
`,x=(0,c.default)(o.motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`,g=c.default.div`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${e=>e.active?e.theme.purple:"transparent"};
  margin-right: 8px;
  height: 56px;
  display: flex;
  align-items: center;
`,h=c.default.div`
  padding: 8px 4px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>e.isActive?e.theme.white:e.theme.grayLight};
  transition:
    color 0.1s cubic-bezier(0.5, 1, 0.89, 1),
    background 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;

  height: 32px;
  display: flex;
  align-items: center;

  &:active {
    color: ${e=>e.theme.white};
    background: #333;
  }
`})),n.register("lq7YC",(function(r,l){t(r.exports,"CTABar",(function(){return E}));var a=n("43063"),o=n("9yJOd"),i=n("29o0l"),s=n("gkfw3"),c=n("feAoQ"),d=n("6UR7D"),u=n("h7kan");const p=s.default.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${e=>`repeat(${e.buttonCount}, minmax(0, 1fr));`};
  width: 100%;
  height: 74px;
`,m=s.default.button`
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
`,f=s.default.div`
  height: 24px;
  overflow: hidden;
`,x=(0,s.default)(m)`
  background: #2a2a2a;
  * {
    color: ${e=>e.theme.grayLight};
  }
  &:hover:enabled {
    background: #333333;
  }
`,g=(0,s.default)(m)`
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
`;function E({actions:t,shortcuts:n,hostname:r,headerText:l,maxButtons:s,uiContextName:m,disabled:E=!1}){var k;const{t:w}=(0,a.useTranslation)(),b=t.primary.length+t.more.length+(null!==(k=null==n?void 0:n.length)&&void 0!==k?k:0),y=t.more.length>0,v=Math.min(t.primary.length+(y?1:0),s),{handleShowModalVisibility:C,handleHideModalVisibility:S}=(0,c.useModals)(),I=(0,i.useCallback)(((e,n)=>{d.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:{name:m},position:n,type:e.type,typeSpecificMetadata:e.typeSpecificMetadata,maxButtons:s,primaryActions:t.primary,moreActions:t.more})}),[s,t.more,t.primary,m]);return e(i).createElement(p,{buttonCount:v},t.primary.map((t=>{var n;return e(i).createElement(x,{disabled:E,key:t.type,type:"button",onClick:()=>{I(t,"primary"),t.onClick(t.type)}},e(i).createElement(f,null,e(i).createElement(u.CTAIcon,{color:E?"gray":"accentPrimary",type:t.type})),e(i).createElement(h,null,null!==(n=t.singleWordAltText)&&void 0!==n?n:t.text))})),y?e(i).createElement(g,{disabled:E,type:"button",onClick:()=>{d.fungibleAnalytics.ctaBarTrackMoreButtonClick({uiContext:{name:m},maxButtons:s,totalButtons:b}),C("callToActionSheet",{headerText:l,actions:t,shortcuts:n,hostname:r,onClose:()=>{S("callToActionSheet")},trackAction:e=>{I(e,"more")}})}},e(i).createElement(o.icons.MoreHorizontal,{size:24,color:"accentPrimary"}),e(i).createElement(h,null,w("commandMore"))):null)}})),n.register("6UR7D",(function(e,r){t(e.exports,"fungibleAnalytics",(function(){return o}));var l=n("5slFC"),a=n("twk6W");const o=new(0,l.FungibleAnalytics)(a.analytics)})),n.register("foUnP",(function(e,r){t(e.exports,"WarningCardWithActions",(function(){return x}));var l=n("29o0l"),a=n("gkfw3"),o=n("91Dw6"),i=n("j81qC"),s=n("27SDj");const c=a.default.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.color};
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${e=>e.color};
  border-radius: 12px;
  gap: 8px;
`,d=a.default.div`
  display: flex;
  margin: 16px;
  gap: 8px;
`,u=a.default.div`
  display: flex;
  justify-content: ${e=>1===e.buttonCount?"center":"space-between"};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
`,p=a.default.div`
  padding: 3px;
`,m=a.default.button`
  border: none;
  background: transparent;
  color: #222222;
  cursor: pointer;
  padding: 8px;
  &:nth-child(1) {
    font-weight: 500;
  }
`,f=(0,a.default)(s.Text).attrs({size:14,weight:400,lineHeight:17,textAlign:"left",wordBreak:"break-word"})``,x=({message:e,inverted:t=!1,variant:n="warning",actions:r,Icon:a})=>{let s="#2A2A2A",x="#222222";switch(null!=a||(a="warning"!==n||t?i.IconExclamationMarkOctagon:i.IconExclamationMarkTriangle),n){case"warning":default:s=o.WARNING_COLOR;break;case"danger":s=o.DANGER_COLOR;break;case"error":x=o.ERROR_COLOR}return l.createElement(c,{color:s},l.createElement(d,null,l.createElement(p,null,l.createElement(a,{fill:x,width:18,height:18})),l.createElement(f,{color:x},e)),0===r.length?null:l.createElement(u,{buttonCount:r.length},r.map((e=>l.createElement(m,{key:e.label,onClick:e.onClick,type:"button"},e.label)))))}}))}();
//# sourceMappingURL=ExplorePage.48913488.js.map
define=__define;})(window.define);