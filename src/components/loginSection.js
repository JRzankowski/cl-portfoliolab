import React, {Component} from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {

        return (
            <section className='login'>
                <HomeHeader/>
                <div className="log-in-box">
                    <div className="log-in-box__top">
                        <h2 className="log-in-box__top--heading">Zaloguj się</h2>
                        <div className="decoration"/>
                    </div>
                    <div className="log-in-box__panel">
                        <label className='log-in-box__panel--label' htmlFor='email'>Email
                            <input className='log-in-box__panel--input' type="email" id="email"/>
                        </label>
                        <label className='log-in-box__panel--label' htmlFor='password'>Hasło
                            <input className='log-in-box__panel--input' type="password" id="password"/>
                        </label>
                    </div>
                    <Link className='log-in-box__button' to='/register'>Załóż konto</Link>
                    <Link className='log-in-box__button' to='/register' type='submit'>Zaloguj się</Link>
                </div>
            </section>
        )
    }
}

