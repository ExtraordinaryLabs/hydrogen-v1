"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[8592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="flattenConnection",l={unversionedId:"utilities/flattenconnection",id:"utilities/flattenconnection",title:"flattenConnection",description:"The flattenConnection utility transforms a connection object from the Storefront API (for example, Product-related connections) into a flat array of nodes. The utility works with either nodes or edges.node.",source:"@site/docs/utilities/flattenconnection.md",sourceDirName:"utilities",slug:"/utilities/flattenconnection",permalink:"/hydrogen-v1/utilities/flattenconnection",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"useProductOptions",permalink:"/hydrogen-v1/hooks/product-variant/useproductoptions"},next:{title:"gql",permalink:"/hydrogen-v1/utilities/gql"}},d={},c=[{value:"Example code",id:"example-code",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Return type",id:"return-type",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related hooks",id:"related-hooks",level:2}],p={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flattenconnection"},"flattenConnection"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"flattenConnection")," utility transforms a connection object from the Storefront API (for example, ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/api/storefront/reference/products/product"},"Product-related connections"),") into a flat array of nodes. The utility works with either ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"edges.node"),"."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  flattenConnection,\n  MediaFile,\n  useShopQuery,\n  MediaFile,\n  gql,\n} from '@shopify/hydrogen';\n\nconst QUERY = gql`\n  query product($handle: String!) {\n    product: productByHandle(handle: $handle) {\n      media(first: 10) {\n        edges {\n          node {\n            ... on MediaImage {\n              mediaContentType\n              image {\n                id\n                url\n                altText\n                width\n                height\n              }\n            }\n            ... on Video {\n              mediaContentType\n              id\n              previewImage {\n                url\n              }\n              sources {\n                mimeType\n                url\n              }\n            }\n            ... on ExternalVideo {\n              mediaContentType\n              id\n              embedUrl\n              host\n            }\n            ... on Model3d {\n              mediaContentType\n              id\n              alt\n              mediaContentType\n              previewImage {\n                url\n              }\n              sources {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\nexport function Product({handle}) {\n  const {data} = useShopQuery({query: QUERY, variables: {handle}});\n  const media = flattenConnection(data.product.media);\n  return (\n    <>\n      {media.map((mediaFile) => {\n        return <MediaFile data={mediaFile} key={mediaFile.id} />;\n      })}\n    </>\n  );\n}\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A connection object with the field ",(0,o.kt)("inlineCode",{parentName:"td"},"nodes")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"edges"),". For example, any of the ",(0,o.kt)("a",{parentName:"td",href:"https://shopify.dev/docs/api/storefront/reference/products/product"},"Product connections"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("h2",{id:"return-type"},"Return type"),(0,o.kt)("p",null,"A flat array that contains elements that correspond to the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," value in each element of the original ",(0,o.kt)("inlineCode",{parentName:"p"},"edges")," array, or the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," itself."),(0,o.kt)("h2",{id:"related-components"},"Related components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/product-variant/productoptionsprovider/"},"ProductOptionsProvider"))),(0,o.kt)("h2",{id:"related-hooks"},"Related hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/hooks/product-variant/useproductoptions/"},"useProductOptions"))))}s.isMDXComponent=!0}}]);