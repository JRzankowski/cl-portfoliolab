import React, {Component} from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import {Link} from "react-router-dom";
import app from "../../config/fire";

export default class Register extends Component {
    state = {
        passwordCheck: false,
        entryActive: true,
        error: true


    };
    componentWillUnmount() {
        this.setState({
            entryActive: false
        })
    }
    register = (e) => {
        e.preventDefault();
        if(!this.state.error){
            app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            })

        }

    };

    handleInput = e => {
        let regex = null;
        const input_regex = {
            email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,}))$/,
        };
        if (e.target.classList.contains('email')) {
            regex = input_regex.email;
        }
        if (e.target.classList.contains('password')) {
            if ((e.target.value.length) >= 6) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid');
                this.setState({
                    passwordCheck: true,
                    password : e.target.value
                })
            } else {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
                document.querySelector('.register-box__panel--input.repeat-password').disabled = true;
                this.setState({
                    passwordCheck: false,
                    password : ""
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
                this.setState({
                    error: false
                })
            } else {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
                this.setState({
                    error: true
                })
            }
        }
        if (regex) {
            if (regex.test(e.target.value)) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid');
                this.setState({
                    error: false,
                    email : e.target.value
                })
            } else {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
                this.setState({
                    error: true,
                    email : ""
                })
            }
        }
        if (e.target.value.length === 0) {
            e.target.classList.remove('valid', 'invalid');
            this.setState({
                error: true
            })
        }
    };

    render() {
        return (
            <section className='register'>
                <HomeHeader entryActive={this.state.entryActive}/>
                <div className="register-box">
                    <div className="register-box__top">
                        <h2 className="register-box__top--heading">Załóż konto</h2>
                        <div className="decoration"/>
                    </div>
                    <form onSubmit={this.register}>
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
                        <label className='register-box__panel--label ' htmlFor='password-repeat'>Powtórz hasło
                            <input disabled onInput={this.handleInput}
                                   className='register-box__panel--input repeat-password'
                                   type="password" id="password-repeat"/>
                            <p>Podane hasło nie jest takie samo!</p>
                        </label>
                    </div>
                    <Link className='register-box__button' to='/login'>Zaloguj się</Link>
                    <button className='register-box__button' type='submit'>Załóż konto</button>
                </form>
                </div>
            </section>
        )
    }
}