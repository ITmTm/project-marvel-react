"use strict";(self.webpackChunkproject_marvel_react=self.webpackChunkproject_marvel_react||[]).push([[349],{425:(t,e,c)=>{c.d(e,{A:()=>n});const a=c.p+"static/media/error.ef269a1054bc08e1291e.gif";var s=c(579);const n=()=>(0,s.jsx)("img",{style:{display:"block",width:"450px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})},76:(t,e,c)=>{c.r(e),c.d(e,{default:()=>h});const a=c.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",s=c.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var n=c(579);const i=()=>(0,n.jsxs)("div",{className:"app__banner",children:[(0,n.jsx)("img",{src:a,alt:"Avengers"}),(0,n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,n.jsx)("br",{}),"Stay tuned!"]}),(0,n.jsx)("img",{src:s,alt:"Avengers logo"})]});var r=c(43),o=c(475),l=c(897),u=c(384),m=c(425);const d=()=>{const[t,e]=(0,r.useState)([]),[c,a]=(0,r.useState)(!1),[s,i]=(0,r.useState)(0),[d,h]=(0,r.useState)(!1),{loading:p,error:g,getAllComics:b}=(0,l.A)();(0,r.useEffect)((()=>{v(s,!0)}),[]);const v=(t,e)=>{a(!e),b(t).then(j)},j=c=>{let n=!1;c.length<8&&(n=!0),e([...t,...c]),a(!1),i(s+8),h(n)};const x=function(t){const e=t.map(((t,e)=>(0,n.jsx)("li",{className:"comics__item",children:(0,n.jsxs)(o.N_,{to:"/comics/".concat(t.id),children:[(0,n.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),(0,n.jsx)("div",{className:"comics__item-name",children:t.title}),(0,n.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)));return(0,n.jsx)("ul",{className:"comics__grid",children:e})}(t),_=g?(0,n.jsx)(m.A,{}):null,f=p&&!c?(0,n.jsx)(u.A,{}):null;return(0,n.jsxs)("div",{className:"comics__list",children:[_,f,x,(0,n.jsx)("button",{disabled:c,style:{display:d?"none":"block"},className:"button button__main button__long",onClick:()=>v(s),children:(0,n.jsx)("div",{className:"inner",children:"load more"})})]})},h=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsx)(d,{})]})},897:(t,e,c)=>{c.d(e,{A:()=>s});var a=c(43);const s=()=>{const{loading:t,request:e,error:c,clearError:s}=(()=>{const[t,e]=(0,a.useState)(!1),[c,s]=(0,a.useState)(null);return{loading:t,request:(0,a.useCallback)((async function(t){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};e(!0);try{const s=await fetch(t,{method:c,body:a,headers:n});if(!s.ok)throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));const i=await s.json();return e(!1),i}catch(i){throw e(!1),s(i.message),i}}),[]),error:c,clearError:(0,a.useCallback)((()=>s(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",i="apikey=81c9ec44faf041042c369770623c2248",r=t=>({id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}),o=t=>{var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:t,error:c,clearError:s,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(n,"characters?limit=9&offset=").concat(t,"&").concat(i))).data.results.map(r)},getCharacter:async t=>{const c=await e("".concat(n,"characters/").concat(t,"?").concat(i));return r(c.data.results[0])},getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(i))).data.results.map(o)},getComic:async t=>{const c=await e("".concat(n,"comics/").concat(t,"?").concat(i));return o(c.data.results[0])}}}}}]);
//# sourceMappingURL=349.f8e78fed.chunk.js.map