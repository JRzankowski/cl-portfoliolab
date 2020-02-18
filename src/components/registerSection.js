import React, {Component} from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import {Link} from "react-router-dom";

export default class Register extends Component {
    state = {
        passwordCheck: false
    };
    handleInput = e => {
        let regex = null;
        const input_regex = {
            email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,}))$/,
        };
        if (e.target.classList.contains('email')) {
            regex = input_regex.email;
        }
        if (e.target.classList.contains('password')) {
            if ((e.target.value.length) >= 6) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid');
                this.setState({
                    passwordCheck: true
                })
            } else {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
                document.querySelector('.register-box__panel--input.repeat-password').disabled = true;
                this.setState({
                    passwordCheck: false
                })
            }
        }
        if (this.state.passwordCheck) {
            document.querySelector('.register-box__panel--input.repeat-password').removeAttribute('disabled');
        } else {
            document.querySelector('.register-box__panel--input.repeat-password').disabled = true;
            document.querySelector('.register-box__panel--input.repeat-password').value = "";
            document.querySelector('.register-box__panel--input.repeat-password').classList.remove('invalid');
            document.querySelector('.register-box__panel--input.repeat-password').classList.remove('valid');
        }
        if (e.target.classList.contains('repeat-password')) {
            if (e.target.value === document.querySelector('.register-box__panel--input.password').value) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid');
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
            <section className='register'>
                <HomeHeader/>
                <div className="register-box">
                    <div className="register-box__top">
                        <h2 className="register-box__top--heading">Zaloguj się</h2>
                        <div className="decoration"/>
                    </div>
                    <div className="register-box__panel">
                        <label className='register-box__panel--label' htmlFor='email'>Email
                            <input onInput={this.handleInput} className='register-box__panel--input email' type="email"
                                   id="email"/>
                            <p>Podany email jest nieprawidłowy!</p>
                        </label>
                        <label className='register-box__panel--label ' htmlFor='password'>Hasło
                            <input onInput={this.handleInput} className='register-box__panel--input password'
                                   type="password" id="password"/>
                            <p>Podane hasło jest za krótkie!</p>
                        </label>
                        <label className='register-box__panel--label ' htmlFor='password'>Powtórz hasło
                            <input disabled onInput={this.handleInput}
                                   className='register-box__panel--input repeat-password'
                                   type="password" id="password"/>
                            <p>Podane hasło nie jest takie samo!</p>
                        </label>
                    </div>
                    <Link className='register-box__button' to='/login'>Zaloguj się</Link>
                    <Link className='register-box__button' to='/register' type='submit'>Załóż konto</Link>
                </div>
            </section>
        )
    }
}