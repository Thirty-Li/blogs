import{u as ct,i as Mt,a as It,b as Ct,e as kt,c as Et,S as bt,d as Ft,Z as At,f as nt,g as Pt,r as Rt,h as Wt,l as Ot,j as zt,k as Dt,m as ht,n as Lt}from"./install-DOgaBJKb.js";ct([Mt,It]);ct(Ct);kt({type:"series.wordCloud",visualStyleAccessPath:"textStyle",visualStyleMapper:function(f){return{fill:f.get("color")}},visualDrawType:"fill",optionUpdated:function(){var f=this.option;f.gridSize=Math.max(Math.floor(f.gridSize),4)},getInitialData:function(f,o){var a=Et(f.data,{coordDimensions:["value"]}),l=new bt(a,this);return l.initData(f.data),l},defaultOption:{maskImage:null,shape:"circle",keepAspect:!1,left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,textStyle:{fontWeight:"normal"}}});Ft({type:"wordCloud",render:function(f,o,a){var l=this.group;l.removeAll();var t=f.getData(),y=f.get("gridSize");f.layoutInstance.ondraw=function(d,r,T,P){var D=t.getItemModel(T),Y=D.getModel("textStyle"),I=new At({style:nt(Y),scaleX:1/P.info.mu,scaleY:1/P.info.mu,x:(P.gx+P.info.gw/2)*y,y:(P.gy+P.info.gh/2)*y,rotation:P.rot});I.setStyle({x:P.info.fillTextOffsetX,y:P.info.fillTextOffsetY+r*.5,text:d,verticalAlign:"middle",fill:t.getItemVisual(T,"style").fill,fontSize:r}),l.add(I),t.setItemGraphicEl(T,I),I.ensureState("emphasis").style=nt(D.getModel(["emphasis","textStyle"]),{state:"emphasis"}),I.ensureState("blur").style=nt(D.getModel(["blur","textStyle"]),{state:"blur"}),Pt(I,D.get(["emphasis","focus"]),D.get(["emphasis","blurScope"])),I.stateTransition={duration:f.get("animation")?f.get(["stateAnimation","duration"]):0,easing:f.get(["stateAnimation","easing"])},I.__highDownDispatcher=!0},this._model=f},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}});/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2019 Tim Guan-tin Chien and contributors.
 * Released under the MIT license
 */window.setImmediate||(window.setImmediate=function(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var a=[void 0],l="zero-timeout-message",t=function(d){var r=a.length;return a.push(d),window.postMessage(l+r.toString(36),"*"),r};return window.addEventListener("message",function(d){if(!(typeof d.data!="string"||d.data.substr(0,l.length)!==l)){d.stopImmediatePropagation();var r=parseInt(d.data.substr(l.length),36);a[r]&&(a[r](),a[r]=void 0)}},!0),window.clearImmediate=function(d){a[d]&&(a[d]=void 0)},t}()||function(a){window.setTimeout(a,0)}}());window.clearImmediate||(window.clearImmediate=function(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(a){window.clearTimeout(a)}}());var lt=function(){var o=document.createElement("canvas");if(!o||!o.getContext)return!1;var a=o.getContext("2d");return!(!a||!a.getImageData||!a.fillText||!Array.prototype.some||!Array.prototype.push)}(),ot=function(){if(lt){for(var o=document.createElement("canvas").getContext("2d"),a=20,l,t;a;){if(o.font=a.toString(10)+"px sans-serif",o.measureText("Ｗ").width===l&&o.measureText("m").width===t)return a+1;l=o.measureText("Ｗ").width,t=o.measureText("m").width,a--}return 0}}(),Bt=function(f){if(Array.isArray(f)){var o=f.slice();return o.splice(0,2),o}else return[]},Xt=function(o){for(var a,l,t=o.length;t;)a=Math.floor(Math.random()*t),l=o[--t],o[t]=o[a],o[a]=l;return o},Z={},$=function(o,a){if(!lt)return;var l=Math.floor(Math.random()*Date.now());Array.isArray(o)||(o=[o]),o.forEach(function(c,e){if(typeof c=="string"){if(o[e]=document.getElementById(c),!o[e])throw new Error("The element id specified is not found.")}else if(!c.tagName&&!c.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")});var t={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,layoutAnimation:!0,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(a)for(var y in a)y in t&&(t[y]=a[y]);if(typeof t.weightFactor!="function"){var d=t.weightFactor;t.weightFactor=function(e){return e*d}}if(typeof t.shape!="function")switch(t.shape){case"circle":default:t.shape="circle";break;case"cardioid":t.shape=function(e){return 1-Math.sin(e)};break;case"diamond":t.shape=function(e){var i=e%(2*Math.PI/4);return 1/(Math.cos(i)+Math.sin(i))};break;case"square":t.shape=function(e){return Math.min(1/Math.abs(Math.cos(e)),1/Math.abs(Math.sin(e)))};break;case"triangle-forward":t.shape=function(e){var i=e%(2*Math.PI/3);return 1/(Math.cos(i)+Math.sqrt(3)*Math.sin(i))};break;case"triangle":case"triangle-upright":t.shape=function(e){var i=(e+Math.PI*3/2)%(2*Math.PI/3);return 1/(Math.cos(i)+Math.sqrt(3)*Math.sin(i))};break;case"pentagon":t.shape=function(e){var i=(e+.955)%(2*Math.PI/5);return 1/(Math.cos(i)+.726543*Math.sin(i))};break;case"star":t.shape=function(e){var i=(e+.955)%(2*Math.PI/10);return(e+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-i)+3.07768*Math.sin(2*Math.PI/10-i)):1/(Math.cos(i)+3.07768*Math.sin(i))};break}t.gridSize=Math.max(Math.floor(t.gridSize),4);var r=t.gridSize,T=r-t.maskGapWidth,P=Math.abs(t.maxRotation-t.minRotation),D=Math.min(t.maxRotation,t.minRotation),Y=t.rotationStep,I,C,b,B,F,O,G;function st(c,e){return"hsl("+(Math.random()*360).toFixed()+","+(Math.random()*30+70).toFixed()+"%,"+(Math.random()*(e-c)+c).toFixed()+"%)"}switch(t.color){case"random-dark":G=function(){return st(10,50)};break;case"random-light":G=function(){return st(50,90)};break;default:typeof t.color=="function"&&(G=t.color);break}var _;typeof t.fontWeight=="function"&&(_=t.fontWeight);var j=null;typeof t.classes=="function"&&(j=t.classes);var J=!1,U=[],K,ft=function(e){var i=e.currentTarget,n=i.getBoundingClientRect(),u,s;e.touches?(u=e.touches[0].clientX,s=e.touches[0].clientY):(u=e.clientX,s=e.clientY);var h=u-n.left,S=s-n.top,g=Math.floor(h*(i.width/n.width||1)/r),m=Math.floor(S*(i.height/n.height||1)/r);return U[g]?U[g][m]:null},ut=function(e){var i=ft(e);if(K!==i){if(K=i,!i){t.hover(void 0,void 0,e);return}t.hover(i.item,i.dimension,e)}},Q=function(e){var i=ft(e);i&&(t.click(i.item,i.dimension,e),e.preventDefault())},tt=[],vt=function(e){if(tt[e])return tt[e];var i=e*8,n=i,u=[];for(e===0&&u.push([B[0],B[1],0]);n--;){var s=1;t.shape!=="circle"&&(s=t.shape(n/i*2*Math.PI)),u.push([B[0]+e*s*Math.cos(-n/i*2*Math.PI),B[1]+e*s*Math.sin(-n/i*2*Math.PI)*t.ellipticity,n/i*2*Math.PI])}return tt[e]=u,u},et=function(){return t.abortThreshold>0&&new Date().getTime()-O>t.abortThreshold},gt=function(){return t.rotateRatio===0||Math.random()>t.rotateRatio?0:P===0?D:D+Math.round(Math.random()*P/Y)*Y},mt=function(e,i,n,u){var s=t.weightFactor(i);if(s<=t.minSize)return!1;var h=1;s<ot&&(h=function(){for(var it=2;it*s<ot;)it+=2;return it}());var S;_?S=_(e,i,s,u):S=t.fontWeight;var g=document.createElement("canvas"),m=g.getContext("2d",{willReadFrequently:!0});m.font=S+" "+(s*h).toString(10)+"px "+t.fontFamily;var A=m.measureText(e).width/h,w=Math.max(s*h,m.measureText("m").width,m.measureText("Ｗ").width)/h,p=A+w*2,k=w*3,R=Math.ceil(p/r),W=Math.ceil(k/r);p=R*r,k=W*r;var M=-A/2,v=-w*.4,x=Math.ceil((p*Math.abs(Math.sin(n))+k*Math.abs(Math.cos(n)))/r),E=Math.ceil((p*Math.abs(Math.cos(n))+k*Math.abs(Math.sin(n)))/r),z=E*r,q=x*r;g.setAttribute("width",z),g.setAttribute("height",q),m.scale(1/h,1/h),m.translate(z*h/2,q*h/2),m.rotate(-n),m.font=S+" "+(s*h).toString(10)+"px "+t.fontFamily,m.fillStyle="#000",m.textBaseline="middle",m.fillText(e,M*h,(v+s*.5)*h);var V=m.getImageData(0,0,z,q).data;if(et())return!1;for(var dt=[],H=E,X,at,rt,L=[x/2,E/2,x/2,E/2];H--;)for(X=x;X--;){rt=r;t:for(;rt--;)for(at=r;at--;)if(V[((X*r+rt)*z+(H*r+at))*4+3]){dt.push([H,X]),H<L[3]&&(L[3]=H),H>L[1]&&(L[1]=H),X<L[0]&&(L[0]=X),X>L[2]&&(L[2]=X);break t}}return{mu:h,occupied:dt,bounds:L,gw:E,gh:x,fillTextOffsetX:M,fillTextOffsetY:v,fillTextWidth:A,fillTextHeight:w,fontSize:s}},wt=function(e,i,n,u,s){for(var h=s.length;h--;){var S=e+s[h][0],g=i+s[h][1];if(S>=C||g>=b||S<0||g<0){if(!t.drawOutOfBound)return!1;continue}if(!I[S][g])return!1}return!0},pt=function(e,i,n,u,s,h,S,g,m,A){var w=n.fontSize,p;G?p=G(u,s,w,h,S,A):p=t.color;var k;_?k=_(u,s,w,A):k=t.fontWeight;var R;j?R=j(u,s,w,A):R=t.classes,o.forEach(function(W){if(W.getContext){var M=W.getContext("2d"),v=n.mu;M.save(),M.scale(1/v,1/v),M.font=k+" "+(w*v).toString(10)+"px "+t.fontFamily,M.fillStyle=p,M.translate((e+n.gw/2)*r*v,(i+n.gh/2)*r*v),g!==0&&M.rotate(-g),M.textBaseline="middle",M.fillText(u,n.fillTextOffsetX*v,(n.fillTextOffsetY+w*.5)*v),M.restore()}else{var x=document.createElement("span"),E="";E="rotate("+-g/Math.PI*180+"deg) ",n.mu!==1&&(E+="translateX(-"+n.fillTextWidth/4+"px) scale("+1/n.mu+")");var z={position:"absolute",display:"block",font:k+" "+w*n.mu+"px "+t.fontFamily,left:(e+n.gw/2)*r+n.fillTextOffsetX+"px",top:(i+n.gh/2)*r+n.fillTextOffsetY+"px",width:n.fillTextWidth+"px",height:n.fillTextHeight+"px",lineHeight:w+"px",whiteSpace:"nowrap",transform:E,webkitTransform:E,msTransform:E,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};p&&(z.color=p),x.textContent=u;for(var q in z)x.style[q]=z[q];if(m)for(var V in m)x.setAttribute(V,m[V]);R&&(x.className+=R),W.appendChild(x)}})},yt=function(e,i,n,u,s){if(!(e>=C||i>=b||e<0||i<0)){if(I[e][i]=!1,n){var h=o[0].getContext("2d");h.fillRect(e*r,i*r,T,T)}J&&(U[e][i]={item:s,dimension:u})}},xt=function(e,i,n,u,s,h){var S=s.occupied,g=t.drawMask,m;g&&(m=o[0].getContext("2d"),m.save(),m.fillStyle=t.maskColor);var A;if(J){var w=s.bounds;A={x:(e+w[3])*r,y:(i+w[0])*r,w:(w[1]-w[3]+1)*r,h:(w[2]-w[0]+1)*r}}for(var p=S.length;p--;){var k=e+S[p][0],R=i+S[p][1];k>=C||R>=b||k<0||R<0||yt(k,R,g,A,h)}g&&m.restore()},St=function c(e,i){if(i>20)return null;var n,u,s;Array.isArray(e)?(n=e[0],u=e[1]):(n=e.word,u=e.weight,s=e.attributes);var h=gt(),S=Bt(e),g=mt(n,u,h,S);if(!g||et())return!1;if(!t.drawOutOfBound&&!t.shrinkToFit){var m=g.bounds;if(m[1]-m[3]+1>C||m[2]-m[0]+1>b)return!1}for(var A=F+1,w=function(W){var M=Math.floor(W[0]-g.gw/2),v=Math.floor(W[1]-g.gh/2),x=g.gw,E=g.gh;return wt(M,v,x,E,g.occupied)?(pt(M,v,g,n,u,F-A,W[2],h,s,S),xt(M,v,x,E,g,e),{gx:M,gy:v,rot:h,info:g}):!1};A--;){var p=vt(F-A);t.shuffle&&(p=[].concat(p),Xt(p));for(var k=0;k<p.length;k++){var R=w(p[k]);if(R)return R}}return t.shrinkToFit?(Array.isArray(e)?e[1]=e[1]*3/4:e.weight=e.weight*3/4,c(e,i+1)):null},N=function(e,i,n){if(i)return!o.some(function(u){var s=new CustomEvent(e,{detail:n||{}});return!u.dispatchEvent(s)},this);o.forEach(function(u){var s=new CustomEvent(e,{detail:n||{}});u.dispatchEvent(s)},this)},Tt=function(){var e=o[0];if(e.getContext)C=Math.ceil(e.width/r),b=Math.ceil(e.height/r);else{var i=e.getBoundingClientRect();C=Math.ceil(i.width/r),b=Math.ceil(i.height/r)}if(N("wordcloudstart",!0)){B=t.origin?[t.origin[0]/r,t.origin[1]/r]:[C/2,b/2],F=Math.floor(Math.sqrt(C*C+b*b)),I=[];var n,u,s;if(!e.getContext||t.clearCanvas)for(o.forEach(function(v){if(v.getContext){var x=v.getContext("2d");x.fillStyle=t.backgroundColor,x.clearRect(0,0,C*(r+1),b*(r+1)),x.fillRect(0,0,C*(r+1),b*(r+1))}else v.textContent="",v.style.backgroundColor=t.backgroundColor,v.style.position="relative"}),n=C;n--;)for(I[n]=[],u=b;u--;)I[n][u]=!0;else{var h=document.createElement("canvas").getContext("2d");h.fillStyle=t.backgroundColor,h.fillRect(0,0,1,1);var S=h.getImageData(0,0,1,1).data,g=e.getContext("2d").getImageData(0,0,C*r,b*r).data;n=C;for(var m,A;n--;)for(I[n]=[],u=b;u--;){A=r;t:for(;A--;)for(m=r;m--;)for(s=4;s--;)if(g[((u*r+A)*C*r+(n*r+m))*4+s]!==S[s]){I[n][u]=!1;break t}I[n][u]!==!1&&(I[n][u]=!0)}g=h=S=void 0}if(t.hover||t.click){for(J=!0,n=C+1;n--;)U[n]=[];t.hover&&e.addEventListener("mousemove",ut),t.click&&(e.addEventListener("click",Q),e.addEventListener("touchstart",Q),e.addEventListener("touchend",function(v){v.preventDefault()}),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",function v(){e.removeEventListener("wordcloudstart",v),e.removeEventListener("mousemove",ut),e.removeEventListener("click",Q),K=void 0})}s=0;var w,p,k=!0;t.layoutAnimation?t.wait!==0?(w=window.setTimeout,p=window.clearTimeout):(w=window.setImmediate,p=window.clearImmediate):(w=function(v){v()},p=function(){k=!1});var R=function(x,E){o.forEach(function(z){z.addEventListener(x,E)},this)},W=function(x,E){o.forEach(function(z){z.removeEventListener(x,E)},this)},M=function v(){W("wordcloudstart",v),p(Z[l])};R("wordcloudstart",M),Z[l]=(t.layoutAnimation?w:setTimeout)(function v(){if(k){if(s>=t.list.length){p(Z[l]),N("wordcloudstop",!1),W("wordcloudstart",M),delete Z[l];return}O=new Date().getTime();var x=St(t.list[s],0),E=!N("wordclouddrawn",!0,{item:t.list[s],drawn:x});if(et()||E){p(Z[l]),t.abort(),N("wordcloudabort",!1),N("wordcloudstop",!1),W("wordcloudstart",M);return}s++,Z[l]=w(v,t.wait)}},t.wait)}};Tt()};$.isSupported=lt;$.minFontSize=ot;if(!$.isSupported)throw new Error("Sorry your browser not support wordCloud");function Yt(f){for(var o=f.getContext("2d"),a=o.getImageData(0,0,f.width,f.height),l=o.createImageData(a),t=0,y=0,d=0;d<a.data.length;d+=4){var r=a.data[d+3];if(r>128){var T=a.data[d]+a.data[d+1]+a.data[d+2];t+=T,++y}}for(var P=t/y,d=0;d<a.data.length;d+=4){var T=a.data[d]+a.data[d+1]+a.data[d+2],r=a.data[d+3];r<128||T>P?(l.data[d]=0,l.data[d+1]=0,l.data[d+2]=0,l.data[d+3]=0):(l.data[d]=255,l.data[d+1]=255,l.data[d+2]=255,l.data[d+3]=255)}o.putImageData(l,0,0)}Rt(function(f,o){f.eachSeriesByType("wordCloud",function(a){var l=Wt(a.getBoxLayoutParams(),{width:o.getWidth(),height:o.getHeight()}),t=a.get("keepAspect"),y=a.get("maskImage"),d=y?y.width/y.height:1;t&&Gt(l,d);var r=a.getData(),T=document.createElement("canvas");T.width=l.width,T.height=l.height;var P=T.getContext("2d");if(y)try{P.drawImage(y,0,0,T.width,T.height),Yt(T)}catch(F){console.error("Invalid mask image"),console.error(F.toString())}var D=a.get("sizeRange"),Y=a.get("rotationRange"),I=r.getDataExtent("value"),C=Math.PI/180,b=a.get("gridSize");$(T,{list:r.mapArray("value",function(F,O){var G=r.getItemModel(O);return[r.getName(O),G.get("textStyle.fontSize",!0)||Ot(F,I,D),O]}).sort(function(F,O){return O[1]-F[1]}),fontFamily:a.get("textStyle.fontFamily")||a.get("emphasis.textStyle.fontFamily")||f.get("textStyle.fontFamily"),fontWeight:a.get("textStyle.fontWeight")||a.get("emphasis.textStyle.fontWeight")||f.get("textStyle.fontWeight"),gridSize:b,ellipticity:l.height/l.width,minRotation:Y[0]*C,maxRotation:Y[1]*C,clearCanvas:!y,rotateRatio:1,rotationStep:a.get("rotationStep")*C,drawOutOfBound:a.get("drawOutOfBound"),shrinkToFit:a.get("shrinkToFit"),layoutAnimation:a.get("layoutAnimation"),shuffle:!1,shape:a.get("shape")});function B(F){var O=F.detail.item;F.detail.drawn&&a.layoutInstance.ondraw&&(F.detail.drawn.gx+=l.x/b,F.detail.drawn.gy+=l.y/b,a.layoutInstance.ondraw(O[0],O[1],O[2],F.detail.drawn))}T.addEventListener("wordclouddrawn",B),a.layoutInstance&&a.layoutInstance.dispose(),a.layoutInstance={ondraw:null,dispose:function(){T.removeEventListener("wordclouddrawn",B),T.addEventListener("wordclouddrawn",function(F){F.preventDefault()})}}})});zt(function(f){var o=(f||{}).series;!Dt(o)&&(o=o?[o]:[]);var a=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];ht(o,function(t){if(t&&t.type==="wordCloud"){var y=t.textStyle||{};l(y.normal),l(y.emphasis)}});function l(t){t&&ht(a,function(y){t.hasOwnProperty(y)&&(t["text"+Lt(y)]=t[y])})}});function Gt(f,o){var a=f.width,l=f.height;a>l*o?(f.x+=(a-l*o)/2,f.width=l*o):(f.y+=(l-a/o)/2,f.height=a/o)}
