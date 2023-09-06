"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[9586],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(o),k=r,u=c["".concat(l,".").concat(k)]||c[k]||d[k]||a;return o?n.createElement(u,i(i({ref:t},m),{},{components:o})):n.createElement(u,i({ref:t},m))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},1929:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={},i="CookieSessionStorage",s={unversionedId:"components/framework/cookiesessionstorage",id:"components/framework/cookiesessionstorage",title:"CookieSessionStorage",description:"The CookieSessionStorage component is the default session storage mechanism for Hydrogen.",source:"@site/docs/components/framework/cookiesessionstorage.md",sourceDirName:"components/framework",slug:"/components/framework/cookiesessionstorage",permalink:"/hydrogen-v1/components/framework/cookiesessionstorage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Cookie",permalink:"/hydrogen-v1/components/framework/cookie"},next:{title:"FileRoutes",permalink:"/hydrogen-v1/components/framework/fileroutes"}},l={},p=[{value:"Example code",id:"example-code",level:2},{value:"Props",id:"props",level:2},{value:"Component type",id:"component-type",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related hooks",id:"related-hooks",level:2},{value:"Related framework topics",id:"related-framework-topics",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cookiesessionstorage"},"CookieSessionStorage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSessionStorage")," component is the default session storage mechanism for Hydrogen."),(0,r.kt)("h2",{id:"example-code"},"Example code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="hydrogen.config.js"',title:'"hydrogen.config.js"'},"import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';\n\nexport default defineConfig({\n  shopify: {/*...*/},\n  session: CookieSessionStorage('__session', {\n    path: '/',\n    httpOnly: true,\n    secure: process.env.NODE_ENV === 'production',\n    sameSite: 'strict',\n    maxAge: 60 * 60 * 24 * 30,\n  }),\n});\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookieName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the cookie stored in the browser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookieOptions?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CookieOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional object to configure ",(0,r.kt)("a",{parentName:"td",href:"/hydrogen-v1/components/framework/cookie#cookie-options"},"how the cookie is persisted in the browser"),".")))),(0,r.kt)("h2",{id:"component-type"},"Component type"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSessionStorage")," component is a server component that renders inside ",(0,r.kt)("inlineCode",{parentName:"p"},"App.server.jsx"),". For more information about component types, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/react-server-components"},"React Server Components"),"."),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"Don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"CookieSessionStorage")," if you expect to have more than 4kb of data within sessions."),(0,r.kt)("h2",{id:"related-components"},"Related components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/components/framework/cookie/"},(0,r.kt)("inlineCode",{parentName:"a"},"Cookie"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/components/framework/memorysessionstorage/"},(0,r.kt)("inlineCode",{parentName:"a"},"MemorySessionStorage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/components/framework/filesessionstorage/"},(0,r.kt)("inlineCode",{parentName:"a"},"FileSessionStorage")))),(0,r.kt)("h2",{id:"related-hooks"},"Related hooks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/hooks/framework/usesession/"},(0,r.kt)("inlineCode",{parentName:"a"},"useSession")))),(0,r.kt)("h2",{id:"related-framework-topics"},"Related framework topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/sessions"},"Session management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/configuration"},"Hydrogen configuration"))))}d.isMDXComponent=!0}}]);