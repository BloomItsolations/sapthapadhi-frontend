"use strict";(self.webpackChunksapthapadhi=self.webpackChunksapthapadhi||[]).push([[525],{6009:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var i=r(5043),s=r(3003),o=r(8529),l=r(8903),a=r(5865),n=r(4975),d=r(5225),c=(r(4014),r(3874),r(579));const u=e=>{let{children:t}=e;return(0,c.jsx)(n.RC,{slidesPerView:1,spaceBetween:10,navigation:!0,breakpoints:{440:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:3.5,spaceBetween:10}},modules:[d.Vx],className:"mySwiper mySwipers",children:t})};var p=r(5475),h=r(64),m=r.n(h);const g=e=>{let{id:t,profilePhoto:r,name:l,age:a,height:n,status:d}=e;const u=(0,s.wA)(),{success:h,error:g}=(0,s.d4)((e=>e.user)),[x,f]=(0,i.useState)(d);(0,i.useEffect)((()=>{h&&(m().fire({icon:"success",title:"Successful",text:h}),u((0,o.ET)())),g&&(m().fire({icon:"error",title:"Oops...",text:g}),u((0,o.ET)()))}),[h,g,u]);return(0,c.jsx)("div",{className:"flex items-center justify-center bg-gray-200",children:(0,c.jsxs)("div",{className:"relative p-6 bg-gray-200 rounded-lg shadow-lg flex flex-col items-center",children:[(0,c.jsxs)(p.N_,{to:x?"/app/requested-profile-view/".concat(t):"/app/userdetails/".concat(t),style:{textDecoration:"none"},children:[(0,c.jsx)("div",{className:"w-36 h-36 rounded-full overflow-hidden flex items-center justify-center bg-gray-300 shadow-inner",children:(0,c.jsx)("img",{src:r,alt:l,className:"w-full h-full object-cover rounded-full"})}),(0,c.jsxs)("div",{className:"mt-4 text-center",children:[(0,c.jsx)("h2",{className:"text-xl font-semibold text-gray-800",children:l}),(0,c.jsxs)("p",{className:"text-gray-600",children:["Age: ",a," Yrs, Height: ",n]})]})]}),(0,c.jsxs)("div",{className:"flex w-full mt-4",children:[(0,c.jsx)(p.N_,{className:"w-1/2 bg-white flex justify-center items-center text-gray-800 py-1 text-[12px] rounded-lg shadow-md hover:bg-gray-100 text-center",to:x?"/app/requested-profile-view/".concat(t):"/app/userdetails/".concat(t),style:{textDecoration:"none"},children:"View Profile"}),(0,c.jsx)("button",{className:"w-1/2 ml-2 bg-blue-600 text-white text-[10px] py-1 rounded-lg shadow-md hover:bg-blue-700",onClick:()=>{u((0,o.w$)(t)),f(!0)},disabled:x,children:x?"Requested":"Send Request"})]})]})})};var x=r(3216);const f=()=>{const e=(0,s.wA)(),t=(0,x.zy)(),r=(0,x.Zp)(),{matchUser:d,recUsersList:p}=(0,s.d4)((e=>e.user)),[h,m]=(0,i.useState)([]),[f,v]=(0,i.useState)([]),{planList:y}=(0,s.d4)((e=>e.plan));let j=JSON.parse(localStorage.getItem("myplan"));return(0,i.useEffect)((()=>{e((0,o.pv)()),e((0,o.XB)())}),[e]),(0,i.useEffect)((()=>{const e=new URLSearchParams(t.search),r=e.get("age"),i=e.get("religion"),s=e.get("location"),o=e=>Array.isArray(e)?e.filter((e=>{const[t,o]=r?r.split("-").map(Number):[null,null],l=Number(e.age);return(!r||l>=t&&l<=o)&&(!i||e.religion===i)&&(!s||e.country===s)})):[];r||i||s?(m(o(d)),v(o(p))):(m(Array.isArray(d)?d:[]),v(Array.isArray(p)?p:[]))}),[t.search,d,p]),(0,c.jsxs)(l.Ay,{container:!0,spacing:1,marginY:1,children:[(null===f||void 0===f?void 0:f.length)>0?(0,c.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,c.jsx)(a.A,{variant:"p",sx:{color:"primary.main",fontSize:"2rem",fontFamily:"cursive",fontWeight:"bold",padding:"0px"},children:"Recommendetation Profile"}),(0,c.jsx)(u,{children:null===f||void 0===f?void 0:f.map(((e,t)=>{var r,i;let s="string"==typeof(null===e||void 0===e?void 0:e.profilePhoto)?null===e||void 0===e?void 0:e.profilePhoto:null!==e&&void 0!==e&&e.profilePhoto?"".concat("https://sapthapadhimatrimony.in/backend","/").concat(null===e||void 0===e||null===(r=e.profilePhoto)||void 0===r?void 0:r.path):"https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg";return console.log("Primage",s),(0,c.jsx)(n.qr,{children:(0,c.jsx)(g,{profilePhoto:s,name:e.name,age:e.age,height:e.height,id:e.id,status:!(null===e||void 0===e||!e.ReceivedRequests||null===e||void 0===e||null===(i=e.ReceivedRequests[0])||void 0===i||!i.status)},t+1)},t)}))})]}):null,"Silver Plan"!=(null===j||void 0===j?void 0:j.name)&&j?(0,c.jsx)(c.Fragment,{children:(null===h||void 0===h?void 0:h.length)>0?(0,c.jsxs)(l.Ay,{item:!0,xs:12,marginTop:3,children:[(0,c.jsx)(a.A,{variant:"p",sx:{color:"primary.main",fontSize:"2rem",fontFamily:"cursive",fontWeight:"bold",padding:"0px"},children:"Profile Based on Your Preference"}),(0,c.jsx)(u,{children:h.map(((e,t)=>{var r,i;let s="string"==typeof(null===e||void 0===e?void 0:e.profilePhoto)?null===e||void 0===e?void 0:e.profilePhoto:null!==e&&void 0!==e&&e.profilePhoto?"".concat("https://sapthapadhimatrimony.in/backend","/").concat(null===e||void 0===e||null===(r=e.profilePhoto)||void 0===r?void 0:r.path):"https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg";return(0,c.jsx)(n.qr,{children:(0,c.jsx)(g,{profilePhoto:s,name:e.name,age:e.age,height:e.height,id:e.id,status:!(null===e||void 0===e||!e.ReceivedRequests||null===e||void 0===e||null===(i=e.ReceivedRequests[0])||void 0===i||!i.status)},t+1)},t)}))})]}):null}):(0,c.jsxs)("div",{style:{backgroundColor:"#ffe4e1",border:"1px solid #ff6961",borderRadius:"10px",marginTop:"20px",padding:"20px",width:"100%",textAlign:"center",margin:"20px 0"},children:[(0,c.jsx)(a.A,{variant:"h6",sx:{color:"#ff4500",fontWeight:"bold",fontFamily:"Arial, sans-serif",marginBottom:"10px"},children:"Limited Features!"}),(0,c.jsx)(a.A,{variant:"body1",sx:{color:"#333",fontSize:"1rem",marginBottom:"15px"},children:"Upgrade your plan to access premium features and get the best matches tailored to your preferences."}),(0,c.jsx)("button",{style:{backgroundColor:"#ff4500",color:"#fff",padding:"10px 20px",borderRadius:"5px",border:"none",cursor:"pointer"},onClick:()=>{r("/pricing")},children:"Upgrade Your Plan"})]})]})}}}]);
//# sourceMappingURL=525.60ca5996.chunk.js.map