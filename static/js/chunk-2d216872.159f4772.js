(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216872"],{c39e:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("container",{attrs:{type:"card"}},[a("template",{slot:"header"},[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v(" props.id = "+e._s(e.id)+" ")])],1),a("p",{staticClass:"d2-mt-0"},[e._v("在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存")]),a("p",[e._v("注意：此页面根据不同 params 打开后数据不会混淆")]),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("p",[e._v("el-input")]),a("el-input",{attrs:{placeholder:"input here"},model:{value:e.data.value,callback:function(t){e.$set(e.data,"value",t)},expression:"data.value"}})],1),a("el-col",{attrs:{span:12}},[a("p",[e._v("html input")]),a("div",{staticClass:"el-input el-input--default"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.value,expression:"data.value"}],staticClass:"el-input__inner",attrs:{placeholder:"input here"},domProps:{value:e.data.value},on:{input:function(t){t.target.composing||e.$set(e.data,"value",t.target.value)}}})])])],1)],2)},n=[],r={name:"demo-playground-page-cache-params",props:{id:{type:String,required:!0}},data:function(){return{data:{value:""}}}},s=r,p=a("2877"),u=Object(p["a"])(s,l,n,!1,null,null,null);t["default"]=u.exports}}]);