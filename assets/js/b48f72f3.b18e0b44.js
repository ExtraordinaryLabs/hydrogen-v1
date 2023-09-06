"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l="Router",p={unversionedId:"components/framework/router",id:"components/framework/router",title:"Router",description:"The Router component provides the context for routing in your Hydrogen storefront.",source:"@site/docs/components/framework/router.md",sourceDirName:"components/framework",slug:"/components/framework/router",permalink:"/hydrogen-v1/components/framework/router",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Route",permalink:"/hydrogen-v1/components/framework/route"},next:{title:"ShopifyAnalytics",permalink:"/hydrogen-v1/components/framework/shopifyanalytics"}},i={},s=[{value:"Example code",id:"example-code",level:2},{value:"Props",id:"props",level:2},{value:"Component type",id:"component-type",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related framework topics",id:"related-framework-topics",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"router"},"Router"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," component provides the context for routing in your Hydrogen storefront."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.server.jsx"',title:'"App.server.jsx"'},'import {Router, FileRoutes, Route} from \'@shopify/hydrogen\';\nfunction App() {\n  return (\n    <Suspense fallback={<LoadingFallback />}>\n      <ShopifyProvider>\n        <CartProvider>\n          <Router>\n            <FileRoutes basePath="/es/" routes={esRoutes} />\n            <FileRoutes basePath="/en/" routes={enRoutes} />\n            <Route path="*" page={<NotFound />} />\n          </Router>\n        </CartProvider>\n      </ShopifyProvider>\n    </Suspense>\n  );\n}\nfunction NotFound() {\n  return <h1>Not found</h1>;\n}\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"children"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Array&#60;ReactElement&#62; &#124; ReactElement")),(0,o.kt)("td",{parentName:"tr",align:null},"Any React elements.")))),(0,o.kt)("h2",{id:"component-type"},"Component type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," component is a server component that renders inside ",(0,o.kt)("inlineCode",{parentName:"p"},"App.server.jsx"),". For more information about component types, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/react-server-components"},"React Server Components"),"."),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should only have one ",(0,o.kt)("inlineCode",{parentName:"li"},"Router")," component in your app."),(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("a",{parentName:"li",href:"/components/framework/fileroutes/"},(0,o.kt)("inlineCode",{parentName:"a"},"FileRoutes"))," and ",(0,o.kt)("a",{parentName:"li",href:"/components/framework/route/"},(0,o.kt)("inlineCode",{parentName:"a"},"Route"))," components must be children of ",(0,o.kt)("inlineCode",{parentName:"li"},"Router"),".")),(0,o.kt)("h2",{id:"related-components"},"Related components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/fileroutes/"},(0,o.kt)("inlineCode",{parentName:"a"},"FileRoutes"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/framework/route/"},(0,o.kt)("inlineCode",{parentName:"a"},"Route")))),(0,o.kt)("h2",{id:"related-framework-topics"},"Related framework topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/routing"},"Routes"))))}m.isMDXComponent=!0}}]);