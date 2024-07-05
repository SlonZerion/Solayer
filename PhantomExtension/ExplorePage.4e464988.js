(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("Cx7PX",(function(r,l){var a;a=r.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),t(r.exports,"ExplorePageContent",(function(){return k})),t(r.exports,"default",(function(){return N}));var i=n("54qyi"),o=n("4y59b"),s=n("egSKH"),c=n("lDSNw"),d=n("bjaYq"),u=n("lz7nT"),p=n("cZIbv"),m=n("kn91D"),x=n("fnNJD"),f=n("cHds5"),g=n("dk3Xb"),h=n("1tudC"),E=n("lAgRD"),b=n("gMNJN"),y=n("iacGS"),w=n("d1qx3");function k(){var t;const n=(0,u.useLocation)(),{t:r}=(0,d.useTranslation)(),{data:l}=b.hooks.useShouldShowQuests({platform:"extension",appVersion:(0,w.getManifestVersion)()}),{error:a,refetch:p}=b.hooks.useQuests({platform:"extension",appVersion:(0,w.getManifestVersion)()}),{setActiveSection:m,activeSection:k}=(0,i.useExplore)();(0,c.useEffect)((()=>{var e;"quests"===(null===(e=n.state)||void 0===e?void 0:e.tab)&&l&&m("quests")}),[null===(t=n.state)||void 0===t?void 0:t.tab,l,a,m]);const{error:N,refetch:D}=b.hooks.useExploreSites(),{error:P,refetch:M}=b.hooks.useExploreRecommendedSites(),{refetch:A}=b.hooks.useExploreTokens(),{refetch:R}=b.hooks.useExploreCollections(),{refetch:j}=b.hooks.useExploreRecommendedTokens(),{refetch:$}=b.hooks.useExploreRecommendedCollections(),{refetch:F}=b.hooks.useLearn(),B=N&&P,O=(0,c.useCallback)((()=>{switch(k){case"sites":M(),D();break;case"collections":$(),R();break;case"tokens":j(),A();break;case"quests":l&&p();break;case"learn":F()}}),[k,M,D,$,R,j,A,l,F,p]),[z,Z]=e(c).useState(""),G=(0,o.useDebouncedState)(z,250),_=e(s)((e=>{e&&y.exploreAnalytics.onExploreSearchedByUser({searchTerm:e})}),1e3),q=b.hooks.useEnabledNetworkIDs(),Q=(0,i.useExploreSearchList)({searchQuery:G,networkIds:q,platform:"extension"}),{showSpinner:H,showSearchResults:X}=Q;return(0,c.useEffect)((()=>{_(G)}),[G,_]),B?e(c).createElement(S,null,e(c).createElement(x.ExplorePageError,{title:r("exploreErrorTitle"),buttonText:r("exploreErrorButtonText"),description:r("exploreErrorDescription"),refetch:O})):e(c).createElement(v,null,e(c).createElement(f.ExploreSearchHeader,{value:z,onChange:Z,isLoading:H}),e(c).createElement(C,{hide:X},e(c).createElement(E.ExploreTabsTitles,null)),e(c).createElement(I,{hide:X},e(c).createElement(h.ExploreTabs,null),"tokens"===k&&e(c).createElement(L,null,e(c).createElement(T,null,r("exploreTokensLegalDisclaimer")))),e(c).createElement(I,{hide:!X},e(c).createElement(g.ExploreSearchResults,Object.assign({},Q))))}const v=p.default.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`,S=p.default.div`
  padding: 16px;
`,C=p.default.div`
  display: ${({hide:e})=>e?"none":"initial"};
  overflow-x: hidden;
`,I=(0,p.default)(C)`
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
`;var N=()=>e(c).createElement(i.ExploreProvider,{appVersion:(0,w.getManifestVersion)(),platform:"extension",initialSection:"sites"},e(c).createElement(k,null))})),n.register("fnNJD",(function(r,l){t(r.exports,"ExplorePageError",(function(){return h}));var a=n("lDSNw"),i=n("cZIbv"),o=n("44I6u"),s=n("aanFI"),c=n("6l2nq"),d=n("kn91D");const u=(0,i.default)(o.Column).attrs({align:"center"})``,p=i.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,i.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,x=(0,i.default)(d.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,f=(0,i.default)(d.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,g=(0,i.default)(d.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,h=e(a).memo((t=>e(a).createElement(u,null,e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(a).createElement(x,null,t.title),e(a).createElement(f,null,t.description),e(a).createElement(g,{onClick:t.refetch},t.buttonText))))})),n.register("cHds5",(function(r,l){t(r.exports,"ExploreSearchHeader",(function(){return d}));var a=n("lBuGR"),i=n("lMzyG"),o=n("lDSNw"),s=n("cZIbv"),c=n("jLA72");const d=({value:t,isLoading:n,onChange:r})=>{const{t:l}=(0,i.useTranslation)(),{data:[s]}=(0,a.useFeatureFlags)(["enable-explore-token-search"]);return e(o).createElement(u,null,e(o).createElement(c.SearchInput,{placeholder:l(s?"dappBrowserExtSearchPlaceholder":"dappBrowserExtSearchPlaceholderLegacy"),value:t,onChange:e=>{"value"in e.target&&"string"==typeof e.target.value&&r(e.target.value)},showClearIcon:!!t,showLoadingIcon:n,onClear:()=>{r("")}}))},u=s.default.div`
  padding: 16px;
  padding-bottom: 0;
`})),n.register("dk3Xb",(function(r,l){t(r.exports,"ExploreSearchResults",(function(){return k}));var a=n("belzv"),i=n("lBuGR"),o=n("gYh0e"),s=n("jlKgL"),c=n("4y59b"),d=n("c1thM"),u=n("lDSNw"),p=n("bjaYq"),m=n("cZIbv"),x=n("6EObQ"),f=n("2PGvS"),g=n("hjnIF"),h=n("6ha3o"),E=n("1pE5P"),b=n("iacGS");const y=m.default.div`
  border-bottom: solid 1px;
  border-color: ${e=>e.isLast?s.tokens.colors.legacy.bgWallet:s.tokens.colors.legacy.borderSecondary};
`,w={searchResultsContainer:(0,s.atoms)({marginTop:16,width:"100%"}),searchResultsHeaderContainer:(0,s.atoms)({paddingX:16,paddingY:4,display:"flex",alignItems:"flex-end",justifyContent:"space-between"}),searchResult:(0,s.atoms)({display:"flex",alignItems:"center",paddingX:16,gap:16,height:56,maxHeight:56,cursor:"pointer"}),searchResultTextContainer:(0,s.atoms)({display:"flex",flexDirection:"column",width:"100%",paddingY:10}),hover:(0,s.atoms)({cursor:"pointer"}),picturePlaceholder:(0,s.atoms)({borderRadius:6,height:32,width:32}),noResultsContainer:(0,s.atoms)({position:"absolute",top:64,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:56}),tokenSecondaryContainer:(0,s.atoms)({display:"flex",gap:4,alignItems:"center"}),dotContainer:(0,s.atoms)({display:"flex",justifyContent:"center",alignItems:"center",width:8}),dot:(0,s.atoms)({backgroundColor:"textSecondary",width:4,height:4,borderRadius:"circle"})},k=({searchedDapps:t,tokens:n,priceMap:r,isPriceMapLoading:l,showMoreDapps:d,setShowMoreDapps:m,renderShowMoreDappsButton:y})=>{const{data:[k]}=(0,i.useFeatureFlags)(["enable-explore-token-search"]),{t:S}=(0,p.useTranslation)(),{pushDetailView:C}=(0,h.useDetailViews)(),I=(0,u.useMemo)((()=>t.map(((t,n)=>({key:t.id,image:e(u).createElement(f.ShapedImage,{src:t.imageUrl,size:"small",shape:"square"}),textMain:e(u).createElement(s.Text,{content:t.name,font:"body"}),textSecondary:e(u).createElement(s.Text,{content:t.category||"",font:"caption",color:"textSecondary"}),onClick:()=>{window.open((0,c.getOriginAndHostname)(t.domain).origin),b.exploreAnalytics.onExploreSearchItemClickedByUser({itemDetails:{position:n+1,title:t.name,id:t.id}})}})))),[t]),L=(0,u.useMemo)((()=>n.map((t=>{const n=(0,a.encodeCaip19)((0,o.getFungibleCaip19FromFungible)(t)),i=r[n],d=null==i?void 0:i.price,p=void 0!==d,m=null==i?void 0:i.usd_24h_change,f=void 0!==m,h=p||f;return{key:n,image:e(u).createElement(x.EcosystemImage,{image:{type:"fungible",src:t.data.logoUri,fallback:t.data.symbol||t.data.tokenAddress},tokenType:t.type,chainMeta:t.data.chain,size:32}),textMain:e(u).createElement(s.Text,{content:t.data.name||"",font:"body"}),textSecondary:e(u).createElement("div",{className:w.tokenSecondaryContainer},e(u).createElement(s.Text,{content:t.data.symbol||"",font:"caption",color:"textSecondary"}),l?e(u).createElement(e(u).Fragment,null,e(u).createElement(g.SkeletonLoader,{width:"36px",height:"14px",borderRadius:"8px"}),e(u).createElement(g.SkeletonLoader,{width:"48px",height:"14px",borderRadius:"8px"})):e(u).createElement(e(u).Fragment,null,h?e(u).createElement("div",{className:w.dotContainer},e(u).createElement("div",{className:w.dot})):null,p?e(u).createElement(s.Price,{value:d,font:"caption",color:"textSecondary"}):null,f?e(u).createElement(s.Text,{content:`${(0,c.formatNumber)(m,{includePlusPrefix:!0})}%`,font:"caption",color:m>=0?"accentSuccess":"accentAlert"}):null)),onClick:()=>{var r;C(e(u).createElement(E.PublicFungibleDetailPage,{caip19:n,title:null!==(r=t.data.name)&&void 0!==r?r:void 0,entryPoint:"explore-search"}))}}}))),[l,r,C,n]);return t.length||n.length?e(u).createElement(e(u).Fragment,null,I.length?e(u).createElement(v,{testId:"explore-search-results",title:e(u).createElement(s.Text,{content:S("exploreSites"),font:"title1Semibold"}),items:I,showMore:d,setShowMore:m,renderShowMoreButton:y}):null,L.length?e(u).createElement(v,{testId:"explore-search-results",title:e(u).createElement(s.Text,{content:S("exploreTokens"),font:"title1Semibold"}),items:L,showMore:!0,setShowMore:c.NOOP,renderShowMoreButton:!1}):null):e(u).createElement("div",{className:w.noResultsContainer,"data-testid":"explore-search-results-nodata"},e(u).createElement(s.Text,{content:S(k?"dappBrowserSearchNoAppsTokens":"dappBrowserSearchNoApps"),font:"bodyMedium",color:"textSecondary"}))},v=({items:t,title:n,testId:r,renderShowMoreButton:l,showMore:a,setShowMore:i})=>{const{t:o}=(0,p.useTranslation)();return e(u).createElement("div",{className:w.searchResultsContainer,"data-testid":r},e(u).createElement("div",{className:w.searchResultsHeaderContainer},n,l?e(u).createElement(s.Text,{className:w.hover,content:o(a?"exploreShowLess":"exploreShowMore"),font:"caption",color:"textSecondary",onClick:()=>i(!a)}):null),t.map(((n,r)=>e(u).createElement(d.motion.div,{key:n.key,className:w.searchResult,onClick:()=>{n.onClick&&n.onClick()},whileHover:{background:s.tokens.colors.legacy.bgButton},style:{background:s.tokens.colors.legacy.bgWallet},transition:{ease:[.5,1,.89,1],duration:.1}},e(u).createElement("div",null,n.image),e(u).createElement(y,{isLast:r===t.length-1,className:w.searchResultTextContainer},n.textMain,n.textSecondary)))))}})),n.register("2PGvS",(function(r,l){t(r.exports,"ShapedImage",(function(){return x}));var a=n("4y59b"),i=n("lDSNw"),o=n("cZIbv"),s=n("miiws"),c=n("c6Gae"),d=n("hjnIF");const u=e=>{if("number"==typeof e)return e;switch(null!=e?e:"small"){case"normal":return 48;case"small":return 32;case"xsmall":return 24;case"xxsmall":return 16}},p=(0,o.default)(c.PImage)`
  border-radius: ${e=>e.borderradius}px;
  width: 100%;
  height: 100%;
`,m=o.default.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{var t;return(0,a.hexToRGB)(e.color,null!==(t=e.alpha)&&void 0!==t?t:.1)}};
`,x=({src:t,fallback:n,alt:r,size:l="normal",shape:a="circle",style:o})=>{const c=null!=n?n:e(i).createElement(f,null,"?"),x=u(l),g=u(l),h=(e=>"square"===e?6:0)(a);return"circle"===a?e(i).createElement(s.Circle,{color:"#222222",diameter:x,style:o},e(i).createElement(p,{src:t,fallback:c,alt:r||void 0,width:x,height:g,borderradius:h,loader:e(i).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${x}px`,height:`${g}px`})})):e(i).createElement(m,{color:"#222222",width:x,height:g,style:o},e(i).createElement(p,{src:t,fallback:c,alt:r||"",width:x,height:g,borderradius:h,loader:e(i).createElement(d.SkeletonLoader,{borderRadius:`${h}px`,width:`${x}px`,height:`${g}px`})}))},f=o.default.div`
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("iacGS",(function(e,r){t(e.exports,"exploreAnalytics",(function(){return i}));var l=n("54qyi"),a=n("h5kyv");const i=new(0,l.ExploreAnalytics)(a.analytics)})),n.register("1tudC",(function(r,l){t(r.exports,"ExploreTabs",(function(){return x}));var a=n("4y59b"),i=n("lDSNw"),o=n("cecAp"),s=n("86rg0"),c=n("gBwyG"),d=n("4jLAN"),u=n("4bI2f"),p=n("28cqA"),m=n("1sMuZ");function x(){const{sections:t,activeSection:n,activeSectionIdx:r}=(0,s.useExploreSections)(),l=(0,i.useMemo)((()=>t.map((t=>{switch(t){case"sites":return{section:t,render:e(i).createElement(p.ExploreTabSites,null)};case"tokens":return{section:t,render:e(i).createElement(m.ExploreTabTokens,null)};case"collections":return{section:t,render:e(i).createElement(u.ExploreTabCollections,null)};case"quests":return{section:t,render:e(i).createElement(o.Quests,null)};case"learn":return{section:t,render:e(i).createElement(d.Learn,null)};default:return null}})).filter(a.filterBoolean)),[t]);return e(i).createElement(c.default,{activeIndex:r,activeSection:n,items:l})}})),n.register("cecAp",(function(r,l){t(r.exports,"Quests",(function(){return x}),(function(e){return x=e}));var a=n("6Tvfa"),i=n("lDSNw"),o=n("cZIbv"),s=n("gMNJN"),c=n("d1qx3"),d=n("8XpGW"),u=n("k4rlt"),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const m=e(i).memo((({quests:t,isLoading:n})=>n?e(i).createElement("div",null,e(i).createElement(d.QuestSkeletonHeader,null),e(i).createElement(d.QuestSkeleton,null),e(i).createElement(d.QuestSkeleton,null)):e(i).createElement("div",null,e(i).createElement(u.QuestsList,{quests:t})))),x=()=>{const t=(()=>{const{data:e=[],isLoading:t,error:n}=s.hooks.useQuests({platform:"extension",appVersion:(0,c.getManifestVersion)()}),{data:r}=s.hooks.useSelectedMultiChainAccount(),{data:l}=s.hooks.useIsAnalyticsOptedOut();return(0,i.useMemo)((()=>({shouldShowQuests:!l&&(null==r?void 0:r.type)!==a.AccountType.ReadOnly&&!n,quests:e,isLoading:t})),[r,e,l,t,n])})(),{shouldShowQuests:n}=t,r=p(t,["shouldShowQuests"]);return n?e(i).createElement(f,{"data-testid":"quests"},e(i).createElement(m,Object.assign({},r))):null},f=o.default.div`
  padding: 16px;
  padding-top: 0;
`})),n.register("8XpGW",(function(r,l){t(r.exports,"Separator",(function(){return f})),t(r.exports,"QuestSkeletonHeader",(function(){return g})),t(r.exports,"QuestSkeleton",(function(){return h}));var a=n("lDSNw"),i=n("cZIbv"),o=n("44I6u"),s=n("6l2nq"),c=n("hjnIF");const d="14px",u="8px",p="#484848",m=(0,i.default)(c.SkeletonLoader)`
  width: 100%;
  height: 144px;
  border-top-left-radius: ${u};
  border-top-right-radius: ${u};
`,x=(0,i.default)(c.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,f=i.default.div`
  background: #474747;
  height: 1px;
  opacity: 0.6;
  width: 100%;
`,g=()=>e(a).createElement(c.SkeletonLoader,{align:"center",width:"150px",height:"30px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 auto 17px auto"}),h=()=>e(a).createElement(e(a).Fragment,null,e(a).createElement(c.SkeletonLoader,{width:"100%",height:"308px",backgroundColor:"#2D2D2D",borderRadius:u,margin:"0 0 10px 0"},e(a).createElement(o.Column,null,e(a).createElement(m,{align:"flex-start",justify:"flex-end",margin:"0 0 10px"},e(a).createElement(x,{align:"flex-start",justify:"flex-end",width:"65px",height:"20px",margin:"10px 10px 0 0",borderRadius:"32px"})),e(a).createElement(o.Column,{padding:"16px"},e(a).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:"8px",margin:"0 0 17px 0"}),e(a).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u})),e(a).createElement(f,null),e(a).createElement(s.Row,{padding:"16px"},e(a).createElement(c.SkeletonLoader,{width:"40px",height:"40px",backgroundColor:p,borderRadius:u}),e(a).createElement(o.Column,{width:"auto",margin:"0 0 0 10px"},e(a).createElement(c.SkeletonLoader,{justify:"flex-start",width:"60px",height:d,backgroundColor:p,borderRadius:u,margin:"0 0 5px 0"}),e(a).createElement(c.SkeletonLoader,{justify:"flex-start",width:"125px",height:d,backgroundColor:p,borderRadius:u}))))))})),n.register("k4rlt",(function(r,l){t(r.exports,"QuestsList",(function(){return o}));var a=n("lDSNw"),i=n("bvnT7");const o=({quests:t})=>e(a).createElement(e(a).Fragment,null,t.map((t=>e(a).createElement(i.QuestListItem,Object.assign({key:t.id},t)))))})),n.register("bvnT7",(function(e,r){t(e.exports,"QuestListItem",(function(){return L}));var l=n("lMzyG"),a=n("8NH57"),i=n("lDSNw"),o=n("cZIbv"),s=n("jzIJT"),c=n("jl49C"),d=n("2LZGp"),u=n("ktQU4"),p=n("laYjG"),m=n("miiws"),x=n("kn91D"),f=n("eLIAP"),g=n("8XpGW"),h=n("fLLui");const E=(0,o.default)(s.ExploreTile)`
  border: 1px solid rgba(71, 71, 71, 0.4);
  border-radius: ${12}px;
  box-shadow: ${e=>e.isPreview?"":"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"};
  cursor: ${e=>e.isDisabled||e.isPreview?"auto":"pointer"};
  margin-bottom: 24px;
  position: relative;
`,b=o.default.div`
  background-color: rgba(44, 45, 48, 0.5);
  border-radius: ${12}px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,y=o.default.div`
  align-items: center;
  border-top-left-radius: ${12}px;
  border-top-right-radius: ${12}px;
  display: flex;
  height: 144px;
  justify-content: center;
  overflow: hidden;
`,w=o.default.img`
  max-width: 100%;
`,k=o.default.div`
  padding: 16px;
`,v=(0,o.default)(x.Text)`
  margin-bottom: 8px;
`,S=(0,o.default)(x.Text)``,C=(0,o.default)(m.Circle).attrs({diameter:32})`
  background-color: transparent;
  border: 1px solid #333333;
`,I=i.memo((e=>{const{titleLong:t,imageUrl:n,description:r,isCompleted:l,reward:a,badge:o,isPreview:s,questState:c,onClickQuest:d,onClickQuestRewardPreview:u,onClaimQuestReward:p}=e;return i.createElement(E,{onClick:d,isDisabled:l,isPreview:s,"data-testid":"quest-list-item"},i.createElement(y,null,i.createElement(w,{src:n}),o&&i.createElement(h.QuestStatusBadge,Object.assign({},o)),s&&i.createElement(b,null)),i.createElement(g.Separator,null),i.createElement(k,null,i.createElement(v,{textAlign:"left",size:16,weight:500,lineHeight:19},t),i.createElement(S,{color:"#999",textAlign:"left",weight:400,lineHeight:17,size:14},r)),a&&i.createElement(i.Fragment,null,i.createElement(g.Separator,null),i.createElement(f.QuestRewardSection,{isQuestCompleted:l,questState:c,reward:a,onClickQuestRewardPreview:u,onClaimQuestReward:p})))})),L=e=>{const t=(e=>{const{t:t}=(0,l.useTranslation)(),{id:n,titleShort:r,networkIds:o,interstitial:s,reward:m,isPreview:f,previewUrl:g,questState:h}=e,{handleShowModalVisibility:E,handleHideModalVisibility:b}=(0,d.useModals)(),y=(0,c.useDeepLink)(),w=i.useMemo((()=>["claimed","completed_unclaimable","completed"].includes(h)),[h]),k=i.useCallback((e=>{if(f&&null!=g)return u.questAnalytics.onQuestPreviewUrlClick({questId:n,shortName:r},g),void y(e,{destinationType:a.DeepLinkDestination.ExternalLink,url:g});if(w||null==s)return;const{destinationType:t,url:l,lineItems:o,primaryButtonText:c,secondaryButtonText:d,title:m}=s,h=c.length>19||d.length>19;u.questAnalytics.onQuestSelected({questId:n,shortName:r}),E("interstitial",{bodyTitle:m,details:o.map(((e,t)=>({icon:i.createElement(C,null,i.createElement(x.Text,{size:14},t+1)),title:e.title,subtitle:e.description}))),icon:s.imageUrl,onDismiss:()=>{u.questAnalytics.onQuestInterstitialDismiss({questId:n,shortName:r})},FooterComponent:()=>i.createElement(p.ButtonGroup,{vertical:h,buttons:[{text:d,onClick:()=>{u.questAnalytics.onQuestInterstitialSecondaryClick({questId:n,shortName:r,buttonText:d}),b("interstitial")}},{text:c,theme:"primary",onClick:()=>{u.questAnalytics.onQuestInterstitialPrimaryClick({questId:n,shortName:r,buttonText:c}),y(e,{destinationType:t,url:l}),b("interstitial")}}]})})}),[E,b,s,y,n,w,f,g,r]),v=i.useCallback((e=>{if(w||null==m||m.hasClaimed)return;e.stopPropagation();const{title:n,description:r,imageUrl:l}=m;E("interstitial",{bodyTitle:n,bodyDescription:r,icon:l,FooterComponent:()=>i.createElement(p.Button,{onClick:()=>b("interstitial")},t("commandDismiss"))})}),[w,E,b,m,t]),S=i.useCallback((()=>{null==m||m.hasClaimed||(u.questAnalytics.onQuestRewardClaimed({questId:n,shortName:r}),E("claimReward",{questId:n,networkIds:o,onPressDismiss:()=>b("claimReward")}))}),[m,n,o,E,b,r]);return i.useMemo((()=>Object.assign(Object.assign({},e),{isCompleted:w,onClickQuestRewardPreview:v,onClaimQuestReward:S,onClickQuest:k})),[w,e,k,v,S])})(e);return i.createElement(I,Object.assign({},t))}})),n.register("jzIJT",(function(r,l){t(r.exports,"ExploreTile",(function(){return s}),(function(e){return s=e}));var a=n("c1thM"),i=n("lDSNw"),o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const s=t=>{var{hideAnimation:n}=t,r=o(t,["hideAnimation"]);return e(i).createElement(a.motion.div,Object.assign({whileHover:n?void 0:{scale:.97},transition:{ease:[.16,1,.3,1],duration:.4}},r))}})),n.register("ktQU4",(function(e,r){t(e.exports,"questAnalytics",(function(){return i}));var l=n("bUo8j"),a=n("h5kyv");const i=new(0,l.QuestAnalytics)(a.analytics)})),n.register("eLIAP",(function(r,l){t(r.exports,"QuestRewardSection",(function(){return x}));var a=n("lMzyG"),i=n("lDSNw"),o=n("cZIbv"),s=n("laYjG"),c=n("aanFI"),d=n("kn91D");const u=o.default.div`
  padding: 16px;
`,p=o.default.div`
  align-self: center;
  margin-right: 8px;
`,m=(0,o.default)(s.Button).attrs({theme:"primary"})`
  align-self: center;
  height: 32px;
  max-width: 80px;
  padding: 8px 14px;
  width: auto;
`,x=({isQuestCompleted:t,questState:n,reward:r,onClickQuestRewardPreview:l,onClaimQuestReward:o})=>{const{t:s}=(0,a.useTranslation)(),x="completed"===n||"claimed"===n,f=s("claimed"===n?"pastParticipleClaimed":"commandClaim");return e(i).createElement(u,null,e(i).createElement("div",{style:{display:"flex"}},e(i).createElement("div",{onClick:l,style:{cursor:t?"auto":"pointer",display:"flex",flexGrow:1,marginRight:16}},e(i).createElement(p,null,e(i).createElement(c.IconReward,null)),e(i).createElement("div",null,e(i).createElement(d.Text,{color:"#999",textAlign:"left",size:13,lineHeight:16},s("reward")),e(i).createElement(d.Text,{textAlign:"left",size:14,weight:600,lineHeight:16},r.title))),x&&e(i).createElement(m,{onClick:o,disabled:"claimed"===n},e(i).createElement(d.Text,{color:"#222",weight:600,lineHeight:16,size:13},f))))}})),n.register("fLLui",(function(r,l){t(r.exports,"QuestStatusBadge",(function(){return d}));var a=n("lDSNw"),i=n("cZIbv"),o=n("aanFI"),s=n("kn91D"),c=n("7Ooks");const d=({text:t,color:n,tooltip:r})=>r?e(a).createElement(u,null,e(a).createElement(c.QuestBadgeTooltip,Object.assign({},r),e(a).createElement(p,null,e(a).createElement(m,{color:n},t),e(a).createElement(o.IconInfo,{width:16,fill:n,"data-testid":"quest-status-badge-info-icon"})))):e(a).createElement(u,null,e(a).createElement(p,null,e(a).createElement(m,{color:n},t))),u=i.default.div`
  position: absolute;
  top: 8px;
  right: 8px;
`,p=i.default.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  background: rgba(34, 34, 34, 0.8);
  backdrop-filter: blur(2px);
  border-radius: 32px;
  padding: 4px 8px;
`,m=(0,i.default)(s.Text)`
  color: ${e=>e.color};
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
`})),n.register("7Ooks",(function(e,r){t(e.exports,"QuestBadgeTooltip",(function(){return s}));var l=n("lDSNw"),a=n("cZIbv"),i=n("4RfY3"),o=n("kn91D");const s=({children:e,lineOne:t,lineTwo:n})=>{const r=l.createElement(c,{onClick:e=>{e.stopPropagation()}},l.createElement(d,null,t),n&&l.createElement(d,null,n));return l.createElement(i.TooltipInteractive,{content:r,alignment:"bottomRightDirect",index:0},e)},c=a.default.div`
  display: flex;
  cursor: default;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
  padding: 12px 16px;
  max-width: 226px;
`,d=(0,a.default)(o.Text).attrs({lineHeight:17,size:14,textAlign:"start"})``})),n.register("86rg0",(function(e,r){t(e.exports,"useExploreSections",(function(){return s}));var l=n("54qyi"),a=n("lDSNw"),i=n("gMNJN"),o=n("d1qx3");const s=()=>{const{data:e}=i.hooks.useShouldShowQuests({platform:"extension",appVersion:(0,o.getManifestVersion)()}),{activeSection:t,sections:n}=(0,l.useExplore)(),r=(0,a.useMemo)((()=>n.filter((t=>!("quests"===t&&!e)))),[n,e]),s=(0,a.useMemo)((()=>r.indexOf(t)),[t,r]);return{sections:r,activeSection:t,activeSectionIdx:s}}})),n.register("gBwyG",(function(r,l){t(r.exports,"default",(function(){return s}));var a=n("lDSNw"),i=n("jVSWn"),o=n("cZIbv");function s({activeIndex:t,activeSection:n,items:r,animateFirstTime:l=!1}){const[o,s]=e(a).useState(!0),u=(0,i.default)(t),p=t-(u||0)>0;return(0,a.useEffect)((()=>{t!==u&&s(!1)}),[t,u,s]),e(a).createElement(d,null,r.map(((r,i)=>e(a).createElement(c,{key:r.section,testID:`animation-item-${i}`,active:n===r.section,isLeft:p,shouldAnimate:!!l||!o,inView:!p&&t===i-1||p&&t===i+1||t===i},"function"==typeof r.render?r.render():r.render))))}const c=({active:t,children:n,testID:r,isLeft:l,shouldAnimate:i,inView:o})=>e(a).createElement(u,{active:t,"data-testid":r,shouldAnimate:i,isLeft:l,inView:o},o&&n),d=o.default.div`
  position: relative;
  width: 100%;
  height: ${e=>e.height?`${e.height}px`:"auto"};
  padding-top: 16px;
`,u=o.default.div`
  display: ${e=>e.active?"block":"none"};
  visibility: ${e=>e.inView?"visible":"hidden"};
  animation-name: ${e=>e.isLeft?e.active?p:f:e.active?x:m};
  animation-duration: ${e=>e.shouldAnimate?"0.5s":"0s"};
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  transition: opacity 0.5s ease-in-out;
`,p=o.keyframes`
  0% {
    left: 300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,m=o.keyframes`
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
`,x=o.keyframes`
  0% {
    left: -300px;
    opacity: 0;
  };
  100%  {
    left: 0px;
    opacity: 1
  };
`,f=o.keyframes`
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
`})),n.register("4jLAN",(function(r,l){t(r.exports,"Learn",(function(){return p}));var a=n("lDSNw"),i=n("bjaYq"),o=n("cZIbv"),s=n("bpx2y"),c=n("gMNJN"),d=n("kCMom"),u=n("7R9fe");const p=()=>{const{isLoading:t,data:n,error:r,refetch:l}=c.hooks.useLearn(),{t:o}=(0,i.useTranslation)();return r&&!t&&!n||0===(null==n?void 0:n.data.length)?e(a).createElement(x,null,e(a).createElement(s.ErrorView,{title:o("exploreLearnErrorTitle"),description:o("exploreLearnErrorDescription"),refetch:l})):e(a).createElement(m,{"data-testid":"learn-container"},t?e(a).createElement(u.LearnSkeleton,null):e(a).createElement(d.LearnCards,{items:(null==n?void 0:n.data)||[]}))},m=o.default.div`
  padding: 0 16px 16px 16px;
`,x=o.default.div`
  padding: 16px;
`})),n.register("kCMom",(function(r,l){t(r.exports,"LearnCards",(function(){return x}));var a=n("lDSNw"),i=n("cZIbv"),o=n("kn91D"),s=n("jl49C"),c=n("iacGS"),d=n("1GaZ5"),u=n("jzIJT");const p=({item:t,position:n})=>{const r=(0,s.useDeepLink)();return e(a).createElement(g,{hidePointer:!t.page,hideAnimation:!t.page,halfWidth:"half-width"===t.layout,"data-testid":"learn-card-tip",onClick:e=>{c.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"tip"}}),t.page&&r(e,{destinationType:t.page,url:t.url})}},e(a).createElement(E,{background:t.backgroundColor},e(a).createElement(b,null,e(a).createElement(y,null,e(a).createElement(S,{color:"black",opacity:.5},e(a).createElement(I,{"data-testid":"learn-card-tip-icon"},e(a).createElement("img",{width:"16px",height:"16px",src:t.icon})),t.title)),e(a).createElement(y,null,e(a).createElement(v,{opacity:.7},t.description)))))},m=({item:t,position:n})=>{const r=(0,a.useCallback)((()=>{c.exploreAnalytics.onExploreLearnItemClickedByUser({itemDetails:{position:n,id:t.id,title:t.title,type:"article"}})}),[t.id,t.title,n]);return"half-width"===t.layout?e(a).createElement(h,{href:t.url,onClick:r},e(a).createElement(g,{halfWidth:!0,"data-testid":"learn-card-article-half"},e(a).createElement(E,null,e(a).createElement(k,{style:{height:"50%"}},e(a).createElement(C,{src:t.backgroundImageUrl})),e(a).createElement(w,{background:t.backgroundColor},e(a).createElement(v,null,t.title))))):e(a).createElement(h,{href:t.url,onClick:r},e(a).createElement(g,{"data-testid":"learn-card-article-full"},e(a).createElement(E,{background:t.backgroundColor},e(a).createElement(b,null,e(a).createElement(v,null,t.title),e(a).createElement(S,{color:"#474747"},t.description))),e(a).createElement(E,null,e(a).createElement(C,{src:t.backgroundImageUrl}))))},x=({items:t})=>e(a).createElement(f,{"data-testid":"learn-cards"},t.map(((t,n)=>"learnArticle"===t.type?e(a).createElement(m,{item:t,key:t.title,position:n}):e(a).createElement(p,{item:t,key:t.title,position:n})))),f=i.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 8px;
`,g=(0,i.default)(u.ExploreTile)`
  border-radius: 16px;
  height: ${d.EXPLORE_CARD_SIZE_PX};
  display: flex;
  overflow: hidden;
  cursor: ${e=>e.hidePointer?"auto":"pointer"};
  width: ${e=>e.halfWidth?"calc(50% - 4px)":"auto"};
`,h=i.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`,E=i.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${e=>e.background||"auto"};
`,b=i.default.div`
  padding: 12px 16px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`,y=i.default.div`
  display: flex;
`,w=(0,i.default)(y)`
  padding: 16px;
  background: ${e=>e.background||"auto"};
`,k=(0,i.default)(y)`
  flex: 1;
`,v=(0,i.default)(o.Text)`
  text-align: left;
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.36px;
`,S=(0,i.default)(o.Text)`
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
`,C=i.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,I=i.default.span`
  display: flex;
  margin-right: 4px;
`})),n.register("1GaZ5",(function(e,r){t(e.exports,"EXPLORE_CARD_SIZE",(function(){return l})),t(e.exports,"EXPLORE_CARD_SIZE_PX",(function(){return a}));const l=(n("ibYAx").PHANTOM_WIDTH-40)/2,a=`${l}px`})),n.register("7R9fe",(function(r,l){t(r.exports,"LearnSkeleton",(function(){return u}));var a=n("lDSNw"),i=n("cZIbv"),o=n("hjnIF"),s=n("1GaZ5");const c=()=>e(a).createElement(m,null,e(a).createElement(f,null,e(a).createElement(h,{width:"110px"}),e(a).createElement(h,{width:"90px"}),e(a).createElement(h,{width:"105px"})),e(a).createElement(x,null,e(a).createElement(h,{width:"64px"}))),d=()=>e(a).createElement(m,null,e(a).createElement(f,null,e(a).createElement(h,{width:"110px"}),e(a).createElement(h,{width:"90px"}))),u=()=>e(a).createElement(p,{"data-testid":"learn-skeleton"},e(a).createElement(c,null),e(a).createElement(g,null,e(a).createElement(d,null),e(a).createElement(d,null)),e(a).createElement(c,null)),p=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 10px;
`,m=(0,i.default)(o.SkeletonLoader)`
  background: #323232;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${s.EXPLORE_CARD_SIZE_PX};
  border-radius: 14px;
  padding: 16px;
  justify-content: flex-end;
`,x=i.default.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`,f=i.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g=i.default.div`
  display: flex;
  gap: 8px;
`,h=(0,i.default)(o.SkeletonLoader)`
  height: 16px;
  border-radius: 16px;
`})),n.register("4bI2f",(function(r,l){t(r.exports,"ExploreTabCollections",(function(){return u}));var a=n("lDSNw"),i=n("gMNJN"),o=n("fs8H6"),s=n("hTknS"),c=n("5oT4X"),d=n("706Mc");const u=()=>{const{isExploreCollectionsLoading:t}=i.hooks.useIsExploreCollectionsLoading();return e(a).createElement("div",null,e(a).createElement(o.CarouselCollections,null),t?e(a).createElement(c.ExploreFiltersSkeleton,null):e(a).createElement(s.default,{tab:"collections"}),e(a).createElement(d.ExploreListCollections,null))}})),n.register("fs8H6",(function(r,l){t(r.exports,"CarouselCollections",(function(){return p}));var a=n("lDSNw"),i=n("cZIbv"),o=n("gMNJN"),s=n("iacGS"),c=n("h868b"),d=n("aKaH8"),u=n("ifWd7");function p(){var t;const{isExploreCollectionsLoading:n}=o.hooks.useIsExploreCollectionsLoading(),{error:r,data:l}=o.hooks.useExploreRecommendedCollections(),i=(0,a.useCallback)(((t,n)=>e(a).createElement(m,{href:t.marketplacePages[0].collectionUrl},e(a).createElement(u.CarouselCardContainer,{key:`carousel-card-collections-${n}`,onPress:()=>{s.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(a).createElement(d.CarouselCardCollection,{collection:t})))),[null==l?void 0:l.uuid]);return e(a).createElement(c.default,{name:"collections",items:l?l.data:[],renderCard:i,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const m=i.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("h868b",(function(r,l){t(r.exports,"default",(function(){return y}));var a=n("bK93X"),i=n("7dqns"),o=n("c1thM"),s=n("1bdlq"),c=n("8GcfJ"),d=n("lDSNw"),u=n("cZIbv"),p=n("aanFI"),m=n("iacGS"),x=n("1GaZ5"),f=n("jzIJT"),g=n("fwQxH");const h=-1*(x.EXPLORE_CARD_SIZE+8),E={type:"spring",stiffness:256.1,damping:24,mass:1},b=2;function y({items:t,renderCard:n,isLoading:r,isEmpty:l,name:o}){const[u,x]=(0,d.useState)(0),[f,y]=(0,d.useState)(!1),C=(0,s.useMotionValue)(0),I=(0,d.useMemo)((()=>h*(t.length-b)),[t]),L=(0,d.useCallback)((e=>e<0?0:e>t.length-1?t.length-1:e),[t]),T=(0,d.useCallback)((()=>L(Math.round(C.get()/h))),[C,L]);(0,c.useMotionValueEvent)(C,"change",(()=>{x(T())}));const N=(0,d.useCallback)((e=>{const t=L(e)*h;(0,a.animate)(C,t,E),m.exploreAnalytics.onExploreCarouselDragged({listName:o})}),[L,C,o]),D={fill:"#222",width:16,height:16};return r?e(d).createElement(g.CarouselSkeleton,null):l?null:e(d).createElement(w,{"data-testid":`explore-carousel-${o}`},e(d).createElement(i.AnimatePresence,{initial:!1},u>=1&&e(d).createElement(S,{onClick:()=>N(u-1)},e(d).createElement(p.IconArrowLeftThin,Object.assign({},D)))),e(d).createElement(i.AnimatePresence,{initial:!1},u<=t.length-b-1&&e(d).createElement(S,{isRight:!0,onClick:()=>N(u+1)},e(d).createElement(p.IconArrowRightThin,Object.assign({},D)))),e(d).createElement(k,{style:{x:C},drag:t.length>b?"x":void 0,dragConstraints:{left:I,right:0},onDragStart:()=>y(!0),onDragEnd:()=>{y(!1),N(T()),m.exploreAnalytics.onExploreCarouselDragged({listName:o})},onWheel:e=>{if(0===e.deltaX)return;const t=C.get()-e.deltaX;return t>0?C.set(0):t<I?C.set(I):C.set(t)}},t.map(((r,l)=>e(d).createElement(v,{key:`carousel-item-${l}`,isLast:l===t.length-1,onClick:e=>{f&&(e.stopPropagation(),e.preventDefault())}},n(r,l))))))}const w=u.default.div`
  width: 100vw;
  margin-bottom: 24px;
`,k=(0,u.default)(o.motion.div)`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
`,v=(0,u.default)(f.ExploreTile)`
  position: relative;
  margin-right: ${e=>e.isLast?0:8}px;
`,S=(0,u.default)(o.motion.div).attrs({transition:{ease:[.16,1,.3,1],duration:.5},initial:{opacity:0,translateY:8},animate:{opacity:1,translateY:0},exit:{opacity:0,translateY:8}})`
  background: #ab9ff2;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: ${e=>e.isRight?"auto":"4px"};
  right: ${e=>e.isRight?"4px":"auto"};
  top: ${x.EXPLORE_CARD_SIZE/2}px;
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
`})),n.register("8GcfJ",(function(e,r){t(e.exports,"useMotionValueEvent",(function(){return a}));var l=n("lDSNw");function a(e,t,n){(0,l.useInsertionEffect)((()=>e.on(t,n)),[e,t,n])}})),n.register("fwQxH",(function(r,l){t(r.exports,"CarouselSkeleton",(function(){return c}));var a=n("lDSNw"),i=n("cZIbv"),o=n("hjnIF"),s=n("1GaZ5");function c({items:t=10}){const n=(0,a.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(a).createElement(u,null,n.map((t=>e(a).createElement(d,{key:t}))))}function d(){return e(a).createElement(p,null,e(a).createElement(x,null,e(a).createElement(f,null,e(a).createElement(o.SkeletonLoader,{width:"90px",height:"16px",marginBottom:"4px",borderRadius:"16px"}),e(a).createElement(o.SkeletonLoader,{width:"64px",height:"16px",borderRadius:"16px"})),e(a).createElement(m,null)))}const u=i.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 24px;
`,p=(0,i.default)(o.SkeletonLoader)`
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
`,m=(0,i.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
  margin-bottom: 8px;
`,x=i.default.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`,f=i.default.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-end;
`})),n.register("aKaH8",(function(r,l){t(r.exports,"CarouselCardCollection",(function(){return d}));var a=n("4y59b"),i=n("3yHS8"),o=n("lDSNw"),s=n("cZIbv"),c=n("ctrIg");const d=({collection:t})=>{const n=(0,o.useMemo)((()=>{const n=new(e(i))(t.floorPrices[0].value,10).dividedBy(new(e(i))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,a.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]);return e(o).createElement(c.CarouselBackgroundImageCard,{src:t.imageUrl},e(o).createElement(u,null,e(o).createElement("div",null,e(o).createElement(p,null,(0,a.truncateString)(t.name,9)),e(o).createElement(m,null,n))))},u=s.default.div`
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
`})),n.register("ctrIg",(function(r,l){t(r.exports,"CarouselBackgroundImageCard",(function(){return c}));var a=n("lDSNw"),i=n("cZIbv"),o=n("c6Gae"),s=n("1GaZ5");const c=({src:t,children:n})=>e(a).createElement(e(a).Fragment,null,e(a).createElement(d,{src:t}),e(a).createElement(u,null,n)),d=(0,i.default)(o.PImage)`
  width: ${s.EXPLORE_CARD_SIZE_PX};
  height: ${s.EXPLORE_CARD_SIZE_PX};
  border-radius: 16px;
`,u=i.default.div`
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
`})),n.register("ifWd7",(function(r,l){t(r.exports,"CarouselCardContainer",(function(){return s}));var a=n("lDSNw"),i=n("cZIbv"),o=n("1GaZ5");function s({children:t,onPress:n}){return e(a).createElement(c,{onClick:n},t,e(a).createElement(d,null))}const c=i.default.div`
  width: ${o.EXPLORE_CARD_SIZE_PX};
  height: ${o.EXPLORE_CARD_SIZE_PX};
  position: relative;
  cursor: pointer;
  overflow: hidden;
`,d=i.default.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`})),n.register("hTknS",(function(r,l){t(r.exports,"default",(function(){return E}));var a=n("belzv"),i=n("54qyi"),o=n("lBuGR"),s=n("lMzyG"),c=n("c1thM"),d=n("lDSNw"),u=n("cZIbv"),p=n("2tQxs"),m=n("aanFI"),x=n("gMNJN"),f=n("a8kcR"),g=n("iacGS");const h="200px";function E({tab:t}){const{data:n,mutate:r}=x.hooks.useExploreSelectedNetwork(),{currentSortOption:l,getSortOptions:a,setSortOption:i}=x.hooks.useExploreSortOption(),o=a(t),s=l(t);return e(d).createElement(k,{"data-testid":`explore-filters-${t}`},e(d).createElement(w,{value:s,options:o,onChange:e=>{(e=>{i(t,e)})(e),g.exploreAnalytics.onExploreFilterChangedByUser({filterType:"sort",filterValue:e,listName:t})}}),e(d).createElement(y,{value:n,onChange:e=>{r(e),g.exploreAnalytics.onExploreFilterChangedByUser({filterType:"network",filterValue:e,listName:t})}}))}const b=({networkLabel:t,NetworkIcon:n})=>{const[r,l]=e(d).useState(!1);return e(d).createElement(S,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1)},e(d).createElement("span",{style:{color:r?f.theme.purple:f.theme.white}},t)," ",e(d).createElement(n,{width:20,height:20,fill:r?f.theme.purple:f.theme.white}))};function y({value:t,onChange:n}){const{t:r}=(0,s.useTranslation)(),{data:[l]}=(0,o.useFeatureFlags)(["enable-bitcoin-explore"]),{data:c}=x.hooks.useSelectedMultiChainAccount(),u=(0,d.useMemo)((()=>{const t=[],o=c?(0,i.getAccountMainnetNetworkIds)(c,l):[];return o.includes(a.SolanaNetworkID.Mainnet)&&t.push({label:e(d).createElement(b,{networkLabel:"Solana",NetworkIcon:m.IconChainSolana}),key:"Solana",onClick:()=>n(a.SolanaNetworkID.Mainnet)}),o.includes(a.EthereumNetworkID.Mainnet)&&t.push({label:e(d).createElement(b,{networkLabel:"Ethereum",NetworkIcon:m.IconChainEthereum}),key:"Ethereum",onClick:()=>n(a.EthereumNetworkID.Mainnet)}),o.includes(a.PolygonNetworkID.Mainnet)&&t.push({label:e(d).createElement(b,{networkLabel:"Polygon",NetworkIcon:m.IconChainPolygon}),key:"Polygon",onClick:()=>n(a.PolygonNetworkID.Mainnet)}),o.includes(a.BitcoinNetworkID.Mainnet)&&l&&t.push({label:e(d).createElement(b,{networkLabel:"Bitcoin",NetworkIcon:m.IconChainBitcoin}),key:"Bitcoin",onClick:()=>n(a.BitcoinNetworkID.Mainnet)}),t.length>1&&t.push({label:e(d).createElement(b,{networkLabel:r("exploreFilterByall_networks"),NetworkIcon:m.IconStackedLayers}),key:"all_networks",onClick:()=>n("all_networks")}),t}),[n,r,l,c]);return u.length>1?e(d).createElement(v,null,e(d).createElement(p.Dropdown,{items:u,dropdownWidth:h,noDropdownItemPadding:!0},e(d).createElement(C,null,e(d).createElement(I,null,(e=>{switch(e){case a.SolanaNetworkID.Mainnet:return"Solana";case a.EthereumNetworkID.Mainnet:return"Ethereum";case a.PolygonNetworkID.Mainnet:return"Polygon";case a.BitcoinNetworkID.Mainnet:return"Bitcoin";case"all_networks":return r("exploreFilterByall_networks");default:return""}})(t)),e(d).createElement(m.IconChevronDown,{width:12,height:12,fill:"#999999"})))):null}function w({options:t,value:n,onChange:r}){const{t:l}=(0,s.useTranslation)(),a=(0,d.useMemo)((()=>t.map((e=>({label:l(`exploreSortBy${e}`),key:e,onClick:()=>{r(e)}})))),[r,t,l]);return e(d).createElement(v,null,e(d).createElement(p.Dropdown,{items:a,dropdownWidth:h},e(d).createElement(C,{"data-testid":"exploreSortBy-button"},e(d).createElement(I,null,l(`exploreSortBy${n}`)),e(d).createElement(m.IconChevronDown,{width:12,height:12,fill:"#999999"}))))}const k=u.default.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 8px 16px 4px 16px;
`,v=u.default.div`
  margin-right: 4px;
`,S=u.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 7px 0;
`,C=(0,u.default)(c.motion.div).attrs({activeOpacity:.6,whileHover:{background:"#3B3C40"},transition:{ease:[.5,1,.89,1],duration:.1},style:{background:"#2a2a2a"}})`
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
`})),n.register("5oT4X",(function(r,l){t(r.exports,"ExploreFiltersSkeleton",(function(){return s}));var a=n("lDSNw"),i=n("cZIbv"),o=n("hjnIF");function s(){return e(a).createElement(c,null,e(a).createElement(d,{width:"99px",height:"26px"}),e(a).createElement(d,{width:"124px",height:"26px"}))}const c=i.default.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px 16px 16px;
`,d=(0,i.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 48px;
  margin-right: 4px;
`})),n.register("706Mc",(function(r,l){t(r.exports,"ExploreListCollections",(function(){return f}));var a=n("lMzyG"),i=n("lDSNw"),o=n("cZIbv"),s=n("gMNJN"),c=n("iacGS"),d=n("fgEo1"),u=n("60clc"),p=n("ekffL"),m=n("7zA4G"),x=n("awIgE");function f(){const{isExploreCollectionsLoading:t}=s.hooks.useIsExploreCollectionsLoading(),{error:n,data:r}=s.hooks.useExploreCollections(),{t:l}=(0,a.useTranslation)();return n&&!r?e(i).createElement(d.ExploreNetworkError,null):e(i).createElement(u.default,{items:r?r.data:[],renderItem:(t,n)=>e(i).createElement(g,{key:`list-collections-${n}`,href:t.marketplacePages[0].collectionUrl},e(i).createElement(m.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==r?void 0:r.uuid)||"",listName:"collections",itemDetails:{position:n,title:t.name,id:t.id}})}},e(i).createElement(p.ListItemCollection,{collection:t,position:n+1}))),listName:"collections",header:e(i).createElement(x.ListHeader,{titles:["#",l("exploreFloor"),l("exploreVolume")]}),isLoading:t})}const g=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("fgEo1",(function(r,l){t(r.exports,"ExploreNetworkError",(function(){return f}));var a=n("lDSNw"),i=n("bjaYq"),o=n("cZIbv"),s=n("aanFI"),c=n("6l2nq"),d=n("kn91D");const u=o.default.div`
  padding: 0 16px;
  margin-bottom: 16px;
`,p=o.default.div`
  padding: 16px;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #2a2a2a;
`,m=(0,o.default)(c.Row).attrs({align:"center",justify:"center"})`
  width: 24px;
  height: 24px;
`,x=(0,o.default)(d.Text).attrs({size:14,weight:400,lineHeight:21,marginLeft:8,color:"#EB3742"})``,f=()=>{const{t:t}=(0,i.useTranslation)();return e(a).createElement(u,{"data-testid":"explore-network-error"},e(a).createElement(p,null,e(a).createElement(m,null,e(a).createElement(s.IconExclamationMarkCircle,{width:18,exclamationFill:"transparent",circleFill:"#EB3742"})),e(a).createElement(x,null,t("exploreNetworkError"))))}})),n.register("60clc",(function(r,l){t(r.exports,"default",(function(){return u}));var a=n("7dqns"),i=n("c1thM"),o=n("lDSNw"),s=n("cZIbv"),c=n("jzIJT"),d=n("h9SiU");function u({items:t,listName:n,renderItem:r,header:l,isLoading:i}){return e(o).createElement(p,{"data-testid":`explore-list-${n}`},l,e(o).createElement(a.AnimatePresence,null,i&&e(o).createElement(x,null,e(o).createElement(d.ListSkeleton,null))),!i&&t.map(((t,l)=>e(o).createElement(m,{key:`list-item-${n}-${l}`,"data-testid":`list-item-${n}-${l}`,whileHover:{background:"#333"},style:{background:"#222"},transition:{ease:[.5,1,.89,1],duration:.1}},e(o).createElement(c.ExploreTile,null,r(t,l))))))}const p=s.default.div`
  flex-direction: column;
  width: 100%;
`,m=(0,s.default)(i.motion.div)`
  flex: 1;
  width: 100%;
  cursor: pointer;
`,x=(0,s.default)(i.motion.div).attrs({initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeInOut"}})``})),n.register("h9SiU",(function(r,l){t(r.exports,"ListSkeleton",(function(){return s}));var a=n("lDSNw"),i=n("cZIbv"),o=n("hjnIF");function s({items:t=10}){const n=(0,a.useMemo)((()=>{const e=[];for(let n=0;n<t;n++)e.push(n);return e}),[t]);return e(a).createElement(d,{"data-testid":"explore-list-skeleton"},n.map(((t,n)=>e(a).createElement(c,{key:t,index:n+1}))))}function c({index:t}){return e(a).createElement(u,null,e(a).createElement(p,null,e(a).createElement(x,null,e(a).createElement(f,null,t)),e(a).createElement(g,null),e(a).createElement("div",null,e(a).createElement(o.SkeletonLoader,{width:"95px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(a).createElement(o.SkeletonLoader,{width:"69px",height:"20px",borderRadius:"16px"}))),e(a).createElement(m,null,e(a).createElement(o.SkeletonLoader,{width:"69px",height:"20px",marginBottom:"4px",borderRadius:"16px"}),e(a).createElement(o.SkeletonLoader,{width:"38px",height:"20px",borderRadius:"16px"})))}const d=i.default.div`
  padding: 0 16px;
  flex-direction: column;
  width: 100%;
`,u=i.default.div`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
  padding: 12px 0;
`,p=i.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,m=i.default.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`,x=i.default.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,f=i.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
`,g=(0,i.default)(o.SkeletonLoader)`
  background: ${e=>e.theme.skeletonLight};
  border-radius: 14px;
  height: 48px;
  width: 48px;
`})),n.register("ekffL",(function(r,l){t(r.exports,"ListItemCollection",(function(){return u}));var a=n("4y59b"),i=n("3yHS8"),o=n("lDSNw"),s=n("cZIbv"),c=n("c6Gae"),d=n("hjnIF");const u=({collection:t,position:n})=>{const r=(0,o.useMemo)((()=>{const n=new(e(i))(t.floorPrices[0].value,10).dividedBy(new(e(i))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,a.formatNumber)(n)} ${t.floorPrices[0].paymentToken.symbol} `}),[t.floorPrices]),l=(0,o.useMemo)((()=>{const n=new(e(i))(t.volume||0,10).dividedBy(new(e(i))(10).pow(t.floorPrices[0].paymentToken.decimals)).toNumber();return`${(0,a.formatNumber)(n,{compact:n>=1e3})} ${t.floorPrices[0].paymentToken.symbol}`}),[t.volume,t.floorPrices]);return e(o).createElement(p,null,e(o).createElement(m,null,e(o).createElement(f,null,e(o).createElement(g,null,n)),e(o).createElement(w,{src:t.imageUrl,width:48,height:48,fallback:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement("div",null,e(o).createElement(h,null,(0,a.truncateString)(t.name,15)),e(o).createElement(E,null,r))),e(o).createElement(x,null,e(o).createElement(b,null,l),e(o).createElement(y,{green:t.volumePercentChange>=0},(0,a.formatNumber)(t.volumePercentChange,{compact:!0,includePlusPrefix:!0}),"%")))},p=s.default.div`
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
`,x=s.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
`,f=s.default.div`
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
`,b=s.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
`,y=s.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
  text-align: right;
`,w=(0,s.default)(c.PImage)`
  border-radius: 14px;
  width: 48px;
  height: 48px;
`})),n.register("7zA4G",(function(r,l){t(r.exports,"ListItemContainer",(function(){return i}));var a=n("lDSNw");function i({children:t,onPress:n}){return e(a).createElement(o,{onClick:n},t)}const o=n("cZIbv").default.div`
  width: 100%;
  padding: 12px 16px;
`})),n.register("awIgE",(function(r,l){t(r.exports,"ListHeader",(function(){return o}));var a=n("lDSNw"),i=n("cZIbv");const o=({titles:t})=>e(a).createElement(s,null,e(a).createElement(c,null,e(a).createElement(p,null,e(a).createElement(u,null,t[0])),e(a).createElement(u,null,t[1])),e(a).createElement(d,null,e(a).createElement(u,null,t[2]))),s=i.default.div`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 4px;
  padding-top: 12px;
`,c=i.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
`,d=i.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  display: flex;
`,u=i.default.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: ${e=>e.theme.grayLight};
`,p=i.default.div`
  width: 74px;
  padding-left: 4px;
`})),n.register("28cqA",(function(r,l){t(r.exports,"ExploreTabSites",(function(){return u}));var a=n("lDSNw"),i=n("gMNJN"),o=n("iBj6N"),s=n("hTknS"),c=n("5oT4X"),d=n("dA6Zr");const u=()=>{const{isExploreSitesLoading:t}=i.hooks.useIsExploreSitesLoading();return e(a).createElement("div",null,e(a).createElement(o.CarouselSites,null),t?e(a).createElement(c.ExploreFiltersSkeleton,null):e(a).createElement(s.default,{tab:"sites"}),e(a).createElement(d.ExploreListSites,null))}})),n.register("iBj6N",(function(r,l){t(r.exports,"CarouselSites",(function(){return m}));var a=n("4y59b"),i=n("lDSNw"),o=n("cZIbv"),s=n("gMNJN"),c=n("iacGS"),d=n("h868b"),u=n("ifWd7"),p=n("i68Tg");function m(){var t;const{isExploreSitesLoading:n}=s.hooks.useIsExploreSitesLoading(),{error:r,data:l}=s.hooks.useExploreRecommendedSites(),o=(0,i.useCallback)(((t,n)=>e(i).createElement(x,{key:`carousel-card-sites-${n}`,href:(0,a.formatSearchURI)(t.url)},e(i).createElement(u.CarouselCardContainer,{onPress:()=>{c.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==l?void 0:l.uuid)||"",carouselName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(i).createElement(p.CarouselCardSite,{site:t})))),[null==l?void 0:l.uuid]);return e(i).createElement(d.default,{name:"sites",items:l?l.data:[],renderCard:o,isLoading:n,isEmpty:!(!r||(null==l?void 0:l.data)&&0!==(null===(t=null==l?void 0:l.data)||void 0===t?void 0:t.length))})}const x=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("i68Tg",(function(r,l){t(r.exports,"CarouselCardSite",(function(){return d}));var a=n("lMzyG"),i=n("lDSNw"),o=n("cZIbv"),s=n("c6Gae"),c=n("ctrIg");const d=({site:t})=>{const{t:n}=(0,a.useTranslation)();return e(i).createElement(c.CarouselBackgroundImageCard,{src:t.backgroundImageUrl},e(i).createElement(u,null,e(i).createElement(x,null,e(i).createElement(p,null,t.name),e(i).createElement(m,null,n(`exploreCategory${t.category.replaceAll(" ","")}`,{defaultValue:t.category}))),e(i).createElement(f,null,e(i).createElement(g,{src:t.imageUrl}))))},u=o.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 12px 8px 12px;
`,p=o.default.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  white-space: nowrap;
  -webkit-mask-image: linear-gradient(91deg, black 85%, transparent);
`,m=o.default.div`
  color: ${e=>e.theme.grayLight};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`,x=o.default.div`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
`,f=o.default.div`
  transform: translateY(-12px);
`,g=(0,o.default)(s.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 14px;
`})),n.register("dA6Zr",(function(r,l){t(r.exports,"ExploreListSites",(function(){return x}));var a=n("4y59b"),i=n("lDSNw"),o=n("cZIbv"),s=n("gMNJN"),c=n("iacGS"),d=n("fgEo1"),u=n("60clc"),p=n("7zA4G"),m=n("7Kfe9");function x(){const{isExploreSitesLoading:t}=s.hooks.useIsExploreSitesLoading(),{error:n,data:r}=s.hooks.useExploreSites();return n&&!r?e(i).createElement(d.ExploreNetworkError,null):e(i).createElement(u.default,{items:r?r.data:[],renderItem:(t,n)=>e(i).createElement(f,{key:`list-sites-${n}`,href:(0,a.formatSearchURI)(t.url)},e(i).createElement(p.ListItemContainer,{onPress:()=>{c.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==r?void 0:r.uuid)||"",listName:"sites",itemDetails:{position:n,title:t.name,id:t.id}})}},e(i).createElement(m.ListItemSite,{site:t,position:n+1}))),listName:"sites",isLoading:t,header:null})}const f=o.default.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  text-decoration: none;
  display: contents;
`})),n.register("7Kfe9",(function(r,l){t(r.exports,"ListItemSite",(function(){return u}));var a=n("lMzyG"),i=n("4y59b"),o=n("lDSNw"),s=n("cZIbv"),c=n("c6Gae"),d=n("hjnIF");const u=({site:t,position:n})=>{const{t:r}=(0,a.useTranslation)();return e(o).createElement(p,null,e(o).createElement(m,null,e(o).createElement(x,null,n)),e(o).createElement(h,{src:t.imageUrl,width:48,height:48,fallback:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"}),loader:e(o).createElement(d.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(o).createElement("div",null,e(o).createElement(f,null,(0,i.truncateString)(t.name,15)),e(o).createElement(g,null,r(`exploreCategory${t.category.replaceAll(" ","")}`,{defaultValue:t.category}))))},p=s.default.div`
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
`,x=s.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,f=s.default.div`
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
`})),n.register("1sMuZ",(function(r,l){t(r.exports,"ExploreTabTokens",(function(){return u}));var a=n("lDSNw"),i=n("gMNJN"),o=n("9yEL6"),s=n("hTknS"),c=n("5oT4X"),d=n("gt4Z2");const u=()=>{const{isExploreTokensLoading:t}=i.hooks.useIsExploreTokensLoading(),{currentSortOption:n}=i.hooks.useExploreSortOption(),r=n("tokens");return e(a).createElement("div",null,e(a).createElement(o.CarouselTokens,null),t?e(a).createElement(c.ExploreFiltersSkeleton,null):e(a).createElement(s.default,{tab:"tokens"}),e(a).createElement(d.ExploreListTokens,{displayType:r}))}})),n.register("9yEL6",(function(r,l){t(r.exports,"CarouselTokens",(function(){return E}));var a=n("belzv"),i=n("54qyi"),o=n("lBuGR"),s=n("gYh0e"),c=n("lDSNw"),d=n("6ha3o"),u=n("gMNJN"),p=n("1pE5P"),m=n("iacGS"),x=n("lKTPx"),f=n("h868b"),g=n("ifWd7"),h=n("j8AfH");function E(){var t;const{data:n}=u.hooks.useExploreSelectedNetwork(),{isExploreTokensLoading:r}=u.hooks.useIsExploreTokensLoading(),{error:l,data:E}=u.hooks.useExploreRecommendedTokens(),b=(0,x.useNavigateToSwapper)(),{data:y}=u.hooks.useSelectedMultiChainAccount(),w=null==y?void 0:y.isReadOnly,{pushDetailView:k}=(0,d.useDetailViews)(),{data:[v,S]}=(0,o.useFeatureFlags)(["enable-public-fungible-detail-page","enable-public-fungible-detail-page-from-explore"]),C=v&&S,I=(0,c.useCallback)(((t,r)=>e(c).createElement(g.CarouselCardContainer,{key:`carousel-card-token-${r}`,onPress:()=>{var l,o;const d=null!==(l=t.tokens.find((e=>e.data.chain.id===n)))&&void 0!==l?l:t.tokens[0];if(C){const t=(0,a.encodeCaip19)((0,s.getFungibleCaip19FromFungible)(d));k(e(c).createElement(p.PublicFungibleDetailPage,{caip19:t,title:null!==(o=d.data.name)&&void 0!==o?o:void 0,entryPoint:"explore"}))}else{if(!(0,i.shouldNavigateToSwapper)(w,t))return;b({buyFungible:d})}m.exploreAnalytics.onExploreCarouselItemClickedByUser({datasourceId:(null==E?void 0:E.uuid)||"",carouselName:"tokens",itemDetails:{position:r,title:t.tokens[0].data.name||t.id,id:t.id||""}})}},e(c).createElement(h.CarouselCardToken,{token:t}))),[C,w,null==E?void 0:E.uuid,n,k,b]);return e(c).createElement(f.default,{name:"tokens",items:E?E.data:[],renderCard:I,isLoading:r,isEmpty:!(!l||(null==E?void 0:E.data)&&0!==(null===(t=null==E?void 0:E.data)||void 0===t?void 0:t.length))})}})),n.register("j8AfH",(function(r,l){t(r.exports,"CarouselCardToken",(function(){return d}));var a=n("4y59b"),i=n("lDSNw"),o=n("cZIbv"),s=n("c6Gae"),c=n("1GaZ5");const d=({token:t})=>{const n=t.tokens[0];return e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(m,null,e(i).createElement(x,null,(0,a.truncateString)(n.data.name||"",12)),e(i).createElement(f,null,n.data.symbol)),e(i).createElement(g,{src:n.data.logoUri||""})),e(i).createElement(h,null,e(i).createElement(E,null,(0,a.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(i).createElement(b,{green:parseFloat(t.priceChangePercentage)>=0},(0,a.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%"}))))},u=o.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${c.EXPLORE_CARD_SIZE_PX};
  width: ${c.EXPLORE_CARD_SIZE_PX};
  padding: 10px 12px;
  background-color: #2c2d30;
  border-radius: 16px;
`,p=o.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`,m=o.default.div`
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`,x=o.default.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,f=o.default.div`
  color: ${e=>e.theme.grayLight};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,g=(0,o.default)(s.PImage)`
  width: 32px;
  height: 32px;
  border-radius: 100px;
`,h=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,E=o.default.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.44px;
`,b=o.default.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
`})),n.register("gt4Z2",(function(r,l){t(r.exports,"ExploreListTokens",(function(){return k}));var a=n("belzv"),i=n("54qyi"),o=n("lBuGR"),s=n("gYh0e"),c=n("lMzyG"),d=n("lDSNw"),u=n("cZIbv"),p=n("6ha3o"),m=n("gMNJN"),x=n("1pE5P"),f=n("iacGS"),g=n("lKTPx"),h=n("fgEo1"),E=n("60clc"),b=n("7zA4G"),y=n("41PSP"),w=n("awIgE");function k({displayType:t}){const{data:n}=m.hooks.useExploreSelectedNetwork(),{isExploreTokensLoading:r}=m.hooks.useIsExploreTokensLoading(),{error:l,data:u}=m.hooks.useExploreTokens(),{t:k}=(0,c.useTranslation)(),{data:S}=m.hooks.useSelectedMultiChainAccount(),C=null==S?void 0:S.isReadOnly,I=(0,g.useNavigateToSwapper)(),{data:[L,T]}=(0,o.useFeatureFlags)(["enable-public-fungible-detail-page","enable-public-fungible-detail-page-from-explore"]),N=L&&T,D=(0,d.useMemo)((()=>{switch(t){case"market_cap":return["#",k("exploreToken"),k("exploreCap")];case"gainers":case"losers":return["#",k("exploreToken"),k("explorePrice")];default:return["#",k("exploreToken"),k("explore24hVolume")]}}),[t,k]),{pushDetailView:P}=(0,p.useDetailViews)();return l&&!u?e(d).createElement(h.ExploreNetworkError,null):e(d).createElement(E.default,{items:u?u.data:[],renderItem:(r,l)=>e(d).createElement(b.ListItemContainer,{key:`list-tokens-${l}`,onPress:()=>{var t,o;const c=null!==(t=r.tokens.find((e=>e.data.chain.id===n)))&&void 0!==t?t:r.tokens[0];if(N){const t=(0,a.encodeCaip19)((0,s.getFungibleCaip19FromFungible)(c));P(e(d).createElement(x.PublicFungibleDetailPage,{caip19:t,title:null!==(o=c.data.name)&&void 0!==o?o:void 0,entryPoint:"explore"}))}else{if(!(0,i.shouldNavigateToSwapper)(C,r))return;I({buyFungible:c})}f.exploreAnalytics.onExploreListItemClickedByUser({datasourceId:(null==u?void 0:u.uuid)||"",listName:"tokens",itemDetails:{position:l,title:c.data.name||r.id,id:r.id}})}},e(d).createElement(v,null,e(d).createElement(y.ListItemToken,{token:r,position:l+1,displayType:t}))),listName:"tokens",isLoading:r,header:e(d).createElement(w.ListHeader,{titles:D})})}const v=u.default.div`
  cursor: pointer;
`})),n.register("41PSP",(function(r,l){t(r.exports,"ListItemToken",(function(){return d}));var a=n("4y59b"),i=n("lDSNw"),o=n("cZIbv"),s=n("c6Gae"),c=n("hjnIF");const d=({token:t,position:n,displayType:r})=>{const l=t.tokens[0],o=(0,i.useMemo)((()=>{switch(r){case"market_cap":return e(i).createElement(e(i).Fragment,null,e(i).createElement(b,null,(0,a.formatDollarAmount)(parseFloat(t.marketCap)||0,{compact:!0})),e(i).createElement(y,{green:parseFloat(t.marketCapChangePercentage)>=0},(0,a.formatNumber)(parseFloat(t.marketCapChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})));case"volume":return e(i).createElement(e(i).Fragment,null,e(i).createElement(b,null,(0,a.formatDollarAmount)(parseFloat(t.volume)||0,{compact:!0})));default:return e(i).createElement(e(i).Fragment,null,e(i).createElement(b,null,(0,a.formatDollarAmount)(parseFloat(t.currentPrice),{minimumAmount:1e-6,decimalFormatSmallNumbers:"0.[000000]",roundDecimals:!0})),e(i).createElement(y,{green:parseFloat(t.priceChangePercentage)>=0},(0,a.formatNumber)(parseFloat(t.priceChangePercentage),{includePlusPrefix:!0,suffix:"%",compact:!0})))}}),[r,t]);return e(i).createElement(u,null,e(i).createElement(p,null,e(i).createElement(f,null,e(i).createElement(g,null,n)),e(i).createElement(w,{src:l.data.logoUri||"",width:48,height:48,fallback:e(i).createElement(v,null,e(i).createElement(k,null,l.data.symbol)),loader:e(i).createElement(c.SkeletonLoader,{borderRadius:"14px",width:"48px",height:"48px"})}),e(i).createElement(m,null,e(i).createElement(h,null,(0,a.truncateString)(l.data.name||"",15)),e(i).createElement(E,null,l.data.symbol))),e(i).createElement(x,null,o))},u=o.default.div`
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  gap: 10px;
  display: flex;
`,p=o.default.div`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  display: flex;
  overflow: hidden;
`,m=o.default.div`
  overflow: hidden;
`,x=o.default.div`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  display: flex;
  flex: 1;
`,f=o.default.div`
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,g=o.default.div`
  font-size: 14px;
  line-height: 18px;
  color: #777777;
  font-weight: 600;
`,h=o.default.div`
  font-size: 17px;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,E=o.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.theme.grayLight};
`,b=o.default.div`
  font-size: 17px;
  line-height: 22px;
`,y=o.default.div`
  font-size: 15px;
  line-height: 20px;
  color: ${e=>e.green?e.theme.green:e.theme.alert};
`,w=(0,o.default)(s.PImage)`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`,k=o.default.div.attrs({numberOfLines:1})`
  color: ${e=>e.theme.white};
  font-size: 12px;
`,v=o.default.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  border-radius: 100px;
  background-color: ${e=>e.theme.buttonGray};
  display: flex;
  align-items: center;
  justify-content: center;
`})),n.register("lAgRD",(function(r,l){t(r.exports,"ExploreTabsTitles",(function(){return u}));var a=n("54qyi"),i=n("lDSNw"),o=n("bjaYq"),s=n("iacGS"),c=n("86rg0"),d=n("YBIrC");const u=()=>{const{activeSectionIdx:t,sections:n}=(0,c.useExploreSections)(),{setActiveSection:r}=(0,a.useExplore)(),{t:l}=(0,o.useTranslation)(),u=(0,i.useMemo)((()=>n.map((e=>{switch(e){case"sites":return l("exploreSites");case"tokens":return l("exploreTokens");case"collections":return l("exploreCollections");case"quests":return l("quests");case"learn":return l("exploreLearn");default:return""}}))),[n,l]);return e(i).createElement(d.default,{values:u,activeTabIndex:t,setActiveTabIndex:e=>{const t=n[e];r(t),s.exploreAnalytics.onExploreTabClickedByUser({tabName:t})}})}})),n.register("YBIrC",(function(r,l){t(r.exports,"default",(function(){return m}));var a=n("bK93X"),i=n("c1thM"),o=n("1bdlq"),s=n("lDSNw"),c=n("cZIbv"),d=n("iacGS");const u=16,p={duration:.3,delay:0,ease:"easeOut"};function m({values:t,activeTabIndex:n,setActiveTabIndex:r}){const l=(0,s.useRef)(null),[i,c]=(0,s.useState)(null),[m,E]=(0,s.useState)(0);(0,s.useEffect)((()=>{l.current&&E(l.current.scrollWidth)}),[t]);const b=(0,o.useMotionValue)(0),y=(0,s.useMemo)((()=>{const e=window.innerWidth-m-u;return Math.min(0,e)}),[m]),w=(0,s.useCallback)(((e,t)=>{const{left:n,right:r}=e.getBoundingClientRect(),l=r>window.innerWidth-u;if(l||n<u){const e=void 0!==t?t:l?y:0;return(0,a.animate)(b,e,p)}}),[b,y]);return e(s).createElement(x,{ref:l},e(s).createElement(f,{drag:"x",style:{x:b},dragConstraints:{left:y,right:0},onDragStart:()=>{c(b.get())},onDragEnd:()=>{c(null),d.exploreAnalytics.onExploreTabTitlesDragged()},onWheel:e=>{if(0===e.deltaX)return;const t=b.get()-e.deltaX;return t>0?b.set(0):t<y?b.set(y):b.set(t)}},t.map(((t,l)=>{const a=n===l;return e(s).createElement(g,{"data-testid":`tab-title-${t}`,key:`tab-title-${l}`,active:n===l},e(s).createElement(h,{onClick:e=>{if(null!==i)return e.stopPropagation(),void e.preventDefault();r(l),w(e.currentTarget)},isActive:a},t))}))))}const x=c.default.div`
  border-bottom: 1px solid ${e=>e.theme.border};
`,f=(0,c.default)(i.motion.div)`
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
`})),n.register("hjWkM",(function(r,l){t(r.exports,"CTABar",(function(){return E}));var a=n("lMzyG"),i=n("jlKgL"),o=n("lDSNw"),s=n("cZIbv"),c=n("2LZGp"),d=n("iyZMg"),u=n("dTI5G");const p=s.default.div`
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
`,x=s.default.div`
  height: 24px;
  overflow: hidden;
`,f=(0,s.default)(m)`
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
`;function E({actions:t,shortcuts:n,hostname:r,headerText:l,maxButtons:s,uiContextName:m,disabled:E=!1}){var b;const{t:y}=(0,a.useTranslation)(),w=t.primary.length+t.more.length+(null!==(b=null==n?void 0:n.length)&&void 0!==b?b:0),k=t.more.length>0,v=Math.min(t.primary.length+(k?1:0),s),{handleShowModalVisibility:S,handleHideModalVisibility:C}=(0,c.useModals)(),I=(0,o.useCallback)(((e,n)=>{d.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:{name:m},position:n,type:e.type,typeSpecificMetadata:e.typeSpecificMetadata,maxButtons:s,primaryActions:t.primary,moreActions:t.more})}),[s,t.more,t.primary,m]);return e(o).createElement(p,{buttonCount:v},t.primary.map((t=>{var n;return e(o).createElement(f,{disabled:E,key:t.type,type:"button",onClick:()=>{I(t,"primary"),t.onClick(t.type)}},e(o).createElement(x,null,e(o).createElement(u.CTAIcon,{color:E?"gray":"accentPrimary",type:t.type})),e(o).createElement(h,null,null!==(n=t.singleWordAltText)&&void 0!==n?n:t.text))})),k?e(o).createElement(g,{disabled:E,type:"button",onClick:()=>{d.fungibleAnalytics.ctaBarTrackMoreButtonClick({uiContext:{name:m},maxButtons:s,totalButtons:w}),S("callToActionSheet",{headerText:l,actions:t,shortcuts:n,hostname:r,onClose:()=>{C("callToActionSheet")},trackAction:e=>{I(e,"more")}})}},e(o).createElement(i.icons.MoreHorizontal,{size:24,color:"accentPrimary"}),e(o).createElement(h,null,y("commandMore"))):null)}})),n.register("iyZMg",(function(e,r){t(e.exports,"fungibleAnalytics",(function(){return i}));var l=n("gYh0e"),a=n("h5kyv");const i=new(0,l.FungibleAnalytics)(a.analytics)})),n.register("1yzIb",(function(e,r){t(e.exports,"WarningCardWithActions",(function(){return f}));var l=n("lDSNw"),a=n("cZIbv"),i=n("e0omL"),o=n("aanFI"),s=n("kn91D");const c=a.default.div`
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
`,x=(0,a.default)(s.Text).attrs({size:14,weight:400,lineHeight:17,textAlign:"left",wordBreak:"break-word"})``,f=({message:e,inverted:t=!1,variant:n="warning",actions:r,Icon:a})=>{let s="#2A2A2A",f="#222222";switch(null!=a||(a="warning"!==n||t?o.IconExclamationMarkOctagon:o.IconExclamationMarkTriangle),n){case"warning":default:s=i.WARNING_COLOR;break;case"danger":s=i.DANGER_COLOR;break;case"error":f=i.ERROR_COLOR}return l.createElement(c,{color:s},l.createElement(d,null,l.createElement(p,null,l.createElement(a,{fill:f,width:18,height:18})),l.createElement(x,{color:f},e)),0===r.length?null:l.createElement(u,{buttonCount:r.length},r.map((e=>l.createElement(m,{key:e.label,onClick:e.onClick,type:"button"},e.label)))))}}));
//# sourceMappingURL=ExplorePage.4e464988.js.map
define=__define;})(window.define);