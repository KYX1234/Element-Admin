import{b as g,d as p,a as _,c as o,S,o as w,e as h,w as $,q as v,n as j,j as c,L as N,l as C,_ as x,B as E,H as u,aF as r,U as O,D as b,aI as k}from"./index-7cf3ca25.js";const R=Symbol("rowContextKey"),K=["start","center","end","space-around","space-between","space-evenly"],B=["top","middle","bottom"],L=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:B,default:"top"}}),P=p({name:"ElRow"}),D=p({...P,props:L,setup(f){const t=f,l=_("row"),a=o(()=>t.gutter);S(R,{gutter:a});const i=o(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=o(()=>[l.b(),l.is(`justify-${t.justify}`,t.justify!=="start"),l.is(`align-${t.align}`,t.align!=="top")]);return(e,d)=>(w(),h(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var I=x(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const U=E(I),q=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),A=p({name:"ElCol"}),F=p({...A,props:q,setup(f){const t=f,{gutter:l}=O(R,{gutter:o(()=>0)}),a=_("col"),i=o(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight=`${l.value/2}px`),e}),m=o(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const n=t[s];b(n)&&(s==="span"?e.push(a.b(`${t[s]}`)):n>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(t[s])?e.push(a.b(`${s}-${t[s]}`)):k(t[s])&&Object.entries(t[s]).forEach(([n,y])=>{e.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(w(),h(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var H=x(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const G=E(H);export{U as E,G as a};
