(self.webpackChunkbutrade=self.webpackChunkbutrade||[]).push([[30],{52035:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(64435),n=r(89421),d=r(96066),i=r(67407),c=r(14556),s=r(36213),o=r(73216),l=r(70579);const u=e=>{let{data:t}=e;const r=(0,c.wA)(),u=(0,o.Zp)(),h=[{title:"Address Ru",dataIndex:"address_ru",id:"address_ru",render:e=>(0,l.jsx)("p",{children:e})},{title:"Phone Number",dataIndex:"phone1",id:"phone1",render:e=>(0,l.jsx)("p",{children:e})},{title:"Email",dataIndex:"email",id:"email",render:e=>(0,l.jsx)("p",{children:e})},{title:"Action",id:"action",render:(e,t)=>(0,l.jsx)(a.A,{size:20,children:(0,l.jsx)(n.A,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),r({type:s.aT,payload:e}),void u("/contact/add");var e},type:"primary",icon:(0,l.jsx)(i.A,{}),children:"Edit"})})}];return(0,l.jsx)("div",{children:t[0]&&(0,l.jsx)(d.A,{columns:h,dataSource:t,rowKey:e=>null===e||void 0===e?void 0:e.id})})};var h=r(48193),p=r(47419),v=r(11645),f=r(5397),A=r(75337),x=r(59888),j=r(82907);const m=()=>{const e=(0,o.Zp)(),t=(0,c.wA)(),{data:r,isLoading:d}=(0,j.useQuery)("contact-get",(()=>x.A.getData("/about/contact")),{onError:e=>{h.Ay.error(e)}});return(0,l.jsx)("div",{className:"site-space-compact-wrapper",children:(0,l.jsxs)(a.A,{direction:"vertical",style:{width:"100%"},children:[(0,l.jsx)(p.A,{gutter:20,children:(0,l.jsx)(v.A,{span:8,offset:16,children:(0,l.jsx)(n.A,{disabled:null===r||void 0===r?void 0:r.address_uz,type:"primary",icon:(0,l.jsx)(A.A,{}),style:{width:"100%"},onClick:()=>{t({type:s.aT,payload:""}),e("/contact/add")},children:"Add"})})}),(0,l.jsx)(f.A,{size:"medium",spinning:d,children:(0,l.jsx)(u,{data:[r]})})]})})}},67407:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(89379),n=r(65043);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var i=r(22172),c=function(e,t){return n.createElement(i.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:d}))};const s=n.forwardRef(c)},75337:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(89379),n=r(65043);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var i=r(22172),c=function(e,t){return n.createElement(i.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:d}))};const s=n.forwardRef(c)},11645:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});const a=r(30227).A},17324:e=>{e.exports=function(e,t,r,a){var n=r?r.call(a,e,t):void 0;if(void 0!==n)return!!n;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var d=Object.keys(e),i=Object.keys(t);if(d.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<d.length;s++){var o=d[s];if(!c(o))return!1;var l=e[o],u=t[o];if(!1===(n=r?r.call(a,l,u,o):void 0)||void 0===n&&l!==u)return!1}return!0}}}]);
//# sourceMappingURL=30.ce2af031.chunk.js.map