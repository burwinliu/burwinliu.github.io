(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,v=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&v.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0eec":function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:s,children:i=[]}=e,{class:o,staticClass:r,style:c,staticStyle:l,attrs:u={},...d}=s;return a("svg",{class:[o,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg"},u),...d},i.concat([a("path",{attrs:{d:"M11.362 2C15.518 2 14 8 14 8s6-1.65 6 2.457V22H4V2h7.362zm.827-2H2v24h20V9.614C22 7.223 15.352 0 12.189 0zM17 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3H7v1h10v-1zm-5-6H7v4h5v-4z"}})]))}}},5414:function(t,e,a){"use strict";var n=a("65f0"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background"},[a("router-view",{staticClass:"background"})],1)},i=[],o={name:"App",data:function(){return{mobile:Boolean}}},r=o,c=(a("5c0b"),a("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null),u=l.exports,d=a("5f5b"),v=a("b1e0"),b=(a("f9e3"),a("2dd8"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{staticClass:"index-nav",class:{hidden:!t.showNavbar,shadowed:t.shadowNavbar}}),a("mobile-nav-bar"),a("b-row",{attrs:{"no-gutters":""}},[a("b-col",[a("sidebar-social",{staticClass:"index-sidebar-pos"})],1),a("b-col",{staticClass:"index-router-wrapper",attrs:{cols:"10"}},[a("router-view")],1),a("b-col")],1)],1)},m=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[n("b-navbar-brand",{staticClass:"logo router-link focus",attrs:{to:{name:"view-home"}}},[n("img",{staticClass:"imgReg",attrs:{src:a("ea4e"),alt:"imageAltReg"}}),n("img",{staticClass:"imgHov",attrs:{src:a("a1ce"),alt:"imageAltHov"}}),n("img",{staticClass:"imgSel",attrs:{src:a("80ff"),alt:"imageAltSel"}})]),n("div",{staticClass:"absolute_position",attrs:{align:"right"}},[n("b-navbar-toggle",{staticClass:"icon text-center",attrs:{target:"navbar-toggle-collapse"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.expanded;return[n("b-icon",t._g({attrs:{animation:"cylon"}},a))]}}])})],1),n("b-collapse",{staticClass:"class-wrapper",attrs:{id:"navbar-toggle-collapse","is-nav":""}},[n("b-col",{staticClass:"class-wrapper"},[n("b-navbar-nav",{staticClass:"ml-auto",attrs:{align:"right"}},[n("b-navbar-nav",{attrs:{"align-v":"center"}},[t._l(t.ButtonInfoLocal,(function(e){return n("b-nav-item",{key:e.id,staticClass:"router-link button focus px-2",attrs:{to:{name:e.name}}},[t._v(t._s(e.msg))])})),t._l(t.ButtonInfoWeb,(function(e){return n("b-nav-item",{key:e.id,staticClass:"router-link button focus px-2",attrs:{href:e.href}},[t._v(t._s(e.msg))])})),n("b-nav-item",{staticClass:"router-link button focus px-2",attrs:{href:a("db8c"),title:"Burwin Liu - Resume"}},[t._v("Resume")])],2)],1)],1)],1)],1)},p=[],h={name:"NavBar",data:function(){return{ButtonInfoLocal:[{id:0,name:"view-about",msg:"About"},{id:1,name:"view-contact",msg:"Contact"}],ButtonInfoWeb:[{id:2,href:"https://nbviewer.jupyter.org/github/burwinliu/my-jupyter-nb/tree/master/",msg:"Notebook"}],expanded:!1}},props:{username:String}},w=h,_=(a("9bc4"),Object(c["a"])(w,g,p,!1,null,"0ba64286",null)),C=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-collapse",{attrs:{"is-nav":""}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}]},[t._v("Toggle Sidebar")]),n("b-sidebar",{attrs:{id:"sidebar-1",title:"Sidebar",shadow:"","z-index":"2"}},[n("div",{staticClass:"px-3 py-2"},[n("b-navbar-brand",{staticClass:"logo router-link focus",attrs:{to:{name:"view-home"}}},[n("img",{staticClass:"imgReg",attrs:{src:a("ea4e"),alt:"imageAltReg"}}),t._v(" Burwin Liu ")]),n("b-nav",{staticClass:"ml-auto",attrs:{align:"right"}},[n("b-navbar-nav",{staticClass:"button focus",attrs:{"align-v":"center"}},[t._l(t.ButtonInfo,(function(e){return n("b-nav-item",{key:e.id,staticClass:"router-link button focus",attrs:{to:{name:e.name}}},[t._v(t._s(e.msg))])})),n("b-nav-item",{staticClass:"router-link button focus",attrs:{href:a("db8c"),title:"Burwin Liu - Resume"}},[t._v("Resume")])],2)],1)],1)])],1)},x=[],S={name:"MobileNavBar",data:function(){return{ButtonInfo:[{id:0,name:"view-about",msg:"About"},{id:1,name:"view-contact",msg:"Contact"}]}},props:{username:String}},k=S,O=(a("97fc"),Object(c["a"])(k,y,x,!1,null,"71ee7d0e",null)),j=O.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-nav",{staticClass:"sidebar",attrs:{vertical:""}},[a("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"mailto:burwinliu1@gmail.com"}},[a("logo-email",{staticClass:"svg"})],1),a("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://github.com/burwinliu"}},[a("logo-github",{staticClass:"svg"})],1),a("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://www.linkedin.com/in/burwin-liu"}},[a("logo-linked-in",{staticClass:"svg"})],1),a("b-nav-item",{staticClass:"animate-hover svg-container",attrs:{href:"https://drive.google.com/file/d/1j-YPFhLOyvce7YggTX0xa-MR7UQR4XoM/view?usp=sharing"}},[a("logo-resume",{staticClass:"svg"})],1)],1)],1)],1)],1)},B=[],I=a("c43b"),M=a.n(I),P=a("786d"),H=a.n(P),z=a("d0cd"),E=a.n(z),N=a("0eec"),V=a.n(N),$={name:"SidebarSocial",components:{LogoEmail:M.a,LogoGithub:H.a,LogoLinkedIn:E.a,LogoResume:V.a}},A=$,R=(a("9aed"),Object(c["a"])(A,L,B,!1,null,"4d9c984c",null)),W=R.exports,Y={name:"Index",components:{NavBar:C,MobileNavBar:j,SidebarSocial:W},data:function(){return{showNavbar:!0,shadowNavbar:!1,lastScrollPosition:0,windowHeight:window.innerHeight,windowWidth:window.innerWidth}},created:function(){document.title=this.$route.meta.title},mounted:function(){this.lastScrollPosition=window.pageYOffset,window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){window.pageYOffset<0||Math.abs(window.pageYOffset-this.lastScrollPosition)<60||(window.pageYOffset>60?this.shadowNavbar=!0:this.shadowNavbar=!1,this.showNavbar=window.pageYOffset<this.lastScrollPosition,this.lastScrollPosition=window.pageYOffset)}}},T=Y,D=(a("7abf"),Object(c["a"])(T,f,m,!1,null,"5393f2cc",null)),J=D.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center",attrs:{id:"home"}},[a("div",{staticClass:"wrapper",class:{"px-5":t.windowWidth>=992}},[a("h2",[t._v("Hi! I am")]),a("h1",[t._v("Burwin Liu")]),a("a",[t._v("Thank you for dropping by and welcome to my website")]),t._v(" "),a("br"),a("b",[t._v("There is still more to come")])])])},Q=[],U={name:"ViewHome",created:function(){document.title=this.$route.meta.title}},X=U,q=(a("5414"),Object(c["a"])(X,F,Q,!1,null,"08699c2c",null)),G=q.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"no-gutters":""}},[a("b-row",{attrs:{id:"view-about","no-gutters":""}},[a("b-col",{staticClass:"page",class:{"px-5":t.windowWidth>=992},attrs:{id:"introduction"}},[a("b-row",{staticClass:"view-about",attrs:{"no-gutters":""}},[a("h1",[t._v(" About me ")])]),a("b-row",{staticClass:"view-about",attrs:{"no-gutters":""}},[a("a",[t._v(" Hello! Welcome to my about page. I'm Burwin Liu a Computer Scientist, a Software Engineer and a student. I'm currently based in Irvine at the moment, studying Computer Science at the University of California, Irvine.")]),a("a",[t._v(" Currently, I have worked with Data Science, Front End Design, Back End Programming and Application Development. ")]),t._v(" "),a("br"),a("a",[t._v(" I have recently worked with the following technologies: ")])]),a("b-row",[a("b-col",[a("ul",[a("li",[t._v("Node.JS")]),a("li",[t._v("Vue")]),a("li",[t._v("JavaScript")])])]),a("b-col",[a("ul",[a("li",[t._v("SQL")]),a("li",[t._v("Python")]),a("li",[t._v("Android Studio")])])])],1)],1)],1),a("b-row",{attrs:{id:"view-about"}},[a("b-col",{staticClass:"page",class:{"px-5":t.windowWidth>=992},attrs:{id:"Experience"}},[a("b-row",{staticClass:"view-about",attrs:{"no-gutters":""}},[a("h1",[t._v(" Experience ")])]),a("b-row",{staticClass:"view-about",attrs:{"no-gutters":""}},[a("a",[t._v(" You can find out more in my Resume! This part of the site is still under construction, but we are getting there, step-by-step. ")])])],1)],1)],1)},Z=[],tt={name:"ViewAbout",created:function(){document.title=this.$route.meta.title},data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}}},et=tt,at=(a("b8e8"),Object(c["a"])(et,K,Z,!1,null,"5a3ff827",null)),nt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"align-middle",attrs:{id:"view-contact"}},[a("div",{staticClass:"page",class:{"px-5":t.windowWidth>=992},attrs:{"align-v":"center"}},[a("b-row",[a("h1",{staticClass:"center-text",attrs:{"align-v":"center"}},[t._v(" Contact ")])]),a("b-row",[a("a",{staticClass:"center-text expand-width"},[t._v(" Currently, I am looking for opportunities for the upcoming Summer of 2021.")]),a("a",{staticClass:"center-text expand-width"},[t._v(" If you have any questions, or just want to chat, I would love to talk. Don't hesitate to contact me below, and I will try my utmost to get back to you. ")])]),a("b-button",{staticClass:"contact mx-auto ",attrs:{href:"mailto:burwinliu1@gmail.com"}},[t._v("Contact Me!")])],1)])},it=[],ot={name:"ViewContact",created:function(){document.title=this.$route.meta.title}},rt=ot,ct=(a("b9ad"),Object(c["a"])(rt,st,it,!1,null,"285bfc53",null)),lt=ct.exports;n["default"].use(b["a"]);var ut=new b["a"]({routes:[{path:"/",component:J,children:[{name:"view-home",path:"",component:G,meta:{title:"Burwin Liu - Home Page"}},{name:"view-about",path:"about",component:nt,meta:{title:"Burwin Liu - About Page"}},{name:"view-contact",path:"contact",component:lt,meta:{title:"Burwin Liu - Contact Page"}}]}]}),dt=ut;n["default"].use(d["a"]),n["default"].use(v["a"]),n["default"].config.productionTip=!1,new n["default"]({router:dt,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"65f0":function(t,e,a){},"786d":function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:s,children:i=[]}=e,{class:o,staticClass:r,style:c,staticStyle:l,attrs:u={},...d}=s;return a("svg",{class:[o,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 438.549 438.549"},u),...d},i.concat([a("path",{attrs:{d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"}})]))}}},"7abf":function(t,e,a){"use strict";var n=a("d433"),s=a.n(n);s.a},"80ff":function(t,e,a){t.exports=a.p+"img/dark-logo-selected.1b2be495.png"},"97fc":function(t,e,a){"use strict";var n=a("e107"),s=a.n(n);s.a},"9aed":function(t,e,a){"use strict";var n=a("bf64"),s=a.n(n);s.a},"9bc4":function(t,e,a){"use strict";var n=a("b687"),s=a.n(n);s.a},"9c0c":function(t,e,a){},a1ce:function(t,e,a){t.exports=a.p+"img/dark-logo-hovered.866878cf.png"},ad79:function(t,e,a){},b687:function(t,e,a){},b8e8:function(t,e,a){"use strict";var n=a("d61e"),s=a.n(n);s.a},b9ad:function(t,e,a){"use strict";var n=a("ad79"),s=a.n(n);s.a},bf64:function(t,e,a){},c43b:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:s,children:i=[]}=e,{class:o,staticClass:r,style:c,staticStyle:l,attrs:u={},...d}=s;return a("svg",{class:[o,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg"},u),...d},i.concat([a("path",{attrs:{d:"M0 3v18h24V3H0zm6.623 7.929L2 16.641V7.183l4.623 3.746zM2.482 5h19.035L12 12.713 2.482 5zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663l5.513-6.812zm9.208-1.264L22 7.183v9.348l-4.616-5.607z"}})]))}}},d0cd:function(t,e){t.exports={functional:!0,render(t,e){const{_c:a,_v:n,data:s,children:i=[]}=e,{class:o,staticClass:r,style:c,staticStyle:l,attrs:u={},...d}=s;return a("svg",{class:[o,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 430.117 430.117"},u),...d},i.concat([a("path",{attrs:{d:"M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z"}})]))}}},d433:function(t,e,a){},d61e:function(t,e,a){},db8c:function(t,e,a){t.exports=a.p+"7613c944c2a7b0b186a4d097298adca8.pdf"},e107:function(t,e,a){},ea4e:function(t,e,a){t.exports=a.p+"img/dark-logo.82ccfa6a.png"}});
//# sourceMappingURL=app.b54aee5a.js.map