import React, {Component} from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import {Link} from "react-router-dom";

export default class Login extends Component {


    handleInput = e => {
        let regex = null;
        const input_regex = {
            email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,}))$/,
        };
        if (e.target.classList.contains('email')) {
            regex = input_regex.email;
        }
        if (e.target.classList.contains('password')) {
            if ((e.target.value.length) > 6) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid')
            } else {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
            }
        }
        if (regex) {
            if (regex.test(e.target.value)) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid')

            } else {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
            }
        }
        if (e.target.value.length === 0) {
            e.target.classList.remove('valid', 'invalid');
        }
    };

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
                            <input onInput={this.handleInput} className='log-in-box__panel--input email' type="email"
                                   id="email"/>
                            <p>Podany email jest nieprawidłowy!</p>
                        </label>
                        <label className='log-in-box__panel--label' htmlFor='password'>Hasło
                            <input onInput={this.handleInput} className='log-in-box__panel--input password'
                                   type="password" id="password"/>
                            <p>Podane hasło jest za krótkie!</p>
                        </label>
                    </div>
                    <Link className='log-in-box__button' to='/register'>Załóż konto</Link>
                    <Link className='log-in-box__button' to='/register' type='submit'>Zaloguj się</Link>
                </div>
            </section>
        )
    }
}

