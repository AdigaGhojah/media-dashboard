import{a as v,_ as x}from"./QInput.3cf3763d.js";import{_ as h}from"./QBtn.fb5c9f72.js";import{r as i,o as g,l as w,m as n,q as t,s as q,F as b,n as r,k as S,A as m,B as u,x as I,y as V}from"./entry.756361bc.js";import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";import"./use-key-composition.20f53ed9.js";import"./use-dark.30fdad76.js";const d=l=>(I("data-v-87c10af7"),l=l(),V(),l),j={class:"q-pa-md formContainer shadow-5",style:{"max-width":"400px",width:"100%"}},B=d(()=>n("h4",{class:"q-my-none q-pb-md"},"Login",-1)),z=d(()=>n("div",{class:"particles",id:"particles-js"},null,-1)),C={__name:"index",setup(l){const p=i(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),o=i(null),a=i(null),_=async()=>{o.value=="admin@admin.com"&&a.value=="admin"?(localStorage.setItem("role","admin"),await r("/admin-profile")):o.value=="employe@employe.com"&&a.value=="employe"?(localStorage.setItem("role","employe"),await r("/employ-profile")):o.value=="user@user.com"&&a.value=="user"&&(localStorage.setItem("role","user"),await r("/user"))};return g(()=>{particlesJS.load("particles-js","/assets/particles.json",function(){console.log("callback - particles.js config loaded")})}),(L,s)=>{const c=x,f=h,y=v;return S(),w(b,null,[n("div",j,[B,t(y,{onSubmit:_,class:"q-gutter-md",autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},{default:q(()=>[t(c,{outlined:"",modelValue:m(o),"onUpdate:modelValue":s[0]||(s[0]=e=>u(o)?o.value=e:null),label:"Email *",hint:"admin@admin.com","lazy-rules":"",rules:[e=>e&&e.length>0||"This field is required",e=>e.toLowerCase().match(m(p))||"Invalid email"]},null,8,["modelValue","rules"]),t(c,{outlined:"",type:"password",modelValue:m(a),"onUpdate:modelValue":s[1]||(s[1]=e=>u(a)?a.value=e:null),label:"Password *",hint:"admin","lazy-rules":"",rules:[e=>e!==null&&e!==""||"This field is required"]},null,8,["modelValue","rules"]),n("div",null,[t(f,{label:"Login",type:"submit",color:"primary"})])]),_:1})]),z],64)}}},$=k(C,[["__scopeId","data-v-87c10af7"]]);export{$ as default};
