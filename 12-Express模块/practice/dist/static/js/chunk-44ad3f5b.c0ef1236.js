(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ad3f5b"],{"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),o=r("9112");for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),a=r("ae40"),o=i("forEach"),c=a("forEach");t.exports=o&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),a=r("2d00"),o=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4dda":function(t,e,r){},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),o=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"75f5":function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return d}));r("96cf");var n=r("1da1"),i=r("1bab");function a(t){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"POST",url:"/api/BusinessUnit/GetAllHooks",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function c(t){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"POST",url:"/api/BusinessUnit/InsertOrUpdateHook",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function u(t){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"POST",url:"/api/BusinessUnit/GetRelatedHooks",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"DELETE",url:"/api/BusinessUnit/DeleteHook",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,a(0,r)):t[o]=r}},"99b2":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"summary"}},[r("el-row",{staticClass:"text-right"},[r("el-button",{attrs:{type:"primary"},on:{click:t.insert}},[t._v("添加")]),r("el-button",{attrs:{type:"danger"},on:{click:t.remove}},[t._v("删除")])],1),r("el-row",{attrs:{id:"plan"}},[r("el-table",{attrs:{"show-summary":"",border:"",data:t.tableData},on:{select:t.rowclick}},[r("el-table-column",{attrs:{label:"钩子采购计划单"}},[r("el-table-column",{attrs:{type:"selection",width:"50"}}),r("el-table-column",{attrs:{label:"序号",type:"index",width:"50"}}),t._l(t.tableHeaderItems1,(function(e){return r("el-table-column",{key:e.index,attrs:{label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(n){return[r("el-input",{model:{value:n.row[e.prop],callback:function(r){t.$set(n.row,e.prop,r)},expression:"scope.row[item.prop]"}})]}}],null,!0)})})),r("el-table-column",{attrs:{label:"钩子照片",width:"200"}},[r("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[r("i",{staticClass:"el-icon-plus"})])],1),t._l(t.tableHeaderItems2,(function(e){return r("el-table-column",{key:e.index,attrs:{label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(n){return[r("el-input",{model:{value:n.row[e.prop],callback:function(r){t.$set(n.row,e.prop,r)},expression:"scope.row[item.prop]"}})]}}],null,!0)})}))],2)],1),r("el-col",{staticStyle:{"line-height":"60px","border-left":"1px solid","border-bottom":"1px solid"},attrs:{span:1}},[t._v("备注：")]),r("el-col",{staticStyle:{"line-height":"60px","border-right":"1px solid","border-left":"1px solid","border-bottom":"1px solid"},attrs:{span:23}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1),r("el-row",[r("el-col",{staticClass:"text-right"},[r("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),r("el-button",{attrs:{type:"warning"},on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},i=[],a=(r("4160"),r("a434"),r("159b"),r("75f5")),o=r("af7c"),c=r("d2b5"),s={data:function(){return{tableData:[],tableHeaderItems1:[{label:"订单号",width:"150",prop:"orderNumber"},{label:"业务员",width:"150",prop:"salesManName"},{label:"客户",width:"150",prop:"customerName"},{label:"货号",width:"150",prop:"productId"},{label:"钩子名称",width:"150",prop:"hookName"}],tableHeaderItems2:[{label:"数量",width:"150",prop:"number"},{label:"交期",width:"150",prop:"requiredTime"},{label:"采购方",width:"150",prop:"purchaser"},{label:"供应商",width:"150",prop:"supplier"},{label:"下单日期",width:"150",prop:"creationTime"},{label:"单价(元/个)",width:"150",prop:"price"},{label:"备注1",width:"150",prop:"comment2"}],dialogImageUrl:"",selectData:[],dialogVisible:!1,getRelatedHook:{guid:"",pageSize:10,pageNumber:1},deleteData:[],isContainBlank:!1}},created:function(){this.inital()},methods:{inital:function(){var t=this;void 0===this.$route.query.iid||(this.getRelatedHook.guid=this.$route.query.iid,Object(a["c"])(this.getRelatedHook).then((function(e){t.tableData=e.result.hookDto,t.tableData.forEach((function(t,e){t.index=e}))})))},rowclick:function(t,e){this.selectData=t},insert:function(){var t=new c["a"](this.getRelatedHook.guid);this.tableData.push(t),this.tableData.forEach((function(t,e){t.index=e}))},remove:function(){var t=this,e=this.selectData;if(0==e.length)this.$message.error("请先选择删除项！");else{var r=new Array(e.length),n=new Array(e.length);e.forEach((function(t,e){r[e]=t.hook_Order_DetailId,n[e]=t.index})),n=Object(o["a"])(n),n.forEach((function(e){t.tableData.splice(e,1)})),this.deleteData=r}},delete:function(){var t=this;Object(a["a"])(this.deleteData).then((function(e){e.success&&t.$message.success("删除成功")}))},validation:function(){var t=this;try{this.tableData.forEach((function(e,r){for(var n in e){if(""===e[n])throw t.$message.error("第"+(r+1)+"行含有空字符串"),t.isContainBlank=!0,new Error("End Loop");t.isContainBlank=!1}}))}catch(e){}},submit:function(){var t=this;this.isContainBlank||(this.delete(),Object(a["d"])(this.tableData).then((function(e){e.success&&t.$router.push("/hook")})))},cancel:function(){this.$router.go(-1)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0}}},u=s,l=(r("b294"),r("2877")),d=Object(l["a"])(u,n,i,!1,null,"07d2de50",null);e["default"]=d.exports},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),a=r("a691"),o=r("50c4"),c=r("7b0b"),s=r("65f0"),u=r("8418"),l=r("1dde"),d=r("ae40"),f=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,b=Math.min,m=9007199254740991,w="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var r,n,l,d,f,p,v=c(this),g=o(v.length),y=i(t,g),k=arguments.length;if(0===k?r=n=0:1===k?(r=0,n=g-y):(r=k-2,n=b(h(a(e),0),g-y)),g+r-n>m)throw TypeError(w);for(l=s(v,n),d=0;d<n;d++)f=y+d,f in v&&u(l,d,v[f]);if(l.length=n,r<n){for(d=y;d<g-n;d++)f=d+n,p=d+r,f in v?v[p]=v[f]:delete v[p];for(d=g;d>g-n+r;d--)delete v[d-1]}else if(r>n)for(d=g-n;d>y;d--)f=d+n-1,p=d+r-1,f in v?v[p]=v[f]:delete v[p];for(d=0;d<r;d++)v[d+y]=arguments[d+2];return v.length=g-n+r,l}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),a=r("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var r=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:s,d=a(e,1)?e[1]:void 0;return c[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,l,d)}))}},af7c:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("4160"),r("159b");function n(t){return t.sort((function(t,e){return t<e?1:-1})),t}},b294:function(t,e,r){"use strict";r("4dda")},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),o=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(p,h,b,m){for(var w,v,g=a(p),y=i(g),k=n(h,b,3),x=o(y.length),S=0,L=m||c,E=e?L(p,x):r?L(p,0):void 0;x>S;S++)if((f||S in y)&&(w=y[S],v=k(w,S,g),t))if(e)E[S]=v;else if(v)switch(t){case 3:return!0;case 5:return w;case 6:return S;case 2:s.call(E,w)}else if(l)return!1;return d?-1:u||l?l:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d2b5:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("d4ec");r("af7c");var i=function t(e){Object(n["a"])(this,t),this.orderNumber="",this.salesManName="",this.customerName="",this.productId="",this.hookName="",this.hookPictureLoc="string",this.number="",this.requiredTime="",this.purchaser="",this.supplier="",this.creationTime="",this.price="",this.comment2="",this.hook_Order_DetailId=0,this.hook_Order_Id=0,this.hookId=0,this.hookState="完成",this.releatedHookGuid=e}},d4ec:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-44ad3f5b.c0ef1236.js.map