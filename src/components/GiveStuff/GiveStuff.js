import React, {Component} from 'react';

import HomeHeaderLoggedIn from "../HomeHeader/HomeHeaderLoggedIn";
import ContactUs from "../contactUsSection";
import GiveStuffMain from "./GiveStuffMain";
import GiveStuffStep1 from "./GiveStuffStep1";
import GiveStuffStep2 from "./GiveStuffStep2";
import GiveStuffStep3 from "./GiveStuffStep3";
import GiveStuffStep4 from "./GiveStuffStep4";
import Summary from "./Summary";
import SummaryConfirmed from "./summary-confirmed";

export default class GiveStuff extends Component {
    state = {
        'activeStep': 'step1',
        'step1Choice': null,
        'step2Choice': null,
        'step3Localization': null,
        'step3Help': null,
        'step3Organization': null,
        'step4Street': null,
        'step4Place': null,
        'step4ZipCode': null,
        'step4Telephone': null,
        'step4Date': null,
        'step4Hour': null,
        'step4Notes': null
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
    setActive = () => {
        return this.state.activeStep
    };

    render() {
        return (
            <div className="container">
                <HomeHeaderLoggedIn/>
                <GiveStuffMain activeStep={this.state.activeStep}/>
                <GiveStuffStep1 isActive={this.setActive} setStepValue={this.setStepValue}
                                changeStep={this.changeStep}/>
                <GiveStuffStep2 isActive={this.setActive} setStepValue={this.setStepValue}
                                changeStep={this.changeStep}/>
                <GiveStuffStep3 isActive={this.setActive} setStepValue={this.setStepValue}
                                changeStep={this.changeStep}/>
                <GiveStuffStep4 isActive={this.setActive} setStepValue={this.setStepValue}
                                changeStep={this.changeStep}/>
                <Summary isActive={this.setActive} setStepValue={this.setStepValue} changeStep={this.changeStep}
                         step1Choice={this.state.step1Choice}
                         step2Choice={this.state.step2Choice}
                         step3Localization={this.state.step3Localization}
                         step3Help={this.state.step3Help}
                         step3Organization={this.state.step3Organization}
                         step4Street={this.state.step4Street}
                         step4Place={this.state.step4Place}
                         step4ZipCode={this.state.step4ZipCode}
                         step4Telephone={this.state.step4Telephone}
                         step4Date={this.state.step4Date}
                         step4Hour={this.state.step4Hour}
                         step4Note={this.state.step4Note}
                />
                <SummaryConfirmed isActive={this.setActive}/>
                <ContactUs/>
            </div>
        );
    }
}

