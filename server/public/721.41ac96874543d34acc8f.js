(self.webpackChunkauth_app=self.webpackChunkauth_app||[]).push([[721],{721:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ProtectedcomponentsModule:()=>a});var r=n(583),o=n(663),u=n(639),c=n(608);const s=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.authService=e}get user(){return Object.assign({},this.authService.user)}ngOnInit(){}logout(){this.authService.logout(),this.router.navigateByUrl("/auth")}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(o.F0),u.Y36(c.e))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-dashboard"]],decls:9,vars:3,consts:[[1,"logout-form-btn",3,"click"]],template:function(t,e){1&t&&(u.TgZ(0,"h1"),u._uU(1,"Protected info"),u.qZA(),u.TgZ(2,"h2"),u._uU(3,"User info"),u.qZA(),u.TgZ(4,"pre"),u._uU(5),u.ALo(6,"json"),u.qZA(),u.TgZ(7,"button",0),u.NdJ("click",function(){return e.logout()}),u._uU(8," Logout\n"),u.qZA()),2&t&&(u.xp6(5),u.hij("    ",u.lcZ(6,1,e.user),"\n"))},pipes:[r.Ts],encapsulation:2}),t})()},{path:"**",redirectTo:""}]}];let i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[o.Bz.forChild(s)],o.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[r.ez,i]]}),t})()}}]);