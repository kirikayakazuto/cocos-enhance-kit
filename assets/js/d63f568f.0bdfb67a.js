"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[757],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:3,description:"\u4e86\u89e3\u5e76\u4e0a\u624b\u670d\u52a1\u5305\u63d0\u4f9b\u7684\u6240\u6709\u5176\u4ed6\u65b0\u7279\u6027\u3002"},l="\u4e0a\u624b\u5176\u5b83\u65b0\u7279\u6027",s={unversionedId:"start-guide/new-features",id:"version-1.0.0/start-guide/new-features",title:"\u4e0a\u624b\u5176\u5b83\u65b0\u7279\u6027",description:"\u4e86\u89e3\u5e76\u4e0a\u624b\u670d\u52a1\u5305\u63d0\u4f9b\u7684\u6240\u6709\u5176\u4ed6\u65b0\u7279\u6027\u3002",source:"@site/versioned_docs/version-1.0.0/start-guide/new-features.md",sourceDirName:"start-guide",slug:"/start-guide/new-features",permalink:"/cocos-service-pack/docs/start-guide/new-features",draft:!1,tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"\u4e86\u89e3\u5e76\u4e0a\u624b\u670d\u52a1\u5305\u63d0\u4f9b\u7684\u6240\u6709\u5176\u4ed6\u65b0\u7279\u6027\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u9636\u5408\u6279\u6307\u5357",permalink:"/cocos-service-pack/docs/start-guide/advance-batcher-guide"},next:{title:"\u7834\u574f\u6027\u53d8\u66f4",permalink:"/cocos-service-pack/docs/start-guide/breaking-change"}},p={},u=[{value:"\u9ad8 DPI \u6587\u672c\u6e32\u67d3",id:"\u9ad8-dpi-\u6587\u672c\u6e32\u67d3",level:2},{value:"\u4f7f\u7528 SpriteFrame \u8fdb\u884c Spine \u6362\u88c5",id:"\u4f7f\u7528-spriteframe-\u8fdb\u884c-spine-\u6362\u88c5",level:2},{value:"\u7ed9 RichText \u4f7f\u7528\u81ea\u5b9a\u4e49\u6750\u8d28",id:"\u7ed9-richtext-\u4f7f\u7528\u81ea\u5b9a\u4e49\u6750\u8d28",level:2}],d={toc:u};function m(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e0a\u624b\u5176\u5b83\u65b0\u7279\u6027"},"\u4e0a\u624b\u5176\u5b83\u65b0\u7279\u6027"),(0,i.kt)("p",null,"\u9664\u4e86\u524d\u9762\u63d0\u5230\u7684\u591a\u7eb9\u7406\u6e32\u67d3\u3001\u65b0\u52a8\u6001\u56fe\u96c6\u3001\u65b0 Label Char \u7f13\u5b58\u6a21\u5f0f\u7b49\u7279\u6027\u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u5176\u5b83\u7684\u4e5f\u5f88\u5b9e\u7528\u7684\u65b0\u7279\u6027\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u9ad8-dpi-\u6587\u672c\u6e32\u67d3"},"\u9ad8 DPI \u6587\u672c\u6e32\u67d3"),(0,i.kt)("p",null,"\u4ee5\u524d\u6211\u4eec\u4f1a\u4f7f\u7528\u5c06 Label \u5b57\u53f7\u653e\u5927\u4e00\u500d\uff0cLabel \u8282\u70b9\u7f29\u5c0f\u4e00\u500d\u7684\u65b9\u5f0f\u53bb\u89e3\u51b3\u5b57\u4f53\u6a21\u7cca\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u800c\u73b0\u5728\u4e0d\u9700\u8981\u4e86\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e00\u53e5\u4ee3\u7801\u8c03\u6574\u6e32\u67d3\u6bd4\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.sp.labelRetinaScale = 2;     // \u6e32\u67d3\u6587\u672c\u65f6\u7eb9\u7406\u7684\u7f29\u653e\u500d\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a 1.\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"labelscaledemo",src:n(6439).Z,width:"2688",height:"1552"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u56fe\u7247\u4e2d\uff0c\u4e0a\u65b9\u7684\u662f\u5f00\u542f\u540e\u6548\u679c\uff0c\u4e0b\u9762\u662f\u672a\u5f00\u542f\u6548\u679c\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u63a8\u8350\u4f60\u6839\u636e\u8bbe\u5907\u50cf\u7d20\u6bd4\uff08devicePixelRatio\uff09\u6765\u52a8\u6001\u8bbe\u7f6e\u8be5\u503c\uff0c\u5e76\u4e14\u8be5\u503c\u4e0d\u8981\u5927\u4e8e ",(0,i.kt)("inlineCode",{parentName:"strong"},"2"),"\uff0c\u8fd9\u4e0d\u4f1a\u5e26\u6765\u66f4\u597d\u7684\u6548\u679c\uff0c\u4f46\u5374\u5c06\u5b57\u4f53\u7eb9\u7406\u653e\u5927\u4e86\u6570\u500d\uff0c\u4f1a\u5f71\u54cd\u5230\u6e38\u620f\u6574\u4f53\u6027\u80fd\uff0c\u5f71\u54cd\u52a8\u6001\u56fe\u96c6\u7684\u6548\u7387\u3002")),(0,i.kt)("p",null,"\u53ef\u524d\u5f80 ",(0,i.kt)("a",{parentName:"p",href:"/cocos-service-pack/docs/user-guide/text-render/text-high-dpi"},"\u9ad8 DPI \u652f\u6301")," \u6587\u6863\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4f7f\u7528-spriteframe-\u8fdb\u884c-spine-\u6362\u88c5"},"\u4f7f\u7528 SpriteFrame \u8fdb\u884c Spine \u6362\u88c5"),(0,i.kt)("p",null,"\u5b98\u65b9\u6587\u6863\u4e2d\u4ecb\u7ecd\u4e86\u66ff\u6362 attachment \u5bf9\u8c61\u8fdb\u884c\u6362\u88c5\u7684\u65b9\u6cd5\uff0c\u4f46\u5982\u679c\u52a8\u753b\u4e2d\u6709\u5207\u6362 attachment \u7684\u5173\u952e\u5e27\uff0c\u8fd9\u79cd\u65b9\u6cd5\u5c31\u5931\u6548\u4e86\u3002"),(0,i.kt)("p",null,"\u8fd8\u6709\u4e00\u79cd\u65b9\u6cd5\u662f\u4fee\u6539 attachment \u7684 region \u5bf9\u8c61\u6765\u8fdb\u884c\u6362\u88c5\uff0c\u4f46\u8fd9\u79cd\u65b9\u6cd5\u5f15\u64ce\u6ca1\u6709\u76f4\u63a5\u652f\u6301\uff0c\u6240\u4ee5\u670d\u52a1\u5305\u5bf9\u5176\u8fdb\u884c\u4e86\u652f\u6301\u3002"),(0,i.kt)("p",null,"\u53ea\u9700\u8981\u4e00\u53e5\u4ee3\u7801\u5373\u53ef\u4f7f\u7528 cc.SpriteFrame \u7684\u6570\u636e\u4fee\u6539 attachment \u7684 region \u5bf9\u8c61\u6570\u636e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"skeletonComponent.setRegionData('Head', 'Head', new sp.RegionData(spriteFrame));\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"changespine",src:n(192).Z,width:"812",height:"456"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u56fe\u7247\u4e2d\u662f\u88ab\u6362\u5934\u7684\u5c0f\u7537\u5b69\u3002")),(0,i.kt)("p",null,"\u8fd9\u6837\u505a\u662f\u76f4\u63a5\u4fee\u6539\u4e86 SkeletonData \u7684\u6570\u636e\uff0c\u6240\u6709\u4f7f\u7528\u8be5\u6570\u636e\u7684 Spine \u7ec4\u4ef6\u90fd\u4f1a\u53d7\u5230\u5f71\u54cd\uff08\u88ab\u6362\u5934\uff09\uff0c\u4f46\u6211\u4eec\u63d0\u4f9b\u4e86\u514b\u9686 SkeletonData \u6570\u636e\u7684\u63a5\u53e3\uff0c\u53ef\u524d\u5f80 ",(0,i.kt)("a",{parentName:"p",href:"/cocos-service-pack/docs/user-guide/spine/spine-intro"},"Spine")," \u6587\u6863\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd8\u6709\u4e00\u4e2a\u5c0f\u7279\u6027\uff0cSpine \u7ec4\u4ef6\u4e5f\u652f\u6301\u4e86\u81ea\u52a8\u53c2\u4e0e\u52a8\u6001\u56fe\u96c6\uff0c\u5e76\u4e14\u4e5f\u652f\u6301\u4e86\u548c\u5176\u5b83\u7ec4\u4ef6\u5408\u6279\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u7ed9-richtext-\u4f7f\u7528\u81ea\u5b9a\u4e49\u6750\u8d28"},"\u7ed9 RichText \u4f7f\u7528\u81ea\u5b9a\u4e49\u6750\u8d28"),(0,i.kt)("p",null,"\u867d\u7136\u52a0\u4e0a\u53bb\u4e5f\u7b80\u5355\uff0c\u4f46\u8fd9\u53ef\u80fd\u662f\u5f88\u5c11\u7528\u5f97\u5230\u7684\u529f\u80fd\uff0c\u4e3b\u8981\u8fd8\u662f\u6211\u4eec\u770b\u5230\u51e0\u4e4e\u6240\u6709\u6e32\u67d3\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6750\u8d28\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u5374\u4e0d\u53ef\u4ee5\u3002"),(0,i.kt)("p",null,"\u53ef\u524d\u5f80 ",(0,i.kt)("a",{parentName:"p",href:"/cocos-service-pack/docs/user-guide/text-render/text-richtext"},"RichText \u81ea\u5b9a\u4e49\u6750\u8d28")," \u6587\u6863\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"))}m.isMDXComponent=!0},192:function(e,t,n){t.Z=n.p+"assets/images/changespine-07597b2bbccb77c69d37779189c496a7.png"},6439:function(e,t,n){t.Z=n.p+"assets/images/labelscaledemo-f3a6e3115a7fd1ab729cd37e6e4a0d95.png"}}]);