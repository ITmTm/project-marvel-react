"use strict";(self.webpackChunkproject_marvel_react=self.webpackChunkproject_marvel_react||[]).push([[682],{354:(e,t,c)=>{c.d(t,{A:()=>r});const s=c.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=c.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var n=c(579);const r=()=>(0,n.jsxs)("div",{className:"app__banner",children:[(0,n.jsx)("img",{src:s,alt:"Avengers"}),(0,n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,n.jsx)("br",{}),"Stay tuned!"]}),(0,n.jsx)("img",{src:a,alt:"Avengers logo"})]})},425:(e,t,c)=>{c.d(t,{A:()=>n});const s=c.p+"static/media/error.ef269a1054bc08e1291e.gif";var a=c(579);const n=()=>(0,a.jsx)("img",{style:{display:"block",width:"450px",height:"250px",objectFit:"contain",margin:"0 auto"},src:s,alt:"Error"})},637:(e,t,c)=>{c.r(t),c.d(t,{default:()=>d});var s=c(591),a=c(354),n=c(43),r=c(475),i=c(897),o=c(425),l=c(384),u=c(579);const m=()=>{const[e,t]=(0,n.useState)([]),[c,s]=(0,n.useState)(!1),[a,m]=(0,n.useState)(0),[d,h]=(0,n.useState)(!1),p=(0,n.useRef)(!0),{getAllComics:g,process:b,setProcess:x}=(0,i.A)();(0,n.useEffect)((()=>(p.current&&f(a,!0),()=>{p.current=!1})),[]);const f=(e,t)=>{s(!t),g(e).then(j).then((()=>x("confirmed"))).catch((e=>console.log(e)))},j=e=>{let c=!1;e.length<8&&(c=!0),t((t=>[...t,...e])),s(!1),m((e=>e+8)),h(c)};const v=(0,n.useMemo)((()=>((e,t,c)=>{switch(e){case"waiting":return(0,u.jsx)(l.A,{});case"loading":return c?t:(0,u.jsx)(l.A,{});case"error":return(0,u.jsx)(o.A,{});case"confirmed":return t;default:throw new Error("Unexpected process state")}})(b,function(e){const t=e.map(((e,t)=>(0,u.jsx)("li",{className:"comics__item",children:(0,u.jsxs)(r.N_,{to:"/comics/".concat(e.id),children:[(0,u.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,u.jsx)("div",{className:"comics__item-name",children:e.title}),(0,u.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)));return(0,u.jsx)("ul",{className:"comics__grid",children:t})}(e),c)),[b]);return(0,u.jsxs)("div",{className:"comics__list",children:[v,(0,u.jsx)("button",{onClick:()=>f(a),className:"button button__main button__long",style:{display:d?"none":"block"},disabled:c,children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},d=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s.m,{children:[(0,u.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,u.jsx)("title",{children:"Comics page"})]}),(0,u.jsx)(a.A,{}),(0,u.jsx)(m,{})]})},897:(e,t,c)=>{c.d(t,{A:()=>a});var s=c(43);const a=()=>{const{request:e,clearError:t,process:c,setProcess:a}=(()=>{const[e,t]=(0,s.useState)("waiting");return{request:(0,s.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:c,body:s,headers:a});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(t.status));return await t.json()}catch(n){throw t("error"),n}}),[]),clearError:(0,s.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),n="https://gateway.marvel.com:443/v1/public/",r="apikey=81c9ec44faf041042c369770623c2248",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),o=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:t,process:c,setProcess:a,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(n,"characters?limit=9&offset=").concat(t,"&").concat(r))).data.results.map(i)},getCharacterByName:async t=>(await e("".concat(n,"characters?name=").concat(t,"&").concat(r))).data.results.map(i),getCharacter:async t=>{const c=await e("".concat(n,"characters/").concat(t,"?").concat(r));return i(c.data.results[0])},getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(r))).data.results.map(o)},getComic:async t=>{const c=await e("".concat(n,"comics/").concat(t,"?").concat(r));return o(c.data.results[0])}}}}}]);
//# sourceMappingURL=682.d5db0326.chunk.js.map