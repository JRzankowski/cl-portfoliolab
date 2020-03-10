import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class GiveStuffStep4 extends Component {
    state = {
        'street': null,
        'place': null,
        'zipCode': null,
        'telephone': null,
        'hour': null,
        'notes': null,
    };

    handleChangeDate = date => {
        document.querySelector('.react-datepicker__input-container input').style.border = '1px solid green';
        this.setState({
            date: date
        }, () => {
            this.props.setStepValue('step4Date', document.querySelector(".react-datepicker__input-container input").value)
        });

    };
    handleChangeHour = hour => {
        document.querySelector('.box__input--text.number .react-datepicker-wrapper .react-datepicker__input-container input').style.border = '1px solid green';
        this.setState({
            hour: hour
        }, () => {
            this.props.setStepValue('step4Hour', document.querySelector(".box__input--text.number .react-datepicker-wrapper .react-datepicker__input-container input").value)
        });
    };
    handleClick = (e) => {
        if (e.target.classList.contains('give-stuff-step__box--next-btn')) {
            if (this.state.street && this.state.place && this.state.zipCode && this.state.telephone && this.state.date && this.state.hour) {
                this.props.changeStep('summary')
            }
        } else if (e.target.classList.contains('give-stuff-step__box--previous-btn')) {
            this.props.changeStep('step3')
        }
    };

    handleInput = (e) => {
        let regex = '';

        if (e.target.classList.contains('street')) {
            if (e.target.value.length >= 3) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid');
                e.target.previousElementSibling.classList.remove('active');
                this.setState({
                    street: e.target.value
                }, () => {
                    this.props.setStepValue('step4Street', this.state.street)
                });
            } else if (e.target.value.length === 0) {
                e.target.previousElementSibling.classList.remove('active');
                e.target.classList.remove('valid');
                e.target.classList.remove('invalid')
            } else {
                e.target.previousElementSibling.classList.add('active');
                e.target.classList.remove('valid');
                e.target.classList.add('invalid')
            }
        }
        if (e.target.classList.contains('town')) {
            if (e.target.value.length >= 3) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid');
                e.target.previousElementSibling.classList.remove('active');
                this.setState({
                    place: e.target.value
                }, () => {
                    this.props.setStepValue('step4Place', this.state.place)
                });
            } else if (e.target.value.length === 0) {
                e.target.previousElementSibling.classList.remove('active');
                e.target.classList.remove('valid');
                e.target.classList.remove('invalid')
            } else {
                e.target.previousElementSibling.classList.add('active');
                e.target.classList.remove('valid');
                e.target.classList.add('invalid')
            }
        }
        if (e.target.classList.contains('zip-code')) {
            regex = /[0-9]{2}-[0-9]{3}/;
            if (regex.test(e.target.value)) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid');
                e.target.previousElementSibling.classList.remove('active');
                this.setState({
                    zipCode: e.target.value
                }, () => {
                    this.props.setStepValue('step4ZipCode', this.state.zipCode)
                });
            } else if (e.target.value.length === 0) {
                e.target.previousElementSibling.classList.remove('active');
                e.target.classList.remove('valid');
                e.target.classList.remove('invalid')
            } else {
                e.target.previousElementSibling.classList.add('active');
                e.target.classList.remove('valid');
                e.target.classList.add('invalid')
            }
        }
        if (e.target.classList.contains('telephone')) {
            regex = /[0-9]/;
            if (regex.test(e.target.value) && e.target.value.length === 9) {
                e.target.classList.remove('invalid');
                e.target.classList.add('valid');
                e.target.previousElementSibling.classList.remove('active');
                this.setState({
                    telephone: e.target.value
                }, () => {
                    this.props.setStepValue('step4Telephone', this.state.telephone)
                });
            } else if (e.target.value.length === 0) {
                e.target.previousElementSibling.classList.remove('active');
                e.target.classList.remove('valid');
                e.target.classList.remove('invalid')
            } else {
                e.target.previousElementSibling.classList.add('active');
                e.target.classList.remove('valid');
                e.target.classList.add('invalid')
            }
        }
        if (e.target.classList.contains('text-area')) {
            this.setState({
                notes: e.target.value
            }, () => {
                this.props.setStepValue('step4Note', this.state.notes)
            });
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
                                    <p> Ulica </p>
                                    <p className='error'>Minimum 3 znaki!</p>
                                    <input onInput={this.handleInput} className='box__input box__input-4 street'
                                           type='text'/>
                                </label>
                                <label className="box__input--text">
                                    <p> Miasto </p>
                                    <p className='error'>Minimum 3 znaki!</p>
                                    <input onInput={this.handleInput} className='box__input box__input-4 town'
                                           type='text'/>

                                </label>
                                <label className="box__input--text">
                                    <p> Kod pocztowy </p>
                                    <p className='error'>Wymagany format: nn-nnn</p>
                                    <input onInput={this.handleInput} className='box__input box__input-4 zip-code'
                                           type='text'/>

                                </label>
                                <label className="box__input--text">
                                    <p> Numer telefonu </p>
                                    <p className='error'>Wymagane 9 cyfr!</p>
                                    <input onInput={this.handleInput} className='box__input box__input-4 telephone'
                                           type='text'/>

                                </label>
                            </div>
                            <div className="box__input-container">
                                <p className='box__input__heading'>Termin odbioru:</p>
                                <label className="box__input--text">
                                    <p> Data</p>
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.handleChangeDate}
                                        minDate={new Date()}
                                    />
                                </label>
                                <label className="box__input--text number">
                                    <p> Godzina </p>
                                    <DatePicker
                                        selected={this.state.hour}
                                        onChange={this.handleChangeHour}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Godzina"
                                        dateFormat="h:mm"
                                    />
                                </label>
                                <label className="box__input--text box__input--text-textarea">
                                    <p> Uwagi dla <br/> kuriera </p>
                                    <textarea onInput={this.handleInput}
                                              className='box__input box__input-4 text-area'/>
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




