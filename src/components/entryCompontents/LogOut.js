import React, {Component} from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import {Link, Redirect} from "react-router-dom";

export default class LogOut extends Component {
    returnHome = () => {
        return (
            <Redirect to="/"/>
        )
    };

    render() {
        return (
            <section className='log-out'>
                <HomeHeader/>
                <div className="log-out__container">
                    <h2 className='log-out__heading'>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                    <div className="decoration"/>
                    <Link onClick={this.returnHome} className='log-out__main-page' to='/'>Strona główna</Link>
                </div>
            </section>
        )
    }
}


