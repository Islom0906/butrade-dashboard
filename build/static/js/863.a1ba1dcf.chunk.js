"use strict";(self.webpackChunkbutrade=self.webpackChunkbutrade||[]).push([[863],{36863:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var s=t(65043),n=t(50289),r=t(48193),i=t(47419),o=t(11645),l=t(22895),d=t(89421),u=t(82907),c=t(59888),m=t(9772),p=t(73216),g=t(14556),f=t(36213),b=t(68959),h=t(70579);const y={image:[]},w=()=>{const[e]=n.A.useForm(),a=(0,p.Zp)(),{editId:t}=(0,g.d4)((e=>e.editData)),w=(0,g.wA)(),[A,F]=(0,s.useState)([]),{mutate:S,data:v,isLoading:j,isSuccess:x}=(0,u.useMutation)((e=>{let{url:a,data:t}=e;return c.A.postData(a,t)}),{onSuccess:()=>{r.Ay.success("Success")},onError:e=>{for(let a in e.response.data)r.Ay.error("".concat(a,": ").concat(e.response.data[a][0]))}}),{isLoading:E,data:I,refetch:L,isSuccess:V}=(0,u.useQuery)(["edit-banner",t],(()=>c.A.getDataByID("/about/banner",t)),{enabled:!1}),{mutate:D,isLoading:C,data:O,isSuccess:T}=(0,u.useMutation)((e=>{let{url:a,data:t,id:s}=e;return c.A.editData(a,t,s)}),{onSuccess:()=>{r.Ay.success("Success")},onError:e=>{for(let a in e.response.data)r.Ay.error("".concat(a,": ").concat(e.response.data[a][0]))}});(0,s.useEffect)((()=>{T&&w({type:f.aT,payload:""}),(x||T)&&a("/banner")}),[v,O]),(0,s.useEffect)((()=>{""!==t&&L()}),[t]),(0,s.useEffect)((()=>{""===t&&e.setFieldsValue(y)}),[]),(0,s.useEffect)((()=>{if(V){const a=[{uid:I.id,name:I.id,status:"done",url:I.image}],t={image:a};F(a),e.setFieldsValue(t)}}),[I]);(0,s.useEffect)((()=>{const a=JSON.parse(localStorage.getItem("myFormValues"));a&&(a.images=[],e.setFieldsValue(a));const t=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",t),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",t)}}),[]);return(0,h.jsx)("div",{children:j||E||C?(0,h.jsx)(m.HE,{}):(0,h.jsxs)(n.A,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:y,onFinish:()=>{var e;const a=new FormData;var s;null!==(e=A[0])&&void 0!==e&&e.originFileObj&&a.append("image",null===(s=A[0])||void 0===s?void 0:s.originFileObj);I?D({url:"/about/banner",data:a,id:t}):S({url:"/about/banner/",data:a})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,h.jsx)(i.A,{gutter:20,children:(0,h.jsx)(o.A,{span:12,children:(0,h.jsx)(n.A.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435."}],children:(0,h.jsx)(b.A,{rotationSlider:!0,children:(0,h.jsx)(l.A,{maxCount:1,fileList:A,listType:"picture-card",onChange:a=>{let{fileList:t}=a;F(t),e.setFieldsValue({image:t})},onPreview:async e=>{let a=e.url;a||(a=await new Promise((a=>{const t=new FileReader;t.readAsDataURL(e.originFileObj),t.onload=()=>a(t.result)})));const t=new Image;t.src=a;const s=window.open(a);null===s||void 0===s||s.document.write(t.outerHTML)},beforeUpload:()=>!1,children:A.length>0?"":"Upload"})})})})}),(0,h.jsx)(d.A,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:V?"Edit":"Add"})]})})}}}]);
//# sourceMappingURL=863.a1ba1dcf.chunk.js.map