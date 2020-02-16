import React, {Component} from 'react';


export default class ContactUs extends Component {
    render() {
        return (
            <section className='contact'>
                <div className="contact__img"/>
                <div className="contact__form">
                    <div className="contact__form--container">
                    <h2 className="contact__form-heading">Skontaktuj się z nami</h2>
                    <div className="decoration"/>
                    <form className="form">
                        <div className="form__inputs">
                            <label className='form__inputs--label' htmlFor="name">Wpisz swoje imię:
                                <input placeholder='Krzysztof' className='form__inputs--input' type="text" id="name" name="name"/>
                            </label>
                            <label className='form__inputs--label' htmlFor="email">Wpisz swój email:
                                <input placeholder='abc@xyz.pl' className='form__inputs--input' type="email" id="email" name="email"/>
                            </label>

                        </div>
                        <label className='form__text-area-label' htmlFor="message">Wpisz swoją wiadomość:
                            <textarea className='form__text-area' id="message"
                                      rows="4"
                                      cols="50"
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </label>
                        <input className='form__submit' type="submit" value="Wyślij"/>
                    </form>
                    </div>
                </div>
            </section>

        );
    }
}