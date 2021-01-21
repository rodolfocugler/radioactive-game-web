import React, {Component} from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {Badge, Button, List, ListItemText, Snackbar, SwipeableDrawer, TextField, withStyles} from "@material-ui/core";
import {Alert, Autocomplete} from "@material-ui/lab";
import {Copyright} from "../../utils/app";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import * as Icons from "@material-ui/icons";
import {Adjust, ExitToApp, Send} from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {Styles} from "./styles";
import Stomp from 'stompjs';
import {api, wsClient} from "../../services/api";
import {getUser, logout, refreshLogin} from "../../services/auth";
import {green, red} from "@material-ui/core/colors";
import {number} from "prop-types";

class Home extends Component {
    state = {
        message: "",
        messageAll: "",
        menuLeftOpen: false,
        menuRightOpen: false,
        alertOpen: false,
        alert: "",
        environments: [],
        currentEnvironment: {
            id: getUser().environment,
            questions: [{
                id: 0,
                description: "",
                responses: []
            }],
            tools: []
        },
        chatMessages: [],
        chatMessagesAll: [],
        newMessages: 0,
        accounts1: [],
        accounts2: [],
        car1: {
            fromEnvironment: {
                id: 1,
                name: ""
            },
            toEnvironment: {
                id: 1,
                name: ""
            }
        },
        car2: {
            fromEnvironment: {
                id: 1,
                name: ""
            },
            toEnvironment: {
                id: 1,
                name: ""
            }
        },
        tool1: "",
        tool2: "",
        isLeader: getUser().isLeader
    };

    constructor(props) {
        super(props);
        this.chatInput = React.createRef();
        this.chatInputAll = React.createRef();
    }

    async componentDidMount() {
        await refreshLogin();
        this.handleMenu();
        this.handleCurrentEnvironment();
        this.handleMessages();
        this.handleAccounts();

        const stompClient = Stomp.over(wsClient());
        const user = getUser();
        stompClient.connect({}, () => {
            stompClient.subscribe(`/topic/messages/${user.group}`,
                (response) => {
                    const {currentEnvironment, newMessages, menuRightOpen} = this.state;
                    const nextState = this.state;
                    const message = JSON.parse(response.body);
                    const user = getUser();

                    let numberOfNewMessages = newMessages;
                    if (menuRightOpen) {
                        numberOfNewMessages = 0;
                    } else if (message.account.id !== user.id) {
                        numberOfNewMessages++;
                    }

                    if (!message.environment) {
                        nextState["chatMessagesAll"] = nextState["chatMessagesAll"].concat(message);
                    } else if (message.environment.id === currentEnvironment.id) {
                        nextState["chatMessages"] = nextState["chatMessages"].concat(message);
                    } else {
                        numberOfNewMessages = newMessages;
                    }
                    nextState["newMessages"] = numberOfNewMessages;
                    this.setState(nextState);
                });

            stompClient.subscribe(`/topic/transport/${user.group}`,
                response => {
                    const transport = JSON.parse(response.body);
                    const user = getUser();
                    if (transport.accounts.filter(a => a.id === user.id).length === 1) {
                        refreshLogin().then(() => {
                            const nextState = this.state["currentEnvironment"];
                            nextState["id"] = getUser().environment;
                            this.setState(nextState);
                            this.handleCurrentEnvironment();
                            this.handleMessages();
                        });
                    } else {
                        this.handleTools();
                    }

                    const {isLeader} = this.state;
                    if (isLeader) this.handleAccounts();
                });
        }, () => {
            console.log("error");
        });
    }

    logout = () => {
        logout();
        this.props.history.push("/");
    };

    handleMenu = () => {
        api.get("/api/environments")
            .then(response =>
                this.setState({environments: response.data})
            );
    };

    handleAccounts = () => {
        api.get(`/api/accountGroups/${getUser().group}`)
            .then(response => {
                    response.data.accounts.forEach(value => value["color"] = red[500]);
                    this.setState({
                        accounts: response.data.accounts
                    });

                    this.handleCars(1);
                    this.handleCars(2);
                }
            );
    };

    handleCars = (carIndex) => {
        api.get(`/api/transports/getByIndex/${carIndex}/${getUser().group}`)
            .then(response => {
                    const {accounts} = this.state;
                    const list = JSON.parse(JSON.stringify(accounts));
                    const nextState = {};
                    response.data.fromEnvironment = response.data.toEnvironment;
                    response.data.toEnvironment = undefined;
                    nextState["car" + carIndex] = response.data;
                    nextState["accounts" + carIndex] = list
                        .filter(a => a.environment.id === response.data.fromEnvironment.id);
                    let tools = "";
                    response.data.fromEnvironment.tools.forEach(t => tools += t.description + "; ");
                    nextState["tool" + carIndex] = tools.trim();
                    this.setState(nextState);
                }
            );
    };

