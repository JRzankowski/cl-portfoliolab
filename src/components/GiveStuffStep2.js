import React, {Component} from 'react';


export default class GiveStuffStep1 extends Component {
    state = {
        bags: '— wybierz —'
    };


    handleClick = (e) => {
        if (this.state.choice) {
            this.props.changeStep('step3', 'active')
        }
    };

    handleOptionClick=(e)=>{
        this.setState({
            bags : e.target.innerHTML
        })
    };


    render() {
        console.log('co');
        return (
            <section className="give-stuff-step give-stuff-step-2">
                <div className="give-stuff-step__container">
                    <div className="give-stuff-step__box">
                        <p className="give-stuff-step__box--current-step">Krok 2/4</p>
                        <div className="give-stuff-step__box--inputs">
                            <h2 className='box__heading'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                            <div className="box__input-container">
                                <label className="box__input--text">Liczba 60l worków:
                                    <div className='box__input--select'>
                                        {this.state.bags}
                                        <div className="box__input--options">
                                            <div data-value='1' onClick={this.handleOptionClick} className="box__input--option">1</div>
                                            <div data-value='2' onClick={this.handleOptionClick} className="box__input--option">2</div>
                                            <div data-value='3' onClick={this.handleOptionClick} className="box__input--option">3</div>
                                            <div data-value='4' onClick={this.handleOptionClick} className="box__input--option">4</div>
                                            <div data-value='5' onClick={this.handleOptionClick} className="box__input--option">5</div>
                                        </div>

                                    </div>

                                </label>
                            </div>
                        </div>
                        <button onClick={this.handleClick} className="give-stuff-step__box--next-btn">Wstecz</button>
                        <button onClick={this.handleClick} className="give-stuff-step__box--next-btn">Dalej</button>
                    </div>
                </div>
            </section>
        );
    }
}




