(this["webpackJsonpradioactive-game-web"]=this["webpackJsonpradioactive-game-web"]||[]).push([[0],{227:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),s=n.n(r),o=n(13),i=n.n(o),c=n(129),l=n(130);n(164);function u(){var e=Object(c.a)(["\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n}\nbody, html {\n  background: #eee;\n  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n  height: 100%;\n  width: 100%;\n}\n"]);return u=function(){return e},e}Object(l.a)(u());var d=n(26),p=n(146),h=n(16),m=n(145),j=n(19),g=n.n(j),b=n(31),f=n(52),x=n(53),v=n(56),O=n(55),w=n(272),S=n(285),y=n(6),C=n(271),E=n(275),M=n(287),I=n.p+"static/media/nuclear.272c3b9e.svg",N=function(e,t){for(var n=0;n<e.length;n++){var a=e[n](t);if(""!==a)return a}return""},k=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var a=t[n],r=e[a].validation,s=e[a].value;e[a].error=N(r,s)}return e},R=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){if(""!==e[t[n]].error)return!1}return!0},A=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){e[t[n]].value=""}return e},L=function(e){return e?"":"Preencha para continuar!"},T=n(134),B=n.n(T),W=n(92),q="TOKEN_KEY",P="TOKEN_EXPIRES_AT",V="PASSWORD",D=function(){return localStorage.getItem(q)},G=function(e,t){var n=Object(W.a)(e);localStorage.setItem(q,e),localStorage.setItem(V,t),localStorage.setItem(P,n.exp.toString())},H=function(){var e=Object(b.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F(),e.next=3,_(t.email,t.password);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.post("/login",{email:t,password:n});case 2:a=e.sent,G(a.headers.authorization,n);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(W.a)(localStorage.getItem(q));return{id:parseInt(e.sub),email:e.aud,name:e.user,environment:e.environment,group:e.group,isLeader:e.isLeader,password:localStorage.getItem(V)}},U=n(135),z=n.n(U),J=B.a.create({baseURL:"https://radioactive-game.herokuapp.com"});J.interceptors.request.use(function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=D())&&(t.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var K=J,Y=n(81),X=function(){return Object(a.jsx)(Y.a,{variant:"body2",color:"textSecondary",align:"center",children:"Copyright \xa9 "+(new Date).getFullYear()})},Q=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fields:{name:{value:"",error:"",validation:[L]},email:{value:"",error:"",validation:[L]},password:{value:"",error:"",validation:[L]}}},e.changeValue=function(t){var n=t.target.value,a=t.target.id,r=e.state.fields;r[a].value=n,r[a].error=N(r[a].validation,n),e.setState(r)},e.handleSignUp=function(){var t=Object(b.a)(g.a.mark((function t(n){var a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state.fields,r=k(a),!R(r)){t.next=15;break}return t.prev=4,t.next=7,K.post("/api/accounts",{name:a.name.value,email:a.email.value,number:a.password.value,password:a.password.value,environment:{id:1},isLeader:!1});case 7:e.setState(A(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0);case 13:t.next=16;break;case 15:e.setState(r);case 16:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state.fields;return Object(a.jsxs)(C.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(w.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)("img",{src:I,alt:"Logo",className:e.logo}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:this.handleSignUp,children:[Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Nome",name:"name",autoComplete:"Nome",autoFocus:!0,value:t.name.value,error:""!==t.name.error,helperText:t.name.error,onChange:this.changeValue}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email",value:t.email.value,error:""!==t.email.error,helperText:t.email.error,onChange:this.changeValue}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"RA",type:"text",id:"password",autoComplete:"current-password",value:t.password.value,error:""!==t.password.error,helperText:t.password.error,onChange:this.changeValue}),Object(a.jsx)(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Cadastrar"})]})]}),Object(a.jsx)(M.a,{mt:8,children:Object(a.jsx)(X,{})})]})}}]),n}(r.Component),Z=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},logo:{margin:e.spacing(1),width:"120px",height:"120px",backgroundColor:"transparent"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(Q),$=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fields:{email:{value:"",error:"",validation:[L]},password:{value:"",error:"",validation:[L]}}},e.changeValue=function(t){var n=t.target.value,a=t.target.id,r=e.state.fields;r[a].value=n,r[a].error=N(r[a].validation,n),e.setState(r)},e.handleSignIn=function(){var t=Object(b.a)(g.a.mark((function t(n){var a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state.fields,r=k(a),!R(r)){t.next=17;break}return t.prev=4,t.next=7,_(a.email.value,a.password.value);case 7:e.props.history.push("/app"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(4),a.email.error="E-mail ou Senha inv\xe1lidos.",a.password.error="E-mail ou Senha inv\xe1lidos.",e.setState(a);case 15:t.next=18;break;case 17:e.setState(r);case 18:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.props.classes,t=this.state.fields;return Object(a.jsxs)(C.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(w.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)("img",{src:I,alt:"Logo",className:e.logo}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:this.handleSignIn,children:[Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail",name:"email",autoComplete:"email",autoFocus:!0,value:t.email.value,error:""!==t.email.error,helperText:t.email.error,onChange:this.changeValue}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password",value:t.password.value,error:""!==t.password.error,helperText:t.password.error,onChange:this.changeValue}),Object(a.jsx)(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Entrar"})]})]}),Object(a.jsx)(M.a,{mt:8,children:Object(a.jsx)(X,{})})]})}}]),n}(r.Component),ee=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},logo:{margin:e.spacing(1),width:"120px",height:"120px",backgroundColor:"transparent"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))($),te=n(5),ne=n(33),ae=n(276),re=n(277),se=n(280),oe=n(278),ie=n(284),ce=n(229),le=n(140),ue=n.n(le),de=n(142),pe=n.n(de),he=n(143),me=n.n(he),je=n(279),ge=n(274),be=n(283),fe=n(290),xe=n(288),ve=n(281),Oe=n(282),we=n(64),Se=n(126),ye=n(128),Ce=n(127),Ee=n(141),Me=n.n(Ee),Ie=n(74),Ne=350,ke=n(139),Re=n.n(ke),Ae=n(79),Le=n(80),Te=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={message:"",messageAll:"",menuLeftOpen:!1,menuRightOpen:!1,environments:[],currentEnvironment:{id:F().environment,questions:[{id:0,description:"",responses:[]}],tools:[]},chatMessages:[],chatMessagesAll:[],newMessages:0,accounts1:[],accounts2:[],car1:{fromEnvironment:{id:1,name:""},toEnvironment:{id:1,name:""}},car2:{fromEnvironment:{id:1,name:""},toEnvironment:{id:1,name:""}},tool1:"",tool2:"",isLeader:F().isLeader},a.logout=function(){localStorage.removeItem(q),localStorage.removeItem(P),a.props.history.push("/")},a.handleMenu=function(){J.get("/api/environments").then((function(e){return a.setState({environments:e.data})}))},a.handleAccounts=function(){J.get("/api/accountGroups/".concat(F().group)).then((function(e){e.data.accounts.forEach((function(e){return e.color=Ae.a[500]})),a.setState({accounts:e.data.accounts}),a.handleCars(1),a.handleCars(2)}))},a.handleCars=function(e){J.get("/api/transports/getByIndex/".concat(e,"/").concat(F().group)).then((function(t){var n=a.state.accounts,r=JSON.parse(JSON.stringify(n)),s={};t.data.fromEnvironment=t.data.toEnvironment,t.data.toEnvironment=void 0,s["car"+e]=t.data,s["accounts"+e]=r.filter((function(e){return e.environment.id===t.data.fromEnvironment.id}));var o="";t.data.fromEnvironment.tools.forEach((function(e){return o+=e.description+"; "})),s["tool"+e]=o.trim(),a.setState(s)}))},a.handleCurrentEnvironment=function(){J.get("/api/environments/getWithUserResponses").then((function(e){return a.setState({currentEnvironment:e.data})}))},a.handleTools=function(){J.get("/api/environments/getWithUserResponses").then((function(e){var t=a.state.currentEnvironment;t.tools=e.data.tools,a.setState(t)}))},a.handleMessages=function(){J.get("/api/chatMessages/getByEnvironmentId/".concat(a.state.currentEnvironment.id)).then((function(e){return a.setState({chatMessages:e.data})})),J.get("/api/chatMessages/getByAccountGroup").then((function(e){return a.setState({chatMessagesAll:e.data})}))},a.handleOpenLeftMenu=function(){a.setState({menuLeftOpen:!0})},a.handleCloseLeftMenu=function(){a.setState({menuLeftOpen:!1})},a.handleOpenRightMenu=function(){a.setState({menuRightOpen:!0,newMessages:0})},a.handleCloseRightMenu=function(){a.setState({menuRightOpen:!1})},a.changeMessage=function(e){var t={};t[e.target.id]=e.target.value,a.setState(t)},a.handleSendMessage=function(e){var t=a.state,n=t.message,r=t.messageAll,s=e?"/all":"",o=e?r:n;""!==o&&J.post("/api/chatMessages"+s,{text:o}).then((function(){e?(a.setState({messageAll:""}),a.chatInputAll.current.focus()):(a.setState({message:""}),a.chatInput.current.focus())})).catch((function(e){return console.log(e)}))},a.changeResponse=function(e){var t=e.target.value,n=e.target.id.substring(9),r=a.state.currentEnvironment;r.questions[parseInt(n)].responses?r.questions[parseInt(n)].responses=[{text:t}]:r.questions[parseInt(n)].responses[0].text=t,a.setState(r)},a.changeValue=function(e){var t={};t[e.target.id]=e.target.value,a.setState(t)},a.selectAccount=function(e,t){var n=a.state["accounts"+t];n[e].color===Le.a[500]?n[e].color=Ae.a[500]:n[e].color=Le.a[500],a.setState(n)},a.handleCarGo=function(){var e=Object(b.a)(g.a.mark((function e(t){var n,r,s,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.state["car"+t],r=a.state["accounts"+t].filter((function(e){return e.color===Le.a[500]})).map((function(e){return{id:e.id}})),s=a.state["tool"+t].split(";").filter((function(e){return!!e})).map((function(e){return{description:e,environment:n.toEnvironment?n.toEnvironment:0}})),0===r.length||!n.toEnvironment){e.next=15;break}return e.prev=4,e.next=7,J.post("/api/transports",{accountGroup:{id:F().group},carIndex:t,accounts:r,tools:s,toEnvironment:n.toEnvironment,fromEnvironment:n.fromEnvironment,timestamp:1202020});case 7:(o={})["tool"+t]="",a.setState(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),a.onChangeEnvironmentTo=function(e,t){var n=a.state["car"+e];n.toEnvironment=t,a.setState(n)},a.handleSendResponses=Object(b.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state.currentEnvironment,t.questions.forEach((function(e){if(e.responses&&e.responses.length>0){var t=e.responses[0].text;J.post("/api/responses",{account:{id:F().id},text:t,question:{id:e.id}}).catch((function(e){console.log(e),alert("UM ERRO OCORREU! SALVE SUAS RESPOSTAS!")}))}}));case 3:case"end":return e.stop()}}),e)}))),a.chatInput=s.a.createRef(),a.chatInputAll=s.a.createRef(),a}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.handleMenu(),this.handleCurrentEnvironment(),this.handleMessages(),this.handleAccounts();var t=Re.a.over(new z.a("https://radioactive-game.herokuapp.com/gs-websocket",null,{transports:["xhr-streaming"],headers:{Authorization:"Bearer ".concat(D())}})),n=F();t.connect({},(function(){t.subscribe("/topic/messages/".concat(n.group),(function(t){var n=e.state,a=n.currentEnvironment,r=n.newMessages,s=n.menuRightOpen,o=e.state,i=JSON.parse(t.body),c=F(),l=r;s?l=0:i.account.id!==c.id&&l++,i.environment?i.environment.id===a.id?o.chatMessages=o.chatMessages.concat(i):l=r:o.chatMessagesAll=o.chatMessagesAll.concat(i),o.newMessages=l,e.setState(o)})),t.subscribe("/topic/transport/".concat(n.group),(function(t){var n=JSON.parse(t.body),a=F();1===n.accounts.filter((function(e){return e.id===a.id})).length?H().then((function(){var t=e.state.currentEnvironment;t.id=F().environment,e.setState(t),e.handleCurrentEnvironment(),e.handleMessages()})):e.handleTools(),e.state.isLeader&&e.handleAccounts()}))}),(function(){console.log("error")}))}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,r=n.menuLeftOpen,o=n.menuRightOpen,i=n.environments,c=n.currentEnvironment,l=n.message,u=n.chatMessages,p=n.newMessages,h=n.accounts1,m=n.accounts2,j=n.car1,g=n.car2,b=n.tool1,f=n.tool2,x=n.isLeader,v=n.chatMessagesAll,O=n.messageAll;return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(w.a,{}),Object(a.jsx)(ae.a,{position:"absolute",className:Object(te.a)(t.appBar,r&&t.appBarShift),children:Object(a.jsxs)(re.a,{className:t.toolbar,children:[Object(a.jsx)(oe.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleOpenLeftMenu,className:Object(te.a)(t.menuButtonLeft,r&&t.menuButtonHidden),children:Object(a.jsx)(ue.a,{})}),Object(a.jsx)(Y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:c.name}),Object(a.jsx)(oe.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleOpenRightMenu,className:Object(te.a)(t.menuButtonRight,o&&t.menuButtonHidden),children:Object(a.jsx)(je.a,{badgeContent:p,color:"secondary",children:Object(a.jsx)(Me.a,{})})}),Object(a.jsx)(oe.a,{edge:"start",color:"inherit",onClick:this.logout,children:Object(a.jsx)(je.a,{color:"secondary",children:Object(a.jsx)(Se.a,{})})})]})}),Object(a.jsxs)(ne.a,{variant:"permanent",classes:{paper:Object(te.a)(t.drawerPaper,!r&&t.drawerPaperClose)},open:r,children:[Object(a.jsx)("div",{className:t.toolbarIcon,children:Object(a.jsx)(oe.a,{onClick:this.handleCloseLeftMenu,children:Object(a.jsx)(pe.a,{})})}),Object(a.jsx)(se.a,{}),Object(a.jsx)(ge.a,{children:Object(a.jsx)("div",{children:i.map((function(e,t){return Object(a.jsxs)(ve.a,{button:!0,children:[Object(a.jsx)(Oe.a,{children:s.a.createElement(we[e.icon])}),Object(a.jsx)(be.a,{primary:e.name})]},"menu-".concat(e.id))}))})})]}),Object(a.jsxs)(fe.a,{anchor:"right",onClose:this.handleCloseRightMenu,onOpen:this.handleOpenRightMenu,open:o,children:[Object(a.jsx)("div",{className:t.toolbarIconRight,children:Object(a.jsx)(oe.a,{onClick:this.handleCloseRightMenu,children:Object(a.jsx)(me.a,{})})}),Object(a.jsx)(se.a,{}),Object(a.jsxs)(ge.a,{children:[Object(a.jsxs)("div",{className:t.rightMenu,children:[Object(a.jsxs)("h3",{children:["Mensagens com que est\xe1 no(a) ",c.name,":"]}),Object(a.jsx)("div",{className:t.chatMessages,children:u.map((function(e,n){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:t.chatMessageAccount,children:[e.account.name,": \xa0"]}),Object(a.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}})]},"chatMessages-".concat(e.id))}))}),Object(a.jsxs)("form",{className:t.chatForm,noValidate:!0,children:[Object(a.jsx)(S.a,{inputRef:this.chatInput,className:t.chatInput,variant:"outlined",margin:"dense",multiline:!0,inputProps:{maxLength:2048},rowsMax:4,fullWidth:!0,name:"message",type:"text",id:"message",value:l,onChange:this.changeMessage}),Object(a.jsx)(oe.a,{color:"primary","aria-label":"Enviar",onClick:function(){return e.handleSendMessage(!1)},children:Object(a.jsx)(ye.a,{})})]}),Object(a.jsx)("h3",{children:"Mensagens entre todos:"}),Object(a.jsx)("div",{className:t.chatMessages,children:v.map((function(e,n){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:t.chatMessageAccount,children:[e.account.name,": \xa0"]}),Object(a.jsx)("span",{dangerouslySetInnerHTML:{__html:e.text}})]},"chatMessages-".concat(e.id))}))}),Object(a.jsxs)("form",{className:t.chatForm,noValidate:!0,children:[Object(a.jsx)(S.a,{inputRef:this.chatInputAll,className:t.chatInput,variant:"outlined",margin:"dense",multiline:!0,inputProps:{maxLength:2048},rowsMax:4,fullWidth:!0,name:"messageAll",type:"text",id:"messageAll",value:O,onChange:this.changeMessage}),Object(a.jsx)(oe.a,{color:"primary","aria-label":"Enviar",onClick:function(){return e.handleSendMessage(!0)},children:Object(a.jsx)(ye.a,{})})]})]}),Object(a.jsx)(se.a,{})]})]}),Object(a.jsxs)("main",{className:t.content,children:[Object(a.jsx)("div",{className:t.appBarSpacer}),Object(a.jsxs)(C.a,{maxWidth:"lg",className:t.container,children:[Object(a.jsx)(ie.a,{container:!0,spacing:3,children:Object(a.jsxs)(ie.a,{item:!0,xs:12,children:[Object(a.jsxs)(ce.a,{className:t.paper,children:[Object(a.jsx)("h3",{children:Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:c.description}})}),Object(a.jsx)(se.a,{}),Object(a.jsxs)("form",{className:t.form,noValidate:!0,children:[c.questions.map((function(t,n){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:Object(a.jsx)("p",{dangerouslySetInnerHTML:{__html:t.description}})},"question-".concat(t.id)),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"response-".concat(n),label:"Resposta",multiline:!0,type:"text",inputProps:{maxLength:1024},rowsMax:4,id:"response-".concat(n),value:0===t.responses.length?"":t.responses[0].text,onChange:e.changeResponse},"response-".concat(n))]},"div-question-".concat(t.id))})),c.questions.length>0&&Object(a.jsx)(E.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:this.handleSendResponses,children:"Enviar"})]}),Object(a.jsx)(se.a,{}),Object(a.jsx)("div",{className:t.toolsDiv,children:c.tools.map((function(e,n){return Object(a.jsx)(M.a,{component:"div",display:"inline-block",p:1,m:1,className:t.tools,children:e.description},"tool-description-".concat(e.id))}))})]}),x&&Object(a.jsxs)(ie.a,{justify:"space-between",container:!0,spacing:2,children:[Object(a.jsx)(ie.a,{item:!0,xs:6,className:t.carGrid,children:Object(a.jsxs)(ce.a,{className:t.paper,children:[Object(a.jsxs)("h3",{children:["Carro 1 est\xe1 no(a) ",j.fromEnvironment.name]}),Object(a.jsx)(se.a,{}),h.map((function(t,n){return Object(a.jsxs)(ve.a,{button:!0,onClick:function(){return e.selectAccount(n,1)},children:[Object(a.jsx)(Oe.a,{children:Object(a.jsx)(Ce.a,{style:{color:t.color}})}),Object(a.jsx)(be.a,{primary:t.name})]},"account1-".concat(t.id))})),Object(a.jsx)(se.a,{}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"tool1",label:"Ferramentas",multiline:!0,type:"text",rowsMax:8,id:"tool1",value:b,onChange:this.changeValue},"tool1"),Object(a.jsx)(xe.a,{options:i.filter((function(e){return e.id!==j.fromEnvironment.id})),fullWidth:!0,renderOption:function(e){return Object(a.jsxs)(s.a.Fragment,{children:[s.a.createElement(we[e.icon]),e.name]})},value:j.toEnvironment,onChange:function(t,n){return e.onChangeEnvironmentTo(1,n)},getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(a.jsx)(S.a,Object(d.a)(Object(d.a)({},e),{},{label:"Indo para",variant:"outlined",inputProps:Object(d.a)({},e.inputProps)}))}}),Object(a.jsx)(oe.a,{color:"primary","aria-label":"Ir",className:t.carButton,onClick:function(){return e.handleCarGo(1)},children:Object(a.jsx)(ye.a,{})})]})}),Object(a.jsx)(ie.a,{item:!0,xs:6,className:t.carGrid,children:Object(a.jsxs)(ce.a,{className:t.paper,children:[Object(a.jsxs)("h3",{children:["Carro 2 est\xe1 no(a) ",g.fromEnvironment.name]}),Object(a.jsx)(se.a,{}),m.map((function(t,n){return Object(a.jsxs)(ve.a,{button:!0,onClick:function(){return e.selectAccount(n,2)},children:[Object(a.jsx)(Oe.a,{children:Object(a.jsx)(Ce.a,{style:{color:t.color}})}),Object(a.jsx)(be.a,{primary:t.name})]},"account2-".concat(t.id))})),Object(a.jsx)(se.a,{}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"tool2",label:"Ferramentas",multiline:!0,type:"text",rowsMax:8,id:"tool2",value:f,onChange:this.changeValue},"tool2"),Object(a.jsx)(xe.a,{options:i.filter((function(e){return e.id!==g.fromEnvironment.id})),fullWidth:!0,renderOption:function(e){return Object(a.jsxs)(s.a.Fragment,{children:[s.a.createElement(we[e.icon]),e.name]})},value:g.toEnvironment,onChange:function(t,n){return e.onChangeEnvironmentTo(2,n)},getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(a.jsx)(S.a,Object(d.a)(Object(d.a)({},e),{},{label:"Indo para",variant:"outlined",inputProps:Object(d.a)({},e.inputProps)}))}}),Object(a.jsx)(oe.a,{color:"primary","aria-label":"Ir",className:t.carButton,onClick:function(){return e.handleCarGo(2)},children:Object(a.jsx)(ye.a,{})})]})})]})]})}),Object(a.jsx)(M.a,{pt:4,children:Object(a.jsx)(X,{})})]})]})]})}}]),n}(r.Component),Be=Object(y.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),toolbarIconRight:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:Ne,width:"calc(100% - ".concat(Ne,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButtonLeft:{marginRight:36},menuButtonRight:{marginLeft:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:Ne,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(Ie.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",minHeight:540},fixedHeight:{height:240},rightMenu:{width:Ne,marginLeft:"10px",marginRight:"10px"},chatMessages:{height:"250px",overflowY:"auto",border:"1px solid black"},chatForm:{display:"flex",flexDirection:"row"},chatInput:{alignSelf:"flex-end"},chatMessageAccount:{fontWeight:"bold"},carGrid:{marginTop:"20px"},carButton:{width:"50px",alignSelf:"flex-end"},toolsDiv:{marginTop:"15px"},tools:{backgroundColor:"#3f51b5",color:"white"}}}))(Te),We=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return Object(a.jsx)(h.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return null!==localStorage.getItem(q)&&(new Date).getTime()/1e3<parseInt(localStorage.getItem(P))?Object(a.jsx)(t,Object(d.a)({},e)):Object(a.jsx)(h.a,{to:{pathname:"/",state:{from:e.location}}})}}))},qe=function(){return Object(a.jsx)(m.a,{basename:"/radioactive-game-web",children:Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{exact:!0,path:"/",component:ee}),Object(a.jsx)(h.b,{path:"/signup",component:Z}),Object(a.jsx)(We,{path:"/app",component:Be}),Object(a.jsx)(h.b,{path:"*",component:function(){return Object(a.jsx)("h1",{children:"Page not found"})}})]})})},Pe=function(){return Object(a.jsx)(qe,{})};i.a.render(Object(a.jsx)(Pe,{}),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.d847ae25.chunk.js.map