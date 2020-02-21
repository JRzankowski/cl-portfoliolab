import React, {Component} from 'react';

import HomeHeaderLoggedIn from "./HomeHeader/HomeHeaderLoggedIn";
import ContactUs from "./contactUsSection";
import GiveStuffMain from "./GiveStuffMain";
import GiveStuffStep1 from "./GiveStuffStep1";
import GiveStuffStep2 from "./GiveStuffStep2";

export default class GiveStuff extends Component {
    state = {
        'step1': 'active',
        'step2': null,
        'step3': null,
        'step4': null,
        'step5': null
    };
    changeStep = (step, isActive) => {
        this.setState({
            [step]: isActive
        })
    };
    whichStep = () => {
        if (this.state.step1 === 'active') {
            return (
                <GiveStuffStep1 changeStep={this.changeStep}/>
            )
        }
        if (this.state.step2 === 'active') {
            return (
                <GiveStuffStep2 changeStep={this.changeStep}/>
            )
        }
    };


    render() {
        return (
            <div className="container">
                <HomeHeaderLoggedIn/>
                <GiveStuffMain/>
                {this.whichStep()}
                <ContactUs/>
            </div>
        );
    }
}

