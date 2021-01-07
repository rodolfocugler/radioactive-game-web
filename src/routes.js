import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";


import {isAuthenticated} from "./services/auth";

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
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/app" component={Home}/>
            <Route path="*" component={() => <h1>Page not found</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;