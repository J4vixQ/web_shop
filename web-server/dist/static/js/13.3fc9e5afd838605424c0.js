webpackJsonp([13],{"+0ED":function(e,t){},"/oGv":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Xxa5"),s=n.n(o),r=n("exGp"),a=n.n(r),c=n("Dd8w"),i=n.n(c),u=n("NYxO"),d=n("zL8q"),l=n("gyMJ"),p={data:function(){return{phone:"",countDown:0,code:""}},computed:i()({},Object(u.c)(["userInfo"]),{phoneRight:function(){return/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)}}),methods:{getVerifyCode:function(){var e=this;return a()(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.phoneRight&&(e.countDown=60,e.intervalId=setInterval(function(){e.countDown--,0===e.countDown&&clearInterval(e.intervalId)},1e3)),t.next=3,Object(l.v)(e.phone);case 3:n=t.sent,console.log(n),0===n.err_code?(Object(d.MessageBox)({type:"info",message:n.message,showClose:!0}),clearInterval(e.intervalId),e.countDown=0):200===n.success_code&&Object(d.MessageBox)({type:"info",message:"验证码为:"+n.message+", 短信功能暂未开通,十分抱歉对您产生的不便",showClose:!0});case 6:case"end":return t.stop()}},t,e)}))()},goTo:function(e){this.$router.replace(e)},submitEdit:function(){var e=this;return a()(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.phone){t.next=3;break}return e.$message("手机号不得为空！"),t.abrupt("return");case 3:if(e.code){t.next=6;break}return e.$message("验证码不得为空！"),t.abrupt("return");case 6:return t.next=8,Object(l.h)(e.userInfo.id,e.phone,e.code);case 8:200===(n=t.sent).success_code?(e.$message({message:n.message,type:"success"}),e.$store.dispatch("getUserInfo",{user_id:e.userInfo.id}),e.$router.replace("/me/profile")):e.$message.error(n.message);case 10:case"end":return t.stop()}},t,e)}))()}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"edit-phone"}},[n("section",{staticClass:"edit-message"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",maxlength:"11",placeholder:"手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),e.countDown?n("button",{staticClass:"get-verification",attrs:{disabled:"disabled"}},[e._v("\n        已发送("+e._s(e.countDown)+"s)\n    ")]):n("button",{staticClass:"get-verification",class:{phone_right:e.phoneRight},on:{click:function(t){return t.preventDefault(),e.getVerifyCode()}}},[e._v("\n      获取验证码\n    ")])]),e._v(" "),n("section",{staticClass:"edit-verification"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"tel",maxlength:"8",placeholder:"验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"btn-section"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.goTo("/me/profile")}}},[e._v("返回")]),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:e.submitEdit}},[e._v("编辑")])],1)])},staticRenderFns:[]};var f=n("VU/8")(p,v,!1,function(e){n("+0ED")},"data-v-542578d4",null);t.default=f.exports}});
//# sourceMappingURL=13.3fc9e5afd838605424c0.js.map