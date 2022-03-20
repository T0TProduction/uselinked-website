(window.webpackJsonp=window.webpackJsonp||[]).push([[6,11,12],{379:function(t,e,r){r(16),r(13),r(17),r(8),r(22),r(15),r(23);var n=r(55),l=r(56),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(18),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,h=void 0===f?[]:f,v=data.class,d=data.staticClass,style=data.style,_=data.staticStyle,m=data.attrs,x=void 0===m?{}:m,y=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,d],style:[style,_],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},x)},y),h.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z",fill:"currentColor"}})]))}}},380:function(t,e,r){"use strict";r.r(e);var n=r(166),l=r.n(n),o=r(379),c=r.n(o),f={props:{page:{type:String,default:"https://github.com/lostdesign/linked"}},components:{IconGithub:l.a,IconExternal:c.a}},h=r(26),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{ref:"norel noopener",staticClass:"flex items-center space-x-2 link-hover",attrs:{href:t.$props.page,target:"_blank"}},[r("icon-github",{staticClass:"w-5 h-5"}),t._v(" "),r("span",[t._v("Check on Github")]),t._v(" "),r("icon-external",{staticClass:"w-4 h-4"})],1)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);var n={props:{error:{type:Object,default:function(){}}}},l=r(26),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$props.error?r("div",{staticClass:"bg-linked-600 text-white p-12 mt-12"},[r("h1",{staticClass:"text-6xl font-black mb-4 block"},[t._v("Oops.")]),t._v(" "),r("p",{staticClass:"mb-8 text-2xl"},[t._v(t._s(t.$props.error.message))]),t._v(" "),r("goto-github",{attrs:{page:t.$props.error.fallbackUrl}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GotoGithub:r(380).default})},388:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"lovely_contributors":"The lovely contributors","thanks":"Thanks to the awesome people that have contributed to linked."},"de":{"lovely_contributors":"Mitwirkende","thanks":"Vielen Dank an alle, die zu linked beigetragen haben."}}'),delete t.options._Ctor}},395:function(t,e,r){"use strict";var n=r(388),l=r.n(n);e.default=l.a},405:function(t,e,r){"use strict";r.r(e);var n={props:{contributors:{type:Array,default:null},error:{type:Object,default:null}}},l=r(26),o=r(395),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.contributors?r("div",{staticClass:"space-y-4 sm:space-y-8 mt-12"},[r("div",{staticClass:"space-y-5 sm:space-y-4 lg:max-w-5xl"},[r("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v(t._s(t.$t("lovely_contributors")))]),t._v(" "),r("p",{staticClass:"text-xl text-gray-500"},[t._v(t._s(t.$t("thanks")))])]),t._v(" "),r("ul",{staticClass:"flex flex-wrap",attrs:{role:"list"}},[t._l(t.$props.contributors,(function(e,n){return["lostdesign"!==e.login?r("a",{ref:"norel noopener",refInFor:!0,staticClass:"basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-1/12 flex flex-col justify-center grow shrink-0 self-center items-center m-0 mb-6 sm:mb-0 sm:m-4 md:m-6 lg:m-8 space-y-4",attrs:{target:"_blank",href:e.html_url}},[r("li",[r("img",{staticClass:"mx-auto h-24 w-24 md:h-20 md:w-20 rounded-full lg:w-24 lg:h-24",attrs:{src:e.avatar_url,alt:e.login+" profile image"}}),t._v(" "),r("div",{staticClass:"space-y-4"},[r("div",{staticClass:"text-center font-medium lg:text-sm"},[r("h3",{staticClass:"text-base font-bold"},[t._v(t._s(e.login))]),t._v(" "),r("p",{staticClass:"text-xs text-linked"},[t._v(t._s(e.contributions)+" commits")])])])])]):t._e()]}))],2)]):t._e(),t._v(" "),t.error?r("github-error",{attrs:{error:t.error}}):t._e()],1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{GithubError:r(382).default})}}]);