(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f69719a"],{"02e0":function(t,e,i){t.exports=i.p+"img/pingtung.34027041.jpg"},"18d4":function(t,e,i){t.exports=i.p+"img/kaohsiung.2e93d9c7.jpg"},"212b":function(t,e,i){t.exports=i.p+"img/food.2d385e3c.jpg"},2472:function(t,e,i){},"2be2":function(t,e,i){"use strict";var a=i("e017"),n=i.n(a),s=i("21a1"),o=i.n(s),c=new n.a({id:"locate",use:"locate-usage",viewBox:"0 0 16 20",content:'<symbol viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="locate">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8 19.7777C8 19.7777 16 14.4444 16 8.22217C16 6.10044 15.1571 4.06561 13.6569 2.56531C12.1566 1.06502 10.1217 0.222168 8 0.222168C5.87827 0.222168 3.84344 1.06502 2.34315 2.56531C0.842855 4.06561 0 6.10044 0 8.22217C0 14.4444 8 19.7777 8 19.7777ZM10.6676 8.22236C10.6676 9.69512 9.47364 10.889 8.00088 10.889C6.52812 10.889 5.33421 9.69512 5.33421 8.22236C5.33421 6.7496 6.52812 5.55569 8.00088 5.55569C9.47364 5.55569 10.6676 6.7496 10.6676 8.22236Z" fill="currentColor" />\n</symbol>'});o.a.add(c)},"2d1e":function(t,e,i){var a={"./activity.jpg":"e9dc","./chiayi.jpg":"b54a","./food.jpg":"212b","./hsinchu.jpg":"abbe","./hualien.jpg":"5d42","./kaohsiung.jpg":"18d4","./nantou.jpg":"b932","./new-taipei.jpg":"7924","./penghu.jpg":"a2d1","./pingtung.jpg":"02e0","./taichung.jpg":"da56","./taipei.jpg":"af52","./taitung.jpg":"f52f","./taoyuan.jpg":"3400","./yilan.jpg":"951e"};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="2d1e"},3400:function(t,e,i){t.exports=i.p+"img/taoyuan.23213bc4.jpg"},"56c0":function(t,e,i){"use strict";var a=i("e017"),n=i.n(a),s=i("21a1"),o=i.n(s),c=new n.a({id:"triTag",use:"triTag-usage",viewBox:"0 0 20 17",content:'<symbol viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" id="triTag">\n<path d="M10 0L0 16.1905H20L10 0Z" fill="#FF1D6C" />\n</symbol>'});o.a.add(c)},"5d42":function(t,e,i){t.exports=i.p+"img/hualien.5e718133.jpg"},7924:function(t,e,i){t.exports=i.p+"img/new-taipei.6f158666.jpg"},"7fb0":function(t,e,i){"use strict";i("f66c")},"951e":function(t,e,i){t.exports=i.p+"img/yilan.df0d4c40.jpg"},a2d1:function(t,e,i){t.exports=i.p+"img/penghu.3b91d7fd.jpg"},abbe:function(t,e,i){t.exports=i.p+"img/hsinchu.7f2bf5fd.jpg"},af52:function(t,e,i){t.exports=i.p+"img/taipei.1c4c1893.jpg"},b1ad:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"list-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"title-wrapper"},[i("Icon",{staticClass:"icon",attrs:{name:"triTag"}}),i("h2",{staticClass:"title"},[t._v(t._s(t.title))])],1),i("div",{staticClass:"item-wrapper"},t._l(t.list,(function(t){return i("LargeCard",{key:t.id,staticClass:"item",attrs:{item:t}})})),1)])},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"large-card",on:{click:function(e){return t.handleModalStatus(!0)}}},[i("div",{staticClass:"img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.Picture.PictureUrl1,expression:"item.Picture.PictureUrl1"}]})]),i("div",{staticClass:"content-wrapper"},[i("h3",{staticClass:"name"},[t._v(t._s(t.item.name))]),i("p",{staticClass:"description"},[t._v(t._s(t.item.Description))]),i("div",{staticClass:"locate"},[i("Icon",{staticClass:"icon",attrs:{name:"locate"}}),i("div",{staticClass:"locate-name"},[t._v(t._s(t.item.Location))])],1)]),i("div",{staticClass:"shadow left"}),i("div",{staticClass:"shadow right"})])},o=[],c=i("5530"),r=i("cdae"),p=(i("2be2"),i("2f62")),u={name:"LargeCard",components:{Icon:r["a"]},props:{item:Object},data:function(){return{}},computed:{},methods:Object(c["a"])(Object(c["a"])({},Object(p["c"])(["setModalStatus"])),{},{handleModalStatus:function(t){this.setModalStatus({status:t,name:"CardDetail",data:this.item})}})},l=u,d=(i("7fb0"),i("2877")),g=Object(d["a"])(l,s,o,!1,null,"10b2a7f4",null),f=g.exports,m=(i("56c0"),{name:"LargeCardList",components:{LargeCard:f,Icon:r["a"]},props:{title:String,list:Array},data:function(){return{}},computed:{},methods:{getImage:function(t){return i("2d1e")("./".concat(t,".jpg"))}}}),b=m,j=(i("b804"),Object(d["a"])(b,a,n,!1,null,"152b88a8",null));e["default"]=j.exports},b54a:function(t,e,i){t.exports=i.p+"img/chiayi.4143de6b.jpg"},b804:function(t,e,i){"use strict";i("2472")},b932:function(t,e,i){t.exports=i.p+"img/nantou.daec6180.jpg"},da56:function(t,e,i){t.exports=i.p+"img/taichung.eb3a6642.jpg"},e9dc:function(t,e,i){t.exports=i.p+"img/activity.eebe81aa.jpg"},f52f:function(t,e,i){t.exports=i.p+"img/taitung.8bcde433.jpg"},f66c:function(t,e,i){}}]);