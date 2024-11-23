"use strict";(self.webpackChunksapthapadhi=self.webpackChunksapthapadhi||[]).push([[689],{5002:(e,t,i)=>{i.d(t,{L:()=>s,d:()=>r});i(5043);var n=i(6446),o=i(579);function r(e){const{children:t,value:i,index:r,...s}=e;return(0,o.jsx)(n.A,{role:"tabpanel",hidden:i!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r),...s,children:i===r&&(0,o.jsx)(n.A,{sx:{padding:2},children:t})})}function s(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}},689:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var n=i(9367),o=i(5043),r=i(6446),s=(i(5002),i(5475)),a=i(2110),l=i(1637),c=i(5865),d=i(1906),u=i(8903),m=i(6591),p=i(6494),h=i(6060),f=i(3003),v=i(8529),x=i(3719),g=i(64),A=i.n(g),y=i(579);const j=(0,h.A)(a.A)((e=>{let{theme:t}=e;return{maxWidth:260,height:"100%",margin:t.spacing(2),display:"flex",flexDirection:"column",transition:"transform 0.2s","&:hover":{transform:"scale(1.03)"}}})),w=(0,h.A)(r.A)((e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"65vh",textAlign:"center",backgroundColor:t.palette.background.default,padding:t.spacing(4)}})),b=(0,h.A)(x.A)((e=>{let{theme:t}=e;return{fontSize:80,color:t.palette.text.secondary,marginBottom:t.spacing(2)}})),C=()=>{const e=(0,f.wA)(),{recUsersList:t,loading:i,success:n,error:a}=(0,f.d4)((e=>e.user));console.log("recUsersList",t),(0,o.useEffect)((()=>{n&&(A().fire({icon:"success",title:"Success",text:n}),e((0,v.ET)())),a&&(A().fire({icon:"error",title:"Oops...",text:a}),e((0,v.ET)()))}),[n,a]),(0,o.useEffect)((()=>{e((0,v.OD)())}),[e]);return i||!t?(0,y.jsx)(r.A,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,y.jsx)(l.A,{})}):0===t.length?(0,y.jsxs)(w,{children:[(0,y.jsx)(b,{}),(0,y.jsx)(c.A,{variant:"h5",color:"text.primary",gutterBottom:!0,children:"No Requests Yet!"}),(0,y.jsx)(c.A,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"It seems no one has sent you a request so far. This is where you\u2019ll find all the connection requests waiting for your response."}),(0,y.jsx)(d.A,{variant:"contained",color:"primary",size:"large",onClick:()=>{window.location.reload()},children:"Refresh Requests"})]}):(0,y.jsx)(u.Ay,{container:!0,spacing:2,children:null===t||void 0===t?void 0:t.map((t=>{var i,n,o,a,l,h,f,x,g,A,w,b,C,S,M;return(0,y.jsx)(u.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,y.jsxs)(j,{children:[(0,y.jsxs)(s.N_,{to:"/app/request-user-details/".concat(null===t||void 0===t||null===(n=t.fromUser)||void 0===n?void 0:n.id),style:{textDecoration:"none"},children:[(0,y.jsx)(m.A,{sx:{height:200,objectFit:"cover"},image:null!==t&&void 0!==t&&null!==(o=t.fromUser)&&void 0!==o&&null!==(a=o.details)&&void 0!==a&&a.profilePhoto?"".concat("https://sapthapadhimatrimony.in/backend","/").concat(null===t||void 0===t||null===(l=t.fromUser)||void 0===l||null===(h=l.details)||void 0===h||null===(f=h.profilePhoto)||void 0===f?void 0:f.path):"https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg",alt:(null===t||void 0===t||null===(x=t.fromUser)||void 0===x?void 0:x.firstName)||"User",title:(null===t||void 0===t||null===(g=t.fromUser)||void 0===g?void 0:g.firstName)||"User"}),(0,y.jsxs)(p.A,{children:[(0,y.jsx)(c.A,{gutterBottom:!0,variant:"h6",component:"div",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:null===t||void 0===t||null===(A=t.fromUser)||void 0===A?void 0:A.firstName}),(0,y.jsxs)(c.A,{variant:"body2",color:"text.secondary",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Age: ",null===t||void 0===t||null===(w=t.fromUser)||void 0===w||null===(b=w.details)||void 0===b?void 0:b.age," Yrs, Height: ",null===t||void 0===t||null===(C=t.fromUser)||void 0===C||null===(S=C.details)||void 0===S?void 0:S.height," cm"]})]})]}),(0,y.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between",padding:"8px"},children:[(0,y.jsx)(s.N_,{to:"/app/request-user-details/".concat(null===t||void 0===t||null===(M=t.fromUser)||void 0===M?void 0:M.id),style:{textDecoration:"none"},children:(0,y.jsx)(d.A,{size:"small",variant:"outlined",children:"View Profile"})}),(0,y.jsx)(d.A,{size:"small",variant:"contained",color:"primary",onClick:()=>{var i,n;return n=null===t||void 0===t||null===(i=t.fromUser)||void 0===i?void 0:i.id,void e((0,v.Ym)(n))},children:"Accept Request"})]})]})},null===t||void 0===t||null===(i=t.fromUser)||void 0===i?void 0:i.id)}))})};var S=i(7600);(0,h.A)(a.A)((e=>{let{theme:t}=e;return{backgroundColor:"#EDEDED",display:"flex",flexDirection:{xs:"column",sm:"row"},padding:t.spacing(2),marginBottom:t.spacing(2)}})),(0,h.A)(r.A)((e=>{let{theme:t}=e;return{display:"none",justifyContent:"space-between",flexWrap:"wrap",width:"80%",marginTop:"10px",fontSize:"16px",fontWeight:"500",[t.breakpoints.up("sm")]:{display:"flex"}}})),(0,h.A)(r.A)((e=>{let{theme:t}=e;return{marginLeft:t.spacing(2),display:"flex",flexDirection:"column",flex:1}})),(0,h.A)(r.A)((e=>{let{theme:t}=e;return{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:{xs:"column",sm:"row"}}})),(0,h.A)(S.A)({display:"flex",alignItems:"center",justifyContent:"center"});function M(){const[e,t]=(0,o.useState)(0);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(n.mg,{children:(0,y.jsx)("title",{children:" Matches | Sapthapadhi "})}),(0,y.jsx)(r.A,{component:"main",className:"MainContent",sx:{pt:{xs:"calc(12px + var(--Header-height))",md:3},pb:{xs:2,sm:2,md:3},flex:1,display:"flex",flexDirection:"column",minWidth:0,height:"100dvh",overflow:"auto"},children:(0,y.jsx)(C,{})})]})}},3719:(e,t,i)=>{var n=i(4994);t.A=void 0;var o=n(i(39)),r=i(579);t.A=(0,o.default)([(0,r.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,r.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52"},"2")],"SentimentDissatisfied")},7600:(e,t,i)=>{i.d(t,{A:()=>v});var n=i(8587),o=i(8168),r=i(5043),s=i(8387),a=i(8606),l=i(4535),c=i(2876),d=i(7056),u=i(2400);function m(e){return(0,u.Ay)("MuiCardActions",e)}(0,d.A)("MuiCardActions",["root","spacing"]);var p=i(579);const h=["disableSpacing","className"],f=(0,l.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,!i.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,o.A)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),v=r.forwardRef((function(e,t){const i=(0,c.A)({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:l}=i,d=(0,n.A)(i,h),u=(0,o.A)({},i,{disableSpacing:r}),v=(e=>{const{classes:t,disableSpacing:i}=e,n={root:["root",!i&&"spacing"]};return(0,a.A)(n,m,t)})(u);return(0,p.jsx)(f,(0,o.A)({className:(0,s.A)(v.root,l),ownerState:u,ref:t},d))}))},6591:(e,t,i)=>{i.d(t,{A:()=>g});var n=i(8587),o=i(8168),r=i(5043),s=i(8387),a=i(8606),l=i(2876),c=i(4535),d=i(7056),u=i(2400);function m(e){return(0,u.Ay)("MuiCardMedia",e)}(0,d.A)("MuiCardMedia",["root","media","img"]);var p=i(579);const h=["children","className","component","image","src","style"],f=(0,c.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e,{isMediaComponent:n,isImageComponent:o}=i;return[t.root,n&&t.media,o&&t.img]}})((e=>{let{ownerState:t}=e;return(0,o.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),v=["video","audio","picture","iframe","img"],x=["picture","img"],g=r.forwardRef((function(e,t){const i=(0,l.A)({props:e,name:"MuiCardMedia"}),{children:r,className:c,component:d="div",image:u,src:g,style:A}=i,y=(0,n.A)(i,h),j=-1!==v.indexOf(d),w=!j&&u?(0,o.A)({backgroundImage:'url("'.concat(u,'")')},A):A,b=(0,o.A)({},i,{component:d,isMediaComponent:j,isImageComponent:-1!==x.indexOf(d)}),C=(e=>{const{classes:t,isMediaComponent:i,isImageComponent:n}=e,o={root:["root",i&&"media",n&&"img"]};return(0,a.A)(o,m,t)})(b);return(0,p.jsx)(f,(0,o.A)({className:(0,s.A)(C.root,c),as:d,role:!j&&u?"img":void 0,ref:t,style:w,ownerState:b,src:j?u||g:void 0},y,{children:r}))}))}}]);
//# sourceMappingURL=689.da5c950a.chunk.js.map