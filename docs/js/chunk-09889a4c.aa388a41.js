(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09889a4c"],{"42b7":function(t,a,e){},"72ed":function(t,a,e){"use strict";var i=e("42b7"),s=e.n(i);s.a},8903:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.detailAyat.nama?e("v-card",{staticClass:"mt-5",attrs:{outlined:""}},[e("v-card-text",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",[e("p",{staticClass:"mb-5"},[t._v(" Ayat ke - "+t._s(t.ayat)+" / "+t._s(t.detailAyat.ayat)+" ")])])],1),e("br"),t.loadingNextPrevBtn?e("v-sheet",{staticClass:"px-3 pt-3 pb-3"},[e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),e("br"),e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}}),e("br"),e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-auto",attrs:{type:"text"}})],1):e("div",[e("p",{staticClass:"text-center headline height-line",domProps:{innerHTML:t._s(t.isiAyatAr.teks)}}),e("p",{staticClass:"text-center",domProps:{innerHTML:t._s(t.isiAyatId.teks)}}),e("br"),e("p",{staticClass:"text-center",domProps:{textContent:t._s(t.isiAyatArti.teks)}})])],1),e("v-card-actions",[e("v-col",{staticClass:"text-left"},[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:parseInt(this.detailAyat.nomor)>t.minSurah||t.ayat>1,expression:"parseInt(this.detailAyat.nomor) > minSurah || ayat > 1"}],attrs:{color:"indigo",dark:"",loading:t.loadingNextPrevBtn,fab:"",bottom:"",left:""},on:{click:t.prev}},[e("v-icon",[t._v(" mdi-arrow-left ")])],1)],1),e("v-col",{staticClass:"text-right"},[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:parseInt(this.detailAyat.nomor)<t.maxSurah||t.ayat<t.detailAyat.ayat,expression:"parseInt(this.detailAyat.nomor) < maxSurah || ayat < detailAyat.ayat "}],attrs:{color:"indigo",dark:"",loading:t.loadingNextPrevBtn,fab:"",bottom:"",right:""},on:{click:t.next}},[e("v-icon",[t._v(" mdi-arrow-right ")])],1)],1)],1)],1):t._e()],1)},s=[],n=(e("99af"),e("7db0"),e("5530")),o=e("2f62"),r={name:"single-view",data:function(){return{surah:{},detailAyat:{},isiAyatAr:{},isiAyatId:{},isiAyatArti:{},ayat:0,disablePrev:!1,disableNext:!1,loadingNextPrevBtn:!1,minSurah:1,maxSurah:114,dialogConfirm:!1,btnToogle:0}},computed:Object(n["a"])({},Object(o["c"])({readSurah:"reading/readSurah",dialogStatus:"dialog/status",currentComponent:"dialog/component"})),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])({add:"reading/add",change:"reading/update",setAlert:"alert/set",setTitle:"set",setDialogStatus:"dialog/setStatus"})),{},{go:function(){var t=this,a=this.$route.params.id,e=this.readSurah.find((function(t){return t.nomor===a}));this.ayat=e?e.ayat:1;var i="/surat/".concat(a,"/ayat/").concat(this.ayat);i=encodeURI(i),this.axios.get(i).then((function(a){if(a&&200===a.status){t.loadingNextPrevBtn=!1;var i,s=a.data;t.detailAyat=s.surat,t.isiAyatAr=s.ayat.data.ar[0],t.isiAyatId=s.ayat.data.idt[0],t.isiAyatArti=s.ayat.data.id[0],t.sendDetailSurah(t.detailAyat),e||t.add({nomor:t.detailAyat.nomor,nama:t.detailAyat.nama,ayat:t.ayat,jmlAyat:t.detailAyat.ayat}),t.setTitle({text:t.detailAyat.nama}),i=t.ayat<t.detailAyat.ayat?"Anda masih menyelesaikan ".concat(t.ayat," dari ").concat(t.detailAyat.ayat," ayat surat ").concat(t.detailAyat.nama):"Selamat anda menyelesaikan surat ".concat(t.detailAyat.nama),t.setAlert({color:"success",text:i})}})).catch((function(t){var a=t.error;console.log(a)}))},next:function(){var t=this;this.ayat===parseInt(this.detailAyat.ayat)?this.$confirm("Ke Surat Selanjutnya ?").then((function(a){a&&(t.loadingNextPrevBtn=!0,t.$router.push({path:"/surah/".concat(parseInt(t.detailAyat.nomor)+1)}),t.go())})):(this.loadingNextPrevBtn=!0,this.change({nomor:this.detailAyat.nomor,nama:this.detailAyat.nama,ayat:this.ayat+1,jmlAyat:this.detailAyat.ayat}),this.go())},prev:function(){var t=this;1==this.ayat?this.$confirm("Ke Surat Sebelumnya ?").then((function(a){a&&(t.loadingNextPrevBtn=!0,t.$router.push({path:"/surah/".concat(parseInt(t.detailAyat.nomor)-1)}),t.go())})):(this.loadingNextPrevBtn=!0,this.change({nomor:this.detailAyat.nomor,nama:this.detailAyat.nama,ayat:this.ayat-1,jmlAyat:this.detailAyat.ayat}),this.go())},alertCoba:function(t){alert(t)},sendDetailSurah:function(t){this.$emit("detail",t)}}),mounted:function(){!0===this.dialogStatus&&"search"===this.currentComponent&&this.setDialogStatus(!1),this.go()}},l=r,d=(e("72ed"),e("2877")),c=e("6544"),y=e.n(c),h=e("8336"),u=e("b0af"),m=e("99d9"),A=e("62ad"),v=e("132d"),g=e("0fd9"),p=e("8dd9"),x=e("3129"),f=Object(d["a"])(l,i,s,!1,null,"12970180",null);a["default"]=f.exports;y()(f,{VBtn:h["a"],VCard:u["a"],VCardActions:m["b"],VCardText:m["d"],VCol:A["a"],VIcon:v["a"],VRow:g["a"],VSheet:p["a"],VSkeletonLoader:x["a"]})}}]);
//# sourceMappingURL=chunk-09889a4c.aa388a41.js.map