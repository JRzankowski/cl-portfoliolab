import React, {Component} from 'react';
import HomeHeaderEntry from "./HomeHeaderEntry";
import HomeHeaderNav from "./HomeHeaderNav";

export default class HomeHeader extends Component {
    render() {
        return (
            <header className='header'>
                <HomeHeaderEntry/>
                <HomeHeaderNav/>
            </header>
        );
    }
}