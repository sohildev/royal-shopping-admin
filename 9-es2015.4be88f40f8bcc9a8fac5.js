(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"98oA":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("zzOR");class a{constructor(l,n,u,t,e){this.router=l,this.BrandService=n,this.commonService=u,this.dataService=t,this.paginationService=e,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1}ngOnInit(){this.getObjects()}getObjects(){const l={page:this.currentPage};this.searchText&&(l.search=this.searchText),this.BrandService.getBrandList(l).subscribe(l=>{this.loadingState=!1,l.success?(this.objectArray=l.data.data,this.pagination=null):(this.objectArray=[],this.pagination=null)},l=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(l){this.currentPage=l,this.getObjects()}searchObject(l){this.searchText=l,this.getObjects()}deleteObject(l){swal.fire({title:e.a.delete_header_text,text:e.a.delete_smalll_text,icon:e.a.delete_dialogue_type,showCancelButton:!0,confirmButtonText:e.a.delete_confirm_button,cancelButtonText:e.a.delete_cancel_button}).then(n=>{n.value&&this.BrandService.deleteBrand(l.id).subscribe(l=>{l.success&&this.getObjects()})}).catch(swal.noop)}onCompanySelect(l){this.commonService.selectCompany(l.id).subscribe(l=>{l.success?(this.dataService.updateCompany(l.data.company),this.router.navigateByUrl("/dashboard")):(this.objectArray=[],this.pagination=null)})}}const i={title:"company_list"},s=()=>Promise.all([u.e(1),u.e(0),u.e(3)]).then(u.bind(null,"ezC9")).then(l=>l.BrandAddModuleNgFactory),r={title:"add_company"},c=()=>Promise.all([u.e(1),u.e(0),u.e(3)]).then(u.bind(null,"ezC9")).then(l=>l.BrandAddModuleNgFactory),o={title:"edit_company"};class b{}var d=u("pMnS"),p=u("iInd"),g=u("SVse"),h=u("JxAW"),m=u("8cFx"),f=u("AwSQ"),v=u("c8VH"),k=t.nb({encapsulation:2,styles:[],data:{}});function y(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,26,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,6,"div",[["class","media d-user"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"i",[["class","fa fa-building-o align-self-center fa-lg mr-3 text-muted"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,4,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"h5",[["class","mt-1 mb-0"]],null,null,null,null,null)),(l()(),t.Fb(6,null,["",""])),(l()(),t.pb(7,0,null,null,1,"span",[["class","text-muted"]],null,null,null,null,null)),(l()(),t.Fb(8,null,["",""])),(l()(),t.pb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Fb(10,null,["",""])),(l()(),t.pb(11,0,null,null,2,"td",[["class","table-field-status"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"span",[["class","badge badge-pill badge-info"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Active"])),(l()(),t.pb(14,0,null,null,12,"td",[["class","table-field-actions text-center"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,11,"div",[["class","action-drop dropdown"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,1,"a",[["class","btn btn-default btn-sm btn-icon-only"],["data-toggle","dropdown"],["href","#"],["title",""]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,0,"i",[["class","fas fa-ellipsis-h"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,8,"div",[["class","dropdown-menu dropdown-icon-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,4,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,20).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(20,671744,null,0,p.q,[p.n,p.a,g.g],{routerLink:[0,"routerLink"]},null),t.Ab(21,2),(l()(),t.pb(22,0,null,null,0,"i",[["class","fa fa-edit fa-fw text-primary"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Edit"])),(l()(),t.pb(24,0,null,null,2,"a",[["class","dropdown-item"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteObject(l.context.$implicit)&&t),t}),null,null)),(l()(),t.pb(25,0,null,null,0,"i",[["class","fa fa-trash fa-fw text-primary"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Delete"]))],(function(l,n){var u=l(n,21,0,"edit",n.context.$implicit.id);l(n,20,0,u)}),(function(l,n){l(n,6,0,n.context.$implicit.name),l(n,8,0,null==n.context.$implicit?null:n.context.$implicit.brand_sub_text),l(n,10,0,null==n.context.$implicit?null:n.context.$implicit.brand_url),l(n,19,0,t.zb(n,20).target,t.zb(n,20).href)}))}function x(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"td",[["colspan","5"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["No Record Found"]))],null,null)}function A(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,15,"ul",[["class","pagination p-3 m-0 justify-content-end"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"li",[["class","paginate_button page-item"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"a",[["class","page-link"]],null,null,null,null,null)),(l()(),t.Fb(3,null,[""," of ",""])),(l()(),t.pb(4,0,null,null,5,"li",[["class","paginate_button page-item previous"]],null,null,null,null,null)),t.Cb(512,null,g.q,g.r,[t.q,t.r,t.k,t.B]),t.ob(6,278528,null,0,g.h,[g.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Bb(7,{disabled:0}),(l()(),t.pb(8,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.getPage(e.currentPage-1)&&t),t}),null,null)),(l()(),t.pb(9,0,null,null,0,"i",[["class","fa fa-angle-double-left"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,5,"li",[["class","paginate_button page-item next"]],null,null,null,null,null)),t.Cb(512,null,g.q,g.r,[t.q,t.r,t.k,t.B]),t.ob(12,278528,null,0,g.h,[g.q],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Bb(13,{disabled:0}),(l()(),t.pb(14,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.getPage(e.currentPage+1)&&t),t}),null,null)),(l()(),t.pb(15,0,null,null,0,"i",[["class","fa fa-angle-double-right"]],null,null,null,null,null))],(function(l,n){var u=n.component,t=l(n,7,0,1===u.currentPage);l(n,6,0,"paginate_button page-item previous",t);var e=l(n,13,0,u.currentPage===u.pagination.totalPages);l(n,12,0,"paginate_button page-item next",e)}),(function(l,n){var u=n.component;l(n,3,0,u.currentPage,u.pagination.totalPages)}))}function B(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,23,"div",[["class","page-breadcrumb"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,15,"div",[["class","col-7 align-self-center"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,1,"h4",[["class","page-title text-truncate text-dark font-weight-medium mb-1"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Brand"])),(l()(),t.pb(5,0,null,null,12,"div",[["class","d-flex align-items-center"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,11,"nav",[["aria-label","breadcrumb"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,10,"ol",[["class","breadcrumb m-0 p-0"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,7,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,6,"a",[["class","text-muted"],["routerLinkActive","router-link-active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,10).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(10,671744,[[2,4]],0,p.q,[p.n,p.a,g.g],{routerLink:[0,"routerLink"]},null),t.Ab(11,1),t.ob(12,1720320,null,2,p.p,[p.n,t.k,t.B,[2,p.o],[2,p.q]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Db(603979776,1,{links:1}),t.Db(603979776,2,{linksWithHrefs:1}),(l()(),t.Fb(-1,null,["Apps"])),(l()(),t.pb(16,0,null,null,1,"li",[["aria-current","page"],["class","breadcrumb-item text-muted active"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Brand List"])),(l()(),t.pb(18,0,null,null,5,"div",[["class","col-5 align-self-center"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,4,"div",[["class","customize-input float-right"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,3,"button",[["class","btn btn-outline-info  border-0 custom-shadow custom-radius"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,21).onClick()&&e),e}),null,null)),t.ob(21,16384,null,0,p.o,[p.n,p.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(22,1),(l()(),t.Fb(-1,null,["Add Brand"])),(l()(),t.pb(24,0,null,null,22,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,21,"section",[["class","page-content container-fluid"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,20,"div",[["class","card strache-card"]],null,null,null,null,null)),(l()(),t.pb(27,0,null,null,19,"div",[["class","card-body p-0"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,16,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,15,"table",[["class","table table-hover m-0"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Name"])),(l()(),t.pb(34,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Brand Url"])),(l()(),t.pb(36,0,null,null,1,"th",[["class","table-field-status"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Status"])),(l()(),t.pb(38,0,null,null,1,"th",[["class","table-field-actions"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Action"])),(l()(),t.pb(40,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,y)),t.ob(42,278528,null,0,g.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.eb(16777216,null,null,1,null,x)),t.ob(44,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,A)),t.ob(46,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,t=l(n,11,0,"/dashboard");l(n,10,0,t),l(n,12,0,"router-link-active");var e=l(n,22,0,"/brand/add");l(n,21,0,e),l(n,42,0,u.objectArray),l(n,44,0,0==u.objectArray.length),l(n,46,0,(null==u.pagination?null:u.pagination.pages)&&(null==u.pagination?null:u.pagination.pages.length)>1)}),(function(l,n){l(n,9,0,t.zb(n,10).target,t.zb(n,10).href)}))}function _(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-brand-list",[],null,null,null,B,k)),t.ob(1,114688,null,0,a,[p.n,h.a,m.a,f.a,v.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.lb("app-brand-list",a,_,{},{},[]),F=u("IheW");u.d(n,"BrandListModuleNgFactory",(function(){return P}));var P=t.mb(b,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[d.a,w]],[3,t.j],t.v]),t.yb(4608,g.l,g.k,[t.s,[2,g.t]]),t.yb(4608,h.a,h.a,[F.c]),t.yb(1073742336,g.b,g.b,[]),t.yb(1073742336,p.r,p.r,[[2,p.w],[2,p.n]]),t.yb(1073742336,b,b,[]),t.yb(1024,p.k,(function(){return[[{path:"",component:a,data:i},{path:"add",loadChildren:s,data:r},{path:"edit/:id",loadChildren:c,data:o}]]}),[])])}))},JxAW:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));var t=u("AytR");class e{constructor(l){this.http=l,this.API_URL=t.a.APIEndpoint}getBrandList(l){return this.http.get(`${this.API_URL}/brand`,{params:l})}addBrand(l){return this.http.post(`${this.API_URL}/brand`,l)}editBrand(l,n){return this.http.put(`${this.API_URL}/brand/${l}`,n)}deleteBrand(l){return this.http.delete(`${this.API_URL}/brand/${l}`)}getBrandById(l,n=null){return this.http.get(`${this.API_URL}/brand/${l}`,{params:n})}}}}]);