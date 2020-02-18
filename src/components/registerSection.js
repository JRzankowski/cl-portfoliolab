import React, {Component} from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import {Link} from "react-router-dom";

export default class Register extends Component {
    render() {

        return (
            <section className='register'>
                <HomeHeader/>
                <div className="register-box">
                    <div className="register-box__top">
                        <h2 className="register-box__top--heading">Zaloguj się</h2>
                        <div className="decoration"/>
                    </div>
                    <div className="register-box__panel">
                        <label className='register-box__panel--label' htmlFor='email'>Email
                            <input className='register-box__panel--input' type="email" id="email"/>
                        </label>
                        <label className='register-box__panel--label' htmlFor='password'>Hasło
                            <input className='register-box__panel--input' type="password" id="password"/>
                        </label>
                        <label className='register-box__panel--label' htmlFor='password'>Powtórz hasło
                            <input className='register-box__panel--input' type="password" id="password"/>
                        </label>
                    </div>
                    <Link className='register-box__button' to='/register'>Zaloguj się</Link>
                    <Link className='register-box__button' to='/register' type='submit'>Załóż konto</Link>
                </div>
            </section>
        )
    }
}