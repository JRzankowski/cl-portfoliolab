import React, {Component} from 'react';
import HomeHeaderEntryLoggedIn from "./HomeHeaderEntryLoggedIn";
import HomeHeaderNav from "./HomeHeaderNav";

export default class HomeHeader extends Component {
    render() {
        return (
            <header className='header'>
                <HomeHeaderEntryLoggedIn entryActive ={this.props.entryActive}/>
                <HomeHeaderNav entryActive ={this.props.entryActive}/>
            </header>
        );
    }
}