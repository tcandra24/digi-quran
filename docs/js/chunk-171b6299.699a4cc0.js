(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-171b6299"],{"0798":function(t,e,o){"use strict";o("caad");var i=o("5530"),r=o("ade3"),s=(o("0c18"),o("10d2")),n=o("afdd"),a=o("9d26"),c=o("f2e7"),l=o("7560"),d=o("f40d"),u=o("58df"),h=o("d9bd");e["a"]=Object(u["a"])(s["a"],c["a"],d["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(r["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(a["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,o){},"8d91":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"indigo"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[o("v-icon",[t._v("mdi-close")])],1),o("v-toolbar-title",[t._v("All Tasks")])],1),o("v-container",{attrs:{fluid:""}},[0===t.count?o("div",[o("v-alert",{attrs:{outlined:"",color:"error",icon:"mdi-trash-can"}},[t._v(" Task Kosong! ")])],1):t._e(),t.count>0?o("v-list",{attrs:{"three-line":""}},[t._l(t.allTask,(function(e,i){return[o("v-list-item",{key:"task"+i},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(e.nama)+" "),parseInt(e.ayat)===parseInt(e.jmlAyat)?o("v-icon",{attrs:{dark:"",color:"success"}},[t._v("mdi-checkbox-marked-circle-outline")]):t._e()],1),o("v-list-item-subtitle",[t._v(" Ayat Ke "+t._s(e.ayat)+" / "+t._s(e.jmlAyat)+" ")])],1),e.ayat<e.jmlAyat?o("div",[o("v-list-item-action",{staticClass:"mr-5"},[o("v-btn",{attrs:{icon:"",small:"",rounded:"",depressed:""},on:{click:function(o){return t.showConfirm(e)}}},[o("v-icon",{attrs:{dark:"",color:"error"}},[t._v("mdi-close-circle")])],1)],1),o("v-list-item-action",[o("v-btn",{attrs:{icon:"",small:"",rounded:"",depressed:""},on:{click:function(o){return t.linkTo(e.nomor)}}},[o("v-icon",{attrs:{dark:"",color:"success"}},[t._v("mdi-link")])],1)],1)],1):o("div",[o("v-list-item-action",{staticClass:"mr-5"},[o("v-btn",{attrs:{icon:"",small:"",rounded:"",depressed:""},on:{click:function(o){return t.showConfirm(e)}}},[o("v-icon",{attrs:{dark:"",color:"error"}},[t._v("mdi-close-circle")])],1)],1)],1)],1)]}))],2):t._e()],1),[o("v-layout",{attrs:{row:"","justify-center":""}},[o("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:t.dialogConfirm,callback:function(e){t.dialogConfirm=e},expression:"dialogConfirm"}},[o("v-card",[o("v-card-title",[t._v("Surat "+t._s(t.taskDeleteConfirm.nama)+" ")]),o("v-card-text",[t._v(" Yakin Menghapus Task ? ")]),o("v-card-actions",[o("v-btn",{attrs:{color:"warning"},on:{click:t.yes}},[t._v("Yes")]),o("v-spacer"),o("v-btn",{attrs:{color:"success"},on:{click:t.no}},[t._v("No")])],1)],1)],1)],1)]],2)},r=[],s=o("5530"),n=o("2f62"),a={name:"tasks",data:function(){return{dialogConfirm:!1,taskDeleteConfirm:[]}},computed:Object(s["a"])({},Object(n["c"])({allTask:"reading/readSurah",count:"reading/count"})),methods:Object(s["a"])(Object(s["a"])({close:function(){this.$emit("closed",!1)},linkTo:function(t){this.close(),this.$router.push({path:"/surah/"+t})}},Object(n["b"])({removeTask:"reading/removing"})),{},{yes:function(){this.removeTask(this.taskDeleteConfirm),this.dialogConfirm=!1},no:function(){this.dialogConfirm=!1},showConfirm:function(t){this.dialogConfirm=!0,this.taskDeleteConfirm=t}})},c=a,l=o("2877"),d=o("6544"),u=o.n(d),h=o("0798"),v=o("8336"),m=o("b0af"),f=o("99d9"),p=o("a523"),b=o("169a"),_=o("132d"),g=o("a722"),C=o("8860"),k=o("da13"),y=o("1800"),B=o("5d23"),$=o("2fa4"),T=o("71d9"),V=o("2a7f"),w=Object(l["a"])(c,i,r,!1,null,null,null);e["default"]=w.exports;u()(w,{VAlert:h["a"],VBtn:v["a"],VCard:m["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VContainer:p["a"],VDialog:b["a"],VIcon:_["a"],VLayout:g["a"],VList:C["a"],VListItem:k["a"],VListItemAction:y["a"],VListItemContent:B["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VSpacer:$["a"],VToolbar:T["a"],VToolbarTitle:V["a"]})}}]);
//# sourceMappingURL=chunk-171b6299.699a4cc0.js.map