"use strict";(self.webpackChunktasks=self.webpackChunktasks||[]).push([[341],{341:(A,u,n)=>{n.r(u),n.d(u,{AuthModule:()=>h});var f=n(6814),v=n(1885),r=n(6223),g=n(9862),c=n(1896),t=n(5879),m=n(7337);let _=(()=>{var e;class a{constructor(o){this.http=o}login(o){return this.http.post(m.N.baseUrl+"auth/login",o)}register(o){return this.http.post(m.N.baseUrl+"auth/createAccount",o)}}return(e=a).\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();var p=n(5219);const b=[{path:"login",component:(()=>{var e;class a{constructor(o,i,s,d){this.loginService=o,this.fb=i,this.router=s,this.messageService=d,this.hide=!0}ngOnInit(){this.createForm()}createForm(){this.formLogin=this.fb.group({email:["omar@user.com",[r.kI.email,r.kI.required]],password:["12345",[r.kI.required]],role:["user"]})}login(){this.loginService.login(this.formLogin.value).subscribe(o=>{localStorage.setItem("token",o.token),this.router.navigate(["user/main/home"]),console.log(o),this.messageService.add({severity:"success",summary:"Success",detail:"Login Success"})})}}return(e=a).\u0275fac=function(o){return new(o||e)(t.Y36(_),t.Y36(r.qu),t.Y36(c.F0),t.Y36(p.ez))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:60,vars:4,consts:[[1,"sec1","vh-100"],[1,"container","py-5","h-100"],[1,"row","d-flex","align-items-center","justify-content-center","h-100"],[1,"col-md-6"],["src","https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg","alt","Phone image",1,"img-fluid"],[1,"card","p-5","rounded-5","col-md-6"],[1,"text-center","fs-1","fw-bold",2,"color","#3d4371"],[1,"text-secondary","text-center","fs-5","fw-bold"],[3,"formGroup"],[1,"form-outline","mb-4"],["formControlName","email","type","email",1,"form-control","form-control-lg"],["for","form1Example13",1,"form-label"],["formControlName","password","type","password",1,"form-control","form-control-lg"],["for","form1Example23",1,"form-label"],[2,"color","#3d4371"],["routerLink","/user/register",1,"text-decoration-underline"],[1,"text-center"],["type","submit",1,"btn","px-4","btn-lg","btn-block","text-white",2,"background-color","#3d4371",3,"disabled","click"],[1,"mt-1"],["routerLink","/admin/login","role","button",1,"btn","btn-primary","btn-lg","btn-block",2,"background-color","#3d4371"],[1,"fab","fa-twitter","me-2"],[1,"sec2","vh-100",2,"display","none"],[1,"card","p-5","rounded-5","col-md-7","col-lg-5","col-xl-5","offset-xl-1"],["type","submit",1,"btn","text-white","px-4","btn-lg",2,"background-color","#3d4371",3,"disabled","click"],["routerLink","/admin/login","role","button",1,"btn","text-white","btn-lg","btn-block",2,"background-color","#3d4371"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"h1",6),t._uU(7,"Feadtured-App"),t.qZA(),t.TgZ(8,"h3",7),t._uU(9,"User-Login"),t.qZA(),t.TgZ(10,"form",8)(11,"div",9),t._UZ(12,"input",10),t.TgZ(13,"label",11),t._uU(14,"Email address"),t.qZA()(),t.TgZ(15,"div",9),t._UZ(16,"input",12),t.TgZ(17,"label",13),t._uU(18,"Password"),t.qZA()(),t.TgZ(19,"div",9)(20,"span",14),t._uU(21,"Have't Account ? "),t.TgZ(22,"a",15),t._uU(23,"create one"),t.qZA()()(),t.TgZ(24,"div",16)(25,"button",17),t.NdJ("click",function(){return i.login()}),t._uU(26,"Log in"),t.qZA(),t.TgZ(27,"div",18)(28,"a",19),t._UZ(29,"i",20),t._uU(30,"back to admin login"),t.qZA()()()()()()()(),t.TgZ(31,"section",21)(32,"div",1)(33,"div",2)(34,"div",22)(35,"h1",6),t._uU(36,"Feadtured-App"),t.qZA(),t.TgZ(37,"h3",7),t._uU(38,"User-Login"),t.qZA(),t.TgZ(39,"form",8)(40,"div",9),t._UZ(41,"input",10),t.TgZ(42,"label",11),t._uU(43,"Email address"),t.qZA()(),t.TgZ(44,"div",9),t._UZ(45,"input",12),t.TgZ(46,"label",13),t._uU(47,"Password"),t.qZA()(),t.TgZ(48,"div",9)(49,"span",14),t._uU(50,"Have't Account ? "),t.TgZ(51,"a",15),t._uU(52,"create one"),t.qZA()()(),t.TgZ(53,"div",16)(54,"button",23),t.NdJ("click",function(){return i.login()}),t._uU(55,"Log in"),t.qZA(),t.TgZ(56,"div",18)(57,"a",24),t._UZ(58,"i",20),t._uU(59,"back to admin login"),t.qZA()()()()()()()()),2&o&&(t.xp6(10),t.Q6J("formGroup",i.formLogin),t.xp6(15),t.Q6J("disabled",i.formLogin.invalid),t.xp6(14),t.Q6J("formGroup",i.formLogin),t.xp6(15),t.Q6J("disabled",i.formLogin.invalid))},dependencies:[c.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:['.divider[_ngcontent-%COMP%]:after, .divider[_ngcontent-%COMP%]:before{content:"";flex:1;height:1px;background:#eee}@media only screen and (max-width: 767px){.sec1[_ngcontent-%COMP%]{display:none!important}.sec2[_ngcontent-%COMP%]{display:block!important}section[_ngcontent-%COMP%]{background-repeat:no-repeat;background-color:#3d4371;background-position:center;background-size:cover}.card[_ngcontent-%COMP%]{opacity:.85}}']}),a})()},{path:"register",component:(()=>{var e;class a{constructor(o,i,s,d){this.loginService=o,this.fb=i,this.router=s,this.messageService=d,this.hide=!0}ngOnInit(){this.createForm()}createForm(){this.formRegister=this.fb.group({username:["",[r.kI.required]],email:["",[r.kI.email,r.kI.required]],password:["",[r.kI.required]],role:["user"]})}register(){this.loginService.register(this.formRegister.value).subscribe(o=>{localStorage.setItem("token",o.token),this.router.navigate(["user/main/home"]),this.messageService.add({severity:"success",summary:"Success",detail:"Account created Successfuly"})})}}return(e=a).\u0275fac=function(o){return new(o||e)(t.Y36(_),t.Y36(r.qu),t.Y36(c.F0),t.Y36(p.ez))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:68,vars:4,consts:[[1,"sec1","vh-100"],[1,"container","py-5","h-100"],[1,"row","d-flex","align-items-center","justify-content-center","h-100"],[1,"col-md-6"],["src","https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg","alt","Phone image",1,"img-fluid"],[1,"card","p-5","rounded-5","col-md-6"],[1,"text-center","fs-1","fw-bold",2,"color","#3d4371"],[1,"text-secondary","text-center","fs-5","fw-bold"],[3,"formGroup"],[1,"form-outline","mb-4"],["formControlName","username","type","text","id","form1Example13",1,"form-control","form-control-lg"],["for","form1Example13",1,"form-label"],["formControlName","email","type","email","id","form1Example13",1,"form-control","form-control-lg"],["formControlName","password","type","password","id","form1Example23",1,"form-control","form-control-lg"],["for","form1Example23",1,"form-label"],[2,"color","#3d4371"],["routerLink","/user/login",1,"text-decoration-underline"],[1,"text-center"],["type","submit",1,"btn","px-4","btn-lg","btn-block","text-white",2,"background-color","#3d4371",3,"disabled","click"],[1,"mt-1"],["href","#!","role","button",1,"btn","btn-primary","btn-lg","btn-block",2,"background-color","#55acee"],[1,"fab","fa-twitter","me-2"],[1,"sec2","vh-100",2,"display","none"],[1,"card","p-5","rounded-5","col-md-7","col-lg-5","col-xl-5","offset-xl-1"],["type","submit",1,"btn","text-white","px-4","btn-lg",2,"background-color","#3d4371",3,"disabled","click"],["routerLink","/admin/login","role","button",1,"btn","text-white","btn-lg","btn-block",2,"background-color","#3d4371"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5)(6,"h1",6),t._uU(7,"Feadtured-App"),t.qZA(),t.TgZ(8,"h3",7),t._uU(9,"User"),t.qZA(),t.TgZ(10,"form",8)(11,"div",9),t._UZ(12,"input",10),t.TgZ(13,"label",11),t._uU(14,"User name"),t.qZA()(),t.TgZ(15,"div",9),t._UZ(16,"input",12),t.TgZ(17,"label",11),t._uU(18,"Email address"),t.qZA()(),t.TgZ(19,"div",9),t._UZ(20,"input",13),t.TgZ(21,"label",14),t._uU(22,"Password"),t.qZA()(),t.TgZ(23,"div",9)(24,"span",15),t._uU(25,"already have an account ? "),t.TgZ(26,"a",16),t._uU(27,"login in"),t.qZA()()(),t.TgZ(28,"div",17)(29,"button",18),t.NdJ("click",function(){return i.register()}),t._uU(30,"sign in"),t.qZA(),t.TgZ(31,"div",19)(32,"a",20),t._UZ(33,"i",21),t._uU(34,"Continue as a User"),t.qZA()()()()()()()(),t.TgZ(35,"section",22)(36,"div",1)(37,"div",2)(38,"div",23)(39,"h1",6),t._uU(40,"Feadtured-App"),t.qZA(),t.TgZ(41,"h3",7),t._uU(42,"User"),t.qZA(),t.TgZ(43,"form",8)(44,"div",9),t._UZ(45,"input",10),t.TgZ(46,"label",11),t._uU(47,"User name"),t.qZA()(),t.TgZ(48,"div",9),t._UZ(49,"input",12),t.TgZ(50,"label",11),t._uU(51,"Email address"),t.qZA()(),t.TgZ(52,"div",9),t._UZ(53,"input",13),t.TgZ(54,"label",14),t._uU(55,"Password"),t.qZA()(),t.TgZ(56,"div",9)(57,"span",15),t._uU(58,"already have an account ? "),t.TgZ(59,"a",16),t._uU(60,"login in"),t.qZA()()(),t.TgZ(61,"div",17)(62,"button",24),t.NdJ("click",function(){return i.register()}),t._uU(63,"Sign in"),t.qZA(),t.TgZ(64,"div",19)(65,"a",25),t._UZ(66,"i",21),t._uU(67,"back to admin login"),t.qZA()()()()()()()()),2&o&&(t.xp6(10),t.Q6J("formGroup",i.formRegister),t.xp6(19),t.Q6J("disabled",i.formRegister.invalid),t.xp6(14),t.Q6J("formGroup",i.formRegister),t.xp6(19),t.Q6J("disabled",i.formRegister.invalid))},dependencies:[c.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:['.divider[_ngcontent-%COMP%]:after, .divider[_ngcontent-%COMP%]:before{content:"";flex:1;height:1px;background:#eee}@media only screen and (max-width: 767px){.sec1[_ngcontent-%COMP%]{display:none!important}.sec2[_ngcontent-%COMP%]{display:block!important}section[_ngcontent-%COMP%]{background-repeat:no-repeat;background-color:#3d4371;background-position:center;background-size:cover}.card[_ngcontent-%COMP%]{opacity:.85}}']}),a})()}];let Z=(()=>{var e;class a{}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(b),c.Bz]}),a})(),h=(()=>{var e;class a{}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.q,Z,r.u5,r.UX,g.JF,f.ez]}),a})()},1885:(A,u,n)=>{n.d(u,{q:()=>o});var f=n(4630),v=n(8005),r=n(2296),g=n(9488),c=n(5195),t=n(5986),m=n(9347),_=n(3176),p=n(617),U=n(2032),T=n(7466),b=n(8525),Z=n(3566),h=n(5313),e=n(8034),a=n(3680),l=n(5879);let o=(()=>{var i;class s{}return(i=s).\u0275fac=function(E){return new(E||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[f.Bb,a.XK,v._r,r.ot,g.vV,c.QW,t.p9,m.Is,_.N6,p.Ps,U.c,T.Fk,b.LD,e.FA,Z.JX,h.p0]}),s})()}}]);