(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b0119a9"],{"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),o=r("9112");for(var u in a){var s=n[u],c=s&&s.prototype;if(c&&c.forEach!==i)try{o(c,"forEach",i)}catch(l){c.forEach=i}}},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=r("ae40"),o=a("forEach"),u=i("forEach");e.exports=o&&u?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"2ed9":function(e,t,r){},4160:function(e,t,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"47ed":function(e,t,r){"use strict";r.d(t,"r",(function(){return i})),r.d(t,"l",(function(){return o})),r.d(t,"k",(function(){return u})),r.d(t,"p",(function(){return c})),r.d(t,"e",(function(){return p})),r.d(t,"h",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"m",(function(){return g})),r.d(t,"g",(function(){return w})),r.d(t,"d",(function(){return O})),r.d(t,"j",(function(){return j})),r.d(t,"c",(function(){return k})),r.d(t,"q",(function(){return N})),r.d(t,"n",(function(){return R})),r.d(t,"o",(function(){return P})),r.d(t,"f",(function(){return C})),r.d(t,"i",(function(){return $})),r.d(t,"b",(function(){return M}));r("96cf");var n=r("1da1"),a=r("1bab");function i(e){return Object(a["a"])({method:"POST",url:"/api/Auth/LogIn",data:e})}function o(){return Object(a["a"])({method:"GET",url:"/api/Auth/GetAllDeptForms"})}function u(e){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/GetAllAuthPosition",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"GET",url:"/api/Auth/GetSingleAuthPosition",params:{input:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/InsertPosition",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/UpdatePosition",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return b=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"DELETE",url:"/api/Auth/DeletePosition",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/GetAllUsers",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function w(e){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/InsertUser",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function O(e){return D.apply(this,arguments)}function D(){return D=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"GET",url:"/api/Auth/GetSingleUser",params:{input:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function j(e){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/UpdateUser",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function k(e){return S.apply(this,arguments)}function S(){return S=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"DELETE",url:"/api/Auth/DeleteUsers",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function N(e){return A.apply(this,arguments)}function A(){return A=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/GetSupplierAndCustomer",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function R(){return E.apply(this,arguments)}function E(){return E=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"GET",url:"/api/Auth/GetClientRank"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function P(){return T.apply(this,arguments)}function T(){return T=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"GET",url:"/api/Auth/GetClientType"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function C(e){return L.apply(this,arguments)}function L(){return L=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/InsertSupplierAndCustomer",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function $(e){return _.apply(this,arguments)}function _(){return _=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"POST",url:"/api/Auth/UpdateSupplierAndCustomer",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function M(e){return G.apply(this,arguments)}function G(){return G=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])({method:"DELETE",url:"/api/Auth/DeleteSupplierAndCustomer",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}},6063:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"f",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return u})),r.d(t,"g",(function(){return s})),r.d(t,"a",(function(){return c}));r("4160"),r("b0c0"),r("159b");function n(e,t,r){var n=new Object;return n.pageNumber=void 0==e?1:e,n.pageSize=void 0==t?1e3:t,n.positionName=void 0==r?"":r,n}function a(e){e=[{positionName:"业务经理",id:1,dept:"业务部",authority:"辅料采购表(编辑)"},{positionName:"业务员2",id:3,dept:"业务部",authority:"计划表(编辑)"}];var t=new Array;return e.forEach((function(e){var r=new Object;r.id=e.id,r.positionName=e.positionName,t.push(r)})),console.log(t),t}function i(e){var t=e,r=new Array;return t.forEach((function(e,t){1==e.allowModify&&r.push(2*t),1==e.allowQuery&&r.push(2*t+1)})),r}function o(e){var t=e,r=new Array,n=0;return t.forEach((function(e){var t=new Object;t.label=e.deptName,t.id=e.id,t.children=new Array,e.forms.forEach((function(r,a){var i=new Object;i.label=r.form,i.id=e.id,i.children=[{key:n,label:"编辑"},{key:n+1,label:"查看"}],n+=2,t.children.push(i)})),r.push(t)})),r}function u(e){var t=new Object;return t.pageNumber=void 0==e?1:e.pageNumber,t.pageSize=void 0==e?1e3:e.pageSize,t.jobNumber=void 0==e?"":e.jobNumber,t.userName=void 0==e?"":e.userName,t.deptId=void 0==e?0:e.deptId,t.postionId=void 0==e?0:e.postionId,t}function s(e,t,r,n,a,i){var o=new Object;return o.pageNumber=void 0==e?1:e,o.pageSize=void 0==t?1e3:t,o.codeName=void 0==r?"":r,o.name=void 0==n?"":n,o.clientRank=void 0==a?0:a,o.clientType=void 0==i?0:i,o}var c=[{id:0,allowModify:!1,allowQuery:!1,formId:1,formName:"打样单",deptName:"业务部"},{id:0,allowModify:!1,allowQuery:!1,formId:2,formName:"大货规格书",deptName:"业务部"},{id:0,allowModify:!1,allowQuery:!1,formId:3,formName:"计划表",deptName:"业务部"},{id:0,allowModify:!1,allowQuery:!1,formId:4,formName:"辅料采购表",deptName:"业务部"}]},"65f0":function(e,t,r){var n=r("861d"),a=r("e8b5"),i=r("b622"),o=i("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"849e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",{staticClass:"text-left",attrs:{type:"flex",justify:"end"}},[r("el-col",{staticStyle:{"text-align":"left"},attrs:{span:6}},[e._v(" 职位名称："),r("el-input",{attrs:{clearable:"",placeholder:"请输入职位名称"},model:{value:e.userQuery.positionName,callback:function(t){e.$set(e.userQuery,"positionName",t)},expression:"userQuery.positionName"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.query},slot:"append"})],1)],1),r("el-col",{attrs:{span:2,offset:14}},[r("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.newDialog}},[e._v("新建职位")])],1),r("el-col",{attrs:{span:2}},[r("el-button",{staticClass:"btn",attrs:{type:"danger"},on:{click:e.removePreview}},[e._v("删除职位")])],1)],1),r("el-row",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{select:e.rowclick,"select-all":e.rowclick}},[r("el-table-column",{attrs:{type:"selection",fixed:"",width:"55"}}),r("el-table-column",{attrs:{type:"index",width:"55"}}),r("el-table-column",{attrs:{prop:"positionName",width:"150",label:"职位名称"}}),r("el-table-column",{attrs:{prop:"dept",label:"职能权限涉及部门","show-overflow-tooltip":""}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"authority",label:"权限"}}),r("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.edit(t)}}},[e._v("编辑")])]}}])})],1)],1),r("el-row",[r("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",total:1e3,"current-page":e.userQuery.pageNumber},on:{"update:currentPage":function(t){return e.$set(e.userQuery,"pageNumber",t)},"update:current-page":function(t){return e.$set(e.userQuery,"pageNumber",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"新建职位",visible:e.isNewDialogDisplay},on:{"update:visible":function(t){e.isNewDialogDisplay=t}}},[r("div",[r("el-row",{staticClass:"new_row"},[r("el-col",{staticStyle:{"line-height":"16px"},attrs:{span:10}},[r("p",[e._v("职位名称")])]),r("el-col",{attrs:{span:10}},[r("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},model:{value:e.newDialogPositionName,callback:function(t){e.newDialogPositionName=t},expression:"newDialogPositionName"}})],1)],1),r("el-row",[r("el-tree",{ref:"tree",attrs:{data:e.data,"highlight-current":"","show-checkbox":"","node-key":"key"}})],1),r("el-row",{attrs:{type:"flex",justify:"end"}},[r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{size:"medium",type:"info"},on:{click:function(t){e.isNewDialogDisplay=!1}}},[e._v("取消")])],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.newDialogConfirm}},[e._v("确定")])],1)],1)],1)]),r("el-dialog",{attrs:{title:"删除职位",visible:e.isDeleteDialogDisplay},on:{"update:visible":function(t){e.isDeleteDialogDisplay=t}}},[r("div",{staticStyle:{"font-size":"18px"}},[e._v("即将从系统中删除如下职位，将对如下人员的权限产生影响")]),r("div",{staticClass:"delete"},[r("div",[r("div",[e._v("职位：")]),r("div",e._l(e.selectData,(function(t,n){return r("div",{key:n},[e._v(" "+e._s(t.positionName)+" ")])})),0)]),r("div",[r("div",[e._v("人员：")]),r("div",e._l(e.selectData,(function(t,n){return r("div",{key:n},[e._v(" "+e._s(t.title)+" ")])})),0)])]),r("el-row",{attrs:{type:"flex",justify:"end"}},[r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{size:"medium",type:"info"},on:{click:function(t){e.isDeleteDialogDisplay=!1}}},[e._v("取消")])],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(t){return e.remove(e.selectData)}}},[e._v("确定")])],1)],1)],1)],1)},a=[],i=(r("4160"),r("159b"),r("47ed")),o=r("6063"),u={data:function(){return{currentPage4:1,formname:o["a"],data:[],tableData:[],isNewDialogDisplay:!1,isDeleteDialogDisplay:!1,selectData:[],newDialogPositionName:"",form:[{},{},{},{},{}],frompost:null,treedata:[],id:0,userQuery:{pageNumber:1,pageSize:8,positionName:""}}},created:function(){this.getAllAuthPosition(this.userQuery),this.getAllDeptForms(),Object(o["b"])()},methods:{query:function(){this.getAllAuthPosition(this.userQuery)},getAllAuthPosition:function(e){var t=this;Object(i["k"])(e).then((function(e){e.success?(t.tableData=e.result.items,t.$message.success("获取列表成功"),console.log(t.tableData)):t.$$message.error("获取列表失败")}))},getAllDeptForms:function(){var e=this;Object(i["l"])().then((function(t){t.success?e.data=Object(o["d"])(t.result.items):e.$message.error("请重新刷新页面")}))},edit:function(e){var t,r,n=this;console.log(e),this.id=e.row.id,this.formname=e.row.form,this.isNewDialogDisplay=!0,this.newDialogPositionName=e.row.positionName,Object(i["p"])(this.id).then((function(e){e.success?(console.log(e.result.formManagers),n.$message.success("获取单个职位信息成功"),t=e.result.formManagers,n.formname=t,r=Object(o["f"])(t),n.$nextTick((function(){n.$refs.tree.setCheckedKeys(r)}))):n.$message.error("服务器出错!")}))},rowclick:function(e,t){this.selectData=e,console.log(this.selectData)},handleSizeChange:function(){console.log("aaaa")},handleCurrentChange:function(){this.query()},newDialog:function(){var e=this;this.isNewDialogDisplay=!0,this.id=0,this.newDialogPositionName="",this.treedata=[],this.$nextTick((function(){e.$refs.tree.setCheckedKeys(e.treedata)}))},newDialogConfirm:function(){var e=this,t=this.$refs.tree.getCheckedNodes(!0);console.log(t);var r=this.formname;r.forEach((function(e){e.allowQuery=!1,e.allowModify=!1}));var n=new Object;console.log(r),t.forEach((function(e){var t=parseInt(e.key/2),n=e.key%2;1===n?r[t].allowQuery=!0:r[t].allowModify=!0})),n.id=this.id,n.positionName=this.newDialogPositionName,n.formManagers=r,0==this.id?Object(i["e"])(n).then((function(t){t.success?(e.$message.success("添加成功"),window.location.reload()):e.$message.error("添加失败")})):Object(i["h"])(n).then((function(t){t.success?(e.$message.success("添加成功"),window.location.reload()):e.$message.error("添加失败")}))},removePreview:function(){0==this.selectData.length?this.$message.error("请选择职位"):this.isDeleteDialogDisplay=!0},remove:function(e){var t=this,r=new Array(e.length);console.log(e),e.forEach((function(e,t){r[t]=e.id})),Object(i["a"])(r),this.isDeleteDialogDisplay=!1;var n=Object(o["c"])(1,10);Object(i["k"])(n).then((function(e){e.success?(t.tableData=e.result.items,t.$message.success("获取列表成功"),console.log(t.tableData)):t.$message.error("获取列表失败")}))}}},s=u,c=(r("9fa2"),r("2877")),l=Object(c["a"])(s,n,a,!1,null,"29863cf8",null);t["default"]=l.exports},"9fa2":function(e,t,r){"use strict";r("2ed9")},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var n=r("83ab"),a=r("d039"),i=r("5135"),o=Object.defineProperty,u={},s=function(e){throw e};e.exports=function(e,t){if(i(u,e))return u[e];t||(t={});var r=[][e],c=!!i(t,"ACCESSORS")&&t.ACCESSORS,l=i(t,0)?t[0]:s,p=i(t,1)?t[1]:void 0;return u[e]=!!r&&!a((function(){if(c&&!n)return!0;var e={length:-1};c?o(e,1,{enumerable:!0,get:s}):e[1]=1,r.call(e,l,p)}))}},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,i=Function.prototype,o=i.toString,u=/^\s*function ([^ (]*)/,s="name";n&&!(s in i)&&a(i,s,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(e){return""}}})},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),i=r("7b0b"),o=r("50c4"),u=r("65f0"),s=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,l=4==e,p=6==e,f=5==e||p;return function(d,h,m,b){for(var g,y,w=i(d),v=a(w),O=n(h,m,3),D=o(v.length),j=0,x=b||u,k=t?x(d,D):r?x(d,0):void 0;D>j;j++)if((f||j in v)&&(g=v[j],y=O(g,j,w),e))if(t)k[j]=y;else if(y)switch(e){case 3:return!0;case 5:return g;case 6:return j;case 2:s.call(k,g)}else if(l)return!1;return p?-1:c||l?l:k}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-1b0119a9.55d7970a.js.map