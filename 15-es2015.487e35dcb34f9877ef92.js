(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{evSL:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("zzOR");class i{constructor(l,n,u,t){this.router=l,this.productService=n,this.dataService=u,this.paginationService=t,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.categoryList=[]}ngOnInit(){this.subscription=this.dataService.searchTextSubject.subscribe(l=>{this.searchText=l,this.getObjects()})}getjson(l){if(l)return JSON.parse(l)}getObjects(){const l={page:this.currentPage};this.searchText&&(l.search=this.searchText),this.productService.getProductList(l).subscribe(l=>{this.loadingState=!1,l.success?(this.objectArray=l.data.data,this.categoryList=l.data.categoryList,this.pagination=this.paginationService.getPager(l.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},l=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(l){this.currentPage=l,this.getObjects()}searchObject(l){this.searchText=l,this.getObjects()}deleteObject(l){swal.fire({title:e.a.delete_header_text,text:e.a.delete_smalll_text,icon:e.a.delete_dialogue_type,showCancelButton:!0,confirmButtonText:e.a.delete_confirm_button,cancelButtonText:e.a.delete_cancel_button}).then(n=>{n.value&&this.productService.deleteProduct(l.id).subscribe(l=>{l.success&&this.getObjects()})}).catch(swal.noop)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}const a=()=>Promise.all([u.e(1),u.e(3),u.e(0),u.e(7)]).then(u.bind(null,"2810")).then(l=>l.ProductAddModuleNgFactory),r=()=>Promise.all([u.e(1),u.e(3),u.e(0),u.e(7)]).then(u.bind(null,"2810")).then(l=>l.ProductAddModuleNgFactory);class c{}var s=u("pMnS"),o=u("iInd"),b=u("SVse"),d=u("Mrwn"),p=u("33RK"),h=u("nhC3"),g=u("AwSQ"),m=u("c8VH"),f=t.nb({encapsulation:2,styles:[],data:{}});function v(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,30,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"td",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,8,"div",[["class","media d-user"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"img",[["alt","Brand logo"],["class","rounded-circle"],["height","45"],["width","45"]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"i",[["class","fa fa-building-o align-self-center fa-lg mr-3 text-muted"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,5,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,1,"h5",[["class","mt-1 mb-0 "]],null,null,null,null,null)),(l()(),t.Jb(7,null,["",""])),(l()(),t.pb(8,0,null,null,2,"span",[["class","text-muted"]],null,null,null,null,null)),(l()(),t.Jb(9,null,["\u20b9 ",""])),t.Fb(10,1),(l()(),t.pb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Jb(12,null,["",""])),(l()(),t.pb(13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Jb(14,null,["",""])),(l()(),t.pb(15,0,null,null,2,"td",[["class","table-field-status"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,1,"span",[["class","badge badge-pill badge-info"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Active"])),(l()(),t.pb(18,0,null,null,12,"td",[["class","table-field-actions text-center"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,11,"div",[["class","action-drop dropdown"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,1,"a",[["class","btn btn-default btn-sm btn-icon-only"],["data-toggle","dropdown"],["href","#"],["title",""]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,0,"i",[["class","fas fa-ellipsis-h"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,8,"div",[["class","dropdown-menu dropdown-icon-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,4,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,24).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(24,671744,null,0,o.q,[o.n,o.a,b.h],{routerLink:[0,"routerLink"]},null),t.Cb(25,2),(l()(),t.pb(26,0,null,null,0,"i",[["class","fa fa-edit fa-fw text-primary"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Edit"])),(l()(),t.pb(28,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteObject(l.context.$implicit)&&t),t}),null,null)),(l()(),t.pb(29,0,null,null,0,"i",[["class","fa fa-trash fa-fw text-primary"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Delete"]))],(function(l,n){var u=l(n,25,0,"edit",n.context.$implicit.id);l(n,24,0,u)}),(function(l,n){var u=n.component;l(n,3,0,null!=n.context.$implicit&&n.context.$implicit.image?null==n.context.$implicit?null:n.context.$implicit.image:"assets/images/demo.png"),l(n,7,0,n.context.$implicit.name);var e,i,a=t.Kb(n,9,0,l(n,10,0,t.Bb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.price));l(n,9,0,a),l(n,12,0,null==(e=u.getjson(n.context.$implicit.category_id))?null:e.label),l(n,14,0,null==(i=u.getjson(n.context.$implicit.brand_id))?null:i.label),l(n,23,0,t.Bb(n,24).target,t.Bb(n,24).href)}))}function P(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"td",[["colspan","3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["No Record Found"]))],null,null)}function x(l){return t.Lb(0,[t.Db(0,b.d,[t.s]),(l()(),t.pb(1,0,null,null,23,"div",[["class","page-breadcrumb"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,15,"div",[["class","col-7 align-self-center"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"h4",[["class","page-title text-truncate text-dark font-weight-medium mb-1"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Product"])),(l()(),t.pb(6,0,null,null,12,"div",[["class","d-flex align-items-center"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,11,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,10,"ol",[["class","breadcrumb m-0 p-0"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,7,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,6,"a",[["class","text-muted"],["routerLinkActive","router-link-active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,11).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(11,671744,[[2,4]],0,o.q,[o.n,o.a,b.h],{routerLink:[0,"routerLink"]},null),t.Cb(12,1),t.ob(13,1720320,null,2,o.p,[o.n,t.k,t.B,[2,o.o],[2,o.q]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Hb(603979776,1,{links:1}),t.Hb(603979776,2,{linksWithHrefs:1}),(l()(),t.Jb(-1,null,["Apps"])),(l()(),t.pb(17,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item text-muted active"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Product List"])),(l()(),t.pb(19,0,null,null,5,"div",[["class","col-5 align-self-center"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,4,"div",[["class","customize-input float-right"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,3,"button",[["class","btn btn-outline-info  border-0 custom-shadow custom-radius"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,22).onClick()&&e),e}),null,null)),t.ob(22,16384,null,0,o.o,[o.n,o.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Cb(23,1),(l()(),t.Jb(-1,null,["Add Product"])),(l()(),t.pb(25,0,null,null,24,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,23,"section",[["class","page-content container-fluid"]],null,null,null,null,null)),(l()(),t.pb(27,0,null,null,22,"div",[["class","card strache-card"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,21,"div",[["class","card-body p-0"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,18,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,17,"table",[["class","table table-hover m-0"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Name"])),(l()(),t.pb(35,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Category"])),(l()(),t.pb(37,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Brand"])),(l()(),t.pb(39,0,null,null,1,"th",[["class","table-field-status"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Status"])),(l()(),t.pb(41,0,null,null,1,"th",[["class","table-field-actions text-center"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Action"])),(l()(),t.pb(43,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,v)),t.ob(45,278528,null,0,b.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.eb(16777216,null,null,1,null,P)),t.ob(47,16384,null,0,b.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(48,0,null,null,1,"pagination",[],null,[[null,"onPageChange"]],(function(l,n,u){var t=!0;return"onPageChange"===n&&(t=!1!==l.component.getPage(u)&&t),t}),d.b,d.a)),t.ob(49,114688,null,0,p.a,[],{paginationList:[0,"paginationList"],currentPage:[1,"currentPage"]},{onPageChange:"onPageChange"})],(function(l,n){var u=n.component,t=l(n,12,0,"/dashboard");l(n,11,0,t),l(n,13,0,"router-link-active");var e=l(n,23,0,"/product/add");l(n,22,0,e),l(n,45,0,u.objectArray),l(n,47,0,0==u.objectArray.length),l(n,49,0,u.pagination,u.currentPage)}),(function(l,n){l(n,10,0,t.Bb(n,11).target,t.Bb(n,11).href)}))}function y(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-product-list",[],null,null,null,x,f)),t.ob(1,245760,null,0,i,[o.n,h.a,g.a,m.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.lb("app-product-list",i,y,{},{},[]),L=u("IheW"),w=u("8Vnw");u.d(n,"ProductListModuleNgFactory",(function(){return A}));var A=t.mb(c,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[s.a,k]],[3,t.j],t.v]),t.zb(4608,b.m,b.l,[t.s,[2,b.v]]),t.zb(4608,h.a,h.a,[L.c]),t.zb(1073742336,b.b,b.b,[]),t.zb(1073742336,o.r,o.r,[[2,o.w],[2,o.n]]),t.zb(1073742336,w.a,w.a,[]),t.zb(1073742336,c,c,[]),t.zb(1024,o.k,(function(){return[[{path:"",component:i},{path:"add",loadChildren:a},{path:"edit/:id",loadChildren:r}]]}),[])])}))},nhC3:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));var t=u("AytR");class e{constructor(l){this.http=l,this.API_URL=t.a.APIEndpoint}getProductList(l){return this.http.get(`${this.API_URL}/product`,{params:l})}addProduct(l){return this.http.post(`${this.API_URL}/product`,l)}editProduct(l,n){return this.http.put(`${this.API_URL}/product/${l}`,n)}deleteProduct(l){return this.http.delete(`${this.API_URL}/product/${l}`)}getProductById(l,n=null){return this.http.get(`${this.API_URL}/product/${l}`,{params:n})}}}}]);