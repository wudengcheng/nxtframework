(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec1ca96"],{"2ab0":function(e,t,s){"use strict";s("f386")},"38e1":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-card",{staticStyle:{"margin-top":"10px","font-size":"14px","line-height":"30px"}},[s("el-row",{staticStyle:{"font-weight":"800"}},[e._v("\n      操作提示：\n    ")]),e._v(" "),s("el-row",[e._v("\n      1、本系统默认当前服务器存储所有图片。\n    ")]),e._v(" "),s("el-row",[e._v("\n      2、你可以在此选择存储在第三方图片云，就可以享受第三方图片云更优质的图片加载体验。\n    ")]),e._v(" "),s("el-row",[e._v("\n      3、如果要启用第三方图片云，请在对应第三方图片云申请该服务器，并配置下面对应的参数。\n    ")])],1),e._v(" "),s("el-card",{staticStyle:{"margin-top":"10px"}},[s("el-form",{ref:"form",attrs:{"label-width":"160px"}},[s("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"基础设置",name:"first"}},[s("el-form-item",{attrs:{label:"存储方式","label-width":"120px",prop:"pass"}},[s("el-radio",{attrs:{label:"local"},model:{value:e.ossLocation,callback:function(t){e.ossLocation=t},expression:"ossLocation"}},[e._v("当前服务器")]),e._v(" "),s("el-radio",{attrs:{label:"qiniu"},model:{value:e.ossLocation,callback:function(t){e.ossLocation=t},expression:"ossLocation"}},[e._v("七牛云OSS")])],1),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定")]),e._v(" "),s("p",[e._v("切换后不希望图片分布于多处？点击这里："),s("router-link",{staticStyle:{color:"#1890ff"},attrs:{to:"/set/oss"}},[e._v("图片搬家")])],1)],1),e._v(" "),s("el-tab-pane",{attrs:{label:"七牛云OSS配置",name:"second"}},[s("el-form-item",{attrs:{label:"OSS域名",prop:"pass"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.ossQiniuDomain,callback:function(t){e.ossQiniuDomain=t},expression:"ossQiniuDomain"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"AccessKey",prop:"pass"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.ossQiniuAccessKey,callback:function(t){e.ossQiniuAccessKey=t},expression:"ossQiniuAccessKey"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"SecretKey",prop:"pass"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.ossQiniuSecretKey,callback:function(t){e.ossQiniuSecretKey=t},expression:"ossQiniuSecretKey"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"Bucket",prop:"pass"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.ossQiniuBucket,callback:function(t){e.ossQiniuBucket=t},expression:"ossQiniuBucket"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定")])],1)],1)],1)],1)],1)],1)},o=[],n=s("b98a"),a={data:function(){return{list:[],oldList:[],activeName:"first",input:"",ossQiniuAccessKey:"",ossQiniuSecretKey:"",ossQiniuBucket:"",ossQiniuDomain:"",ossLocation:"local"}},created:function(){this.load()},methods:{load:function(){var e=this;new Promise((function(t,s){Object(n["a"])().then((function(s){e.ossLocation=s.detail.ossLocation,e.ossQiniuAccessKey=s.detail.ossQiniuAccessKey,e.ossQiniuSecretKey=s.detail.ossQiniuSecretKey,e.ossQiniuBucket=s.detail.ossQiniuBucket,e.ossQiniuDomain=s.detail.ossQiniuDomain,console.log(s.detail),t()})).catch((function(e){s(e)}))})),console.log("sss")},onSubmit:function(){var e=this,t={};t["ossLocation"]=this.ossLocation,t["ossQiniuAccessKey"]=this.ossQiniuAccessKey,t["ossQiniuSecretKey"]=this.ossQiniuSecretKey,t["ossQiniuBucket"]=this.ossQiniuBucket,t["ossQiniuDomain"]=this.ossQiniuDomain,Object(n["b"])(t).then((function(t){console.log(t),e.$message({message:"修改成功",type:"success"})})).catch((function(){e.$message({message:"修改失败",type:"error"})}))},handleClick:function(e,t){}}},c=a,l=(s("2ab0"),s("2877")),u=Object(l["a"])(c,i,o,!1,null,null,null);t["default"]=u.exports},b98a:function(e,t,s){"use strict";s.d(t,"c",(function(){return o})),s.d(t,"d",(function(){return n})),s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return c}));var i=s("23f6");function o(){return Object(i["a"])({url:"/api/admin/setting_normal/detail",method:"post"})}function n(e){return console.log(e),Object(i["a"])({url:"/api/admin/setting_normal/save",method:"post",data:e})}function a(){return Object(i["a"])({url:"/api/admin/setting_oss_config/detail",method:"post"})}function c(e){return Object(i["a"])({url:"/api/admin/setting_oss_config/save",method:"post",data:e})}},f386:function(e,t,s){}}]);