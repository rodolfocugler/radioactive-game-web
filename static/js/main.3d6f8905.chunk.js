(this["webpackJsonpradioactive-game-web"]=this["webpackJsonpradioactive-game-web"]||[]).push([[0],{219:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),s=a.n(r),i=a(12),o=a.n(i),c=a(127),l=a(128);a(159);function u(){var e=Object(c.a)(["\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n}\nbody, html {\n  background: #eee;\n  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n  height: 100%;\n  width: 100%;\n}\n"]);return u=function(){return e},e}Object(l.a)(u());var d=a(46),h=a(143),p=a(14),m=a(142),j=a(28),g=a.n(j),b=a(39),x=a(50),f=a(51),O=a(54),v=a(53),w=a(263),y=a(275),S=a(6),C=a(262),M=a(265),k=a(277),N=a.p+"static/media/nuclear.272c3b9e.svg",I=function(e,t){for(var a=0;a<e.length;a++){var n=e[a](t);if(""!==n)return n}return""},E=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++){var n=t[a],r=e[n].validation,s=e[n].value;e[n].error=I(r,s)}return e},R=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++){if(""!==e[t[a]].error)return!1}return!0},B=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++){e[t[a]].value=""}return e},L=function(e){return e?"":"Preencha para continuar!"},T=a(132),W=a.n(T),V=a(90),q="TOKEN_KEY",A="TOKEN_EXPIRES_AT",P=function(){return localStorage.getItem(q)},F=function(e){var t=Object(V.a)(e);localStorage.setItem(q,e),localStorage.setItem(A,t.exp.toString())},H=function(){var e=Object(V.a)(localStorage.getItem(q));return{id:e.aud,email:e.sub,name:e.user,environment:e.environment,group:e.group}},D=a(133),G=a.n(D),_=W.a.create({baseURL:"https://radioactive-game.herokuapp.com"});_.interceptors.request.use(function(){var e=Object(b.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=P())&&(t.headers.Authorization="Bearer ".concat(a)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var z=_,J=a(78),U=function(){return Object(n.jsx)(J.a,{variant:"body2",color:"textSecondary",align:"center",children:"Copyright \xa9 "+(new Date).getFullYear()})},K=function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fields:{name:{value:"",error:"",validation:[L]},email:{value:"",error:"",validation:[L]},password:{value:"",error:"",validation:[L]}}},e.changeValue=function(t){var a=t.target.value,n=t.target.id,r=e.state.fields;r[n].value=a,r[n].error=I(r[n].validation,a),e.setState(r)},e.handleSignUp=function(){var t=Object(b.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state.fields,r=E(n),!R(r)){t.next=15;break}return t.prev=4,t.next=7,z.post("/api/accounts",{name:n.name.value,email:n.email.value,number:n.password.value,environment:{id:1}});case 7:e.setState(B(n)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0);case 13:t.next=16;break;case 15:e.setState(r);case 16:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state.fields;return Object(n.jsxs)(C.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(w.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)("img",{src:N,alt:"Logo",className:e.logo}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:this.handleSignUp,children:[Object(n.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Nome",name:"name",autoComplete:"Nome",autoFocus:!0,value:t.name.value,error:""!==t.name.error,helperText:t.name.error,onChange:this.changeValue}),Object(n.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email",value:t.email.value,error:""!==t.email.error,helperText:t.email.error,onChange:this.changeValue}),Object(n.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"CPF",type:"text",id:"password",autoComplete:"current-password",value:t.password.value,error:""!==t.password.error,helperText:t.password.error,onChange:this.changeValue}),Object(n.jsx)(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Cadastrar"})]})]}),Object(n.jsx)(k.a,{mt:8,children:Object(n.jsx)(U,{})})]})}}]),a}(r.Component),Y=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},logo:{margin:e.spacing(1),width:"120px",height:"120px",backgroundColor:"transparent"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(K),X=function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fields:{email:{value:"",error:"",validation:[L]},password:{value:"",error:"",validation:[L]}}},e.changeValue=function(t){var a=t.target.value,n=t.target.id,r=e.state.fields;r[n].value=a,r[n].error=I(r[n].validation,a),e.setState(r)},e.handleSignIn=function(){var t=Object(b.a)(g.a.mark((function t(a){var n,r,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state.fields,r=E(n),!R(r)){t.next=19;break}return t.prev=4,t.next=7,z.post("/login",{email:n.email.value,password:n.password.value});case 7:s=t.sent,F(s.headers.authorization),e.props.history.push("/app"),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),n.email.error="E-mail ou CPF inv\xe1lidos.",n.password.error="E-mail ou CPF inv\xe1lidos.",e.setState(n);case 17:t.next=20;break;case 19:e.setState(r);case 20:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state.fields;return Object(n.jsxs)(C.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(w.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)("img",{src:N,alt:"Logo",className:e.logo}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:this.handleSignIn,children:[Object(n.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email",autoFocus:!0,value:t.email.value,error:""!==t.email.error,helperText:t.email.error,onChange:this.changeValue}),Object(n.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"CPF",type:"password",id:"password",autoComplete:"current-password",value:t.password.value,error:""!==t.password.error,helperText:t.password.error,onChange:this.changeValue}),Object(n.jsx)(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Entrar"})]})]}),Object(n.jsx)(k.a,{mt:8,children:Object(n.jsx)(U,{})})]})}}]),a}(r.Component),Q=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},logo:{margin:e.spacing(1),width:"120px",height:"120px",backgroundColor:"transparent"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(X),Z=a(5),$=a(29),ee=a(266),te=a(267),ae=a(270),ne=a(268),re=a(274),se=a(222),ie=a(138),oe=a.n(ie),ce=a(140),le=a.n(ce),ue=a(141),de=a.n(ue),he=a(269),pe=a(264),me=a(279),je=a(271),ge=a(272),be=a(89),xe=a(124),fe=a(126),Oe=a(125),ve=a(139),we=a.n(ve),ye=a(273),Se=a(71),Ce=350,Me=a(137),ke=a.n(Me),Ne=a(76),Ie=a(77),Ee=function(e){Object(O.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).state={message:"",menuLeftOpen:!1,menuRightOpen:!1,environments:[],currentEnvironment:{id:1,questions:[{id:0,description:"",responses:[]}]},chatMessages:[],newMessages:0,accounts1:[],accounts2:[],car1:{toEnvironment:{id:1,name:""}},car2:{toEnvironment:{id:1,name:""}},tool1:"",tool2:""},n.logout=function(){localStorage.removeItem(q),localStorage.removeItem(A),n.props.history.push("/")},n.handleMenu=function(){_.get("/api/environments").then((function(e){return n.setState({environments:e.data})}))},n.handleAccounts=function(){_.get("/api/accountGroups/".concat(H().group)).then((function(e){e.data.accounts.forEach((function(e){return e.color=Ne.a[500]})),n.setState({accounts:e.data.accounts}),n.handleCars(1),n.handleCars(2)}))},n.handleCars=function(e){_.get("/api/transports/getByIndex/".concat(e,"/").concat(H().group)).then((function(t){var a=n.state.accounts,r=JSON.parse(JSON.stringify(a)),s={};s["car"+e]=t.data,s["accounts"+e]=r.filter((function(e){if(e.environment.id===t.data.toEnvironment.id)return e})),n.setState(s)}))},n.handleCurrentEnvironment=function(){_.get("/api/environments/getWithUserResponses/".concat(n.state.currentEnvironment.id)).then((function(e){return n.setState({currentEnvironment:e.data})}))},n.handleMessages=function(){_.get("/api/chatMessages/getByEnvironmentId/".concat(n.state.currentEnvironment.id)).then((function(e){return n.setState({chatMessages:e.data})}))},n.handleOpenLeftMenu=function(){n.setState({menuLeftOpen:!0})},n.handleCloseLeftMenu=function(){n.setState({menuLeftOpen:!1})},n.handleOpenRightMenu=function(){n.setState({menuRightOpen:!0})},n.handleCloseRightMenu=function(){n.setState({menuRightOpen:!1})},n.changeMessage=function(e){n.setState({message:e.target.value})},n.handleSendMessage=Object(b.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(t=n.state.message)){e.next=12;break}return e.prev=2,e.next=5,_.post("/api/chatMessages",{text:t});case 5:n.setState({message:""}),n.chatInput.current.focus(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),n.changeResponse=function(e){var t=e.target.value,a=e.target.id.substring(9),r=n.state.currentEnvironment;r.questions[parseInt(a)].responses?r.questions[parseInt(a)].responses=[{text:t}]:r.questions[parseInt(a)].responses[0].text=t,n.setState(r)},n.changeValue=function(e){var t={};t[e.target.id]=e.target.value,n.setState(t)},n.selectAccount=function(e,t){var a=n.state["accounts"+t];a[e].color===Ie.a[500]?a[e].color=Ne.a[500]:a[e].color=Ie.a[500],n.setState(a)},n.handleCarGo=function(e){},n.chatInput=s.a.createRef(),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.handleMenu(),this.handleCurrentEnvironment(),this.handleMessages(),this.handleAccounts();var t=ke.a.over(new G.a("https://radioactive-game.herokuapp.com/gs-websocket",null,{transports:["xhr-streaming"],headers:{Authorization:"Bearer ".concat(P())}})),a=H();t.connect({},(function(){t.subscribe("/topic/messages/".concat(a.environment,"/").concat(a.group),(function(t){var a=e.state.chatMessages;e.setState({chatMessages:a.concat(JSON.parse(t.body))})}))}),(function(){console.log("error")}))}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,r=a.menuLeftOpen,i=a.menuRightOpen,o=a.environments,c=a.currentEnvironment,l=a.message,u=a.chatMessages,d=a.newMessages,h=a.accounts1,p=a.accounts2,m=a.car1,j=a.car2,g=a.tool1,b=a.tool2;return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(w.a,{}),Object(n.jsx)(ee.a,{position:"absolute",className:Object(Z.a)(t.appBar,r&&t.appBarShift),children:Object(n.jsxs)(te.a,{className:t.toolbar,children:[Object(n.jsx)(ne.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleOpenLeftMenu,className:Object(Z.a)(t.menuButtonLeft,r&&t.menuButtonHidden),children:Object(n.jsx)(oe.a,{})}),Object(n.jsx)(J.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:c.name}),Object(n.jsx)(ne.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleOpenRightMenu,className:Object(Z.a)(t.menuButtonRight,i&&t.menuButtonHidden),children:Object(n.jsx)(he.a,{badgeContent:d,color:"secondary",children:Object(n.jsx)(we.a,{})})}),Object(n.jsx)(ne.a,{edge:"start",color:"inherit",onClick:this.logout,children:Object(n.jsx)(he.a,{color:"secondary",children:Object(n.jsx)(xe.a,{})})})]})}),Object(n.jsxs)($.a,{variant:"permanent",classes:{paper:Object(Z.a)(t.drawerPaper,!r&&t.drawerPaperClose)},open:r,children:[Object(n.jsx)("div",{className:t.toolbarIcon,children:Object(n.jsx)(ne.a,{onClick:this.handleCloseLeftMenu,children:Object(n.jsx)(le.a,{})})}),Object(n.jsx)(ae.a,{}),Object(n.jsx)(pe.a,{children:Object(n.jsx)("div",{children:o.map((function(e,t){return Object(n.jsxs)(je.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:s.a.createElement(be[e.icon])}),Object(n.jsx)(ye.a,{primary:e.name})]},"menu-".concat(e.id))}))})})]}),Object(n.jsxs)(me.a,{anchor:"right",onClose:this.handleCloseRightMenu,onOpen:this.handleOpenRightMenu,open:i,children:[Object(n.jsx)("div",{className:t.toolbarIconRight,children:Object(n.jsx)(ne.a,{onClick:this.handleCloseRightMenu,children:Object(n.jsx)(de.a,{})})}),Object(n.jsx)(ae.a,{}),Object(n.jsxs)(pe.a,{children:[Object(n.jsxs)("div",{className:t.rightMenu,children:[Object(n.jsx)("div",{className:t.chatMessages,children:u.map((function(e,a){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{className:t.chatMessageAccount,children:[e.account.name,": \xa0"]}),Object(n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}})]},"chatMessages-".concat(e.id))}))}),Object(n.jsxs)("form",{className:t.chatForm,noValidate:!0,children:[Object(n.jsx)(y.a,{inputRef:this.chatInput,className:t.chatInput,variant:"outlined",margin:"dense",multiline:!0,inputProps:{maxLength:2048},rowsMax:4,fullWidth:!0,name:"message",type:"text",id:"chat",value:l,onChange:this.changeMessage}),Object(n.jsx)(ne.a,{color:"primary","aria-label":"Enviar",onClick:this.handleSendMessage,children:Object(n.jsx)(fe.a,{})})]})]}),Object(n.jsx)(ae.a,{})]})]}),Object(n.jsxs)("main",{className:t.content,children:[Object(n.jsx)("div",{className:t.appBarSpacer}),Object(n.jsxs)(C.a,{maxWidth:"lg",className:t.container,children:[Object(n.jsx)(re.a,{container:!0,spacing:3,children:Object(n.jsxs)(re.a,{item:!0,xs:12,children:[Object(n.jsxs)(se.a,{className:t.paper,children:[Object(n.jsx)("h3",{children:Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:c.description}})}),Object(n.jsx)(ae.a,{}),Object(n.jsx)("form",{className:t.form,noValidate:!0,children:c.questions.map((function(t,a){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:Object(n.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}})},"question-".concat(t.id)),Object(n.jsx)(y.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"response-".concat(a),label:"Resposta",multiline:!0,type:"text",inputProps:{maxLength:1024},rowsMax:4,id:"response-".concat(a),value:0===t.responses.length?"":t.responses[0].text,onChange:e.changeResponse},"response-".concat(a))]},"div-question-".concat(t.id))}))})]}),Object(n.jsxs)(re.a,{justify:"space-between",container:!0,spacing:2,children:[Object(n.jsx)(re.a,{item:!0,xs:6,className:t.carGrid,children:Object(n.jsxs)(se.a,{className:t.paper,children:[Object(n.jsxs)("h3",{children:["Carro 1 est\xe1 no(a) ",m.toEnvironment.name]}),Object(n.jsx)(ae.a,{}),h.map((function(t,a){return Object(n.jsxs)(je.a,{button:!0,onClick:function(){return e.selectAccount(a,1)},children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(Oe.a,{style:{color:t.color}})}),Object(n.jsx)(ye.a,{primary:t.name})]},"account1-".concat(t.id))})),Object(n.jsx)(ae.a,{}),Object(n.jsx)(y.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"tool1",label:"Ferramentas",multiline:!0,type:"text",rowsMax:4,id:"tool1",value:g,onChange:this.changeValue},"tool1"),Object(n.jsx)(ne.a,{color:"primary","aria-label":"Ir",className:t.carButton,onClick:function(){return e.handleCarGo(1)},children:Object(n.jsx)(fe.a,{})})]})}),Object(n.jsx)(re.a,{item:!0,xs:6,className:t.carGrid,children:Object(n.jsxs)(se.a,{className:t.paper,children:[Object(n.jsxs)("h3",{children:["Carro 2 est\xe1 no(a) ",j.toEnvironment.name]}),Object(n.jsx)(ae.a,{}),p.map((function(t,a){return Object(n.jsxs)(je.a,{button:!0,onClick:function(){return e.selectAccount(a,2)},children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(Oe.a,{style:{color:t.color}})}),Object(n.jsx)(ye.a,{primary:t.name})]},"account2-".concat(t.id))})),Object(n.jsx)(ae.a,{}),Object(n.jsx)(y.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"tool2",label:"Ferramentas",multiline:!0,type:"text",rowsMax:4,id:"tool2",value:b,onChange:this.changeValue},"tool2"),Object(n.jsx)(ne.a,{color:"primary","aria-label":"Ir",className:t.carButton,onClick:function(){return e.handleCarGo(2)},children:Object(n.jsx)(fe.a,{})})]})})]})]})}),Object(n.jsx)(k.a,{pt:4,children:Object(n.jsx)(U,{})})]})]})]})}}]),a}(r.Component),Re=Object(S.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),toolbarIconRight:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:Ce,width:"calc(100% - ".concat(Ce,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButtonLeft:{marginRight:36},menuButtonRight:{marginLeft:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:Ce,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(Se.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",minHeight:540},fixedHeight:{height:240},rightMenu:{width:Ce,marginLeft:"10px",marginRight:"10px"},chatMessages:{height:"250px",overflowY:"auto",border:"1px solid black"},chatForm:{display:"flex",flexDirection:"row"},chatInput:{alignSelf:"flex-end"},chatMessageAccount:{fontWeight:"bold"},carGrid:{marginTop:"20px"},carButton:{width:"50px",alignSelf:"flex-end"}}}))(Ee),Be=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return Object(n.jsx)(p.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return null!==localStorage.getItem(q)&&(new Date).getTime()/1e3<parseInt(localStorage.getItem(A))?Object(n.jsx)(t,Object(d.a)({},e)):Object(n.jsx)(p.a,{to:{pathname:"/",state:{from:e.location}}})}}))},Le=function(){return Object(n.jsx)(m.a,{children:Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/",component:Q}),Object(n.jsx)(p.b,{path:"/signup",component:Y}),Object(n.jsx)(Be,{path:"/app",component:Re}),Object(n.jsx)(p.b,{path:"*",component:function(){return Object(n.jsx)("h1",{children:"Page not found"})}})]})})},Te=function(){return Object(n.jsx)(Le,{})};o.a.render(Object(n.jsx)(Te,{}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.3d6f8905.chunk.js.map