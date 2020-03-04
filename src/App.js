import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./components/Home";
import './scss/main.scss'
import Login from "./components/loginSection";
import Register from "./components/registerSection";
import HomeLoggedIn from "./components/HomeLoggedIn";
import LogOut from "./components/LogOut";
import GiveStuff from "./components/GiveStuff";
import app from "./config/fire";
import {AuthProvider} from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";


export default class App extends Component {
    state = {
        user: {}
    };

    render() {
        console.log(process.env.REACT_APP_API_KEY);
        return (
            <div className="App">
                <AuthProvider>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <PrivateRoute exact path="/log In" component={HomeLoggedIn}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/log-out" component={LogOut}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/give-stuff" component={GiveStuff}/>
                        </Switch>
                    </Router>
                </AuthProvider>
            </div>
        );
    }
}


