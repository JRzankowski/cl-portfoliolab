import React, {Component} from 'react';
import WhoWeHelpOrg from "./whoWeHelpOrg";
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

export default class WhoWeHelp extends Component {

    state = {
        select: 'foundations'
    };
    handleClick = (e) => {
        e.target.classList.add('option-active');
        if (e.target.classList.contains('option-first')) {
            e.target.nextElementSibling.classList.remove('option-active');
            e.target.nextElementSibling.nextElementSibling.classList.remove('option-active');
            this.setState({
                select: 'foundations'
            });
        }
        if (e.target.classList.contains('option-second')) {
            e.target.nextElementSibling.classList.remove('option-active');
            e.target.previousElementSibling.classList.remove('option-active');
            this.setState({
                select: 'organizations'
            });
        }
        if (e.target.classList.contains('option-third')) {
            e.target.previousElementSibling.classList.remove('option-active');
            e.target.previousElementSibling.previousElementSibling.classList.remove('option-active');
            this.setState({
                select: 'local'
            });
        }
    };

    render() {
        return (

                <section id='whoWeHelp' className='who-we-help'>
                    <div className="who-we-help__container">
                        <h2 className="who-we-help__heading">Komu pomagamy ?</h2>
                        <div className="decoration"/>
                        <div className="who-we-help__options">
                            <div className="who-we-help__options-container">
                                <div onClick={this.handleClick} className="option option-first option-active">Fundacjom
                                </div>
                                <div onClick={this.handleClick} className="option option-second">Organizacją<br/>pozarządowym
                                </div>
                                <div onClick={this.handleClick} className="option option-third">Lokalnym <br/>zbiórkom
                                </div>
                            </div>
                        </div>
                        <WhoWeHelpOrg select={this.state.select}/>
                    </div>
                </section>



        )
    }
}