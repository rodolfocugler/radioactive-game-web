(this["webpackJsonpradioactive-game-web"]=this["webpackJsonpradioactive-game-web"]||[]).push([[0],{230:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),s=n.n(r),o=n(13),c=n.n(o),i=n(133),l=n(134);n(168);function u(){var e=Object(i.a)(["\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n}\nbody, html {\n  background: #eee;\n  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n  height: 100%;\n  width: 100%;\n}\n"]);return u=function(){return e},e}Object(l.a)(u());var d=n(26),p=n(150),h=n(16),m=n(149),j=n(19),b=n.n(j),f=n(31),g=n(35),x=n(36),O=n(40),v=n(38),y=n(273),S=n(286),w=n(6),M=n(272),E=n(276),N=n(288),C=n.p+"static/media/nuclear.272c3b9e.svg",k=function(e,t){for(var n=0;n<e.length;n++){var a=e[n](t);if(""!==a)return a}return""},I=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var a=t[n],r=e[a].validation,s=e[a].value;e[a].error=k(r,s)}return e},R=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){if(""!==e[t[n]].error)return!1}return!0},A=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){e[t[n]].value=""}return e},L=function(e){return e?"":"Preencha para continuar!"},T=n(138),D=n.n(T),B=n(93),G="TOKEN_KEY",W="TOKEN_EXPIRES_AT",q="PASSWORD",H=function(){return localStorage.getItem(G)},P=function(e,t){var n=Object(B.a)(e);localStorage.setItem(G,e),localStorage.setItem(q,t),localStorage.setItem(W,n.exp.toString())},V=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F(),e.next=3,_(t.email,t.password);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.post("/login",{email:t,password:n});case 2:a=e.sent,P(a.headers.authorization,n);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(B.a)(localStorage.getItem(G));return{id:parseInt(e.sub),email:e.aud,name:e.user,environment:e.environment,group:e.group,isLeader:e.isLeader,password:localStorage.getItem(q)}},U=n(139),z=n.n(U),Q=D.a.create({baseURL:"https://radioactive-game.herokuapp.com"});Q.interceptors.request.use(function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=H())&&(t.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var J=Q,K=n(83),Y=function(){return Object(a.jsx)(K.a,{variant:"body2",color:"textSecondary",align:"center",children:"Copyright \xa9 "+(new Date).getFullYear()})},X=function(e){Object(O.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fields:{name:{value:"",error:"",validation:[L]},email:{value:"",error:"",validation:[L]},password:{value:"",error:"",validation:[L]}}},e.changeValue=function(t){var n=t.target.value,a=t.target.id,r=e.state.fields;r[a].value=n,r[a].error=k(r[a].validation,n),e.setState(r)},e.handleSignUp=function(){var t=Object(f.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state.fields,r=I(a),!R(r)){t.next=15;break}return t.prev=4,t.next=7,J.post("/api/accounts",{name:a.name.value,email:a.email.value,number:a.password.value,password:a.password.value,environment:{id:1},isLeader:!1});case 7:e.setState(A(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0);case 13:t.next=16;break;case 15:e.setState(r);case 16:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state.fields;return Object(a.jsxs)(M.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(y.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)("img",{src:C,alt:"Logo",className:e.logo}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:this.handleSignUp,children:[Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Nome",name:"name",autoComplete:"Nome",autoFocus:!0,value:t.name.value,error:""!==t.name.error,helperText:t.name.error,onChange:this.changeValue}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email",value:t.email.value,error:""!==t.email.error,helperText:t.email.error,onChange:this.changeValue}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"RA",type:"text",id:"password",autoComplete:"current-password",value:t.password.value,error:""!==t.password.error,helperText:t.password.error,onChange:this.changeValue}),Object(a.jsx)(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Cadastrar"})]})]}),Object(a.jsx)(N.a,{mt:8,children:Object(a.jsx)(Y,{})})]})}}]),n}(r.Component),Z=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},logo:{margin:e.spacing(1),width:"120px",height:"120px",backgroundColor:"transparent"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(X),$=function(e){Object(O.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fields:{email:{value:"",error:"",validation:[L]},password:{value:"",error:"",validation:[L]}}},e.changeValue=function(t){var n=t.target.value,a=t.target.id,r=e.state.fields;r[a].value=n,r[a].error=k(r[a].validation,n),e.setState(r)},e.handleSignIn=function(){var t=Object(f.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state.fields,r=I(a),!R(r)){t.next=17;break}return t.prev=4,t.next=7,_(a.email.value,a.password.value);case 7:e.props.history.push("/app"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(4),a.email.error="E-mail ou Senha inv\xe1lidos.",a.password.error="E-mail ou Senha inv\xe1lidos.",e.setState(a);case 15:t.next=18;break;case 17:e.setState(r);case 18:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state.fields;return Object(a.jsxs)(M.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(y.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)("img",{src:C,alt:"Logo",className:e.logo}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:this.handleSignIn,children:[Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email",autoFocus:!0,value:t.email.value,error:""!==t.email.error,helperText:t.email.error,onChange:this.changeValue}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password",value:t.password.value,error:""!==t.password.error,helperText:t.password.error,onChange:this.changeValue}),Object(a.jsx)(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Entrar"})]})]}),Object(a.jsx)(N.a,{mt:8,children:Object(a.jsx)(Y,{})})]})}}]),n}(r.Component),ee=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},logo:{margin:e.spacing(1),width:"120px",height:"120px",backgroundColor:"transparent"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))($),te=n(5),ne=n(33),ae=n(277),re=n(278),se=n(281),oe=n(279),ce=n(285),ie=n(232),le=n(144),ue=n.n(le),de=n(146),pe=n.n(de),he=n(147),me=n.n(he),je=n(280),be=n(275),fe=n(284),ge=n(291),xe=n(289),Oe=n(282),ve=n(283),ye=n(65),Se=n(130),we=n(132),Me=n(131),Ee=n(145),Ne=n.n(Ee),Ce=n(75),ke=350,Ie=n(143),Re=n.n(Ie),Ae=n(81),Le=n(82),Te=function(e){Object(O.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={message:"",messageAll:"",menuLeftOpen:!1,menuRightOpen:!1,environments:[],currentEnvironment:{id:F().environment,questions:[{id:0,description:"",responses:[]}],tools:[]},chatMessages:[],chatMessagesAll:[],newMessages:0,accounts1:[],accounts2:[],car1:{fromEnvironment:{id:1,name:""},toEnvironment:{id:1,name:""}},car2:{fromEnvironment:{id:1,name:""},toEnvironment:{id:1,name:""}},tool1:"",tool2:"",isLeader:F().isLeader},a.logout=function(){localStorage.removeItem(G),localStorage.removeItem(W),a.props.history.push("/")},a.handleMenu=function(){Q.get("/api/environments").then((function(e){return a.setState({environments:e.data})}))},a.handleAccounts=function(){Q.get("/api/accountGroups/".concat(F().group)).then((function(e){e.data.accounts.forEach((function(e){return e.color=Ae.a[500]})),a.setState({accounts:e.data.accounts}),a.handleCars(1),a.handleCars(2)}))},a.handleCars=function(e){Q.get("/api/transports/getByIndex/".concat(e,"/").concat(F().group)).then((function(t){var n=a.state.accounts,r=JSON.parse(JSON.stringify(n)),s={};t.data.fromEnvironment=t.data.toEnvironment,t.data.toEnvironment=void 0,s["car"+e]=t.data,s["accounts"+e]=r.filter((function(e){return e.environment.id===t.data.fromEnvironment.id}));var o="";t.data.fromEnvironment.tools.forEach((function(e){return o+=e.description+"; "})),s["tool"+e]=o.trim(),a.setState(s)}))},a.handleCurrentEnvironment=function(){Q.get("/api/environments/getWithUserResponses").then((function(e){return a.setState({currentEnvironment:e.data})}))},a.handleTools=function(){Q.get("/api/environments/getWithUserResponses").then((function(e){var t=a.state.currentEnvironment;t.tools=e.data.tools,a.setState(t)}))},a.handleMessages=function(){Q.get("/api/chatMessages/getByEnvironmentId/".concat(a.state.currentEnvironment.id)).then((function(e){return a.setState({chatMessages:e.data})})),Q.get("/api/chatMessages/getByAccountGroup").then((function(e){return a.setState({chatMessagesAll:e.data})}))},a.handleOpenLeftMenu=function(){a.setState({menuLeftOpen:!0})},a.handleCloseLeftMenu=function(){a.setState({menuLeftOpen:!1})},a.handleOpenRightMenu=function(){a.setState({menuRightOpen:!0,newMessages:0})},a.handleCloseRightMenu=function(){a.setState({menuRightOpen:!1})},a.changeMessage=function(e){var t={};t[e.target.id]=e.target.value,a.setState(t)},a.handleSendMessage=function(e){var t=a.state,n=t.message,r=t.messageAll,s=e?"/all":"",o=e?r:n;""!==o&&Q.post("/api/chatMessages"+s,{text:o}).then((function(){e?(a.setState({messageAll:""}),a.chatInputAll.current.focus()):(a.setState({message:""}),a.chatInput.current.focus())})).catch((function(e){return console.log(e)}))},a.changeResponse=function(e){var t=e.target.value,n=e.target.id.substring(9),r=a.state.currentEnvironment;r.questions[parseInt(n)].responses?r.questions[parseInt(n)].responses=[{text:t}]:r.questions[parseInt(n)].responses[0].text=t,a.setState(r)},a.changeValue=function(e){var t={};t[e.target.id]=e.target.value,a.setState(t)},a.selectAccount=function(e,t){var n=a.state["accounts"+t];n[e].color===Le.a[500]?n[e].color=Ae.a[500]:n[e].color=Le.a[500],a.setState(n)},a.handleCarGo=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,s,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.state["car"+t],r=a.state["accounts"+t].filter((function(e){return e.color===Le.a[500]})).map((function(e){return{id:e.id}})),s=a.state["tool"+t].split(";").filter((function(e){return!!e})).map((function(e){return{description:e,environment:n.toEnvironment?n.toEnvironment:0}})),0===r.length||!n.toEnvironment){e.next=15;break}return e.prev=4,e.next=7,Q.post("/api/transports",{accountGroup:{id:F().group},carIndex:t,accounts:r,tools:s,toEnvironment:n.toEnvironment,fromEnvironment:n.fromEnvironment,timestamp:1202020});case 7:(o={})["tool"+t]="",a.setState(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),a.onChangeEnvironmentTo=function(e,t){var n=a.state["car"+e];n.toEnvironment=t,a.setState(n)},a.handleSendResponses=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state.currentEnvironment,t.questions.forEach((function(e){if(e.responses&&e.responses.length>0){var t=e.responses[0].text;Q.post("/api/responses",{account:{id:F().id},text:t,question:{id:e.id}}).catch((function(e){console.log(e),alert("UM ERRO OCORREU! SALVE SUAS RESPOSTAS!")}))}}));case 3:case"end":return e.stop()}}),e)}))),a.chatInput=s.a.createRef(),a.chatInputAll=s.a.createRef(),a}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.handleMenu(),this.handleCurrentEnvironment(),this.handleMessages(),this.handleAccounts();var t=Re.a.over(new z.a("https://radioactive-game.herokuapp.com/gs-websocket",null,{transports:["xhr-streaming"],headers:{Authorization:"Bearer ".concat(H())}})),n=F();t.connect({},(function(){t.subscribe("/topic/messages/".concat(n.group),(function(t){var n=e.state,a=n.currentEnvironment,r=n.newMessages,s=n.menuRightOpen,o=e.state,c=JSON.parse(t.body),i=F(),l=r;s?l=0:c.account.id!==i.id&&l++,c.environment?c.environment.id===a.id?o.chatMessages=o.chatMessages.concat(c):l=r:o.chatMessagesAll=o.chatMessagesAll.concat(c),o.newMessages=l,e.setState(o)})),t.subscribe("/topic/transport/".concat(n.group),(function(t){var n=JSON.parse(t.body),a=F();1===n.accounts.filter((function(e){return e.id===a.id})).length?V().then((function(){var t=e.state.currentEnvironment;t.id=F().environment,e.setState(t),e.handleCurrentEnvironment(),e.handleMessages()})):e.handleTools(),e.state.isLeader&&e.handleAccounts()}))}),(function(){console.log("error")}))}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,r=n.menuLeftOpen,o=n.menuRightOpen,c=n.environments,i=n.currentEnvironment,l=n.message,u=n.chatMessages,p=n.newMessages,h=n.accounts1,m=n.accounts2,j=n.car1,b=n.car2,f=n.tool1,g=n.tool2,x=n.isLeader,O=n.chatMessagesAll,v=n.messageAll;return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(y.a,{}),Object(a.jsx)(ae.a,{position:"absolute",className:Object(te.a)(t.appBar,r&&t.appBarShift),children:Object(a.jsxs)(re.a,{className:t.toolbar,children:[Object(a.jsx)(oe.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleOpenLeftMenu,className:Object(te.a)(t.menuButtonLeft,r&&t.menuButtonHidden),children:Object(a.jsx)(ue.a,{})}),Object(a.jsx)(K.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:i.name}),Object(a.jsx)(oe.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleOpenRightMenu,className:Object(te.a)(t.menuButtonRight,o&&t.menuButtonHidden),children:Object(a.jsx)(je.a,{badgeContent:p,color:"secondary",children:Object(a.jsx)(Ne.a,{})})}),Object(a.jsx)(oe.a,{edge:"start",color:"inherit",onClick:this.logout,children:Object(a.jsx)(je.a,{color:"secondary",children:Object(a.jsx)(Se.a,{})})})]})}),Object(a.jsxs)(ne.a,{variant:"permanent",classes:{paper:Object(te.a)(t.drawerPaper,!r&&t.drawerPaperClose)},open:r,children:[Object(a.jsx)("div",{className:t.toolbarIcon,children:Object(a.jsx)(oe.a,{onClick:this.handleCloseLeftMenu,children:Object(a.jsx)(pe.a,{})})}),Object(a.jsx)(se.a,{}),Object(a.jsx)(be.a,{children:Object(a.jsx)("div",{children:c.map((function(e,t){return Object(a.jsxs)(Oe.a,{button:!0,children:[Object(a.jsx)(ve.a,{children:s.a.createElement(ye[e.icon])}),Object(a.jsx)(fe.a,{primary:e.name})]},"menu-".concat(e.id))}))})})]}),Object(a.jsxs)(ge.a,{anchor:"right",onClose:this.handleCloseRightMenu,onOpen:this.handleOpenRightMenu,open:o,children:[Object(a.jsx)("div",{className:t.toolbarIconRight,children:Object(a.jsx)(oe.a,{onClick:this.handleCloseRightMenu,children:Object(a.jsx)(me.a,{})})}),Object(a.jsx)(se.a,{}),Object(a.jsxs)(be.a,{children:[Object(a.jsxs)("div",{className:t.rightMenu,children:[Object(a.jsxs)("h3",{children:["Mensagens com que est\xe1 no(a) ",i.name,":"]}),Object(a.jsx)("div",{className:t.chatMessages,children:u.map((function(e,n){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:t.chatMessageAccount,children:[e.account.name,": \xa0"]}),Object(a.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}})]},"chatMessages-".concat(e.id))}))}),Object(a.jsxs)("form",{className:t.chatForm,noValidate:!0,children:[Object(a.jsx)(S.a,{inputRef:this.chatInput,className:t.chatInput,variant:"outlined",margin:"dense",multiline:!0,inputProps:{maxLength:2048},rowsMax:4,fullWidth:!0,name:"message",type:"text",id:"message",value:l,onChange:this.changeMessage}),Object(a.jsx)(oe.a,{color:"primary","aria-label":"Enviar",onClick:function(){return e.handleSendMessage(!1)},children:Object(a.jsx)(we.a,{})})]}),Object(a.jsx)("h3",{children:"Mensagens entre todos:"}),Object(a.jsx)("div",{className:t.chatMessages,children:O.map((function(e,n){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:t.chatMessageAccount,children:[e.account.name,": \xa0"]}),Object(a.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}})]},"chatMessages-".concat(e.id))}))}),Object(a.jsxs)("form",{className:t.chatForm,noValidate:!0,children:[Object(a.jsx)(S.a,{inputRef:this.chatInputAll,className:t.chatInput,variant:"outlined",margin:"dense",multiline:!0,inputProps:{maxLength:2048},rowsMax:4,fullWidth:!0,name:"messageAll",type:"text",id:"messageAll",value:v,onChange:this.changeMessage}),Object(a.jsx)(oe.a,{color:"primary","aria-label":"Enviar",onClick:function(){return e.handleSendMessage(!0)},children:Object(a.jsx)(we.a,{})})]})]}),Object(a.jsx)(se.a,{})]})]}),Object(a.jsxs)("main",{className:t.content,children:[Object(a.jsx)("div",{className:t.appBarSpacer}),Object(a.jsxs)(M.a,{maxWidth:"lg",className:t.container,children:[Object(a.jsx)(ce.a,{container:!0,spacing:3,children:Object(a.jsxs)(ce.a,{item:!0,xs:12,children:[Object(a.jsxs)(ie.a,{className:t.paper,children:[Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:i.description}}),Object(a.jsx)(se.a,{}),Object(a.jsxs)("form",{className:t.form,noValidate:!0,children:[i.questions.map((function(t,n){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}},"question-".concat(t.id)),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"response-".concat(n),label:"Resposta",multiline:!0,type:"text",inputProps:{maxLength:1024},rowsMax:4,id:"response-".concat(n),value:0===t.responses.length?"":t.responses[0].text,onChange:e.changeResponse},"response-".concat(n))]},"div-question-".concat(t.id))})),i.questions.length>0&&Object(a.jsx)(E.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:this.handleSendResponses,children:"Enviar"})]}),Object(a.jsx)(se.a,{}),Object(a.jsx)("div",{className:t.toolsDiv,children:i.tools.map((function(e,n){return Object(a.jsx)(N.a,{component:"div",display:"inline-block",p:1,m:1,className:t.tools,children:e.description},"tool-description-".concat(e.id))}))})]}),x&&Object(a.jsxs)(ce.a,{justify:"space-between",container:!0,spacing:2,children:[Object(a.jsx)(ce.a,{item:!0,xs:6,className:t.carGrid,children:Object(a.jsxs)(ie.a,{className:t.paper,children:[Object(a.jsxs)("h3",{children:["Carro 1 est\xe1 no(a) ",j.fromEnvironment.name]}),Object(a.jsx)(se.a,{}),h.map((function(t,n){return Object(a.jsxs)(Oe.a,{button:!0,onClick:function(){return e.selectAccount(n,1)},children:[Object(a.jsx)(ve.a,{children:Object(a.jsx)(Me.a,{style:{color:t.color}})}),Object(a.jsx)(fe.a,{primary:t.name})]},"account1-".concat(t.id))})),Object(a.jsx)(se.a,{}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"tool1",label:"Ferramentas",multiline:!0,type:"text",rowsMax:8,id:"tool1",value:f,onChange:this.changeValue},"tool1"),Object(a.jsx)(xe.a,{options:c.filter((function(e){return e.id!==j.fromEnvironment.id})),fullWidth:!0,renderOption:function(e){return Object(a.jsxs)(s.a.Fragment,{children:[s.a.createElement(ye[e.icon]),e.name]})},value:j.toEnvironment,onChange:function(t,n){return e.onChangeEnvironmentTo(1,n)},getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(a.jsx)(S.a,Object(d.a)(Object(d.a)({},e),{},{label:"Indo para",variant:"outlined",inputProps:Object(d.a)({},e.inputProps)}))}}),Object(a.jsx)(oe.a,{color:"primary","aria-label":"Ir",className:t.carButton,onClick:function(){return e.handleCarGo(1)},children:Object(a.jsx)(we.a,{})})]})}),Object(a.jsx)(ce.a,{item:!0,xs:6,className:t.carGrid,children:Object(a.jsxs)(ie.a,{className:t.paper,children:[Object(a.jsxs)("h3",{children:["Carro 2 est\xe1 no(a) ",b.fromEnvironment.name]}),Object(a.jsx)(se.a,{}),m.map((function(t,n){return Object(a.jsxs)(Oe.a,{button:!0,onClick:function(){return e.selectAccount(n,2)},children:[Object(a.jsx)(ve.a,{children:Object(a.jsx)(Me.a,{style:{color:t.color}})}),Object(a.jsx)(fe.a,{primary:t.name})]},"account2-".concat(t.id))})),Object(a.jsx)(se.a,{}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"tool2",label:"Ferramentas",multiline:!0,type:"text",rowsMax:8,id:"tool2",value:g,onChange:this.changeValue},"tool2"),Object(a.jsx)(xe.a,{options:c.filter((function(e){return e.id!==b.fromEnvironment.id})),fullWidth:!0,renderOption:function(e){return Object(a.jsxs)(s.a.Fragment,{children:[s.a.createElement(ye[e.icon]),e.name]})},value:b.toEnvironment,onChange:function(t,n){return e.onChangeEnvironmentTo(2,n)},getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(a.jsx)(S.a,Object(d.a)(Object(d.a)({},e),{},{label:"Indo para",variant:"outlined",inputProps:Object(d.a)({},e.inputProps)}))}}),Object(a.jsx)(oe.a,{color:"primary","aria-label":"Ir",className:t.carButton,onClick:function(){return e.handleCarGo(2)},children:Object(a.jsx)(we.a,{})})]})})]})]})}),Object(a.jsx)(N.a,{pt:4,children:Object(a.jsx)(Y,{})})]})]})]})}}]),n}(r.Component),De=Object(w.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),toolbarIconRight:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:ke,width:"calc(100% - ".concat(ke,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButtonLeft:{marginRight:36},menuButtonRight:{marginLeft:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:ke,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(Ce.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",minHeight:540},fixedHeight:{height:240},rightMenu:{width:ke,marginLeft:"10px",marginRight:"10px"},chatMessages:{height:"250px",overflowY:"auto",border:"1px solid black"},chatForm:{display:"flex",flexDirection:"row"},chatInput:{alignSelf:"flex-end"},chatMessageAccount:{fontWeight:"bold"},carGrid:{marginTop:"20px"},carButton:{width:"50px",alignSelf:"flex-end"},toolsDiv:{marginTop:"15px"},tools:{backgroundColor:"#3f51b5",color:"white"}}}))(Te),Be=n(80),Ge=n.n(Be),We=function(e){Object(O.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ags:[]},e.handleAccountGroups=function(){Q.get("/api/accountGroups").then((function(t){var n=e.state.ags;t.data.forEach((function(t){n[t.id-1]={name:t.name},e.setState(n),e.handleReport(t)}))}))},e.handleReport=function(t){Q.get("/api/report/getByAccountGroupId/".concat(t.id)).then((function(n){return e.handleSetReport(t,n,"report")})),Q.get("/api/report/getQuestionsByAccountGroupId/".concat(t.id)).then((function(n){return e.handleSetReport(t,n,"questions")}))},e.handleSetReport=function(t,n,a){var r=e.state.ags;r[t.id-1][a]=n.data,e.setState(r)},e.formatDate=function(e){var t=new Date(e);return Ge()(t).format("DD/MM/yyyy HH:mm")},e.formatHour=function(e){var t=Math.floor(e/36e5),n=Math.floor((e-36e5*t)/6e4);return"".concat(("0"+t).slice(-2),":").concat(("0"+n).slice(-2))},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.handleAccountGroups()}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.ags;return Object(a.jsx)(M.a,{maxWidth:"lg",className:t.container,children:Object(a.jsx)(ce.a,{container:!0,children:Object(a.jsx)(ce.a,{item:!0,xs:12,children:n.filter((function(e){return!!e.report})).map((function(n,r){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:["Grupo: ",n.name]}),Object(a.jsx)("h3",{children:"Alunos: "}),Object(a.jsx)(be.a,{className:t.root,children:Object.keys(n.report.accounts).map((function(e,t){return Object(a.jsxs)(fe.a,{children:["RA ",e,": ",n.report.accounts[e]]},"ra-".concat(r,"-").concat(e))}))}),Object(a.jsx)(se.a,{}),Object(a.jsx)("h3",{children:"Tempo: "}),Object(a.jsxs)("p",{children:["In\xedcio: ~",e.formatDate(n.report.startTime)]}),Object(a.jsxs)("p",{children:["Fim: ~",e.formatDate(n.report.endTime)]}),Object(a.jsxs)("p",{children:["Dura\xe7\xe3o: ~",e.formatHour(n.report.duration)]}),Object(a.jsx)(se.a,{}),Object(a.jsx)("h3",{children:"Quest\xf5es: "}),Object.keys(n.questions).map((function(s,o){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{children:[s,":"]}),n.questions[s].map((function(n,s){return Object(a.jsxs)("div",{children:["Q.: ",Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:n.question}}),n.responses.map((function(n,s){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:t.response,children:["R.: (",n.account,") - ",e.formatDate(n.timestamp),":"]})," ",n.response]},"response-".concat(r,"-").concat(s))}))]},"question-".concat(r,"-").concat(s))}))]},"env-".concat(r,"-").concat(o))})),Object(a.jsx)(se.a,{}),Object(a.jsx)("h3",{children:"Mensagens: "}),Object.keys(n.report.messages).map((function(t,s){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{children:[t,":"]}),n.report.messages[t].map((function(t,n){return Object(a.jsxs)("div",{children:[t.accounts," - ",e.formatDate(t.timestamp),": ",t.text]},"message-".concat(r,"-").concat(n))}))]},"env-message-".concat(r,"-").concat(s))})),Object(a.jsx)(se.a,{}),Object(a.jsx)("h3",{children:"Movimenta\xe7\xe3o: "}),n.report.events.map((function(n,s){return Object(a.jsxs)("div",{className:t.transportDiv,children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"Saiu do(a):"})," ",n.from]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"Foi para o(a):"})," ",n.to]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"As:"})," ",e.formatDate(n.timestamp)]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"Levou:"}),n.tools.reduce((function(e,t){return"".concat(e," ").concat(t,";")}),"")]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"Quem foi:"}),n.accounts.reduce((function(e,t){return"".concat(e," ").concat(t,";")}),"")]})]},"event-".concat(r,"-").concat(s))})),Object(a.jsx)(se.a,{className:t.dividerAG})]},"ag-".concat(r))}))})})})}}]),n}(r.Component),qe=Object(w.a)((function(e){return{dividerAG:{height:"15px",background:"red",marginTop:"5px"},transportDiv:{border:"solid 1px black",borderRadius:"5px",marginTop:"5px",paddingLeft:"10px"},span:{fontWeight:"bold"},response:{color:"blue"}}}))(We),He=function(e){Object(O.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ags:[]},e.handleAccountGroups=function(){Q.get("/api/accountGroups").then((function(t){var n=e.state.ags;t.data.forEach((function(t){n[t.id-1]={name:t.name,responses:[],transports:[]},e.setState(n),e.handleReport(t)}))}))},e.handleReport=function(t){Q.get("/api/report/getByAccountGroupId/".concat(t.id)).then((function(n){e.handleSetReport(t,n.data,"report"),n.data.events.forEach((function(e){return e.type="transport"})),e.handleSetReport(t,n.data.events,"transports")})),Q.get("/api/report/getQuestionsByAccountGroupId/".concat(t.id)).then((function(n){e.handleSetReport(t,n.data,"questions");var a=Object.keys(n.data).map((function(e,t){return n.data[e].map((function(e){return e.responses.forEach((function(t){t.question=e.question,t.type="response"})),e.responses}))})).flat().flat().sort((function(t,n){return e.compare(t,n)}));e.handleSetReport(t,a,"responses")}))},e.handleSetReport=function(t,n,a){var r=e.state.ags;r[t.id-1][a]=n,e.setState(r)},e.compare=function(e,t){return e.timestamp>t.timestamp?1:e.timestamp<t.timestamp?-1:0},e.formatDate=function(e){var t=new Date(e);return Ge()(t).format("DD/MM/yyyy HH:mm")},e.formatHour=function(e){var t=Math.floor(e/36e5),n=Math.floor((e-36e5*t)/6e4);return"".concat(("0"+t).slice(-2),":").concat(("0"+n).slice(-2))},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.handleAccountGroups()}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.ags;return Object(a.jsx)(M.a,{maxWidth:"lg",className:t.container,children:Object(a.jsx)(ce.a,{container:!0,children:Object(a.jsx)(ce.a,{item:!0,xs:12,children:n.filter((function(e){return!!e.report})).map((function(n,r){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:["Grupo: ",n.name]}),Object(a.jsx)("h3",{children:"Alunos: "}),Object(a.jsx)(be.a,{className:t.root,children:Object.keys(n.report.accounts).map((function(e,t){return Object(a.jsxs)(fe.a,{children:["RA ",e,": ",n.report.accounts[e]]},"ra-".concat(r,"-").concat(e))}))}),Object(a.jsx)(se.a,{}),Object(a.jsx)("h3",{children:"Tempo: "}),Object(a.jsxs)("p",{children:["In\xedcio: ~",e.formatDate(n.report.startTime)]}),Object(a.jsxs)("p",{children:["Fim: ~",e.formatDate(n.report.endTime)]}),Object(a.jsxs)("p",{children:["Dura\xe7\xe3o: ~",e.formatHour(n.report.duration)]}),Object(a.jsx)(se.a,{}),Object(a.jsx)("h3",{children:"Eventos: "}),n.responses.concat(n.transports).sort((function(t,n){return e.compare(t,n)})).map((function(n,s){return Object(a.jsxs)("div",{children:["transport"===n.type&&Object(a.jsxs)("div",{className:t.transportDiv,children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"Saiu do(a):"})," ",n.from]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"Foi para o(a):"})," ",n.to]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"As:"})," ",e.formatDate(n.timestamp)]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"Levou:"}),n.tools.reduce((function(e,t){return"".concat(e," ").concat(t,";")}),"")]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:t.span,children:"Quem foi:"}),n.accounts.reduce((function(e,t){return"".concat(e," ").concat(t,";")}),"")]})]}),"response"===n.type&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Q.: ",Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:n.question}})]}),Object(a.jsxs)("span",{className:t.response,children:["R.: (",n.account,") - ",e.formatDate(n.timestamp),":"]})," ",n.response]})]},"event-".concat(r,"-").concat(s))})),Object(a.jsx)(se.a,{className:t.dividerAG})]},"ag-".concat(r))}))})})})}}]),n}(r.Component),Pe=Object(w.a)((function(e){return{dividerAG:{height:"15px",background:"red",marginTop:"5px"},transportDiv:{border:"solid 1px black",borderRadius:"5px",marginTop:"5px",paddingLeft:"10px"},span:{fontWeight:"bold"},response:{color:"blue"}}}))(He),Ve=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return Object(a.jsx)(h.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return null!==localStorage.getItem(G)&&(new Date).getTime()/1e3<parseInt(localStorage.getItem(W))?Object(a.jsx)(t,Object(d.a)({},e)):Object(a.jsx)(h.a,{to:{pathname:"/",state:{from:e.location}}})}}))},_e=function(){return Object(a.jsx)(m.a,{basename:"/radioactive-game-web",children:Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{exact:!0,path:"/",component:ee}),Object(a.jsx)(h.b,{path:"/signup",component:Z}),Object(a.jsx)(Ve,{path:"/app",component:De}),Object(a.jsx)(Ve,{path:"/report",component:qe}),Object(a.jsx)(Ve,{path:"/reportOrdered",component:Pe}),Object(a.jsx)(h.b,{path:"*",component:function(){return Object(a.jsx)("h1",{children:"Page not found"})}})]})})},Fe=function(){return Object(a.jsx)(_e,{})};c.a.render(Object(a.jsx)(Fe,{}),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.0b2028d7.chunk.js.map