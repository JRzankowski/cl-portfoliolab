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
        'notes': null
    };

    handleChangeDate = date => {
        this.setState({
            date: date
        },()=>{
            this.props.setStepValue('step4Date',document.querySelector(".react-datepicker__input-container input").value)
        });

    };
    handleChangeHour = hour => {
        this.setState({
            hour: hour
        },()=>{
            this.props.setStepValue('step4Hour', document.querySelector(".box__input--text.number .react-datepicker-wrapper .react-datepicker__input-container input").value)
        });
    };
    handleClick = (e) => {
        if (e.target.classList.contains('give-stuff-step__box--next-btn')) {
            if (this.state.street && this.state.place && this.state.zipCode && this.state.telephone && this.state.date && this.state.hour && this.state.notes) {
                this.props.changeStep('summary')
            }
        } else if (e.target.classList.contains('give-stuff-step__box--previous-btn')) {
            this.props.changeStep('step3')
        }
    };

    handleInput = (e) => {
        if (e.target.classList.contains('street')) {
            this.setState({
                street: e.target.value
            });
            this.props.setStepValue('step4Street', this.state.street)
        }
        if (e.target.classList.contains('town')) {
            this.setState({
                place: e.target.value
            });
            this.props.setStepValue('step4Place', this.state.place)
        }
        if (e.target.classList.contains('zip-code')) {
            this.setState({
                zipCode: e.target.value
            });
            this.props.setStepValue('step4ZipCode', this.state.zipCode)
        }
        if (e.target.classList.contains('telephone')) {
            this.setState({
                telephone: e.target.value
            });
            this.props.setStepValue('step4Telephone', this.state.telephone)
        }
        if (e.target.classList.contains('text-area')) {
            this.setState({
                notes: e.target.value
            });
            this.props.setStepValue('step4Notes', this.state.notes)
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
                                    <input onInput={this.handleInput} className='box__input box__input-4 street'
                                           type='text'/>
                                </label>
                                <label className="box__input--text">
                                    <p> Miasto </p>
                                    <input onInput={this.handleInput} className='box__input box__input-4 town'
                                           type='text'/>
                                </label>
                                <label className="box__input--text">
                                    <p> Kod <br/> pocztowy </p>
                                    <input onInput={this.handleInput} className='box__input box__input-4 zip-code'
                                           type='text'/>
                                </label>
                                <label className="box__input--text">
                                    <p> Number <br/> telefonu </p>
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
                                    <textarea onInput={this.handleInput} className='box__input box__input-4 text-area'/>
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




