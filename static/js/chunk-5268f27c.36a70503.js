(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5268f27c","chunk-e3d2ac0e","chunk-2d0d6312","chunk-2d217dd2"],{"26bf":function(e,t,n){},"33fb":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d2-demo-article"},[e.long?e._e():n("div",{staticClass:"d2-demo-article__control"},[n("el-switch",{attrs:{"active-text":"长内容","inactive-text":"短内容"},model:{value:e.isLong,callback:function(t){e.isLong=t},expression:"isLong"}})],1),n("markdown",{directives:[{name:"show",rawName:"v-show",value:e.isLong,expression:"isLong"}],attrs:{source:e.sourceLong}}),n("markdown",{directives:[{name:"show",rawName:"v-show",value:!e.isLong,expression:"!isLong"}],attrs:{source:e.sourceShort}})],1)},o=[],r=n("7201"),s=n.n(r),a=n("c917"),c=n.n(a),i={props:{long:{type:Boolean,required:!1,default:!1}},data:function(){return{sourceLong:s.a,sourceShort:c.a,isLong:!1}},created:function(){this.isLong=this.long}},u=i,m=(n("40ee"),n("2877")),d=Object(m["a"])(u,l,o,!1,null,"4feb704b",null);t["default"]=d.exports},"40ee":function(e,t,n){"use strict";n("26bf")},"55c9":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("container",{ref:"container",attrs:{type:e.containerType,"better-scroll":e.betterScroll,"scroll-delay":e.scrollDelay},on:{scroll:function(t){t.x;var n=t.y;e.scrollTop=n}}},[n("template",{slot:"header"},[n("el-form",{attrs:{inline:!0,size:"mini"}},[n("el-form-item",{staticClass:"d2-mb-0",attrs:{label:"布局类型"}},[n("el-radio-group",{model:{value:e.containerType,callback:function(t){e.containerType=t},expression:"containerType"}},[n("el-radio-button",{attrs:{label:"full"}}),n("el-radio-button",{attrs:{label:"card"}}),n("el-radio-button",{attrs:{label:"ghost"}})],1)],1),n("el-form-item",{staticClass:"d2-mb-0",attrs:{label:"滚动距离"}},[n("el-input",{staticStyle:{width:"130px"},attrs:{value:e.scrollTop}},[n("template",{slot:"append"},[e._v("px")])],2)],1),e.betterScroll?e._e():n("el-form-item",{staticClass:"d2-mb-0",attrs:{label:"事件延迟(ms)"}},[n("el-input-number",{staticStyle:{width:"110px"},attrs:{min:10,max:2e3,step:100},model:{value:e.scrollDelay,callback:function(t){e.scrollDelay=t},expression:"scrollDelay"}})],1),n("el-form-item",{staticClass:"d2-mb-0"},[e.scrollTop>=55?n("el-button",{attrs:{type:"primary"},on:{click:e.$refs.container.scrollToTop}},[e._v(" 回到顶部 ")]):e._e()],1)],1)],1),n("el-alert",{staticClass:"d2-mb-10",attrs:{type:"success",title:(e.betterScroll?"此示例开启了 BetterScroll ":"")+"请向下滚动",center:""}}),e._l(10,(function(t){return n("d2-demo-article",{key:t,style:e.articleStyle,attrs:{long:""}})})),n("el-form",{attrs:{slot:"footer",inline:!0,size:"mini"},slot:"footer"},[n("el-form-item",{staticClass:"d2-mb-0"},[n("el-button",{on:{click:function(t){return e.$refs.container.scrollBy(0,30)}}},[e._v("相对滚动 (0, 30) 像素")])],1),n("el-form-item",{staticClass:"d2-mb-0"},[n("el-button",{on:{click:function(t){return e.$refs.container.scrollTo(0,100)}}},[e._v("滚动到 (0, 100) 像素位置")])],1),n("el-form-item",{staticClass:"d2-mb-0"},[n("el-button",{on:{click:function(t){return e.$refs.container.scrollTop(100)}}},[e._v("滚动到垂直位置 100")])],1)],1)],2)},o=[],r=n("33fb"),s={components:{"d2-demo-article":r["default"]},data:function(){return{containerType:"full",scrollDelay:10,scrollTop:0}},computed:{betterScroll:function(){return"true"===this.$route.query.bs},articleStyle:function(){return{opacity:this.scrollTop>55?"1":".1"}}}},a=s,c=n("2877"),i=Object(c["a"])(a,l,o,!1,null,null,null);t["default"]=i.exports},7201:function(e,t){e.exports="## vue.js\n\n**易用**\n\n已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！\n\n**灵活**\n\n不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。\n\n**高效**\n\n20kB min+gzip 运行大小\n\n超快虚拟 DOM\n\n最省心的优化\n\n**Vue.js 是什么**\n\nVue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\n\n如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。\n\n## Element\n\nElement，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库\n\n**一致性** Consistency\n\n- 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；\n\n- 在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。\n\n**反馈** Feedback\n\n- 控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；\n\n- 页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。\n\n**效率** Efficiency\n\n- 简化流程：设计简洁直观的操作流程；\n\n- 清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；\n\n- 帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。\n\n**可控** Controllability\n\n- 用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；\n\n- 结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"},c917:function(e,t){e.exports="## vue.js\n\n**易用**\n\n已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！\n\n**灵活**\n\n不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。\n\n**高效**\n\n20kB min+gzip 运行大小\n\n超快虚拟 DOM\n\n最省心的优化"}}]);