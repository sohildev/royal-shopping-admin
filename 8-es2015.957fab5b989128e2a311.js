(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{PCNd:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i("ofXK"),a=i("fXoL");let n=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[r.b]]}),e})()},ZLTr:function(e,t,i){"use strict";i.r(t),i.d(t,"CategoryAddModule",(function(){return P}));var r=i("ofXK"),a=i("3Pt+"),n=i("tyNb"),o=i("Vr6k"),s=i("PCNd"),d=i("fXoL"),b=i("es7i"),c=i("Chay"),l=i("HOh6"),u=i("UaFz");function m(e,t){1&e&&(d.Pb(0,"div",38),d.Kb(1,"div",39),d.Ob())}function f(e,t){1&e&&d.Kb(0,"i",40)}function h(e,t){1&e&&d.Kb(0,"i",41)}const p=function(){return["/category"]};let g=(()=>{class e{constructor(e,t,i,r){this.router=e,this.activatedRoute=t,this.fb=i,this.categoryService=r,this.loadingState=!1,this.editImageUrl=null,this.showLoader=!1,this.formErrors={name:null,apierror:null},this.isEditing=!1,this.editId=null,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id"),this.editObject()),this.addForm=i.group({name:[null,a.p.compose([a.p.required])]})}ngOnInit(){}editObject(){this.loadingState=!0,this.categoryService.getCategoryById(this.editId).subscribe(e=>{this.loadingState=!1,e.data&&(this.editImageUrl=e.data.image,this.addForm.patchValue({name:e.data.name}))},e=>{this.loadingState=!1,this.router.navigateByUrl("/category")})}fileChangeEvent(e){if(!e.target.files[0].name.match(/(.*?)\.(jpg|jpeg|png|gif|giff)$/))return swal.fire("Invalid File!","Please select valid file ","error"),this.removeFile(),!1;this.removeFile(),this.selectedFile=e.target.files[0]}removeFile(){this.selectedFile=null}submitForm(e){this.addForm.valid&&(this.showLoader=!0,this.isEditing?this.categoryService.editCategory(this.editId,e.value).subscribe(e=>{this.showLoader=!1,e.success?this.router.navigateByUrl("/category"):(this.showLoader=!1,e.error.map(e=>{e.hasOwnProperty("name")&&(this.formErrors.name=e.name)}))}):this.categoryService.addCategory(e.value).subscribe(e=>{this.showLoader=!1,e.success?this.router.navigateByUrl("/category"):(this.showLoader=!1,e.error.map(e=>{e.hasOwnProperty("name")&&(this.formErrors.name=e.name)}))}))}}return e.\u0275fac=function(t){return new(t||e)(d.Jb(n.e),d.Jb(n.a),d.Jb(a.c),d.Jb(b.a))},e.\u0275cmp=d.Db({type:e,selectors:[["app-category-add"]],decls:49,vars:11,consts:[[3,"show"],[1,"content"],[1,"page-header"],[1,"d-flex","align-items-center"],[1,"mr-auto","p-3"],[1,"page-content","container-fluid"],["class","lorder-wrap",4,"ngIf"],[1,"card","card-tabs","strache-card"],["role","form",3,"formGroup","ngSubmit"],[1,"card-body","p-25","p-l-30","p-r-30"],[1,"d-flex"],[1,"left-form-content","m-l-20","m-r-40"],[1,"clearfix"],["data-provides","fileinput",1,"fileinput","text-center","fileinput-new"],[1,"btn-file","mt-3"],[1,"thumbnail","fileinput-new","rounded-circle",2,"width","150px","height","150px"],["alt","",3,"src"],[1,"fileinput-new","btn","btn-secondary","btn-sm","btn-file","mt-3"],["accept","image/x-png,image/jpeg","type","file","file-model","myFile",3,"change"],[1,"fileinput-preview","fileinput-exists","thumbnail","rounded-circle",2,"width","150px","height","150px"],[1,"text-center"],["data-dismiss","fileinput",1,"btn","btn-link","btn-sm","fileinput-exists","mt-3",3,"click"],[1,"clearfix","mt-3"],[1,"upload-img-label","text-muted","font-size-12"],[1,"row","flex"],[1,"col-xl-12",2,"margin-left","25px"],[1,"form-row"],[1,"col-sm-12"],[1,"form-group"],[1,"control-label"],["type","text",1,"form-control",3,"formControl"],[1,"card-footer","text-right"],[1,"btn-list"],["type","button",1,"btn","btn-outline-secondary","btn-rounded",3,"routerLink"],[1,"fas","fa-times"],["type","submit",1,"btn","btn-outline-success","btn-rounded",3,"disabled"],["class","fas fa-check",4,"ngIf"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"lorder-wrap"],[1,"loader"],[1,"fas","fa-check"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,t){1&e&&(d.Kb(0,"loder",0),d.Pb(1,"div",1),d.Pb(2,"header",2),d.Pb(3,"div",3),d.Pb(4,"div",4),d.Pb(5,"h1"),d.vc(6),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Pb(7,"section",5),d.tc(8,m,2,0,"div",6),d.Pb(9,"div",7),d.Pb(10,"form",8),d.Xb("ngSubmit",(function(){return t.submitForm(t.addForm)})),d.Pb(11,"div",9),d.Pb(12,"div",10),d.Pb(13,"div",11),d.Pb(14,"div",12),d.Pb(15,"div",13),d.Pb(16,"div",14),d.Pb(17,"div",15),d.Kb(18,"img",16),d.Ob(),d.Kb(19,"div",12),d.Pb(20,"button",17),d.vc(21," Browse Image "),d.Ob(),d.Pb(22,"input",18),d.Xb("change",(function(e){return t.fileChangeEvent(e)})),d.Ob(),d.Kb(23,"div",19),d.Ob(),d.Pb(24,"div",20),d.Pb(25,"a",21),d.Xb("click",(function(){return t.removeFile()})),d.vc(26,"Remove"),d.Ob(),d.Ob(),d.Pb(27,"div",22),d.Pb(28,"p",23),d.vc(29,"*Recommended Size: "),d.Kb(30,"br"),d.vc(31,"Minimum 250 * 250"),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Pb(32,"div",24),d.Pb(33,"div",25),d.Pb(34,"div",26),d.Pb(35,"div",27),d.Pb(36,"div",28),d.Pb(37,"label",29),d.vc(38,"Name"),d.Ob(),d.Kb(39,"input",30),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Pb(40,"div",31),d.Pb(41,"div",32),d.Pb(42,"button",33),d.Kb(43,"i",34),d.vc(44," Cancel"),d.Ob(),d.Pb(45,"button",35),d.tc(46,f,1,0,"i",36),d.tc(47,h,1,0,"i",37),d.vc(48," Success"),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob()),2&e&&(d.ec("show",t.loadingState),d.zb(6),d.xc("",t.isEditing?"Update":"Create"," Category"),d.zb(2),d.ec("ngIf",t.loadingState),d.zb(2),d.ec("formGroup",t.addForm),d.zb(8),d.ec("src",t.editImageUrl?t.editImageUrl:"assets/images/demo.png",d.pc),d.zb(21),d.ec("formControl",t.addForm.controls.name),d.zb(3),d.ec("routerLink",d.gc(10,p)),d.zb(3),d.ec("disabled",t.showLoader),d.zb(1),d.ec("ngIf",!t.showLoader),d.zb(1),d.ec("ngIf",t.showLoader))},directives:[c.a,r.k,a.r,a.j,l.a,a.e,a.b,a.i,a.d,u.a,n.f],encapsulation:2}),e})();var v=i("yCMK");const O=[{path:"",component:g}];let P=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(t){return new(t||e)},imports:[[r.b,a.f,a.n,n.i.forChild(O),o.a,v.a,s.a]]}),e})()}}]);