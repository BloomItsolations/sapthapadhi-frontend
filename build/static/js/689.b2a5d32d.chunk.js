"use strict";(self.webpackChunksapthapadhi=self.webpackChunksapthapadhi||[]).push([[689],{5002:(e,i,t)=>{t.d(i,{L:()=>s,d:()=>r});t(5043);var n=t(6446),o=t(579);function r(e){const{children:i,value:t,index:r,...s}=e;return(0,o.jsx)(n.A,{role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r),...s,children:t===r&&(0,o.jsx)(n.A,{sx:{padding:2},children:i})})}function s(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}},689:(e,i,t)=>{t.r(i),t.d(i,{default:()=>b});var n=t(9367),o=t(5043),r=t(6446),s=(t(5002),t(5475)),a=t(2110),l=t(1637),d=t(8903),c=t(6591),m=t(6494),p=t(5865),u=t(1906),f=t(6060),v=t(3003),h=t(8529),x=t(64),g=t.n(x),A=t(579);const y=(0,f.A)(a.A)((e=>{let{theme:i}=e;return{maxWidth:260,height:"100%",margin:i.spacing(2),display:"flex",flexDirection:"column",transition:"transform 0.2s","&:hover":{transform:"scale(1.03)"}}})),j=()=>{const e=(0,v.wA)(),{recUsersList:i,loading:t,success:n,error:a}=(0,v.d4)((e=>e.user));(0,o.useEffect)((()=>{n&&(g().fire({icon:"success",title:"Success",text:n}),e((0,h.ET)())),a&&(g().fire({icon:"error",title:"Oops...",text:a}),e((0,h.ET)()))}),[n,a]),(0,o.useEffect)((()=>{e((0,h.OD)())}),[e]);return t||!i?(0,A.jsx)(r.A,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,A.jsx)(l.A,{})}):(0,A.jsx)(d.Ay,{container:!0,spacing:2,children:null===i||void 0===i?void 0:i.map((i=>{var t,n,o,a,l,f,v,x,g,j,w;return(0,A.jsx)(d.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,A.jsxs)(y,{children:[(0,A.jsxs)(s.N_,{to:"/app/request-user-details/".concat(null===i||void 0===i||null===(n=i.fromUser)||void 0===n?void 0:n.id),style:{textDecoration:"none"},children:[(0,A.jsx)(c.A,{sx:{height:200,objectFit:"cover"},image:null!==i&&void 0!==i&&null!==(o=i.fromUser)&&void 0!==o&&o.profilePhoto?"".concat("https://api.sapthapadhimatrimony.in","/").concat(null===i||void 0===i||null===(a=i.fromUser)||void 0===a||null===(l=a.profilePhoto)||void 0===l?void 0:l.path):"https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg",alt:(null===i||void 0===i||null===(f=i.fromUser)||void 0===f?void 0:f.firstName)||"User",title:(null===i||void 0===i||null===(v=i.fromUser)||void 0===v?void 0:v.firstName)||"User"}),(0,A.jsxs)(m.A,{children:[(0,A.jsx)(p.A,{gutterBottom:!0,variant:"h6",component:"div",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:null===i||void 0===i||null===(x=i.fromUser)||void 0===x?void 0:x.firstName}),(0,A.jsxs)(p.A,{variant:"body2",color:"text.secondary",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Age: ",null===i||void 0===i||null===(g=i.fromUser)||void 0===g?void 0:g.age," Yrs, Height: ",null===i||void 0===i||null===(j=i.fromUser)||void 0===j?void 0:j.height]})]})]}),(0,A.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between",padding:"8px"},children:[(0,A.jsx)(s.N_,{to:"/app/request-user-details/".concat(null===i||void 0===i||null===(w=i.fromUser)||void 0===w?void 0:w.id),style:{textDecoration:"none"},children:(0,A.jsx)(u.A,{size:"small",variant:"outlined",children:"View Profile"})}),(0,A.jsx)(u.A,{size:"small",variant:"contained",color:"primary",onClick:()=>{var t,n;return n=null===i||void 0===i||null===(t=i.fromUser)||void 0===t?void 0:t.id,void e((0,h.Ym)(n))},children:"Accept Request"})]})]})},null===i||void 0===i||null===(t=i.fromUser)||void 0===t?void 0:t.id)}))})};var w=t(7600);(0,f.A)(a.A)((e=>{let{theme:i}=e;return{backgroundColor:"#EDEDED",display:"flex",flexDirection:{xs:"column",sm:"row"},padding:i.spacing(2),marginBottom:i.spacing(2)}})),(0,f.A)(r.A)((e=>{let{theme:i}=e;return{display:"none",justifyContent:"space-between",flexWrap:"wrap",width:"80%",marginTop:"10px",fontSize:"16px",fontWeight:"500",[i.breakpoints.up("sm")]:{display:"flex"}}})),(0,f.A)(r.A)((e=>{let{theme:i}=e;return{marginLeft:i.spacing(2),display:"flex",flexDirection:"column",flex:1}})),(0,f.A)(r.A)((e=>{let{theme:i}=e;return{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:{xs:"column",sm:"row"}}})),(0,f.A)(w.A)({display:"flex",alignItems:"center",justifyContent:"center"});function b(){const[e,i]=(0,o.useState)(0);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.mg,{children:(0,A.jsx)("title",{children:" Matches | Sapthapadhi "})}),(0,A.jsx)(r.A,{component:"main",className:"MainContent",sx:{pt:{xs:"calc(12px + var(--Header-height))",md:3},pb:{xs:2,sm:2,md:3},flex:1,display:"flex",flexDirection:"column",minWidth:0,height:"100dvh",overflow:"auto"},children:(0,A.jsx)(j,{})})]})}},7600:(e,i,t)=>{t.d(i,{A:()=>h});var n=t(8587),o=t(8168),r=t(5043),s=t(8387),a=t(8606),l=t(4535),d=t(2876),c=t(7056),m=t(2400);function p(e){return(0,m.Ay)("MuiCardActions",e)}(0,c.A)("MuiCardActions",["root","spacing"]);var u=t(579);const f=["disableSpacing","className"],v=(0,l.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:t}=e;return[i.root,!t.disableSpacing&&i.spacing]}})((e=>{let{ownerState:i}=e;return(0,o.A)({display:"flex",alignItems:"center",padding:8},!i.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),h=r.forwardRef((function(e,i){const t=(0,d.A)({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:l}=t,c=(0,n.A)(t,f),m=(0,o.A)({},t,{disableSpacing:r}),h=(e=>{const{classes:i,disableSpacing:t}=e,n={root:["root",!t&&"spacing"]};return(0,a.A)(n,p,i)})(m);return(0,u.jsx)(v,(0,o.A)({className:(0,s.A)(h.root,l),ownerState:m,ref:i},c))}))},6591:(e,i,t)=>{t.d(i,{A:()=>g});var n=t(8587),o=t(8168),r=t(5043),s=t(8387),a=t(8606),l=t(2876),d=t(4535),c=t(7056),m=t(2400);function p(e){return(0,m.Ay)("MuiCardMedia",e)}(0,c.A)("MuiCardMedia",["root","media","img"]);var u=t(579);const f=["children","className","component","image","src","style"],v=(0,d.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:t}=e,{isMediaComponent:n,isImageComponent:o}=t;return[i.root,n&&i.media,o&&i.img]}})((e=>{let{ownerState:i}=e;return(0,o.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},i.isMediaComponent&&{width:"100%"},i.isImageComponent&&{objectFit:"cover"})})),h=["video","audio","picture","iframe","img"],x=["picture","img"],g=r.forwardRef((function(e,i){const t=(0,l.A)({props:e,name:"MuiCardMedia"}),{children:r,className:d,component:c="div",image:m,src:g,style:A}=t,y=(0,n.A)(t,f),j=-1!==h.indexOf(c),w=!j&&m?(0,o.A)({backgroundImage:'url("'.concat(m,'")')},A):A,b=(0,o.A)({},t,{component:c,isMediaComponent:j,isImageComponent:-1!==x.indexOf(c)}),C=(e=>{const{classes:i,isMediaComponent:t,isImageComponent:n}=e,o={root:["root",t&&"media",n&&"img"]};return(0,a.A)(o,p,i)})(b);return(0,u.jsx)(v,(0,o.A)({className:(0,s.A)(C.root,d),as:c,role:!j&&m?"img":void 0,ref:i,style:w,ownerState:b,src:j?m||g:void 0},y,{children:r}))}))}}]);
//# sourceMappingURL=689.b2a5d32d.chunk.js.map