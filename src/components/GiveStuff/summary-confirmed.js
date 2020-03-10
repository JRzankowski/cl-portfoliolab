import React, {Component} from 'react';


export default class SummaryConfirmed extends Component {
    state = {};

    render() {
        let activeClass = '';
        if (this.props.isActive() === 'confirmed') {
            activeClass = 'active'
        } else {
            activeClass = 'hidden'
        }
        return (
            <section className={`give-stuff-step give-stuff-step-confirmed ${activeClass}`}>
                <div className="summary-confirmed__box">
                    <h2 className='summary-confirmed__box--text'>Dziękujemy za przesłanie formularza. <br/> Na maila prześlemy
                        wszelkie <br/> informacje o odbiorze.</h2>
                    <div className="decoration"/>
                </div>
            </section>
        );
    }
}




