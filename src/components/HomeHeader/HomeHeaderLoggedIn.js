import React, {Component} from 'react';
import HomeHeaderEntryLoggedIn from "./HomeHeaderEntryLoggedIn";
import HomeHeaderNav from "./HomeHeaderNav";

export default class HomeHeader extends Component {
    render() {
        return (
            <header className='header'>
                <HomeHeaderEntryLoggedIn user={this.props.user} entryActive ={this.props.entryActive}/>
                <HomeHeaderNav entryActive ={this.props.entryActive}/>
            </header>
        );
    }
}