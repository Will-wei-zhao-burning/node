(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73a6d24b"],{2622:function(t,a,i){},"6c02":function(t,a,i){"use strict";var s=i("2622"),e=i.n(s);e.a},d3fd:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"expansion"},[i("div",{staticClass:"top"},[i("div",{staticClass:"equip"},[i("div",{staticClass:"left"},[t._v("设备名称")]),i("div",[i("el-input",{model:{value:t.equipName,callback:function(a){t.equipName=a},expression:"equipName"}})],1)]),i("div",{staticClass:"equip"},[i("div",{staticClass:"left"},[t._v("设备图片")]),i("div",[i("el-upload",{staticClass:"upload-demo",attrs:{"auto-upload":!1,action:"#",drag:""}},[i("i",{staticClass:"el-icon-picture"}),i("div",{staticClass:"el-upload__text"},[t._v("将图片拖到此处，或"),i("em",[t._v("点击上传")])])])],1)]),i("div",{staticClass:"equip"},[i("div",{staticClass:"left"},[t._v("配置文件")]),i("div",[i("el-upload",{staticClass:"upload-demo",attrs:{"auto-upload":!1,action:"#",drag:""}},[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])])])],1)])]),i("div",{staticClass:"bottom"},[i("el-button",{attrs:{type:"primary"},on:{click:t.addInform}},[t._v(" 添加 ")]),i("el-button",{attrs:{type:"warning"}},[t._v(" 取消 ")])],1)])},e=[],l={data:function(){return{equipName:"",loading:!1}},methods:{addInform:function(){var t=this;this.loading=!0,this.$EventBus.$emit("addEquip",{title:this.equipName}),setTimeout((function(){t.loading=!1,t.$message.success("加载参数成功！")}),3e3)}}},n=l,o=(i("6c02"),i("2877")),d=Object(o["a"])(n,s,e,!1,null,"642785bc",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-73a6d24b.b16418ed.js.map