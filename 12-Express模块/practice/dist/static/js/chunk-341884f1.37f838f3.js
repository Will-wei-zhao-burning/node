(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-341884f1"],{"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),s=r("17c2"),a=r("9112");for(var o in i){var u=n[o],c=u&&u.prototype;if(c&&c.forEach!==s)try{a(c,"forEach",s)}catch(l){c.forEach=s}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),s=r("ae40"),a=i("forEach"),o=s("forEach");t.exports=a&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"61b8":function(t,e,r){"use strict";r("8871")},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),s=r("b622"),a=s("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"83eb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"plan"}},[r("div",{staticClass:"text-left"},[r("el-row",{staticClass:"serach-box"},[t._l(t.headerItems,(function(e){return r("el-col",{key:e,attrs:{span:4}},[r("el-col",{attrs:{span:7}},[t._v(t._s(e.label))]),r("el-col",{attrs:{span:16}},[r("el-input",{model:{value:t.storeQuery.customer,callback:function(e){t.$set(t.storeQuery,"customer",e)},expression:"storeQuery.customer"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.query},slot:"append"})],1)],1)],1)})),r("el-col",{attrs:{span:4}},[r("el-col",{attrs:{span:7}},[t._v("状态")]),r("el-col",{attrs:{span:16}},[r("el-select",{on:{change:t.query},model:{value:t.storeQuery.bookingListState,callback:function(e){t.$set(t.storeQuery,"bookingListState",e)},expression:"storeQuery.bookingListState"}},t._l(t.statusTypeList,(function(t){return r("el-option",{key:t.index,attrs:{value:t}})})),1)],1)],1),r("el-col",{attrs:{span:4}},[r("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.dataValue,callback:function(e){t.dataValue=e},expression:"dataValue"}})],1)],2),r("el-row",{staticClass:"serach-box"},[r("el-col",{attrs:{span:4}},[r("el-col",{attrs:{span:7}},[t._v("批量更新")]),r("el-col",{attrs:{span:16}},[r("el-select",{model:{value:t.selectStatus,callback:function(e){t.selectStatus=e},expression:"selectStatus"}},t._l(t.statusChangeList,(function(t){return r("el-option",{key:t.index,attrs:{value:t}})})),1)],1)],1),r("el-col",{staticClass:"btn-area",attrs:{span:8}},[r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"info"},on:{click:t.updateStatus}},[t._v("更新状态")])],1),r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"info"}},[t._v("导出")])],1),r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"info"},on:{click:t.newOrderStore}},[t._v("新增")])],1),r("el-col",{attrs:{span:6}},[r("el-button",{attrs:{type:"danger"},on:{click:t.remove}},[t._v("删除")])],1)],1)],1),r("el-row",[r("el-table",{attrs:{border:"",data:t.tableData},on:{select:t.rowclick}},[r("el-table-column",{attrs:{type:"selection",width:"50"}}),r("el-table-column",{attrs:{type:"index",width:"50",label:"序号",fixed:""}}),t._l(t.tableList,(function(t){return r("el-table-column",{key:t.index,attrs:{fixed:t.isFix||!1,label:t.label,prop:t.prop,width:t.width}})})),r("el-table-column",{attrs:{width:"140",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return t.edit(e)}}},[t._v("编辑")])]}}])})],2)],1)],1)])},i=[],s=(r("4160"),r("159b"),r("8a55")),a=r("ed95"),o=r("92f5"),u={data:function(){return{dataValue:null,statusTypeList:[],statusChangeList:[],selectStatus:null,statusType:null,selectData:[],headerItems:[{label:"客户",prop:"customer"},{label:"港口",prop:"shippingAddress"},{label:"订单号",prop:"orderNo"},{label:"货号",prop:"itemNo"}],tableList:[{label:"客户",prop:"customer",width:"100",isFix:"left"},{label:"港口",prop:"shippingAddress",width:"100",isFix:"left"},{label:"进仓日期",prop:"warehousingDate",isFix:"left"},{label:"订单号",prop:"orderNo",isFix:"left"},{label:"货号",prop:"itemNo",isFix:"left"},{label:"出货数",prop:"totalItemNo",width:"100",isFix:"left"},{label:"箱数",prop:"totalBoxNo",width:"100",isFix:"left"},{label:"状态",prop:"bookingListState",width:"100",isFix:"left"}],tableData:[],storeQuery:{pageNumber:0,pageSize:10,customer:"",shippingAddress:"",beginTime:"2020-12-23",endTime:"2021-12-23",orderNo:"",itemNo:"",bookingListState:"修改中"}}},watch:{dataValue:function(t){this.storeQuery.beginTime=t[0],this.storeQuery.endTime=t[1],this.query()}},created:function(){this.inital()},methods:{inital:function(){this.getOrderStore(this.storeQuery),this.getStatusList()},getStatusList:function(){var t=this;Object(a["a"])().then((function(e){e.success&&(t.statusTypeList=e.result,t.statusChangeList=e.result)}))},newOrderStore:function(){this.$router.push({path:"/newOrderStore"})},getOrderStore:function(t){var e=this;Object(s["c"])(t).then((function(t){t.success?(e.tableData=t.result.items,e.$message.success("获得订舱单列表成功")):e.$message.error("获得订舱单列表失败")}))},rowclick:function(t,e){this.selectData=t},query:function(){this.getOrderStore(this.storeQuery)},updateStatus:function(){var t=this,e=this.selectData;if(0==e.length)this.$message.error("请先选择项!");else{var r=new o["b"](e,this.selectStatus);Object(s["f"])(r).then((function(e){t.$message.success("更新状态成功")}))}},edit:function(t){this.$router.push({path:"/newOrderStore",query:{iid:t.row.id}})},remove:function(){var t=this,e=this.selectData;if(0==e.length)this.$message.error("请先选择项！");else{var r=new Array(e.length);e.forEach((function(t,e){r[e]=t.id})),Object(s["b"])(r).then((function(e){e.success&&t.$message.success("删除成功")}))}}}},c=u,l=(r("61b8"),r("2877")),p=Object(l["a"])(c,n,i,!1,null,"7589bee0",null);e["default"]=p.exports},8871:function(t,e,r){},"8a55":function(t,e,r){"use strict";r.d(e,"c",(function(){return s})),r.d(e,"f",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return p})),r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return b}));r("96cf");var n=r("1da1"),i=r("1bab");function s(t){return a.apply(this,arguments)}function a(){return a=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"POST",url:"/api/BusinessUnit/GetAllBookingList",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}function o(t){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"PUT",url:"/api/BusinessUnit/UpdateStateBookingList",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function c(t){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:"/api/BusinessUnit/GetSingleBookingList",params:{input:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"PUT",url:"/api/BusinessUnit/UpdateBookingList",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return d=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"DELETE",url:"/api/BusinessUnit/DeleteBookingList",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function b(t){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({method:"DELETE",url:"/api/BusinessUnit/DeleteBookingDetailList",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}},"92f5":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return s}));r("4160"),r("159b");var n=r("d4ec"),i=function t(e,r){Object(n["a"])(this,t);var i=new Array;e.forEach((function(t,e){i[e]=t.id})),this.ids=i,this.state=r},s=function t(){Object(n["a"])(this,t),this.id=0,this.detailId=0,this.contractNo="",this.orderNo="",this.listBookingListId=0,this.shipmentNumber="",this.boxNumber="",this.volume="",this.netWeight="",this.grossWeight="",this.poNo="",this.itemNo="",this.guestNo="",this.caseNo="",this.productName="",this.cpid="",this.size="",this.ratio="",this.barCode="",this.unitPrice="",this.trademarkQualityMark="",this.doubleGroup="",this.groupBox="",this.shipmentPKNumber="",this.length="",this.width="",this.height="",this.nwBox="",this.gwBox="",this.totalAmount="",this.note=""}},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),s=r("5135"),a=Object.defineProperty,o={},u=function(t){throw t};t.exports=function(t,e){if(s(o,t))return o[t];e||(e={});var r=[][t],c=!!s(e,"ACCESSORS")&&e.ACCESSORS,l=s(e,0)?e[0]:u,p=s(e,1)?e[1]:void 0;return o[t]=!!r&&!i((function(){if(c&&!n)return!0;var t={length:-1};c?a(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,l,p)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),s=r("7b0b"),a=r("50c4"),o=r("65f0"),u=[].push,c=function(t){var e=1==t,r=2==t,c=3==t,l=4==t,p=6==t,h=5==t||p;return function(f,d,b,m){for(var g,y,v=s(f),w=i(v),S=n(d,b,3),x=a(w.length),L=0,k=m||o,O=e?k(f,x):r?k(f,0):void 0;x>L;L++)if((h||L in w)&&(g=w[L],y=S(g,L,v),t))if(e)O[L]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:u.call(O,g)}else if(l)return!1;return p?-1:c||l?l:O}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d4ec:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ed95:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("96cf");var n=r("1da1"),i=r("1bab");function s(){return a.apply(this,arguments)}function a(){return a=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["a"])({url:"/api/Auth/GetCommonFormState"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-341884f1.37f838f3.js.map