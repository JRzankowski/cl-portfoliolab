import React, {Component} from 'react';
import {Link} from "react-router-dom";
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';


export default class SimpleStepsSection extends Component {
    render() {
        return (
            <div id='simpleSteps' className='simple-steps-section'>
                <div className="simple-steps-section__box simple-steps-section__box--heading">
                    <h2 className='simple-steps-section__box--heading-title'>Wystarczą 4 proste kroki</h2>
                    <div className="decoration"/>
                </div>
                <div className="simple-steps-section__box simple-steps-section__box--steps">
                    <div className='simple-steps-section__box--steps-container'>
                        <div className="step step-choose">
                            <img src={icon1} alt='icon-cloth'/>
                            <p className='step__title'>Wybierz rzeczy</p>
                            <p className='step__text'>ubrania, zabawki, <br/> sprzęt i inne</p>
                        </div>
                        <div className="step step-pack">
                            <img src={icon2} alt='icon-shopping bag'/>
                            <p className='step__title'>Spakuj je</p>
                            <p className='step__text'>skorzystaj z <br/> worków na śmieci</p>
                        </div>
                        <div className="step step-find">
                            <img src={icon3} alt='icon-magnifier'/>
                            <p className='step__title'>Zadecyduj komu <br/> chcesz pomóc</p>
                            <p className='step__text'>wybierz zaufane <br/> miejsce</p>
                        </div>
                        <div className="step step-order">
                            <img src={icon4} alt='icon-order'/>
                            <p className='step__title'>Zamów kuriera</p>
                            <p className='step__text'>kurier przyjedzie <br/> w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <div className="simple-steps-section__box--button">
                    <button className="steps-btn">
                        <Link className='steps-btn__link' to='/login'>Oddaj <br/> rzeczy</Link>
                    </button>
                </div>
            </div>
        );
    }
}