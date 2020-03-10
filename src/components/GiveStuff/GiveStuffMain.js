import React, {Component} from 'react';
import GiveStuffImportant from "./GiveStuffImportant";


export default class GiveStuffMain extends Component {
    render() {
        return (
            <>
                <section className="give-stuff">
                    <div className="give-stuff__img"/>
                    <div className="give-stuff__main">
                        <h2 className="main__heading">Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM </h2>
                        <div className="decoration"/>
                        <p className="main__text">Wystarczą 4 proste kroki:</p>
                        <div className="main__steps">
                            <div className="main__steps--step step-1">
                                <div className="step-container">
                                    <span className="step__number">1</span>
                                    <p className='step__description'>Wybierz rzeczy</p>
                                </div>
                            </div>
                            <div className="main__steps--step step-2">
                                <div className="step-container">
                                    <span className="step__number">2</span>
                                    <p className='step__description'>Spakuj je w worki</p>
                                </div>
                            </div>
                            <div className="main__steps--step step-3">
                                <div className="step-container">
                                    <span className="step__number">3</span>
                                    <p className='step__description'>Wybierz fundacje</p>
                                </div>
                            </div>
                            <div className="main__steps--step step-4">
                                <div className="step-container">
                                    <span className="step__number">4</span>
                                    <p className='step__description'>Zamów kuriera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GiveStuffImportant activeStep={this.props.activeStep}/>
            </>
        );
    }
}

