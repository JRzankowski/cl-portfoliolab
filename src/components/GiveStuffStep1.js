import React, {Component} from 'react';


export default class GiveStuffStep1 extends Component {
    state = {
        choice1: false,
        choice2: false,
        choice3: false,
        choice4: false,
        choice5: false
    };
    setValue = (e) => {
        this.setState({
            [e.target.dataset.info]: e.target.checked
        });
        this.props.setStepValue('step1Choice', e.target.nextElementSibling.innerHTML);
        for (let i = 1;i <= 5; i++) {
            document.querySelector(`.give-stuff-step-1 .box__input.box__input-${i}`).checked = false;
        }
        e.target.checked = true;

    };
    handleClick = (e) =>{
        if (this.state.choice1 || this.state.choice2 || this.state.choice3 || this.state.choice4 || this.state.choice5) {
            this.props.changeStep('step2')
        }
    };
    render() {
        let activeClass = '';
        if(this.props.isActive() === 'step1'){
            activeClass = 'active'
        }else{
            activeClass='hidden'
        }
        return (
            <section className={`give-stuff-step give-stuff-step-1 ${activeClass}`}>
                <div className="give-stuff-step__container">
                    <div className="give-stuff-step__box">
                        <p className="give-stuff-step__box--current-step">Krok 1/4</p>
                        <div className="give-stuff-step__box--inputs">
                            <h2 className='box__heading'>Zaznacz co chcesz oddać:</h2>
                            <div className="box__input-container">
                                <label className="box__input--text">
                                    <input  onClick={this.setValue} data-info='choice1' className='box__input box__input-1'
                                           type='checkbox'/>
                                    <span className="label-text">ubrania, które nadają się do ponownego użycia</span>
                                </label>
                            </div>
                            <div className="box__input-container">

                                <label className="box__input--text">
                                    <input  onClick={this.setValue} data-info='choice2' className='box__input box__input-2'
                                           type='checkbox'/>
                                    <span className="label-text">ubrania, do wyrzucenia</span>
                                </label>
                            </div>
                            <div className="box__input-container">
                                <label className="box__input--text">
                                    <input  onClick={this.setValue} data-info='choice3' className='box__input box__input-3'
                                           type='checkbox'/>
                                    <span
                                        className="label-text">zabawki</span>
                                </label>
                            </div>
                            <div className="box__input-container">

                                <label className="box__input--text">
                                    <input  onClick={this.setValue} data-info='choice4' className='box__input box__input-4'
                                           type='checkbox'/>
                                    <span
                                        className="label-text">książki</span>
                                </label>
                            </div>
                            <div className="box__input-container">
                                <label className="box__input--text">
                                    <input onClick={this.setValue} data-info='choice5' className='box__input box__input-5'
                                           type='checkbox'/>
                                    <span className="label-text">inne</span>
                                </label>
                            </div>
                        </div>
                        <button onClick={this.handleClick} className="give-stuff-step__box--next-btn">Dalej</button>
                    </div>
                </div>
            </section>
        );
    }
}




