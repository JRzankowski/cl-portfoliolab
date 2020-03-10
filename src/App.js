import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from "./components/Home";
import './scss/main.scss'
import Login from "./components/entryCompontents/loginSection";
import Register from "./components/entryCompontents/registerSection";
import HomeLoggedIn from "./components/HomeLoggedIn";
import LogOut from "./components/entryCompontents/LogOut";
import GiveStuff from "./components/GiveStuff/GiveStuff";
import app from "./config/fire";

export default class App extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user:user.email});
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({user: null});
                localStorage.removeItem('user');
            }
        });
    };
    isLogged = () => {
        if (typeof this.state.user ==='string') {
            return <Redirect to="/"/>
        }else{
            return null
        }
    };
    render() {
        return (
            <div className="App">
                <Router>
                    {this.isLogged()}
                    <Route exact path="/" component={Home}/>
                    <Route path="/loggedIn" component={HomeLoggedIn}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/log-out" component={LogOut}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/give-stuff" component={GiveStuff}/>
                </Router>
            </div>
        );
    }
}


