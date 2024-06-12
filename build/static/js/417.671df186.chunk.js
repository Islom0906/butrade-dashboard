"use strict";(self.webpackChunkbutrade=self.webpackChunkbutrade||[]).push([[417],{84268:(e,t,a)=>{a.d(t,{A:()=>l});a(65043);var i=a(50289),r=a(33307),s=a(70579);const l=e=>{let{label:t,name:a,required:l,required_text:n,warning:u}=e;return(0,s.jsx)(i.A.Item,{label:u?(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:u})]}):(0,s.jsx)("div",{children:t}),name:a,rules:[{required:l,message:n}],children:(0,s.jsx)(r.A,{})})}},17100:(e,t,a)=>{a.d(t,{A:()=>l});a(65043);var i=a(50289),r=a(42471),s=a(70579);const l=e=>{let{label:t,name:a,required:l,required_text:n}=e;return(0,s.jsx)(i.A.Item,{label:t,name:a,rules:[{required:l,message:n}],children:(0,s.jsx)(r.A,{rows:4})})}},47417:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var i=a(65043),r=a(50289),s=a(48193),l=a(47419),n=a(11645),u=a(22895),d=a(89421),o=a(82907),c=a(59888),x=a(9772),m=a(73216),p=a(14556),v=a(68959),h=a(36213),g=a(84268),A=a(17100),b=a(70579);const j={image:[],title_uz:"",title_ru:"",text_ru:"",text_uz:""},_=()=>{const[e]=r.A.useForm(),t=(0,m.Zp)(),{editId:a}=(0,p.d4)((e=>e.editData)),_=(0,p.wA)(),[f,w]=(0,i.useState)([]),{mutate:y,data:F,isLoading:S,isSuccess:q}=(0,o.useMutation)((e=>{let{url:t,data:a}=e;return c.A.postData(t,a)}),{onSuccess:()=>{s.Ay.success("Success")},onError:e=>{for(let t in e.response.data)s.Ay.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:z,data:I,refetch:k,isSuccess:E}=(0,o.useQuery)(["edit-about-index",a],(()=>c.A.getDataByID("/about/index-about-section",a)),{enabled:!1}),{mutate:L,isLoading:V,data:D,isSuccess:C}=(0,o.useMutation)((e=>{let{url:t,data:a,id:i}=e;return c.A.editData(t,a,i)}),{onSuccess:()=>{s.Ay.success("Success")},onError:e=>{for(let t in e.response.data)s.Ay.error("".concat(t,": ").concat(e.response.data[t][0]))}});(0,i.useEffect)((()=>{C&&_({type:h.aT,payload:""}),(q||C)&&t("/about-index")}),[F,D]),(0,i.useEffect)((()=>{""!==a&&k()}),[a]),(0,i.useEffect)((()=>{""===a&&e.setFieldsValue(j)}),[]),(0,i.useEffect)((()=>{const t=[{uid:null===I||void 0===I?void 0:I.id,name:null===I||void 0===I?void 0:I.id,status:"done",url:null===I||void 0===I?void 0:I.image}];if(E){const a={title_uz:null===I||void 0===I?void 0:I.title_uz,title_ru:null===I||void 0===I?void 0:I.title_ru,text_ru:null===I||void 0===I?void 0:I.text_ru,text_uz:null===I||void 0===I?void 0:I.text_uz,image:t};w(t),e.setFieldsValue(a)}}),[I]);(0,i.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const a=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",a),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",a)}}),[]);return(0,b.jsx)("div",{children:S||z||V?(0,b.jsx)(x.HE,{}):(0,b.jsxs)(r.A,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:j,onFinish:e=>{var t;const i=new FormData;var r;(i.append("title_ru",e.title_ru),i.append("title_uz",e.title_uz),i.append("text_ru",e.text_ru),i.append("text_uz",e.text_uz),null!==(t=f[0])&&void 0!==t&&t.originFileObj)&&i.append("image",null===(r=f[0])||void 0===r?void 0:r.originFileObj);E?L({url:"/about/index-about-section",data:i,id:a}):y({url:"/about/index-about-section/",data:i})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,b.jsxs)(l.A,{gutter:20,children:[(0,b.jsx)(n.A,{span:24,children:(0,b.jsx)(g.A,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"title_ru"})}),(0,b.jsx)(n.A,{span:24,children:(0,b.jsx)(g.A,{required:!0,required_text:"Sarlavha kiritish kerak",label:"Sarlavha Uz",name:"title_uz"})})]}),(0,b.jsxs)(l.A,{gutter:20,children:[(0,b.jsx)(n.A,{span:24,children:(0,b.jsx)(A.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 Ru",name:"text_ru"})}),(0,b.jsx)(n.A,{span:24,children:(0,b.jsx)(A.A,{required:!0,required_text:"Tavsif kiritish kerak",label:"Tavsif Uz",name:"text_uz"})})]}),(0,b.jsx)(l.A,{gutter:20,children:(0,b.jsx)(n.A,{span:12,children:(0,b.jsx)(r.A.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,b.jsx)(v.A,{children:(0,b.jsx)(u.A,{maxCount:1,fileList:f,listType:"picture-card",onChange:t=>{let{fileList:a}=t;w(a),e.setFieldsValue({image:a})},onPreview:async e=>{let t=e.url;t||(t=await new Promise((t=>{const a=new FileReader;a.readAsDataURL(e.originFileObj),a.onload=()=>t(a.result)})));const a=new Image;a.src=t;const i=window.open(t);null===i||void 0===i||i.document.write(a.outerHTML)},beforeUpload:()=>!1,children:f.length>0?"":"Upload"})})})})}),(0,b.jsx)(d.A,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:E?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}}}]);
//# sourceMappingURL=417.671df186.chunk.js.map