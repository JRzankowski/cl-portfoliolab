import {BrowserRouter as Router, Link} from "react-router-dom";
import React, {Component} from "react";


export default class HomeHeaderEntry extends Component {
    render() {
        return (
            <div className='header__panel header__panel-entry'>
                <Router>
                    <li className='header__panel-entry--login'>
                        <Link className='entry-link entry-link__login' to='/login'>Zaloguj</Link>
                    </li>
                    <li className='header__panel-entry--register'>
                        <Link className='entry-link entry-link__register' to='/register'>Załóż konto</Link>
                    </li>
                </Router>
            </div>

        )
    }


}