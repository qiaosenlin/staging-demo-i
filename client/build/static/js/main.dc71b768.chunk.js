(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,a,t){e.exports={card:"Search_card__1-u3J",cardBorder:"Search_cardBorder__1pxhw",information:"Search_information__EhAyW",addMargin:"Search_addMargin__VFqdx",centerGrid:"Search_centerGrid__1ZpdD",root:"Search_root__3W8Ha",submit:"Search_submit__dOq_R",backdrop:"Search_backdrop__1QAJx",form:"Search_form__3I7DF"}},154:function(e,a,t){e.exports=t(275)},18:function(e,a,t){e.exports={toolbar:"PageTemplate_toolbar__9yfJk",toolbarIcon:"PageTemplate_toolbarIcon__2xFKh",root:"PageTemplate_root__3Syj2",menuButton:"PageTemplate_menuButton__8M2Dl",container:"PageTemplate_container__1atib",backdrop:"PageTemplate_backdrop__2Hs4q",form:"PageTemplate_form__bAET8",title:"PageTemplate_title__UyuRo",content:"PageTemplate_content__ZYtqy",reset:"PageTemplate_reset__3mXcy",confirm:"PageTemplate_confirm__3j5tO"}},275:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),o=t.n(c),l=t(11),i=t.n(l),s=t(17),u=t(7),m=t(50),d=t(16),p=t(315),h=t(318),b=t(343),f=t(319),g=t(320),E=t(41),v=t(342),k=t(323),y=t(324),x=Object(n.createContext)(null),S=t(15),j=t.n(S),O=t(35),_=t.n(O),w=function(){var e=Object(d.f)(),a=Object(n.useContext)(x).setUserData,t=Object(n.useState)(""),c=Object(u.a)(t,2),o=c[0],l=c[1],m=Object(n.useState)(""),S=Object(u.a)(m,2),O=S[0],w=S[1],C=Object(n.useState)(""),N=Object(u.a)(C,2),D=N[0],P=N[1],I=Object(n.useState)(""),A=Object(u.a)(I,2),B=A[0],M=A[1],T=function(){var t=Object(s.a)(i.a.mark((function t(n){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={username:o,password:D},"/api/auth/login",t.next=5,j.a.post("/api/auth/login",r);case 5:"fail"===(c=t.sent).data.status?(w(c.data.message),M(c.data.message)):(a(c.data),localStorage.setItem("auth-token",c.data.token),e.push("/"));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:_.a.background},r.a.createElement(p.a,null),r.a.createElement(h.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(b.a,{width:"70vh",boxShadow:1},r.a.createElement(f.a,{className:_.a.paper},r.a.createElement(g.a,null,r.a.createElement(E.a,{component:"h1",variant:"h5"},"Login"),r.a.createElement("form",{className:_.a.form,onSubmit:T},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",error:O.length>0,helperText:O,value:o,onChange:function(e){var a=e.target.value;l(a)}}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:B.length>0,helperText:B,value:D,onChange:function(e){var a=e.target.value;P(a)}}),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:_.a.submit},"Login"))),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(h.a,{item:!0},r.a.createElement(y.a,{href:"/register",variant:"body2"},"Need an account?"))))))))},C=function(){var e=Object(d.f)(),a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)(""),m=Object(u.a)(l,2),x=m[0],S=m[1],O=Object(n.useState)(""),w=Object(u.a)(O,2),C=w[0],N=w[1],D=Object(n.useState)(""),P=Object(u.a)(D,2),I=P[0],A=P[1],B=function(){var a=Object(s.a)(i.a.mark((function a(t){var n,r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),x||I){a.next=8;break}return n={username:c,password:C},"/api/auth/register",a.next=6,j.a.post("/api/auth/register",n);case 6:"fail"===(r=a.sent).data.status?r.data.type?"username"===r.data.type?S(r.data.message):"password"===r.data.type&&A(r.data.message):(A(r.data.message),S(r.data.message)):e.push("/login");case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:_.a.background},r.a.createElement(p.a,null),r.a.createElement(h.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(b.a,{width:"70vh",boxShadow:1},r.a.createElement(f.a,{className:_.a.paper},r.a.createElement(g.a,null,r.a.createElement(E.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:_.a.form,onSubmit:B},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",error:x.length>0,helperText:x,value:c,onChange:function(e){var a=e.target.value;o(a),a.length<4||a.length>15?S("Username must be between 4 and 15 characters."):S("")}}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",error:I.length>0,helperText:I,value:C,onChange:function(e){var a=e.target.value;N(a),a.length<6||a.length>20?A("Password must be between 6 and 20 characters."):A("")}}),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:_.a.submit},"Register"))),r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(h.a,{item:!0},r.a.createElement(y.a,{href:"/login",variant:"body2"},"Already have an account?"))))))))},N=t(131),D=t(18),P=t.n(D),I=t(3),A=t(339),B=t(340),M=t(330),T=t(346),U=t(341),H=t(322),q=t(138),G=t.n(q),W=t(139),J=t.n(W),L=t(325),R=t(326),F=t(327),$=t(132),K=t.n($),V=t(133),Y=t.n(V),Z=t(134),z=t.n(Z),X=function(e){var a=e.currentPage,t=e.setCurrentPage;return r.a.createElement("div",null,r.a.createElement(L.a,{button:!0,selected:"dashboard"===a,onClick:function(e){e.preventDefault(),t("dashboard")}},r.a.createElement(R.a,null,r.a.createElement(K.a,null)),r.a.createElement(F.a,{primary:"Dashboard"})),r.a.createElement(L.a,{button:!0,selected:"search"===a,onClick:function(e){e.preventDefault(),t("search")}},r.a.createElement(R.a,null,r.a.createElement(Y.a,null)),r.a.createElement(F.a,{primary:"Search"})),r.a.createElement(L.a,{button:!0,selected:"news"===a,onClick:function(e){e.preventDefault(),t("news")}},r.a.createElement(R.a,null,r.a.createElement(z.a,null)),r.a.createElement(F.a,{primary:"Market News"})))},Q=t(135),ee=t.n(Q),ae=t(136),te=t.n(ae),ne=function(e){var a=e.logout,t=e.openSettings;return r.a.createElement("div",null,r.a.createElement(L.a,{button:!0,onClick:t},r.a.createElement(R.a,null,r.a.createElement(ee.a,null)),r.a.createElement(F.a,{primary:"Settings"})),r.a.createElement(L.a,{button:!0,onClick:a},r.a.createElement(R.a,null,r.a.createElement(te.a,null)),r.a.createElement(F.a,{primary:"Log Out"})))},re=t(336),ce=t(328),oe=function(e){return r.a.createElement(E.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)},le=t(80),ie=function(e){var a=e.pastDataPeriod,t=e.stockInfo,n=e.duration;return a.length>0?r.a.createElement(le.Line,{data:{labels:a.map((function(e,a){return function(e){var a=new Date(e),t=""+(a.getMonth()+1),n=""+a.getDate();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[t,n].join("-")}(e.date)})),datasets:[{data:a.map((function(e){return e.adjClose})),label:"Price",borderColor:"rgba(0, 0, 255, 0.5)",fill:!0,backgroundColor:"rgba(116, 185, 255, 0.2)"}]},options:{maintainAspectRatio:!1,elements:{point:{radius:2}},legend:{display:!1},layout:{padding:{left:20,right:20,top:15,bottom:0}},title:{display:!0,text:"Stock price of ".concat(t.ticker," over the past ").concat(n),position:"bottom"},animation:{duration:2e3}}}):null},se=(t(28),t(331),t(335),t(334),t(332),t(333),t(329)),ue=t(40),me=t(53),de=t.n(me),pe=Object(re.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:350}}})),he=function(e){e.purchasedStocks;var a=pe();Object(I.a)(a.paper,a.fixedHeight);return r.a.createElement(ce.a,{maxWidth:"lg",className:P.a.container},"Hello!!!!! Test!!!!!",r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12,md:8,lg:9}),r.a.createElement(h.a,{item:!0,xs:12,md:4,lg:3}),r.a.createElement(h.a,{item:!0,xs:12})))},be=t(338),fe=t(337),ge=Object(re.a)((function(e){return{appBarSpacer:e.mixins.toolbar,icon:{marginRight:e.spacing(2)},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},card:{height:"100%",display:"flex",flexDirection:"column"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}})),Ee=function(e){var a=e.loading;return r.a.createElement("div",null,r.a.createElement(E.a,{gutterBottom:!0,align:"center"},a),r.a.createElement("br",null),r.a.createElement(h.a,{container:!0,spacing:4},Array.from(new Array(6)).map((function(e,a){return r.a.createElement(h.a,{item:!0,key:a,xs:12,sm:6,md:4},r.a.createElement(b.a,{key:a,width:210,marginRight:.5},r.a.createElement(fe.a,{variant:"rect",width:300,height:200}),r.a.createElement(b.a,{pt:.5},r.a.createElement(fe.a,null),r.a.createElement(fe.a,{width:"60%"}))))}))))},ve=function(e){var a=e.cards,t=e.classes;return r.a.createElement(h.a,{container:!0,spacing:4},a.map((function(e){return r.a.createElement(h.a,{item:!0,key:e.id,xs:12,sm:6,md:4},r.a.createElement(f.a,{className:t.card},r.a.createElement(y.a,{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(be.a,{className:t.cardMedia,image:e.image,title:e.headline})),r.a.createElement(g.a,{className:t.cardContent},r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",component:"h4"},e.headline))))})))},ke=function(){var e=ge(),a=Object(n.useState)([]),t=Object(u.a)(a,2),c=t[0],o=t[1],l=Object(n.useState)("Loading..."),m=Object(u.a)(l,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/news",e.next=3,j.a.get("/api/news");case 3:(a=e.sent).data.data.length>0&&"success"===a.data.status?(t=a.data.data.slice(0,9),o(t)):p("Sorry, we couldn't load any articles from our provider. Please try again later!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(ce.a,{className:e.cardGrid},0===c.length?r.a.createElement(Ee,{loading:d}):r.a.createElement(ve,{cards:c,classes:e}))},ye=t(349),xe=t(344),Se=function(e){var a=e.sixMonthAverages,t=e.stockInfo,n=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];return a?r.a.createElement(le.Bar,{data:{labels:a.map((function(e){var a=e.month;return n[a]})),datasets:[{label:"Price",backgroundColor:"rgba(0, 0, 255, 0.3)",data:a.map((function(e){return e.value}))}]},options:{maintainAspectRatio:!1,title:{display:!0,text:"Average closing price per month of ".concat(t.ticker," over the past 6 months"),position:"bottom"},layout:{padding:{left:10,right:10,top:15,bottom:0}},scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},animation:{duration:2e3}}}):null},je=t(12),Oe=t.n(je),_e=function(e){var a=e.text;return r.a.createElement(E.a,{variant:"body1",color:"inherit",align:"center",display:"block"},a)},we=function(e){var a=e.text;return r.a.createElement(E.a,{variant:"body2",color:"inherit",align:"center",display:"block"},a)},Ce=function(e){var a=e.stockInfo,t=e.price;return r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12,component:f.a,className:Object(I.a)(Oe.a.card,Oe.a.cardBorder)},r.a.createElement(g.a,null,r.a.createElement(oe,null,a.name),r.a.createElement(E.a,{variant:"body2"},a.description),r.a.createElement(h.a,{container:!0,spacing:3,className:Oe.a.addMargin},r.a.createElement(h.a,{item:!0,sm:3,xs:4,className:Oe.a.centerGrid},r.a.createElement("div",{className:Oe.a.information},r.a.createElement(_e,{text:"Stock Symbol:"}),r.a.createElement(we,{text:a.ticker}))),r.a.createElement(h.a,{item:!0,sm:3,xs:4,className:Oe.a.centerGrid},r.a.createElement("div",{className:Oe.a.information},r.a.createElement(_e,{text:"Current Price:"}),r.a.createElement(we,{text:t}))),r.a.createElement(h.a,{item:!0,sm:3,xs:4,className:Oe.a.centerGrid},r.a.createElement("div",{className:Oe.a.information},r.a.createElement(_e,{text:"Exchange:"}),r.a.createElement(we,{text:a.exchangeCode})))))))},Ne=function(e){var a=e.pastDay;return r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:!0,sm:!0,component:f.a,className:Oe.a.card},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Opening:"),r.a.createElement(E.a,{variant:"h6",align:"center"},"$",a.adjOpen)),r.a.createElement(h.a,{item:!0,xs:!0,sm:!0,component:f.a,className:Oe.a.card},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"High:"),r.a.createElement(E.a,{variant:"h6",align:"center"},"$",a.adjHigh)),r.a.createElement(h.a,{item:!0,xs:!0,sm:!0,component:f.a,className:Oe.a.card},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Low:"),r.a.createElement(E.a,{variant:"h6",align:"center"},"$",a.adjLow)),r.a.createElement(h.a,{item:!0,xs:!0,sm:!0,component:f.a,className:Oe.a.card},r.a.createElement(E.a,{color:"textSecondary",align:"center"},"Closing:"),r.a.createElement(E.a,{variant:"h6",align:"center"},"$",a.adjClose)))},De=function(e){var a=e.setSelected,t=e.balance;return r.a.createElement(h.a,{item:!0,xs:12,sm:!0,component:f.a,className:Oe.a.card},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{color:"textSecondary",align:"center",className:Oe.a.addMargin},"Your Cash Balance:"),r.a.createElement(E.a,{variant:"h6",align:"center"},t?"$"+t.toLocaleString():"Balance Unavailable"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"body2",align:"center",className:Oe.a.addMargin},"You have sufficient funds to buy this stock."),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:Oe.a.submit,onClick:function(){return a(!0)}},"Open Purchase System")))},Pe=t(140),Ie=function(e){var a=e.setSelected,t=e.stockInfo,c=e.pastDay,o=e.setPurchasedStocks,l=e.purchasedStocks,m=Object(n.useContext)(x),d=m.userData,p=m.setUserData,y=Object(n.useState)(1),S=Object(u.a)(y,2),O=S[0],_=S[1],w=Object(n.useState)(Number(c.adjClose)),C=Object(u.a)(w,2),N=C[0],D=C[1],P=function(){var e=Object(s.a)(i.a.mark((function e(n){var r,s,u,m,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={"x-auth-token":d.token},s={userId:d.user.id,ticker:t.ticker,quantity:Number(O),price:c.adjClose},"/api/stock",e.next=6,j.a.post("/api/stock",s,{headers:r});case 6:"success"===(u=e.sent).data.status?(p({token:d.token,user:u.data.user}),a(!1),m={id:u.data.stockId,ticker:t.ticker,name:t.name,purchasePrice:c.adjClose,purchaseDate:new Date,quantity:Number(O),currentDate:new Date,currentPrice:c.adjClose},h=[].concat(Object(Pe.a)(l),[m]),o(h)):console.log("Couldn't purchase stock.");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(h.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(b.a,{width:"60vh",boxShadow:1},r.a.createElement(f.a,{className:Oe.a.paper},r.a.createElement(se.a,{action:r.a.createElement(M.a,{"aria-label":"Close",onClick:function(e){a(!1)}},r.a.createElement(de.a,null))}),r.a.createElement(g.a,null,r.a.createElement(E.a,{component:"h1",variant:"h6",align:"center"},"Purchase ",t.name," Stock"),r.a.createElement("form",{className:Oe.a.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement(v.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"stock",label:"Stock Name",name:"stock",autoComplete:"stock",value:t.name}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"price",label:"Stock Price",name:"price",autoComplete:"price",value:c.adjClose}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"quantity",label:"Quantity",name:"quantity",autoComplete:"quantity",value:O,onChange:function(e){if(!isNaN(e.target.value)){if(d.user.balance-Number(c.adjClose)*Number(e.target.value)<0)return;_(e.target.value),D(Math.round(100*(Number(c.adjClose)*Number(e.target.value)+Number.EPSILON))/100)}}}),r.a.createElement(E.a,{variant:"body2",align:"center",className:Oe.a.addMargin},"Total = $",N.toLocaleString()),r.a.createElement(E.a,{variant:"body2",align:"center"},"Cash Balance after purchase:"," ",d?"$"+(d.user.balance-N).toLocaleString():"Balance Unavailable"),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:Oe.a.submit,onClick:P},"Confirm"))),r.a.createElement("br",null),r.a.createElement("br",null)))))},Ae=function(e){var a=e.setSelected,t=e.stockInfo,n=e.pastDay,c=e.setPurchasedStocks,o=e.purchasedStocks;return r.a.createElement(ue.a.div,{className:Oe.a.backdrop,initial:{opacity:0},animate:{opacity:1},id:"backdrop"},r.a.createElement(ce.a,null,r.a.createElement(ue.a.div,{animate:{opacity:1,y:-20}},r.a.createElement(Ie,{stockInfo:t,pastDay:n,setSelected:a,setPurchasedStocks:c,purchasedStocks:o}))))},Be=Object(ye.a)(),Me=Object(re.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",marginBottom:"40px"}}})),Te=function(e){var a=e.pastDataPeriod,t=e.stockInfo,n=e.duration;return r.a.createElement(h.a,{item:!0,xs:12,sm:7,component:f.a,className:Oe.a.card,style:{minHeight:"350px"}},r.a.createElement(ie,{pastDataPeriod:a,stockInfo:t,duration:n}))},Ue=function(e){var a=e.sixMonthAverages,t=e.stockInfo;return r.a.createElement(h.a,{item:!0,xs:12,sm:!0,component:f.a,className:Oe.a.card},r.a.createElement(Se,{sixMonthAverages:a,stockInfo:t}))},He=function(e){var a=e.setPurchasedStocks,t=e.purchasedStocks,c=e.currentStock,o=Object(n.useContext)(x).userData,l=Object(n.useState)(!1),m=Object(u.a)(l,2),d=m[0],p=m[1],b=Object(n.useState)(void 0),f=Object(u.a)(b,2),g=f[0],E=f[1],v=Object(n.useState)(void 0),k=Object(u.a)(v,2),y=k[0],S=k[1],O=Object(n.useState)(void 0),_=Object(u.a)(O,2),w=_[0],C=_[1],N=Object(n.useState)(void 0),D=Object(u.a)(N,2),P=D[0],I=D[1],A=Object(n.useState)(void 0),B=Object(u.a)(A,2),M=B[0],T=B[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/api/data/prices/".concat(c.ticker),e.next=3,j.a.get(a);case 3:"success"===(t=e.sent).data.status&&E(t.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/api/data/prices/".concat(c.ticker,"/full"),e.next=3,j.a.get(a);case 3:"success"===(t=e.sent).data.status&&(S(t.data.sixMonthAverages),C(t.data.pastDay),I(t.data.pastMonth),T(t.data.pastTwoYears));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),r.a.createElement("div",{className:Oe.a.root},g&&w&&r.a.createElement(Ce,{stockInfo:g,price:w.adjClose}),y&&w&&P&&M&&r.a.createElement("div",null,r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(Te,{pastDataPeriod:M,stockInfo:g,duration:"2 years"}),r.a.createElement(Ue,{sixMonthAverages:y,stockInfo:g})),r.a.createElement(Ne,{pastDay:w}),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(De,{setSelected:p,balance:o.user.balance}),r.a.createElement(Te,{pastDataPeriod:P,stockInfo:g,duration:"month"})),d&&r.a.createElement(Ae,{stockInfo:g,pastDay:w,setSelected:p,setPurchasedStocks:a,purchasedStocks:t})))},qe=[{name:"Apple",ticker:"AAPL"},{name:"Amazon",ticker:"AMZN"},{name:"Google",ticker:"GOOG"},{name:"Microsoft",ticker:"MSFT"},{name:"Walmart",ticker:"WMT"},{name:"Intel",ticker:"INTC"},{name:"American Express",ticker:"AXP"},{name:"Boeing",ticker:"BA"},{name:"Cisco",ticker:"CSCO"},{name:"Goldman Sachs",ticker:"GS"},{name:"Johnson & Johnson",ticker:"JNJ"},{name:"Coca-Cola",ticker:"KO"},{name:"McDonald's",ticker:"MCD"},{name:"Nike",ticker:"NKE"},{name:"Procter & Gamble",ticker:"PG"},{name:"Verizon",ticker:"VZ"},{name:"Salesforce",ticker:"CRM"},{name:"Visa",ticker:"V"},{name:"UnitedHealth",ticker:"UNH"},{name:"IBM",ticker:"IBM"},{name:"Chevron",ticker:"CVX"}],Ge=function(e){var a=e.setPurchasedStocks,t=e.purchasedStocks,c=Me(),o=Object(n.useState)(null),l=Object(u.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)(null),d=Object(u.a)(m,2),p=d[0],h=d[1];return r.a.createElement(ce.a,{className:c.addMargin},r.a.createElement(xe.a,{value:i,onChange:function(e,a){s(a),h(a||null)},filterOptions:function(e,a){var t=Be(e,a);return p&&(t=t.slice(0,4)),t},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"stock-search-bar",options:qe,getOptionLabel:function(e){return e.name},renderOption:function(e){return e.name},style:{maxWidth:"700px",margin:"30px auto",marginBottom:"60px"},renderInput:function(e){return r.a.createElement(v.a,Object.assign({},e,{label:"Search for a stock",variant:"outlined"}))}}),p&&r.a.createElement(He,{setPurchasedStocks:a,purchasedStocks:t,currentStock:p}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))},We=function(e){var a=e.setSettingsOpen,t=Object(n.useContext)(x),c=t.userData,o=t.setUserData,l=Object(n.useState)(!1),m=Object(u.a)(l,2),d=m[0],p=m[1],y=function(){var e=Object(s.a)(i.a.mark((function e(a){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={"x-auth-token":c.token},n="/api/stock/".concat(c.user.id),e.next=5,j.a.delete(n,{headers:t});case 5:"success"===(r=e.sent).data.status&&(o({token:c.token,user:r.data.user}),window.location.reload());case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(h.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(b.a,{width:"60vh",boxShadow:1},r.a.createElement(f.a,null,r.a.createElement(se.a,{action:r.a.createElement(M.a,{"aria-label":"Close",onClick:function(){a(!1)}},r.a.createElement(de.a,null))}),r.a.createElement(g.a,null,r.a.createElement(E.a,{component:"h1",variant:"h6",align:"center"},"Settings"),r.a.createElement("form",{className:P.a.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement(v.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"Username",label:"Username",name:"Username",autoComplete:"Username",value:c.user.username}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",fullWidth:!0,disabled:!0,id:"balance",label:"Cash Balance",name:"balance",autoComplete:"balance",value:c.user.balance})),r.a.createElement("br",null),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:P.a.reset,onClick:function(){p(!0)}},"Reset My Account")),d&&r.a.createElement("div",null,r.a.createElement(E.a,{component:"p",variant:"caption",align:"center"},"This is a permanent change. If you are sure press Reset."),r.a.createElement(b.a,{display:"flex",justifyContent:"center"},r.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:P.a.reset,onClick:y},"Reset"),r.a.createElement(k.a,{type:"submit",variant:"contained",color:"primary",className:P.a.confirm,onClick:function(){p(!1)}},"Cancel"))),r.a.createElement("br",null),r.a.createElement("br",null)))))},Je=function(e){var a=e.setSettingsOpen;return r.a.createElement(ue.a.div,{className:P.a.backdrop,initial:{opacity:0},animate:{opacity:1},id:"backdrop"},r.a.createElement(ce.a,null,r.a.createElement(ue.a.div,{animate:{opacity:1,y:-20}},r.a.createElement(We,{setSettingsOpen:a}))))},Le=Object(re.a)((function(e){return{appBarSpacer:e.mixins.toolbar,appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(N.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)})}})),Re=function(){var e=Object(d.f)(),a=Le(),t=Object(n.useContext)(x),c=t.userData,o=t.setUserData,l=Object(n.useState)(!1),m=Object(u.a)(l,2),h=m[0],b=m[1],f=Object(n.useState)("dashboard"),g=Object(u.a)(f,2),v=g[0],k=g[1],y=Object(n.useState)(!1),S=Object(u.a)(y,2),O=S[0],_=S[1],w=Object(n.useState)([]),C=Object(u.a)(w,2),N=C[0],D=C[1];c.user||e.push("/login"),Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/api/stock/".concat(c.user.id),t={"x-auth-token":c.token},e.next=4,j.a.get(a,{headers:t});case 4:"success"===(n=e.sent).data.status&&D(n.data.stocks);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",{className:P.a.root},r.a.createElement(p.a,null),r.a.createElement(A.a,{position:"absolute",style:{background:"#2E3B55"},className:Object(I.a)(P.a.appBarBackground,a.appBar,h&&a.appBarShift)},r.a.createElement(B.a,{className:P.a.toolbar},r.a.createElement(M.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){b(!0)},className:Object(I.a)(P.a.menuButton,h&&P.a.menuButtonHidden)},r.a.createElement(G.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:P.a.title},"dashboard"===v&&"Dashboard","news"===v&&"Market News","search"===v&&"Search"),r.a.createElement(E.a,{color:"inherit"},"Hello,"," ",c.user.username?c.user.username.charAt(0).toUpperCase()+c.user.username.slice(1):""))),r.a.createElement(T.a,{variant:"permanent",classes:{paper:Object(I.a)(a.drawerPaper,!h&&a.drawerPaperClose)},open:h},r.a.createElement("div",{className:P.a.toolbarIcon},r.a.createElement(M.a,{onClick:function(){b(!1)}},r.a.createElement(J.a,null))),r.a.createElement(U.a,null),r.a.createElement(H.a,null,r.a.createElement(X,{currentPage:v,setCurrentPage:k})),r.a.createElement(U.a,null),r.a.createElement(H.a,null,r.a.createElement(ne,{logout:function(){o({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),e.push("/login")},openSettings:function(){_(!0)}}))),r.a.createElement("main",{className:P.a.content},r.a.createElement("div",{className:a.appBarSpacer}),"dashboard"===v&&r.a.createElement(he,{purchasedStocks:N}),"news"===v&&r.a.createElement(ke,null),"search"===v&&r.a.createElement(Ge,{setPurchasedStocks:D,purchasedStocks:N}),O&&r.a.createElement(Je,{setSettingsOpen:_})))},Fe=function(){return Object(d.f)().push("/"),r.a.createElement("h1",null,"Not Found!")};var $e=function(){var e=Object(n.useState)({token:void 0,user:void 0}),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(a=localStorage.getItem("auth-token"))){e.next=6;break}return localStorage.setItem("auth-token",""),a="",c({token:void 0,user:void 0}),e.abrupt("return");case 6:return t={"x-auth-token":a},e.next=9,j.a.post("/api/auth/validate",null,{headers:t});case 9:if(!e.sent.data){e.next=17;break}return e.next=13,j.a.get("/api/auth/user",{headers:t});case 13:n=e.sent,c({token:a,user:n.data}),e.next=18;break;case 17:c({token:void 0,user:void 0});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(m.a,null,r.a.createElement(x.Provider,{value:{userData:t,setUserData:c}},r.a.createElement("div",null,r.a.createElement(d.c,null,t.user?r.a.createElement(d.a,{path:"/",exact:!0,component:Re}):r.a.createElement(d.a,{path:"/",exact:!0,component:C}),r.a.createElement(d.a,{path:"/login",exact:!0,component:w}),r.a.createElement(d.a,{path:"/register",exact:!0,component:C}),r.a.createElement(d.a,{component:Fe})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($e,null)),document.getElementById("root"))},28:function(e,a,t){e.exports={positive:"Dashboard_positive__3qGJi",negative:"Dashboard_negative__1JCoi",depositContext:"Dashboard_depositContext__24xqR",addMargin:"Dashboard_addMargin__3UYCb"}},35:function(e,a,t){e.exports={paper:"Auth_paper__2b_Nv",form:"Auth_form__3SKNK",submit:"Auth_submit__R5grA",background:"Auth_background__lF8pe",gradient:"Auth_gradient__D4Abv"}}},[[154,1,2]]]);
//# sourceMappingURL=main.dc71b768.chunk.js.map