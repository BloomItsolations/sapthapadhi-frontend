"use strict";(self.webpackChunksapthapadhi=self.webpackChunksapthapadhi||[]).push([[639],{3782:(e,a,i)=>{i.d(a,{C:()=>r});let r=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua  Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia  Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]},6639:(e,a,i)=>{i.r(a),i.d(a,{default:()=>I});var r=i(899),n=i(6534),l=i(5043),o=i(9367),t=i(3003),s=i(5475),u=i(529),d=i(6240),m=i(310),h=i(64),c=i.n(h),p=i(3782),g=i(6446),x=i(8911),A=i(2110),y=i(5865),b=i(8903),j=i(5795),f=i(2143),C=i(1787),B=i(7392),v=i(1906),k=i(1216),S=i(761),N=i(4510),w=i(579);function I(){const e=(0,d.A)(),a=(0,t.wA)(),[i,h]=(0,l.useState)(!1),{loading:I,error:P,success:L}=(0,t.d4)((e=>e.auth));(0,l.useEffect)((()=>{L&&(c().fire({icon:"success",title:"Registration Successful",text:"You have successfully registered!"}),a((0,N.ET)())),P&&(c().fire({icon:"error",title:"Oops...",text:P}),a((0,N.ET)()))}),[L,P]);const T=(0,n.Wx)({initialValues:{firstName:"",lastName:"",phone:"",email:"",lookingFor:"",dateOfBirth:"",religion:"",country:"",password:"",gender:""},validationSchema:r.Ik({firstName:r.Yj().required("Frist Name is required"),lastName:r.Yj().required("Last Name is required"),email:r.Yj().email("Invalid email address"),phone:r.Yj().required("Phone is required").matches(/^[6-9]\d{9}$/,"Phone number must be exactly 10 digits and start with 6, 7, 8, or 9"),lookingFor:r.Yj().required("Looking For  is required"),dateOfBirth:r.Yj().required("Date Of Birth is required"),religion:r.Yj().required("religion is required"),country:r.Yj().required("Country is required"),password:r.Yj().required("Password is required"),gender:r.Yj().required("Gender is required")}),onSubmit:e=>{a((0,N.ET)()),a((0,N.TU)(e))}}),{values:z,handleChange:M,handleSubmit:q,handleBlur:F,touched:G,errors:Y}=T;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o.mg,{children:(0,w.jsx)("title",{children:" Register | sapthapadhi "})}),(0,w.jsx)(g.A,{sx:{...(0,S.ab)({color:(0,m.X4)(e.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",paddingY:1},children:(0,w.jsx)(x.A,{alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,w.jsxs)(A.A,{sx:{p:4,width:1,maxWidth:1024},children:[(0,w.jsx)(g.A,{sx:{textAlign:"center",margin:0,padding:0},children:(0,w.jsx)(u.A,{})}),(0,w.jsx)(y.A,{variant:"h4",paddingY:1,textAlign:"center",sx:{color:e=>e.palette.primary.main},children:"Create a Matrimony Profile"}),(0,w.jsxs)(g.A,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:1,py:1},children:[(0,w.jsxs)(y.A,{variant:"body2",textAlign:"center",children:["Already have an Account?"," "]}),(0,w.jsx)(s.N_,{to:"/login",variant:"subtitle2",className:"text-red-600",children:"Login here."})]}),(0,w.jsxs)(g.A,{component:"form",sx:{py:2},onSubmit:q,children:[(0,w.jsxs)(b.Ay,{container:!0,spacing:2,children:[(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsx)(j.A,{fullWidth:!0,size:"medium",InputLabelProps:{shrink:!0},name:"firstName",label:"First Name",autoComplete:"firstName",value:z.firstName,onChange:M,onBlur:F,error:G.firstName&&Boolean(Y.firstName),helperText:G.firstName&&Y.firstName})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsx)(j.A,{fullWidth:!0,size:"medium",InputLabelProps:{shrink:!0},name:"lastName",label:"Last Name",autoComplete:"lastName",value:z.lastName,onChange:M,onBlur:F,error:G.lastName&&Boolean(Y.lastName),helperText:G.lastName&&Y.lastName})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsx)(j.A,{fullWidth:!0,size:"medium",InputLabelProps:{shrink:!0},name:"email",label:"Email",autoComplete:"current-email",value:z.email,onChange:M,onBlur:F,error:G.email&&Boolean(Y.email),helperText:G.email&&Y.email})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsx)(j.A,{fullWidth:!0,size:"medium",InputLabelProps:{shrink:!0},name:"phone",label:"Phone Number",autoComplete:"current-mobile-number",value:z.phone,onChange:M,onBlur:F,error:G.phone&&Boolean(Y.phone),helperText:G.phone&&Y.phone})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsxs)(j.A,{fullWidth:!0,select:!0,size:"medium",InputLabelProps:{shrink:!0},name:"lookingFor",label:"Looking For",autoComplete:"lookingFor",value:z.lookingFor,onChange:M,onBlur:F,error:G.lookingFor&&Boolean(Y.lookingFor),helperText:G.lookingFor&&Y.lookingFor,children:[(0,w.jsx)(f.A,{value:"",children:"Select your Preference"}),(0,w.jsx)(f.A,{value:"men",children:"Men"}),(0,w.jsx)(f.A,{value:"women",children:"Women"}),(0,w.jsx)(f.A,{value:"All",children:"All"})]})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsxs)(j.A,{fullWidth:!0,select:!0,size:"medium",InputLabelProps:{shrink:!0},name:"gender",label:"Gender",autoComplete:"gender",value:z.gender,onChange:M,onBlur:F,defaultValue:"",error:G.gender&&Boolean(Y.gender),helperText:G.gender&&Y.gender,children:[(0,w.jsx)(f.A,{value:"",children:"Select Your Gender "}),["male","female","others"].map((e=>(0,w.jsx)(f.A,{value:e,children:e})))]})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsx)(j.A,{fullWidth:!0,size:"medium",type:"date",InputLabelProps:{shrink:!0},name:"dateOfBirth",label:"Date Of Birth",autoComplete:"tel",value:z.dateOfBirth,onChange:M,onBlur:F,error:G.dateOfBirth&&Boolean(Y.dateOfBirth),helperText:G.dateOfBirth&&Y.dateOfBirth})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsxs)(j.A,{fullWidth:!0,select:!0,size:"medium",InputLabelProps:{shrink:!0},name:"religion",label:"Religion",autoComplete:"religion",value:z.religion,onChange:M,onBlur:F,defaultValue:"",error:G.religion&&Boolean(Y.religion),helperText:G.religion&&Y.religion,children:[(0,w.jsx)(f.A,{value:"",children:"Select Your Religion "}),["Hinduism","Sikhism","Christianity","Jainism","Islam","Judaism","Buddhism","Shinto","Confucianism","Zoroastrianism","Others"].map((e=>(0,w.jsx)(f.A,{value:e,children:e})))]})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,sm:6,children:(0,w.jsxs)(j.A,{fullWidth:!0,size:"medium",select:!0,InputLabelProps:{shrink:!0},name:"country",label:"Country",autoComplete:"country",value:z.country,onChange:M,onBlur:F,error:G.country&&Boolean(Y.country),helperText:G.country&&Y.country,children:[(0,w.jsx)(f.A,{value:"",children:"Select Your Country "}),null===p.C||void 0===p.C?void 0:p.C.map((e=>(0,w.jsx)(f.A,{value:e,children:e})))]})}),(0,w.jsx)(b.Ay,{item:!0,xs:12,children:(0,w.jsx)(j.A,{fullWidth:!0,size:"medium",InputLabelProps:{shrink:!0},name:"password",label:"Password",placeholder:"Password",value:z.password,onChange:M,sx:{input:{color:e.palette.text.primary},color:e.palette.text.primary},onBlur:F,autoComplete:"current-password",type:i?"Text":"password",error:G.password&&Boolean(Y.password),helperText:G.password&&Y.password,InputProps:{endAdornment:(0,w.jsx)(C.A,{position:"end",children:(0,w.jsx)(B.A,{onClick:()=>h(!i),edge:"end",children:(0,w.jsx)(k.A,{icon:i?"eva:eye-fill":"eva:eye-off-fill"})})})}})})]}),(0,w.jsx)(v.A,{sx:{color:e.palette.common.white,marginTop:"10px",fontSize:{xs:"2.8rem",sm:"2.8rem",md:"1.5rem"},backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.main}},fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",disabled:I,children:I?"loading ...":"Join Now"})]}),P?(0,w.jsxs)(y.A,{variant:"body1",color:"error",sx:{my:2},textAlign:"center",children:["Error : ",P]}):L?(0,w.jsxs)(y.A,{variant:"body1",color:"primary",sx:{my:2},textAlign:"center",children:[L,"."]}):null]})})})]})}}}]);
//# sourceMappingURL=639.49d5f859.chunk.js.map