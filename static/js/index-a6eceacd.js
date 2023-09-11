import{d as w,U as F,bs as q,J as R,a as T,aE as z,a2 as J,b as G,j as n,o as l,p as f,h as b,F as S,a6 as B,e as D,x as r,_ as L,a0 as M,a9 as O,u as Y,S as x,c as U,n as $,q as V,t as N,v as A,m as I,f as H,B as W,X as Q,G as Z,w as o,l as ee,E as te}from"./index-7cf3ca25.js";import{E as se}from"./el-tag-538b7f66.js";import{E as le}from"./el-card-507abd59.js";const K=Symbol("elDescriptions");var P=w({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup(){return{descriptions:F(K,{})}},render(){var h,c,s,_,a,v;const e=q(this.cell),{border:C,direction:t}=this.descriptions,d=t==="vertical",i=((s=(c=(h=this.cell)==null?void 0:h.children)==null?void 0:c.label)==null?void 0:s.call(c))||e.label,p=(v=(a=(_=this.cell)==null?void 0:_.children)==null?void 0:a.default)==null?void 0:v.call(a),u=e.span,y=e.align?`is-${e.align}`:"",m=e.labelAlign?`is-${e.labelAlign}`:y,E=e.className,j=e.labelClassName,k={width:R(e.width),minWidth:R(e.minWidth)},g=T("descriptions");switch(this.type){case"label":return z(this.tag,{style:k,class:[g.e("cell"),g.e("label"),g.is("bordered-label",C),g.is("vertical-label",d),m,j],colSpan:d?u:1},i);case"content":return z(this.tag,{style:k,class:[g.e("cell"),g.e("content"),g.is("bordered-content",C),g.is("vertical-content",d),y,E],colSpan:d?u:u*2-1},p);default:return z("td",{style:k,class:[g.e("cell"),y],colSpan:u},[J(i)?void 0:z("span",{class:[g.e("label"),j]},i),z("span",{class:[g.e("content"),E]},p)])}}});const ne=G({row:{type:Array,default:()=>[]}}),ie={key:1},ae=w({name:"ElDescriptionsRow"}),oe=w({...ae,props:ne,setup(h){const c=F(K,{});return(s,_)=>n(c).direction==="vertical"?(l(),f(S,{key:0},[b("tr",null,[(l(!0),f(S,null,B(s.row,(a,v)=>(l(),D(n(P),{key:`tr1-${v}`,cell:a,tag:"th",type:"label"},null,8,["cell"]))),128))]),b("tr",null,[(l(!0),f(S,null,B(s.row,(a,v)=>(l(),D(n(P),{key:`tr2-${v}`,cell:a,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(l(),f("tr",ie,[(l(!0),f(S,null,B(s.row,(a,v)=>(l(),f(S,{key:`tr3-${v}`},[n(c).border?(l(),f(S,{key:0},[r(n(P),{cell:a,tag:"td",type:"label"},null,8,["cell"]),r(n(P),{cell:a,tag:"td",type:"content"},null,8,["cell"])],64)):(l(),D(n(P),{key:1,cell:a,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var re=L(oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const ce=G({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:M,title:{type:String,default:""},extra:{type:String,default:""}}),pe=w({name:"ElDescriptions"}),ue=w({...pe,props:ce,setup(h){const c=h,s=T("descriptions"),_=O(),a=Y();x(K,c);const v=U(()=>[s.b(),s.m(_.value)]),e=(t,d,i,p=!1)=>(t.props||(t.props={}),d>i&&(t.props.span=i),p&&(t.props.span=d),t),C=()=>{var t;const d=H((t=a.default)==null?void 0:t.call(a)).filter(m=>{var E;return((E=m==null?void 0:m.type)==null?void 0:E.name)==="ElDescriptionsItem"}),i=[];let p=[],u=c.column,y=0;return d.forEach((m,E)=>{var j;const k=((j=m.props)==null?void 0:j.span)||1;if(E<d.length-1&&(y+=k>u?u:k),E===d.length-1){const g=c.column-y%c.column;p.push(e(m,g,u,!0)),i.push(p);return}k<u?(u-=k,p.push(m)):(p.push(e(m,k,u)),i.push(p),u=c.column,p=[])}),i};return(t,d)=>(l(),f("div",{class:$(n(v))},[t.title||t.extra||t.$slots.title||t.$slots.extra?(l(),f("div",{key:0,class:$(n(s).e("header"))},[b("div",{class:$(n(s).e("title"))},[V(t.$slots,"title",{},()=>[N(A(t.title),1)])],2),b("div",{class:$(n(s).e("extra"))},[V(t.$slots,"extra",{},()=>[N(A(t.extra),1)])],2)],2)):I("v-if",!0),b("div",{class:$(n(s).e("body"))},[b("table",{class:$([n(s).e("table"),n(s).is("bordered",t.border)])},[b("tbody",null,[(l(!0),f(S,null,B(C(),(i,p)=>(l(),D(re,{key:p,row:i},null,8,["row"]))),128))])],2)],2)],2))}});var de=L(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),X=w({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const me=W(de,{DescriptionsItem:X}),fe=Q(X),ve=G({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:Z}}),_e={click:h=>h instanceof MouseEvent},ge=["href"],be=w({name:"ElLink"}),he=w({...be,props:ve,emits:_e,setup(h,{emit:c}){const s=h,_=T("link"),a=U(()=>[_.b(),_.m(s.type),_.is("disabled",s.disabled),_.is("underline",s.underline&&!s.disabled)]);function v(e){s.disabled||c("click",e)}return(e,C)=>(l(),f("a",{class:$(n(a)),href:e.disabled||!e.href?void 0:e.href,onClick:v},[e.icon?(l(),D(n(te),{key:0},{default:o(()=>[(l(),D(ee(e.icon)))]),_:1})):I("v-if",!0),e.$slots.default?(l(),f("span",{key:1,class:$(n(_).e("inner"))},[V(e.$slots,"default")],2)):I("v-if",!0),e.$slots.icon?V(e.$slots,"icon",{key:2}):I("v-if",!0)],10,ge))}});var ye=L(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const ke=W(ye);const Se=b("div",{class:"text-lg mb-2"},"关于",-1),we=b("p",{class:"leading-6"}," Element Admin 是一个基于 Vue3、Vite、Pinia、Element-Plus、Unocss、TypeScript 的中后台解决方案，它使用了最新的前端技术栈，，内置主题配置、动态菜单、权限校验等，基于 mock 实现的动态数据展示，可以当作开箱的模板，也可用于学习参考。 ",-1),Ee=b("div",{class:"text-lg mb-2"},"项目信息",-1),$e=b("div",{class:"text-lg mb-2"},"生产环境依赖",-1),Ne=b("div",{class:"text-lg mb-2"},"开发环境依赖",-1),Be=w({name:"About",__name:"index",setup(h){const{pkg:c,lastBuildTime:s}={pkg:{dependencies:{"@element-plus/icons-vue":"^2.1.0","@vueuse/core":"^10.3.0",axios:"^1.4.0",dayjs:"^1.11.9",echarts:"^5.4.3","element-plus":"^2.3.8",mockjs:"^1.1.0",nprogress:"^0.2.0",pinia:"^2.1.4",vue:"^3.3.4","vue-i18n":"^9.2.2","vue-router":"^4.0.13"},devDependencies:{"@commitlint/cli":"^17.6.7","@commitlint/config-conventional":"^17.6.7","@types/mockjs":"^1.0.7","@types/node":"^18.16.19","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^6.1.0","@typescript-eslint/parser":"^6.1.0","@unocss/preset-uno":"0.53.5","@unocss/transformer-directives":"0.53.5","@unocss/vite":"0.53.5","@vitejs/plugin-vue":"^4.2.3","@vitejs/plugin-vue-jsx":"^3.0.1","@vue/eslint-config-typescript":"^11.0.3",consola:"^3.2.3",eslint:"^8.45.0","eslint-config-prettier":"^8.8.0","eslint-define-config":"^1.21.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-vue":"^9.15.1",husky:"^8.0.3","lint-staged":"^13.2.3",prettier:"^3.0.0","rollup-plugin-visualizer":"^5.9.2",sass:"^1.63.6",typescript:"^5.0.2","unplugin-auto-import":"^0.16.6","unplugin-icons":"^0.16.5","unplugin-vue-components":"^0.25.1",vite:"^4.4.0","vite-plugin-compression":"^0.5.1","vite-plugin-mock":"2.9.8","vite-plugin-progress":"^0.0.7","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^2.0.1","vite-plugin-vue-devtools":"^0.5.1","vue-tsc":"^1.8.3"},name:"element-admin",version:"1.21.0"},lastBuildTime:"2023-09-11 10:02:24"},{dependencies:_,devDependencies:a,version:v}=c;return(e,C)=>{const t=le,d=se,i=fe,p=ke,u=me;return l(),f("div",null,[r(t,{shadow:"never",class:"mb-3"},{default:o(()=>[Se,we]),_:1}),r(t,{shadow:"never",class:"mb-3"},{default:o(()=>[Ee,r(u,{border:"",column:2},{default:o(()=>[r(i,{label:"版本"},{default:o(()=>[r(d,null,{default:o(()=>[N(A(n(v)),1)]),_:1})]),_:1}),r(i,{label:"更新时间"},{default:o(()=>[r(d,null,{default:o(()=>[N(A(n(s)),1)]),_:1})]),_:1}),r(i,{label:"Gitee"},{default:o(()=>[r(p,{type:"primary",href:"https://gitee.com/A1059784729/Element-Admin",target:"_blank"},{default:o(()=>[N(" Gitee ")]),_:1})]),_:1}),r(i,{label:"Github"},{default:o(()=>[r(p,{type:"primary",href:"https://github.com/KYX1234/Element-Admin",target:"_blank"},{default:o(()=>[N(" Github ")]),_:1})]),_:1})]),_:1})]),_:1}),r(t,{shadow:"never",class:"mb-3"},{default:o(()=>[$e,r(u,{border:""},{default:o(()=>[(l(!0),f(S,null,B(n(_),(y,m)=>(l(),D(i,{key:m,label:m},{default:o(()=>[N(A(y),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),r(t,{shadow:"never"},{default:o(()=>[Ne,r(u,{border:""},{default:o(()=>[(l(!0),f(S,null,B(n(a),(y,m)=>(l(),D(i,{key:m,label:m},{default:o(()=>[N(A(y),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})])}}});export{Be as default};
