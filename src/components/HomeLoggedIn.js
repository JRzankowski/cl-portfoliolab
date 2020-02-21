import React, {Component} from 'react';

import HomeHeaderLoggedIn from "./HomeHeader/HomeHeaderLoggedIn";
import HomeMainSection from "./HomeMainSection";
import Columns from "./columnsSection";
import SimpleStepsSection from "./simpleStepsSection";
import AboutUsSection from "./aboutUsSection";
import WhoWeHelp from "./whoWeHelpSection";
import ContactUs from "./contactUsSection";

export default class HomeLoggedIn extends Component {
    render() {
        return (
            <div className="container">
                <HomeHeaderLoggedIn/>
                <HomeMainSection/>
                <Columns/>
                <SimpleStepsSection/>
                <AboutUsSection/>
                <WhoWeHelp/>
                <ContactUs/>
            </div>
        );
    }
}

