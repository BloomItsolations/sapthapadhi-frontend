"use strict";(self.webpackChunksapthapadhi=self.webpackChunksapthapadhi||[]).push([[983],{3782:(e,i,t)=>{t.d(i,{C:()=>a});let a=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua  Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia  Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]},9781:(e,i,t)=>{t.d(i,{A:()=>x});var a=t(5043),n=t(3216),o=t(5475),r=t(3003),s=t(8529),l=t(64),d=t.n(l),c=t(579);const x=e=>{let{id:i,profilePhoto:t,name:l,age:x,height:p,status:m}=e;const g=(0,r.wA)(),h=(0,n.Zp)(),{success:u,error:f}=(0,r.d4)((e=>e.user)),[b,v]=(0,a.useState)(m),{authInfo:y}=(0,r.d4)((e=>e.auth));(0,a.useEffect)((()=>{u&&(d().fire({icon:"success",title:"Successful",text:u}),g((0,s.ET)())),f&&(d().fire({icon:"error",title:"Oops...",text:f}),g((0,s.ET)()))}),[u,f,g]);return(0,c.jsx)("div",{className:"flex items-center justify-center bg-gray-200",children:(0,c.jsxs)("div",{className:"relative py-3 px-2 rounded-lg gap-3 bg-gray-200  rounded-lg shadow-lg flex justify-between items-center",children:[(0,c.jsx)(o.N_,{onClick:e=>{y||(e.preventDefault(),d().fire({icon:"error",title:"Oops...",text:"Please Login First"}),h("/login"))},to:b?"/app/requested-profile-view/".concat(i):"/app/userdetails/".concat(i),style:{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:(0,c.jsx)("div",{className:"w-36  h-36  overflow-hidden flex items-center justify-center bg-gray-300 shadow-inner",children:(0,c.jsx)("img",{src:t,alt:l,className:"w-full h-full object-cover"})})}),(0,c.jsxs)("div",{className:"",children:[(0,c.jsxs)("div",{className:"mt-4 text-center",children:[(0,c.jsx)("h2",{className:"text-xl font-semibold text-gray-800 truncate",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:l}),(0,c.jsxs)("p",{className:"text-gray-600 truncate",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["Age: ",x," Yrs, Height: ",p]})]}),(0,c.jsxs)("div",{className:"flex w-full mt-4",children:[(0,c.jsx)(o.N_,{onClick:e=>{y||(e.preventDefault(),d().fire({icon:"error",title:"Oops...",text:"Please Login First"}),h("/login"))},className:"w-1/2 bg-white flex justify-center items-center text-gray-800 py-1 text-[12px] rounded-lg shadow-md hover:bg-gray-100 text-center",to:b?"/app/requested-profile-view/".concat(i):"/app/userdetails/".concat(i),style:{textDecoration:"none"},children:"View Profile"}),(0,c.jsx)("button",{className:"w-1/2 ml-2 bg-blue-600 text-white text-[10px] py-1 rounded-lg shadow-md hover:bg-blue-700",onClick:()=>{if(!y)return d().fire({icon:"error",title:"Oops...",text:"Please Login First"}),void h("/login");g((0,s.w$)(i)),v(!0)},disabled:b,children:b?"Requested":"Send Request"})]})]})]})})}},9219:(e,i,t)=>{t.r(i),t.d(i,{default:()=>ae});var a=t(5043),n=t(2382),o=t(6446),r=(t(2049),t(9078),t(9781)),s=t(3003),l=t(8529),d=t(579);const c=e=>{let{profiles:i}=e;const t=(0,s.wA)(),{allUsers:c}=(0,s.d4)((e=>e.user));(0,a.useEffect)((()=>{t((0,l.Z0)())}),[t]);return(0,d.jsx)(o.A,{sx:{maxWidth:"95%",overflow:"hidden",padding:"30px",marginInline:"auto"},children:(0,d.jsx)(n.A,{dots:!1,infinite:!0,speed:500,slidesToScroll:1,autoplay:!0,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:1}},{breakpoint:400,settings:{slidesToShow:1}}],children:null===c||void 0===c?void 0:c.map(((e,i)=>{var t,a;return(0,d.jsxs)("div",{children:[" ",(0,d.jsx)(o.A,{sx:{display:"flex",justifyContent:"center",padding:2,backgroundColor:"#f9f9f9",borderRadius:"8px"},children:(0,d.jsx)(r.A,{profilePhoto:null!==e&&void 0!==e&&e.profilePhoto?"".concat("https://sapthapadhimatrimony.in/backend","/").concat(null===e||void 0===e||null===(t=e.profilePhoto)||void 0===t?void 0:t.path):"https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg",name:e.name,age:e.age,height:e.height,id:e.id,status:!(null===e||void 0===e||!e.ReceivedRequests||null===e||void 0===e||null===(a=e.ReceivedRequests[0])||void 0===a||!a.status)})})]},e.id)}))})})},x=()=>(0,d.jsx)("div",{className:"bg-[#f5f5f5]",children:(0,d.jsx)(c,{profiles:[{name:"John Doe",age:25,city:"New York",cast:"Christianity",image:"images/Profilepic.jpg"},{name:"Jane Smith",age:30,city:"Los Angeles",cast:"Hinduism",image:"images/Profilepic.jpg"},{name:"John Doe",age:25,city:"New York",cast:"Christianity",image:"images/Profilepic.jpg"},{name:"Jane Smith",age:30,city:"Los Angeles",cast:"Hinduism",image:"images/Profilepic.jpg"},{name:"John Doe",age:25,city:"New York",cast:"Christianity",image:"images/Profilepic.jpg"},{name:"Jane Smith",age:30,city:"Los Angeles",cast:"Hinduism",image:"images/Profilepic.jpg"},{name:"John Doe",age:25,city:"New York",cast:"Christianity",image:"images/Profilepic.jpg"},{name:"Jane Smith",age:30,city:"Los Angeles",cast:"Hinduism",image:"images/Profilepic.jpg"}]})});var p=t(5865),m=t(5795),g=t(2143),h=t(1906),u=t(3782),f=t(3216),b=t(64),v=t.n(b);const y=()=>{const e=(0,f.Zp)(),[i,t]=a.useState(""),[n,r]=a.useState(""),[l,c]=a.useState(""),[x,b]=a.useState(""),y=e=>{const{name:i,value:a}=e.target;switch(i){case"lookingFor":t(a);break;case"age":r(a);break;case"religion":c(a);break;case"location":b(a)}};let j=(0,s.d4)((e=>{var i;return null===(i=e.auth)||void 0===i?void 0:i.authInfo}));return(0,d.jsxs)(o.A,{sx:{position:"relative",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",textAlign:"center",padding:"20px",overflow:"hidden","::before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:'url("images/homepageimage.jpg")',backgroundSize:{xs:"contain",sm:"cover"},backgroundPosition:{xs:"top center",sm:"center"},filter:"blur(0.5px)",zIndex:-1},"::after":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.2)",zIndex:-1}},children:[(0,d.jsxs)(o.A,{children:[(0,d.jsxs)(p.A,{variant:"h3",sx:{fontSize:{xs:"32px",sm:"38px",md:"48px",lg:"64px"},fontFamily:"Noto Serif",mb:2,fontWeight:"600"},children:["Find your",(0,d.jsx)("br",{}),(0,d.jsx)("span",{style:{color:"red",fontSize:"inherit"},children:"Right Match"})," here"]}),(0,d.jsx)(p.A,{variant:"h6",sx:{fontSize:{xs:"24px",sm:"26px",md:"32px",lg:"40px"},fontFamily:"Cabin",mb:4},children:"\u201cOne love, one heart, one destiny.\u201d"})]}),(0,d.jsxs)(o.A,{sx:{backgroundColor:"#fff",opacity:.9,padding:"20px",borderRadius:"8px",display:"flex",flexDirection:{xs:"column",sm:"row"},gap:2,mb:2,width:"100%",maxWidth:"1100px",marginTop:"30px"},children:[(0,d.jsxs)(m.A,{fullWidth:!0,label:"Age",name:"age",select:!0,value:n,onChange:y,variant:"outlined",children:[(0,d.jsx)(g.A,{value:"18-25",children:"18-25"}),(0,d.jsx)(g.A,{value:"26-35",children:"26-35"}),(0,d.jsx)(g.A,{value:"36-45",children:"36-45"}),(0,d.jsx)(g.A,{value:"46-60",children:"46-60"})]}),(0,d.jsxs)(m.A,{fullWidth:!0,label:"Religion",name:"religion",select:!0,value:l,onChange:y,variant:"outlined",children:[(0,d.jsx)(g.A,{value:"",children:"Select Your Religion"}),["Hinduism","Sikhism","Christianity","Jainism","Islam","Judaism","Buddhism","Shinto","Confucianism","Zoroastrianism","Others"].map((e=>(0,d.jsx)(g.A,{value:e,children:e},e)))]}),(0,d.jsxs)(m.A,{fullWidth:!0,label:"Location",name:"location",select:!0,value:x,onChange:y,variant:"outlined",children:[(0,d.jsx)(g.A,{value:"",children:"Select Your Country"}),null===u.C||void 0===u.C?void 0:u.C.map((e=>(0,d.jsx)(g.A,{value:e,children:e},e)))]}),(0,d.jsx)(h.A,{fullWidth:!0,color:"secondary",variant:"contained",onClick:()=>{if(!j)return v().fire({icon:"error",title:"Oops...",text:"Please Login First.."}),void e("/login");const i=new URLSearchParams({age:n,religion:l,location:x}).toString();e("/app/dashboard?".concat(i))},sx:{color:"white",boxShadow:"none",backgroundColor:"#ff4949",textTransform:"uppercase",borderRadius:1,fontSize:{xs:"18px",sm:"20px",md:"22px",lg:"22px"},"&:hover":{backgroundColor:"#d63d3d",boxShadow:"none"}},children:"Let's Begin"})]})]})};var j=t(2110),w=t(2828),A=t(6494),S=t(8446);const k=e=>{let{image:i,title:t,link:a}=e;return(0,d.jsx)(j.A,{sx:{margin:"10px",position:"relative",overflow:"hidden",borderRadius:"12px",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s","&:hover":{transform:"scale(1.03)"}},children:(0,d.jsxs)(w.A,{children:[(0,d.jsx)(o.A,{component:"img",src:i,alt:t,sx:{width:"100%",height:"300px",objectFit:"cover",transition:"transform 0.3s","&:hover":{transform:"scale(1.05)"}}}),(0,d.jsxs)(A.A,{sx:{position:"absolute",bottom:0,background:"rgba(0, 0, 0, 0.6)",color:"white",width:"100%",textAlign:"center",padding:"10px",boxSizing:"border-box"},children:[(0,d.jsx)(p.A,{variant:"h6",component:"div",sx:{fontFamily:"Cabin",fontWeight:"bold",fontSize:"1.25rem",marginBottom:"5px"},children:t}),(0,d.jsx)(S.A,{href:a,variant:"body2",sx:{display:"inline-block",padding:"8px 16px",backgroundColor:"#e5026b",color:"white",borderRadius:"20px",textDecoration:"none",fontFamily:"Cabin",transition:"background-color 0.3s","&:hover":{backgroundColor:"#b60e5c"}},children:"MORE DETAILS"})]})]})})};var C=t(5246),T=t(6900);const I=()=>{const{ref:e,inView:i}=(0,C.Wx)({threshold:.4});return(0,d.jsxs)(o.A,{sx:{padding:"20px",backgroundColor:"#f5f5f5"},children:[(0,d.jsx)(o.A,{sx:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:(0,d.jsx)(p.A,{sx:{borderRadius:"0px 10px 0 10px",display:"flex",justifyContent:"center",marginInline:"auto",border:"1px solid black",width:{xs:"auto",sm:"300px",md:"526px"},fontSize:{xs:"25px",md:"40px"},fontFamily:"Cabin",color:"#e5026b",textAlign:"center",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"},variant:"h4",component:"div",children:"CATEGORIES"})}),(0,d.jsx)(o.A,{ref:e,sx:{maxWidth:{xs:"98%",md:"95%"},paddingInline:{xs:"24px",sm:"24px",md:"40px"},overflow:"hidden",marginInline:"auto",".slick-prev:before, .slick-next:before":{color:"black"},".slick-prev, .slick-next":{zIndex:1}},children:(0,d.jsx)(T.P.div,{initial:"hidden",animate:i?"visible":"hidden",variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.9}}},children:(0,d.jsxs)(n.A,{dots:!0,infinite:!0,speed:500,slidesToScroll:1,autoplay:!0,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}],children:[(0,d.jsx)(k,{image:"images/weddingimage.jpg",title:"Wedding Page",link:"/gallery"}),(0,d.jsx)(k,{image:"images/weddingimagetwo.jpg",title:"All Services",link:"/services"}),(0,d.jsx)(k,{image:"images/weddingimagethree.jpg",title:"Join Now",link:"/register"})]})})})]})};var N=t(9252),R=t(2982);const P=()=>{const e=(0,s.wA)(),{bannersList:i}=(0,s.d4)((e=>e.banner));(0,a.useEffect)((()=>{e((0,R.s1)())}),[]);const{ref:t,inView:r}=(0,C.Wx)({threshold:.3}),{ref:l,inView:c}=(0,C.Wx)({threshold:.3});return i?(0,d.jsx)("div",{className:"pt-16 bg-[#f5f5f5]",children:(0,d.jsx)(N.A,{children:(0,d.jsxs)(o.A,{sx:{textAlign:"center",padding:"20px"},children:[(0,d.jsxs)(T.P.div,{ref:t,initial:"hidden",animate:r?"visible":"hidden",variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.9}}},children:[(0,d.jsx)(p.A,{variant:"h4",component:"div",gutterBottom:!0,sx:{fontFamily:"Metal Mania",fontWeight:500,fontSize:{xs:"32px",sm:"48px",md:"54px"},lineHeight:{xs:"20px",sm:"25px",md:"30px"},color:"red"},children:"WELCOME TO"}),(0,d.jsx)(p.A,{variant:"h4",component:"div",gutterBottom:!0,sx:{fontFamily:"Metal Mania",fontWeight:400,fontSize:{xs:"32px",sm:"48px",md:"64px"},lineHeight:{xs:"40px",sm:"60px",md:"76.16px"},color:"#E5026B"},children:"SAPTHAPADHI.IN"}),(0,d.jsx)(p.A,{variant:"body1",sx:{marginTop:"20px",color:"black",width:{xs:"100%",md:"70%"},textAlign:"center",marginInline:"auto",fontFamily:"Poppins",fontSize:"22px"},children:"Best wedding matrimony It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}),(0,d.jsx)(p.A,{variant:"body1",sx:{marginTop:"20px",fontFamily:"Poppins",fontSize:"22px",color:"black",width:{xs:"100%",md:"70%"},textAlign:"center",marginInline:"auto"},children:"There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humor, or randomized words which don't look even slightly believable."})]}),(0,d.jsx)(T.P.div,{ref:l,initial:"hidden",animate:c?"visible":"hidden",variants:{hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.9}}},children:(0,d.jsx)(n.A,{dots:!0,infinite:!0,speed:500,slidesToScroll:1,autoplay:!0,slidesToShow:1,children:i&&(null===i||void 0===i?void 0:i.map(((e,i)=>(0,d.jsx)(o.A,{sx:{marginTop:"30px"},children:(0,d.jsx)("img",{src:"".concat("https://sapthapadhimatrimony.in/backend","/").concat(e.imageUrls[0].path),alt:"Sample",style:{width:"100%",height:"auto",borderRadius:"8px"}})},i))))})})]})})}):(0,d.jsx)("div",{children:"Loading..."})},B=e=>{let{title:i,imageUrl:t,paragraph:a}=e;return(0,d.jsx)(j.A,{sx:{flex:1,padding:2,backgroundColor:"#D9D9D9",borderRadius:"0px 20px 0 20px",border:"3px solid black"},children:(0,d.jsxs)(A.A,{children:[(0,d.jsx)(p.A,{variant:"h5",component:"div",gutterBottom:!0,sx:{fontFamily:"Metal Mania",color:"#e5026b",fontWeight:400,fontSize:"32px",textAlign:"center"},children:i}),(0,d.jsx)(o.A,{component:"img",sx:{width:"200px",height:"auto",maxHeight:"200px",objectFit:"cover",marginInline:"auto"},alt:"Genuine Profiles",src:t}),(0,d.jsx)(p.A,{variant:"body2",color:"textSecondary",sx:{marginTop:2,fontFamily:"Cabil",fontSize:"32px",textAlign:"center",color:"#000000"},children:a})]})})},z=()=>(0,d.jsx)("div",{className:"bg-[#f5f5f5]",children:(0,d.jsx)("div",{className:"w-[100%] md:w-[95%] lg:w-[85%] mx-auto ",children:(0,d.jsxs)(o.A,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},gap:4,padding:2},children:[(0,d.jsx)(B,{title:"Genuine profiles",imageUrl:"images/genuineprofile.svg",paragraph:"Contact genuine profiles with 100% verified mobile"}),(0,d.jsx)(B,{title:"Most trusted",imageUrl:"images/genuineprofiletwo.svg",paragraph:"The most trusted wedding matrimony brand lorem"})]})})});var F=t(8903);const E=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:" bg-[#f5f5f5] pt-7",children:[(0,d.jsx)(p.A,{sx:{borderRadius:"0px 10px 0 10px",display:"flex",justifyContent:"center",marginInline:"auto",border:"1px solid black",width:{xs:"auto",sm:"300px",md:"526px"},fontSize:{xs:"25px",md:"40px"},fontFamily:"Cabin",color:"#e5026b",textAlign:"center",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"},variant:"h4",component:"div",children:"HOW IT WORKS"}),(0,d.jsxs)(o.A,{sx:{padding:2,position:"relative",minHeight:"400px",backgroundColor:"#f5f5f5",paddingTop:"70px"},children:[(0,d.jsx)(o.A,{sx:{position:"absolute",top:0,bottom:0,left:"50%",width:"4px",bgcolor:"black",transform:"translateX(-50%)"}}),(0,d.jsx)(F.Ay,{container:!0,spacing:0,children:[{type:"image",content:"images/workprocessimage.jpg"},{type:"text",title:"REGISTER",content:"Fill in your details, upload your photos, and set your preferences to discover compatible matches. Join now and take the first step towards finding your soulmate"},{type:"text",title:"FIND YOUR MATCH",content:"Our advanced matching algorithm ensures you connect with individuals who share your values and aspirations. Begin your search today and discover meaningful connections that could lead to a lifelong partnership."},{type:"image",content:"images/workprocessimagettwo.jpg"},{type:"image",content:"images/workprocessimagethree.jpg"},{type:"text",title:"SEND INTEREST",content:"Show your interest in potential matches with a simple click. Sending an interest is a subtle yet meaningful way to express your curiosity and openness to exploring a deeper connection."},{type:"text",title:"GET PROFILE INFORMATION",content:"Understanding each profile helps you make informed decisions and discover compatibility effortlessly. Unlock the details that matter and connect with profiles that resonate with your preferences."},{type:"image",content:"images/workprocessimagefour.jpg"},{type:"image",content:"images/workprocessimagefifth.jpg"},{type:"text",title:"START MEETUPS",content:"Initiate meaningful connections with potential matches through engaging meetups. Take the next step towards building relationships by arranging meetings that allow you to get to know each other better."},{type:"text",title:"GETTING MARRIAGE",content:"Celebrate the joy of finding your perfect match as you embark on the journey towards marriage. Explore the next chapter of your life with confidence."},{type:"image",content:"images/workprocesssix.jpg"}].map(((e,i)=>(0,d.jsx)(F.Ay,{item:!0,xs:12,sm:6,sx:{position:"relative"},children:(0,d.jsx)(o.A,{sx:{display:"flex",justifyContent:i%2===0?"flex-end":"flex-start",position:"relative"},children:(0,d.jsx)(j.A,{sx:{width:{xs:"100%",sm:"".concat("image"===e.type?"260px":"500px")},borderRadius:"0px 10px 0 10px",color:"#e5026b",border:"1px ".concat("image"===e.type?"none":"dashed"," black"),margin:"10px",textAlign:"left",transform:i%2===0?"translateX(-5%)":"translateX(5%)",marginTop:"".concat("image"!==e.type?"20px":"0px")},children:(0,d.jsx)(A.A,{children:"image"===e.type?(0,d.jsx)(o.A,{component:"img",sx:{width:"100%",height:"auto",fontFamily:"Cabin",border:"0px",maxHeight:"300px",objectFit:"cover"},alt:"Work Process Image",src:e.content}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.A,{variant:"h5",component:"div",gutterBottom:!0,sx:{color:"#e5026b",fontFamily:"Poppins",fontSize:"16px",fontWeight:"700"},children:e.title}),(0,d.jsx)(p.A,{variant:"body2",color:"textSecondary",sx:{marginTop:2,fontSize:"18px",fontFamily:"Poppins"},children:e.content})]})})})})},i)))})]})]})}),M=e=>{let{image:i,title:t}=e;return(0,d.jsx)(j.A,{sx:{margin:"10px",position:"relative",overflow:"hidden",borderRadius:"8px"},children:(0,d.jsxs)(w.A,{children:[(0,d.jsx)(o.A,{component:"img",src:i,alt:t,sx:{width:"100%",height:"100%",objectFit:"cover"}}),(0,d.jsx)(A.A,{sx:{position:"absolute",bottom:0,background:"rgba(0, 0, 0, 0.5)",color:"white",width:"100%",textAlign:"center"},children:(0,d.jsx)(p.A,{variant:"h5",component:"div",gutterBottom:!0,children:t})})]})})};var L=t(2192);const W=()=>{const[e,i]=(0,a.useState)([]);(0,a.useEffect)((()=>{!async function(){try{const t=await L.A.get("/admin/couples");var e;if(200==t.status)i(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.couples)}catch(t){console.error("Error fetching couple data:",t)}}()}),[]);const{ref:t,inView:r}=(0,C.Wx)({triggerOnce:!0,threshold:.2});return(0,d.jsxs)(o.A,{sx:{padding:"20px",backgroundColor:"#f5f5f5"},children:[(0,d.jsx)(o.A,{sx:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:(0,d.jsx)(p.A,{sx:{borderRadius:"0px 10px 0 10px",display:"flex",justifyContent:"center",marginInline:"auto",border:"1px solid black",width:{xs:"auto",sm:"300px",md:"526px"},fontSize:{xs:"25px",md:"40px"},fontFamily:"Cabin",color:"#e5026b",textAlign:"center",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"},variant:"h4",component:"div",children:"RECENT COUPLES"})}),(0,d.jsx)(o.A,{ref:t,sx:{maxWidth:{xs:"98%",md:"95%"},paddingInline:{xs:"24px",sm:"24px",md:"40px"},overflow:"hidden",marginInline:"auto",".slick-prev:before, .slick-next:before":{color:"black"},".slick-prev, .slick-next":{zIndex:1}},children:(0,d.jsx)(T.P.div,{initial:"hidden",animate:r?"visible":"hidden",variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.5}}},children:(0,d.jsx)(n.A,{dots:!0,infinite:!0,speed:500,slidesToScroll:1,autoplay:!0,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}],children:null===e||void 0===e?void 0:e.map(((e,i)=>(0,d.jsx)(M,{image:"".concat("https://sapthapadhimatrimony.in/backend","/").concat(e.image[0].path),title:"".concat(e.brideName," & ").concat(e.groomName)},i)))})})})]})};var G=t(8883),D=t(4535),O=t(7830),H=t(7412);const U="ReviewCard",J={card:"".concat(U,"-card"),stars:"".concat(U,"-stars"),profile:"".concat(U,"-profile"),avatar:"".concat(U,"-avatar"),name:"".concat(U,"-name"),profession:"".concat(U,"-profession")},V=(0,D.Ay)(j.A)((e=>{let{theme:i}=e;return{["&.".concat(J.card)]:{border:"1px solid ".concat(i.palette.divider),marginBottom:i.spacing(4),padding:i.spacing(2),textAlign:"center"},["& .".concat(J.stars)]:{display:"flex",justifyContent:"center",marginBottom:i.spacing(1)},["& .".concat(J.profile)]:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:i.spacing(2)},["& .".concat(J.avatar)]:{marginBottom:i.spacing(1)},["& .".concat(J.name)]:{fontWeight:"bold"},["& .".concat(J.profession)]:{color:i.palette.text.secondary}}})),q=e=>{var i;let{review:t}=e;return console.log("reviewerProfilePic",t),(0,d.jsx)(V,{className:J.card,children:(0,d.jsxs)(A.A,{children:[(0,d.jsxs)(o.A,{className:J.profile,children:[(0,d.jsx)(O.A,{src:null!==t&&void 0!==t&&t.reviewerProfilePic?"".concat("https://sapthapadhimatrimony.in/backend","/").concat(null===(i=t.reviewerProfilePic)||void 0===i?void 0:i.path):"https://via.placeholder.com/150",className:J.avatar,sx:{width:"78px",height:"78px"}}),(0,d.jsx)(p.A,{className:J.name,children:t.reviewerName})]}),(0,d.jsx)(p.A,{variant:"body1",gutterBottom:!0,sx:{fontSize:{xs:"10px",sm:"12px",md:"14px",lg:"16px"},marginBottom:"10px"},children:t.reviewText}),(0,d.jsx)(o.A,{className:J.stars,children:Array.from({length:5}).map(((e,i)=>(0,d.jsx)(H.A,{style:{color:i<t.starRating?"gold":"black",fontSize:{xs:"15px",sm:"20px",md:"30px",lg:"40px"}}},i)))})]})})},Y="ReviewSection",K={root:"".concat(Y,"-root"),title:"".concat(Y,"-title"),moreButton:"".concat(Y,"-moreButton"),inputBox:"".concat(Y,"-inputBox"),ratingBox:"".concat(Y,"-ratingBox")},Z=(0,D.Ay)("div")((e=>{let{theme:i}=e;return{["&.".concat(K.root)]:{padding:i.spacing(4),backgroundColor:"#f5f5f5"}}})),X=()=>{JSON.parse(localStorage.getItem("userdata"));const{ref:e,inView:i}=(0,C.Wx)({threshold:.2}),t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.5}}},[r,l]=(0,a.useState)(""),[c,x]=(0,a.useState)(0),[g,u]=(0,a.useState)([]),{authInfo:f}=(0,s.d4)((e=>e.auth)),[b,y]=(0,a.useState)(!1);(0,a.useEffect)((()=>{(async()=>{try{const e=await L.A.get("/admin/list-reviews");u(e.data.reviews)}catch(e){console.error("Error fetching reviews:",e)}})()}),[b]);return(0,d.jsx)(Z,{className:K.root,children:(0,d.jsx)(N.A,{children:(0,d.jsxs)(T.P.div,{ref:e,initial:"hidden",animate:i?"visible":"hidden",variants:t,children:[(0,d.jsx)(p.A,{sx:{borderRadius:"0px 10px 0 10px",display:"flex",justifyContent:"center",marginInline:"auto",border:"1px solid black",width:{xs:"auto",sm:"300px",md:"526px"},fontSize:{xs:"25px",md:"40px"},fontFamily:"Cabin",color:"#e5026b",textAlign:"center",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"},variant:"h4",component:"div",children:"REVIEWS"}),(0,d.jsx)(o.A,{sx:{maxWidth:{xs:"98%",md:"100%"},paddingInline:{xs:"10px",sm:"15px",md:"25px"},overflow:"hidden",marginInline:"auto",marginTop:"20px",".slick-prev:before, .slick-next:before":{color:"black"},".slick-prev, .slick-next":{zIndex:1}},children:(0,d.jsx)(T.P.div,{initial:"hidden",animate:i?"visible":"hidden",variants:t,children:(0,d.jsx)(n.A,{dots:!0,infinite:!0,speed:500,slidesToScroll:1,autoplay:!0,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}],children:g.map(((e,i)=>(0,d.jsx)(q,{review:e},i)))})})}),f&&(0,d.jsxs)("div",{style:{width:"96%",margin:"auto",marginTop:"20px"},children:[(0,d.jsx)(m.A,{id:"review-text",label:"Write your review",variant:"outlined",fullWidth:!0,value:r,onChange:e=>l(e.target.value),multiline:!0,rows:3,sx:{marginBottom:"15px",backgroundColor:"white",border:"1px solid #ccc",borderRadius:"8px","&:hover":{borderColor:"#3f51b5"},"&.Mui-focused":{borderColor:"#3f51b5"},fontSize:{xs:"14px",sm:"16px",md:"18px"}}}),(0,d.jsxs)("div",{className:K.ratingBox,children:[(0,d.jsx)(p.A,{variant:"subtitle1",sx:{marginBottom:"10px",color:"black",fontWeight:"bold",fontSize:{xs:"24px",sm:"30px",md:"40px"}},children:"Rating:"}),(0,d.jsx)(G.A,{name:"star-rating",value:c,onChange:(e,i)=>x(i),sx:{fontSize:{xs:"2rem",sm:"2.5rem",md:"3rem"}}})]}),(0,d.jsx)(h.A,{variant:"contained",onClick:async()=>{try{let i=await L.A.post("/app/addReview",{reviewText:r,reviewerRole:"",starRating:c},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(null===f||void 0===f?void 0:f.token)}});var e;if(i.data)v().fire({icon:"success",title:"Congratulations!",text:null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.message});l(""),x(0),y(!b)}catch(i){i.response,v().fire({icon:"error",title:"Sorry! ...",text:"Something went wrong"})}},sx:{width:"100%",padding:"12px",borderRadius:"8px",fontSize:{xs:"14px",sm:"16px"},backgroundColor:"#ff4b42","&:hover":{backgroundColor:"#ba0a0a"}},children:"Submit Review"})]})]})})})};var $=t(6591);const _="Gallery",Q={root:"".concat(_,"-root"),card:"".concat(_,"-card"),media:"".concat(_,"-media")},ee=(0,D.Ay)("div")((e=>{let{theme:i}=e;return{["&.".concat(Q.root)]:{padding:i.spacing(4),backgroundColor:"#f5f5f5"},["& .".concat(Q.card)]:{margin:i.spacing(2),overflow:"hidden","&:hover":{"& $media":{transform:"scale(1.1)"}}},["& .".concat(Q.media)]:{height:200,transition:"transform 0.3s ease"}}})),ie=["images/galleryone.jpg","images/gallerytwo.jpg","images/gallerythree.jpg","images/galleryfour.jpg","images/galleryfifth.jpg","images/gallerysix.jpg"],te=()=>(0,d.jsxs)(ee,{className:Q.root,children:[(0,d.jsx)(o.A,{sx:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:(0,d.jsx)(p.A,{sx:{borderRadius:"0px 10px 0 10px",display:"flex",justifyContent:"center",marginInline:"auto",border:"1px solid black",width:{xs:"auto",sm:"300px",md:"526px"},fontSize:{xs:"25px",md:"40px"},fontFamily:"Cabin",color:"#e5026b",textAlign:"center",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"},variant:"h4",component:"div",children:"GALLERY"})}),(0,d.jsx)(N.A,{children:(0,d.jsx)(F.Ay,{container:!0,spacing:4,sx:{marginTop:"25px"},children:ie.map(((e,i)=>(0,d.jsx)(F.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,d.jsx)(j.A,{className:Q.card,children:(0,d.jsx)(w.A,{children:(0,d.jsx)($.A,{className:Q.media,image:e,title:"Image ".concat(i+1)})})})},i)))})})]}),ae=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(y,{}),(0,d.jsx)(x,{}),(0,d.jsx)(I,{}),(0,d.jsx)(P,{}),(0,d.jsx)(z,{}),(0,d.jsx)(E,{}),(0,d.jsx)(W,{}),(0,d.jsx)(X,{}),(0,d.jsx)(te,{})]})}}]);
//# sourceMappingURL=983.dec5ef1e.chunk.js.map