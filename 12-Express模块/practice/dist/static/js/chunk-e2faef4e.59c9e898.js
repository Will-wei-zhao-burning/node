(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2faef4e"],{7865:function(e,t,l){},"8d5e":function(e,t,l){"use strict";l("7865")},ada2:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"plan"}},[l("div",{staticClass:"text-left"},[l("el-row",[l("el-col",{attrs:{span:5}},[e._v("客户："),l("el-input",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),l("el-col",{attrs:{span:5}},[e._v("业务员："),l("el-input",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),l("el-col",{attrs:{span:5}},[e._v("订单号："),l("el-input",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),l("el-col",{attrs:{span:5}},[e._v("货号："),l("el-input",{model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),l("el-col",{attrs:{span:4}},[l("el-select",e._l(e.statusTypeList,(function(e){return l("el-option",{key:e.index,attrs:{value:e.value}})})),1)],1)],1),l("el-row",[l("el-col",{attrs:{span:5}},[e._v("下单日期： "),l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.dataValue,callback:function(t){e.dataValue=t},expression:"dataValue"}})],1),l("el-col",{attrs:{span:5}},[l("el-select",e._l(e.statusTypeList,(function(e){return l("el-option",{key:e.index,attrs:{value:e.value}})})),1)],1),l("el-col",{attrs:{span:3}},[l("el-button",[e._v("更新状态")])],1),l("el-col",{attrs:{span:3}},[l("el-button",{on:{click:e.newOrderStore}},[e._v("新增出货计划")])],1),l("el-col",{attrs:{span:2}},[l("el-button",{attrs:{type:""}},[e._v("删除")])],1),l("el-col",{attrs:{span:3}},[l("el-button",{attrs:{type:""}},[e._v("导出Excel")])],1)],1),l("el-row",[l("el-table",{attrs:{border:"",data:e.tableData}},[l("el-table-column",{attrs:{type:"selection",width:"50"}}),l("el-table-column",{attrs:{type:"index",width:"50",label:"序号",fixed:""}}),e._l(e.tableList,(function(e){return l("el-table-column",{key:e.index,attrs:{fixed:e.isFix||!1,label:e.label,prop:e.prop,width:e.width}})})),l("el-table-column",{attrs:{width:"140",label:"操作"}},[l("el-button",{attrs:{size:"mini"}},[e._v("编辑")])],1)],2)],1)],1)])},s=[],n={data:function(){return{dataValue:null,statusTypeList:[{value:"已完成"},{value:"未完成"},{value:"修改中"},{value:"取消"}],statusType:null,tableList:[{label:"客户",prop:"sample",width:"100",isFix:"left"},{label:"港口",prop:"sample",width:"100",isFix:"left"},{label:"进仓日期",prop:"sample",isFix:"left"},{label:"订单号",prop:"sample",isFix:"left"},{label:"货号",prop:"sample",isFix:"left"},{label:"出货数",prop:"sample",width:"100",isFix:"left"},{label:"箱数",prop:"sample",width:"100",isFix:"left"},{label:"状态",prop:"sample",width:"100",isFix:"left"}],tableData:[{number:2,sample:"187310"},{number:2,sample:"187315"},{number:2,sample:"187320"}]}},methods:{newOrderStore:function(){this.$router.push("/newOrderStore")}}},r=n,o=(l("8d5e"),l("2877")),i=Object(o["a"])(r,a,s,!1,null,"8c7d48a0",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-e2faef4e.59c9e898.js.map