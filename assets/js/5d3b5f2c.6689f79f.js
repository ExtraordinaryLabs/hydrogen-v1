"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[6045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={},r="Accessibility best practices for Hydrogen",l={unversionedId:"tutorials/best-practices/accessibility",id:"tutorials/best-practices/accessibility",title:"Accessibility best practices for Hydrogen",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/best-practices/accessibility.md",sourceDirName:"tutorials/best-practices",slug:"/tutorials/best-practices/accessibility",permalink:"/hydrogen-v1/tutorials/best-practices/accessibility",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Hydrogen best practices",permalink:"/hydrogen-v1/tutorials/best-practices/"},next:{title:"Hydrogen examples",permalink:"/hydrogen-v1/tutorials/best-practices/examples"}},s={},d=[{value:"Accessibility testing",id:"accessibility-testing",level:2},{value:"Accessibility principles",id:"accessibility-principles",level:2},{value:"Keyboard and gesture controls",id:"keyboard-and-gesture-controls",level:2},{value:"Keyboard support",id:"keyboard-support",level:3},{value:"Gesture support",id:"gesture-support",level:3},{value:"Page structure",id:"page-structure",level:2},{value:"Global",id:"global",level:3},{value:"Headings",id:"headings",level:3},{value:"Navigation",id:"navigation",level:3},{value:"Drop-down menu navigation",id:"drop-down-menu-navigation",level:3},{value:"Product information",id:"product-information",level:3},{value:"Hardcoded content",id:"hardcoded-content",level:3},{value:"Controls",id:"controls",level:3},{value:"Tables",id:"tables",level:3},{value:"Forms",id:"forms",level:3},{value:"Form errors",id:"form-errors",level:4},{value:"Media",id:"media",level:2},{value:"Images and icons",id:"images-and-icons",level:3},{value:"Video",id:"video",level:3},{value:"Audio",id:"audio",level:3},{value:"Color and contrast",id:"color-and-contrast",level:2},{value:"Dynamic components",id:"dynamic-components",level:2},{value:"Drawers and modals",id:"drawers-and-modals",level:3},{value:"Slideshows",id:"slideshows",level:3},{value:"Next steps",id:"next-steps",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"accessibility-best-practices-for-hydrogen"},"Accessibility best practices for Hydrogen"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,i.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,i.kt)("p",null,"When you build your Hydrogen custom storefront, make design choices that help keep content accessible. An accessible storefront is designed so that it can be used by everyone, including people who rely on ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/perspective-videos/"},"assistive technology"),". Accessibility for your storefront is essential to providing an inclusive experience for merchants and customers."),(0,i.kt)("p",null,"The accessibility best practices for Hydrogen custom storefronts were created with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/"},"Web Content Accessibility Guidelines (WCAG)")," in mind."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note:\nThere are many factors to consider when creating an accessible storefront. Following only the best practices on this page doesn't guarantee that your storefront is completely accessible.")),(0,i.kt)("h2",{id:"accessibility-testing"},"Accessibility testing"),(0,i.kt)("p",null,"You can test the accessibility of your Hydrogen custom storefront by using tools such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://accessibilityinsights.io/en/"},"Accessibility Insights for Web")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/lighthouse"},"Lighthouse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wave.webaim.org/"},"WAVE"))),(0,i.kt)("h2",{id:"accessibility-principles"},"Accessibility principles"),(0,i.kt)("p",null,"When building your Hydrogen custom storefront, focus on the main principles of the WCAG 2.0 Guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Perceivable"),": Information and UI components must be presentable to users in ways that they can perceive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operable"),": UI components and navigation must be operable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Understandable"),": Information and the operation of the UI must be understandable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Robust"),": Content must be clear enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.")),(0,i.kt)("p",null,"The following sections provide a list of accessibility best practices for how merchants and customers interact with your Hydrogen custom storefront."),(0,i.kt)("h2",{id:"keyboard-and-gesture-controls"},"Keyboard and gesture controls"),(0,i.kt)("p",null,"Merchants and customers who have visual or motor impairments might use a keyboard to navigate and complete tasks online. These users rely on a visual indicator to communicate where their keyboard's focus is on a web page. Your storefront should allow for all links, buttons, dropdown navigation, and form controls to be controlled using a keyboard."),(0,i.kt)("h3",{id:"keyboard-support"},"Keyboard support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The focus indicator is visible and consistent on active elements. When navigating with either the mouse or the keyboard, the focus indicator is apparent on active elements."),(0,i.kt)("li",{parentName:"ul"},"The focus style is visible on the desktop when using a keyboard."),(0,i.kt)("li",{parentName:"ul"},"Your storefront doesn't rely on a mouse hover action to be visible or accessible."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("kbd",null,"Tab")," key and ",(0,i.kt)("kbd",null,"Shift")," + ",(0,i.kt)("kbd",null,"Tab")," keys can be used to navigate your storefront."),(0,i.kt)("li",{parentName:"ul"},"No sudden changes of context when a part of your storefront receives focus. For example, when navigating with a keyboard, focus shouldn't switch to something else when a control receives focus.")),(0,i.kt)("h3",{id:"gesture-support"},"Gesture support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zooming gestures, for example pinch to zoom, are always available."),(0,i.kt)("li",{parentName:"ul"},"Any functionality that requires several fingers or complex gestures, for example navigating 3D models, should be available with a single tap or click.")),(0,i.kt)("h2",{id:"page-structure"},"Page structure"),(0,i.kt)("p",null,"The following sections provides best practices for specific elements of your Hydrogen custom storefront's page structure."),(0,i.kt)("h3",{id:"global"},"Global"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The page ",(0,i.kt)("inlineCode",{parentName:"li"},"lang")," attribute is set on the ",(0,i.kt)("inlineCode",{parentName:"li"},"html")," element to help screen readers pronounce content in the correct accent and dialect."),(0,i.kt)("li",{parentName:"ul"},"The viewport zoom is enabled. Your storefront shouldn't use the ",(0,i.kt)("inlineCode",{parentName:"li"},"maximum-scale")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"user-scalable=\u201dno\u201d")," attributes."),(0,i.kt)("li",{parentName:"ul"},"Skip link is available and visible when focused to provide quick access to page content by skipping past common content such as headers. Your storefront should include ",(0,i.kt)("inlineCode",{parentName:"li"},'tabindex="-1"')," on the container for the main content to receive focus."),(0,i.kt)("li",{parentName:"ul"},"The content flow is linear. Your storefront uses no ",(0,i.kt)("inlineCode",{parentName:"li"},"tabindex")," attributes values other than ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"-1")," and no ",(0,i.kt)("inlineCode",{parentName:"li"},"autofocus")," attribute. Positive ",(0,i.kt)("inlineCode",{parentName:"li"},"tabindex")," values in use and autofocus take the power away from the user by forcing a specific focus order. Let the user discover page content organically.")),(0,i.kt)("h3",{id:"headings"},"Headings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The HTML heading elements use heading markup. Your storefront uses heading tags (",(0,i.kt)("inlineCode",{parentName:"li"},"h1")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"h6"),") to communicate the organization of the content on the page."),(0,i.kt)("li",{parentName:"ul"},"The heading tags are used in sequence. Your storefront shouldn't use headings for design but rather to set the logical order of content on the page."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"h1")," element is used to identify the main topic of a page.")),(0,i.kt)("h3",{id:"navigation"},"Navigation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The navigation areas are wrapped with the ",(0,i.kt)("inlineCode",{parentName:"li"},"nav")," HTML element."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-current")," is used to communicate the current page when traversing links."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"role=\u201dmenu\u201d")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"role=\u201dmenuitem\u201d")," aren't used for navigation.")),(0,i.kt)("h3",{id:"drop-down-menu-navigation"},"Drop-down menu navigation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-expanded")," is used to communicate the state of collapsible navigation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-controls")," is used to convey to assistive technology that there's a visually-hidden container that the drop-down menu controls."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-current")," is used to communicate the current location or page when traversing navigation items."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("kbd",null,"Enter")," and ",(0,i.kt)("kbd",null,"Space")," keys are supported to open the drop-down menu. Your storefront should keep focus on the launcher control. The ",(0,i.kt)("kbd",null,"Tab")," key moves focus to the first item in the drop-down menu."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("kbd",null,"Esc")," key is supported to collapse the drop-down menu and return focus to the launcher control.")),(0,i.kt)("h3",{id:"product-information"},"Product information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Product images include descriptive ",(0,i.kt)("a",{parentName:"li",href:"https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204"},"alt text"),"."),(0,i.kt)("li",{parentName:"ul"},"Sale and regular prices are marked differently, both visually and by using markup for screen readers. Your storefront should use visually-hidden text to help discern the regular price from the sales price."),(0,i.kt)("li",{parentName:"ul"},"If your storefront dynamically changes a product price and availability when different variants are selected, then the changes should also be communicated to screen readers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-live")," is used to communicate dynamic changes in the UI.")),(0,i.kt)("h3",{id:"hardcoded-content"},"Hardcoded content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider building with translation and localization in mind from the start. Content is similar to visual styles in that it can be highly customizable in tone, audience, and language."),(0,i.kt)("li",{parentName:"ul"},"Hydrogen components shouldn't include hardcoded content, such as ",(0,i.kt)("strong",{parentName:"li"},"Add to cart")," and ",(0,i.kt)("strong",{parentName:"li"},"Remove from cart")," strings."),(0,i.kt)("li",{parentName:"ul"},"Content is provided to the component by the consumer using either children or props.")),(0,i.kt)("h3",{id:"controls"},"Controls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/components/framework/link/"},(0,i.kt)("inlineCode",{parentName:"a"},"Link")," component")," is used to navigate between routes. Your storefront should use links for navigation, loading a new page, or shifting keyboard focus from one element to another."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"button")," element is used for on-screen actions such as launching a modal window and sorting a data table."),(0,i.kt)("li",{parentName:"ul"},"The destination of your link should be clear from the text alone."),(0,i.kt)("li",{parentName:"ul"},"Links that open a new window include a warning. Your storefront should include a visual icon with alternative text to help screen reader and sighted, keyboard-only users understand that clicking the link opens a new window.")),(0,i.kt)("h3",{id:"tables"},"Tables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"table")," element is used for tables data."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"caption")," element is used to help assistive technology identify that a table is being read."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"th")," element is used for headers with ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," attributes."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},'scope="col"')," element is used for column headers, and ",(0,i.kt)("inlineCode",{parentName:"li"},'scope="row"')," for row headers.")),(0,i.kt)("h3",{id:"forms"},"Forms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All form fields include a label. Fields can use ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-label"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},".visuallyhidden")," element, floating labels, or a visible label to label forms. Form inputs and controls have names that clearly state their purpose."),(0,i.kt)("li",{parentName:"ul"},"Form inputs have labels with ",(0,i.kt)("inlineCode",{parentName:"li"},"for")," attributes, including form labels in the app settings."),(0,i.kt)("li",{parentName:"ul"},"Required inputs have the ",(0,i.kt)("inlineCode",{parentName:"li"},"required")," attribute."),(0,i.kt)("li",{parentName:"ul"},"Fields use the ",(0,i.kt)("inlineCode",{parentName:"li"},"autocomplete")," attribute. Auto-complete helps people fill in form fields by using the data stored in their browser.")),(0,i.kt)("h4",{id:"form-errors"},"Form errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Focus is placed on the feedback message. Any errors returned as a result of completing or submitting a form are communicated to screen readers where possible and as soon as possible."),(0,i.kt)("li",{parentName:"ul"},"Error messages are clear and descriptive."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute is applied to ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," elements which reference the error text container."),(0,i.kt)("li",{parentName:"ul"},"Notifications, error messages, success messages are announced aloud. Critical information is announced by screen readers using ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-live"),".")),(0,i.kt)("h2",{id:"media"},"Media"),(0,i.kt)("p",null,"Media can be distracting, disruptive, or unexpected. All the media in your storefront should adhere to the following best practices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Media controls should respect the user's ",(0,i.kt)("inlineCode",{parentName:"li"},"prefers-reduced-motion")," browser setting."),(0,i.kt)("li",{parentName:"ul"},"Media controls are marked up using native HTML elements. Make sure your storefront has a toggle state for buttons and range input for sliders."),(0,i.kt)("li",{parentName:"ul"},"Media can be paused using the ",(0,i.kt)("kbd",null,"Space")," key.")),(0,i.kt)("h3",{id:"images-and-icons"},"Images and icons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/components/primitive/image/"},(0,i.kt)("inlineCode",{parentName:"a"},"Image")," component")," is used to render an ",(0,i.kt)("inlineCode",{parentName:"li"},"image")," for the Storefront API's ",(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/storefront/reference/common-objects/image/"},"Image object"),".")),(0,i.kt)("h3",{id:"video"},"Video"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/components/primitive/video/"},(0,i.kt)("inlineCode",{parentName:"a"},"Video")," component")," is used to render a ",(0,i.kt)("inlineCode",{parentName:"li"},"video")," for the Storefront API's ",(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/storefront/reference/products/video/"},"Video object"),"."),(0,i.kt)("li",{parentName:"ul"},"Closed captions are available."),(0,i.kt)("li",{parentName:"ul"},"Descriptive audio is available."),(0,i.kt)("li",{parentName:"ul"},"If an auto-playing video is required, including videos in slideshows, then the sound should be muted."),(0,i.kt)("li",{parentName:"ul"},"Videos with audio aren't visually obstructed."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("kbd",null,"Space")," key can be used to pause and play the video.")),(0,i.kt)("h3",{id:"audio"},"Audio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transcripts are available."),(0,i.kt)("li",{parentName:"ul"},"Auto-playing audio can be paused.")),(0,i.kt)("h2",{id:"color-and-contrast"},"Color and contrast"),(0,i.kt)("p",null,"When you add colors to your storefront's UI, make sure that all of your text is accessible to merchants and customers who are colorblind or have other visual impairments. These merchants and customers rely on adequate color contrast to visually differentiate one thing from another."),(0,i.kt)("p",null,"You can use an ",(0,i.kt)("a",{parentName:"p",href:"https://contrast-ratio.com/"},"online contrast ratio tool")," to check the contrast of the different parts of your storefront."),(0,i.kt)("p",null,"The content in your app should adhere to the best practices described in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"WCAG 1.4.3: Contrast (Minimum) (Level AA) standards"),"."),(0,i.kt)("h2",{id:"dynamic-components"},"Dynamic components"),(0,i.kt)("p",null,"Dynamic components such as slideshows, predictive search, modal windows, and tabs can be complex and difficult to navigate. Use elements that can be interpreted by screen readers, provide context, and include keyboard functionality."),(0,i.kt)("h3",{id:"drawers-and-modals"},"Drawers and modals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When a drawer or modal is opened, focus is moved to the element that labels the drawer or modal."),(0,i.kt)("li",{parentName:"ul"},"Navigating with the keyboard stays within the open drawer or modal."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("kbd",null,"Esc")," key is supported to close drawers and modals, and returns keyboard focus to the launcher element."),(0,i.kt)("li",{parentName:"ul"},"The role used to identify modals is ",(0,i.kt)("inlineCode",{parentName:"li"},"dialog"),".")),(0,i.kt)("h3",{id:"slideshows"},"Slideshows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Content that plays automatically in a slideshow can be paused or stopped."),(0,i.kt)("li",{parentName:"ul"},"Content in a slideshow can be accessed through next and previous buttons.")),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Review the ",(0,i.kt)("a",{parentName:"li",href:"https://polaris.shopify.com/foundations/accessibility"},"Polaris guidelines for accessibility"),"."),(0,i.kt)("li",{parentName:"ul"},"Learn how to design apps with ",(0,i.kt)("a",{parentName:"li",href:"https://www.shopify.com/partners/blog/keyboard-accessibility"},"keyboard accessibility")," in mind."),(0,i.kt)("li",{parentName:"ul"},"Learn about ",(0,i.kt)("a",{parentName:"li",href:"/tutorials/best-practices/performance/"},"best practices for making your Hydrogen custom storefront performant"),".")))}p.isMDXComponent=!0}}]);