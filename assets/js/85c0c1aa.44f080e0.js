"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[1608],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),d=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,f=u["".concat(p,".").concat(h)]||u[h]||l[h]||a;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={},s="Data sources",i={unversionedId:"tutorials/data-sources/index",id:"tutorials/data-sources/index",title:"Data sources",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/data-sources/index.md",sourceDirName:"tutorials/data-sources",slug:"/tutorials/data-sources/",permalink:"/hydrogen-v1/tutorials/data-sources/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Remove Tailwind",permalink:"/hydrogen-v1/tutorials/css-support/remove-tailwind"},next:{title:"Configure default entry points",permalink:"/hydrogen-v1/tutorials/data-sources/configure-default-entry-points"}},p={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Shopify data source",id:"shopify-data-source",level:2},{value:"Third-party data sources",id:"third-party-data-sources",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:d},u="wrapper";function l(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-sources"},"Data sources"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,n.kt)("p",null,"Hydrogen contains a set of ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/api/hydrogen"},"Shopify-specific commerce components, hooks, and utilities")," that help accelerate your development process. This guide describes how Hydrogen consumes data from different sources."),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"Hydrogen supports data coming from Shopify and third-parties:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/hydrogen-data-sources.png",alt:"A diagram that shows how Hydrogen consumes data"})),(0,n.kt)("h2",{id:"shopify-data-source"},"Shopify data source"),(0,n.kt)("p",null,"Hydrogen is built and optimized to use data coming from Shopify's ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/api/storefront"},"Storefront API"),". The shape of the data passed to components, hooks, and utilities corresponds and conforms to the structure based on the GraphQL types from the Storefront API."),(0,n.kt)("p",null,"You can pass data from the Storefront API directly into ",(0,n.kt)("a",{parentName:"p",href:"/components/"},"components"),", ",(0,n.kt)("a",{parentName:"p",href:"/hooks/"},"hooks"),", and ",(0,n.kt)("a",{parentName:"p",href:"/utilities/"},"utilities"),"."),(0,n.kt)("p",null,"For example, the ",(0,n.kt)("a",{parentName:"p",href:"/components/product-variant/productoptionsprovider/"},(0,n.kt)("inlineCode",{parentName:"a"},"ProductOptionsProvider"))," component expects product data to have the following structure, which corresponds to the ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/api/storefront/reference/products/product/"},(0,n.kt)("inlineCode",{parentName:"a"},"Product"))," object type returned from the Storefront API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "<string>",\n  "handle": "<string>",\n  "title": "<string>",\n  "description": "<string>",\n  "descriptionHtml": "<string>",\n  ...\n}\n')),(0,n.kt)("h2",{id:"third-party-data-sources"},"Third-party data sources"),(0,n.kt)("p",null,"Hydrogen can also support data from third-party sources. If you want to use Hydrogen components with a third-party data source, then data from the third-party source must first be transformed into the types expected by the Hydrogen components, hooks, and utilities, and then passed on to the components, hooks, and utilities. Learn more about ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/data-sources/work-with-3p-data-sources/"},"working with third-party data sources"),"."),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn how to perform common tasks for ",(0,n.kt)("a",{parentName:"li",href:"/tutorials/data-sources/work-with-3p-data-sources/"},"working with third-party data sources in Hydrogen"),"."),(0,n.kt)("li",{parentName:"ul"},"Get familiar with the ",(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/api/hydrogen"},"Shopify-specific commerce components, hooks, and utilities")," included in Hydrogen."),(0,n.kt)("li",{parentName:"ul"},"Learn about ",(0,n.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/custom-storefronts/hydrogen"},"Hydrogen's architecture and framework"),".")))}l.isMDXComponent=!0}}]);