(this.webpackJsonpemspectrum=this.webpackJsonpemspectrum||[]).push([[0],[,,,function(e,t,a){},,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),m=(a(10),a(1)),i=(a(11),a(3),function(){return r.a.createElement("h1",{align:"center"},"Loading")}),o=function(){return{render:function(){return r.a.createElement("div",{className:"defaultNote"},r.a.createElement("div",{className:"txt-center"},r.a.createElement("img",{src:"img/em.gif",width:"35%"})),r.a.createElement("h4",null,"Goals"),r.a.createElement("ul",null,["Exploring EM Spectrum in simple UI","Mapping the RealTime EM Things, Events to their Spectrum","Trying to collect and group all EM Equipments with details","Making it as Community Contribution to improve more"].map((function(e){return r.a.createElement("li",null,r.a.createElement("pre",null,e))}))),r.a.createElement("h4",null,"Created with"),r.a.createElement("div",{className:"txt-center"},["favicon.ico","github.png"].map((function(e){return r.a.createElement("img",{src:e,className:"createdIcons"})}))))}}},u=function(e){return r.a.createElement("div",null,r.a.createElement("h4",{className:"txt-center"},e.detail.title),r.a.createElement("pre",null,"Frequency Range   :  ",e.detail.range),r.a.createElement("pre",null,"Wavelength Range  :  ",e.detail.wavelength),r.a.createElement("pre",null,"Energy Range      :  ",e.detail.energy))},s=function(e,t,a){!function(e,t){for(var a=document.getElementsByClassName(e),n=0;n<a.length;n++)a[n].style.display=t}(a,"none");for(var n=document.getElementsByClassName(e.currentTarget.className),r=0;r<n.length;r++)n[r].className=n[r].className.replace(" active","");var l=document.getElementById(t);l&&(l.style.display="block"),e.currentTarget.className+=" active"},d=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"txt-center"},r.a.createElement("img",{src:e.data.img,width:"30%"})),r.a.createElement("h4",null,"Notes :"),r.a.createElement("ul",null,e.data.notes.map((function(e){return r.a.createElement("li",null,e)}))),r.a.createElement("div",{className:"inheader"},r.a.createElement("div",{className:"TabBar"},e.data.bands.map((function(e){return r.a.createElement("button",{className:"tabButtons",onClick:function(t){return a=t,n=e.name,void s(a,n,"tabContent");var a,n}},(t=e,r.a.createElement("div",{className:"tabBtn"},r.a.createElement("h4",null,t.name.toUpperCase()),r.a.createElement("code",null,t.range))));var t})))),r.a.createElement("div",null,e.data.bands.map((function(e){return r.a.createElement("div",{className:"tabContent",id:e.name},r.a.createElement(u,{detail:e}))}))))},E=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{id:"headerTitle"},r.a.createElement("a",{href:"/"},"Electro-Magnetic-Spectrum")),r.a.createElement("div",{className:"TabBar"},Object.keys(e.data).map((function(e){return r.a.createElement("button",{className:"mtabButtons",onClick:function(t){s(t,e,"mtabContent")}},e.toUpperCase())})))),r.a.createElement("div",{className:"outContainer"},r.a.createElement("div",null,Object.keys(e.data).map((function(t){return r.a.createElement("div",{className:"mtabContent",id:t},r.a.createElement(d,{data:e.data[t]}))}))),r.a.createElement("div",{className:"mtabContent mtabDefault"},r.a.createElement(o,null))))},f=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),u=o[0],s=o[1];return Object(n.useEffect)((function(){fetch("emspectrum.json").then((function(e){return e.json()})).then((function(e){return l(e)})).then(s(!0)).catch((function(e){console.error(e)}))})),u?r.a.createElement(E,{data:a}):r.a.createElement(i,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.1a2d9120.chunk.js.map