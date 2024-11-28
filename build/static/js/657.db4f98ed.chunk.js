"use strict";(self.webpackChunksapthapadhi=self.webpackChunksapthapadhi||[]).push([[657],{9781:(e,t,r)=>{r.d(t,{A:()=>p});var i=r(5043),o=r(3216),n=r(5475),s=r(3003),a=r(8529),l=r(64),d=r.n(l),c=r(579);const p=e=>{let{id:t,profilePhoto:r,name:l,age:p,height:u,status:h}=e;const x=(0,s.wA)(),m=(0,o.Zp)(),{success:g,error:f}=(0,s.d4)((e=>e.user)),[v,y]=(0,i.useState)(h),{authInfo:w}=(0,s.d4)((e=>e.auth));(0,i.useEffect)((()=>{g&&(d().fire({icon:"success",title:"Successful",text:g}),x((0,a.ET)())),f&&(d().fire({icon:"error",title:"Oops...",text:f}),x((0,a.ET)()))}),[g,f,x]);return(0,c.jsx)("div",{className:"flex items-center justify-center bg-gray-200",children:(0,c.jsxs)("div",{className:"relative py-3 px-2 rounded-lg gap-3 bg-gray-200  rounded-lg shadow-lg flex justify-between items-center",children:[(0,c.jsx)(n.N_,{onClick:e=>{w||(e.preventDefault(),d().fire({icon:"error",title:"Oops...",text:"Please Login First"}),m("/login"))},to:v?"/app/requested-profile-view/".concat(t):"/app/userdetails/".concat(t),style:{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:(0,c.jsx)("div",{className:"w-36  h-36  overflow-hidden flex items-center justify-center bg-gray-300 shadow-inner",children:(0,c.jsx)("img",{src:r,alt:l,className:"w-full h-full object-cover"})})}),(0,c.jsxs)("div",{className:"",children:[(0,c.jsxs)("div",{className:"mt-4 text-center",children:[(0,c.jsx)("h2",{className:"text-xl font-semibold text-gray-800 truncate",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:l}),(0,c.jsxs)("p",{className:"text-gray-600 truncate",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Age: ",p," Yrs, Height: ",u]})]}),(0,c.jsxs)("div",{className:"flex w-full mt-4",children:[(0,c.jsx)(n.N_,{onClick:e=>{w||(e.preventDefault(),d().fire({icon:"error",title:"Oops...",text:"Please Login First"}),m("/login"))},className:"w-1/2 bg-white flex justify-center items-center text-gray-800 py-1 text-[12px] rounded-lg shadow-md hover:bg-gray-100 text-center",to:v?"/app/requested-profile-view/".concat(t):"/app/userdetails/".concat(t),style:{textDecoration:"none"},children:"View Profile"}),(0,c.jsx)("button",{className:"w-1/2 ml-2 bg-blue-600 text-white text-[10px] py-1 rounded-lg shadow-md hover:bg-blue-700",onClick:()=>{if(!w)return d().fire({icon:"error",title:"Oops...",text:"Please Login First"}),void m("/login");x((0,a.w$)(t)),y(!0)},disabled:v,children:v?"Requested":"Send Request"})]})]})]})})}},6285:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i=r(5043),o=r(3003),n=r(8529),s=r(8903),a=r(5865),l=r(6446),d=r(2110),c=r(6494),p=r(4975),u=r(5225),h=(r(4014),r(3874),r(579));const x=e=>{let{children:t}=e;return(0,h.jsx)(p.RC,{slidesPerView:2,spaceBetween:10,navigation:!0,breakpoints:{300:{slidesPerView:1,spaceBetween:10},440:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.5,spaceBetween:10},1024:{slidesPerView:2,spaceBetween:10}},modules:[u.Vx],className:"mySwiper mySwipers",children:t})};var m=r(9781),g=r(3216),f=r(8065),v=r.n(f);const y=()=>{const e=(0,o.wA)(),t=(0,g.zy)(),r=(0,g.Zp)(),{matchUser:u,recUsersList:f}=(0,o.d4)((e=>e.user)),[y,w]=(0,i.useState)([]),[j,b]=(0,i.useState)([]),{planList:A}=(0,o.d4)((e=>e.plan));let P=JSON.parse(localStorage.getItem("myplan"));console.log("MYCurrentPlan Name",P),(0,i.useEffect)((()=>{e((0,n.pv)()),e((0,n.XB)())}),[e]);return(0,i.useEffect)((()=>{const e=new URLSearchParams(t.search),r=e.get("age"),i=e.get("religion"),o=e.get("location"),n=e=>Array.isArray(e)?e.filter((e=>{const[t,n]=r?r.split("-").map(Number):[null,null],s=Number(e.age);return(!r||s>=t&&s<=n)&&(!i||e.religion===i)&&(!o||e.country===o)})):[];r||i||o?(w(n(u)),b(n(f))):(w(Array.isArray(u)?u:[]),b(Array.isArray(f)?f:[]))}),[t.search,u,f]),(0,h.jsxs)(s.Ay,{container:!0,spacing:1,marginY:1,children:[(null===j||void 0===j?void 0:j.length)>0?(0,h.jsxs)(s.Ay,{item:!0,xs:12,children:[(0,h.jsx)(a.A,{variant:"p",sx:{color:"primary.main",fontSize:"2rem",fontFamily:"cursive",fontWeight:"bold",padding:"0px"},children:"Recommendetation Profile"}),(0,h.jsx)(x,{children:null===j||void 0===j?void 0:j.map(((e,t)=>{var r,i;let o="string"==typeof(null===e||void 0===e?void 0:e.profilePhoto)?null===e||void 0===e?void 0:e.profilePhoto:null!==e&&void 0!==e&&e.profilePhoto?"".concat("https://sapthapadhimatrimony.in/backend","/").concat(null===e||void 0===e||null===(r=e.profilePhoto)||void 0===r?void 0:r.path):"https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg";return(0,h.jsx)(p.qr,{children:(0,h.jsx)(m.A,{profilePhoto:o,name:e.name,age:e.age,height:e.height,id:e.id,status:!(null===e||void 0===e||!e.ReceivedRequests||null===e||void 0===e||null===(i=e.ReceivedRequests[0])||void 0===i||!i.status)},t+1)},t)}))})]}):null,"Silver Plan"!=(null===P||void 0===P?void 0:P.name)&&P?(0,h.jsx)(h.Fragment,{children:(null===y||void 0===y?void 0:y.length)>0?(0,h.jsxs)(s.Ay,{item:!0,xs:12,marginTop:3,children:[(0,h.jsx)(a.A,{variant:"p",sx:{color:"primary.main",fontSize:"2rem",fontFamily:"cursive",fontWeight:"bold",padding:"0px"},children:"Profile Based on Your Preference"}),(0,h.jsx)(x,{children:y.map(((e,t)=>{var r,i;let o="string"==typeof(null===e||void 0===e?void 0:e.profilePhoto)?null===e||void 0===e?void 0:e.profilePhoto:null!==e&&void 0!==e&&e.profilePhoto?"".concat("https://sapthapadhimatrimony.in/backend","/").concat(null===e||void 0===e||null===(r=e.profilePhoto)||void 0===r?void 0:r.path):"https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg";return(0,h.jsx)(p.qr,{children:(0,h.jsx)(m.A,{profilePhoto:o,name:e.name,age:e.age,height:e.height,id:e.id,status:!(null===e||void 0===e||!e.ReceivedRequests||null===e||void 0===e||null===(i=e.ReceivedRequests[0])||void 0===i||!i.status)},t+1)},t)}))})]}):null}):(0,h.jsxs)("div",{style:{backgroundColor:"#ffe4e1",border:"1px solid #ff6961",borderRadius:"10px",marginTop:"20px",padding:"20px",width:"100%",textAlign:"center",margin:"20px 0"},children:[(0,h.jsx)(a.A,{variant:"h6",sx:{color:"#ff4500",fontWeight:"bold",fontFamily:"Arial, sans-serif",marginBottom:"10px"},children:"Limited Features!"}),(0,h.jsx)(a.A,{variant:"body1",sx:{color:"#333",fontSize:"1rem",marginBottom:"15px"},children:"Upgrade your plan to access premium features and get the best matches tailored to your preferences."}),(0,h.jsx)("button",{style:{backgroundColor:"#ff4500",color:"#fff",padding:"10px 20px",borderRadius:"5px",border:"none",cursor:"pointer"},onClick:()=>{r("/pricing")},children:"Upgrade Your Plan"})]}),P&&(0,h.jsxs)(l.A,{sx:{backgroundColor:"#f0f4f8",padding:"20px",borderRadius:"10px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",marginBottom:"20px",width:"100%",marginTop:"40px"},children:[(0,h.jsxs)(a.A,{variant:"h6",sx:{fontWeight:"bold",fontSize:"1.2rem",color:"primary.main",textAlign:"center",marginBottom:"10px"},children:["Current Plan: ",null===P||void 0===P?void 0:P.name]}),(0,h.jsx)(d.A,{children:(0,h.jsxs)(c.A,{children:[(0,h.jsxs)(a.A,{variant:"body1",sx:{fontSize:"1rem",marginBottom:"8px"},children:[(0,h.jsx)("strong",{children:"Purchase Date:"})," ",v()(null===P||void 0===P?void 0:P.createdAt).format("DD-MM-YYYY")]}),(0,h.jsxs)(a.A,{variant:"body1",sx:{fontSize:"1rem",marginBottom:"8px"},children:[(0,h.jsx)("strong",{children:"Expiry Date:"})," ",((e,t)=>{const r=parseInt(t.split(" ")[0],10);return v()(e).add(r,"month").format("DD-MM-YYYY")})(P.createdAt,P.planValidity)]}),(0,h.jsx)(a.A,{variant:"body2",sx:{color:"secondary.main",fontStyle:"italic",marginTop:"10px"},children:"Thank you for subscribing to our service!"})]})})]})]})}}}]);
//# sourceMappingURL=657.db4f98ed.chunk.js.map