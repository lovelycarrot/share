(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-rankList"],{1618:function(t,A,e){"use strict";e.r(A);var a=e("3b71"),n=e("4bc6");for(var r in n)"default"!==r&&function(t){e.d(A,t,function(){return n[t]})}(r);e("c114");var i,o=e("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"0a3248b6",null,!1,a["a"],i);A["default"]=l.exports},"3b71":function(t,A,e){"use strict";var a,n=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("v-uni-view",{staticClass:"product-detail"},[e("head-search",{attrs:{transparentNav:!0,cancelShow:!1,title:t.title,color:["#ffffff","#333333"],transparent:"auto",scrollEvent:t.scrollEvent}}),e("v-uni-view",{staticClass:"hot-product"},[e("v-uni-view",{staticClass:"hot-title"},[e("v-uni-view",{staticClass:"hot-data"},[t._v("主题名称")]),e("v-uni-view",{staticClass:"hot-tips"},[t._v(t._s(t.rankIntroduce))])],1),e("v-uni-view",{staticClass:"product-desc"},[e("v-uni-text",{staticClass:"desc"},[t._v(t._s(t.proTitle))]),e("v-uni-text",{staticClass:"desc"},[t._v(t._s(t.proRight))])],1),e("v-uni-view",{staticClass:"hot-list"},t._l(t.listData,function(A,a){return e("v-uni-view",{key:a,staticClass:"product-list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProductDetail(A)}}},[e("v-uni-view",{staticClass:"left-show"},[e("v-uni-text",{staticClass:"product-icon"},[t._v("NO."+t._s(a+1))]),e("v-uni-view",{staticClass:"middle-content"},[e("v-uni-view",{staticClass:"middle-major"},[t._v(t._s(A.cpName))]),e("v-uni-view",{staticClass:"middle-subhead"},["3"==A.cpType?e("v-uni-text",{staticClass:"product-tag"},[t._v(t._s("1"==A.insuranceType?"财产":"2"==A.insuranceType?"意外":"3"==A.insuranceType?"人寿":"4"==A.insuranceType?"养老":"健康"))]):t._e(),"2"==A.cpType&&""!=A.fxLevel?e("v-uni-text",{staticClass:"product-tag"},[t._v(t._s(1==A.fxLevel?"低风险":2==A.fxLevel?"中低风险":3==A.fxLevel?"中风险":4==A.fxLevel?"中高风险":5==A.fxLevel?"高风险":"R"+A.fxLevel))]):t._e(),"1"==A.cpType&&""!=A.fxLevel?e("v-uni-text",{staticClass:"product-tag"},[t._v(t._s(1==A.fxLevel?"保守型":2==A.fxLevel?"稳健型":3==A.fxLevel?"平衡型":4==A.fxLevel?"成长型":5==A.fxLevel?"进取型":"R"+A.fxLevel))]):t._e(),e("v-uni-text",{staticClass:"show-company",class:"3"==A.cpType?"middle-insu":""},[t._v(t._s("3"==A.cpType?A.companyName:"1"==A.cpType?A.cpDjm:A.fundCode))]),"3"==A.cpType?e("v-uni-text",{staticClass:"show-insu"},[t._v(t._s(A.companyGrade))]):t._e()],1)],1)],1),"3"!=A.cpType?e("v-uni-text",{staticClass:"right-icon"},[t._v(t._s(A.return3Year)+t._s("1"==A.cpType?""==A.return3Year?"":"%":""))]):t._e()],1)}),1)],1)],1)},r=[];e.d(A,"b",function(){return n}),e.d(A,"c",function(){return r}),e.d(A,"a",function(){return a})},"4bc6":function(t,A,e){"use strict";e.r(A);var a=e("cf19"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(A,t,function(){return a[t]})}(r);A["default"]=n.a},5161:function(t,A){t.exports="data:image/png;base64,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"},6632:function(t,A,e){var a=e("b041");A=t.exports=e("2350")(!1),A.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* uni-list */.product-detail[data-v-0a3248b6]{width:100%;background:url('+a(e("5161"))+");background-size:100% %?276?%;background-repeat:no-repeat;overflow:hidden;padding:0 %?34?%;box-sizing:border-box}.product-detail .hot-product[data-v-0a3248b6]{background:#fff;box-shadow:0 0 33px 0 rgba(0,0,0,.05);border-radius:%?12?%;margin-top:%?164?%}.product-detail .hot-product .hot-title[data-v-0a3248b6]{margin:0 %?34?%;padding:%?50?% 0 %?34?%;border-bottom:1px dashed #d8d8d8}.product-detail .hot-product .hot-title .hot-data[data-v-0a3248b6]{font-family:PingFangSC-Medium;font-size:18px;color:#333;height:%?50?%;line-height:%?50?%}.product-detail .hot-product .hot-title .hot-tips[data-v-0a3248b6]{margin-top:%?34?%;font-size:13px;color:#666}.product-detail .hot-product .product-desc[data-v-0a3248b6]{margin:%?50?% %?34?% 0;padding-bottom:%?34?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #eee}.product-detail .hot-product .product-desc .desc[data-v-0a3248b6]{display:inline-block;font-size:12px;color:#999;line-height:%?32?%}.product-detail .hot-product .hot-list .product-list[data-v-0a3248b6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?33?% 0;margin:0 %?34?%;border-bottom:1px solid #eee}.product-detail .hot-product .hot-list .product-list .left-show[data-v-0a3248b6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.product-detail .hot-product .hot-list .product-list .left-show .product-icon[data-v-0a3248b6]{font-size:15px;color:#999;height:%?92?%;display:inline-block;vertical-align:top}.product-detail .hot-product .hot-list .product-list .left-show .middle-content[data-v-0a3248b6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?40?%}.product-detail .hot-product .hot-list .product-list .left-show .middle-content .middle-major[data-v-0a3248b6]{font-family:PingFangSC-Medium;font-size:15px;color:#333;font-weight:600;height:%?42?%;line-height:%?42?%;width:%?360?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.product-detail .hot-product .hot-list .product-list .left-show .middle-content .middle-subhead[data-v-0a3248b6]{margin-top:%?10?%;font-size:14px;color:#999;height:%?40?%;line-height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.product-detail .hot-product .hot-list .product-list .left-show .middle-content .middle-subhead .product-tag[data-v-0a3248b6]{background:rgba(210,179,153,.1);border-radius:3px;margin-right:%?20?%;font-size:12px;color:#d2b399;padding:%?5?% %?10?%;min-width:%?80?%;display:inline-block}.product-detail .hot-product .hot-list .product-list .left-show .middle-content .middle-subhead .show-company[data-v-0a3248b6]{display:inline-block;width:%?160?%!important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.product-detail .hot-product .hot-list .product-list .left-show .middle-content .middle-subhead .middle-insu[data-v-0a3248b6]{width:%?260?%!important}.product-detail .hot-product .hot-list .product-list .left-show .middle-content .middle-subhead .show-insu[data-v-0a3248b6]{margin-left:%?20?%;background-image:-webkit-linear-gradient(left,#e6c494,#c8915b);background-image:linear-gradient(90deg,#e6c494,#c8915b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:%?20?%;letter-spacing:%?5?%;font-weight:700}.product-detail .hot-product .hot-list .product-list .right-icon[data-v-0a3248b6]{font-size:15px;color:#a32629;width:%?160?%;display:inline-block;text-align:right}.product-detail .hot-product .hot-list .product-list:first-child .product-icon[data-v-0a3248b6]{color:#a32629}.product-detail .hot-product .hot-list .product-list:nth-child(2) .product-icon[data-v-0a3248b6]{color:#67738e}.product-detail .hot-product .hot-list .product-list:nth-child(3) .product-icon[data-v-0a3248b6]{color:#d2b399}.product-detail .hot-product .hot-list .product-list[data-v-0a3248b6]:last-child{border:0!important}",""])},c114:function(t,A,e){"use strict";var a=e("f2cf"),n=e.n(a);n.a},cf19:function(t,A,e){"use strict";var a=e("288e");Object.defineProperty(A,"__esModule",{value:!0}),A.default=void 0,e("6b54");var n=a(e("59ad")),r=a(e("f499")),i=a(e("dba6")),o={onLoad:function(t){this.rankType=t.type,this.rankId=t.id,this.rankIntroduce=t.introduce,this.come=t.come,"1"==this.rankType?(this.title="理财榜单",this.proTitle="理财名称",this.proRight="近三年收益"):"2"==this.rankType?(this.title="基金榜单",this.proTitle="基金名称",this.proRight="近三年收益"):(this.title="保险榜单",this.proTitle="保险名称",this.proRight="")},data:function(){return{buttonGroup:{isShow:!0,buttonRight:"分享"},proTitle:"",proRight:"",listData:[],pageSize:"10",pageNum:"1",rankType:"",rankId:"",rankIntroduce:"",title:"",levelTxt:"",shareList:[{icon:"/static/sharemenu/wx.png",text:"微信好友"},{icon:"/static/sharemenu/pyq.png",text:"朋友圈"},{icon:"/static/sharemenu/weibo.png",text:"微博"},{icon:"/static/sharemenu/qq.png",text:"QQ"}],come:"",scrollEvent:0}},onPageScroll:function(t){this.scrollEvent=t.scrollTop},onReachBottom:function(){++this.pageNum,this.getList()},mounted:function(){this.getList()},methods:{getList:function(){var t=this;uni.showLoading({title:"加载中...",mask:!0});var A={current:this.pageNum,size:this.pageSize,billboardId:this.rankId,billboardType:this.rankType,isLoading:!0};this.$api.selectProductByBoardId(A).then(function(A){uni.hideLoading();var e=A.data.records;console.log(e);for(var a=0;a<e.length;a++)""!=e[a].return3Year&&"1"==t.rankType&&(e[a].return3Year=t.fomatFloat(e[a].return3Year)),t.listData.push(e[a])})},goBack:function(){this.shareObj&&this.shareObj.shareMenu.isVisible()&&(this.shareObj.shareMenu.hide(),this.shareObj.alphaBg.hide()),"guide"===this.come&&uni.switchTab({url:"../index/index"})},groupRight:function(){var t=this,A={href:"bjcf://product/rankList?type=".concat(this.rankType,"&id=").concat(this.rankId,"&introduce=").concat(this.rankIntroduce),type:1,title:this.rankIntroduce,desc:this.rankIntroduce},e=this;this.shareObj=(0,i.default)(A,this.shareList,function(t){var a={href:A.href||"",title:A.title||"",summary:A.desc||"",success:function(t){},fail:function(t){}};switch(t){case 0:a.provider="weixin",a.scene="WXSceneSession",a.type=0,a.imageUrl=A.imgUrl||"",uni.share(a);break;case 1:a.provider="weixin",a.scene="WXSenceTimeline",a.type=0,a.imageUrl=A.imgUrl||"",uni.share(a);break;case 2:a.provider="sinaweibo",a.type=1,a.summary="【".concat(A.title,"】 "),delete a.imageUrl,uni.share(a);break;case 3:a.provider="qq",a.type=1,a.imageUrl=A.imgUrl||"",uni.share(a);break}e.shareObj.shareMenu.hide(),e.shareObj.alphaBg.hide()}),this.$nextTick(function(){t.shareObj.alphaBg.show(),t.shareObj.shareMenu.show()})},toProductDetail:function(t){if("1"==this.rankType){var A={pyId:t.cpDjm,current:1,size:10,order:5};this.$api.queryFinancialList(A).then(function(t){uni.navigateTo({url:"../financial/financialDetail?item=".concat(encodeURIComponent((0,r.default)(t.data.records[0])))})})}else"2"==this.rankType?uni.navigateTo({url:"../fund/fundDetail?fundId=".concat(t.fundId,"&fundClassId=").concat(t.fundClassId,"&cpDjm=").concat(t.cpDjm)}):uni.navigateTo({url:"../insurance/insuranceDetail?id=".concat(t.cpDjm)})},fomatFloat:function(t){var A=(0,n.default)(t);if(isNaN(A))return!1;A=Math.round(t*Math.pow(10,2))/Math.pow(10,2);var e=A.toString(),a=e.indexOf(".");a<0&&(a=e.length,e+=".");while(e.length<=a+2)e+="0";return e}}};A.default=o},dba6:function(t,A,e){"use strict";function a(t,A,e){var a=plus.screen.resolutionWidth,n=25,r=25,i=55,o=55,l=10,d=12,s=Math.floor(a/(i+r)),p=(a-(i+r)*s-r)/(s+1),c=r+p,u=i+c,f=o+l+d+n,v=o+l,b=new plus.nativeObj.View("alphaBg",{top:"0px",left:"0px",height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0.5)"});b.addEventListener("click",function(){b.hide(),h.hide()});var h=new plus.nativeObj.View("shareMenu",{bottom:"0px",left:"0px",height:Math.ceil(A.length/s)*f+n+44+1+"px",width:"100%",backgroundColor:"rgb(255,255,255)"});return h.draw([{tag:"rect",color:"#e7e7e7",position:{top:"0px",height:"1px"}},{tag:"font",id:"sharecancel",text:"取消分享",textStyles:{size:"14px"},position:{bottom:"0px",height:"44px"}},{tag:"rect",color:"#e7e7e7",position:{bottom:"45px",height:"1px"}}]),A.map(function(t,A){var e=(new Date).getTime(),a=Math.floor(A/s),r=A%s,o=[{src:t.icon,id:1e3*Math.random()+e,tag:"img",position:{top:a*f+n,left:r*u+c,width:i,height:i}},{text:t.text,id:1e3*Math.random()+e,tag:"font",textStyles:{size:d},position:{top:a*f+v,left:r*u+c,width:i,height:i}}];h.draw(o)}),h.addEventListener("click",function(t){if(t.screenY>plus.screen.resolutionHeight-44)b.hide(),h.hide();else if(t.clientX<5||t.clientX>a-5||t.clientY<5);else{var A=t.clientX,n=t.clientY,r=Math.floor(A/u),i=Math.floor(n/f),o=r+i*s;e&&e(o)}}),{alphaBg:b,shareMenu:h}}Object.defineProperty(A,"__esModule",{value:!0}),A.default=void 0;var n=a;A.default=n},f2cf:function(t,A,e){var a=e("6632");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("1d62fc4f",a,!0,{sourceMap:!1,shadowMode:!1})}}]);