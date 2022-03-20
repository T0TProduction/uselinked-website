(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7,8,11,12,14,16],{377:function(t,e,r){"use strict";r.r(e);var n=r(26),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0}}},o=r(26),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"-ml-1.5 mb-4 p-1 text-4xl sm:text-5xl lg:text-6xl font-bold"},[t._v("\n  "+t._s(t.$props.title)+"\n")])}),[],!1,null,null,null);e.default=component.exports},379:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"limit":"You\'ve exceeded the request count for the Github API, please retry {0)"},"de":{"limit":"Sie haben die Anzahl der Anfragen für die Github-API überschritten, bitte versuchen Sie es erneut {0}"}}'),delete t.options._Ctor}},381:function(t,e,r){var n=r(4);t.exports=n(1..valueOf)},382:function(t,e,r){r(16),r(13),r(17),r(8),r(22),r(15),r(23);var n=r(55),o=r(56),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(18),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,h=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,_=data.attrs,y=void 0===_?{}:_,x=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},y)},x),d.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z",fill:"currentColor"}})]))}}},383:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"released":"released {date}"},"de":{"released":"{date} veröffentlicht"}}'),delete t.options._Ctor}},384:function(t,e,r){"use strict";var n=r(379),o=r.n(n);e.default=o.a},385:function(t,e,r){"use strict";r.r(e);var n=r(380),o={props:{error:{type:Object,default:function(){}}},methods:{getLocaleDate:function(t){return n.DateTime.fromSeconds(t).toRelative({locale:this.$i18n.locale})}}},l=r(26),c=r(384),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$props.error?r("div",{staticClass:"bg-linked-600 text-white p-12 mt-12"},[r("h1",{staticClass:"text-6xl font-black mb-4 block"},[t._v("Oops.")]),t._v(" "),r("i18n",{staticClass:"mb-8 text-2xl",attrs:{path:"limit",tag:"p"}},[t._v("\n    "+t._s(t.getLocaleDate(t.$props.error.resettingIn))+"\n  ")])],1):t._e()}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},386:function(t,e,r){"use strict";r.r(e);var n=r(167),o=r.n(n),l=r(382),c=r.n(l),f={props:{page:{type:String,default:"https://github.com/lostdesign/linked"}},components:{IconGithub:o.a,IconExternal:c.a}},d=r(26),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{ref:"norel noopener",staticClass:"flex items-center space-x-2 link-hover",attrs:{href:t.$props.page,target:"_blank"}},[r("icon-github",{staticClass:"w-5 h-5"}),t._v(" "),r("span",[t._v("Check on Github")]),t._v(" "),r("icon-external",{staticClass:"w-4 h-4"})],1)}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,r){r(16),r(13),r(17),r(8),r(22),r(15),r(23);var n=r(55),o=r(56),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(18),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),f=e.children,d=void 0===f?[]:f,h=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,_=data.attrs,y=void 0===_?{}:_,x=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},y)},x),d.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z",fill:"currentColor"}})]))}}},394:function(t,e,r){"use strict";var n=r(3),o=r(2),l=r(4),c=r(68),f=r(381),d=r(240),h=r(5),v=o.RangeError,m=o.String,_=Math.floor,y=l(d),x=l("".slice),O=l(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},j=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=_(n/1e7)},C=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=_(r/t),r=r%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+y("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:h((function(){return"0.000"!==O(8e-5,3)||"1"!==O(.9,0)||"1.25"!==O(1.255,2)||"1000000000000000128"!==O(0xde0b6b3a7640080,0)}))||!h((function(){O({})}))},{toFixed:function(t){var e,r,n,o,l=f(this),d=c(t),data=[0,0,0,0,0,0],h="",_="0";if(d<0||d>20)throw v("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return m(l);if(l<0&&(h="-",l=-l),l>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(l*w(2,69,1))-69)<0?l*w(2,-e,1):l/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(j(data,0,r),n=d;n>=7;)j(data,1e7,0),n-=7;for(j(data,w(10,n,1),0),n=e-1;n>=23;)C(data,1<<23),n-=23;C(data,1<<n),j(data,1,1),C(data,2),_=S(data)}else j(data,0,r),j(data,1<<-e,0),_=S(data)+y("0",d);return _=d>0?h+((o=_.length)<=d?"0."+y("0",d-o)+_:x(_,0,o-d)+"."+x(_,o-d)):h+_}})},395:function(t,e,r){"use strict";var n=r(383),o=r.n(n);e.default=o.a},396:function(t,e,r){"use strict";r.r(e);r(394),r(27),r(69),r(45),r(48),r(8),r(17),r(24);var n=r(380),o=r(387),l={props:{release:{type:Object,required:!0}},methods:{getHumanFileSize:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e?1e3:1024;if(Math.abs(t)<n)return t+" B";var o=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=-1,l=Math.pow(10,r);do{t/=n,++u}while(Math.round(Math.abs(t)*l)/l>=n&&u<o.length-1);return t.toFixed(r)+" "+o[u]},getOperatingSystemName:function(t){var e=t.split(".");return e[0].includes("Setup")?"Windows Installer":{dmg:"MacOS",exe:"Windows Portable",deb:"Debian",AppImage:"Linux",rpm:"Fedora",pacman:"Arch"}[e[e.length-1]]},sumArray:function(t){return 0===t.length?0:t.reduce((function(t,e){return t+e}))},daysSince:function(t){return n.DateTime.fromISO(t).toRelative({locale:this.$i18n.locale})},localeDate:function(t){return n.DateTime.fromISO(t).setLocale(this.$i18n.locale).toLocaleString({day:"numeric",month:"long",year:"numeric"})},getFilteredAssets:function(t){return t.filter((function(t){return!t.name.includes(".yml")})).filter((function(t){return!t.name.includes(".blockmap")})).filter((function(t){return!t.name.includes(".zip")}))}},components:{DownloadIcon:r.n(o).a}},c=l,f=r(26),d=r(395),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"block space-y-4 md:space-y-0 md:flex justify-between items-center mb-12"},[r("p",[r("span",{staticClass:"text-md rounded bg-linked text-white py-1 px-2 mr-4"},[t._v("Version "+t._s(t.$props.release.name))]),t._v(" "),r("i18n",{staticClass:"text-gray-600",attrs:{path:"released",tag:"span"},scopedSlots:t._u([{key:"date",fn:function(){return[t._v("\n          "+t._s(t.daysSince(t.$props.release.published_at))+"\n        ")]},proxy:!0}])})],1),t._v(" "),r("goto-github",{attrs:{page:t.$props.release.html_url}})],1),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6"},[t._l(t.getFilteredAssets(t.$props.release.assets),(function(e){return[r("a",{key:e.id,staticClass:"bg-gray-100 border-gray-200 border-2 p-4 md:p-8 rounded-lg flex items-center space-x-4 group hover:border-linked hover:text-bright-pink",attrs:{href:e.browser_download_url}},[r("download-icon",{staticClass:"w-5 h-5"}),t._v(" "),r("div",[r("h2",{staticClass:"text-xl"},[t._v(t._s(t.getOperatingSystemName(e.name)))]),t._v(" "),r("p",{staticClass:"text-xs"},[t._v(t._s(t.getHumanFileSize(e.size))+" • "+t._s(e.name))])])],1)]}))],2)])}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;installComponents(component,{GotoGithub:r(386).default})},397:function(t,e,r){"use strict";r.r(e);var n={props:{release:{type:Object,required:!0},error:{type:Object,default:function(){}}}},o=r(26),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("content-wrapper",{staticClass:"pt-16 mb-24"},[r("page-heading",{attrs:{title:"Download"}}),t._v(" "),t.$props.release?r("download-cards",{attrs:{release:t.$props.release}}):t._e(),t._v(" "),r("github-error",{attrs:{error:t.$props.error}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:r(378).default,DownloadCards:r(396).default,GithubError:r(385).default,ContentWrapper:r(377).default})}}]);