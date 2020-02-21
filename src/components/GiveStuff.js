import React, {Component} from 'react';

import HomeHeaderLoggedIn from "./HomeHeader/HomeHeaderLoggedIn";
import ContactUs from "./contactUsSection";
import GiveStuffMain from "./GiveStuffMain";
import GiveStuffStep1 from "./GiveStuffStep1";
import GiveStuffStep2 from "./GiveStuffStep2";
import GiveStuffStep3 from "./GiveStuffStep3";
import GiveStuffStep4 from "./GiveStuffStep4";

export default class GiveStuff extends Component {
    state = {
        'activeStep': 'step4',
        'step1Choice' : null,
        'step2Choice' : null,
        'step3Localization' : null,
        'step4Help' : null,
        'step5Organization' : null,
        'step6Street' : null,
        'step6Place' : null,
        'step6ZipCode' : null,
        'step6Telephone' : null,
        'step6Date' : null,
        'step6Hour' : null,
        'step6Notes' : null
    };
    setStepValue = (step, value) => {
        this.setState({
            [step]: value
        })
    };
    changeStep = (activeStep) => {
        this.setState({
            'activeStep': activeStep
        })
    };
    setActive = ()=>{
        return this.state.activeStep
    };
    render() {
        return (
            <div className="container">
                <HomeHeaderLoggedIn/>
                <GiveStuffMain/>
                <GiveStuffStep1 isActive={this.setActive} setStepValue={this.setStepValue} changeStep={this.changeStep}/>
                <GiveStuffStep2 isActive={this.setActive} setStepValue={this.setStepValue} changeStep={this.changeStep}/>
                <GiveStuffStep3 isActive={this.setActive} setStepValue={this.setStepValue} changeStep={this.changeStep}/>
                <GiveStuffStep4 isActive={this.setActive} setStepValue={this.setStepValue} changeStep={this.changeStep}/>
                <ContactUs/>
            </div>
        );
    }
}

