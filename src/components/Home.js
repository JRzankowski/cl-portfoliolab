import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMainSection from "./HomeMainSection";
import Columns from "./columnsSection";
import SimpleStepsSection from "./simpleStepsSection";
import AboutUsSection from "./aboutUsSection";
import WhoWeHelp from "./whoWeHelpSection";
import ContactUs from "./contactUsSection";


export default class Home extends Component {
    render() {
        return (

            <div className="container">
                <HomeHeader/>
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