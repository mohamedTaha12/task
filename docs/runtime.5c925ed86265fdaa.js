(()=>{"use strict";var e,v={},m={};function r(e){var f=m[e];if(void 0!==f)return f.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(f,t,i,o)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,i,o]=e[n],s=!0,l=0;l<t.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every(b=>r.O[b](t[l]))?t.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(n--,1);var d=i();void 0!==d&&(f=d)}}return f}o=o||0;for(var n=e.length;n>0&&e[n-1][2]>o;n--)e[n]=e[n-1];e[n]=[t,i,o]},r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{6:"fe1eb7b7dbf73d3a",8:"9bb25c1964e85cd9",76:"54727ff54f33d274",239:"08e9913874015264",592:"b30cfcd93b5cf919"}[e]+".js",r.miniCssF=e=>{},r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="tasks:";r.l=(t,i,o,n)=>{if(e[t])e[t].push(i);else{var a,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==f+o){a=u;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+o),a.src=r.tu(t)),e[t]=[i];var c=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(y=>y(b)),g)return g(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(i,o)=>{var n=r.o(e,i)?e[i]:void 0;if(0!==n)if(n)o.push(n[2]);else if(666!=i){var a=new Promise((u,c)=>n=e[i]=[u,c]);o.push(n[2]=a);var s=r.p+r.u(i),l=new Error;r.l(s,u=>{if(r.o(e,i)&&(0!==(n=e[i])&&(e[i]=void 0),n)){var c=u&&("load"===u.type?"missing":u.type),p=u&&u.target&&u.target.src;l.message="Loading chunk "+i+" failed.\n("+c+": "+p+")",l.name="ChunkLoadError",l.type=c,l.request=p,n[1](l)}},"chunk-"+i,i)}else e[i]=0},r.O.j=i=>0===e[i];var f=(i,o)=>{var l,d,[n,a,s]=o,u=0;if(n.some(p=>0!==e[p])){for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(s)var c=s(r)}for(i&&i(o);u<n.length;u++)r.o(e,d=n[u])&&e[d]&&e[d][0](),e[d]=0;return r.O(c)},t=self.webpackChunktasks=self.webpackChunktasks||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();