    handleCurrentEnvironment = () => {
        api.get(`/api/environments/getWithUserResponses`)
            .then(response =>
                this.setState({currentEnvironment: response.data})
            );
    };

    handleTools = () => {
        api.get(`/api/environments/getWithUserResponses`)
            .then(response => {
                const {currentEnvironment} = this.state;
                currentEnvironment["tools"] = response.data.tools;
                this.setState(currentEnvironment);
            });
    };

    handleMessages = () => {
        api.get(`/api/chatMessages/getByEnvironmentId/${this.state.currentEnvironment.id}`)
            .then(response =>
                this.setState({chatMessages: response.data})
            );

        api.get(`/api/chatMessages/getByAccountGroup`)
            .then(response =>
                this.setState({chatMessagesAll: response.data})
            );
    };

    handleOpenLeftMenu = () => {
        this.setState({menuLeftOpen: true});
    }

    handleCloseLeftMenu = () => {
        this.setState({menuLeftOpen: false});
    }

    handleOpenRightMenu = () => {
        this.setState({
            menuRightOpen: true,
            newMessages: 0
        });
    }

    handleCloseRightMenu = () => {
        this.setState({menuRightOpen: false});
    }

    changeMessage = (e) => {
        const nextState = {}
        nextState[e.target.id] = e.target.value;
        this.setState(nextState);
    }

    handleSendMessage = (isAll) => {
        const {message, messageAll} = this.state;
        const endpoint = isAll ? "/all" : "";
        const msg = isAll ? messageAll : message;
        if (msg !== "") {
            api.post("/api/chatMessages" + endpoint, {
                "text": msg
            }).then(() => {
                if (isAll) {
                    this.setState({"messageAll": ""});
                    this.chatInputAll.current.focus();
                } else {
                    this.setState({"message": ""});
                    this.chatInput.current.focus();
                }
            }).catch(err => console.log(err));
        }
    }

    changeResponse = (e) => {
        const value = e.target.value;
        const name = e.target.id;
        const index = name.substring(9);
        const nextState = this.state["currentEnvironment"];

        if (!!nextState["questions"][parseInt(index)]["responses"]) {
            nextState["questions"][parseInt(index)]["responses"] = [{"text": value}];
        } else {
            nextState["questions"][parseInt(index)]["responses"][0]["text"] = value;
        }

        this.setState(nextState);
    }

    changeValue = (e) => {
        const nextState = {};
        nextState[e.target.id] = e.target.value;
        this.setState(nextState);
    }

    selectAccount = (accountIndex, carNumber) => {
        const nextState = this.state["accounts" + carNumber];
        if (nextState[accountIndex]["color"] === green[500]) {
            nextState[accountIndex]["color"] = red[500];
        } else {
            nextState[accountIndex]["color"] = green[500];
        }
        this.setState(nextState);
    }

    handleCarGo = async (carNumber) => {
        const car = this.state["car" + carNumber];
        const accounts = this.state["accounts" + carNumber]
            .filter(a => a.color === green[500])
            .map(a => {
                return {id: a.id}
            });
        const tools = this.state["tool" + carNumber]
            .split(";")
            .filter(t => !!t)
            .map(t => {
                return {
                    description: t,
                    environment: !!car["toEnvironment"] ? car["toEnvironment"] : 0
                }
            });

        if (accounts.length !== 0 && !!car["toEnvironment"]) {
            try {
                await api.post("/api/transports", {
                    accountGroup: {id: getUser().group},
                    carIndex: carNumber,
                    accounts: accounts,
                    tools: tools,
                    toEnvironment: car["toEnvironment"],
                    fromEnvironment: car["fromEnvironment"],
                    timestamp: 1202020
                });

                const nextState = {};
                nextState["tool" + carNumber] = "";
                nextState["alertOpen"] = true;
                nextState["alert"] = `Carro ${carNumber} enviado!`;

                this.setState(nextState);
            } catch (err) {
                console.log(err);
            }
        }
    };

    onChangeEnvironmentTo = (carNumber, value) => {
        const nextState = this.state["car" + carNumber];
        nextState["toEnvironment"] = value;
        this.setState(nextState);
    }

    handleSendResponses = async () => {
        const {currentEnvironment} = this.state;
        const questions = currentEnvironment.questions;

        const alertMessage = questions.length > 1 ? "As respostas foram salvas!" : "A resposta foi salva!";

        let savedResponses = 0;
        await questions.forEach(question => {
            if (!!question.responses && question.responses.length > 0) {
                const response = question.responses[0].text.trim();

                if (response.length > 0) {
                    api.post("/api/responses", {
                        account: {id: getUser().id},
                        text: response,
                        question: {id: question.id}
                    })
                        .then(() => {
                            if (questions.length === ++savedResponses) {
                                this.setState({
                                    alertOpen: true,
                                    alert: alertMessage
                                });
                            }
                        })
                        .catch(reason => {
                            console.log(reason);
                            alert("UM ERRO OCORREU! SALVE SUAS RESPOSTAS!");
                        });
                }
            }
        });
    }

