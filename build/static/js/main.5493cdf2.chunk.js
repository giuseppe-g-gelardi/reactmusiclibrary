(this.webpackJsonpmusiclibrary=this.webpackJsonpmusiclibrary||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(22),c=a.n(r),i=a(91),o=a(10),l=a(16),s=a(254),u=a(255),d=a(36),j=a.n(d),b=a(51),h=a(52),p=a.n(h),f=a(256),g=a(230),m=a(249),O=a(240),x=a(242),v=a(243),y=a(247),w=a(261),k=a(244),S=a(245),C=a(68),B=a(246),M=a(82),N=a.n(M),W=a(259),A=a(237),T=a(239),z=a(172),D=a(1),q=Object(g.a)((function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}}));var L=a(7),R=a(258),I={ActionButton:function(e){var t=e.color,a=e.children,n=e.onClick,r=q();return Object(D.jsx)(z.a,{className:"".concat(r.root," ").concat(r[t]),onClick:n,children:a})},MuiSwitch:Object(L.a)(R.a)((function(e){var t=e.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}))},P=a(238),G=Object(g.a)((function(e){return{dialogWrapper:{padding:e.spacing(2),position:"absolute",top:e.spacing(5)},DialogTitle:{paddingRight:"0px"},text:{color:"#bd93f9"}}}));function V(e){var t=e.title,a=e.children,n=e.openPopup,r=e.setOpenPopup,c=G();return Object(D.jsxs)(W.a,{open:n,maxWidth:"md",classes:{paper:c.dialogWrapper},children:[Object(D.jsx)(A.a,{className:c.DialogTitle,children:Object(D.jsxs)("div",{style:{display:"flex"},children:[Object(D.jsx)(C.a,{variant:"h6",component:"div",className:c.text,style:{flexGrow:1},children:t}),Object(D.jsx)(I.ActionButton,{color:"secondary",onClick:function(){r(!1)},children:Object(D.jsx)(P.a,{})})]})}),Object(D.jsx)(T.a,{dividers:!0,children:a})]})}var E=Object(g.a)({field:{marginTop:20,marginBottom:20,display:"block",input:{"&::placeholder":{color:"red"}}},text:{marginTop:20,marginBottom:20,display:"block",color:"#bd93f9"}});function F(e){var t=e.song,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),u=s[0],d=s[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),m=g[0],x=g[1],v=Object(n.useState)(""),y=Object(o.a)(v,2),w=y[0],k=y[1],S=Object(n.useState)(""),C=Object(o.a)(S,2),B=C[0],M=C[1],W=E(),A=t.id.toString(),T=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:c,album:u,artist:m,genre:w,releaseDate:B},e.prev=1,e.next=4,p.a.put("http://localhost:8000/songs/".concat(A),t).then((function(e){console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(D.jsx)(O.a,{children:Object(D.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:T,children:[Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return i(e.target.value)},className:W.field,label:"Song title",placeholder:c,variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return x(e.target.value)},className:W.field,label:"Artist Name",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return d(e.target.value)},className:W.field,label:"Album Title",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return k(e.target.value)},className:W.field,label:"Genre",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return M(e.target.value)},className:W.field,label:"Release Date",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(z.a,{type:"submit",color:"secondary",variant:"contained",endIcon:Object(D.jsx)(N.a,{}),children:"Update Song"})]})})}function U(e){var t=e.song,a=e.handleDelete,r=Object(n.useState)(!1),c=Object(o.a)(r,2),i=c[0],l=c[1];return Object(D.jsxs)("div",{children:[Object(D.jsxs)(x.a,{elevation:3,children:[Object(D.jsx)(v.a,{avatar:Object(D.jsx)(w.a,{children:t.artist[0]}),action:Object(D.jsxs)(k.a,{variant:"contained",children:[Object(D.jsx)(S.a,{onClick:function(){return l(!0)},children:Object(D.jsx)(N.a,{style:{color:"#89ddff"}})}),Object(D.jsx)(S.a,{onClick:function(){return a(t.id)},children:Object(D.jsx)(B.a,{style:{color:"#f07178"}})})]}),title:t.title,subheader:t.artist}),Object(D.jsx)(y.a,{children:Object(D.jsxs)(C.a,{variant:"body2",color:"textSecondary",children:["Album: ",t.album," ",Object(D.jsx)("br",{}),"Release Date: ",t.releaseDate]})})]}),Object(D.jsx)(V,{title:"Edit song...",openPopup:i,setOpenPopup:l,children:Object(D.jsx)(F,{song:t})})]})}var J=a(248),X=a(119),H=a.n(X),Q=Object(g.a)({field:{marginTop:10,marginBottom:10,display:"block"},text:{marginTop:10,marginBottom:10,display:"block"}});function Y(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),h=d[0],g=d[1],m=Object(n.useState)(""),x=Object(o.a)(m,2),v=x[0],y=x[1],w=Object(n.useState)(""),k=Object(o.a)(w,2),S=k[0],C=k[1],B=Q(),M=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:a,album:l,artist:h,genre:v,releaseDate:S},e.prev=2,e.next=5,p.a.post("http://localhost:8000/songs",n).then((function(){return N()}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){window.location.reload()};return Object(D.jsx)(O.a,{children:Object(D.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:M,children:[Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return r(e.target.value)},className:B.field,label:"Song title",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return g(e.target.value)},className:B.field,label:"Artist Name",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return s(e.target.value)},className:B.field,label:"Album Title",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return y(e.target.value)},className:B.field,label:"Genre",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(f.a,{style:{marginBottom:20},onChange:function(e){return C(e.target.value)},className:B.field,label:"Release Date",variant:"outlined",fullWidth:!0,required:!0}),Object(D.jsx)(z.a,{type:"submit",color:"primary",variant:"contained",endIcon:Object(D.jsx)(H.a,{}),children:"Submit song!"})]})})}var K=Object(g.a)({field:{marginTop:20,marginBottom:20},text:{marginTop:20,marginBottom:20,display:"block"}});function Z(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),l=i[0],s=i[1],u=K(),d=Object(n.useState)(!1),h=Object(o.a)(d,2),g=h[0],x=h[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:8000/songs").then((function(e){s(e.data)}),(function(e){console.log(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("http://localhost:8000/songs/".concat(t));case 3:v(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:a=l.filter((function(e){return e.id!==t})),s(a);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsxs)(O.a,{children:[Object(D.jsxs)(O.a,{className:u.field,style:{display:"flex",marginTop:"75px"},children:[Object(D.jsx)(f.a,{style:{flexGrow:1},label:"Filter songs...",className:u.text,variant:"outlined",onChange:function(e){r(e.target.value)}}),Object(D.jsx)(z.a,{color:"primary",variant:"contained",endIcon:Object(D.jsx)(J.a,{}),onClick:function(){return x(!0)},children:"Add Song"})]}),Object(D.jsx)(O.a,{className:u.field}),Object(D.jsx)(m.a,{container:!0,spacing:3,children:l.filter((function(e,t){for(var n="",r=0,c=Object.entries(e);r<c.length;r++){var i=c[r];n+="".concat(i,"\t")}return""===a||n.toLowerCase().includes(a.toLowerCase())?e:void 0})).map((function(e,t){return Object(D.jsx)(m.a,{item:!0,sx:12,md:6,lg:4,children:Object(D.jsx)(U,{song:e,handleDelete:y})},e.id)}))}),Object(D.jsx)(V,{title:"Add a new song!",openPopup:g,setOpenPopup:x,children:Object(D.jsx)(Y,{})})]})}var $=a(48),_=a(252),ee=a(253),te=a(257),ae=a(250),ne=a(251),re=Object(g.a)((function(e){return{page:{width:"100%",padding:e.spacing(3)},root:{display:"flex"},title:{flexGrow:1,padding:e.spacing(2)},date:{flexGrow:1},toolbar:e.mixins.toolbar}}));function ce(e){var t=re(),a=e.children,n=e.check,r=e.change;function c(e){var t=e.children,a=e.window,n=Object(ae.a)({target:a?a():void 0});return Object(D.jsx)(ne.a,{appear:!1,direction:"down",in:!n,children:t})}return Object(D.jsxs)("div",{className:t.root,children:[Object(D.jsx)(c,Object($.a)(Object($.a)({},e),{},{children:Object(D.jsx)(_.a,{position:"fixed",color:"inherit",children:Object(D.jsxs)(ee.a,{children:[Object(D.jsx)(C.a,{variant:"h5",className:t.title,children:"Welcome to the Music Library"}),Object(D.jsxs)(C.a,{className:t.date,children:["Today is ",Object(te.a)(new Date,"MMMM do, Y")]}),Object(D.jsx)(I.MuiSwitch,{onChange:r,checked:n})]})})})),Object(D.jsxs)("div",{className:t.page,children:[Object(D.jsx)("div",{className:t.toolbar}),a]})]})}var ie=a(120),oe=Object(ie.a)({typography:{fontFamily:"Quicksand",fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700}}),le=Object(ie.a)(Object($.a)(Object($.a)({},oe),{},{palette:{type:"light"}})),se=Object(ie.a)(Object($.a)(Object($.a)({},oe),{},{palette:{type:"dark"},components:{MuiTextField:{color:"#fff",inputLabelProps:{color:"#fff"}}}}));function ue(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=a?se:le;return Object(D.jsxs)(s.a,{theme:c,children:[Object(D.jsx)(u.a,{}),Object(D.jsx)(ce,{check:a,change:function(){return r(!a)},children:Object(D.jsx)(l.c,{children:Object(D.jsx)(l.a,{path:"/",element:Object(D.jsx)(Z,{})})})})]})}a(168);c.a.render(Object(D.jsx)(i.a,{children:Object(D.jsx)(ue,{})}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.5493cdf2.chunk.js.map