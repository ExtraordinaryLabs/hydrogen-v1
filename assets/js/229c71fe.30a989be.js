"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[5102],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),l=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(i.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(t),v=n,h=c["".concat(i,".").concat(v)]||c[v]||d[v]||a;return t?o.createElement(h,s(s({ref:r},u),{},{components:t})):o.createElement(h,s({ref:r},u))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=v;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[c]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2823:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=t(7462),n=(t(7294),t(3905));const a={},s="Server props",p={unversionedId:"tutorials/server-props",id:"tutorials/server-props",title:"Server props",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/server-props.md",sourceDirName:"tutorials",slug:"/tutorials/server-props",permalink:"/hydrogen-v1/tutorials/server-props",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Manage SEO",permalink:"/hydrogen-v1/tutorials/seo/manage-seo"},next:{title:"Sessions",permalink:"/hydrogen-v1/tutorials/sessions/"}},i={},l=[{value:"How server props work",id:"how-server-props-work",level:2},{value:"Example",id:"example",level:2},{value:"Related hooks",id:"related-hooks",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:l},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"server-props"},"Server props"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,n.kt)("p",null,"As you build your Hydrogen app with ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/react-server-components/"},"React Server Components"),", you might need to update ",(0,n.kt)("inlineCode",{parentName:"p"},"props")," on the server. Sharing data between the client and server is important for common tasks, such as ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/routing/"},"page routing"),"."),(0,n.kt)("p",null,"This guide describes how to manage server props during your development process."),(0,n.kt)("h2",{id:"how-server-props-work"},"How server props work"),(0,n.kt)("p",null,"Server ",(0,n.kt)("inlineCode",{parentName:"p"},"props")," are props that are passed to your root server component route. Hydrogen provides a ",(0,n.kt)("a",{parentName:"p",href:"/hooks/global/useserverprops/"},(0,n.kt)("inlineCode",{parentName:"a"},"useServerProps"))," hook with a ",(0,n.kt)("inlineCode",{parentName:"p"},"setServerProps")," helper function, which allows you to re-render the server component with new ",(0,n.kt)("inlineCode",{parentName:"p"},"props"),". This is useful to paginate within collections, switch product variants, or do anything that requires new data from the server."),(0,n.kt)("p",null,"For example, you can use geolocation co-ordinates as server props to provide a new hydrated experience for the current location:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// GeoLocate.client.jsx\n\nnavigator.geolocation.getCurrentPosition((data) => {\n  setServerProps('geoCoordinates', data);\n});\n")),(0,n.kt)("p",null,"Whenever you modify the props with ",(0,n.kt)("inlineCode",{parentName:"p"},"setServerProps()"),", Hydrogen automatically makes a hydration request to the server component. Your app tree is updated based on the result of that hydration request."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"The following example shows a page that queries a specific product ID based on server props:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"// MyPage.server.jsx\n\nexport default function MyPage({selectedProductId}) {\n  const {data} = useShopQuery({\n    query: QUERY,\n    variables: {productId: selectedProductId},\n  });\n  const {product} = data;\n\n  return (\n    <>\n      <div>Selected product is {product.title}</div>\n      <ProductSelector selectedProductId={selectedProductId} />\n    </>\n  );\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"// ProductSelector.client.jsx\n\nimport {useServerProps} from '@shopify/hydrogen';\n\nexport default function ProductSelector({selectedProductId}) {\n  const {setServerProps, pending} = useServerProps();\n\n  return (\n    <div>\n      {pending ? <p>Loading...</p> : null}\n      <button\n        onClick={() => {\n          setServerProps('selectedProductId', 123);\n        }}\n      >\n        Select Shoes\n      </button>\n      <button\n        onClick={() => {\n          setServerProps('selectedProductId', 456);\n        }}\n      >\n        Select Dresses\n      </button>\n    </div>\n  );\n}\n")),(0,n.kt)("p",null,"When the user navigates to a new page in your app, the server props will reset. This is important because if the user navigates to another product, then the selected variant of the previous product shouldn't apply to the new product page."),(0,n.kt)("h2",{id:"related-hooks"},"Related hooks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/hooks/global/useserverprops/"},(0,n.kt)("inlineCode",{parentName:"a"},"useServerProps")))),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn about ",(0,n.kt)("a",{parentName:"li",href:"/tutorials/react-server-components/"},"React Server Components"),", an opinionated data-fetching and rendering workflow for React apps."),(0,n.kt)("li",{parentName:"ul"},"Learn how to ",(0,n.kt)("a",{parentName:"li",href:"/tutorials/react-server-components/work-with-rsc/"},"work with React Server Components"),".")))}d.isMDXComponent=!0}}]);