import{d as T,e as w,k as b,a5 as N,u as I,l as M,o as n,p as V,O as t,z as m,A as o,t as a,v as c,x as r,I as k,ah as g,H as C,E as h,K as y,q as v,T as $,_ as K,B as P}from"./index-7c84b33e.js";const q=T({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:w,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),A={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},F=b({name:"ElTag"}),H=b({...F,props:q,emits:A,setup(l,{emit:i}){const _=l,B=N(),s=I("tag"),u=M(()=>{const{type:e,hit:f,effect:E,closable:S,round:z}=_;return[s.b(),s.is("closable",S),s.m(e),s.m(B.value),s.m(E),s.is("hit",f),s.is("round",z)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(n(),V("span",{key:0,class:o(a(u)),style:v({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(h),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[k(a(g))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(n(),c($,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[t("span",{class:o(a(u)),style:v({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(n(),c(a(h),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[k(a(g))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)]),_:3},8,["name"]))}});var O=K(H,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const D=P(O);export{D as E,q as t};