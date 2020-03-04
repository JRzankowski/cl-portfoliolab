import {Link} from "react-router-dom";
import React, {Component} from "react";
import app from "../../config/fire";

export default class HomeHeaderEntry extends Component {
    render() {

        return (
            <div className='header__panel header__panel-entry'>
                <li className='header__panel-entry--user-email'>
                    <a className='entry-link entry-link__user-email'>cześć j.rzankowski@gmail.com</a>
                </li>
                <li className='header__panel-entry--stuff'>
                    <Link className='entry-link entry-link__stuff' to='/give-stuff'>Oddaj rzeczy</Link>
                </li>
                <li className='header__panel-entry--log-out'>
                    <Link onClick={() => app.auth().signOut()} className='entry-link entry-link__log-out' to='/log-out'>Wyloguj
                        się</Link>
                </li>
            </div>
        )


    }
}
