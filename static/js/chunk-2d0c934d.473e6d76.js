(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c934d"],{"57c8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("container",[a("template",{slot:"header"},[a("el-alert",{attrs:{type:"success",closable:!1,title:"私有路由快照相当于私有路由存储一种快捷操作，\n        会将传入的 vue instance 携带的 $data 全部根据用户区分持久化，\n        下面的表单来自 Element 的表单示例，\n        在 sky-admin 的本页示例中你可以随意填写这个表单，\n        表单内容会自动实时持久化，\n        无论是切换标签页、重新打开标签页、刷新浏览器、重开浏览器、重开浏览器标签页等，\n        该页面数据都会自动恢复到上次填写的状态，\n        这些都只需要你使用 sky-admin 提供的两个方法，\n        总共只需要多写十几行代码"}})],1),a("el-form",{ref:"form",staticStyle:{"max-width":"600px",margin:"0px auto"},attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"线上活动",name:"type"}}),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),a("el-checkbox",{attrs:{label:"线下活动",name:"type"}}),a("el-checkbox",{attrs:{label:"品牌曝光",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[e._v("立即创建")]),a("el-button",[e._v("取消")])],1)],1),a("el-button",{attrs:{slot:"footer",type:"danger"},on:{click:e.handleClear},slot:"footer"},[a("icon",{attrs:{name:"trash-o"}}),e._v(" 删除当前页面快照 ")],1)],2)},l=[],n=a("5530"),o=(a("96cf"),a("1da1")),s=a("2f62"),c={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},watch:{$data:{handler:function(){this.pageSet({instance:this,user:!0})},deep:!0}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.pageGet({instance:e,user:!0});case 2:for(r in a=t.sent,a)e[r]=a[r];case 4:case"end":return t.stop()}}),t)})))()},methods:Object(n["a"])(Object(n["a"])({},Object(s["b"])("db",["pageSet","pageGet","pageClear"])),{},{handleClear:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.pageClear({instance:e,user:!0});case 2:e.$message.success("此页面快照已经删除，请重新进入该页面或者关闭选项卡重新打开");case 3:case"end":return t.stop()}}),t)})))()}})},i=c,m=a("2877"),u=Object(m["a"])(i,r,l,!1,null,null,null);t["default"]=u.exports}}]);