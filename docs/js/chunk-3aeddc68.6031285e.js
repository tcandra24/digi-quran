(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3aeddc68"],{"1f09":function(t,e,a){},"7fde":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.detailAyat.nama?a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v(" "+t._s(t.detailAyat.nama)+" ("+t._s(t.detailAyat.asma)+") ")]),a("v-card-subtitle",{domProps:{textContent:t._s(t.detailAyat.arti)}}),a("v-card-text",{staticClass:"text-justify",domProps:{innerHTML:t._s(t.detailAyat.keterangan)}}),a("v-divider"),a("v-card-text",[a("p",{staticClass:"mb-5"},[t._v(" Ayat ke - "+t._s(t.ayat)+" / "+t._s(t.detailAyat.ayat)+" ")]),a("br"),t.loadingNextPrevBtn?a("v-sheet",{staticClass:"px-3 pt-3 pb-3"},[a("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),a("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),a("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),a("br"),a("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}})],1):a("div",[a("p",{staticClass:"text-center headline",domProps:{innerHTML:t._s(t.isiAyatAr.teks)}}),a("p",{staticClass:"text-center",domProps:{innerHTML:t._s(t.isiAyatId.teks)}}),a("br"),a("p",{staticClass:"text-center",domProps:{textContent:t._s(t.isiAyatArti.teks)}})])],1),a("v-card-text",[a("v-btn",{attrs:{absolute:"",dark:"",fab:"",top:"",right:"",color:"indigo"},on:{click:function(e){t.timerMode=!t.timerMode}}},[a("v-icon",[t._v("mdi-clock")])],1)],1),a("v-card-actions",[a("v-col",[a("v-btn",{attrs:{color:"primary",disabled:t.disablePrev,loading:t.loadingNextPrevBtn},on:{click:t.prev}},[t._v("Prev")])],1),a("v-spacer"),a("v-col",{staticClass:"text-center"},[t.timerMode?a("v-progress-circular",{attrs:{rotate:360,size:65,width:5,indeterminate:t.timerMode,color:"indigo"}},[t._v(" "+t._s(t.timer)+" ")]):t._e()],1),a("v-spacer"),a("v-col",{staticClass:"text-right"},[a("v-btn",{attrs:{color:"primary",disabled:t.disableNext,loading:t.loadingNextPrevBtn},on:{click:t.next}},[t._v("Next")])],1)],1)],1):t._e()],1)},s=[],r=(a("99af"),a("7db0"),a("5530")),n=a("2f62"),o={data:function(){return{surah:{},detailAyat:{},isiAyatAr:{},isiAyatId:{},isiAyatArti:{},ayat:0,disablePrev:!1,disableNext:!1,timerMode:!1,timer:0,maxTimer:30,loadingNextPrevBtn:!1}},computed:Object(r["a"])({},Object(n["c"])({readSurah:"reading/readSurah",dialogStatus:"dialog/status",currentComponent:"dialog/component"})),watch:{timer:{handler:function(t){!0===this.timerMode&&!1===this.disableNext?this.countTimer(t):this.timer=this.maxTimer},immediate:!1},timerMode:{handler:function(){!0===this.timerMode&&!1===this.disableNext?this.countTimer(this.maxTimer):this.timer=this.maxTimer},immediate:!0}},methods:Object(r["a"])(Object(r["a"])({},Object(n["b"])({add:"reading/add",change:"reading/update",setAlert:"alert/set",setTitle:"set",setDialogStatus:"dialog/setStatus"})),{},{go:function(){var t=this,e=this.$route.params.id,a=this.readSurah.find((function(t){return t.nomor===e}));this.ayat=a?a.ayat:1;var i="/surat/".concat(e,"/ayat/").concat(this.ayat);i=encodeURI(i),this.axios.get(i).then((function(e){if(e){t.loadingNextPrevBtn=!1;var i=e.data;if(t.detailAyat=i.surat,t.isiAyatAr=i.ayat.data.ar[0],t.isiAyatId=i.ayat.data.idt[0],t.isiAyatArti=i.ayat.data.id[0],!a){var s={nomor:t.detailAyat.nomor,nama:t.detailAyat.nama,ayat:t.ayat,jmlAyat:t.detailAyat.ayat};t.add(s)}t.setTitle({text:t.detailAyat.nama}),t.setAlert({color:"success",text:t.ayat<t.detailAyat.ayat?"Anda masih menyelesaikan ".concat(t.ayat," dari ").concat(t.detailAyat.ayat," ayat"):"Selamat anda menyelesaikan surat ".concat(t.detailAyat.nama)})}})).catch((function(t){var e=t.error;console.log(e)})),1===this.ayat?(this.disablePrev=!0,this.disableNext=!1):this.ayat===parseInt(a.jmlAyat)?(this.disablePrev=!1,this.disableNext=!0):(this.disablePrev=!1,this.disableNext=!1)},next:function(){this.loadingNextPrevBtn=!0,this.change({nomor:this.detailAyat.nomor,nama:this.detailAyat.nama,ayat:this.ayat+1,jmlAyat:this.detailAyat.ayat}),this.go()},prev:function(){this.loadingNextPrevBtn=!0,this.change({nomor:this.detailAyat.nomor,nama:this.detailAyat.nama,ayat:this.ayat-1,jmlAyat:this.detailAyat.ayat}),this.go()},countTimer:function(t){var e=this;t>0?setTimeout((function(){e.timer--}),1e3):(this.next(),this.timer=this.maxTimer)}}),created:function(){!0===this.dialogStatus&&"search"===this.currentComponent&&this.setDialogStatus(!1),this.go()}},l=o,d=a("2877"),c=a("6544"),h=a.n(c),u=a("8336"),m=a("b0af"),v=a("99d9"),y=a("62ad"),p=a("ce7e"),g=a("132d"),b=a("490a"),f=a("8dd9"),x=(a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276"),a("3835")),A=(a("1f09"),a("c995")),k=a("24b2"),S=a("7560"),C=a("58df"),_=a("80d2"),B=Object(C["a"])(A["a"],k["a"],S["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(r["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(r["a"])(Object(r["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(r["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),i=Object(x["a"])(a,2),s=i[0],r=i[1],n=function(){return e.genStructure(s)};return Array.from({length:r}).map(n)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(_["k"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),j=a("2fa4"),P=Object(d["a"])(l,i,s,!1,null,null,null);e["default"]=P.exports;h()(P,{VBtn:u["a"],VCard:m["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:y["a"],VDivider:p["a"],VIcon:g["a"],VProgressCircular:b["a"],VSheet:f["a"],VSkeletonLoader:B,VSpacer:j["a"]})},"8ce9":function(t,e,a){},ce7e:function(t,e,a){"use strict";var i=a("5530"),s=(a("8ce9"),a("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-3aeddc68.6031285e.js.map