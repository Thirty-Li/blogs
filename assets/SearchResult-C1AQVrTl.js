import{u as _,g as ae,h as te,i as U,j as le,P as re,t as se,k as oe,l as S,m as H,n as ie,p as Y,q as t,s as ne,R as O,v as ue,x as ce,y as ve,C as he,z as pe,A as ye,B as ge,D as de,E as me,F as b,G as Ee,H as Be,I as Ce,J as T,K as $,L as Ae}from"./app-BFY68qNS.js";const fe=["/","/portfolio.html","/blog/","/zh/note/","/zh/learning/","/zh/problem/","/zh/project/","/zh/learning/blogCreate/","/zh/learning/blogCreate/config.html","/zh/learning/blogCreate/create.html","/zh/learning/blogCreate/deploy.html","/zh/learning/blogCreate/env.html","/zh/learning/problemCreate/","/zh/learning/problemCreate/notion.html","/zh/learning/problemCreate/polygon.html","/zh/learning/problemCreate/upload.html","/zh/learning/zhaoPinCrawler/","/zh/learning/zhaoPinCrawler/env.html","/zh/learning/zhaoPinCrawler/processing.html","/zh/learning/zhaoPinCrawler/scraping.html","/zh/learning/zhaoPinCrawler/visualization.html","/404.html","/zh/","/category/","/category/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/","/category/vuepress/","/category/tutorial/","/category/get-started/","/category/vuepress-theme-hope/","/category/github/","/category/%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE/","/category/node.js/","/category/polygon/","/category/notion/","/category/oj/","/category/python/","/category/%E7%88%AC%E8%99%AB/","/category/jupyter-notebook/","/category/pyecharts/","/category/pandas/","/category/re/","/category/csv/","/category/drissionpage/","/tag/","/tag/project-config/","/tag/runtime/","/tag/%E7%88%AC%E8%99%AB/","/tag/boss-%E7%9B%B4%E8%81%98/","/tag/%E6%99%BA%E8%81%94%E6%8B%9B%E8%81%98/","/tag/%E5%89%8D%E7%A8%8B%E6%97%A0%E5%BF%A7/","/tag/%E5%9C%B0%E5%9B%BE/","/tag/%E6%9F%B1%E7%8A%B6%E5%9B%BE/","/tag/%E6%8A%98%E7%BA%BF%E5%9B%BE/","/tag/%E9%A5%BC%E5%9B%BE/","/tag/%E6%97%B6%E9%97%B4%E8%BD%B4/","/tag/%E8%AF%8D%E4%BA%91%E5%9B%BE/","/article/","/star/","/timeline/"],ze="SEARCH_PRO_QUERY_HISTORY",m=_(ze,[]),He=()=>{const{queryHistoryCount:l}=b,r=l>0;return{enabled:r,queryHistory:m,addQueryHistory:s=>{r&&(m.value=Array.from(new Set([s,...m.value.slice(0,l-1)])))},removeQueryHistory:s=>{m.value=[...m.value.slice(0,s),...m.value.slice(s+1)]}}},F=l=>fe[l.id]+("anchor"in l?`#${l.anchor}`:""),be="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=b,E=_(be,[]),Re=()=>{const l=I>0;return{enabled:l,resultHistory:E,addResultHistory:r=>{if(l){const s={link:F(r),display:r.display};"header"in r&&(s.header=r.header),E.value=[s,...E.value.slice(0,I-1)]}},removeResultHistory:r=>{E.value=[...E.value.slice(0,r),...E.value.slice(r+1)]}}},we=l=>{const r=he(),s=U(),R=pe(),i=S(0),A=H(()=>i.value>0),y=ye([]);return ge(()=>{const{search:g,terminate:w}=de(),B=me(c=>{const C=c.join(" "),{searchFilter:k=p=>p,splitWord:Q,suggestionsFilter:P,...d}=r.value;C?(i.value+=1,g(c.join(" "),s.value,d).then(p=>k(p,C,s.value,R.value)).then(p=>{i.value-=1,y.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(y.value=[])})):y.value=[]},b.searchDelay-b.suggestDelay);Y([l,s],([c])=>B(c),{immediate:!0}),Ee(()=>{w()})}),{isSearching:A,results:y}};var Qe=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:r}){const s=te(),R=U(),i=le(re),{enabled:A,addQueryHistory:y,queryHistory:g,removeQueryHistory:w}=He(),{enabled:B,resultHistory:c,addResultHistory:C,removeResultHistory:k}=Re(),Q=A||B,P=se(l,"queries"),{results:d,isSearching:p}=we(P),o=oe({isQuery:!0,index:0}),v=S(0),h=S(0),L=H(()=>Q&&(g.value.length>0||c.value.length>0)),D=H(()=>d.value.length>0),q=H(()=>d.value[v.value]||null),M=()=>{const{isQuery:e,index:a}=o;a===0?(o.isQuery=!e,o.index=e?c.value.length-1:g.value.length-1):o.index=a-1},G=()=>{const{isQuery:e,index:a}=o;a===(e?g.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=a+1},J=()=>{v.value=v.value>0?v.value-1:d.value.length-1,h.value=q.value.contents.length-1},K=()=>{v.value=v.value<d.value.length-1?v.value+1:0,h.value=0},V=()=>{h.value<q.value.contents.length-1?h.value+=1:K()},N=()=>{h.value>0?h.value-=1:J()},x=e=>e.map(a=>Ae(a)?a:t(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=Be[e.index]||"$content",[n,z=""]=Ce(a)?a[R.value].split("$content"):a.split("$content");return e.display.map(u=>t("div",x([n,...u,z])))}return e.display.map(a=>t("div",x(a)))},f=()=>{v.value=0,h.value=0,r("updateQuery",""),r("close")},X=()=>A?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),g.value.map((e,a)=>t("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===a}],onClick:()=>{r("updateQuery",e)}},[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:n=>{n.preventDefault(),n.stopPropagation(),w(a)}})]))])):null,Z=()=>B?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,a)=>t(O,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===a}],onClick:()=>{f()}},()=>[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(n=>x(n)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:n=>{n.preventDefault(),n.stopPropagation(),k(a)}})]))])):null;return ie("keydown",e=>{if(l.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=q.value.contents[h.value];y(l.queries.join(" ")),C(a),s.push(F(a)),f()}}else if(B){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=o;o.isQuery?(r("updateQuery",g.value[a]),e.preventDefault()):(s.push(c.value[a].link),f())}}}}),Y([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!D.value:!L.value}],id:"search-pro-results"},l.queries.length?p.value?t(ne,{hint:i.value.searching}):D.value?t("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:a},n)=>{const z=v.value===n;return t("li",{class:["search-pro-result-list-item",{active:z}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),a.map((u,ee)=>{const j=z&&h.value===ee;return t(O,{to:F(u),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{y(l.queries.join(" ")),C(u),f()}},()=>[u.type==="text"?null:t(u.type==="title"?ue:u.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?t("div",{class:"content-header"},u.header):null,t("div",W(u))])])})])})):i.value.emptyResult:Q?L.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Qe as default};
