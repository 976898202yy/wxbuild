(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesMy/datGroup"],{"0ff4":function(t,e,n){},"1dcb":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n("9d95"),i={data:function(){return{readOnly:!1,formats:{},content:"",editorCtx:null}},onLoad:function(){},methods:{commit:function(){this.editorCtx.getContents({success:function(e){"<p><br></p>"==e.html?t.$u.toast("请输入内容"):(this.content=e.html,(0,c.groupAdd)({content:this.content}).then((function(e){200==e.code?(t.$u.toast("发布成功"),setTimeout((function(){var t=getCurrentPages();t[t.length-2];o.navigateBack({delta:1})}),500)):t.$u.toast("发布失败")})))}})},readOnlyChange:function(){this.readOnly=!this.readOnly},onEditorReady:function(){var e=this;t.createSelectorQuery().select("#editor").context((function(t){e.editorCtx=t.context})).exec()},undo:function(){this.editorCtx.undo()},redo:function(){this.editorCtx.redo()},format:function(t){var e=t.target.dataset,n=e.name,o=e.value;n&&this.editorCtx.format(n,o)},onStatusChange:function(t){var e=t.detail;this.formats=e},insertDivider:function(){this.editorCtx.insertDivider({success:function(){console.log("insert divider success")}})},clear:function(){this.editorCtx.clear({success:function(t){console.log("clear success")}})},removeFormat:function(){this.editorCtx.removeFormat()},insertDate:function(){var t=new Date,e="".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate());this.editorCtx.insertText({text:e})},insertImage:function(){var e=this;t.chooseImage({count:1,success:function(t){e.editorCtx.insertImage({src:t.tempFilePaths[0],alt:"图像",success:function(){console.log("insert image success")}})}})}}};e.default=i}).call(this,n("543d")["default"],n("bc2e")["default"])},"276e":function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("c399");o(n("66fd"));var c=o(n("6bf7"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(c.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},5416:function(t,e,n){"use strict";var o=n("0ff4"),c=n.n(o);c.a},"6bf7":function(t,e,n){"use strict";n.r(e);var o=n("acec"),c=n("95b4");for(var i in c)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(i);n("5416");var u=n("f0c5"),r=Object(u["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=r.exports},"95b4":function(t,e,n){"use strict";n.r(e);var o=n("1dcb"),c=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=c.a},acec:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,"4755"))}},c=function(){var t=this.$createElement;this._self._c},i=[]}},[["276e","common/runtime","common/vendor"]]]);