import React, {Component} from 'react';

export default class GiveStuffStep3 extends Component {
    state = {
        localization: '— wybierz —',
        help: null,
        organization: null
    };
    handleClick = (e) => {
        if (e.target.classList.contains('give-stuff-step__box--next-btn')) {
            if ((this.state.localization && this.state.help) || this.state.organization) {
                this.props.changeStep('step4')
            }
        } else if (e.target.classList.contains('give-stuff-step__box--previous-btn')) {
            this.props.changeStep('step2')
        }
    };
    handleOptionClick = (e) => {
        this.setState({
            localization: e.target.innerHTML
        }, () => {
            this.props.setStepValue('step3Localization', this.state.localization)
        });
        document.querySelector('.box__input--select.step3').classList.remove('active')
    };
    setValue = (e) => {
        this.setState({
            help: e.target.dataset.name
        },()=>{
            this.props.setStepValue('step3Help', this.state.help)
        });
        for (let i = 1; i <= 5; i++) {
            document.querySelector(`.give-stuff-step-3 .box__input.box__input-${i}`).checked = false;
        }
        e.target.checked = true;

    };
    handleInput = (e)=>{
        this.setState({
            organization: e.target.value
        }, () => {
            this.props.setStepValue('step3Organization', this.state.organization)
        });
    };
    handleActiveClick=(e)=>{
        e.target.classList.toggle('active');
    };

    render() {
        let activeClass = '';
        if (this.props.isActive() === 'step3') {
            activeClass = 'active'
        } else {
            activeClass = 'hidden'
        }
        return (
            <section className={`give-stuff-step give-stuff-step-3 ${activeClass}`}>
                <div className="give-stuff-step__container">
                    <div className="give-stuff-step__box">
                        <p className="give-stuff-step__box--current-step">Krok 3/4</p>
                        <div className="give-stuff-step__box--inputs">
                            <div className="box__input-container">
                                <label className="box__input--text">Lokalizacja:
                                    <div onClick={this.handleActiveClick} className='box__input--select step3'>
                                        {this.state.localization}
                                        <div className="box__input--options">
                                            <div data-value='1' onClick={this.handleOptionClick}
                                                 className="box__input--option">Poznań
                                            </div>
                                            <div data-value='2' onClick={this.handleOptionClick}
                                                 className="box__input--option">Warszawa
                                            </div>
                                            <div data-value='3' onClick={this.handleOptionClick}
                                                 className="box__input--option">Kraków
                                            </div>
                                            <div data-value='4' onClick={this.handleOptionClick}
                                                 className="box__input--option">Wrocław
                                            </div>
                                            <div data-value='5' onClick={this.handleOptionClick}
                                                 className="box__input--option">Katowice
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="give-stuff-step__box--inputs step3">
                            <h2 className='box__heading'>Komu chcesz pomóc?</h2>
                            <div className="box__input-container">
                                <label className="box__input--text">
                                    <input onClick={this.setValue} data-info='choice1'
                                           className='box__input box__input-1'
                                           type='checkbox'
                                           data-name='dzieciom'
                                    />
                                    <span className="label-text"/>
                                </label>
                            </div>
                            <div className="box__input-container">

                                <label className="box__input--text">
                                    <input onClick={this.setValue} data-info='choice2'
                                           className='box__input box__input-2'
                                           type='checkbox'
                                           data-name='samotnym matkom'
                                    />
                                    <span className="label-text"/>
                                </label>
                            </div>
                            <div className="box__input-container">
                                <label className="box__input--text">
                                    <input onClick={this.setValue} data-info='choice3'
                                           className='box__input box__input-3'
                                           type='checkbox'
                                           data-name='bezdomnym'
                                    />
                                    <span
                                        className="label-text"/>
                                </label>
                            </div>
                            <div className="box__input-container">

                                <label className="box__input--text">
                                    <input onClick={this.setValue} data-info='choice4'
                                           className='box__input box__input-4'
                                           type='checkbox'
                                           data-name='niepełnosprawnym'
                                    />
                                    <span
                                        className="label-text"/>
                                </label>
                            </div>
                            <div className="box__input-container">
                                <label className="box__input--text">
                                    <input onClick={this.setValue} data-info='choice5'
                                           className='box__input box__input-5'
                                           type='checkbox'
                                           data-name='osobom starszym'
                                    />
                                    <span className="label-text"/>
                                </label>
                            </div>
                        </div>
                        <div className="box__input-container optional-organization">
                            <label className="box__input--text">
                                Wpisz nazwę konkretnej organizacji (opcjonalne)
                                <input onInput={this.handleInput} className='box__input box__input-5'/>

                            </label>
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





