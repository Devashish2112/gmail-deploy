"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[736],{7444:(e,t,n)=>{n.d(t,{Fk:()=>o,Rb:()=>s,_3:()=>a});const a="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",o="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",s={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},9469:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(6213);const o=async(e,t,n)=>(0,a.A)({method:e.method,url:`/${e.endpoint}/${n}`,data:t});var s=n(5043);const i=e=>{const[t,n]=(0,s.useState)(null),[a,i]=(0,s.useState)(""),[r,d]=(0,s.useState)(!1);return{call:async function(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(null),i(""),d(!0);try{let a=await o(e,t,s);n(a.data)}catch(a){i(a.message)}finally{d(!1)}},response:t,error:a,isLoading:r}}},9736:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(5043),o=n(2108),s=n(7353),i=n(2314),r=n(5263),d=n(2559),l=n(3287),c=n(9484),p=n(746),m=n(4279),x=n(7871),h=n(8490),g=n(703),u=n(7444),f=n(579);const b=(0,o.Ay)(s.A)({background:"#EAF1FB",marginLeft:"80px",borderRadius:8,minWidth:"690px",maxWidth:"720px",height:48,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px","& > div":{width:"100%",padding:"0 10px"}}),j=(0,o.Ay)(s.A)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`,A=(0,o.Ay)(i.A)({background:"#F5F5F5",boxShadow:"none"}),y=e=>{let{toggleDrawer:t}=e;return(0,f.jsx)(A,{position:"static",children:(0,f.jsxs)(r.A,{children:[(0,f.jsx)(l.A,{color:"action",onClick:t}),(0,f.jsx)("img",{src:u._3,alt:"logo",style:{width:110,marginLeft:15}}),(0,f.jsxs)(b,{children:[(0,f.jsx)(c.A,{color:"action"}),(0,f.jsx)(d.Ay,{placeholder:"Search mail"}),(0,f.jsx)(p.A,{color:"action"})]}),(0,f.jsxs)(j,{children:[(0,f.jsx)(m.A,{color:"action"}),(0,f.jsx)(x.A,{color:"action"}),(0,f.jsx)(h.A,{color:"action"}),(0,f.jsx)(g.A,{color:"action"})]})]})})};var v=n(4109),w=n(286),S=n(1906),k=n(5721),D=n(1322),E=n(1418),F=n(4252),C=n(1084),T=n(5837),B=n(5069),O=n(7289);const P=[{name:"inbox",title:"Inbox",icon:E.A},{name:"starred",title:"Starred",icon:F.A},{name:"sent",title:"Sent",icon:C.A},{name:"drafts",title:"Drafts",icon:T.A},{name:"bin",title:"Bin",icon:B.A},{name:"allmail",title:"All Mail",icon:O.A}];var M=n(1485),_=n(5865),H=n(425),R=n(3438),N=n(9469),z=n(3697);const I={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},L=(0,o.Ay)(s.A)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`,W=(0,o.Ay)(s.A)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`,$=(0,o.Ay)(s.A)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`,G=(0,o.Ay)(S.A)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`,J=e=>{let{openDialog:t,setOpenDialog:n}=e;const[o,s]=(0,a.useState)({}),i=(0,N.A)(z.y.saveSentEmail),r=(0,N.A)(z.y.saveDraftEmails),l={Host:"smtp.elasticemail.com",Username:"djgovind123@yopmail.com",Password:"04B50240AF16094B0335E88F38D5AEEFFEEB",Port:2525},c=e=>{s({...o,[e.target.name]:e.target.value})};return(0,f.jsxs)(M.A,{open:t,PaperProps:{sx:I},children:[(0,f.jsxs)(W,{children:[(0,f.jsx)(_.A,{children:"New Message"}),(0,f.jsx)(R.A,{fontSize:"small",onClick:e=>(e=>{e.preventDefault();const t={to:o.to,from:"devashishramola@gmail.com",subject:o.subject,body:o.body,date:new Date,image:"",name:"DJ GOVIND",starred:!1,type:"drafts"};r.call(t),r.error||(n(!1),s({}))})(e)})]}),(0,f.jsxs)(L,{children:[(0,f.jsx)(d.Ay,{placeholder:"Recipients",name:"to",onChange:e=>c(e)}),(0,f.jsx)(d.Ay,{placeholder:"Subject",name:"subject",onChange:e=>c(e)})]}),(0,f.jsx)(H.A,{multiline:!0,rows:18,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},onChange:e=>c(e),name:"body"}),(0,f.jsxs)($,{children:[(0,f.jsx)(G,{onClick:e=>(e=>{e.preventDefault(),window.Email&&window.Email.send({...l,To:o.to,From:"devashishramola@gmail.com",Subject:o.subject,Body:o.body}).then((e=>alert(e)));const t={to:o.to,from:"devashishramola@gmail.com",subject:o.subject,body:o.body,date:new Date,image:"",name:"DJ GOVIND",starred:!1,type:"sent"};i.call(t),i.error||(n(!1),s({})),n(!1)})(e),children:"send"}),(0,f.jsx)(B.A,{onClick:e=>n(!1)})]})]})};var V=n(2134),Y=n(9297);const U=(0,o.Ay)(S.A)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`,q=(0,o.Ay)(s.A)({padding:8,"& > ul":{padding:"10px 0 0 5px",fontSize:14,fontWeight:500,cursor:"pointer","& > a":{textDecoration:"none",color:"inherit"}},"& > ul > a > li > svg":{marginRight:20}}),K=()=>{const[e,t]=(0,a.useState)(!1),{type:n}=(0,V.g)();return(0,f.jsxs)(q,{children:[(0,f.jsxs)(U,{onClick:()=>{t(!0)},children:[(0,f.jsx)(w.A,{}),"Compose"]}),(0,f.jsx)(k.A,{children:P.map((e=>(0,f.jsx)(V.k2,{to:`${Y.J.emails.path}/${e.name}`,children:(0,f.jsxs)(D.Ay,{style:n===e.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,f.jsx)(e.icon,{fontSize:"small"}),e.title]})},e.name)))}),(0,f.jsx)(J,{openDialog:e,setOpenDialog:t})]})},Q=e=>{let{openDrawer:t}=e;return(0,f.jsx)(v.Ay,{anchor:"left",open:t,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,f.jsx)(K,{})})};var X=n(2912);const Z=()=>{const[e,t]=(0,a.useState)(!0);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(y,{toggleDrawer:()=>{t((e=>!e))}}),(0,f.jsxs)(s.A,{children:[(0,f.jsx)(Q,{openDrawer:e}),(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)(X.A,{}),children:(0,f.jsx)(V.sv,{context:{openDrawer:e}})})]})]})}},3697:(e,t,n)=>{n.d(t,{y:()=>a});const a={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=736.8e6003d8.chunk.js.map