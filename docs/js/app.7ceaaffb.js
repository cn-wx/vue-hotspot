(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],p=0,f=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},n={app:0},s=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("6cc3")},"0839":function(t,e,o){},"1b09":function(t,e,o){},"6cc3":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("img",{attrs:{alt:"Vue logo",src:o("c612")}}),t._m(0),i("p",{staticClass:"desc"},[t._v("Hotspot component for Vue.js.")]),i("section",[i("div",{staticClass:"container"},[i("div",{staticClass:"text"},[t._v("Editable: "+t._s(t.hotspotConfig1.editable)+" | interactivity: Click")]),i("v-hotspot",{attrs:{"init-options":t.hotspotConfig1},on:{"save-data":t.saveData,"after-delete":t.afterDelete}}),i("toggle",{attrs:{label:"Change Editable","hotspot-config":t.hotspotConfig1},on:{"change-editable":t.changeEditable}})],1)]),i("section",[i("div",{staticClass:"container"},[i("div",{staticClass:"text"},[t._v("Editable: "+t._s(t.hotspotConfig2.editable)+" | interactivity: Hover")]),i("v-hotspot",{attrs:{"init-options":t.hotspotConfig2},on:{"save-data":t.saveData,"after-delete":t.afterDelete}}),i("toggle",{attrs:{label:"Change Editable","hotspot-config":t.hotspotConfig2},on:{"change-editable":t.changeEditable}})],1)]),t._m(1)])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[o("a",{attrs:{href:"https://github.com/cn-wx/vue-hotspot"}},[t._v("Vue-Hotspot")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("a",{attrs:{href:"//github.com/cn-wx"}},[t._v("@James Wang")]),t._v("|"),o("a",{attrs:{href:"//github.com/cn-wx/vue-hotspot/blob/master/LICENSE"}},[t._v("MIT License")]),t._v("|"),o("a",{attrs:{href:"//github.com/cn-wx/vue-hotspot"}},[t._v("View on GitHub")])])}],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.config?o("div",{staticClass:"ui__vue_hotspot"},[o("img",{staticClass:"ui__vue_hotspot_background_image",attrs:{src:t.config.image,alt:"Hotspot Image"},on:{load:t.successLoadImg}}),t.config.editable?o("span",{staticClass:"ui__vue_hotspot_overlay",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addHotspot(e)}}},[o("p",[t._v("Please Click The Image To Add Hotspots.")])]):t._e(),t._l(t.config.data,function(e,i){return o("div",{key:i,staticClass:"ui__vue_hotspot_hotspot",class:"ui__vue_hotspot_hotspot_"+i,style:t.getHotspotPosition(e),on:{mouseenter:function(e){"hover"===t.config.interactivity&&t.toggleClass(i)},mouseleave:function(e){"hover"===t.config.interactivity&&t.toggleClass(i)},click:function(e){"click"===t.config.interactivity&&t.toggleClass(i)}}},[o("div",[o("div",{staticClass:"ui__vue_hotspot_title"},[t._v(t._s(e["Title"]))]),o("div",{staticClass:"ui__vue_hotspot_message"},[t._v(t._s(e["Message"]))])])])}),o("div",{staticClass:"ui__vue_hotspot_buttons_box"},[o("div",{staticClass:"ui__vue_hotspot_buttons",class:t.config&&t.config.editable?"active":""},[o("button",{staticClass:"ui__vue_hotspot_save",on:{click:t.saveAllHotspots}},[t._v("Save")]),o("button",{staticClass:"ui__vue_hotspot_remove",on:{click:t.removeAllHotspots}},[t._v("Remove")])])])],2):t._e()])},r=[],c=(o("8e6e"),o("ac6a"),o("456d"),o("bd86"));function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,i)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(o,!0).forEach(function(e){Object(c["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var p={props:{initOptions:Object},data:function(){return{defaultOptions:{data:[],image:"https://via.placeholder.com/600x500",editable:!0,interactivity:"hover",schema:[{property:"Title",default:"Vue Hotspot"},{property:"Message",default:"This is a Vue Hotspot Component which lets you create hotspot. "}]},config:null}},methods:{init:function(){window.addEventListener("resize",this.resizeHotspot)},getHotspotPosition:function(t){var e=this.$el.querySelector(".ui__vue_hotspot"),o=e.querySelector(".ui__vue_hotspot_background_image"),i=o.clientHeight,n=o.clientWidth;return"\n        top: ".concat(t.y*i/100+(o.offsetTop-e.clientTop),"px;\n        left: ").concat(t.x*n/100+(o.offsetLeft-e.clientLeft),"px;\n      ")},resizeHotspot:function(){var t=this.$el.querySelector(".ui__vue_hotspot"),e=t.querySelector(".ui__vue_hotspot_overlay");if(e){var o=t.querySelector(".ui__vue_hotspot_background_image");e.style.height="".concat(o.clientHeight/t.clientHeight*100,"%"),e.style.width="".concat(o.clientWidth/t.clientWidth*100,"%"),e.style.left="".concat(o.offsetLeft-t.clientLeft,"px"),e.style.top="".concat(o.offsetTop-t.clientTop,"px")}},setOptions:function(){this.config=u({},this.defaultOptions,{},this.initOptions)},successLoadImg:function(t){!0===t.target.complete&&this.resizeHotspot()},addHotspot:function(t){for(var e=this.$el.querySelector(".ui__vue_hotspot_overlay"),o=t.offsetX,i=t.offsetY,n=e.offsetHeight,s=e.offsetWidth,a={x:o/s*100,y:i/n*100},r=this.config.schema,c=0;c<r.length;c++){var l=r[c],u=prompt("Please enter ".concat(l.property),l.default);if(null===u)return;a[l.property]=u}this.config.data.push(a)},saveAllHotspots:function(){this.$emit("save-data",this.config.data)},removeAllHotspots:function(){this.config.data=[],this.$emit("after-delete")},toggleClass:function(t){var e=this.$el.querySelector(".ui__vue_hotspot_hotspot_".concat(t));e.classList.toggle("active")}},mounted:function(){this.initOptions&&(this.setOptions(),this.init())},watch:{initOptions:{handler:function(t,e){var o=this;this.setOptions(),this.$nextTick(function(){o.resizeHotspot()})},deep:!0}}},f=p,h=(o("ab37"),o("2877")),g=Object(h["a"])(f,a,r,!1,null,null,null),v=g.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toggle_button"},[o("p",{staticClass:"label"},[t._v(t._s(t.label)+":  ")]),o("p",[o("label",{staticClass:"switch"},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.hotspotConfig.editable},on:{change:t.handleToggleChange}}),o("span",{staticClass:"slider round"})])])])},d=[],b={props:{label:String,hotspotConfig:Object},methods:{handleToggleChange:function(){this.$emit("change-editable",this.hotspotConfig)}}},m=b,y=(o("761c"),Object(h["a"])(m,_,d,!1,null,null,null)),C=y.exports,O={components:{"v-hotspot":v,toggle:C},data:function(){return{hotspotConfig1:{image:"https://about.unimelb.edu.au/__data/assets/image/0022/92911/varieties/large.jpg",editable:!0,interactivity:"click"},hotspotConfig2:{image:"https://about.unimelb.edu.au/__data/assets/image/0013/10840/varieties/large.jpg",editable:!1,interactivity:"hover"}}},methods:{changeEditable:function(t){t&&(t.editable=!t.editable)},saveData:function(t){console.log(t)},afterDelete:function(){console.log("Do something after delete ...")}}},w=O,j=(o("f888"),Object(h["a"])(w,n,s,!1,null,null,null)),x=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(x)}}).$mount("#app")},"761c":function(t,e,o){"use strict";var i=o("0839"),n=o.n(i);n.a},"8f1a":function(t,e,o){},ab37:function(t,e,o){"use strict";var i=o("8f1a"),n=o.n(i);n.a},c612:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},f888:function(t,e,o){"use strict";var i=o("1b09"),n=o.n(i);n.a}});
//# sourceMappingURL=app.7ceaaffb.js.map