import{b as T,G as w,d as v,ab as N,e as M,g as V,o as l,t as $,l as t,v as m,n as o,m as a,h as c,w as r,z as g,ak as k,S as C,E as b,q as h,N as y,B as I,_ as P,D as q}from"./index-85476b83.js";const D=T({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:w,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),F={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},G=v({name:"ElTag"}),K=v({...G,props:D,emits:F,setup(n,{emit:i}){const S=n,_=N(),s=M("tag"),u=V(()=>{const{type:e,hit:f,effect:B,closable:E,round:z}=S;return[s.b(),s.is("closable",E),s.m(e),s.m(_.value),s.m(B),s.is("hit",f),s.is("round",z)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(l(),$("span",{key:0,class:o(a(u)),style:y({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(l(),c(I,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[t("span",{class:o(a(u)),style:y({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:C(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var j=P(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const H=q(j);export{H as E,D as t};