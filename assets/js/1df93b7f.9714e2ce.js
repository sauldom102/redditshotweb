"use strict";(self.webpackChunkprettypreviews_web=self.webpackChunkprettypreviews_web||[]).push([[237],{3344:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7294),i=a(6010),l=a(9960),r=a(2263),s=a(3285),o=a(7462),m=a(2949);const c="features_t9lD",d="feature_CLW0",u="featureTitle_L1YZ",g="featureImg_d9Ri",p=[{title:"Show multiple images",img:"/img/reddit/image-gallery.png",darkImg:"/img/reddit/image-gallery-dark.png",description:n.createElement(n.Fragment,null,"If the post contains multiple images they will be displayed the best way possible with the available space.")},{title:"Blurred image as background",img:"/img/reddit/background-image.png",darkImg:"/img/reddit/background-image-dark.png",description:n.createElement(n.Fragment,null,"If the post contains an image, you can choose to show a blurred version of that image as the background.")},{title:"Show embedded tweets",img:"/img/reddit/post-with-tweet.png",darkImg:"/img/reddit/post-with-tweet-dark.png",description:n.createElement(n.Fragment,null,"If the post contains an embedded tweet, it will be shown on the result image as well.")},{title:"Text-only posts",img:"/img/reddit/simple.png",darkImg:"/img/reddit/simple-dark.png",description:n.createElement(n.Fragment,null,"The simplest post types are supported")},{title:"Use any custom background color",img:"/img/reddit/custom-background-color.png",darkImg:"/img/reddit/custom-background-color-dark.png",description:n.createElement(n.Fragment,null,"You can use any color to use it as background, even auto-assign the one from the flair!")},{title:"Auto-ellipsized content",img:"/img/reddit/auto-ellipsize.png",darkImg:"/img/reddit/auto-ellipsize-dark.png",description:n.createElement(n.Fragment,null,"In case the post that you want to display has a large text that doesn't fit, it will automatically be ellipsized.")}];function h(e){let{title:t,img:a,darkImg:l,description:r}=e;const{isDarkTheme:s}=(0,m.I)();return n.createElement("div",{className:(0,i.Z)(d)},n.createElement("img",{src:s?l:a,alt:t,className:g}),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",{className:u},t),n.createElement("p",null,r)))}function w(){return n.createElement("section",{className:(0,i.Z)("container",c)},p.map(((e,t)=>n.createElement(h,(0,o.Z)({key:t},e)))))}const b="heroBanner_qdFl",f="buttons_AeoN",E={container:"container_wIwe",features:"features_V99F",title:"title_rNqA"},k=[{title:"Show multiple images",description:n.createElement(n.Fragment,null,"If the post contains multiple images they will be displayed the best way possible with the available space.")},{title:"Different image sizes",description:n.createElement(n.Fragment,null,"Choose from a curated set of aspect ratios to share your images in an optimal way.")},{title:"Show embedded tweets",description:n.createElement(n.Fragment,null,"If the post contains an embedded tweet, it will be shown on the result image as well.")},{title:"Dark and Light themes",description:n.createElement(n.Fragment,null,"Make it dark or light, based on your preferences. If you don't believe me try to switch the theme in this website and see how images look.")},{title:"Use any custom background color",description:n.createElement(n.Fragment,null,"You can use any color to use it as background, even auto-assign the one from the flair!")},{title:"Blurred image as background",description:n.createElement(n.Fragment,null,"If the post contains an image, you can choose to show a blurred version of that image as the background.")},{title:"Hide author",description:n.createElement(n.Fragment,null,"You can choose to not include the author username in the resulting image.")},{title:"Auto-ellipsized content",description:n.createElement(n.Fragment,null,"In case the post that you want to display has a large text that doesn't fit, it will automatically be ellipsized.")}];function y(e){let{title:t,description:a}=e;return n.createElement("div",{className:(0,i.Z)(E.feature)},n.createElement("div",{className:"padding-horiz--md"},n.createElement("h3",null,t),n.createElement("p",null,a)))}function I(){return n.createElement("section",{id:"features",className:(0,i.Z)(E.container)},n.createElement("h1",{className:E.title},"All Features"),n.createElement("div",{className:(0,i.Z)("container",E.features)},k.map(((e,t)=>n.createElement(y,(0,o.Z)({key:t},e))))))}function N(){const{siteConfig:e}=(0,r.Z)();return n.createElement("header",{className:(0,i.Z)("hero",b)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:f},n.createElement(l.Z,{className:"button button--secondary button--lg",to:"https://api.redditshot.com/docs"},"Get Started"))))}function v(){const{siteConfig:e}=(0,r.Z)();return n.createElement(s.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(N,null),n.createElement("main",null,n.createElement(w,null),n.createElement(I,null)))}}}]);