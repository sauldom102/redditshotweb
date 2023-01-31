"use strict";(self.webpackChunkprettypreviews_web=self.webpackChunkprettypreviews_web||[]).push([[237],{3344:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(7294),i=a(6010),l=a(8891),r=a.n(l),s=a(9960),o=a(2263),c=a(3285),m=a(7462),d=a(2949);const u="features_t9lD",g="feature_CLW0",p="featureTitle_L1YZ",h="featureImg_d9Ri",b=[{title:"Show multiple images",img:"/img/reddit/image-gallery.png",darkImg:"/img/reddit/image-gallery-dark.png",description:n.createElement(n.Fragment,null,"If the post contains multiple images they will be displayed the best way possible with the available space.")},{title:"Blurred image as background",img:"/img/reddit/background-image.png",darkImg:"/img/reddit/background-image-dark.png",description:n.createElement(n.Fragment,null,"If the post contains an image, you can choose to show a blurred version of that image as the background.")},{title:"Show embedded tweets",img:"/img/reddit/post-with-tweet.png",darkImg:"/img/reddit/post-with-tweet-dark.png",description:n.createElement(n.Fragment,null,"If the post contains an embedded tweet, it will be shown on the result image as well.")},{title:"Text-only posts",img:"/img/reddit/simple.png",darkImg:"/img/reddit/simple-dark.png",description:n.createElement(n.Fragment,null,"The simplest post types are supported")},{title:"Use any custom background color",img:"/img/reddit/custom-background-color.png",darkImg:"/img/reddit/custom-background-color-dark.png",description:n.createElement(n.Fragment,null,"You can use any color to use it as background, even auto-assign the one from the flair!")},{title:"Auto-ellipsized content",img:"/img/reddit/auto-ellipsize.png",darkImg:"/img/reddit/auto-ellipsize-dark.png",description:n.createElement(n.Fragment,null,"In case the post that you want to display has a large text that doesn't fit, it will automatically be ellipsized.")}];function w(e){let{title:t,img:a,darkImg:l,description:r}=e;const{colorMode:s}=(0,d.I)();return n.createElement("div",{className:(0,i.Z)(g)},n.createElement("img",{src:"dark"===s?l:a,alt:t,className:h}),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",{className:p},t),n.createElement("p",null,r)))}function f(){return n.createElement("section",{className:(0,i.Z)("container",u)},b.map(((e,t)=>n.createElement(w,(0,m.Z)({key:t},e)))))}const E="heroBanner_qdFl",k="buttons_AeoN",y={container:"container_wIwe",features:"features_V99F",title:"title_rNqA"},I=[{title:"Show multiple images",description:n.createElement(n.Fragment,null,"If the post contains multiple images they will be displayed the best way possible with the available space.")},{title:"Different image sizes",description:n.createElement(n.Fragment,null,"Choose from a curated set of aspect ratios to share your images in an optimal way.")},{title:"Show embedded tweets",description:n.createElement(n.Fragment,null,"If the post contains an embedded tweet, it will be shown on the result image as well.")},{title:"Dark and Light themes",description:n.createElement(n.Fragment,null,"Make it dark or light, based on your preferences. If you don't believe me try to switch the theme in this website and see how images look now.")},{title:"Use any custom background color",description:n.createElement(n.Fragment,null,"You can use any color to use it as background, even auto-assign the one from the flair!")},{title:"Blurred image as background",description:n.createElement(n.Fragment,null,"If the post contains an image, you can choose to show a blurred version of that image as the background.")},{title:"Hide author",description:n.createElement(n.Fragment,null,"You can choose to not include the author username in the resulting image.")},{title:"Auto-ellipsized content",description:n.createElement(n.Fragment,null,"In case the post that you want to display has a large text that doesn't fit, it will automatically be ellipsized.")}];function N(e){let{title:t,description:a}=e;return n.createElement("div",{className:(0,i.Z)(y.feature)},n.createElement("div",{className:"padding-horiz--md"},n.createElement("h3",null,t),n.createElement("p",null,a)))}function v(){return n.createElement("section",{id:"features",className:(0,i.Z)(y.container)},n.createElement("h1",{className:y.title},"All Features"),n.createElement("div",{className:(0,i.Z)("container",y.features)},I.map(((e,t)=>n.createElement(N,(0,m.Z)({key:t},e))))))}function F(){const{siteConfig:e}=(0,o.Z)(),t=(0,n.useCallback)((()=>{r().track("Get Started Button Pressed")}),[]);return n.createElement("header",{className:(0,i.Z)("hero",E)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:k},n.createElement(s.Z,{className:"button button--secondary button--lg",to:"https://api.redditshot.com/docs",onClick:t},"Get Started"))))}function _(){const{siteConfig:e}=(0,o.Z)();return n.createElement(c.Z,{title:"",description:`${e.tagline}`},n.createElement(F,null),n.createElement("main",null,n.createElement(f,null),n.createElement(v,null)))}}}]);