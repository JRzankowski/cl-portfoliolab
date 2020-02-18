import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class HomeMainSection extends Component {
    render() {
        return (
        <section className="main-section">
            <div className="main-section--heroImg"/>
            <div className="main-section__panel">

                <div className="panel__top">
                    <h2 className='panel__top--heading'>Zacznij pomagać ! <br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <div className="panel__top--decoration"/>
                </div>
                <div className="panel__bottom">
                    <button className="panel__bottom-button">
                        <Link className='panel__bottom-button--link' to='/login'>Oddaj <br/> rzeczy</Link>
                    </button>
                    <button className="panel__bottom-button">
                        <Link className='panel__bottom-button--link' to='/login'>Zorganizuj <br/> zbiórkę</Link>
                    </button>
                </div>
            </div>

        </section>
        );
    }
}