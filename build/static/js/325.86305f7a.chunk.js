(self.webpackChunkbutrade=self.webpackChunkbutrade||[]).push([[325],{84268:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(65043);var r=n(50289),a=n(33307),i=n(70579);const o=e=>{let{label:t,name:n,required:o,required_text:l,warning:s}=e;return(0,i.jsx)(r.A.Item,{label:s?(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:t}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:s})]}):(0,i.jsx)("div",{children:t}),name:n,rules:[{required:o,message:l}],children:(0,i.jsx)(a.A,{})})}},17100:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(65043);var r=n(50289),a=n(42471),i=n(70579);const o=e=>{let{label:t,name:n,required:o,required_text:l}=e;return(0,i.jsx)(r.A.Item,{label:t,name:n,rules:[{required:o,message:l}],children:(0,i.jsx)(a.A,{rows:4})})}},54325:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>De});var r=n(65043),a=n(58168),i=n(64467),o=n(82284),l=n(5544),s=n(63390),c=n(89379);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};var d=n(22172),f=function(e,t){return r.createElement(d.A,(0,c.A)((0,c.A)({},e),{},{ref:t,icon:u}))};const p=r.forwardRef(f);var m=n(67407),v=n(98139),g=n.n(v),y=n(75270),h=n.n(y),b=n(68802),x=n(62149),A=n(52664),w=n(28678),E=n(18574),j=n(13758),S=n(35296),_=n(38097),C=n(25001),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},k={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"};const z=r.forwardRef((function(e,t){var n=e.style,i=e.noStyle,o=e.disabled,l=O(e,["style","noStyle","disabled"]),s={};return i||(s=(0,a.A)({},k)),o&&(s.pointerEvents="none"),s=(0,a.A)((0,a.A)({},s),n),r.createElement("div",(0,a.A)({role:"button",tabIndex:0,ref:t},l,{onKeyDown:function(e){e.keyCode===C.A.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===C.A.ENTER&&r&&r()},style:s}))}));var R=n(54734),D=n(35696);const I={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};var P=function(e,t){return r.createElement(d.A,(0,c.A)((0,c.A)({},e),{},{ref:t,icon:I}))};const F=r.forwardRef(P);var M=n(42471),L=n(12701);const q=function(e){var t=e.prefixCls,n=e["aria-label"],a=e.className,o=e.style,s=e.direction,c=e.maxLength,u=e.autoSize,d=void 0===u||u,f=e.value,p=e.onSave,m=e.onCancel,v=e.onEnd,y=e.component,h=e.enterIcon,b=void 0===h?r.createElement(F,null):h,x=r.useRef(null),A=r.useRef(!1),w=r.useRef(),E=r.useState(f),j=(0,l.A)(E,2),S=j[0],_=j[1];r.useEffect((function(){_(f)}),[f]),r.useEffect((function(){if(x.current&&x.current.resizableTextArea){var e=x.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var O=function(){p(S.trim())},k=y?"".concat(t,"-").concat(y):"",z=g()(t,"".concat(t,"-edit-content"),(0,i.A)({},"".concat(t,"-rtl"),"rtl"===s),a,k);return r.createElement("div",{className:z,style:o},r.createElement(M.A,{ref:x,maxLength:c,value:S,onChange:function(e){var t=e.target;_(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;A.current||(w.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,a=e.metaKey,i=e.shiftKey;w.current!==t||A.current||n||r||a||i||(t===C.A.ENTER?(O(),null===v||void 0===v||v()):t===C.A.ESC&&m())},onCompositionStart:function(){A.current=!0},onCompositionEnd:function(){A.current=!1},onBlur:function(){O()},"aria-label":n,rows:1,autoSize:d}),null!==b?(0,L.Ob)(b,{className:"".concat(t,"-edit-content-confirm")}):null)};function T(e,t){return r.useMemo((function(){var n=!!e;return[n,(0,a.A)((0,a.A)({},t),n&&"object"===(0,o.A)(e)?e:null)]}),[e])}const N=function(e,t){var n=r.useRef(!1);r.useEffect((function(){n.current?e():n.current=!0}),t)};var H=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const U=r.forwardRef((function(e,t){var n=e.prefixCls,o=e.component,l=void 0===o?"article":o,s=e.className,c=e.setContentRef,u=e.children,d=e.direction,f=H(e,["prefixCls","component","className","setContentRef","children","direction"]),p=r.useContext(S.QO),m=p.getPrefixCls,v=p.direction,y=null!==d&&void 0!==d?d:v,h=t;c&&(h=(0,j.K4)(t,c));var b=m("typography",n),x=g()(b,(0,i.A)({},"".concat(b,"-rtl"),"rtl"===y),s);return r.createElement(l,(0,a.A)({className:x,ref:h},f),u)}));function V(e){var t=(0,o.A)(e);return"string"===t||"number"===t}function K(e,t){for(var n=0,r=[],a=0;a<e.length;a+=1){if(n===t)return r;var i=e[a],o=n+(V(i)?String(i).length:1);if(o>t){var l=t-n;return r.push(String(i).slice(0,l)),r}r.push(i),n=o}return e}const B=function(e){var t=e.enabledMeasure,n=e.children,i=e.text,o=e.width,s=e.fontSize,c=e.rows,u=e.onEllipsis,d=r.useState([0,0,0]),f=(0,l.A)(d,2),p=(0,l.A)(f[0],3),m=p[0],v=p[1],g=p[2],y=f[1],h=r.useState(0),b=(0,l.A)(h,2),w=b[0],E=b[1],j=r.useState(0),S=(0,l.A)(j,2),_=S[0],C=S[1],O=r.useRef(null),k=r.useRef(null),z=r.useMemo((function(){return(0,x.A)(i)}),[i]),R=r.useMemo((function(){return function(e){var t=0;return e.forEach((function(e){V(e)?t+=String(e).length:t+=1})),t}(z)}),[z]),D=r.useMemo((function(){return t&&3===w?n(K(z,v),v<R):n(z,!1)}),[t,w,n,z,v,R]);(0,A.A)((function(){t&&o&&s&&R&&(E(1),y([0,Math.ceil(R/2),R]))}),[t,o,s,i,R,c]),(0,A.A)((function(){var e;1===w&&C((null===(e=O.current)||void 0===e?void 0:e.offsetHeight)||0)}),[w]),(0,A.A)((function(){var e,t;if(_)if(1===w)((null===(e=k.current)||void 0===e?void 0:e.offsetHeight)||0)<=c*_?(E(4),u(!1)):E(2);else if(2===w)if(m!==g){var n=(null===(t=k.current)||void 0===t?void 0:t.offsetHeight)||0,r=m,a=g;m===g-1?a=m:n<=c*_?r=v:a=v;var i=Math.ceil((r+a)/2);y([r,i,a])}else E(3),u(!0)}),[w,m,g,c,_]);var I={width:o,whiteSpace:"normal",margin:0,padding:0},P=function(e,t,n){return r.createElement("span",{"aria-hidden":!0,ref:t,style:(0,a.A)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:2*Math.floor(s/2)},n)},e)};return r.createElement(r.Fragment,null,D,t&&3!==w&&4!==w&&r.createElement(r.Fragment,null,P("lg",O,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===w?P(n(z,!1),k,I):function(e,t){var r=K(z,e);return P(n(r,!0),t,I)}(v,k)))};const W=function(e){var t=e.enabledEllipsis,n=e.isEllipsis,i=e.children,o=e.tooltipProps;return(null===o||void 0===o?void 0:o.title)&&t?r.createElement(D.A,(0,a.A)({open:!!n&&void 0},o),i):i};var Q=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function X(e,t,n){return!0===e||void 0===e?t:e||n&&t}function J(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}var Z=r.forwardRef((function(e,t){var n,c,u,d=e.prefixCls,f=e.className,v=e.style,y=e.type,C=e.disabled,O=e.children,k=e.ellipsis,I=e.editable,P=e.copyable,F=e.component,M=e.title,L=Q(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),H=r.useContext(S.QO),V=H.getPrefixCls,K=H.direction,Z=(0,_.n)("Text")[0],G=r.useRef(null),Y=r.useRef(null),$=V("typography",d),ee=(0,E.A)(L,["mark","code","delete","underline","strong","keyboard","italic"]),te=T(I),ne=(0,l.A)(te,2),re=ne[0],ae=ne[1],ie=(0,w.A)(!1,{value:ae.editing}),oe=(0,l.A)(ie,2),le=oe[0],se=oe[1],ce=ae.triggerType,ue=void 0===ce?["icon"]:ce,de=function(e){var t;e&&(null===(t=ae.onStart)||void 0===t||t.call(ae)),se(e)};N((function(){var e;le||null===(e=Y.current)||void 0===e||e.focus()}),[le]);var fe=function(e){null===e||void 0===e||e.preventDefault(),de(!0)},pe=T(P),me=(0,l.A)(pe,2),ve=me[0],ge=me[1],ye=r.useState(!1),he=(0,l.A)(ye,2),be=he[0],xe=he[1],Ae=r.useRef(),we={};ge.format&&(we.format=ge.format);var Ee=function(){window.clearTimeout(Ae.current)},je=function(e){var t;null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),h()(ge.text||String(O)||"",we),xe(!0),Ee(),Ae.current=window.setTimeout((function(){xe(!1)}),3e3),null===(t=ge.onCopy)||void 0===t||t.call(ge,e)};r.useEffect((function(){return Ee}),[]);var Se=r.useState(!1),_e=(0,l.A)(Se,2),Ce=_e[0],Oe=_e[1],ke=r.useState(!1),ze=(0,l.A)(ke,2),Re=ze[0],De=ze[1],Ie=r.useState(!1),Pe=(0,l.A)(Ie,2),Fe=Pe[0],Me=Pe[1],Le=r.useState(!1),qe=(0,l.A)(Le,2),Te=qe[0],Ne=qe[1],He=r.useState(!1),Ue=(0,l.A)(He,2),Ve=Ue[0],Ke=Ue[1],Be=r.useState(!0),We=(0,l.A)(Be,2),Qe=We[0],Xe=We[1],Je=T(k,{expandable:!1}),Ze=(0,l.A)(Je,2),Ge=Ze[0],Ye=Ze[1],$e=Ge&&!Fe,et=Ye.rows,tt=void 0===et?1:et,nt=r.useMemo((function(){return!$e||void 0!==Ye.suffix||Ye.onEllipsis||Ye.expandable||re||ve}),[$e,Ye,re,ve]);(0,A.A)((function(){Ge&&!nt&&(Oe((0,R.F)("webkitLineClamp")),De((0,R.F)("textOverflow")))}),[nt,Ge]);var rt=r.useMemo((function(){return!nt&&(1===tt?Re:Ce)}),[nt,Re,Ce]),at=$e&&(rt?Ve:Te),it=$e&&1===tt&&rt,ot=$e&&tt>1&&rt,lt=function(e){var t;Me(!0),null===(t=Ye.onExpand)||void 0===t||t.call(Ye,e)},st=r.useState(0),ct=(0,l.A)(st,2),ut=ct[0],dt=ct[1],ft=r.useState(0),pt=(0,l.A)(ft,2),mt=pt[0],vt=pt[1],gt=function(e){var t;Ne(e),Te!==e&&(null===(t=Ye.onEllipsis)||void 0===t||t.call(Ye,e))};r.useEffect((function(){var e=G.current;if(Ge&&rt&&e){var t=ot?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;Ve!==t&&Ke(t)}}),[Ge,rt,O,ot,Qe]),r.useEffect((function(){var e=G.current;if("undefined"!==typeof IntersectionObserver&&e&&rt&&$e){var t=new IntersectionObserver((function(){Xe(!!e.offsetParent)}));return t.observe(e),function(){t.disconnect()}}}),[rt,$e]);var yt={};yt=!0===Ye.tooltip?{title:null!==(n=ae.text)&&void 0!==n?n:O}:r.isValidElement(Ye.tooltip)?{title:Ye.tooltip}:"object"===(0,o.A)(Ye.tooltip)?(0,a.A)({title:null!==(c=ae.text)&&void 0!==c?c:O},Ye.tooltip):{title:Ye.tooltip};var ht=r.useMemo((function(){var e=function(e){return["string","number"].includes((0,o.A)(e))};if(Ge&&!rt)return e(ae.text)?ae.text:e(O)?O:e(M)?M:e(yt.title)?yt.title:void 0}),[Ge,rt,M,yt.title,at]);if(le)return r.createElement(q,{value:null!==(u=ae.text)&&void 0!==u?u:"string"===typeof O?O:"",onSave:function(e){var t;null===(t=ae.onChange)||void 0===t||t.call(ae,e),de(!1)},onCancel:function(){var e;null===(e=ae.onCancel)||void 0===e||e.call(ae),de(!1)},onEnd:ae.onEnd,prefixCls:$,className:f,style:v,direction:K,component:F,maxLength:ae.maxLength,autoSize:ae.autoSize,enterIcon:ae.enterIcon});var bt=function(){var e,t=Ye.expandable,n=Ye.symbol;return t?(e=n||Z.expand,r.createElement("a",{key:"expand",className:"".concat($,"-expand"),onClick:lt,"aria-label":Z.expand},e)):null},xt=function(){if(re){var e=ae.icon,t=ae.tooltip,n=(0,x.A)(t)[0]||Z.edit,a="string"===typeof n?n:"";return ue.includes("icon")?r.createElement(D.A,{key:"edit",title:!1===t?"":n},r.createElement(z,{ref:Y,className:"".concat($,"-edit"),onClick:fe,"aria-label":a},e||r.createElement(m.A,{role:"button"}))):null}},At=function(){if(ve){var e=ge.tooltips,t=ge.icon,n=J(e),a=J(t),i=be?X(n[1],Z.copied):X(n[0],Z.copy),o=be?Z.copied:Z.copy,l="string"===typeof i?i:o;return r.createElement(D.A,{key:"copy",title:i},r.createElement(z,{className:g()("".concat($,"-copy"),be&&"".concat($,"-copy-success")),onClick:je,"aria-label":l},be?X(a[1],r.createElement(s.A,null),!0):X(a[0],r.createElement(p,null),!0)))}};return r.createElement(b.A,{onResize:function(e,t){var n,r=e.offsetWidth;dt(r),vt(parseInt(null===(n=window.getComputedStyle)||void 0===n?void 0:n.call(window,t).fontSize,10)||0)},disabled:!$e||rt},(function(n){return r.createElement(W,{tooltipProps:yt,enabledEllipsis:$e,isEllipsis:at},r.createElement(U,(0,a.A)({className:g()((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)({},"".concat($,"-").concat(y),y),"".concat($,"-disabled"),C),"".concat($,"-ellipsis"),Ge),"".concat($,"-single-line"),$e&&1===tt),"".concat($,"-ellipsis-single-line"),it),"".concat($,"-ellipsis-multiple-line"),ot),f),prefixCls:d,style:(0,a.A)((0,a.A)({},v),{WebkitLineClamp:ot?tt:void 0}),component:F,ref:(0,j.K4)(n,G,t),direction:K,onClick:ue.includes("text")?fe:void 0,"aria-label":null===ht||void 0===ht?void 0:ht.toString(),title:M},ee),r.createElement(B,{enabledMeasure:$e&&!rt,text:O,rows:tt,width:ut,fontSize:mt,onEllipsis:gt},(function(t,n){var a=t;t.length&&n&&ht&&(a=r.createElement("span",{key:"show-content","aria-hidden":!0},a));var i=function(e,t){var n=e.mark,a=e.code,i=e.underline,o=e.delete,l=e.strong,s=e.keyboard,c=e.italic,u=t;function d(e,t){e&&(u=r.createElement(t,{},u))}return d(l,"strong"),d(i,"u"),d(o,"del"),d(a,"code"),d(n,"mark"),d(s,"kbd"),d(c,"i"),u}(e,r.createElement(r.Fragment,null,a,function(e){return[e&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),Ye.suffix,(t=e,[t&&bt(),xt(),At()])];var t}(n)));return i}))))}))}));const G=Z;var Y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const $=r.forwardRef((function(e,t){var n=e.ellipsis,i=e.rel,o=Y(e,["ellipsis","rel"]),l=(0,a.A)((0,a.A)({},o),{rel:void 0===i&&"_blank"===o.target?"noopener noreferrer":i});return delete l.navigate,r.createElement(G,(0,a.A)({},l,{ref:t,ellipsis:!!n,component:"a"}))}));const ee=r.forwardRef((function(e,t){return r.createElement(G,(0,a.A)({ref:t},e,{component:"div"}))}));var te=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ne=function(e,t){var n=e.ellipsis,i=te(e,["ellipsis"]),l=r.useMemo((function(){return n&&"object"===(0,o.A)(n)?(0,E.A)(n,["expandable","rows"]):n}),[n]);return r.createElement(G,(0,a.A)({ref:t},i,{ellipsis:l,component:"span"}))};const re=r.forwardRef(ne);var ae=n(29592),ie=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},oe=(0,ae.p)(1,2,3,4,5);const le=r.forwardRef((function(e,t){var n,i=e.level,o=void 0===i?1:i,l=ie(e,["level"]);return n=oe.includes(o)?"h".concat(o):"h1",r.createElement(G,(0,a.A)({ref:t},l,{component:n}))}));var se=U;se.Text=re,se.Link=$,se.Title=le,se.Paragraph=ee;const ce=se;var ue=n(50289),de=n(48193),fe=n(47419),pe=n(11645),me=n(94406),ve=n(89421),ge=n(22895),ye=n(82907),he=n(59888),be=n(9772),xe=n(73216),Ae=n(14556),we=n(68959),Ee=n(36213),je=n(84268),Se=n(17100);const _e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};var Ce=function(e,t){return r.createElement(d.A,(0,c.A)((0,c.A)({},e),{},{ref:t,icon:_e}))};const Oe=r.forwardRef(Ce);var ke=n(70579);const{Title:ze}=ce,Re={title_uz:"",title_ru:"",text_ru:"",text_uz:"",is_available:!0,category:null,characteristic:[{key_uz:"",key_ru:"",value_uz:"",value_ru:""}],image_ids:[],index_image:[]},De=()=>{const[e]=ue.A.useForm(),t=(0,xe.Zp)(),{editId:n}=(0,Ae.d4)((e=>e.editData)),a=(0,Ae.wA)(),[i,o]=(0,r.useState)([]),[l,s]=(0,r.useState)([]),[c,u]=(0,r.useState)(""),{data:d,refetch:f}=(0,ye.useQuery)("get-category",(()=>he.A.getData("/categories/"))),{mutate:p,data:m,isLoading:v,isSuccess:g}=(0,ye.useMutation)((e=>{let{url:t,formData:n}=e;return he.A.postData(t,n)}),{onSuccess:()=>{de.Ay.success("Success")},onError:e=>{for(let t in e.response.data)de.Ay.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{mutate:y,data:h,isLoading:b,isSuccess:x}=(0,ye.useMutation)((e=>{let{url:t,data:n}=e;return he.A.postData(t,n)}),{onSuccess:()=>{de.Ay.success("Success")},onError:e=>{for(let t in e.response.data)de.Ay.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:A,data:w,refetch:E,isSuccess:j}=(0,ye.useQuery)(["edit-product",n],(()=>he.A.getDataByID("/products",n)),{enabled:!1}),{mutate:S,isLoading:_,data:C,isSuccess:O}=(0,ye.useMutation)((e=>{let{url:t,data:n,id:r}=e;return he.A.editData(t,n,r)}),{onSuccess:()=>{de.Ay.success("Success")},onError:e=>{for(let t in e.response.data)de.Ay.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{mutate:k}=(0,ye.useMutation)((e=>{let{url:t,ids:n}=e;return he.A.deleteImages(t,n)}),{onSuccess:()=>de.Ay.success("Success"),onError:e=>de.Ay.error(e.message)});(0,r.useEffect)((()=>{O&&a({type:Ee.aT,payload:""}),(x||O)&&t("/product")}),[h,C]),(0,r.useEffect)((()=>{""!==n&&E()}),[n]),(0,r.useEffect)((()=>{f(),""===n&&e.setFieldsValue(Re)}),[]),(0,r.useEffect)((()=>{const t=[];let n=[];var r,a,i;void 0!==w&&(w.images.map((e=>{const n={uid:e.id,name:e.id,status:"done",url:e.image};t.push(n)})),n=[{uid:null===w||void 0===w||null===(r=w.index_images)||void 0===r?void 0:r.id,name:null===w||void 0===w||null===(a=w.index_images)||void 0===a?void 0:a.id,status:"done",url:null===w||void 0===w||null===(i=w.index_images)||void 0===i?void 0:i.image}]);if(j){var l;const r={title_uz:null===w||void 0===w?void 0:w.title_uz,title_ru:null===w||void 0===w?void 0:w.title_ru,text_ru:null===w||void 0===w?void 0:w.text_ru,text_uz:null===w||void 0===w?void 0:w.text_uz,is_available:null===w||void 0===w?void 0:w.is_available,category:null===w||void 0===w||null===(l=w.categories)||void 0===l?void 0:l.id,characteristic:null===w||void 0===w?void 0:w.characteristic,image_ids:t,index_image:n};o(t),s(n),e.setFieldsValue(r)}}),[w]);(0,r.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const n=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",n),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",n)}}),[]),(0,r.useEffect)((()=>{if(g&&"images"===c){var t,n,r;const a=[...i],l={uid:null===m||void 0===m||null===(t=m.images[0])||void 0===t?void 0:t.id,name:null===m||void 0===m||null===(n=m.images[0])||void 0===n?void 0:n.id,status:"done",url:null===m||void 0===m||null===(r=m.images[0])||void 0===r?void 0:r.url};a.push(l),e.setFieldsValue({image_ids:[l]}),o(a),u("")}if(g&&"indexImage"===c){var a,d,f;const t=[...l],n={uid:null===m||void 0===m||null===(a=m.images[0])||void 0===a?void 0:a.id,name:null===m||void 0===m||null===(d=m.images[0])||void 0===d?void 0:d.id,status:"done",url:null===m||void 0===m||null===(f=m.images[0])||void 0===f?void 0:f.url};t.push(n),e.setFieldsValue({index_image:[n]}),s(t),u("")}}),[m]);const z=async e=>{let t=e.url;t||(t=await new Promise((t=>{const n=new FileReader;n.readAsDataURL(e.originFileObj),n.onload=()=>t(n.result)})));const n=new Image;n.src=t;const r=window.open(t);null===r||void 0===r||r.document.write(n.outerHTML)},R=(0,r.useMemo)((()=>null===d||void 0===d?void 0:d.map((e=>({value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.title_ru})))),[d]),D=(0,r.useMemo)((()=>[{value:!0,label:"\u0412 \u043f\u0440\u043e\u0434\u0430\u0436\u0435"},{value:!1,label:"\u041d\u0435\u0442 \u0432 \u043f\u0440\u043e\u0434\u0430\u0436\u0435"}]),[]);return(0,ke.jsx)("div",{children:b||A||_||v?(0,ke.jsx)(be.HE,{}):(0,ke.jsxs)(ue.A,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:Re,onFinish:e=>{var t;const r=[],a=[];i.map((e=>{r.push(e.uid)})),l.map((e=>{a.push(e.uid)}));const o={image_ids:r,index_image:null===(t=l[0])||void 0===t?void 0:t.uid,title_uz:e.title_uz,title_ru:e.title_ru,text_ru:e.text_ru,text_uz:e.text_uz,is_available:e.is_available,category:e.category,characteristic:e.characteristic};j?S({url:"/products",data:o,id:n}):y({url:"/products/",data:o})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,ke.jsxs)(fe.A,{gutter:20,children:[(0,ke.jsx)(pe.A,{span:24,children:(0,ke.jsx)(je.A,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"title_ru"})}),(0,ke.jsx)(pe.A,{span:24,children:(0,ke.jsx)(je.A,{required:!0,required_text:"Sarlavha kiritish kerak",label:"Sarlavha Uz",name:"title_uz"})})]}),(0,ke.jsxs)(fe.A,{gutter:20,children:[(0,ke.jsx)(pe.A,{span:24,children:(0,ke.jsx)(Se.A,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 Ru",name:"text_ru"})}),(0,ke.jsx)(pe.A,{span:24,children:(0,ke.jsx)(Se.A,{required:!0,required_text:"Tavsif kiritish kerak",label:"Tavsif Uz",name:"text_uz"})})]}),(0,ke.jsxs)(fe.A,{gutter:20,children:[(0,ke.jsx)(pe.A,{span:12,children:(0,ke.jsx)(ue.A.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",name:"category",rules:[{required:!0,message:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b"}],wrapperCol:{span:24},children:(0,ke.jsx)(me.A,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",optionLabelProp:"label",options:R})})}),(0,ke.jsx)(pe.A,{span:12,children:(0,ke.jsx)(ue.A.Item,{label:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043b\u0438 \u043e\u043d\u043e \u0432 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f?",name:"is_available",rules:[{required:!0,message:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c"}],wrapperCol:{span:24},children:(0,ke.jsx)(me.A,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u043e\u0434\u0430\u0436\u0438",optionLabelProp:"label",options:D})})})]}),(0,ke.jsx)(ze,{level:3,children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),(0,ke.jsx)(ue.A.List,{name:"characteristic",children:(e,t)=>{let{add:n,remove:r}=t;return(0,ke.jsxs)(ke.Fragment,{children:[e.map(((e,t)=>(0,ke.jsxs)("div",{style:{marginBottom:20},children:[(0,ke.jsxs)(fe.A,{gutter:20,children:[(0,ke.jsx)(pe.A,{span:12,children:(0,ke.jsx)(je.A,{required:!0,required_text:"\u0414\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0444\u0443\u043d\u043a\u0446\u0438\u0438",label:"Xususiyat nomi (Uzunlik*kenglik*balandlik,mm) Uz ".concat(t+1),name:[e.name,"key_uz"]})}),(0,ke.jsx)(pe.A,{span:12,children:(0,ke.jsx)(je.A,{required:!0,required_text:"Xususiyatlari kiritish kerak",label:"Xususiyat qiymati (4630\xd71910\xd71655) Uz ".concat(t+1),name:[e.name,"value_uz"]})}),(0,ke.jsx)(pe.A,{span:12,children:(0,ke.jsx)(je.A,{required:!0,required_text:"Features must be included",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430 (\u0414\u043b\u0438\u043d\u0430*\u0448\u0438\u0440\u0438\u043d\u0430*\u0432\u044b\u0441\u043e\u0442\u0430, \u043c\u043c) Ru ".concat(t+1),name:[e.name,"key_ru"]})}),(0,ke.jsx)(pe.A,{span:12,children:(0,ke.jsx)(je.A,{required:!0,required_text:"Features must be included",label:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (4630\xd71910\xd71655) Ru ".concat(t+1),name:[e.name,"value_ru"]})})]}),(0,ke.jsx)(Oe,{onClick:()=>r(e.name)})]},e.fieldKey))),(0,ke.jsx)(ue.A.Item,{children:(0,ke.jsx)(ve.A,{type:"primary",onClick:()=>n(),block:!0,style:{backgroundColor:"#28a745"},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0434\u043b\u044f \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430"})})]})}}),(0,ke.jsxs)(fe.A,{gutter:20,children:[(0,ke.jsx)(pe.A,{span:12,children:(0,ke.jsx)(ue.A.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"image_ids",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,ke.jsx)(we.A,{children:(0,ke.jsx)(ge.A,{maxCount:4,fileList:i,listType:"picture-card",onChange:e=>{let{fileList:t}=e;if(t.length<i.length)return;const n=new FormData;0!==t.length&&(n.append("uploaded_images",t[t.length-1].originFileObj),p({url:"/about/images/",formData:n}),u("images"))},onPreview:z,onRemove:t=>{const n=[];i.map((e=>{(null===e||void 0===e?void 0:e.uid)!==(null===t||void 0===t?void 0:t.uid)&&n.push(e)})),!n.length>0&&e.setFieldsValue({image_ids:[]});const r={image_ids:[null===t||void 0===t?void 0:t.uid]};k({url:"/about/images/delete",ids:r}),o(n)},beforeUpload:()=>!1,children:i.length>3?"":"Upload"})})})}),(0,ke.jsx)(pe.A,{span:12,children:(0,ke.jsx)(ue.A.Item,{label:"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"index_image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,ke.jsx)(we.A,{children:(0,ke.jsx)(ge.A,{maxCount:1,fileList:l,listType:"picture-card",onChange:e=>{let{fileList:t}=e;if(t.length<l.length)return;const n=new FormData;0!==t.length&&(n.append("uploaded_images",t[t.length-1].originFileObj),p({url:"/about/images/",formData:n}),u("indexImage"))},onPreview:z,onRemove:t=>{const n={image_ids:[null===t||void 0===t?void 0:t.uid]};k({url:"/about/images/delete",ids:n}),s([]),e.setFieldsValue({index_image:[]})},beforeUpload:()=>!1,children:l.length>0?"":"Upload"})})})})]}),(0,ke.jsx)(ve.A,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:j?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}},67407:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(89379),a=n(65043);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var o=n(22172),l=function(e,t){return a.createElement(o.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:i}))};const s=a.forwardRef(l)},75270:(e,t,n)=>{"use strict";var r=n(40139),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,o,l,s,c,u=!1;t||(t={}),n=t.debug||!1;try{if(o=r(),l=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),c&&document.body.removeChild(c),o()}return u}},54734:(e,t,n)=>{"use strict";n.d(t,{F:()=>o});var r=n(52931),a=function(e){if((0,r.A)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},i=function(e,t){if(!a(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r};function o(e,t){return Array.isArray(e)||void 0===t?a(e):i(e,t)}},40139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=325.86305f7a.chunk.js.map