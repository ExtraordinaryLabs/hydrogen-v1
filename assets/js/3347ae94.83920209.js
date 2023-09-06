"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[7227],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[c]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},i="Build a product page",d={unversionedId:"tutorials/getting-started/tutorial/products",id:"tutorials/getting-started/tutorial/products",title:"Build a product page",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/getting-started/tutorial/products.md",sourceDirName:"tutorials/getting-started/tutorial",slug:"/tutorials/getting-started/tutorial/products",permalink:"/hydrogen-v1/tutorials/getting-started/tutorial/products",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Fetch storefront data",permalink:"/hydrogen-v1/tutorials/getting-started/tutorial/fetch-data"},next:{title:"Analytics",permalink:"/hydrogen-v1/tutorials/analytics/"}},s={},l=[{value:"Scenario",id:"scenario",level:2},{value:"What you\u2019ll learn",id:"what-youll-learn",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Sample code",id:"sample-code",level:2},{value:"Step 1: Create a products route",id:"step-1-create-a-products-route",level:2},{value:"Step 2: Query a product by handle",id:"step-2-query-a-product-by-handle",level:2},{value:"Step 3: Query product and variant details",id:"step-3-query-product-and-variant-details",level:2},{value:"Step 4: Add a product gallery",id:"step-4-add-a-product-gallery",level:2},{value:"Step 5: Create a product form",id:"step-5-create-a-product-form",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-a-product-page"},"Build a product page"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,r.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,r.kt)("p",null,"Previously, you ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/getting-started/tutorial/collections/"},"built a collection page"),". Your Hydrogen storefront sorts products within your collections, using ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/server-props/"},"server props")," and ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/routing/"},"file-based routing"),". Now that you have a collections page that renders your products, you\u2019re ready to build a product page."),(0,r.kt)("p",null,"In this tutorial, you'll build a page that shows detailed product information."),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"You want to display detailed information about products on your custom storefront. The details that you provide for a product will affect the way that the product is displayed to customers, make it easier for you to organize your products, and make it easier for customers find the product."),(0,r.kt)("p",null,"By creating a product page, you can share information about a product with customers, including the product\u2019s variants, description, and price. You\u2019ll also be able to offer customers a way to purchase the product."),(0,r.kt)("h2",{id:"what-youll-learn"},"What you\u2019ll learn"),(0,r.kt)("p",null,"In this tutorial, you\u2019ll learn how to do the following tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a products route."),(0,r.kt)("li",{parentName:"ul"},"Query products by their handle."),(0,r.kt)("li",{parentName:"ul"},"Generate SEO tags for product pages."),(0,r.kt)("li",{parentName:"ul"},"Implement Shopify Analytics on product pages."),(0,r.kt)("li",{parentName:"ul"},"Fetch the variants associated with a product."),(0,r.kt)("li",{parentName:"ul"},"Add a product gallery."),(0,r.kt)("li",{parentName:"ul"},"Create a variant selector for a product."),(0,r.kt)("li",{parentName:"ul"},"Add a ",(0,r.kt)("strong",{parentName:"li"},"Buy Now")," button to the product page.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/product-variants-purchase-button.png",alt:"The details for a product and its variants, and a button to purchase the product"})),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You\u2019ve completed the ",(0,r.kt)("a",{parentName:"li",href:"/tutorials/getting-started/tutorial/collections/"},"build a collection page")," tutorial.")),(0,r.kt)("h2",{id:"sample-code"},"Sample code"),(0,r.kt)("p",null,"If you want to quickly get started, then you can copy and paste the following code from each file into the corresponding files in your Hydrogen app. If the file doesn\u2019t yet exist, then you can create it in your Hydrogen app. This tutorial describes the sample code step by step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// /src/routes/products/[handle].server.jsx\n\nimport {\n  gql,\n  useShopQuery,\n  useServerAnalytics,\n  useRouteParams,\n  ShopifyAnalyticsConstants,\n  Seo,\n} from "@shopify/hydrogen";\nimport { Suspense } from "react";\n\nimport { Layout } from "../../components/Layout.server";\nimport ProductDetails from "../../components/ProductDetails.client";\n\nexport default function Product({ params }) {\n  const { handle } = useRouteParams();\n\n  const {\n    data: { product },\n  } = useShopQuery({\n    query: PRODUCT_QUERY,\n    variables: {\n      handle,\n    },\n  });\n\n  useServerAnalytics({\n    shopify: {\n      pageType: ShopifyAnalyticsConstants.pageType.product,\n      resourceId: product.id,\n    },\n  });\n\n  return (\n    <Layout>\n      <Suspense>\n        <Seo type="product" data={product} />\n      </Suspense>\n      <ProductDetails product={product} />\n    </Layout>\n  );\n}\n\nconst PRODUCT_QUERY = gql`\n  fragment MediaFields on Media {\n    mediaContentType\n    alt\n    previewImage {\n      url\n    }\n    ... on MediaImage {\n      id\n      image {\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      id\n      sources {\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      id\n      sources {\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      id\n      embedUrl\n      host\n    }\n  }\n  query Product($handle: String!) {\n    product(handle: $handle) {\n      id\n      title\n      vendor\n      descriptionHtml\n      media(first: 7) {\n        nodes {\n          ...MediaFields\n        }\n      }\n      variants(first: 100) {\n        nodes {\n          id\n          availableForSale\n          compareAtPriceV2 {\n            amount\n            currencyCode\n          }\n          selectedOptions {\n            name\n            value\n          }\n          image {\n            id\n            url\n            altText\n            width\n            height\n          }\n          priceV2 {\n            amount\n            currencyCode\n          }\n          sku\n          title\n          unitPrice {\n            amount\n            currencyCode\n          }\n        }\n      }\n      seo {\n        description\n        title\n      }\n    }\n  }\n`;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript?filename:",metastring:"'/src/components/ProductDetails.client.jsx', title: 'ProductDetails'","'/src/components/ProductDetails.client.jsx',":!0,"title:":!0,"'ProductDetails'":!0},'import {\n  ProductOptionsProvider,\n  MediaFile,\n  useProductOptions,\n  ProductPrice,\n  BuyNowButton,\n} from "@shopify/hydrogen";\n\nexport default function ProductDetails({ product }) {\n  return (\n    <ProductOptionsProvider data={product}>\n      <section className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">\n        <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">\n          <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 md:w-full lg:col-span-2">\n            <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">\n              <ProductGallery media={product.media.nodes} />\n            </div>\n          </div>\n          <div className="sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">\n            <div className="grid gap-2">\n              <h1 className="text-4xl font-bold leading-10 whitespace-normal">\n                {product.title}\n              </h1>\n              <span className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">\n                {product.vendor}\n              </span>\n            </div>\n            <ProductForm product={product} />\n            <div className="mt-8">\n              <div\n                className="prose border-t border-gray-200 pt-6 text-black text-md"\n                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}\n              ></div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </ProductOptionsProvider>\n  );\n}\n\nfunction ProductForm({ product }) {\n  const { options, selectedVariant } = useProductOptions();\n\n  const isOutOfStock = !selectedVariant?.availableForSale || false;\n  return (\n    <form className="grid gap-10">\n      {\n        <div className="grid gap-4">\n          {options.map(({ name, values }) => {\n            if (values.length === 1) {\n              return null;\n            }\n            return (\n              <div\n                key={name}\n                className="flex flex-wrap items-baseline justify-start gap-6"\n              >\n                <legend className="whitespace-pre-wrap max-w-prose font-bold text-lead min-w-[4rem]">\n                  {name}\n                </legend>\n                <div className="flex flex-wrap items-baseline gap-4">\n                  <OptionRadio name={name} values={values} />\n                </div>\n              </div>\n            );\n          })}\n        </div>\n      }\n      <div>\n        <ProductPrice\n          className="text-gray-500 line-through text-lg font-semibold"\n          priceType="compareAt"\n          variantId={selectedVariant.id}\n          data={product}\n        />\n        <ProductPrice\n          className="text-gray-900 text-lg font-semibold"\n          variantId={selectedVariant.id}\n          data={product}\n        />\n      </div>\n      <div className="grid items-stretch gap-4">\n        {isOutOfStock ? (\n          <span className="text-black text-center py-3 px-6 border rounded-sm leading-none ">\n            Available in 2-3 weeks\n          </span>\n        ) : (\n          <BuyNowButton variantId={selectedVariant.id}>\n            <span className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full border">\n              Buy it now\n            </span>\n          </BuyNowButton>\n        )}\n      </div>\n    </form>\n  );\n}\n\nfunction OptionRadio({ values, name }) {\n  const { selectedOptions, setSelectedOption } = useProductOptions();\n\n  return (\n    <>\n      {values.map((value) => {\n        const checked = selectedOptions[name] === value;\n        const id = `option-${name}-${value}`;\n\n        return (\n          <label key={id} htmlFor={id}>\n            <input\n              className="sr-only"\n              type="radio"\n              id={id}\n              name={`option[${name}]`}\n              value={value}\n              checked={checked}\n              onChange={() => setSelectedOption(name, value)}\n            />\n            <div\n              className={`leading-none border-b-[2px] py-1 cursor-pointer transition-all duration-200 ${\n                checked ? "border-gray-500" : "border-neutral-50"\n              }`}\n            >\n              {value}\n            </div>\n          </label>\n        );\n      })}\n    </>\n  );\n}\n\nfunction ProductGallery({ media }) {\n  if (!media.length) {\n    return null;\n  }\n\n  return (\n    <div\n      className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-screen md:w-full lg:col-span-2`}\n    >\n      {media.map((med, i) => {\n        let extraProps = {};\n\n        if (med.mediaContentType === "MODEL_3D") {\n          extraProps = {\n            interactionPromptThreshold: "0",\n            ar: true,\n            loading: "eager",\n            disableZoom: true,\n          };\n        }\n\n        const data = {\n          ...med,\n          image: {\n            ...med.image,\n            altText: med.alt || "Product image",\n          },\n        };\n\n        return (\n          <div\n            className={`${\n              i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"\n            } snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`}\n            key={med.id || med.image.id}\n          >\n            <MediaFile\n              tabIndex="0"\n              className={`w-full h-full aspect-square object-cover`}\n              data={data}\n              options={{\n                crop: "center",\n              }}\n              {...extraProps}\n            />\n          </div>\n        );\n      })}\n    </div>\n  );\n}\n')),(0,r.kt)("h2",{id:"step-1-create-a-products-route"},"Step 1: Create a products route"),(0,r.kt)("p",null,"You can create a products route similar to how you previously created ",(0,r.kt)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/getting-started/tutorial/collections#step-1-create-a-collections-route"},"a collections route"),"."),(0,r.kt)("p",null,"To begin building your product page, create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/routes/products/[handle].server.jsx")," that registers a new products route. Then, display the dynamic handle on the page within a layout component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// /src/routes/products/[handle].server.jsx\n\nimport {\n  useRouteParams,\n} from "@shopify/hydrogen";\n\nimport { Layout } from "../../components/Layout.server";\n\nexport default function Product() {\n  const { handle } = useRouteParams();\n\n  return (\n    <Layout>\n      <section className="p-6 md:p-8 lg:p-12">\n        This will be the product page for <strong>{handle}</strong>\n      </section>\n    </Layout>\n  );\n}\n')),(0,r.kt)("p",null,"The products route is registered. Clicking a product takes you to a dynamic product page:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/dynamic-product-page.png",alt:"A dynamic product page"})),(0,r.kt)("h2",{id:"step-2-query-a-product-by-handle"},"Step 2: Query a product by handle"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/getting-started/tutorial/collections#step-2-query-a-collection-by-handle"},"querying a collection by its handle"),", you can use a product\u2019s handle to query a product."),(0,r.kt)("p",null,"If a handle isn't specified when a product is created, then the handle is generated from the product's original title, replacing any spaces with hyphens. For example, a product that was created with the title ",(0,r.kt)("strong",{parentName:"p"},"The Full Stack")," might have the handle ",(0,r.kt)("strong",{parentName:"p"},"the-full-stack"),"."),(0,r.kt)("p",null,"At the bottom of your ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/routes/products/[handle].server.jsx")," file, add a GraphQL query that retrieves a product by its handle. You'll also set up an ",(0,r.kt)("inlineCode",{parentName:"p"},"Seo")," component and implement Shopify Analytics, ","[similar to how you did this for collection pages]","(/hydrogen-v1/tutorials/getting-started/tutorial/collections#step-3-generate-seo-tags-and implement-shopify-analytics)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// /src/routes/products/[handle].server.jsx\n\nimport {\n  gql,\n  useShopQuery,\n  useServerAnalytics,\n  useRouteParams,\n  ShopifyAnalyticsConstants,\n  Seo,\n} from "@shopify/hydrogen";\nimport { Suspense } from "react";\n\nimport { Layout } from "../../components/Layout.server";\n\nexport default function Product({ params }) {\n  const { handle } = useRouteParams();\n\n  const {\n    data: { product },\n  } = useShopQuery({\n    query: PRODUCT_QUERY,\n    variables: {\n      handle,\n    },\n  });\n\n  useServerAnalytics({\n    shopify: {\n      pageType: ShopifyAnalyticsConstants.pageType.product,\n      resourceId: product.id,\n    },\n  });\n  // Implement an `Seo` component for the product. By specifying "type=product"\n  // you\'re overriding the `defaultSeo` type in the Layout component.\n  return (\n    <Layout>\n      <Suspense>\n        <Seo type="product" data={product} />\n      </Suspense>\n      <section className="p-6 md:p-8 lg:p-12">\n        This will be the product page for <strong>{product.title}</strong>\n      </section>\n    </Layout>\n  );\n}\n\n// Add a Graphql query that retrieves a product by its handle.\nconst PRODUCT_QUERY = gql`\n  query Product($language: LanguageCode, $handle: String!)\n  @inContext(language: $language) {\n    product(handle: $handle) {\n      id\n      title\n      seo {\n        title\n        description\n      }\n    }\n  }\n`;\n')),(0,r.kt)("p",null,"The product page renders the following dynamic content:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/dynamic-content-product-page.png",alt:"Dynamic content on the product page"})),(0,r.kt)("h2",{id:"step-3-query-product-and-variant-details"},"Step 3: Query product and variant details"),(0,r.kt)("p",null,"In this step, you'll create your first ",(0,r.kt)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/react-server-components/#component-types"},"client component")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductDetails"),". Client components render on the client, enabling a client-side state. Client components end in ",(0,r.kt)("inlineCode",{parentName:"p"},".client.jsx"),"."),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"/hydrogen-v1/tutorials/getting-started/tutorial/collections#step-4-query-products-and-variants"},"querying all products and variants that belong to a collection"),", you can set up a GraphQL query to retrieve detailed information about products and variants."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tip:\nIn the following code sample, you\u2019ll notice a reference to a ",(0,r.kt)("a",{parentName:"p",href:"/components/product-variant/productoptionsprovider/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductOptionsProvider"))," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductOptionsProvider")," component sets up a context with state that tracks the selected variant and options. Descendents of this component can use the ",(0,r.kt)("a",{parentName:"p",href:"/hooks/product-variant/useproductoptions/"},(0,r.kt)("inlineCode",{parentName:"a"},"useProductOptions"))," hook.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductDetails")," component to display product information, such as the description, title, and image of the product:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// /src/components/ProductDetails.client.jsx\n\nimport { ProductOptionsProvider } from "@shopify/hydrogen";\n\nexport default function ProductDetails({ product }) {\n  return (\n    <ProductOptionsProvider data={product}>\n      <section className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">\n        <div className="grid gap-2 mt-10">\n          <h1 className="text-4xl font-bold leading-10 whitespace-normal">\n            {product.title}\n          </h1>\n          <span className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">\n            {product.vendor}\n          </span>\n        </div>\n        <div className="mt-8">\n          <div\n            className="prose border-t border-gray-200 pt-6 text-black text-md"\n            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}\n          ></div>\n        </div>\n      </section>\n    </ProductOptionsProvider>\n  );\n}\n')))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/routes/products/[handle].server.jsx"),", update the GraphQL query to retrieve details about the product and its associated variants and pass the data through to the new ",(0,r.kt)("strong",{parentName:"p"},"ProductDetails")," component:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// /src/routes/products/[handle].server.jsx\nimport {\n  gql,\n  useShopQuery,\n  useServerAnalytics,\n  useRouteParams,\n  ShopifyAnalyticsConstants,\n  Seo,\n} from "@shopify/hydrogen";\nimport { Suspense } from "react";\n\nimport { Layout } from "../../components/Layout.server";\nimport ProductDetails from "../../components/ProductDetails.client";\n\nexport default function Product({ params }) {\n  const { handle } = useRouteParams();\n\n  const {\n    data: { product },\n  } = useShopQuery({\n    query: PRODUCT_QUERY,\n    variables: {\n      handle,\n    },\n  });\n\n  useServerAnalytics({\n    shopify: {\n      pageType: ShopifyAnalyticsConstants.pageType.product,\n      resourceId: product.id,\n    },\n  });\n\n  return (\n    <Layout>\n      <Suspense>\n        <Seo type="product" data={product} />\n      </Suspense>\n      <ProductDetails product={product} />\n    </Layout>\n  );\n}\n\n// Retrieve product media in preparation for the next step in the tutorial:\n// Step 4: Add a product gallery\nconst PRODUCT_QUERY = gql`\n  fragment MediaFields on Media {\n    mediaContentType\n    alt\n    previewImage {\n      url\n    }\n    ... on MediaImage {\n      id\n      image {\n        url\n        width\n        height\n      }\n    }\n    ... on Video {\n      id\n      sources {\n        mimeType\n        url\n      }\n    }\n    ... on Model3d {\n      id\n      sources {\n        mimeType\n        url\n      }\n    }\n    ... on ExternalVideo {\n      id\n      embedUrl\n      host\n    }\n  }\n  query Product($handle: String!) {\n    product(handle: $handle) {\n      id\n      title\n      vendor\n      descriptionHtml\n      media(first: 7) {\n        nodes {\n          ...MediaFields\n        }\n      }\n      variants(first: 100) {\n        nodes {\n          id\n          availableForSale\n          compareAtPriceV2 {\n            amount\n            currencyCode\n          }\n          selectedOptions {\n            name\n            value\n          }\n          image {\n            id\n            url\n            altText\n            width\n            height\n          }\n          priceV2 {\n            amount\n            currencyCode\n          }\n          sku\n          title\n          unitPrice {\n            amount\n            currencyCode\n          }\n        }\n      }\n      seo {\n        description\n        title\n      }\n    }\n  }\n`;\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The page renders details about the product in a basic layout:\n\n![Details about the product in a basic layout](https://shopify.dev/assets/custom-storefronts/hydrogen/product-details-basic-layout.png)\n")),(0,r.kt)("h2",{id:"step-4-add-a-product-gallery"},"Step 4: Add a product gallery"),(0,r.kt)("p",null,"In this step, you'll use a ",(0,r.kt)("a",{parentName:"p",href:"/components/primitive/mediafile/"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaFile"))," component to render media for your product pages. The ",(0,r.kt)("inlineCode",{parentName:"p"},"MediaFile")," component renders an ",(0,r.kt)("inlineCode",{parentName:"p"},"Image"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"Video"),", an ",(0,r.kt)("inlineCode",{parentName:"p"},"ExternalVideo"),", or a ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelViewer")," depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"mediaContentType")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"media")," provided as a prop. The ",(0,r.kt)("inlineCode",{parentName:"p"},"MediaFile")," component is also compatible with 3D models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// /src/components/ProductDetails.client.jsx\n\nimport { ProductOptionsProvider, MediaFile } from "@shopify/hydrogen";\n\nexport default function ProductDetails({ product }) {\n  return (\n    <ProductOptionsProvider data={product}>\n      <section className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">\n        <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">\n          <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 md:w-full lg:col-span-2">\n            <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">\n              <ProductGallery media={product.media.nodes} />\n            </div>\n          </div>\n          <div className="sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">\n            <div className="grid gap-2">\n              <h1 className="text-4xl font-bold leading-10 whitespace-normal">\n                {product.title}\n              </h1>\n              <span className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">\n                {product.vendor}\n              </span>\n            </div>\n            <div className="mt-8">\n              <div\n                className="prose border-t border-gray-200 pt-6 text-black text-md"\n                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}\n              ></div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </ProductOptionsProvider>\n  );\n}\n\nfunction ProductGallery({ media }) {\n  if (!media.length) {\n    return null;\n  }\n\n  return (\n    <div\n      className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-screen md:w-full lg:col-span-2`}\n    >\n      {media.map((med, i) => {\n        let extraProps = {};\n\n        if (med.mediaContentType === "MODEL_3D") {\n          extraProps = {\n            interactionPromptThreshold: "0",\n            ar: true,\n            loading: "eager",\n            disableZoom: true,\n          };\n        }\n\n        const data = {\n          ...med,\n          image: {\n            ...med.image,\n            altText: med.alt || "Product image",\n          },\n        };\n\n        return (\n          <div\n            className={`${\n              i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"\n            } snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`}\n            key={med.id || med.image.id}\n          >\n            <MediaFile\n              tabIndex="0"\n              className={`w-full h-full aspect-square object-cover`}\n              data={data}\n              options={{\n                crop: "center",\n              }}\n              {...extraProps}\n            />\n          </div>\n        );\n      })}\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"The page now renders an image next to the details about the product:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/image-with-product-details.png",alt:"An image next to the details about the product"})),(0,r.kt)("h2",{id:"step-5-create-a-product-form"},"Step 5: Create a product form"),(0,r.kt)("p",null,"Next, you'll create a product form that includes a variant selector, product price, and buy button:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The variant selector will use the ",(0,r.kt)("a",{parentName:"li",href:"/hooks/product-variant/useproductoptions/"},(0,r.kt)("inlineCode",{parentName:"a"},"useProductOptions"))," hook to retrieve selected options."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/components/product-variant/productprice/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductPrice"))," component will render a ",(0,r.kt)("a",{parentName:"li",href:"/components/primitive/money/"},(0,r.kt)("inlineCode",{parentName:"a"},"Money"))," component with the product ",(0,r.kt)("a",{parentName:"li",href:"https://shopify.dev/api/storefront/latest/objects/productpricerange/"},(0,r.kt)("inlineCode",{parentName:"a"},"priceRange")),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"maxVariantPrice")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"minVariantPrice"),", for either the regular price or compare at price range."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/components/cart/buynowbutton/"},(0,r.kt)("inlineCode",{parentName:"a"},"BuyNowButton"))," component will render a button that adds an item to the cart and redirects the custom to checkout.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tip:\nConsider styling the buy button to be unique and prominent so that it\u2019s easy for customers to make purchases.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// /src/components/ProductDetails.client.jsx\n\nimport {\n  ProductOptionsProvider,\n  MediaFile,\n  useProductOptions,\n  ProductPrice,\n  BuyNowButton,\n} from "@shopify/hydrogen";\n\nexport default function ProductDetails({ product }) {\n  return (\n    <ProductOptionsProvider data={product}>\n      <section className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">\n        <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">\n          <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 md:w-full lg:col-span-2">\n            <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">\n              <ProductGallery media={product.media.nodes} />\n            </div>\n          </div>\n          <div className="sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">\n            <div className="grid gap-2">\n              <h1 className="text-4xl font-bold leading-10 whitespace-normal">\n                {product.title}\n              </h1>\n              <span className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">\n                {product.vendor}\n              </span>\n            </div>\n            <ProductForm product={product} />\n            <div className="mt-8">\n              <div\n                className="prose border-t border-gray-200 pt-6 text-black text-md"\n                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}\n              ></div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </ProductOptionsProvider>\n  );\n}\n\nfunction ProductForm({ product }) {\n  const { options, selectedVariant } = useProductOptions();\n\n  const isOutOfStock = !selectedVariant?.availableForSale || false;\n  return (\n    <form className="grid gap-10">\n      {\n        <div className="grid gap-4">\n          {options.map(({ name, values }) => {\n            if (values.length === 1) {\n              return null;\n            }\n            return (\n              <div\n                key={name}\n                className="flex flex-wrap items-baseline justify-start gap-6"\n              >\n                <legend className="whitespace-pre-wrap max-w-prose font-bold text-lead min-w-[4rem]">\n                  {name}\n                </legend>\n                <div className="flex flex-wrap items-baseline gap-4">\n                  <OptionRadio name={name} values={values} />\n                </div>\n              </div>\n            );\n          })}\n        </div>\n      }\n      <div>\n        <ProductPrice\n          className="text-gray-500 line-through text-lg font-semibold"\n          priceType="compareAt"\n          variantId={selectedVariant.id}\n          data={product}\n        />\n        <ProductPrice\n          className="text-gray-900 text-lg font-semibold"\n          variantId={selectedVariant.id}\n          data={product}\n        />\n      </div>\n      <div className="grid items-stretch gap-4">\n        {isOutOfStock ? (\n          <span className="text-black text-center py-3 px-6 border rounded-sm leading-none ">\n            Available in 2-3 weeks\n          </span>\n        ) : (\n          <BuyNowButton variantId={selectedVariant.id}>\n            <span className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full border">\n              Buy it now\n            </span>\n          </BuyNowButton>\n        )}\n      </div>\n    </form>\n  );\n}\n\nfunction OptionRadio({ values, name }) {\n  const { selectedOptions, setSelectedOption } = useProductOptions();\n\n  return (\n    <>\n      {values.map((value) => {\n        const checked = selectedOptions[name] === value;\n        const id = `option-${name}-${value}`;\n\n        return (\n          <label key={id} htmlFor={id}>\n            <input\n              className="sr-only"\n              type="radio"\n              id={id}\n              name={`option[${name}]`}\n              value={value}\n              checked={checked}\n              onChange={() => setSelectedOption(name, value)}\n            />\n            <div\n              className={`leading-none border-b-[2px] py-1 cursor-pointer transition-all duration-200 ${\n                checked ? "border-gray-500" : "border-neutral-50"\n              }`}\n            >\n              {value}\n            </div>\n          </label>\n        );\n      })}\n    </>\n  );\n}\n\nfunction ProductGallery({ media }) {\n  if (!media.length) {\n    return null;\n  }\n\n  return (\n    <div\n      className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-screen md:w-full lg:col-span-2`}\n    >\n      {media.map((med, i) => {\n        let extraProps = {};\n\n        if (med.mediaContentType === "MODEL_3D") {\n          extraProps = {\n            interactionPromptThreshold: "0",\n            ar: true,\n            loading: "eager",\n            disableZoom: true,\n          };\n        }\n\n        const data = {\n          ...med,\n          image: {\n            ...med.image,\n            altText: med.alt || "Product image",\n          },\n        };\n\n        return (\n          <div\n            className={`${\n              i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"\n            } snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`}\n            key={med.id || med.image.id}\n          >\n            <MediaFile\n              tabIndex="0"\n              className={`w-full h-full aspect-square object-cover`}\n              data={data}\n              options={{\n                crop: "center",\n              }}\n              {...extraProps}\n            />\n          </div>\n        );\n      })}\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"The product page now renders all of the details for a product and its variants. It also includes a button to purchase the product. In the ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/getting-started/tutorial/cart/"},"next tutorial"),", you\u2019ll define the context for interacting with a cart and add an ",(0,r.kt)("strong",{parentName:"p"},"Add to cart")," button, which allows customers to choose products to purchase without completing the payment process."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://shopify.dev/assets/custom-storefronts/hydrogen/product-variants-purchase-button.png",alt:"The details for a product and its variants, and a button to purchase the product"})),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to ",(0,r.kt)("a",{parentName:"li",href:"/tutorials/getting-started/tutorial/cart/"},"build a cart"),".")))}u.isMDXComponent=!0}}]);