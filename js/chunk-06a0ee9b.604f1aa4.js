(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06a0ee9b"],{"335e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-6"},[s("div",{staticClass:"container"},[s("section",{staticClass:"cart-table"},[s("cartTable",{attrs:{cart:t.cart,cartLen:t.cartLen}},[s("h3",{staticClass:"text-center",attrs:{slot:"table-title"},slot:"table-title"},[t._v(" 訂單商品 ")]),s("a",{staticClass:"d-none",attrs:{slot:"remove-btn",href:"#"},slot:"remove-btn"})])],1),s("section",{staticClass:"cutomer-form my-3"},[s("h3",{staticClass:"text-center"},[t._v("訂單資訊")]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;e.validate;return[s("form",{on:{submit:function(e){return e.preventDefault(),a(t.createdOrder)}}},[s("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.failed;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",class:{"is-invalid":r},attrs:{type:"email",id:"exampleInputEmail1",placeholder:"請輸入 Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),r?s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()])]}}],null,!0)}),s("ValidationProvider",{attrs:{name:"姓名",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"userName"}},[t._v("收件人姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",class:r,attrs:{type:"text",id:"userName",placeholder:"收件人名稱"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),s("ValidationProvider",{attrs:{name:"電話",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"userPhone"}},[t._v("收件人電話")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.tel,expression:"user.tel"}],staticClass:"form-control",class:r,attrs:{type:"tel",id:"userPhone",placeholder:"收件人電話"},domProps:{value:t.user.tel},on:{input:function(e){e.target.composing||t.$set(t.user,"tel",e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),s("ValidationProvider",{attrs:{name:"地址",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"userAddress"}},[t._v("收件人地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.address,expression:"user.address"}],staticClass:"form-control",class:r,attrs:{type:"text",id:"userAddress",placeholder:"收件人地址"},domProps:{value:t.user.address},on:{input:function(e){e.target.composing||t.$set(t.user,"address",e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)}),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"comment"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.message,expression:"user.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.user.message},on:{input:function(e){e.target.composing||t.$set(t.user,"message",e.target.value)}}})]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[t._v("建立訂單")])])],1)]}}])})],1)])])])])},r=[],i=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("e25e"),s("159b"),s("ade3")),c=s("2f62"),l=s("7d37"),n=s("7bb1");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={name:"CreatedOrder",components:{cartTable:l["a"],ValidationObserver:n["a"],ValidationProvider:n["b"]},data:function(){return{value:"",user:{email:"",name:"",tel:"",address:"",message:""}}},methods:d({},Object(c["b"])("cartModules",["getCart"]),{},Object(c["b"])("orderModules",["getOrder"]),{createdOrder:function(){var t=this,e=parseInt(Date.now()/1e3),s={user:t.user,products:t.cart.carts,total:t.cart.total,date:e};t.$store.dispatch("orderModules/createdOrder",s)}}),computed:d({},Object(c["c"])("cartModules",["cart","cartLen"])),created:function(){this.getCart()}},v=u,m=s("2877"),p=Object(m["a"])(v,a,r,!1,null,null,null);e["default"]=p.exports},"6a35":function(t,e,s){"use strict";var a=s("c8ea"),r=s.n(a);r.a},"7d37":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"cart-box py-3 text-primary"},[t._t("table-title",[s("h1",{staticClass:"text-center text-primary"},[t._v("購物車")])]),t._m(0),s("div",{staticClass:"cart-body p-3"},[0==t.cartLen?s("div",{staticClass:"cart-content"},[s("div",{staticClass:"h5 text-center"},[t._v("您的購物車是空的")])]):t._e(),t._l(t.cart.carts,(function(e){return s("div",{staticClass:"cart-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"cart-data"},[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.goDescription(e.product_id)}}},[s("img",{attrs:{width:"150px",height:"150px",src:e.product.img,alt:""}})])])]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"cart-data"},[s("div",[s("h5",[t._v(t._s(e.product.title))]),s("div",{staticClass:"text-center"},["free"!=e.size?s("small",{staticClass:"d-block"},[t._v("SIZE : "+t._s(e.size))]):t._e(),t._t("remove-btn",[s("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.deleteCart(e.id)}}},[t.deleteId!=e.id?s("span",[t._v("移除")]):t._e()])]),t.deleteId===e.id?s("span",[t.deleteId==e.id?s("i",{staticClass:"fas fa-spinner fa-spin text-primary"}):t._e()]):t._e()],2)])])])])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"row h-100 mt-2 mt-md-0"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"cart-data"},[s("div",{staticClass:"h5"},[t._v(t._s(e.qty)+"件")])])]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"cart-data"},[s("div",{staticClass:"h4 ml-2"},[t._v(t._s(t._f("currency")(e.product.price*e.qty)))])])])])])])])}))],2),0!=t.cartLen?s("div",{staticClass:"cart-footer py-3"},[s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-row"},[t._m(1),s("div",{staticClass:"col-6"},[s("div",[s("div",{staticClass:"h6 mb-0 text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])])])])])])]):t._e()],2)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-header d-none d-md-block"},[s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-3"},[s("h5",{staticClass:"mb-0 text-center"},[t._v(" 名稱 ")])]),s("div",{staticClass:"col-3"},[s("h5",{staticClass:"mb-0 text-center"},[t._v(" 數量 ")])]),s("div",{staticClass:"col-3"},[s("h5",{staticClass:"mb-0 text-center"},[t._v(" 價格 ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6"},[s("div",[s("div",{staticClass:"h6 mb-0 text-right"},[t._v("總計")])])])}],i={name:"CartTable",props:["cart","cartLen","deleteId"],methods:{deleteCart:function(t){this.$emit("emitDeleteCart",t)},goDescription:function(t){this.$router.push("/product/".concat(t))}}},c=i,l=(s("6a35"),s("2877")),n=Object(l["a"])(c,a,r,!1,null,null,null);e["a"]=n.exports},c8ea:function(t,e,s){}}]);
//# sourceMappingURL=chunk-06a0ee9b.604f1aa4.js.map