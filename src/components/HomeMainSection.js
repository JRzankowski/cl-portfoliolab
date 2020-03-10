import React, {Component} from 'react';
import {Link} from "react-router-dom";
import app from "../config/fire";

export default class HomeMainSection extends Component {
state={
    giveStuffForms:false
};
    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({giveStuffForms: true});
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({giveStuffForms: false});
                localStorage.removeItem('user');
            }
        });
    };
    render() {
        return (
            <section id='start' className="main-section">
                <div className="main-section--heroImg"/>
                <div className="main-section__panel">
                    <div className="panel__top">
                        <h2 className='panel__top--heading'>Zacznij pomagać ! <br/> Oddaj niechciane rzeczy w zaufane
                            ręce</h2>
                        <div className="panel__top--decoration"/>
                    </div>
                    <div className="panel__bottom">
                        <button className="panel__bottom-button">
                            <Link className='panel__bottom-button--link' to={this.state.giveStuffForms ? '/give-stuff' : '/login'}>Oddaj <br/> rzeczy</Link>
                        </button>
                        <button className="panel__bottom-button">
                            <Link className='panel__bottom-button--link' to={this.state.giveStuffForms ? '/give-stuff' : '/login'}>Zorganizuj <br/> zbiórkę</Link>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}