(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ac32ac4"],{"129d":function(t,e,a){"use strict";a("2dc3")},"159b":function(t,e,a){var i=a("da84"),n=a("fdbc"),r=a("17c2"),l=a("9112");for(var s in n){var o=i[s],c=o&&o.prototype;if(c&&c.forEach!==r)try{l(c,"forEach",r)}catch(u){c.forEach=r}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,n=a("a640"),r=a("ae40"),l=n("forEach"),s=r("forEach");t.exports=l&&s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var i=a("d039"),n=a("b622"),r=a("2d00"),l=n("species");t.exports=function(t){return r>=51||!i((function(){var e=[],a=e.constructor={};return a[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2dc3":function(t,e,a){},"3cc9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"plan"}},[a("div",{staticClass:"container-card"},[a("div",{staticClass:"header"},[t._v("表单名称: "),a("el-input",{model:{value:t.formAlias,callback:function(e){t.formAlias=e},expression:"formAlias"}})],1),a("el-row",[a("el-col",{attrs:{span:14}},[a("el-col",{attrs:{span:9}},[a("el-table",{staticStyle:{width:"245px"},attrs:{height:"150",data:t.tableData,border:""},on:{select:t.rowclick}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"name",label:"设计稿名称",width:"119"}})],1)],1),a("el-col",{staticClass:"header_left",attrs:{span:4}},[a("el-row",[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:"","on-change":t.uploadfile,"show-file-list":!1,"auto-upload":!1}},[a("el-button",{staticStyle:{width:"60"},attrs:{type:"primary"}},[t._v("上传设计稿")])],1)],1),a("el-row",[a("el-button",{staticStyle:{width:"60"},attrs:{type:"danger"},on:{click:t.deletefile}},[t._v("删除设计稿")])],1)],1)],1),a("el-col",{staticClass:"header_right",attrs:{span:9}},[a("el-button",{on:{click:t.insert}},[t._v("添加")]),a("el-button",{attrs:{type:"danger"},on:{click:t.remove}},[t._v("删除")])],1)],1),a("div",{staticClass:"middle"},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData,height:"350","header-cell-class-name":t.starAdd},on:{select:t.rowclick}},[t._v(" > "),a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"序号",type:"index",width:"55"}}),t._l(t.tableList1,(function(e){return a("el-table-column",{key:e.index,attrs:{label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(i){return[a("el-input",{model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[item.prop]"}})]}}],null,!0)})})),a("el-table-column",{attrs:{label:"照片",width:"200"}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[a("i",{staticClass:"el-icon-plus"})])],1),t._l(t.tableList2,(function(e){return a("el-table-column",{key:e.index,attrs:{label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(i){return[a("el-input",{model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[item.prop]"}})]}}],null,!0)})}))],2)],1),a("div",{staticClass:"footer"},[a("el-checkbox",{on:{change:t.checkChange},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("不对外发布")]),a("el-button",{attrs:{type:"info"},on:{click:t.cancel}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitDialogDisplay=!0}}},[t._v("提交")])],1)],1),a("el-dialog",{attrs:{width:"30%",title:"提交申请",visible:t.submitDialogDisplay},on:{"update:visible":function(e){t.submitDialogDisplay=e}}},[a("span",[t._v("将提交对当前页面的更改")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"info"},on:{click:function(e){t.submitDialogDisplay=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)]),a("el-dialog",{attrs:{id:"zoom",visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})]),a("el-dialog",{attrs:{width:"30%",title:"取消修改",visible:t.removeDisplay},on:{"update:visible":function(e){t.removeDisplay=e}}},[a("span",[t._v("将取消当前页面的更改，所有未提交的信息将会丢失")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"info"},on:{click:function(e){t.removeDisplay=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.toGroup}},[t._v("确 定")])],1)])],1)},n=[],r=(a("4160"),a("a434"),a("159b"),a("9940")),l=a("af7c"),s=a("d4ec"),o=function t(e,a,i,n){Object(s["a"])(this,t),this.id=e,this.alias=a,this.modelName="",this.samplePlanStateBatch=i,this.creationTime="2021-01-20",this.samplePlanBatch_Detail=n,this.modelState=0},c=function t(){Object(s["a"])(this,t),this.id=0,this.salesMan="",this.customer="",this.sampleNubmber="",this.sampleName="",this.proofImage="",this.machineType="",this.needleCount="",this.materialsRequired="",this.requiredZize="",this.sampleCount="",this.mainColor="",this.featureSewingTypePostProcessComment="",this.planWeight="",this.detectRequest="",this.planDeliveryTime="",this.sampleDeliveryTime="",this.actualSize="",this.sampleWight=""},u={data:function(){return{submitDialogDisplay:!1,checked:!1,removeDisplay:!1,tableData:[],tableList1:[{label:"样品号",prop:"sampleNubmber",width:"150"},{label:"业务员",prop:"salesMan",width:"150"},{label:"客户",prop:"customer",width:"150"},{label:"品名",prop:"sampleName",width:"150"}],tableList2:[{label:"要求机种",prop:"machineType",width:"150"},{label:"要求针数",prop:"needleCount",width:"150"},{label:"要求用料(表纱(表纱混率)+里纱)",prop:"materialsRequired",width:"150"},{label:"要求尺寸(脚底*上统)",prop:"requiredZize",width:"150"},{label:"样品数量",prop:"sampleCount",width:"150"},{label:"颜色(主色)",prop:"mainColor",width:"150"},{label:"功能性、缝头方式、后道备注",prop:"featureSewingTypePostProcessComment",width:"150"},{label:"企划克重",prop:"planWeight",width:"150"},{label:"注意点",prop:"detectRequest",width:"150"},{label:"希望交期",prop:"planDeliveryTime",width:"150"},{label:"样品交期",prop:"sampleDeliveryTime",width:"150"},{label:"实际尺寸",prop:"actualSize",width:"150"},{label:"实际克重",prop:"sampleWight",width:"150"}],tableData1:[],middleDeleteData:[],dialogImageUrl:"",visible:!1,formData:null,samplePlanStateBatch:0,selectData:[],deleteData:[],emptyobj:{number:"",samplenumber:"",salesman:"",client:"",typename:"",picture:"",typemachine:"",needle:"",material:"",data:"",status:"",operation:!0,size:"",weight:""},id:0,formAlias:""}},props:{object2:{type:Array,default:[]}},created:function(){this.inital()},methods:{inital:function(){var t=this;if(void 0===this.$route.query.iid);else{var e=this.$route.query.iid;Object(r["d"])(e).then((function(e){t.formData=e.result;var a=e.result.items[0];t.formAlias=a.alias,t.id=a.id,t.samplePlanStateBatch=a.samplePlanStateBatch,t.checked=0==t.samplePlanStateBatch,t.tableData=a.samplePlanBatch_Detail,t.addIndex(t.tableData)}))}},addIndex:function(t){t.forEach((function(t,e){t.index=e}))},uploadfile:function(t,e){this.tableData1=e;for(var a=0;a<this.tableData1.length;a++)this.tableData1[a].index=a},rowclick:function(t,e){this.selectData=t},remove:function(){var t=this,e=this.selectData;if(0==e.length)this.$message.error("请先选择删除项！");else{var a=new Array(e.length),i=new Array(e.length);e.forEach((function(t,e){a[e]=t.id,i[e]=t.index})),i=Object(l["a"])(i),i.forEach((function(e){t.tableData.splice(e,1)})),this.deleteData=a,this.addIndex(this.tableData)}},delete:function(){Object(r["b"])(this.deleteData).then((function(t){console.log(t)}))},submit:function(){var t=this,e=new o(this.id,this.alias,this.samplePlanStateBatch,this.tableData),a=new Array;a.push(e),void 0===this.$route.query.iid?Object(r["a"])(a).then((function(e){e.success&&t.$message.success("提交成功！")})):(this.delete(),Object(r["e"])(a).then((function(e){e.success&&t.$message.success("提交成功！")})))},cancel:function(){this.$router.go(-1)},deleteform:function(){for(var t=0;t<this.middleDeleteData.length;t++)this.tableData.splice(this.middleDeleteData[t].index,1);for(t=0;t<this.tableData.length;t++)this.tableData[t].index=t},insert:function(){var t=new c;if(0==this.selectData.length)this.tableData.push(t);else{var e=this.selectData[0].index;this.tableData.splice(e+1,0,t)}this.addIndex(this.tableData)},checkChange:function(){this.checked?this.samplePlanStateBatch=0:this.samplePlanStateBatch=1},deletefile:function(){for(var t=0;t<this.tableData2.length;t++)this.tableData1.splice(this.tableData2[t].index,1);for(t=0;t<this.tableData1.length;t++)this.tableData1[t].index=t},handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.visible=!0,console.log(this.visible)},toGroup:function(){window.location.reload()},starAdd:function(t){if(2===t.columnIndex||3===t.columnIndex||4===t.columnIndex||5===t.columnIndex||6===t.columnIndex)return"star"}}},p=u,d=(a("129d"),a("2877")),h=Object(d["a"])(p,i,n,!1,null,"5ee7eecf",null);e["default"]=h.exports},4160:function(t,e,a){"use strict";var i=a("23e7"),n=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"65f0":function(t,e,a){var i=a("861d"),n=a("e8b5"),r=a("b622"),l=r("species");t.exports=function(t,e){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?i(a)&&(a=a[l],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var i=a("c04e"),n=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var l=i(e);l in t?n.f(t,l,r(0,a)):t[l]=a}},9940:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return p})),a.d(e,"d",(function(){return h}));a("96cf");var i=a("1da1"),n=a("1bab");function r(t){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["a"])({method:"POST",url:"/api/BusinessUnit/GetAllSamplePlansBatchOverview",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function s(t){return o.apply(this,arguments)}function o(){return o=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["a"])({method:"POST",url:"/api/BusinessUnit/AddBatchSamplePlans",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function c(t){return u.apply(this,arguments)}function u(){return u=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["a"])({method:"PUT",url:"/api/BusinessUnit/UpdateBatchSamplePlans",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["a"])({method:"DELETE",url:"/api/BusinessUnit/DeleteBatchSamplePlans",params:{input:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["a"])({url:"/api/BusinessUnit/GetSingleSamplePlanBatch/Single",params:{input:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}},a434:function(t,e,a){"use strict";var i=a("23e7"),n=a("23cb"),r=a("a691"),l=a("50c4"),s=a("7b0b"),o=a("65f0"),c=a("8418"),u=a("1dde"),p=a("ae40"),d=u("splice"),h=p("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,m=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var a,i,u,p,d,h,w=s(this),y=l(w.length),g=n(t,y),D=arguments.length;if(0===D?a=i=0:1===D?(a=0,i=y-g):(a=D-2,i=m(f(r(e),0),y-g)),y+a-i>b)throw TypeError(v);for(u=o(w,i),p=0;p<i;p++)d=g+p,d in w&&c(u,p,w[d]);if(u.length=i,a<i){for(p=g;p<y-i;p++)d=p+i,h=p+a,d in w?w[h]=w[d]:delete w[h];for(p=y;p>y-i+a;p--)delete w[p-1]}else if(a>i)for(p=y-i;p>g;p--)d=p+i-1,h=p+a-1,d in w?w[h]=w[d]:delete w[h];for(p=0;p<a;p++)w[p+g]=arguments[p+2];return w.length=y-i+a,u}})},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var i=a("83ab"),n=a("d039"),r=a("5135"),l=Object.defineProperty,s={},o=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var a=[][t],c=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:o,p=r(e,1)?e[1]:void 0;return s[t]=!!a&&!n((function(){if(c&&!i)return!0;var t={length:-1};c?l(t,1,{enumerable:!0,get:o}):t[1]=1,a.call(t,u,p)}))}},af7c:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("4160"),a("159b");function i(t){return t.sort((function(t,e){return t<e?1:-1})),t}},b727:function(t,e,a){var i=a("0366"),n=a("44ad"),r=a("7b0b"),l=a("50c4"),s=a("65f0"),o=[].push,c=function(t){var e=1==t,a=2==t,c=3==t,u=4==t,p=6==t,d=5==t||p;return function(h,f,m,b){for(var v,w,y=r(h),g=n(y),D=i(f,m,3),S=l(g.length),x=0,k=b||s,C=e?k(h,S):a?k(h,0):void 0;S>x;x++)if((d||x in g)&&(v=g[x],w=D(v,x,y),t))if(e)C[x]=w;else if(w)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:o.call(C,v)}else if(u)return!1;return p?-1:c||u?u:C}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d4ec:function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return i}))},e8b5:function(t,e,a){var i=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-7ac32ac4.89fdb929.js.map