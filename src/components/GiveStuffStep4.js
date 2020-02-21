import React, {Component} from 'react';


export default class GiveStuffStep4 extends Component {
    state = {
        'street' : null,
        'place' : null,
        'zipCode' : null,
        'telephone' : null,
        'date' : null,
        'hour' : null,
        'notes' : null
    };
    handleClick = (e) => {
        if (e.target.classList.contains('give-stuff-step__box--next-btn')) {
            if (this.state.bags) {
                this.props.changeStep('step5')
            }
        } else if (e.target.classList.contains('give-stuff-step__box--previous-btn')) {
            this.props.changeStep('step3')
        }
    };

    render() {
        let activeClass = '';
        if (this.props.isActive() === 'step4') {
            activeClass = 'active'
        } else {
            activeClass = 'hidden'
        }
        return (
            <section className={`give-stuff-step give-stuff-step-4 ${activeClass}`}>
                <div className="give-stuff-step__container">
                    <div className="give-stuff-step__box">
                        <p className="give-stuff-step__box--current-step">Krok 4/4</p>
                        <div className="give-stuff-step__box--inputs">
                            <h2 className='box__heading'>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                            <div className="box__input-container">
                                <p className='box__input__heading'>Adres odbioru:</p>
                                <label className="box__input--text">
                                    Ulica
                                    <input className='box__input box__input-4' type='text'/>
                                </label>
                                <label className="box__input--text">
                                    Miasto
                                    <input className='box__input box__input-4' type='text'/>
                                </label>
                                <label className="box__input--text">
                                    Kod <br/> pocztowy
                                    <input className='box__input box__input-4' type='text'/>
                                </label>
                                <label className="box__input--text">
                                    Number <br/> telefonu
                                    <input className='box__input box__input-4' type='text'/>
                                </label>
                            </div>
                            <div className="box__input-container">
                                <p className='box__input__heading'>Termin odbioru:</p>
                                <label className="box__input--text">
                                    Data
                                    <input className='box__input box__input-4' type='date'/>
                                </label>
                                <label className="box__input--text">
                                    Godzina
                                    <input className='box__input box__input-4' type='date'/>
                                </label>

                            </div>
                        </div>
                        <button onClick={this.handleClick} className="give-stuff-step__box--previous-btn">Wstecz
                        </button>
                        <button onClick={this.handleClick} className="give-stuff-step__box--next-btn">Dalej</button>
                    </div>
                </div>
            </section>
        );
    }
}




