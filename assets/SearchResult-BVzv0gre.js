import{u as _,g as ae,h as te,i as U,j as se,P as le,t as re,k as ie,l as S,m as z,n as ue,p as Y,q as t,s as oe,R as O,v as ne,x as ce,y as ve,C as he,z as pe,A as ye,B as ge,D as de,E as me,F as R,G as Ee,H as Be,I as fe,J as T,K as $,L as Ce}from"./app-DCRJHmwp.js";const He=["/","/portfolio.html","/blog/","/zh/learning/","/zh/note/","/zh/problem/","/zh/project/","/zh/learning/blogCreate/","/zh/learning/blogCreate/config.html","/zh/learning/blogCreate/create.html","/zh/learning/blogCreate/deploy.html","/zh/learning/blogCreate/env.html","/zh/learning/zhaoPinCrawler/","/zh/learning/zhaoPinCrawler/env.html","/zh/learning/zhaoPinCrawler/processing.html","/zh/learning/zhaoPinCrawler/scraping.html","/zh/learning/zhaoPinCrawler/visualization.html","/404.html","/zh/","/category/","/category/cookbook/","/category/tutorial/","/category/get-started/","/category/python/","/category/jupyter-notebook/","/category/pyecharts/","/category/pandas/","/category/re/","/category/csv/","/category/drissionpage/","/tag/","/tag/template/","/tag/project-config/","/tag/project-deployment/","/tag/runtime/","/tag/%E7%88%AC%E8%99%AB/","/tag/boss-%E7%9B%B4%E8%81%98/","/tag/%E6%99%BA%E8%81%94%E6%8B%9B%E8%81%98/","/tag/%E5%89%8D%E7%A8%8B%E6%97%A0%E5%BF%A7/","/tag/%E5%9C%B0%E5%9B%BE/","/tag/%E6%9F%B1%E7%8A%B6%E5%9B%BE/","/tag/%E6%8A%98%E7%BA%BF%E5%9B%BE/","/tag/%E9%A5%BC%E5%9B%BE/","/tag/%E6%97%B6%E9%97%B4%E8%BD%B4/","/tag/%E8%AF%8D%E4%BA%91%E5%9B%BE/","/article/","/star/","/timeline/"],ke="SEARCH_PRO_QUERY_HISTORY",m=_(ke,[]),ze=()=>{const{queryHistoryCount:s}=R,l=s>0;return{enabled:l,queryHistory:m,addQueryHistory:r=>{l&&(m.value=Array.from(new Set([r,...m.value.slice(0,s-1)])))},removeQueryHistory:r=>{m.value=[...m.value.slice(0,r),...m.value.slice(r+1)]}}},P=s=>He[s.id]+("anchor"in s?`#${s.anchor}`:""),Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=R,E=_(Re,[]),we=()=>{const s=I>0;return{enabled:s,resultHistory:E,addResultHistory:l=>{if(s){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,I-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},Ae=s=>{const l=he(),r=U(),w=pe(),u=S(0),C=z(()=>u.value>0),y=ye([]);return ge(()=>{const{search:g,terminate:A}=de(),B=me(c=>{const f=c.join(" "),{searchFilter:b=p=>p,splitWord:Q,suggestionsFilter:F,...d}=l.value;f?(u.value+=1,g(c.join(" "),r.value,d).then(p=>b(p,f,r.value,w.value)).then(p=>{u.value-=1,y.value=p}).catch(p=>{console.warn(p),u.value-=1,u.value||(y.value=[])})):y.value=[]},R.searchDelay-R.suggestDelay);Y([s,r],([c])=>B(c),{immediate:!0}),Ee(()=>{A()})}),{isSearching:C,results:y}};var Qe=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=te(),w=U(),u=se(le),{enabled:C,addQueryHistory:y,queryHistory:g,removeQueryHistory:A}=ze(),{enabled:B,resultHistory:c,addResultHistory:f,removeResultHistory:b}=we(),Q=C||B,F=re(s,"queries"),{results:d,isSearching:p}=Ae(F),i=ie({isQuery:!0,index:0}),v=S(0),h=S(0),L=z(()=>Q&&(g.value.length>0||c.value.length>0)),q=z(()=>d.value.length>0),x=z(()=>d.value[v.value]||null),M=()=>{const{isQuery:e,index:a}=i;a===0?(i.isQuery=!e,i.index=e?c.value.length-1:g.value.length-1):i.index=a-1},G=()=>{const{isQuery:e,index:a}=i;a===(e?g.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=a+1},J=()=>{v.value=v.value>0?v.value-1:d.value.length-1,h.value=x.value.contents.length-1},K=()=>{v.value=v.value<d.value.length-1?v.value+1:0,h.value=0},V=()=>{h.value<x.value.contents.length-1?h.value+=1:K()},N=()=>{h.value>0?h.value-=1:J()},D=e=>e.map(a=>Ce(a)?a:t(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=Be[e.index]||"$content",[o,k=""]=fe(a)?a[w.value].split("$content"):a.split("$content");return e.display.map(n=>t("div",D([o,...n,k])))}return e.display.map(a=>t("div",D(a)))},H=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")},X=()=>C?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.queryHistory),g.value.map((e,a)=>t("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===a}],onClick:()=>{l("updateQuery",e)}},[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),A(a)}})]))])):null,Z=()=>B?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,a)=>t(O,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===a}],onClick:()=>{H()}},()=>[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>D(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),b(a)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(q.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=x.value.contents[h.value];y(s.queries.join(" ")),f(a),r.push(P(a)),H()}}else if(B){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=i;i.isQuery?(l("updateQuery",g.value[a]),e.preventDefault()):(r.push(c.value[a].link),H())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!q.value:!L.value}],id:"search-pro-results"},s.queries.length?p.value?t(oe,{hint:u.value.searching}):q.value?t("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:a},o)=>{const k=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:k}]},[t("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),a.map((n,ee)=>{const j=k&&h.value===ee;return t(O,{to:P(n),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{y(s.queries.join(" ")),f(n),H()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):u.value.emptyResult:Q?L.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Qe as default};