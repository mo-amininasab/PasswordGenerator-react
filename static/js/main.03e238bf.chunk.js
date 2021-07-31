(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(4),a=n.n(c),s=(n(9),n(2)),o=n(0);var l=function(){return Object(o.jsxs)("nav",{className:"text-center p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",children:[Object(o.jsx)("h1",{className:"text-2xl font-semibold text-white mb-2",children:"PasswordGenerator"}),Object(o.jsx)("a",{href:"/",className:"text-gray-50",children:"About me"})]})};var i=function(e){return Object(o.jsx)("div",{className:"min-h-screen max-w-lg mx-auto flex flex-col text-center py-12 px-4 sm:px-6 lg:px-8",children:e.children})};var d=function(e){return Object(o.jsxs)("div",{className:"flex flex-row space-x-2",children:[Object(o.jsx)("input",{type:"checkbox",id:e.id,className:"checked:bg-blue-600 checked:border-transparent my-auto",onChange:e.onChange,defaultChecked:e.isChecked}),Object(o.jsx)("label",{htmlFor:e.id,children:e.label})]})},b=function(e){return Object(o.jsxs)("div",{className:"flex flex-row space-x-2",children:[Object(o.jsx)("label",{htmlFor:"length",className:"my-auto",children:e.label}),Object(o.jsx)("input",{type:"Number",id:"length",className:"w-10 bg-gray-200 border border-gray-400 rounded hover:border-gray-700 focus:border-gray-400",min:e.min,max:e.max,value:e.value,onChange:e.onChange})]})};var u=function(e){var t=Object(r.useState)(12),n=Object(s.a)(t,2),c=n[0],a=n[1],l=Object(r.useState)(!0),i=Object(s.a)(l,2),u=i[0],x=i[1],j=Object(r.useState)(!1),h=Object(s.a)(j,2),m=h[0],f=h[1],g=Object(r.useState)(!1),p=Object(s.a)(g,2),O=p[0],v=p[1],w=Object(r.useState)(!1),k=Object(s.a)(w,2),y=k[0],C=k[1];return Object(r.useEffect)((function(){var t="";u&&(t+="abcdefghijklmnopqrstuvwxyz"),m&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),O&&(t+="0123456789"),y&&(t+="!@#$%^&*()");var n="";if(0===t.length)n="null";else for(var r=0;r<c;r++){n+=t[Math.floor(Math.random()*t.length)]}e.onPasswordCreated(n)}),[c,u,m,O,y,e.isRegenerate]),Object(o.jsxs)("div",{className:"flex flex-col w-min mx-auto",children:[Object(o.jsx)(b,{label:"Length:",min:"6",max:"99",value:c,onChange:function(e){a(e.target.value)}}),Object(o.jsx)(d,{id:"lowercase",label:"Lowercase",onChange:function(e){x(e.target.checked)},isChecked:u}),Object(o.jsx)(d,{id:"uppercase",label:"Uppercase",onChange:function(e){f(e.target.checked)},isChecked:m}),Object(o.jsx)(d,{id:"numbers",label:"Numbers",onChange:function(e){v(e.target.checked)},isChecked:O}),Object(o.jsx)(d,{id:"symbols",label:"symbols",onChange:function(e){C(e.target.checked)},isChecked:y})]})};var x=function(e){return Object(o.jsxs)("div",{className:"flex flex-col",children:[Object(o.jsx)("p",{className:"text-center font-mono text-md whitespace-nowrap overflow-auto",id:"password",children:e.createdPassword}),Object(o.jsxs)("div",{className:"flex mx-auto space-x-2 mt-3",children:[Object(o.jsx)("button",{type:"button",className:"w-20 py-2 mx-auto bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline bg-gradient-to-r from-pink-400 to-yellow-500 focus:ring focus:ring-pink-500",onClick:function(){var e=document.getElementById("password").textContent;return navigator.clipboard.writeText(e)},children:"Copy"}),Object(o.jsx)("button",{type:"button",className:"w-9 py-2 mx-auto bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline bg-gradient-to-r from-pink-400 to-yellow-500",onClick:e.onClick,children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})})]})]})};var j=function(e){return Object(o.jsx)("div",{className:"p-4 mt-2 text-center mx-auto my-6 w-52 max-w-xs border-double border-4 border-indigo-400 rounded-lg shadow-xl",children:e.children})};var h=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),d=Object(s.a)(a,2),b=d[0],h=d[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(i,{children:[Object(o.jsx)(j,{children:Object(o.jsx)(x,{createdPassword:n,onClick:function(){h(!0)}})}),Object(o.jsx)(j,{children:Object(o.jsx)(u,{onPasswordCreated:function(e){c(e),h(!1)},isRegenerate:b})}),Object(o.jsx)("p",{className:"text-center text-gray-500 text-xs mb-12",children:"\xa92021. All rights reserved."})]})]})};a.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.03e238bf.chunk.js.map