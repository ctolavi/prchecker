webpackJsonp([1],{"0brA":function(e,t){},"7zck":function(e,t){},LEIF:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("3EgV"),n=a.n(s),r=a("NYxO"),o=(a("7zck"),a("7+uW")),c=a("Dd8w"),i=a.n(c),u={name:"App",data:function(){return{title:"PR checker",credentials:{userName:"",password:""}}},methods:i()({},Object(r.b)(["login"])),computed:i()({},Object(r.c)(["account"]))},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),e._v(" "),a("v-spacer"),e._v(" "),e.account.user.userName?e._e():a("v-layout",{attrs:{"pt-3":""}},[a("v-flex",{attrs:{xs3:"","offset-xs5":""}},[a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text"},model:{value:e.credentials.userName,callback:function(t){e.$set(e.credentials,"userName",t)},expression:"credentials.userName"}})],1),e._v(" "),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"},model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}})],1),e._v(" "),a("v-flex",{attrs:{xs1:""}},[a("v-btn",{attrs:{color:"primary",disabled:!e.credentials.userName||!e.credentials.password},on:{click:function(t){e.login(e.credentials)}}},[e._v("Login")])],1)],1),e._v(" "),e.account.user.userName?a("v-layout",{attrs:{"pt-3":""}},[a("v-flex",{attrs:{xs2:"","offset-xs10":""}},[e._v("\n        "+e._s(e.account.user.displayName)+"\n      ")])],1):e._e()],1),e._v(" "),a("v-content",[a("router-view")],1),e._v(" "),a("v-footer",{attrs:{fixed:"",app:""}},[a("span",{staticClass:"copyleft"},[e._v("©")]),e._v(" "),a("span",[e._v("2018")])])],1)},staticRenderFns:[]};var d=a("VU/8")(u,l,!1,function(e){a("LEIF")},"data-v-5ee49b6e",null).exports,p=a("/ocq"),v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{attrs:{fluid:""}},[t("v-slide-y-transition",{attrs:{mode:"out-in"}},[t("v-layout",{attrs:{column:"","align-center":"","pt-5":"","mt-5":""}},[t("blockquote",[this._v("\n        “First, solve the problem. Then, write the code.”\n        "),t("footer",[t("small",[t("em",[this._v("—John Johnson")])])])])])],1)],1)},staticRenderFns:[]};var m=a("VU/8")(null,v,!1,function(e){a("0brA")},"data-v-13755dcf",null).exports;o.a.use(p.a);var f=new p.a({routes:[{path:"/",name:"Index",component:m}]}),_=a("mtWM"),b=a.n(_);b.a.defaults.baseURL="https://api.bitbucket.org/2.0";var x=function(e,t){var a=window.btoa(e.userName+":"+e.password);b.a.defaults.headers.common.Authorization="Basic "+a,b.a.get("/users/"+e.userName).then(function(e){200===e.status&&t(e.data)})},w={state:{user:{userName:"",displayName:"",password:""}},actions:{login:function(e,t){var a=e.commit;x(t,function(e){a("updateUser",e)})}},mutations:{updateUser:function(e,t){e.user.userName=t.username,e.user.displayName=t.display_name}}};o.a.use(r.a);var h=new r.a.Store({modules:{account:w}});o.a.use(n.a),o.a.use(r.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:f,store:h,components:{App:d},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.77d1da77dca3e8e048c3.js.map