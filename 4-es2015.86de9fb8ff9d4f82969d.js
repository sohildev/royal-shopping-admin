(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ezC9:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("s7LF");class a{constructor(l,n,u,e,a){this.router=l,this.activatedRoute=n,this.fb=u,this.companyService=e,this.dropdownService=a,this.loadingState=!1,this.editImageUrl=null,this.showLoader=!1,this.formErrors={email:null,name:null,image:null,phone_number:null,apierror:null},this.isEditing=!1,this.editId=null,this.categoryList=[],this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id"),this.editObject()),this.addForm=u.group({name:[null,t.r.compose([t.r.required])],category_id:[null,t.r.compose([t.r.required])],brand_url:[null,t.r.compose([t.r.required])],brand_sub_text:[""]})}ngOnInit(){this.getCategoryList()}getCategoryList(){this.dropdownService.getCategoryDrp().subscribe(l=>{l.success&&(this.categoryList=l.data?l.data:[])})}editObject(){this.loadingState=!0,this.companyService.getBrandById(this.editId).subscribe(l=>{this.loadingState=!1,l.data&&(this.editImageUrl=l.data.image,this.addForm.patchValue({name:l.data.name,category_id:l.data.category_id,brand_url:l.data.brand_url,brand_sub_text:l.data.brand_sub_text}))},l=>{this.loadingState=!1,this.router.navigateByUrl("/brand")})}fileChangeEvent(l){if(!l.target.files[0].name.match(/(.*?)\.(jpg|jpeg|png|gif|giff)$/))return swal.fire("Invalid File!","Please select valid file ","error"),this.removeFile(),!1;this.removeFile(),this.selectedFile=l.target.files[0]}removeFile(){this.selectedFile=null}submitForm(l){if(this.addForm.valid){this.showLoader=!0;const n=new FormData;n.append("brand_url",l.value.brand_url),n.append("name",l.value.name),n.append("category_id",l.value.category_id),n.append("brand_sub_text",l.value.brand_sub_text),this.selectedFile&&n.append("file",this.selectedFile),this.isEditing?this.companyService.editBrand(this.editId,n).subscribe(l=>{this.showLoader=!1,l.success?this.router.navigateByUrl("/brand"):(this.showLoader=!1,l.error.map(l=>{l.hasOwnProperty("name")&&(this.formErrors.name=l.name)}))}):this.companyService.addBrand(n).subscribe(l=>{this.showLoader=!1,l.success?this.router.navigateByUrl("/brand"):(this.showLoader=!1,l.error.map(l=>{l.hasOwnProperty("name")&&(this.formErrors.name=l.name)}))})}}}class i{}var s=u("pMnS"),o=u("TFAE"),r=u("EnfP"),b=u("Chay"),d=u("SVse"),c=u("HOh6"),p=u("UaFz"),g=u("DdO4"),m=u("MJJn"),h=u("wTG2"),f=u("iInd"),v=u("JxAW"),B=u("xBEw"),y=e.nb({encapsulation:2,styles:[],data:{}});function C(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,1,"div",[["class","lorder-wrap"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,0,"div",[["class","loader"]],null,null,null,null,null))],null,null)}function w(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,0,"i",[["class","fas fa-check"]],null,null,null,null,null))],null,null)}function _(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,0,"i",[["class","fa fa-spinner fa-spin"]],null,null,null,null,null))],null,null)}function x(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,1,"loder",[],null,null,null,r.b,r.a)),e.ob(1,114688,null,0,b.a,[],{show:[0,"show"]},null),(l()(),e.pb(2,0,null,null,111,"div",[["class","content"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,4,"header",[["class","page-header"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,3,"div",[["class","d-flex align-items-center"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,2,"div",[["class","mr-auto p-3"]],null,null,null,null,null)),(l()(),e.pb(6,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Jb(7,null,[""," Brand"])),(l()(),e.pb(8,0,null,null,105,"section",[["class","page-content container-fluid"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,C)),e.ob(10,16384,null,0,d.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(11,0,null,null,102,"div",[["class","card card-tabs strache-card"]],null,null,null,null,null)),(l()(),e.pb(12,0,null,null,101,"form",[["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,a=l.component;return"submit"===n&&(t=!1!==e.Bb(l,14).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Bb(l,14).onReset()&&t),"ngSubmit"===n&&(t=!1!==a.submitForm(a.addForm)&&t),t}),null,null)),e.ob(13,16384,null,0,t.w,[],null,null),e.ob(14,540672,null,0,t.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Gb(2048,null,t.b,null,[t.f]),e.ob(16,16384,null,0,t.l,[[4,t.b]],null,null),e.ob(17,16384,null,0,c.a,[e.k],null,null),(l()(),e.pb(18,0,null,null,82,"div",[["class","card-body p-25 p-l-30 p-r-30"]],null,null,null,null,null)),(l()(),e.pb(19,0,null,null,81,"div",[["class","d-flex"]],null,null,null,null,null)),(l()(),e.pb(20,0,null,null,18,"div",[["class","left-form-content m-l-20 m-r-40"]],null,null,null,null,null)),(l()(),e.pb(21,0,null,null,17,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e.pb(22,0,null,null,16,"div",[["class","fileinput text-center fileinput-new"],["data-provides","fileinput"]],null,null,null,null,null)),(l()(),e.pb(23,0,null,null,7,"div",[["class","btn-file mt-3"]],null,null,null,null,null)),(l()(),e.pb(24,0,null,null,1,"div",[["class","thumbnail fileinput-new  rounded-circle"],["style","width: 150px; height: 150px;"]],null,null,null,null,null)),(l()(),e.pb(25,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(26,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e.pb(27,0,null,null,1,"button",[["class","fileinput-new btn btn-secondary btn-sm btn-file mt-3"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Browse Image "])),(l()(),e.pb(29,0,null,null,0,"input",[["accept","image/x-png,image/jpeg"],["file-model","myFile"],["type","file"]],null,[[null,"change"]],(function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.fileChangeEvent(u)&&e),e}),null,null)),(l()(),e.pb(30,0,null,null,0,"div",[["class","fileinput-preview fileinput-exists thumbnail  rounded-circle"],["style","width: 150px; height: 150px;"]],null,null,null,null,null)),(l()(),e.pb(31,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e.pb(32,0,null,null,1,"a",[["class","btn btn-link btn-sm fileinput-exists mt-3"],["data-dismiss","fileinput"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeFile()&&e),e}),null,null)),(l()(),e.Jb(-1,null,["Remove"])),(l()(),e.pb(34,0,null,null,4,"div",[["class","clearfix mt-3"]],null,null,null,null,null)),(l()(),e.pb(35,0,null,null,3,"p",[["class","upload-img-label text-muted font-size-12"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["*Recommended Size:"])),(l()(),e.pb(37,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Minimum 250 * 250"])),(l()(),e.pb(39,0,null,null,61,"div",[["class","row flex"]],null,null,null,null,null)),(l()(),e.pb(40,0,null,null,60,"div",[["class","col-xl-12 "],["style","margin-left:25px ;"]],null,null,null,null,null)),(l()(),e.pb(41,0,null,null,35,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e.pb(42,0,null,null,10,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e.pb(43,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.pb(44,0,null,null,1,"label",[["class","control-label"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Name"])),(l()(),e.pb(46,16777216,null,null,6,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.Bb(l,47)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Bb(l,47).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Bb(l,47)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Bb(l,47)._compositionEnd(u.target.value)&&t),t}),null,null)),e.ob(47,16384,null,0,t.c,[e.B,e.k,[2,t.a]],null,null),e.Gb(1024,null,t.i,(function(l){return[l]}),[t.c]),e.ob(49,540672,null,0,t.e,[[8,null],[8,null],[6,t.i],[2,t.u]],{form:[0,"form"]},null),e.Gb(2048,null,t.j,null,[t.e]),e.ob(51,16384,null,0,t.k,[[4,t.j]],null,null),e.ob(52,212992,null,0,p.a,[e.M,e.j,[2,g.a],[2,c.a],t.j],null,null),(l()(),e.pb(53,0,null,null,23,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e.pb(54,0,null,null,22,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.pb(55,0,null,null,1,"label",[["class","control-label"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Category"])),(l()(),e.pb(57,16777216,null,null,19,"ng-select",[["bindLabel","label"],["bindValue","value"],["placeholder","-- Select a Category --"],["role","listbox"]],[[2,"ng-select",null],[2,"ng-select-single",null],[2,"ng-select-typeahead",null],[2,"ng-select-multiple",null],[2,"ng-select-taggable",null],[2,"ng-select-searchable",null],[2,"ng-select-clearable",null],[2,"ng-select-opened",null],[2,"ng-select-disabled",null],[2,"ng-select-filtered",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keydown"]],(function(l,n,u){var t=!0;return"keydown"===n&&(t=!1!==e.Bb(l,59).handleKeyDown(u)&&t),t}),m.b,m.a)),e.Gb(4608,null,h.f,h.f,[]),e.ob(59,4964352,null,12,h.a,[[8,null],[8,null],h.b,h.d,e.k,e.h,h.j],{bindLabel:[0,"bindLabel"],bindValue:[1,"bindValue"],placeholder:[2,"placeholder"],items:[3,"items"]},null),e.Hb(603979776,1,{optionTemplate:0}),e.Hb(603979776,2,{optgroupTemplate:0}),e.Hb(603979776,3,{labelTemplate:0}),e.Hb(603979776,4,{multiLabelTemplate:0}),e.Hb(603979776,5,{headerTemplate:0}),e.Hb(603979776,6,{footerTemplate:0}),e.Hb(603979776,7,{notFoundTemplate:0}),e.Hb(603979776,8,{typeToSearchTemplate:0}),e.Hb(603979776,9,{loadingTextTemplate:0}),e.Hb(603979776,10,{tagTemplate:0}),e.Hb(603979776,11,{loadingSpinnerTemplate:0}),e.Hb(603979776,12,{ngOptions:1}),e.Gb(1024,null,t.i,(function(l){return[l]}),[h.a]),e.ob(73,540672,null,0,t.e,[[8,null],[8,null],[6,t.i],[2,t.u]],{form:[0,"form"]},null),e.Gb(2048,null,t.j,null,[t.e]),e.ob(75,16384,null,0,t.k,[[4,t.j]],null,null),e.ob(76,212992,null,0,p.a,[e.M,e.j,[2,g.a],[2,c.a],t.j],null,null),(l()(),e.pb(77,0,null,null,23,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e.pb(78,0,null,null,10,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e.pb(79,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.pb(80,0,null,null,1,"label",[["class","control-label"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Brand Url"])),(l()(),e.pb(82,16777216,null,null,6,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.Bb(l,83)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Bb(l,83).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Bb(l,83)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Bb(l,83)._compositionEnd(u.target.value)&&t),t}),null,null)),e.ob(83,16384,null,0,t.c,[e.B,e.k,[2,t.a]],null,null),e.Gb(1024,null,t.i,(function(l){return[l]}),[t.c]),e.ob(85,540672,null,0,t.e,[[8,null],[8,null],[6,t.i],[2,t.u]],{form:[0,"form"]},null),e.Gb(2048,null,t.j,null,[t.e]),e.ob(87,16384,null,0,t.k,[[4,t.j]],null,null),e.ob(88,212992,null,0,p.a,[e.M,e.j,[2,g.a],[2,c.a],t.j],null,null),(l()(),e.pb(89,0,null,null,11,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e.pb(90,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.pb(91,0,null,null,1,"label",[["class","control-label"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Brand Text"])),(l()(),e.pb(93,0,null,null,7,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e.pb(94,16777216,null,null,6,"textarea",[["class","form-control"],["rows","2"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.Bb(l,95)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Bb(l,95).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Bb(l,95)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Bb(l,95)._compositionEnd(u.target.value)&&t),t}),null,null)),e.ob(95,16384,null,0,t.c,[e.B,e.k,[2,t.a]],null,null),e.Gb(1024,null,t.i,(function(l){return[l]}),[t.c]),e.ob(97,540672,null,0,t.e,[[8,null],[8,null],[6,t.i],[2,t.u]],{form:[0,"form"]},null),e.Gb(2048,null,t.j,null,[t.e]),e.ob(99,16384,null,0,t.k,[[4,t.j]],null,null),e.ob(100,212992,null,0,p.a,[e.M,e.j,[2,g.a],[2,c.a],t.j],null,null),(l()(),e.pb(101,0,null,null,12,"div",[["class","card-footer text-right"]],null,null,null,null,null)),(l()(),e.pb(102,0,null,null,11,"div",[["class","btn-list"]],null,null,null,null,null)),(l()(),e.pb(103,0,null,null,4,"button",[["class","btn btn-outline-secondary  btn-rounded"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,104).onClick()&&t),t}),null,null)),e.ob(104,16384,null,0,f.o,[f.n,f.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Cb(105,1),(l()(),e.pb(106,0,null,null,0,"i",[["class","fas fa-times"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Cancel"])),(l()(),e.pb(108,0,null,null,5,"button",[["class","btn btn-outline-success btn-rounded"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,w)),e.ob(110,16384,null,0,d.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,_)),e.ob(112,16384,null,0,d.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Jb(-1,null,[" Success"]))],(function(l,n){var u=n.component;l(n,1,0,u.loadingState),l(n,10,0,u.loadingState),l(n,14,0,u.addForm),l(n,49,0,u.addForm.controls.name),l(n,52,0),l(n,59,0,"label","value","-- Select a Category --",u.categoryList),l(n,73,0,u.addForm.controls.category_id),l(n,76,0),l(n,85,0,u.addForm.controls.brand_url),l(n,88,0),l(n,97,0,u.addForm.controls.brand_sub_text),l(n,100,0);var e=l(n,105,0,"/brand");l(n,104,0,e),l(n,110,0,!u.showLoader),l(n,112,0,u.showLoader)}),(function(l,n){var u=n.component;l(n,7,0,u.isEditing?"Update":"Create"),l(n,12,0,e.Bb(n,16).ngClassUntouched,e.Bb(n,16).ngClassTouched,e.Bb(n,16).ngClassPristine,e.Bb(n,16).ngClassDirty,e.Bb(n,16).ngClassValid,e.Bb(n,16).ngClassInvalid,e.Bb(n,16).ngClassPending),l(n,25,0,u.editImageUrl?u.editImageUrl:"assets/images/demo.png"),l(n,46,0,e.Bb(n,51).ngClassUntouched,e.Bb(n,51).ngClassTouched,e.Bb(n,51).ngClassPristine,e.Bb(n,51).ngClassDirty,e.Bb(n,51).ngClassValid,e.Bb(n,51).ngClassInvalid,e.Bb(n,51).ngClassPending),l(n,57,1,[e.Bb(n,59).useDefaultClass,!e.Bb(n,59).multiple,e.Bb(n,59).typeahead,e.Bb(n,59).multiple,e.Bb(n,59).addTag,e.Bb(n,59).searchable,e.Bb(n,59).clearable,e.Bb(n,59).isOpen,e.Bb(n,59).disabled,e.Bb(n,59).filtered,e.Bb(n,75).ngClassUntouched,e.Bb(n,75).ngClassTouched,e.Bb(n,75).ngClassPristine,e.Bb(n,75).ngClassDirty,e.Bb(n,75).ngClassValid,e.Bb(n,75).ngClassInvalid,e.Bb(n,75).ngClassPending]),l(n,82,0,e.Bb(n,87).ngClassUntouched,e.Bb(n,87).ngClassTouched,e.Bb(n,87).ngClassPristine,e.Bb(n,87).ngClassDirty,e.Bb(n,87).ngClassValid,e.Bb(n,87).ngClassInvalid,e.Bb(n,87).ngClassPending),l(n,94,0,e.Bb(n,99).ngClassUntouched,e.Bb(n,99).ngClassTouched,e.Bb(n,99).ngClassPristine,e.Bb(n,99).ngClassDirty,e.Bb(n,99).ngClassValid,e.Bb(n,99).ngClassInvalid,e.Bb(n,99).ngClassPending),l(n,108,0,u.showLoader)}))}function k(l){return e.Lb(0,[(l()(),e.pb(0,0,null,null,1,"app-brand-add",[],null,null,null,x,y)),e.ob(1,114688,null,0,a,[f.n,f.a,t.d,v.a,B.a],null,null)],(function(l,n){l(n,1,0)}),null)}var S=e.lb("app-brand-add",a,k,{},{},[]),F=u("Vr6k"),I=u("PCNd"),L=u("yCMK");u.d(n,"BrandAddModuleNgFactory",(function(){return T}));var T=e.mb(i,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[s.a,o.a,S]],[3,e.j],e.v]),e.zb(4608,d.m,d.l,[e.s,[2,d.v]]),e.zb(4608,t.t,t.t,[]),e.zb(4608,t.d,t.d,[]),e.zb(1073742336,d.b,d.b,[]),e.zb(1073742336,t.s,t.s,[]),e.zb(1073742336,t.g,t.g,[]),e.zb(1073742336,t.p,t.p,[]),e.zb(1073742336,f.r,f.r,[[2,f.w],[2,f.n]]),e.zb(1073742336,F.a,F.a,[]),e.zb(1073742336,I.a,I.a,[]),e.zb(1073742336,L.a,L.a,[]),e.zb(1073742336,h.c,h.c,[]),e.zb(1073742336,i,i,[]),e.zb(256,h.d,h.e,[]),e.zb(1024,f.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);