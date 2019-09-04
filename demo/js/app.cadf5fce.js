(function(t){function e(e){for(var n,a,r=e[0],c=e[1],u=e[2],p=0,f=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("6cc3")},"1b09":function(t,e,o){},"6cc3":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("img",{attrs:{alt:"Vue logo",src:o("c612")}}),t._m(0),n("p",{staticClass:"desc"},[t._v("Hotspot component for Vue.js.")]),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"text"},[t._v("Editable: "+t._s(t.hotspotConfig1.editable))]),n("hotspot",{attrs:{initOptions:t.hotspotConfig1}}),n("div",{staticClass:"toggle_button",staticStyle:{display:"flex","justify-content":"center"}},[n("p",{staticStyle:{"font-size":"1.3em"}},[t._v("Change Editable:  ")]),n("p",[n("label",{staticClass:"switch"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.hotspotConfig1.editable},on:{change:function(e){return t.changeEditable(t.hotspotConfig1)}}}),n("span",{staticClass:"slider round"})])])])],1)]),t._m(1)])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[o("a",{attrs:{href:"https://github.com/cn-wx/vue-hotspot"}},[t._v("Vue-Hotspot")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("a",{attrs:{href:"//github.com/cn-wx"}},[t._v("@James Wang")]),t._v("|"),o("a",{attrs:{href:"//github.com/cn-wx/vue-hotspot/blob/master/LICENSE"}},[t._v("MIT License")]),t._v("|"),o("a",{attrs:{href:"//github.com/cn-wx/vue-hotspot"}},[t._v("View on GitHub")])])}],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.config?o("div",{staticClass:"ui__vue_hotspot"},[o("img",{staticClass:"ui__vue_hotspot_background_image",attrs:{src:t.config.image,alt:"Hotspot Image"},on:{load:t.successLoadImg}}),t.config.editable?o("span",{staticClass:"ui__vue_hotspot_overlay",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addHotspot(e)}}},[o("p",[t._v("Please Click The Image To Add Hotspots.")])]):t._e(),t._l(t.config.data,function(e,n){return o("div",{key:n,staticClass:"ui__vue_hotspot_hotspot",style:t.getHotspotStyle(e)},[o("div",[o("div",{staticClass:"ui__vue_hotspot_title"},[t._v(t._s(e["Title"]))]),o("div",{staticClass:"ui__vue_hotspot_message"},[t._v(t._s(e["Message"]))])])])})],2):t._e(),t.config&&t.config.editable?o("div",{staticClass:"ui__vue_hotspot_buttons"},[o("button",{staticClass:"ui__vue_hotspot_save"},[t._v("Save")]),o("button",{staticClass:"ui__vue_hotspot_remove"},[t._v("Remove")])]):t._e()])},r=[],c={props:{initOptions:Object},data:function(){return{defaultOptions:{data:[],image:"https://via.placeholder.com/600x500",editable:!0,interactivity:"hover",listenOnResize:!0,schema:[{property:"Title",default:"jQuery Hotspot"},{property:"Message",default:"This is a Vue Hotspot Component which lets you create hotspot. "}]},config:null}},methods:{init:function(){window.addEventListener("resize",this.resizeHotspot)},getHotspotStyle:function(t){var e=document.querySelector(".ui__vue_hotspot"),o=document.querySelector(".ui__vue_hotspot_background_image"),n=o.clientHeight,i=o.clientWidth;return"\n        top: ".concat(t.y*n/100+(o.offsetTop-e.clientTop),"px;\n        left: ").concat(t.x*i/100+(o.offsetLeft-e.clientLeft),"px;\n      ")},resizeHotspot:function(){var t=document.querySelector(".ui__vue_hotspot"),e=document.querySelector(".ui__vue_hotspot_background_image"),o=document.querySelector(".ui__vue_hotspot_overlay");o.style.height="".concat(e.clientHeight/t.clientHeight*100,"%"),o.style.width="".concat(e.clientWidth/t.clientWidth*100,"%"),o.style.left="".concat(e.offsetLeft-t.clientLeft,"px"),o.style.top="".concat(e.offsetTop-t.clientTop,"px")},setOptions:function(){this.config=Object.assign({},this.defaultOptions,this.initOptions)},successLoadImg:function(t){!0===event.target.complete&&this.resizeHotspot()},addHotspot:function(t){for(var e=document.querySelector(".ui__vue_hotspot_overlay"),o=t.offsetX,n=t.offsetY,i=e.offsetHeight,s=e.offsetWidth,a={x:o/s*100,y:n/i*100},r=this.config.schema,c=0;c<r.length;c++){var u=r[c],l=prompt("Please enter ".concat(u.property),u.default);if(null===l)return;a[u.property]=l}this.config.data.push(a)}},mounted:function(){this.initOptions&&(this.setOptions(),this.init())},watch:{initOptions:{handler:function(t,e){var o=this;this.setOptions(),this.$nextTick(function(){o.resizeHotspot()})},deep:!0}}},u=c,l=(o("ab37"),o("2877")),p=Object(l["a"])(u,a,r,!1,null,null,null),f=p.exports,h={components:{hotspot:f},data:function(){return{hotspotConfig1:{image:"https://about.unimelb.edu.au/__data/assets/image/0022/92911/varieties/large.jpg",editable:!0},hotspotConfig2:{image:"https://about.unimelb.edu.au/__data/assets/image/0013/10840/varieties/large.jpg",editable:!1},hotspotCode1:"test 1",hotspotCode2:"test 2"}},methods:{changeEditable:function(t){t&&(t.editable=!t.editable)}}},_=h,d=(o("f888"),Object(l["a"])(_,i,s,!1,null,null,null)),v=d.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#app")},"8f1a":function(t,e,o){},ab37:function(t,e,o){"use strict";var n=o("8f1a"),i=o.n(n);i.a},c612:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},f888:function(t,e,o){"use strict";var n=o("1b09"),i=o.n(n);i.a}});
//# sourceMappingURL=app.cadf5fce.js.map