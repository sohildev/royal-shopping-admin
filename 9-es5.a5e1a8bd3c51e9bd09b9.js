function _defineProperties(e,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,o,n){return o&&_defineProperties(e.prototype,o),n&&_defineProperties(e,n),e}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{PCNd:function(e,o,n){"use strict";n.d(o,"a",(function(){return a}));var r=n("ofXK"),t=n("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=t.Hb({type:e}),e.\u0275inj=t.Gb({factory:function(o){return new(o||e)},imports:[[r.b]]}),e}()},PSbb:function(e,o,n){"use strict";n.r(o),n.d(o,"AddCompanyModule",(function(){return S}));var r=n("ofXK"),t=n("3Pt+"),a=n("tyNb"),i=n("Lw2Y"),s=n("fXoL"),c=n("AwSQ"),b=n("8cFx"),m=n("Q05f"),d=n("Chay"),l=n("HOh6"),p=n("UaFz"),u=n("/SVk");function f(e,o){1&e&&(s.Pb(0,"div",30),s.Kb(1,"div",31),s.Ob())}function h(e,o){1&e&&s.Kb(0,"i",32)}function v(e,o){1&e&&s.Kb(0,"i",33)}var y,P,O=function(){return["/company"]},w=((y=function(){function e(o,n,r,a,s,c){_classCallCheck(this,e),this.router=o,this.activatedRoute=n,this.fb=r,this.dataService=a,this.commonService=s,this.companyService=c,this.loadingState=!1,this.showLoader=!1,this.formErrors={email:null,name:null,phone_number:null,apierror:null},this.isEditing=!1,this.editId=null,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id"),this.editObject()),this.companyForm=r.group({email:[null,t.p.compose([t.p.required,i.e])],name:[null,t.p.compose([t.p.required])],phone_number:[null,t.p.compose([t.p.required,t.p.minLength(8),t.p.maxLength(15)])],address:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"editObject",value:function(){var e=this;this.loadingState=!0,this.companyService.getCompanyById(this.editId,{admin:!0}).subscribe((function(o){e.loadingState=!1,o.data&&e.companyForm.patchValue({email:o.data.email,name:o.data.name,phone_number:o.data.phone_number,address:o.data.address})}),(function(o){e.loadingState=!1,e.router.navigateByUrl("/company")}))}},{key:"submitForm",value:function(){var e=this;if(this.companyForm.valid){this.showLoader=!0;var o={email:this.companyForm.value.email.toLowerCase(),phone_number:this.companyForm.value.phone_number,name:this.companyForm.value.name,address:this.companyForm.value.address};this.isEditing?this.companyService.editCompany(this.editId,o).subscribe((function(o){e.showLoader=!1,o.success?e.router.navigateByUrl("/company"):(e.showLoader=!1,o.error.map((function(o){o.hasOwnProperty("email")&&(e.formErrors.email=o.email),o.hasOwnProperty("phone_number")&&(e.formErrors.phone_number=o.phone_number),o.hasOwnProperty("name")||o.hasOwnProperty("phone_number")||o.hasOwnProperty("email")||(e.formErrors.apierror=o)})))})):this.companyService.addCompany(o).subscribe((function(o){e.showLoader=!1,o.success?e.router.navigateByUrl("/company"):(e.showLoader=!1,o.error.map((function(o){o.hasOwnProperty("email")&&(e.formErrors.email=o.email),o.hasOwnProperty("phone_number")&&(e.formErrors.phone_number=o.phone_number),o.hasOwnProperty("company_name")||o.hasOwnProperty("email")||o.hasOwnProperty("phone_number")||(e.formErrors.apierror=o)})))}))}}}]),e}()).\u0275fac=function(e){return new(e||y)(s.Jb(a.e),s.Jb(a.a),s.Jb(t.c),s.Jb(c.a),s.Jb(b.a),s.Jb(m.a))},y.\u0275cmp=s.Db({type:y,selectors:[["app-add-company"]],decls:51,vars:13,consts:[[3,"show"],[1,"content"],[1,"page-header"],[1,"d-flex","align-items-center"],[1,"mr-auto","p-3"],[1,"page-content","container-fluid"],["class","lorder-wrap",4,"ngIf"],[1,"card","card-tabs","strache-card"],["role","form",3,"formGroup","ngSubmit"],[1,"card-body","p-l-30","p-r-30"],[1,"row"],[1,"col-xl-8"],[1,"mb-4","mt-1","font-weight-600","text-dark"],[1,"form-row"],[1,"col-sm-6"],[1,"form-group"],[1,"control-label"],["type","text",1,"form-control",3,"formControl"],[1,"input-group"],["placeholder","Code","value","+91","type","text","disabled","",1,"form-control",2,"flex","none !important","width","70px"],["number","","type","text","numbersOnly","",1,"form-control",3,"formControl"],[1,"col-sm-12"],["rows","2",1,"form-control",3,"formControl"],[1,"card-footer","text-right"],[1,"btn-list"],["type","button",1,"btn","btn-outline-secondary","btn-rounded",3,"routerLink"],[1,"fas","fa-times"],["type","submit",1,"btn","btn-outline-success","btn-rounded",3,"disabled"],["class","fas fa-check",4,"ngIf"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"lorder-wrap"],[1,"loader"],[1,"fas","fa-check"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,o){1&e&&(s.Kb(0,"loder",0),s.Pb(1,"div",1),s.Pb(2,"header",2),s.Pb(3,"div",3),s.Pb(4,"div",4),s.Pb(5,"h1"),s.vc(6),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(7,"section",5),s.tc(8,f,2,0,"div",6),s.Pb(9,"div",7),s.Pb(10,"form",8),s.Xb("ngSubmit",(function(){return o.submitForm()})),s.Pb(11,"div",9),s.Pb(12,"div",10),s.Pb(13,"div",11),s.Pb(14,"h5",12),s.vc(15,"Company Details"),s.Ob(),s.Pb(16,"div",13),s.Pb(17,"div",14),s.Pb(18,"div",15),s.Pb(19,"label",16),s.vc(20,"Name"),s.Ob(),s.Kb(21,"input",17),s.Ob(),s.Ob(),s.Pb(22,"div",14),s.Pb(23,"div",15),s.Pb(24,"label",16),s.vc(25,"Email"),s.Ob(),s.Kb(26,"input",17),s.Ob(),s.Ob(),s.Ob(),s.Pb(27,"div",13),s.Pb(28,"div",14),s.Pb(29,"div",15),s.Pb(30,"label",16),s.vc(31,"Phone No"),s.Ob(),s.Pb(32,"div",18),s.Kb(33,"input",19),s.Kb(34,"input",20),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(35,"div",13),s.Pb(36,"div",21),s.Pb(37,"div",15),s.Pb(38,"label",16),s.vc(39,"Address"),s.Ob(),s.Pb(40,"div",18),s.Kb(41,"textarea",22),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(42,"div",23),s.Pb(43,"div",24),s.Pb(44,"button",25),s.Kb(45,"i",26),s.vc(46," Cancel"),s.Ob(),s.Pb(47,"button",27),s.tc(48,h,1,0,"i",28),s.tc(49,v,1,0,"i",29),s.vc(50," Success"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.ec("show",o.loadingState),s.zb(6),s.xc("",o.isEditing?"Update":"Create"," Company"),s.zb(2),s.ec("ngIf",o.loadingState),s.zb(2),s.ec("formGroup",o.companyForm),s.zb(11),s.ec("formControl",o.companyForm.controls.name),s.zb(5),s.ec("formControl",o.companyForm.controls.email),s.zb(8),s.ec("formControl",o.companyForm.controls.phone_number),s.zb(7),s.ec("formControl",o.companyForm.controls.address),s.zb(3),s.ec("routerLink",s.gc(12,O)),s.zb(3),s.ec("disabled",o.showLoader),s.zb(1),s.ec("ngIf",!o.showLoader),s.zb(1),s.ec("ngIf",o.showLoader))},directives:[d.a,r.k,t.r,t.j,l.a,t.e,t.b,t.i,t.d,p.a,u.a,a.f],encapsulation:2}),y),g=n("Vr6k"),C=n("PCNd"),_=n("yCMK"),k=[{path:"",component:w,data:{title:"add_company"}}],S=((P=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:P}),P.\u0275inj=s.Gb({factory:function(e){return new(e||P)},imports:[[r.b,t.f,t.n,a.i.forChild(k),g.a,C.a,_.a]]}),P)}}]);