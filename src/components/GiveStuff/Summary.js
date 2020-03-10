import React, {Component} from 'react';

import Icon1 from '../../assets/Icon-1.svg'
import Icon2 from '../../assets/Icon-4.svg'


export default class Summary extends Component {
    state = {};
    handleInput = (e) => {
        this.setState({
            organization: e.target.value
        }, () => {
            this.props.setStepValue('step3Organization', this.state.organization)
        });
    };
    handleClick = (e) => {
        if (e.target.classList.contains('give-stuff-step__box--next-btn')) {
            this.props.changeStep('confirmed')
        } else if (e.target.classList.contains('give-stuff-step__box--previous-btn')) {
            this.props.changeStep('step4')
        }
    };

    render() {
        let activeClass = '';
        if (this.props.isActive() === 'summary') {
            activeClass = 'active'
        } else {
            activeClass = 'hidden'
        }
        return (
            <section className={`give-stuff-step give-stuff-step-summary ${activeClass}`}>
                <div className="give-stuff-step__container">
                    <div className="give-stuff-step__box">
                        <div className="give-stuff-step__box--inputs">
                            <h2 className='box__heading'>Podsumownaie twojej darowizny</h2>
                            <p className='summary__text'>Oddajesz:</p>
                            <div className="summary__box">
                                <img src={Icon1} alt='cloth icon'/>
                                <p className='summary__info'>
                                    {this.props.step2Choice} worki, {this.props.step1Choice},
                                    {this.props.step3Help}
                                </p>
                            </div>
                            <div className="summary__box">
                                <img src={Icon2} alt='cloth icon'/>
                                <p className='summary__info'>
                                    do lokalizacji : {this.props.step3Localization}
                                </p>
                            </div>
                            <div className="summary-container">
                                <div className="box__input-container summary-info">
                                    <p className='box__input__heading summary-info'>Adres odbioru:</p>
                                    <div className="box__input__text">
                                        <p className='summary-info'>Ulica</p>
                                        <p className='summary-value'>{this.props.step4Street}</p>
                                    </div>
                                    <div className="box__input__text">
                                        <p className='summary-info'>Miasto</p>
                                        <p className='summary-value'>{this.props.step4Place}</p>
                                    </div>
                                    <div className="box__input__text">
                                        <p className='summary-info'>Kod pocztowy</p>
                                        <p className='summary-value'>{this.props.step4ZipCode}</p>
                                    </div>
                                    <div className="box__input__text">
                                        <p className='summary-info'>Numer telefonu</p>
                                        <p className='summary-value'>{this.props.step4Telephone}</p>
                                    </div>
                                </div>
                                <div className="box__input-container summary-info">
                                    <p className='box__input__heading summary-info'>Termin odbioru:</p>
                                    <div className="box__input__text">
                                        <p className='summary-info'>Data</p>
                                        <p className='summary-value'>{this.props.step4Date}</p>
                                    </div>
                                    <div className="box__input__text">
                                        <p className='summary-info'>Godzina</p>
                                        <p className='summary-value'>{this.props.step4Hour}</p>
                                    </div>
                                    <div className="box__input__text">
                                        <p className='summary-info'>Uwagi dla kuriera</p>
                                        <p className='summary-value'>{this.props.step4Note}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={this.handleClick} className="give-stuff-step__box--previous-btn">Wstecz
                        </button>
                        <button onClick={this.handleClick} className="give-stuff-step__box--next-btn">Potwierdzam
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}