    handleCloseAlert = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        this.setState({alertOpen: false});
    };

    render() {
        const {classes} = this.props;
        const {
            menuLeftOpen, menuRightOpen, environments, currentEnvironment,
            message, chatMessages, newMessages, accounts1, accounts2, alertOpen,
            car1, car2, tool1, tool2, isLeader, chatMessagesAll, messageAll, alert
        } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="absolute" className={clsx(classes.appBar, menuLeftOpen && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleOpenLeftMenu}
                            className={clsx(classes.menuButtonLeft, menuLeftOpen && classes.menuButtonHidden)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            {currentEnvironment.name}
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleOpenRightMenu}
                            className={clsx(classes.menuButtonRight, menuRightOpen && classes.menuButtonHidden)}
                        >
                            <Badge badgeContent={newMessages} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={this.logout}>
                            <Badge color="secondary">
                                <ExitToApp/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !menuLeftOpen && classes.drawerPaperClose),
                    }}
                    open={menuLeftOpen}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleCloseLeftMenu}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <div>
                            {environments.map((value, index) => {
                                return <ListItem button key={`menu-${value.id}`}>
                                    <ListItemIcon>
                                        {React.createElement(Icons[value.icon])}
                                    </ListItemIcon>
                                    <ListItemText primary={value.name}/>
                                </ListItem>
                            })}
                        </div>
                    </List>
                </Drawer>
                <SwipeableDrawer
                    anchor="right"
                    onClose={this.handleCloseRightMenu}
                    onOpen={this.handleOpenRightMenu}
                    open={menuRightOpen}
                >
                    <div className={classes.toolbarIconRight}>
                        <IconButton onClick={this.handleCloseRightMenu}>
                            <ChevronRightIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <div className={classes.rightMenu}>
                            <h3>Chat com que está no(a) {currentEnvironment.name} (mesmo lugar que você):</h3>
                            <div className={classes.chatMessages}>
                                {chatMessages.map((value, index) => {
                                    return <div key={`chatMessages-${value.id}`}>
                                        <span className={classes.chatMessageAccount}>
                                            {value.account.name}: &nbsp;
                                        </span>
                                        <span dangerouslySetInnerHTML={{__html: value.text}}/>
                                    </div>
                                })}
                            </div>
                            <form className={classes.chatForm} noValidate>
                                <TextField
                                    inputRef={this.chatInput}
                                    className={classes.chatInput}
                                    variant="outlined"
                                    margin="dense"
                                    multiline
                                    inputProps={{maxLength: 2048}}
                                    rowsMax={4}
                                    fullWidth
                                    name="message"
                                    type="text"
                                    id="message"
                                    value={message}
                                    onChange={this.changeMessage}
                                />
                                <IconButton color="primary" aria-label="Enviar"
                                            onClick={() => this.handleSendMessage(false)}>
                                    <Send/>
                                </IconButton>
                            </form>

                            <h3>Chat com todos:</h3>
                            <div className={classes.chatMessages}>
                                {chatMessagesAll.map((value, index) => {
                                    return <div key={`chatMessages-${value.id}`}>
                                        <span className={classes.chatMessageAccount}>
                                            {value.account.name}: &nbsp;
                                        </span>
                                        <span dangerouslySetInnerHTML={{__html: value.text}}/>
                                    </div>
                                })}
                            </div>
                            <form className={classes.chatForm} noValidate>
                                <TextField
                                    inputRef={this.chatInputAll}
                                    className={classes.chatInput}
                                    variant="outlined"
                                    margin="dense"
                                    multiline
                                    inputProps={{maxLength: 2048}}
                                    rowsMax={4}
                                    fullWidth
                                    name="messageAll"
                                    type="text"
                                    id="messageAll"
                                    value={messageAll}
                                    onChange={this.changeMessage}
                                />
                                <IconButton color="primary" aria-label="Enviar"
                                            onClick={() => this.handleSendMessage(true)}>
                                    <Send/>
                                </IconButton>
                            </form>
                        </div>
                        <Divider/>
                    </List>
                </SwipeableDrawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <h1>Você está no(a) {currentEnvironment.name}</h1>
                                    <div dangerouslySetInnerHTML={{__html: currentEnvironment.description}}/>

                                    <Divider/>
                                    <form className={classes.form} noValidate>
                                        {currentEnvironment.questions.map((value, index) => {
                                            return <div key={`div-question-${value.id}`}>
                                                <p dangerouslySetInnerHTML={{__html: value.description}}
                                                   key={`question-${value.id}`}/>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
                                                    name={`response-${index}`}
                                                    label="Resposta"
                                                    multiline
                                                    type="text"
                                                    inputProps={{maxLength: 1024}}
                                                    rowsMax={4}
                                                    key={`response-${index}`}
                                                    id={`response-${index}`}
                                                    value={value.responses.length === 0 ? "" : value.responses[0].text}
                                                    onChange={this.changeResponse}
                                                />
                                            </div>;
                                        })}

                                        {currentEnvironment.questions.length > 0 && <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                            onClick={this.handleSendResponses}
                                        >
                                            Enviar
                                        </Button>}
                                    </form>

                                    <Snackbar open={alertOpen} autoHideDuration={6000} onClose={this.handleCloseAlert}>
                                        <Alert onClose={this.handleCloseAlert} severity="success">
                                            {alert}
                                        </Alert>
                                    </Snackbar>

                                    <Divider/>
                                    <div className={classes.toolsDiv}>
                                        {currentEnvironment.tools.map((value, index) => {
                                            return <Box component="div" display="inline-block" p={1} m={1}
                                                        className={classes.tools}
                                                        key={`tool-description-${value.id}`}>
                                                {value.description}
                                            </Box>;
                                        })}
                                    </div>
                                </Paper>

                                {isLeader && <Grid justify="space-between" container spacing={2}>
                                    <Grid item xs={6} className={classes.carGrid}>
                                        <Paper className={classes.paper}>
                                            <h3>Carro 1 está no(a) {car1.fromEnvironment.name}</h3>
                                            <Divider/>

                                            {accounts1.map((value, index) => {
                                                return <ListItem button key={`account1-${value.id}`}
                                                                 onClick={() => this.selectAccount(index, 1)}>
                                                    <ListItemIcon>
                                                        <Adjust style={{color: value.color}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={value.name}/>
                                                </ListItem>
                                            })}
                                            <Divider/>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="tool1"
                                                label="Ferramentas"
                                                multiline
                                                type="text"
                                                rowsMax={8}
                                                key="tool1"
                                                id="tool1"
                                                value={tool1}
                                                onChange={this.changeValue}
                                            />
                                            <Autocomplete
                                                options={environments.filter(e => e.id !== car1.fromEnvironment.id)}
                                                fullWidth
                                                renderOption={(option) => (
                                                    <React.Fragment>
                                                        {React.createElement(Icons[option.icon])}
                                                        {option.name}
                                                    </React.Fragment>
                                                )}
                                                value={car1.toEnvironment}
                                                onChange={(event, value) => this.onChangeEnvironmentTo(1, value)}
                                                getOptionLabel={(option) => option.name}
                                                renderInput={(params) =>
                                                    <TextField {...params} label="Indo para" variant="outlined"
                                                               inputProps={{...params.inputProps}}/>}
                                            />

                                            <IconButton color="primary" aria-label="Ir" className={classes.carButton}
                                                        onClick={() => this.handleCarGo(1)}>
                                                <Send/>
                                            </IconButton>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6} className={classes.carGrid}>
                                        <Paper className={classes.paper}>
                                            <h3>Carro 2 está no(a) {car2.fromEnvironment.name}</h3>
                                            <Divider/>

                                            {accounts2.map((value, index) => {
                                                return <ListItem button key={`account2-${value.id}`}
                                                                 onClick={() => this.selectAccount(index, 2)}>
                                                    <ListItemIcon>
                                                        <Adjust style={{color: value.color}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={value.name}/>
                                                </ListItem>
                                            })}
                                            <Divider/>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="tool2"
                                                label="Ferramentas"
                                                multiline
                                                type="text"
                                                rowsMax={8}
                                                key="tool2"
                                                id="tool2"
                                                value={tool2}
                                                onChange={this.changeValue}
                                            />

                                            <Autocomplete
                                                options={environments.filter(e => e.id !== car2.fromEnvironment.id)}
                                                fullWidth
                                                renderOption={(option) => (
                                                    <React.Fragment>
                                                        {React.createElement(Icons[option.icon])}
                                                        {option.name}
                                                    </React.Fragment>
                                                )}
                                                value={car2.toEnvironment}
                                                onChange={(event, value) => this.onChangeEnvironmentTo(2, value)}
                                                getOptionLabel={(option) => option.name}
                                                renderInput={(params) =>
                                                    <TextField {...params} label="Indo para" variant="outlined"
                                                               inputProps={{...params.inputProps}}/>}
                                            />

                                            <IconButton color="primary" aria-label="Ir" className={classes.carButton}
                                                        onClick={() => this.handleCarGo(2)}>
                                                <Send/>
                                            </IconButton>
                                        </Paper>
                                    </Grid>
                                </Grid>}
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            <Copyright/>
                        </Box>
                    </Container>
                </main>
            </div>
        );
    }
}

export default withStyles(Styles)(Home)
