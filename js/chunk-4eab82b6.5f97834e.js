(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eab82b6"],{"0590":function(t,e,a){},"182b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header d-flex flex-column justify-content-center align-items-center"},[t._m(0),a("div",{staticClass:"scroll-group"},[a("button",{staticClass:"text-center text-white",attrs:{id:"headerScrollBtn","data-position":"#section1"},on:{click:t.scrollHeader}},[a("h5",[t._v("Scroll")])]),t._m(1)]),t._m(2)]),a("section",{attrs:{id:"lookBookSection"}},[a("div",{staticClass:"top-mill bg-cover",style:{backgroundImage:"url("+t.header.img+")"}},[a("div",{staticClass:"text-white text-center"},[a("h1",[t._v(t._s(t.header.title))]),a("h1",[t._v(t._s(t.header.description))]),a("button",{staticClass:"title-button",on:{click:function(e){return t.goPage("/lookbook")}}},[t._v("more")])])])]),a("section",{staticClass:"mt-4 advance"},[a("div",{staticClass:"index-background-img bg-cover",style:{backgroundImage:"url("+t.men.img+")"}}),a("div",{staticClass:"content-box a-1"},[a("h1",[t._v(t._s(t.men.title))]),a("h5",{staticClass:"mt-3"},[t._v(t._s(t.men.description))]),a("div",[a("button",{staticClass:"advance-btn mt-3",on:{click:function(e){return t.goPage("/products/men")}}},[t._v("Shop Men")])])])]),a("section",{staticClass:"mt-sm-4 advance"},[a("div",{staticClass:"index-background-img bg-top",style:{backgroundImage:"url("+t.women.img+")"}}),a("div",{staticClass:"content-box a-2"},[a("h1",[t._v(t._s(t.women.title))]),a("h5",{staticClass:"mt-3"},[t._v(t._s(t.women.description))]),a("div",[a("button",{staticClass:"advance-btn mt-3",on:{click:function(e){return t.goPage("/products/women")}}},[t._v("Shop Women")])])])]),a("section",{staticClass:"my-sm-4 advance"},[a("div",{staticClass:"index-background-img bg-top",style:{backgroundImage:"url("+t.skateboard.img+")"}}),a("div",{staticClass:"content-box a-2"},[a("h1",[t._v(t._s(t.skateboard.title))]),a("h5",{staticClass:"mt-3"},[t._v(t._s(t.skateboard.description))]),a("div",[a("button",{staticClass:"advance-btn mt-3",on:{click:function(e){return t.goPage("/products/all_items","SKATEBOARD")}}},[t._v("SKATEBOARD")])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h1",{staticClass:"text-white header-title"},[t._v("SKATEBOARD")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scroll-line"},[a("div",{staticClass:"scroll-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-dsc text-white text-center"},[t._v(" SKATEBOARD VISUALUPARMORED "),a("br"),t._v(" COPYRIGHT© 2020 BY WAN. ALL ITEMS COLLECTIONS. ")])}],n=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),i=a("2f62"),r=a("1157"),c=a.n(r);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"index",data:function(){return{position:0}},methods:d({goPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ALL",a=this;a.$store.dispatch("productsModules/changeCategory",e),a.$router.push(t)},scrollHeader:function(){var t=this.position;c()("html,body").animate({scrollTop:t},700)}},Object(i["b"])("homeDataModules",["getHeaderData","getMenData","getWomenData","getSkateboard"])),computed:d({},Object(i["c"])("homeDataModules",["header","men","women","skateboard"])),mounted:function(){var t=this;this.position=c()("#lookBookSection").offset().top;var e=c()("#lookBookSection").offset().top,a=0;c()(window).scroll((function(){var s=c()(window).scrollTop();s>e-100?(t.$store.dispatch("navbarScroll"),s<a?t.$store.dispatch("navbarScroll"):t.$store.dispatch("removeNavbarClass")):t.$store.dispatch("removeNavbarClass"),a=s}))},created:function(){this.getHeaderData(),this.getMenData(),this.getWomenData(),this.getSkateboard()}},b=u,v=(a("5d8a"),a("2877")),m=Object(v["a"])(b,s,o,!1,null,null,null);e["default"]=m.exports},"5d8a":function(t,e,a){"use strict";var s=a("0590"),o=a.n(s);o.a}}]);
//# sourceMappingURL=chunk-4eab82b6.5f97834e.js.map