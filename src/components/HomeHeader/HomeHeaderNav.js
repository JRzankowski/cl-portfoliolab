import React, {Component} from "react";
import {Link} from 'react-scroll'

export default class HomeHeaderNav extends Component {
    render() {
        return (
            <div className='header__panel header__panel--nav'>
                <nav className="header__panel-nav">
                    <ul className='panel-nav__list'>
                        <Link smooth={true} to='' className='panel-nav__list--item active'>Start</Link>
                        <Link smooth={true} to='columns' className='panel-nav__list--item'>O co chodzi?</Link>
                        <Link smooth={true} to='aboutUs' className='panel-nav__list--item'>O nas</Link>
                        <Link smooth={true} to='whoWeHelp' className='panel-nav__list--item'>Fundacja i
                            organizacje</Link>
                        <Link smooth={true} to='' className='panel-nav__list--item'>Kontakt</Link>
                    </ul>
                </nav>
            </div>
        )
    }
}