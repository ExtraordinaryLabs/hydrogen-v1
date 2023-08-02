"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},l="ShopifyAnalytics",i={unversionedId:"components/framework/shopifyanalytics",id:"components/framework/shopifyanalytics",title:"ShopifyAnalytics",description:"The ShopifyAnalytics component sends commerce-related analytics to Shopify. By adding the ShopifyAnalytics component to your Hydrogen storefront, you can view key sales, orders, and online store visitor data from the Analytics dashboard in your Shopify admin.",source:"@site/docs/components/framework/shopifyanalytics.md",sourceDirName:"components/framework",slug:"/components/framework/shopifyanalytics",permalink:"/hydrogen-v1/components/framework/shopifyanalytics",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Router",permalink:"/hydrogen-v1/components/framework/router"},next:{title:"ShopifyProvider",permalink:"/hydrogen-v1/components/global/shopifyprovider"}},p={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Connecting Hydrogen analytics with Shopify checkout",id:"connecting-hydrogen-analytics-with-shopify-checkout",level:3},{value:"Shopify Analytics data",id:"shopify-analytics-data",level:2},{value:"Product",id:"product",level:4},{value:"Home page",id:"home-page",level:3},{value:"Collection page",id:"collection-page",level:3},{value:"Product page",id:"product-page",level:3},{value:"Search page",id:"search-page",level:3},{value:"Account index page",id:"account-index-page",level:3},{value:"Cart Fragment",id:"cart-fragment",level:3},{value:"<code>ShopifyAnalytics</code> constants",id:"shopifyanalytics-constants",level:3},{value:"Component type",id:"component-type",level:2},{value:"Related framework topics",id:"related-framework-topics",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shopifyanalytics"},"ShopifyAnalytics"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ShopifyAnalytics")," component sends commerce-related analytics to Shopify. By adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShopifyAnalytics")," component to your Hydrogen storefront, you can view key sales, orders, and online store visitor data from the ",(0,r.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/overview-dashboard"},"Analytics dashboard in your Shopify admin"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShopifyAnalytics")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.server.jsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.server.jsx"',title:'"App.server.jsx"'},"function App() {\n  return (\n    <Suspense fallback={<LoadingFallback />}>\n      <ShopifyProvider>\n        ...\n        <ShopifyAnalytics />\n      </ShopifyProvider>\n    </Suspense>\n  );\n}\n")),(0,r.kt)("p",null,"If you have a custom domain or you're using sub-domains, then you can set the cookie domain of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ShopifyAnalytics")," component so that cookies persists for your root domain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.server.jsx"',title:'"App.server.jsx"'},'<ShopifyAnalytics cookieDomain="my-shop.com" />\n')),(0,r.kt)("p",null,"If you're not using custom domains or sub-domains, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShopifyAnalytics")," component uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"storeDomain")," value in the Hydrogen configuration file as the default cookie domain or leaves it blank when the specified cookie domain doesn't match ",(0,r.kt)("inlineCode",{parentName:"p"},"window.location.hostname"),"."),(0,r.kt)("p",null,"If you have customer login, then make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"customerAccessToken")," is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CartProvider>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.server.jsx"',title:'"App.server.jsx"'},"const {customerAccessToken} = useSession();\n\nuseServerAnalytics({\n  shopify: {\n    isLoggedIn: !!customerAccessToken,\n  },\n});\n\nreturn (\n  <Suspense fallback={<HeaderFallback isHome={isHome} />}>\n    ...\n      <CartProvider\n        countryCode={countryCode}\n        customerAccessToken={customerAccessToken}\n      >\n")),(0,r.kt)("h3",{id:"connecting-hydrogen-analytics-with-shopify-checkout"},"Connecting Hydrogen analytics with Shopify checkout"),(0,r.kt)("p",null,"Analytics cookies must be set at the first-party domain. This means that when a buyer navigates from your Hydrogen storefront to Shopify checkout, the domain name must stay the same."),(0,r.kt)("p",null,"You can achieve this by assigning a sub-domain to your online store. For example, you can do the following tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set your Hydrogen store domain to ",(0,r.kt)("inlineCode",{parentName:"li"},"https://www.my-awesome-hydrogen-store.com"),"."),(0,r.kt)("li",{parentName:"ul"},"Attach a new sub-domain to your online store at ",(0,r.kt)("inlineCode",{parentName:"li"},"https://checkout.my-awesome-hydrogen-store.com"),"."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"cookieDomain")," to the same root domain at ",(0,r.kt)("inlineCode",{parentName:"li"},'<ShopifyAnalytics cookieDomain="my-awesome-hydrogen-store.com" />'),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:\nHydrogen analytics and Shopify checkout can only be connected in production. They can't be connected in development and preview modes.")),(0,r.kt)("h2",{id:"shopify-analytics-data"},"Shopify Analytics data"),(0,r.kt)("p",null,"Provide the following data to ",(0,r.kt)("inlineCode",{parentName:"p"},"useServerAnalytics")," to view information from the Analytics dashboard in your Shopify admin:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canonicalPath?"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL path without localization. If you have the URL scheme ",(0,r.kt)("inlineCode",{parentName:"td"},"/page"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"/en-CA/page"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"/en-GB/page")," that represents the same localized pages, then you can tell Shopify how to aggregate these events by setting the canonical path to ",(0,r.kt)("inlineCode",{parentName:"td"},"/page"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageType?"),(0,r.kt)("td",{parentName:"tr",align:null},"The page template type for your routes. For a list of valid values, refer to ",(0,r.kt)("a",{parentName:"td",href:"#shopifyanalytics-constants"},(0,r.kt)("inlineCode",{parentName:"a"},"ShopifyAnalytics")," constants"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceId?"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the page template type for the routes that use Shopify resources. ",(0,r.kt)("br",null),"This only applies to the following routes: ",(0,r.kt)("inlineCode",{parentName:"td"},"article"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"blog"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"collection"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"page"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"product"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collectionHandle?"),(0,r.kt)("td",{parentName:"tr",align:null},"The collection page handle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"products?"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of ",(0,r.kt)("a",{parentName:"td",href:"#product"},"products"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"searchTerm?"),(0,r.kt)("td",{parentName:"tr",align:null},"The search term.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customerId?"),(0,r.kt)("td",{parentName:"tr",align:null},"The customer ID.")))),(0,r.kt)("h4",{id:"product"},"Product"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"product_gid"),(0,r.kt)("td",{parentName:"tr",align:null},"The globally unique Shopify product ID."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gid://shopify/Product/6730943955000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant_gid"),(0,r.kt)("td",{parentName:"tr",align:null},"The globally unique Shopify product variant ID."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gid://shopify/ProductVariant/41007290712120"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"The product title."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"The H2 Snowboard"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"The variant title."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"154cm / Reactive Blue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brand"),(0,r.kt)("td",{parentName:"tr",align:null},"The product vendor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Snowdevil"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null},"The variant price."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"629.95"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category?"),(0,r.kt)("td",{parentName:"tr",align:null},"The product type."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Snowboards"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sku?"),(0,r.kt)("td",{parentName:"tr",align:null},"The variant SKU."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"123"))))),(0,r.kt)("h3",{id:"home-page"},"Home page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/routes/index.server.jsx"',title:'"src/routes/index.server.jsx"'},"export default function Homepage() {\n  useServerAnalytics({\n    shopify: {\n      canonicalPath: '/',\n      pageType: ShopifyAnalyticsConstants.pageType.home,\n    },\n  });\n")),(0,r.kt)("h3",{id:"collection-page"},"Collection page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/routes/collections/[handle].server.jsx"',title:'"src/routes/collections/[handle].server.jsx"'},"export default function Collection() {\n  const {handle} = useRouteParams();\n  ...\n  useServerAnalytics({\n    shopify: {\n      canonicalPath: `/collections/${handle}`,\n      pageType: ShopifyAnalyticsConstants.pageType.collection,\n      resourceId: collection.id,\n      collectionHandle: handle,\n    },\n  });\n")),(0,r.kt)("h3",{id:"product-page"},"Product page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/routes/products/[handle].server.jsx"',title:'"src/routes/products/[handle].server.jsx"'},"export default function Product() {\n  const {handle} = useRouteParams();\n  ...\n  useServerAnalytics({\n    shopify: {\n      canonicalPath: `/products/${handle}`,\n      pageType: ShopifyAnalyticsConstants.pageType.product,\n      resourceId: id,\n      products: [\n        {\n          product_gid: id,\n          variant_gid: variantId,\n          variant: variantTitle,\n          name: title,\n          brand: vendor,\n          category: productType,\n          price: priceV2.amount,\n          sku,\n        },\n      ],\n    },\n  });\n")),(0,r.kt)("h3",{id:"search-page"},"Search page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/routes/search.server.jsx"',title:'"src/routes/search.server.jsx"'},"export default function Search() {\n  ...\n  const {searchParams} = useUrl();\n  const searchTerm = searchParams.get('q');\n  ...\n  useServerAnalytics({\n    shopify: {\n      canonicalPath: '/search',\n      pageType: ShopifyAnalyticsConstants.pageType.search,\n      searchTerm,\n    },\n  });\n")),(0,r.kt)("h3",{id:"account-index-page"},"Account index page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/routes/account/index.server.jsx"',title:'"src/routes/account/index.server.jsx"'},"export default function Account({response}: HydrogenRouteProps) {\n  ...\n  if (!customer) return response.redirect('/account/login');\n\n  // The logged-in analytics state\n  useServerAnalytics({\n    shopify: {\n      customerId: customer.id,\n    },\n  });\n")),(0,r.kt)("h3",{id:"cart-fragment"},"Cart Fragment"),(0,r.kt)("p",null,"If you're overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"CartProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"cartFragment")," prop, then ensure that your new cart fragment contains the following data shape:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gql"},"merchandise {\n  ... on ProductVariant {\n    id\n    priceV2 {\n      ...MoneyFragment\n    }\n    title\n    product {\n      id\n      handle\n      title\n      vendor\n      productType\n    }\n    sku\n  }\n}\n")),(0,r.kt)("h3",{id:"shopifyanalytics-constants"},(0,r.kt)("inlineCode",{parentName:"h3"},"ShopifyAnalytics")," constants"),(0,r.kt)("p",null,"The following table provides a list of valid values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pageType")," property:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"article")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays an article in an online store blog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blog")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays an online store blog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"captcha")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that uses Google's ",(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/recaptcha/docs/v3"},"reCAPTCHA v3")," to help prevent spam through customer, contact, and blog comment forms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cart")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collection")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays a grouping of products.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customersAccount")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that provides details about a customer's account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customersActivateAccount")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that enables a customer to activate their account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customersAddresses")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays a customer's addresses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customersLogin")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that enables a customer to log in to a storefront.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customersOrder")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays a customer's orders.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customersRegister")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that enables a customer to create and register their account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customersResetPassword")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that enables a customer to reset the password that's associated with their account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"giftCard")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays an issued gift card.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"home")),(0,r.kt)("td",{parentName:"tr",align:null},"The homepage of the online store.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"listCollections")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays a list of collections that each contain a grouping of products.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forbidden")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that users can't access due to insufficient permissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notFound")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that no longer exists or is inaccessible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"page")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that holds static HTML content. Each ",(0,r.kt)("inlineCode",{parentName:"td"},"page")," object represents a custom page on the online store.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that's shown when ",(0,r.kt)("a",{parentName:"td",href:"https://help.shopify.com/en/manual/online-store/themes/password-page"},"password protection is applied to the store"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"product")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that represents an individual item for sale in a store.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"policy")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that provides the storefront's policy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"search")),(0,r.kt)("td",{parentName:"tr",align:null},"A page that displays the results of a ",(0,r.kt)("a",{parentName:"td",href:"https://help.shopify.com/en/manual/online-store/storefront-search"},"storefront search"),".")))),(0,r.kt)("h2",{id:"component-type"},"Component type"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ShopifyAnalytics")," component is a server component, which means that it renders on the server. For more information about component types, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/react-server-components"},"React Server Components"),"."),(0,r.kt)("h2",{id:"related-framework-topics"},"Related framework topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/analytics"},"Analytics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/sessions"},"Session management"))))}m.isMDXComponent=!0}}]);