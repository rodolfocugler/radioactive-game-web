const drawerWidth = 350;

export const Styles = theme => ({
    root: {
        display: "flex",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    toolbarIconRight: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButtonLeft: {
        marginRight: 36,
    },
    menuButtonRight: {
        marginLeft: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
        minHeight: 540,
    },
    fixedHeight: {
        height: 240,
    },
    rightMenu: {
        width: drawerWidth,
        marginLeft: "10px",
        marginRight: "10px",
    },
    chatMessages: {
        height: "250px",
        overflowY: "auto",
        border: "1px solid black"
    },
    chatForm: {
        display: "flex",
        flexDirection: "row"
    },
    chatInput: {
        alignSelf: "flex-end"
    },
    chatMessageAccount: {
        fontWeight: "bold"
    },
    carGrid: {
        marginTop: "20px"
    },
    carButton:{
        width: "50px",
        alignSelf: "flex-end"
    },
    toolsDiv:{
        marginTop: "15px",
    },
    tools: {
        backgroundColor: "#3f51b5",
        color: "white"
    }
});