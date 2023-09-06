import{d as S,W,bE as M,L as R,e as L,aG as I,a4 as O,b as T,m as n,o as l,t as f,l as b,F as w,a8 as A,h as N,z as r,_ as G,a2 as X,ab as Y,u as Z,V as x,g as F,n as $,v as j,x as D,y as z,q as V,f as H,D as U,Z as J,I as Q,w as o,p as ee,E as te}from"./index-85476b83.js";import{E as se}from"./el-tag-25c6b9cf.js";import{E as le}from"./el-card-c4546ef0.js";const K=Symbol("elDescriptions");var P=S({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup(){return{descriptions:W(K,{})}},render(){var h,c,s,_,a,v;const e=M(this.cell),{border:C,direction:t}=this.descriptions,d=t==="vertical",i=((s=(c=(h=this.cell)==null?void 0:h.children)==null?void 0:c.label)==null?void 0:s.call(c))||e.label,p=(v=(a=(_=this.cell)==null?void 0:_.children)==null?void 0:a.default)==null?void 0:v.call(a),u=e.span,y=e.align?`is-${e.align}`:"",m=e.labelAlign?`is-${e.labelAlign}`:y,E=e.className,B=e.labelClassName,k={width:R(e.width),minWidth:R(e.minWidth)},g=L("descriptions");switch(this.type){case"label":return I(this.tag,{style:k,class:[g.e("cell"),g.e("label"),g.is("bordered-label",C),g.is("vertical-label",d),m,B],colSpan:d?u:1},i);case"content":return I(this.tag,{style:k,class:[g.e("cell"),g.e("content"),g.is("bordered-content",C),g.is("vertical-content",d),y,E],colSpan:d?u:u*2-1},p);default:return I("td",{style:k,class:[g.e("cell"),y],colSpan:u},[O(i)?void 0:I("span",{class:[g.e("label"),B]},i),I("span",{class:[g.e("content"),E]},p)])}}});const ne=T({row:{type:Array,default:()=>[]}}),ie={key:1},ae=S({name:"ElDescriptionsRow"}),oe=S({...ae,props:ne,setup(h){const c=W(K,{});return(s,_)=>n(c).direction==="vertical"?(l(),f(w,{key:0},[b("tr",null,[(l(!0),f(w,null,A(s.row,(a,v)=>(l(),N(n(P),{key:`tr1-${v}`,cell:a,tag:"th",type:"label"},null,8,["cell"]))),128))]),b("tr",null,[(l(!0),f(w,null,A(s.row,(a,v)=>(l(),N(n(P),{key:`tr2-${v}`,cell:a,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(l(),f("tr",ie,[(l(!0),f(w,null,A(s.row,(a,v)=>(l(),f(w,{key:`tr3-${v}`},[n(c).border?(l(),f(w,{key:0},[r(n(P),{cell:a,tag:"td",type:"label"},null,8,["cell"]),r(n(P),{cell:a,tag:"td",type:"content"},null,8,["cell"])],64)):(l(),N(n(P),{key:1,cell:a,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var re=G(oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const ce=T({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:X,title:{type:String,default:""},extra:{type:String,default:""}}),pe=S({name:"ElDescriptions"}),ue=S({...pe,props:ce,setup(h){const c=h,s=L("descriptions"),_=Y(),a=Z();x(K,c);const v=F(()=>[s.b(),s.m(_.value)]),e=(t,d,i,p=!1)=>(t.props||(t.props={}),d>i&&(t.props.span=i),p&&(t.props.span=d),t),C=()=>{var t;const d=H((t=a.default)==null?void 0:t.call(a)).filter(m=>{var E;return((E=m==null?void 0:m.type)==null?void 0:E.name)==="ElDescriptionsItem"}),i=[];let p=[],u=c.column,y=0;return d.forEach((m,E)=>{var B;const k=((B=m.props)==null?void 0:B.span)||1;if(E<d.length-1&&(y+=k>u?u:k),E===d.length-1){const g=c.column-y%c.column;p.push(e(m,g,u,!0)),i.push(p);return}k<u?(u-=k,p.push(m)):(p.push(e(m,k,u)),i.push(p),u=c.column,p=[])}),i};return(t,d)=>(l(),f("div",{class:$(n(v))},[t.title||t.extra||t.$slots.title||t.$slots.extra?(l(),f("div",{key:0,class:$(n(s).e("header"))},[b("div",{class:$(n(s).e("title"))},[j(t.$slots,"title",{},()=>[D(z(t.title),1)])],2),b("div",{class:$(n(s).e("extra"))},[j(t.$slots,"extra",{},()=>[D(z(t.extra),1)])],2)],2)):V("v-if",!0),b("div",{class:$(n(s).e("body"))},[b("table",{class:$([n(s).e("table"),n(s).is("bordered",t.border)])},[b("tbody",null,[(l(!0),f(w,null,A(C(),(i,p)=>(l(),N(re,{key:p,row:i},null,8,["row"]))),128))])],2)],2)],2))}});var de=G(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),q=S({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const me=U(de,{DescriptionsItem:q}),fe=J(q),ve=T({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:Q}}),_e={click:h=>h instanceof MouseEvent},ge=["href"],be=S({name:"ElLink"}),he=S({...be,props:ve,emits:_e,setup(h,{emit:c}){const s=h,_=L("link"),a=F(()=>[_.b(),_.m(s.type),_.is("disabled",s.disabled),_.is("underline",s.underline&&!s.disabled)]);function v(e){s.disabled||c("click",e)}return(e,C)=>(l(),f("a",{class:$(n(a)),href:e.disabled||!e.href?void 0:e.href,onClick:v},[e.icon?(l(),N(n(te),{key:0},{default:o(()=>[(l(),N(ee(e.icon)))]),_:1})):V("v-if",!0),e.$slots.default?(l(),f("span",{key:1,class:$(n(_).e("inner"))},[j(e.$slots,"default")],2)):V("v-if",!0),e.$slots.icon?j(e.$slots,"icon",{key:2}):V("v-if",!0)],10,ge))}});var ye=G(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const ke=U(ye);const we=b("div",{class:"text-lg mb-2"},"关于",-1),Se=b("p",{class:"leading-6"}," Element Admin 是一个基于 Vue3、Vite、Pinia、Element-Plus、Unocss、TypeScript 的中后台解决方案，它使用了最新的前端技术栈，，内置主题配置、动态菜单、权限校验等，基于 mock 实现的动态数据展示，可以当作开箱的模板，也可用于学习参考。 ",-1),Ee=b("div",{class:"text-lg mb-2"},"项目信息",-1),$e=b("div",{class:"text-lg mb-2"},"生产环境依赖",-1),De=b("div",{class:"text-lg mb-2"},"开发环境依赖",-1),Ae=S({name:"About",__name:"index",setup(h){const{pkg:c,lastBuildTime:s}={pkg:{dependencies:{"@element-plus/icons-vue":"^2.1.0","@vueuse/core":"^10.3.0",axios:"^1.4.0",dayjs:"^1.11.9",echarts:"^5.4.3","element-plus":"^2.3.8",nprogress:"^0.2.0",pinia:"^2.1.4",vue:"^3.3.4","vue-i18n":"^9.2.2","vue-router":"^4.0.13"},devDependencies:{"@commitlint/cli":"^17.6.7","@commitlint/config-conventional":"^17.6.7","@types/node":"^18.16.19","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^6.1.0","@typescript-eslint/parser":"^6.1.0","@unocss/preset-uno":"0.53.5","@unocss/transformer-directives":"0.53.5","@unocss/vite":"0.53.5","@vitejs/plugin-vue":"^4.2.3","@vitejs/plugin-vue-jsx":"^3.0.1","@vue/eslint-config-typescript":"^11.0.3",consola:"^3.2.3",eslint:"^8.45.0","eslint-config-prettier":"^8.8.0","eslint-define-config":"^1.21.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-vue":"^9.15.1",husky:"^8.0.3","lint-staged":"^13.2.3",mockjs:"^1.1.0",prettier:"^3.0.0","rollup-plugin-visualizer":"^5.9.2",sass:"^1.63.6",typescript:"^5.0.2","unplugin-auto-import":"^0.16.6","unplugin-icons":"^0.16.5","unplugin-vue-components":"^0.25.1",vite:"^4.4.0","vite-plugin-compression":"^0.5.1","vite-plugin-mock":"2.9.8","vite-plugin-progress":"^0.0.7","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^2.0.1","vite-plugin-vue-devtools":"^0.5.1","vue-tsc":"^1.8.3"},name:"element-admin",version:"1.19.2"},lastBuildTime:"2023-09-06 07:40:05"},{dependencies:_,devDependencies:a,version:v}=c;return(e,C)=>{const t=le,d=se,i=fe,p=ke,u=me;return l(),f("div",null,[r(t,{shadow:"never",class:"mb-3"},{default:o(()=>[we,Se]),_:1}),r(t,{shadow:"never",class:"mb-3"},{default:o(()=>[Ee,r(u,{border:"",column:2},{default:o(()=>[r(i,{label:"版本"},{default:o(()=>[r(d,null,{default:o(()=>[D(z(n(v)),1)]),_:1})]),_:1}),r(i,{label:"更新时间"},{default:o(()=>[r(d,null,{default:o(()=>[D(z(n(s)),1)]),_:1})]),_:1}),r(i,{label:"Gitee"},{default:o(()=>[r(p,{type:"primary",href:"https://gitee.com/A1059784729/Element-Admin",target:"_blank"},{default:o(()=>[D(" Gitee ")]),_:1})]),_:1}),r(i,{label:"Github"},{default:o(()=>[r(p,{type:"primary",href:"https://github.com/KYX1234/Element-Admin",target:"_blank"},{default:o(()=>[D(" Github ")]),_:1})]),_:1})]),_:1})]),_:1}),r(t,{shadow:"never",class:"mb-3"},{default:o(()=>[$e,r(u,{border:""},{default:o(()=>[(l(!0),f(w,null,A(n(_),(y,m)=>(l(),N(i,{key:m,label:m},{default:o(()=>[D(z(y),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),r(t,{shadow:"never"},{default:o(()=>[De,r(u,{border:""},{default:o(()=>[(l(!0),f(w,null,A(n(a),(y,m)=>(l(),N(i,{key:m,label:m},{default:o(()=>[D(z(y),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})])}}});export{Ae as default};