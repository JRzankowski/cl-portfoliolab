import React from 'react';
import {BrowserRouter as Router, Route, Switch,withRouter} from "react-router-dom";
import Home from "./components/Home";
import './scss/main.scss'
import Login from "./components/loginSection";
import Register from "./components/registerSection";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={withRouter(Home)}/>
                    <Route path="/login" component={withRouter(Login)}/>
                    <Route path="/register" component={withRouter(Register)}/>

                </Switch>
            </Router>
        </div>
    );
}


