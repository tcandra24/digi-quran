(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e605413a"],{"39e1":function(t,a,e){},"48e1":function(t,a,e){"use strict";var i=e("39e1"),n=e.n(i);n.a},8903:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.detailAyat.nama?e("v-card",{staticClass:"mt-5",attrs:{outlined:""}},[e("v-card-text",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",[e("p",{staticClass:"mb-5"},[t._v(" Ayat ke - "+t._s(t.ayat)+" / "+t._s(t.detailAyat.ayat)+" ")])])],1),e("br"),t.loadingNextPrevBtn?e("v-sheet",{staticClass:"px-3 pt-3 pb-3"},[e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),e("br"),e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),e("br"),e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}})],1):e("div",[e("p",{staticClass:"text-center headline height-line text-h4",domProps:{innerHTML:t._s(t.isiAyatAr.teks)}}),e("p",{staticClass:"text-center",domProps:{innerHTML:t._s(t.isiAyatId.teks)}}),e("br"),e("p",{staticClass:"text-center",domProps:{textContent:t._s(t.isiAyatArti.teks)}})])],1),e("v-card-actions",[e("v-col",{staticClass:"text-left"},[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:parseInt(this.detailAyat.nomor)>t.minSurah||t.ayat>1,expression:"parseInt(this.detailAyat.nomor) > minSurah || ayat > 1"}],attrs:{color:"indigo",dark:"",loading:t.loadingNextPrevBtn,fab:"",bottom:"",left:""},on:{click:t.prev}},[e("v-icon",[t._v(" mdi-arrow-left ")])],1)],1),e("v-col",{staticClass:"text-right"},[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:parseInt(this.detailAyat.nomor)<t.maxSurah||t.ayat<t.detailAyat.ayat,expression:"parseInt(this.detailAyat.nomor) < maxSurah || ayat < detailAyat.ayat "}],attrs:{color:"indigo",dark:"",loading:t.loadingNextPrevBtn,fab:"",bottom:"",right:""},on:{click:t.next}},[e("v-icon",[t._v(" mdi-arrow-right ")])],1)],1)],1)],1):t._e()],1)},n=[],s=(e("99af"),e("7db0"),e("5530")),r=e("2f62"),o={name:"single-view",data:function(){return{surah:{},detailAyat:{},isiAyatAr:{},isiAyatId:{},isiAyatArti:{},ayat:0,disablePrev:!1,disableNext:!1,loadingNextPrevBtn:!1,minSurah:1,maxSurah:114,dialogConfirm:!1,btnToogle:0}},computed:Object(s["a"])({},Object(r["c"])({readSurah:"reading/readSurah"})),methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])({add:"reading/add",change:"reading/update",setTitle:"set"})),{},{go:function(){var t=this,a=this.$route.params.id,e=this.readSurah.find((function(t){return t.nomor===a}));this.ayat=e?e.ayat:1;var i="/surat/".concat(a,"/ayat/").concat(this.ayat);i=encodeURI(i),this.axios.get(i).then((function(a){if(a&&200===a.status){t.loadingNextPrevBtn=!1;var i=a.data;t.detailAyat=i.surat,t.isiAyatAr=i.ayat.data.ar[0],t.isiAyatId=i.ayat.data.idt[0],t.isiAyatArti=i.ayat.data.id[0],t.sendDetailSurah(t.detailAyat),e||t.add({nomor:t.detailAyat.nomor,nama:t.detailAyat.nama,ayat:t.ayat,jmlAyat:t.detailAyat.ayat}),t.setTitle({text:t.detailAyat.nama})}})).catch((function(t){var a=t.error;console.log(a)}))},next:function(){var t=this;this.ayat===parseInt(this.detailAyat.ayat)?this.$confirm("Ke Surat Selanjutnya ?").then((function(a){a&&(t.loadingNextPrevBtn=!0,t.$router.push({path:"/surah/".concat(parseInt(t.detailAyat.nomor)+1)}),t.go())})):(this.loadingNextPrevBtn=!0,this.change({nomor:this.detailAyat.nomor,nama:this.detailAyat.nama,ayat:this.ayat,jmlAyat:this.detailAyat.ayat,updateMode:"next"}),this.go())},prev:function(){var t=this;1==this.ayat?this.$confirm("Ke Surat Sebelumnya ?").then((function(a){a&&(t.loadingNextPrevBtn=!0,t.$router.push({path:"/surah/".concat(parseInt(t.detailAyat.nomor)-1)}),t.go())})):(this.loadingNextPrevBtn=!0,this.change({nomor:this.detailAyat.nomor,nama:this.detailAyat.nama,ayat:this.ayat,jmlAyat:this.detailAyat.ayat,updateMode:"prev"}),this.go())},sendDetailSurah:function(t){this.$emit("detail",t)}}),mounted:function(){this.go()}},d=o,l=(e("48e1"),e("2877")),c=e("6544"),h=e.n(c),y=e("8336"),u=e("b0af"),m=e("99d9"),v=e("62ad"),A=e("132d"),p=e("0fd9"),x=e("8dd9"),f=e("3129"),g=Object(l["a"])(d,i,n,!1,null,"76b2341f",null);a["default"]=g.exports;h()(g,{VBtn:y["a"],VCard:u["a"],VCardActions:m["b"],VCardText:m["d"],VCol:v["a"],VIcon:A["a"],VRow:p["a"],VSheet:x["a"],VSkeletonLoader:f["a"]})}}]);
//# sourceMappingURL=chunk-e605413a.adb735b5.js.map