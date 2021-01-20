import React from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import Report from "./pages/report";

import {isAuthenticated} from "./services/auth";
import ReportOrdered from "./pages/reportOrdered";
import AccountGroup from "./pages/accountgroup";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: "/", state: {from: props.location}}}/>
            )
        }
    />
);

const Routes = () => (
    <HashRouter basename="/radioactive-game-web">
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/app" component={Home}/>
            <PrivateRoute path="/report" component={Report}/>
            <PrivateRoute path="/reportOrdered" component={ReportOrdered}/>
            <PrivateRoute path="/accountgroup" component={AccountGroup}/>
            <Route path="*" component={() => <h1>Page not found</h1>}/>
        </Switch>
    </HashRouter>
);

export default Routes;