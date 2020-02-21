import React, {Component} from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import {Link} from "react-router-dom";

export default class LogOut extends Component {

    render() {
        return (
            <section className='log-out'>
                <HomeHeader/>
                <div className="log-out__container">
                    <h2 className='log-out__heading'>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                    <div className="decoration"/>
                    <Link className='log-out__main-page' to='/'>Strona główna</Link>
                </div>
            </section>
        )
    }
}


