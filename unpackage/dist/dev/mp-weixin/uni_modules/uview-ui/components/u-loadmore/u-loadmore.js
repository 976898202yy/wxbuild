(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-loadmore/u-loadmore"],{303:function(n,e,t){"use strict";t.r(e);var o=t(304),r=t(306);for(var i in r)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(309);var u,a=t(32),d=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"055cbf89",null,!1,o["components"],u);d.options.__file="uni_modules/uview-ui/components/u-loadmore/u-loadmore.vue",e["default"]=d.exports},304:function(n,e,t){"use strict";t.r(e);var o=t(305);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},305:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));try{o={uLine:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-line/u-line")]).then(t.bind(null,418))},uLoadingIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(t.bind(null,386))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__get_style([n.$u.addStyle(n.customStyle),{backgroundColor:n.bgColor,marginBottom:n.$u.addUnit(n.marginBottom),marginTop:n.$u.addUnit(n.marginTop),height:n.$u.addUnit(n.height)}])),o=n.__get_style([n.loadTextStyle]);n.$mp.data=Object.assign({},{$root:{s0:t,s1:o}})},i=!1,u=[];r._withStripped=!0},306:function(n,e,t){"use strict";t.r(e);var o=t(307),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},307:function(n,e,t){"use strict";(function(n){var o=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t(308)),i={name:"u-loadmore",mixins:[n.$u.mpMixin,n.$u.mixin,r.default],data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:n.$u.addUnit(this.fontSize),lineHeight:n.$u.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText:function(){var n="";return n="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,n}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};e.default=i}).call(this,t(2)["default"])},309:function(n,e,t){"use strict";t.r(e);var o=t(310),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},310:function(n,e,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-loadmore/u-loadmore.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component',
    {
        'uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(303))
        })
    },
    [['uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component']]
]);
