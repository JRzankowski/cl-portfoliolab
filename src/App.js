import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import './scss/main.scss'
import Login from "./components/loginSection";
import Register from "./components/registerSection";
import HomeLoggedIn from "./components/HomeLoggedIn";
import LogOut from "./components/LogOut";
import fire from './config/fire'
import GiveStuff from "./components/GiveStuff";

export default class App extends Component {


    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route  path="/logged in" component={HomeLoggedIn}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/log-out" component={LogOut}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/give-stuff" component={GiveStuff}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}


