(function(a){function t(t){for(var r,e,o=t[0],l=t[1],s=t[2],c=0,h=[];c<o.length;c++)e=o[c],Object.prototype.hasOwnProperty.call(i,e)&&i[e]&&h.push(i[e][0]),i[e]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(a[r]=l[r]);d&&d(t);while(h.length)h.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var a,t=0;t<u.length;t++){for(var n=u[t],r=!0,e=1;e<n.length;e++){var o=n[e];0!==i[o]&&(r=!1)}r&&(u.splice(t--,1),a=l(l.s=n[0]))}return a}var r={},e={app:0},i={app:0},u=[];function o(a){return l.p+"js/"+({about:"about"}[a]||a)+"."+{about:"7bd24fe5","chunk-171b6299":"65f6739a","chunk-2d0f0dd5":"1ce4423b","chunk-3bcc33e4":"bd6362b9","chunk-3dcb42b8":"48012199","chunk-4b14ea42":"53364a3b"}[a]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return a[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(a){var t=[],n={"chunk-171b6299":1,"chunk-3bcc33e4":1,"chunk-3dcb42b8":1,"chunk-4b14ea42":1};e[a]?t.push(e[a]):0!==e[a]&&n[a]&&t.push(e[a]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[a]||a)+"."+{about:"31d6cfe0","chunk-171b6299":"07a87f9f","chunk-2d0f0dd5":"31d6cfe0","chunk-3bcc33e4":"bdc72f73","chunk-3dcb42b8":"4dd36b26","chunk-4b14ea42":"d3f5352b"}[a]+".css",i=l.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===r||c===i))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){s=h[o],c=s.getAttribute("data-href");if(c===r||c===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,u=new Error("Loading CSS chunk "+a+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete e[a],d.parentNode.removeChild(d),n(u)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){e[a]=0})));var r=i[a];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[a]=[t,n]}));t.push(r[2]=u);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(a);var h=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=i[a];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),e=t&&t.target&&t.target.src;h.message="Loading chunk "+a+" failed.\n("+r+": "+e+")",h.name="ChunkLoadError",h.type=r,h.request=e,n[1](h)}i[a]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=a,l.c=r,l.d=function(a,t,n){l.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:n})},l.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,t){if(1&t&&(a=l(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)l.d(n,r,function(t){return a[t]}.bind(null,r));return n},l.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return l.d(t,"a",t),t},l.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},l.p="/digi-quran/",l.oe=function(a){throw console.error(a),a};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var d=c;u.push([0,"chunk-vendors"]),n()})({0:function(a,t,n){a.exports=n("56d7")},"56d7":function(a,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),e=(n("d3b7"),n("bc3a")),i=n.n(e),u={baseURL:"https://api.banghasan.com/quran/format/json"},o=i.a.create(u);o.interceptors.request.use((function(a){return a}),(function(a){return Promise.reject(a)})),o.interceptors.response.use((function(a){return a}),(function(a){return Promise.reject(a)})),Plugin.install=function(a){a.axios=o,window.axios=o,Object.defineProperties(a.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},r["a"].use(Plugin);Plugin,n("ac1f"),n("5319");var l={install:function(a){a.prototype.appName="DigiQuran",a.prototype.imageUrl="/digi-quran/img/",a.prototype.firstUpper=function(a){return a.toLowerCase().replace(/\b[a-z]/g,(function(a){return a.toUpperCase()}))}}};r["a"].use(l);var s=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-card",[n("v-navigation-drawer",{attrs:{app:""},model:{value:a.drawer,callback:function(t){a.drawer=t},expression:"drawer"}},[n("v-img",{attrs:{"aspect-ratio":16/9,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}}),n("v-list",a._l(a.menus,(function(t,r){return n("v-list-item",{key:r,attrs:{link:"",to:t.route}},[n("v-list-item-action",[n("v-icon",[a._v(a._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[a._v(a._s(t.title))])],1)],1)})),1)],1)],1),a.isHome?n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),a.drawer=!a.drawer}}}),n("v-toolbar-title",[a._v(a._s(a.appName))]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){return a.setDialogComponent("tasks")}}},[a.count>0?n("div",[n("v-badge",{attrs:{color:"orange",overlap:""},scopedSlots:a._u([{key:"badge",fn:function(){return[n("span",[a._v(" "+a._s(a.count)+" ")])]},proxy:!0}],null,!1,2753354061)},[n("v-icon",[a._v("mdi-bell")])],1)],1):n("div",[n("v-icon",[a._v("mdi-bell")])],1)]),n("v-text-field",{staticClass:"mb-3",attrs:{slot:"extension","hide-details":"","append-icon":"mdi-arrow-right",flat:"",label:"Search","prepend-inner-icon":"mdi-magnify","solo-inverted":""},on:{click:function(t){return a.setDialogComponent("search")}},slot:"extension"})],1):n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),a.$router.go(-1)}}},[n("v-icon",[a._v("mdi-arrow-left-circle")])],1),n("v-toolbar-title",[a._v(a._s(a.titleSurah))])],1),n("alert"),n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-slide-y-transition",[n("router-view")],1)],1),n("keep-alive",[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[n(a.currentComponent,{tag:"component",on:{closed:a.setDialogStatus}})],1)],1)],1),n("v-footer",{attrs:{color:"indigo",app:""}},[n("span",{staticClass:"white--text"},[a._v("© "+a._s((new Date).getFullYear())+" - Digital Quran ")])])],1)},c=[],h=n("5530"),d=n("2f62"),m={props:{source:String},components:{Tasks:function(){return n.e("chunk-171b6299").then(n.bind(null,"8d91"))},Alert:function(){return n.e("chunk-3bcc33e4").then(n.bind(null,"98ab"))},Search:function(){return n.e("chunk-4b14ea42").then(n.bind(null,"c106"))},AsmaulHusna:function(){return n.e("chunk-2d0f0dd5").then(n.bind(null,"9dd8"))}},data:function(){return{drawer:!1,menus:[{title:"Home",icon:"mdi-home-outline",route:"/"},{title:"About",icon:"mdi-information-outline",route:"/about"}]}},computed:Object(h["a"])(Object(h["a"])({isHome:function(){return"/"===this.$route.path}},Object(d["c"])({titleSurah:"title",count:"reading/count",dialogStatus:"dialog/status",currentComponent:"dialog/component"})),{},{dialog:{get:function(){return this.dialogStatus},set:function(a){this.setDialogStatus(a)}}}),methods:Object(h["a"])({},Object(d["b"])({setDialogStatus:"dialog/setStatus",setDialogComponent:"dialog/setComponent"}))},g=m,b=n("2877"),p=n("6544"),f=n.n(p),v=n("7496"),M=n("40dc"),k=n("5bc1"),A=n("4ca6"),y=n("8336"),Y=n("b0af"),w=n("a523"),S=n("a75b"),_=n("169a"),j=n("553a"),x=n("132d"),C=n("adda"),P=n("8860"),K=n("da13"),V=n("1800"),T=n("5d23"),O=n("f774"),q=n("0789"),L=n("2fa4"),B=n("8654"),I=n("2a7f"),D=Object(b["a"])(g,s,c,!1,null,null,null),N=D.exports;f()(D,{VApp:v["a"],VAppBar:M["a"],VAppBarNavIcon:k["a"],VBadge:A["a"],VBtn:y["a"],VCard:Y["a"],VContainer:w["a"],VContent:S["a"],VDialog:_["a"],VFooter:j["a"],VIcon:x["a"],VImg:C["a"],VList:P["a"],VListItem:K["a"],VListItemAction:V["a"],VListItemContent:T["a"],VListItemTitle:T["c"],VNavigationDrawer:O["a"],VSlideYTransition:q["e"],VSpacer:L["a"],VTextField:B["a"],VToolbarTitle:I["a"]});var H=n("9483");Object(H["a"])("".concat("/digi-quran/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(a){console.error("Error during service worker registration:",a)}});var E=n("8c4f"),z=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{md:""}},[n("v-card",[[n("v-carousel",{attrs:{cycle:"","delimiter-icon":"mdi-minus","hide-delimiter-background":"",interval:"5000","show-arrows":!1}},a._l(a.itemImages,(function(t,r){return n("v-carousel-item",{key:r,attrs:{"aspect-ratio":16/9}},[n("v-sheet",{attrs:{height:"100%",color:"primary"}},[n("v-img",{attrs:{src:a.imageUrl+"/"+t.src,"aspect-ratio":16/9,height:"100%"},on:{load:function(a){t.isImageLoaded=!0}}},[!0===t.isImageLoaded?n("v-col",{staticClass:"pa-5",staticStyle:{background:"#6f6c6c",opacity:"0.5"}},[n("div",{staticClass:"subtitle-1 text-justify"},[a._v(" "+a._s(t.quote)+" "),n("br"),a._v(" "+a._s(t.from)+" ")])]):n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"subtitle-1 text-justify"},[n("div",{staticClass:"display-1"},[a._v("Loading...")])])])],1)],1)],1)})),1)]],2)],1)],1)],1),n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"text-left indigo--text"},[a._v(" Asmaul Husna "),n("v-icon",{attrs:{color:"indigo"}},[a._v("mdi-chevron-right")])],1),n("v-divider"),n("v-layout",{staticClass:"pt-5",attrs:{wrap:""}},[n("v-flex",{attrs:{md:""}},[n("v-card",[[n("v-carousel",{attrs:{cycle:"","delimiter-icon":"mdi-minus","hide-delimiter-background":"",interval:"4000","show-arrows":!1,height:"150"}},[a._l(a.asmaul_husna.slice(0,7),(function(t,r){return n("v-carousel-item",{key:r,attrs:{"aspect-ratio":16/9},on:{click:function(t){return a.setDialogComponent("asmaul-husna")}}},[n("v-sheet",{attrs:{height:"100%",color:"primary"}},[n("v-row",{staticClass:"fill-height pt-5",attrs:{justify:"center"}},[n("div",{staticClass:"subtitle-1 text-center"},[a._v(" "+a._s(t.latin)+" ("+a._s(t.arab)+") "),n("br"),a._v(" "+a._s(t.arti)+" ")])])],1)],1)})),n("v-carousel-item",{attrs:{"aspect-ratio":16/9},on:{click:function(t){return a.setDialogComponent("asmaul-husna")}}},[n("v-sheet",{attrs:{height:"100%",color:"primary"}},[n("v-row",{staticClass:"fill-height pt-5",attrs:{justify:"center"}},[n("div",{staticClass:"subtitle-1 text-center"},[a._v(" Selengkapnya "),n("v-icon",[a._v("mdi-arrow-right-circle-outline")])],1)])],1)],1)],2)]],2)],1),n("v-slide-y-transition",[n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:a.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:a.fab,expression:"fab"}],staticClass:"mb-10",attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"indigo"},on:{click:a.toTop}},[n("v-icon",[a._v("mdi-arrow-up")])],1)],1)],1)],1),a.surat?n("v-container",{staticClass:"ma-0 pa-2",attrs:{"grid-list-sm":""}},[n("div",{staticClass:"text-left indigo--text"},[a._v(" Semua Surat ("+a._s(a.totalSurah)+") "),n("v-icon",{attrs:{color:"indigo"}},[a._v("mdi-chevron-right")])],1),n("v-divider"),n("v-layout",{attrs:{wrap:""}},a._l(a.surat.slice(0,a.items),(function(t,r){return n("v-flex",{key:"surah-"+r,staticClass:"pt-5",attrs:{md:""}},[n("v-card",{attrs:{to:"/surah/"+t.nomor,outlined:""}},[n("v-card-title",{staticClass:"fill-height align-end"},[a._v(" "+a._s(t.nomor)+" . "+a._s(t.nama)+" ( "+a._s(t.asma)+" ) ")]),n("v-card-subtitle",{domProps:{textContent:a._s(a.artiSurah(t.arti))}}),n("v-card-actions",[n("v-chip",[n("v-icon",[a._v("mdi-book")]),n("span",[a._v(" "+a._s(a.firstUpper(t.type))+" ")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(n){return n.preventDefault(),a.setKet(t.nomor)}}},[n("v-icon",[a._v(a._s(t.showKet?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showKet,expression:"surah.showKet"}]},[n("v-divider"),n("v-card-text",{staticClass:"text-justify",domProps:{innerHTML:a._s(t.keterangan.substr(0,200)+"...")}})],1)])],1)],1)})),1)],1):a._e(),n("v-container",[n("v-col",{staticClass:"text-center"},[a.surat.length>a.items?n("v-btn",{attrs:{text:"",color:"indigo"},on:{click:function(t){return a.more()}}},[a._v(" More.. ")]):a._e()],1)],1)],1)},Q=[],R=(n("4160"),n("159b"),n("a412")),F=n("eca5"),W={name:"Home",mixins:[F["a"]],data:function(){return{items:20,asmaul_husna:R["a"],itemImages:[{src:"view-1.jpg",quote:"Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak",from:"QS Al-Kautsar : 1",isImageLoaded:!1},{src:"view-2.jpg",quote:"Maka nikmat Tuhanmu yang manakah yang kamu dustakan?",from:"QS Ar-Rahman : 13",isImageLoaded:!1},{src:"view-3.jpg",quote:"Sesungguhnya pada pertukaran malam dan siang itu dan pada apa yang diciptakan Allah di langit dan di bumi, benar-benar terdapat tanda-tanda (kekuasaan-Nya) bagi orang-orang yang bertakwa.",from:"QS Yunus : 6",isImageLoaded:!1},{src:"view-4.jpg",quote:"Sungguh kami ciptakan manusia itu pada perwujudan yang lebih baik.",from:"QS At-Tin : 4",isImageLoaded:!1},{src:"view-5.jpg",quote:"Dan sesungguhnya telah Kami muliakan anak cucu Adam, Kami angkat mereka di daratan dan di lautan, Kami beri mereka rizki yang baik-baik dan Kami lebihkan mereka dengan kelebihan yang sempurna atas kebanyakan mahluk-mahluk yang telah Kami ciptakan.",from:"QS Al-Isra : 70",isImageLoaded:!1}],isActive:!1,fab:!1}},created:function(){var a=this;if(this.surat.length>0)this.AllSurah=this.surat;else{var t={showKet:!1},n=[];this.axios.get("/surat").then((function(r){var e=r.data.hasil;e.forEach((function(a){n.push(Object(h["a"])(Object(h["a"])({},a),t))})),a.setSurat(n)})).catch((function(a){var t=a.error;console.log=t}))}"/"===this.$route.path&&""!==this.text&&this.setAlert({status:!0,color:this.color,text:this.text}),this.setTitle({})},methods:Object(h["a"])(Object(h["a"])({more:function(){this.items+=10}},Object(d["b"])({setTitle:"set",setAlert:"alert/set",setSurat:"addSurat",setKet:"setKet",setDialogComponent:"dialog/setComponent"})),{},{onScroll:function(a){if("undefined"!==typeof window){var t=window.pageYOffset||a.target.scrollTop||0;this.fab=t>40}},toTop:function(){this.$vuetify.goTo(0)}}),computed:Object(h["a"])(Object(h["a"])({},Object(d["c"])({text:"alert/text",color:"alert/color",surat:"surat"})),{},{totalSurah:function(){return this.surat.length}})},$=W,U=n("99d9"),J=n("5e66"),G=n("3e35"),Z=n("cc20"),X=n("62ad"),aa=n("ce7e"),ta=n("0e8f"),na=n("a722"),ra=n("0fd9"),ea=n("8dd9"),ia=n("269a"),ua=n.n(ia),oa=n("f977"),la=Object(b["a"])($,z,Q,!1,null,null,null),sa=la.exports;f()(la,{VBtn:y["a"],VCard:Y["a"],VCardActions:U["a"],VCardSubtitle:U["b"],VCardText:U["c"],VCardTitle:U["d"],VCarousel:J["a"],VCarouselItem:G["a"],VChip:Z["a"],VCol:X["a"],VContainer:w["a"],VDivider:aa["a"],VExpandTransition:q["a"],VFlex:ta["a"],VIcon:x["a"],VImg:C["a"],VLayout:na["a"],VRow:ra["a"],VSheet:ea["a"],VSlideYTransition:q["e"],VSpacer:L["a"]}),ua()(la,{Scroll:oa["b"]}),r["a"].use(E["a"]);var ca=[{path:"/",name:"Home",component:sa},{path:"/surah/:id",name:"Surah",component:function(){return n.e("chunk-3dcb42b8").then(n.bind(null,"7fde"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ha=new E["a"]({mode:"history",base:"/digi-quran/",routes:ca}),da=ha,ma=(n("7db0"),n("a434"),n("b0c0"),n("bfa9")),ga=(n("c975"),{namespaced:!0,state:{readSurah:[]},mutations:{insert:function(a,t){a.readSurah.push({nomor:t.nomor,nama:t.nama,ayat:1,jmlAyat:t.jmlAyat})},update:function(a,t){var n=a.readSurah.indexOf(t);a.readSurah.splice(n,1,{nomor:t.nomor,nama:t.nama,ayat:t.ayat,jmlAyat:t.jmlAyat})},remove:function(a,t){var n=a.readSurah.indexOf(t);a.readSurah.splice(n,1)}},actions:{add:function(a,t){var n=a.state,r=a.commit,e=n.readSurah.find((function(a){return a.nomor===t.nomor}));r(e?"update":"insert",t)},update:function(a,t){var n=a.commit;n("update",t)},removing:function(a,t){var n=a.commit;n("remove",t)}},getters:{readSurah:function(a){return a.readSurah},count:function(a){return a.readSurah.length}}}),ba={namespaced:!0,state:{status:!1,color:"success",text:""},mutations:{set:function(a,t){a.status=t.status,a.color=t.color,a.text=t.text}},actions:{set:function(a,t){var n=a.commit;n("set",t)}},getters:{status:function(a){return a.status},color:function(a){return a.color},text:function(a){return a.text}}},pa={namespaced:!0,state:{status:!1,component:"tasks"},mutations:{setStatus:function(a,t){a.status=t},setComponent:function(a,t){a.component=t}},actions:{setStatus:function(a,t){var n=a.commit;n("setStatus",t)},setComponent:function(a,t){var n=a.commit;n("setComponent",t),n("setStatus",!0)}},getters:{status:function(a){return a.status},component:function(a){return a.component}}},fa=new ma["a"]({key:"digiquran-data",storage:localStorage});r["a"].use(d["a"]);var va=new d["a"].Store({plugins:[fa.plugin],state:{title:"",surat:[]},mutations:{set:function(a,t){a.title=t.text},addSurat:function(a,t){a.surat=t},setKet:function(a,t){var n=a.surat.find((function(a){return a.nomor==t}));a.surat.splice(t-1,1,{arti:n.arti,asma:n.asma,ayat:n.ayat,keterangan:n.keterangan,nama:n.nama,name:n.name,nomor:n.nomor,rukuk:n.rukuk,showKet:!n.showKet,start:n.start,type:n.type,urut:n.urut})}},actions:{set:function(a,t){var n=a.commit;n("set",t)},addSurat:function(a,t){var n=a.commit;n("addSurat",t)},setKet:function(a,t){var n=a.commit;n("setKet",t)}},getters:{title:function(a){return a.title},surat:function(a){return a.surat}},modules:{reading:ga,alert:ba,dialog:pa}}),Ma=n("f309");r["a"].use(Ma["a"]);var ka=new Ma["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:da,store:va,vuetify:ka,render:function(a){return a(N)}}).$mount("#app")},a412:function(a,t,n){"use strict";t["a"]=[{urutan:1,latin:"Ar Rahman",arab:"الرحمن",arti:"Yang Maha Pengasih"},{urutan:2,latin:"Ar Rahiim",arab:"الرحيم",arti:"Yang Maha Penyayang"},{urutan:3,latin:"Al Malik",arab:"الملك",arti:"Yang Maha Merajai / Memerintah"},{urutan:4,latin:"Al Quddus",arab:"القدوس",arti:"Yang Maha Suci"},{urutan:5,latin:"As Salaam",arab:"السلام",arti:"Yang Maha Memberi Kesejahteraan"},{urutan:6,latin:"Al Mu 'min",arab:"المؤمن",arti:"Yang Maha Memberi Keamanan"},{urutan:7,latin:"Al Muhaimin",arab:"المهيمن",arti:"Yang Maha Pemelihara"},{urutan:8,latin:"Al 'Aziiz",arab:"العزيز",arti:"Yang Maha Perkasa"},{urutan:9,latin:"Al Jabbar",arab:"الجبار",arti:"Yang Memiliki Mutlak Kegagahan"},{urutan:10,latin:"Al Mutakabbir",arab:"المتكبر",arti:"Yang Maha Megah, Yang Memiliki Kebesaran"},{urutan:11,latin:"Al Khaliq",arab:"الخالق",arti:"Yang Maha Pencipta"},{urutan:12,latin:"Al Baari '",arab:"البارئ",arti:"Yang Maha Melepaskan(Membuat, Membentuk, Menyeimbangkan)"},{urutan:13,latin:"Al Mushawwir",arab:"المصور",arti:"Yang Maha Membentuk Rupa(makhluknya)"},{urutan:14,latin:"Al Ghaffaar",arab:"الغفار",arti:"Yang Maha Pengampun"},{urutan:15,latin:"Al Qahhaar",arab:"القهار",arti:"Yang Maha Memaksa"},{urutan:16,latin:"Al Wahhaab",arab:"الوهاب",arti:"Yang Maha Pemberi Karunia"},{urutan:17,latin:"Ar Razzaaq",arab:"الرزاق",arti:"Yang Maha Pemberi Rezeki"},{urutan:18,latin:"Al Fattaah",arab:"الفتاح",arti:"Yang Maha Pembuka Rahmat"},{urutan:19,latin:"Al 'Aliim",arab:"العليم",arti:"Yang Maha Mengetahui(Memiliki Ilmu)"},{urutan:20,latin:"Al Qaabidh",arab:"القابض",arti:"Yang Maha Menyempitkan(makhluknya)"},{urutan:21,latin:"Al Baasith",arab:"الباسط",arti:"Yang Maha Melapangkan(makhluknya)"},{urutan:22,latin:"Al Khaafidh",arab:"الخافض",arti:"Yang Maha Merendahkan(makhluknya)"},{urutan:23,latin:"Ar Raafi '",arab:"الرافع",arti:"Yang Maha Meninggikan(makhluknya)"},{urutan:24,latin:"Al Mu'izz",arab:"المعز",arti:"Yang Maha Memuliakan(makhluknya)"},{urutan:25,latin:"Al Mudzil",arab:"المذل",arti:"Yang Maha Menghinakan(makhluknya)"},{urutan:26,latin:"Al Samii '",arab:"السميع",arti:"Yang Maha Mendengar"},{urutan:27,latin:"Al Bashiir",arab:"البصير",arti:"Yang Maha Melihat"},{urutan:28,latin:"Al Hakam",arab:"الحكم",arti:"Yang Maha Menetapkan"},{urutan:29,latin:"Al 'Adl",arab:"العدل",arti:"Yang Maha Adil"},{urutan:30,latin:"Al Lathiif",arab:"اللطيف",arti:"Yang Maha Lembut"},{urutan:31,latin:"Al Khabiir",arab:"الخبير",arti:"Yang Maha Mengenal"},{urutan:32,latin:"Al Haliim",arab:"الحليم",arti:"Yang Maha Penyantun"},{urutan:33,latin:"Al 'Azhiim",arab:"العظيم",arti:"Yang Maha Agung"},{urutan:34,latin:"Al Ghafuur",arab:"الغفور",arti:"Yang Maha Pengampun"},{urutan:35,latin:"As Syakuur",arab:"الشكور",arti:"Yang Maha Pembalas Budi(Menghargai)"},{urutan:36,latin:"Al 'Aliy",arab:"العلى",arti:"Yang Maha Tinggi"},{urutan:37,latin:"Al Kabiir",arab:"الكبير",arti:"Yang Maha Besar"},{urutan:38,latin:"Al Hafizh",arab:"الحفيظ",arti:"Yang Maha Memelihara"},{urutan:39,latin:"Al Muqiit",arab:"المقيت",arti:"Yang Maha Pemberi Kecukupan"},{urutan:40,latin:"Al Hasiib",arab:"الحسيب",arti:"Yang Maha Membuat Perhitungan"},{urutan:41,latin:"Al Jaliil",arab:"الجليل",arti:"Yang Maha Mulia"},{urutan:42,latin:"Al Kariim",arab:"الكريم",arti:"Yang Maha Mulia"},{urutan:43,latin:"Ar Raqiib",arab:"الرقيب",arti:"Yang Maha Mengawasi"},{urutan:44,latin:"Al Mujiib",arab:"المجيب",arti:"Yang Maha Mengabulkan"},{urutan:45,latin:"Al Waasi '",arab:"الواسع",arti:"Yang Maha Luas"},{urutan:46,latin:"Al Hakiim",arab:"الحكيم",arti:"Yang Maha Maka Bijaksana"},{urutan:47,latin:"Al Waduud",arab:"الودود",arti:"Yang Maha Mengasihi"},{urutan:48,latin:"Al Majiid",arab:"المجيد",arti:"Yang Maha Mulia"},{urutan:49,latin:"Al Baa'its",arab:"الباعث",arti:"Yang Maha Membangkitkan"},{urutan:50,latin:"As Syahiid",arab:"الشهيد",arti:"Yang Maha Menyaksikan"},{urutan:51,latin:"Al Haqq",arab:"الحق",arti:"Yang Maha Benar"},{urutan:52,latin:"Al Wakiil",arab:"الوكيل",arti:"Yang Maha Memelihara"},{urutan:53,latin:"Al Qawiyyu",arab:"القوى",arti:"Yang Maha Kuat"},{urutan:54,latin:"Al Matiin",arab:"المتين",arti:"Yang Maha Kokoh"},{urutan:55,latin:"Al Waliyy",arab:"الولى",arti:"Yang Maha Melindungi"},{urutan:56,latin:"Al Hamiid",arab:"الحميد",arti:"Yang Maha Terpuji"},{urutan:57,latin:"Al Muhshii",arab:"المحصى",arti:"Yang Maha Mengalkulasi(Menghitung Segala Sesuatu)"},{urutan:58,latin:"Al Mubdi '",arab:"المبدئ",arti:"Yang Maha Memulai"},{urutan:59,latin:"Al Mu'iid",arab:"المعيد",arti:"Yang Maha Mengembalikan Kehidupan"},{urutan:60,latin:"Al Muhyii",arab:"المحيى",arti:"Yang Maha Menghidupkan"},{urutan:61,latin:"Al Mumiitu",arab:"المميت",arti:"Yang Maha Mematikan"},{urutan:62,latin:"Al Hayyu",arab:"الحي",arti:"Yang Maha Hidup"},{urutan:63,latin:"Al Qayyuum",arab:"القيوم",arti:"Yang Maha Mandiri"},{urutan:64,latin:"Al Waajid",arab:"الواجد",arti:"Yang Maha Penemu"},{urutan:65,latin:"Al Maajid",arab:"الماجد",arti:"Yang Maha Mulia"},{urutan:66,latin:"Al Wahiid",arab:"الواحد",arti:"Yang Maha Tunggal"},{urutan:67,latin:"Al Ahad",arab:"الاحد",arti:"Yang Maha Esa"},{urutan:68,latin:"As Shamad",arab:"الصمد",arti:"Yang Maha Dibutuhkan, Tempat Meminta"},{urutan:69,latin:"Al Qaadir",arab:"القادر",arti:"Yang Maha Menentukan, Maha Menyeimbangkan"},{urutan:70,latin:"Al Muqtadir",arab:"المقتدر",arti:"Yang Maha Berkuasa"},{urutan:71,latin:"Al Muqaddim",arab:"المقدم",arti:"Yang Maha Mendahulukan"},{urutan:72,latin:"Al Mu 'akkhir",arab:"المؤخر",arti:"Yang Maha Mengakhirkan"},{urutan:73,latin:"Al Awwal",arab:"الأول",arti:"Yang Maha Awal"},{urutan:74,latin:"Al Aakhir",arab:"الأخر",arti:"Yang Maha Akhir"},{urutan:75,latin:"Az Zhaahir",arab:"الظاهر",arti:"Yang Maha Nyata"},{urutan:76,latin:"Al Baathin",arab:"الباطن",arti:"Yang Maha Ghaib"},{urutan:77,latin:"Al Waali",arab:"الوالي",arti:"Yang Maha Memerintah"},{urutan:78,latin:"Al Muta'aalii",arab:"المتعالي",arti:"Yang Maha Tinggi"},{urutan:79,latin:"Al Barru",arab:"البر",arti:"Yang Maha Penderma(Maha Pemberi Kebajikan)"},{urutan:80,latin:"At Tawwaab",arab:"التواب",arti:"Yang Maha Penerima Tobat"},{urutan:81,latin:"Al Muntaqim",arab:"المنتقم",arti:"Yang Maha Pemberi Balasan"},{urutan:82,latin:"Al Afuww",arab:"العفو",arti:"Yang Maha Pemaaf"},{urutan:83,latin:"Ar Ra 'uuf",arab:"الرؤوف",arti:"Yang Maha Pengasuh"},{urutan:84,latin:"Malikul Mulk",arab:"مالك الملك",arti:"Yang Maha Penguasa Kerajaan(Semesta)"},{urutan:85,latin:"Dzul Jalaali Wal Ikraam",arab:"ذو الجلال و الإكرام",arti:"Yang Maha Pemilik Kebesaran dan Kemuliaan"},{urutan:86,latin:"Al Muqsith",arab:"المقسط",arti:"Yang Maha Pemberi Keadilan"},{urutan:87,latin:"Al Jamii'",arab:"الجامع",arti:"Yang Maha Mengumpulkan"},{urutan:88,latin:"Al Ghaniyy",arab:"الغنى",arti:"Yang Maha Kaya"},{urutan:89,latin:"Al Mughnii",arab:"المغنى",arti:"Yang Maha Pemberi Kekayaan"},{urutan:90,latin:"Al Maani",arab:"المانع",arti:"Yang Maha Mencegah"},{urutan:91,latin:"Ad Dhaar",arab:"الضار",arti:"Yang Maha Penimpa Kemudharatan"},{urutan:92,latin:"An Nafii '",arab:"النافع",arti:"Yang Maha Memberi Manfaat"},{urutan:93,latin:"An Nuur",arab:"النور",arti:"Yang Maha Bercahaya(Menerangi, Memberi Cahaya)"},{urutan:94,latin:"Al Haadii",arab:"الهادئ",arti:"Yang Maha Pemberi Petunjuk"},{urutan:95,latin:"Al Badii'",arab:"البديع",arti:"Yang Maha Pencipta Yang Tiada Bandingannya"},{urutan:96,latin:"Al Baaqii",arab:"الباقي",arti:"Yang Maha Kekal"},{urutan:97,latin:"Al Waarits",arab:"الوارث",arti:"Yang Maha Pewaris"},{urutan:98,latin:"Ar Rasyiid",arab:"الرشيد",arti:"Yang Maha Pandai"},{urutan:99,latin:"As Shabuur",arab:"الصبور",arti:"Yang Maha Sabar"}]},eca5:function(a,t,n){"use strict";n.d(t,"a",(function(){return r}));n("caad"),n("2532");var r={data:function(){return{artiFilterList:["Yunus","Yusuf","Hud","Ibrahim","Nuh"]}},methods:{artiSurah:function(a){var t;return this.artiFilterList.includes(a)?(t="Nabi ".concat(a),t):a}}}}});
//# sourceMappingURL=app.7429b72b.js.map