(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{2810:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("s7LF");class i{constructor(l,n,u,t){this.router=l,this.activatedRoute=n,this.fb=u,this.productService=t,this.loadingState=!1,this.editImageUrl=null,this.showLoader=!1,this.formErrors={name:null,apierror:null},this.isEditing=!1,this.editId=null,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id"),this.editObject()),this.addForm=u.group({name:[null,e.q.compose([e.q.required])],price:[null,e.q.compose([e.q.required])],category_id:[null,e.q.compose([e.q.required])],brand_id:[null,e.q.compose([e.q.required])]})}ngOnInit(){}editObject(){this.productService.getProductById(this.editId).subscribe(l=>{console.log(l),l.data&&(this.editImageUrl=l.data.image,this.addForm.patchValue({name:l.data.name,price:l.data.price,category_id:l.data.category_id,brand_id:l.data.brand_id}))},l=>{console.log(l),this.router.navigateByUrl("/product")})}fileChangeEvent(l){if(!l.target.files[0].name.match(/(.*?)\.(jpg|jpeg|png|gif|giff)$/))return swal.fire("Invalid File!","Please select valid file ","error"),this.removeFile(),!1;this.removeFile(),this.selectedFile=l.target.files[0]}removeFile(){this.selectedFile=null}submitForm(l){if(this.addForm.valid){this.showLoader=!0;const n=new FormData;n.append("name",l.value.name),n.append("price",l.value.price),n.append("category_id",l.value.category_id),n.append("brand_id",l.value.brand_id),this.selectedFile&&n.append("file",this.selectedFile),this.isEditing?this.productService.editProduct(this.editId,n).subscribe(l=>{this.showLoader=!1,l.success?this.router.navigateByUrl("/product"):(this.showLoader=!1,l.error.map(l=>{l.hasOwnProperty("name")&&(this.formErrors.name=l.name)}))}):this.productService.addProduct(n).subscribe(l=>{this.showLoader=!1,l.success?this.router.navigateByUrl("/product"):(this.showLoader=!1,l.error.map(l=>{l.hasOwnProperty("name")&&(this.formErrors.name=l.name)}))})}}}class s{}var o=u("pMnS"),a=u("SJqt"),r=u("SVse"),d=u("4ioC"),c=u("9LzP"),b=u("BDec"),p=u("/SVk"),g=u("iInd"),m=u("nhC3"),h=t.nb({encapsulation:2,styles:[],data:{}});function f(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"div",[["class","lorder-wrap"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[["class","loader"]],null,null,null,null,null))],null,null)}function v(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,0,"i",[["class","fas fa-check"]],null,null,null,null,null))],null,null)}function z(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,0,"i",[["class","fa fa-spinner fa-spin"]],null,null,null,null,null))],null,null)}function y(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,100,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"header",[["class","page-header"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,3,"div",[["class","d-flex align-items-center"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,2,"div",[["class","mr-auto p-3"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Hb(5,null,[""," Product"])),(l()(),t.pb(6,0,null,null,94,"section",[["class","page-content container-fluid"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,f)),t.ob(8,16384,null,0,r.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(9,0,null,null,91,"div",[["class","card card-tabs strache-card"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,90,"form",[["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,i=l.component;return"submit"===n&&(e=!1!==t.zb(l,12).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.zb(l,12).onReset()&&e),"ngSubmit"===n&&(e=!1!==i.submitForm(i.addForm)&&e),e}),null,null)),t.ob(11,16384,null,0,e.v,[],null,null),t.ob(12,540672,null,0,e.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Eb(2048,null,e.b,null,[e.f]),t.ob(14,16384,null,0,e.l,[[4,e.b]],null,null),t.ob(15,16384,null,0,d.a,[t.k],null,null),(l()(),t.pb(16,0,null,null,71,"div",[["class","card-body p-25 p-l-30 p-r-30"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,70,"div",[["class","d-flex"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,18,"div",[["class","left-form-content m-l-20 m-r-40"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,17,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,16,"div",[["class","fileinput text-center fileinput-new"],["data-provides","fileinput"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,7,"div",[["class","btn-file mt-3"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,1,"div",[["class","thumbnail fileinput-new  rounded-circle"],["style","width: 150px; height: 150px;"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(24,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,1,"button",[["class","fileinput-new btn btn-secondary btn-sm btn-file mt-3"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" Browse Image "])),(l()(),t.pb(27,0,null,null,0,"input",[["accept","image/x-png,image/jpeg"],["file-model","myFile"],["type","file"]],null,[[null,"change"]],(function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.fileChangeEvent(u)&&t),t}),null,null)),(l()(),t.pb(28,0,null,null,0,"div",[["class","fileinput-preview fileinput-exists thumbnail  rounded-circle"],["style","width: 150px; height: 150px;"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,1,"a",[["class","btn btn-link btn-sm fileinput-exists mt-3"],["data-dismiss","fileinput"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeFile()&&t),t}),null,null)),(l()(),t.Hb(-1,null,["Remove"])),(l()(),t.pb(32,0,null,null,4,"div",[["class","clearfix mt-3"]],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,3,"p",[["class","upload-img-label text-muted font-size-12"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["*Recommended Size:"])),(l()(),t.pb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Minimum 250 * 250"])),(l()(),t.pb(37,0,null,null,50,"div",[["class","row flex"]],null,null,null,null,null)),(l()(),t.pb(38,0,null,null,49,"div",[["class","col-xl-12 "],["style","margin-left:25px ;"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,11,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.pb(40,0,null,null,10,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(41,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(42,0,null,null,1,"label",[["class","control-label"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Name"])),(l()(),t.pb(44,16777216,null,null,6,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,45)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,45).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,45)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,45)._compositionEnd(u.target.value)&&e),e}),null,null)),t.ob(45,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Eb(1024,null,e.i,(function(l){return[l]}),[e.c]),t.ob(47,540672,null,0,e.e,[[8,null],[8,null],[6,e.i],[2,e.t]],{form:[0,"form"]},null),t.Eb(2048,null,e.j,null,[e.e]),t.ob(49,16384,null,0,e.k,[[4,e.j]],null,null),t.ob(50,212992,null,0,c.a,[t.M,t.j,[2,b.a],[2,d.a],e.j],null,null),(l()(),t.pb(51,0,null,null,12,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,null,11,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(53,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,1,"label",[["class","control-label"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Price"])),(l()(),t.pb(56,16777216,null,null,7,"input",[["class","form-control"],["number",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"keydown"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,57)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,57).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,57)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,57)._compositionEnd(u.target.value)&&e),"keydown"===n&&(e=!1!==t.zb(l,63).onKeyDown(u)&&e),e}),null,null)),t.ob(57,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Eb(1024,null,e.i,(function(l){return[l]}),[e.c]),t.ob(59,540672,null,0,e.e,[[8,null],[8,null],[6,e.i],[2,e.t]],{form:[0,"form"]},null),t.Eb(2048,null,e.j,null,[e.e]),t.ob(61,16384,null,0,e.k,[[4,e.j]],null,null),t.ob(62,212992,null,0,c.a,[t.M,t.j,[2,b.a],[2,d.a],e.j],null,null),t.ob(63,16384,null,0,p.a,[t.k],null,null),(l()(),t.pb(64,0,null,null,11,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.pb(65,0,null,null,10,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(66,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(67,0,null,null,1,"label",[["class","control-label"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Category"])),(l()(),t.pb(69,16777216,null,null,6,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,70)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,70).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,70)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,70)._compositionEnd(u.target.value)&&e),e}),null,null)),t.ob(70,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Eb(1024,null,e.i,(function(l){return[l]}),[e.c]),t.ob(72,540672,null,0,e.e,[[8,null],[8,null],[6,e.i],[2,e.t]],{form:[0,"form"]},null),t.Eb(2048,null,e.j,null,[e.e]),t.ob(74,16384,null,0,e.k,[[4,e.j]],null,null),t.ob(75,212992,null,0,c.a,[t.M,t.j,[2,b.a],[2,d.a],e.j],null,null),(l()(),t.pb(76,0,null,null,11,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.pb(77,0,null,null,10,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(78,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(79,0,null,null,1,"label",[["class","control-label"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Brand"])),(l()(),t.pb(81,16777216,null,null,6,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,82)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,82).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,82)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,82)._compositionEnd(u.target.value)&&e),e}),null,null)),t.ob(82,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Eb(1024,null,e.i,(function(l){return[l]}),[e.c]),t.ob(84,540672,null,0,e.e,[[8,null],[8,null],[6,e.i],[2,e.t]],{form:[0,"form"]},null),t.Eb(2048,null,e.j,null,[e.e]),t.ob(86,16384,null,0,e.k,[[4,e.j]],null,null),t.ob(87,212992,null,0,c.a,[t.M,t.j,[2,b.a],[2,d.a],e.j],null,null),(l()(),t.pb(88,0,null,null,12,"div",[["class","card-footer text-right"]],null,null,null,null,null)),(l()(),t.pb(89,0,null,null,11,"div",[["class","btn-list"]],null,null,null,null,null)),(l()(),t.pb(90,0,null,null,4,"button",[["class","btn btn-outline-secondary  btn-rounded"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,91).onClick()&&e),e}),null,null)),t.ob(91,16384,null,0,g.o,[g.n,g.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(92,1),(l()(),t.pb(93,0,null,null,0,"i",[["class","fas fa-times"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" Cancel"])),(l()(),t.pb(95,0,null,null,5,"button",[["class","btn btn-outline-success btn-rounded"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,v)),t.ob(97,16384,null,0,r.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,z)),t.ob(99,16384,null,0,r.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.Hb(-1,null,[" Success"]))],(function(l,n){var u=n.component;l(n,8,0,u.loadingState),l(n,12,0,u.addForm),l(n,47,0,u.addForm.controls.name),l(n,50,0),l(n,59,0,u.addForm.controls.price),l(n,62,0),l(n,72,0,u.addForm.controls.category_id),l(n,75,0),l(n,84,0,u.addForm.controls.brand_id),l(n,87,0);var t=l(n,92,0,"/product");l(n,91,0,t),l(n,97,0,!u.showLoader),l(n,99,0,u.showLoader)}),(function(l,n){var u=n.component;l(n,5,0,u.isEditing?"Update":"Create"),l(n,10,0,t.zb(n,14).ngClassUntouched,t.zb(n,14).ngClassTouched,t.zb(n,14).ngClassPristine,t.zb(n,14).ngClassDirty,t.zb(n,14).ngClassValid,t.zb(n,14).ngClassInvalid,t.zb(n,14).ngClassPending),l(n,23,0,u.editImageUrl?u.editImageUrl:"assets/images/demo.png"),l(n,44,0,t.zb(n,49).ngClassUntouched,t.zb(n,49).ngClassTouched,t.zb(n,49).ngClassPristine,t.zb(n,49).ngClassDirty,t.zb(n,49).ngClassValid,t.zb(n,49).ngClassInvalid,t.zb(n,49).ngClassPending),l(n,56,0,t.zb(n,61).ngClassUntouched,t.zb(n,61).ngClassTouched,t.zb(n,61).ngClassPristine,t.zb(n,61).ngClassDirty,t.zb(n,61).ngClassValid,t.zb(n,61).ngClassInvalid,t.zb(n,61).ngClassPending),l(n,69,0,t.zb(n,74).ngClassUntouched,t.zb(n,74).ngClassTouched,t.zb(n,74).ngClassPristine,t.zb(n,74).ngClassDirty,t.zb(n,74).ngClassValid,t.zb(n,74).ngClassInvalid,t.zb(n,74).ngClassPending),l(n,81,0,t.zb(n,86).ngClassUntouched,t.zb(n,86).ngClassTouched,t.zb(n,86).ngClassPristine,t.zb(n,86).ngClassDirty,t.zb(n,86).ngClassValid,t.zb(n,86).ngClassInvalid,t.zb(n,86).ngClassPending),l(n,95,0,u.showLoader)}))}function C(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-product-add",[],null,null,null,y,h)),t.ob(1,114688,null,0,i,[g.n,g.a,e.d,m.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.lb("app-product-add",i,C,{},{},[]),k=u("Eqhp"),I=u("PCNd");u.d(n,"ProductAddModuleNgFactory",(function(){return x}));var x=t.mb(s,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,a.a,w]],[3,t.j],t.v]),t.yb(4608,r.m,r.l,[t.s,[2,r.u]]),t.yb(4608,e.s,e.s,[]),t.yb(4608,e.d,e.d,[]),t.yb(1073742336,r.b,r.b,[]),t.yb(1073742336,e.r,e.r,[]),t.yb(1073742336,e.g,e.g,[]),t.yb(1073742336,e.o,e.o,[]),t.yb(1073742336,g.r,g.r,[[2,g.w],[2,g.n]]),t.yb(1073742336,k.a,k.a,[]),t.yb(1073742336,I.a,I.a,[]),t.yb(1073742336,s,s,[]),t.yb(1024,g.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);