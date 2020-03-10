import React, {Component} from 'react';
import Footer from "./Footer";

export default class ContactUs extends Component {

    state = {
        name: '',
        email: '',
        message: '',
    };
    handleInput = e => {
        let regex = null;
        const input_regex = {
            username: /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/,
            email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,}))$/,
        };
        if (e.target.classList.contains('name')) {
            regex = input_regex.username;
            this.setState({
                name: e.target.value
            })
        } else if (e.target.classList.contains('email')) {
            regex = input_regex.email;
            this.setState({
                email: e.target.value
            })
        } else if (e.target.classList.contains('text-area')) {
            this.setState({
                message: e.target.value
            });
            if ((e.target.value.length) > 120) {
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
    handleSubmit = e => {
        e.preventDefault();
        const url = `https://fer-api.coderslab.pl/v1/portfolio/contact`;
        const data = {name: this.state.name, email: this.state.email, message: this.state.message};
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(response => {
                    if (response.status === 'success') {
                        document.querySelector('.contact__form-message.error').classList.remove('active');
                        document.querySelector('.contact__form-message.success').classList.add('active')
                        for (let el of document.querySelectorAll('.input-validation')) {
                            el.value = "";
                        }
                    } else {
                        document.querySelector('.contact__form-message.success').classList.remove('active');
                        document.querySelector('.contact__form-message.error').classList.add('active');
                    }
                }
            )
    };

    render() {
        return (
            <>
                <section id='contact' className='contact'>
                    <div className="contact__img"/>
                    <div className="contact__form">
                        <div className="contact__form--container">
                            <h2 className="contact__form-heading">Skontaktuj się z nami</h2>
                            <div className="decoration"/>
                            <p className='contact__form-message success'>Wiadomość została wysłana! <br/> Wkrótce się
                                skontaktujemy</p>
                            <p className='contact__form-message error'>Coś poszło nie tak ...</p>
                            <form className="form" onSubmit={this.handleSubmit}>
                                <div className="form__inputs">
                                    <label className='form__inputs--label' htmlFor="name">Wpisz swoje imię:
                                        <input onInput={this.handleInput} placeholder='Krzysztof'
                                               className='form__inputs--input name input-validation' type="text"
                                               id="name"
                                               name="name"/>
                                        <p>Podane imię jest nieprawidłowe !</p>
                                    </label>
                                    <label className='form__inputs--label' htmlFor="email">Wpisz swój email:
                                        <input onInput={this.handleInput} placeholder='abc@xyz.pl'
                                               className='form__inputs--input email input-validation'
                                               type="email"
                                               id="email" name="email"/>
                                        <p>Podany email jest nieprawidłowy !</p>
                                    </label>
                                </div>
                                <label className='form__text-area-label' htmlFor="message">Wpisz swoją wiadomość:
                                    <textarea onInput={this.handleInput}
                                              className='form__text-area text-area input-validation'
                                              id="message"
                                              rows="4"
                                              cols="50"
                                              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    />
                                    <p>Wiadomość musi mieć conajmniej 120 znaków !</p>
                                </label>
                                <input className='form__submit' type="submit" value="Wyślij"/>
                            </form>
                        </div>
                    </div>
                    <Footer/>
                </section>
            </>
        );
    }
}