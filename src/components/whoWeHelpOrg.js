import React, {Component} from 'react';

import data from './data.json';
import pagination from "./whoWeHelpLogic/pagination";
import Content from "./whoWeHelpLogic/content";
import pageActiveCheck from "./whoWeHelpLogic/pageActiveCheck";
import PaginationRender from "./whoWeHelpLogic/paginationRender";

export default class WhoWeHelpOrg extends Component {
    render() {
        pagination(this.props.select);
        return (
            <div className="who-we-help-organization">
                <p className='who-we-help__text'>
                    W naszej bazie znajdziesz listę zweryfikowanych {this.props.select}, z <br/> którymi
                    współpracujemy.Możesz sprawdzić czym się zajmują, <br/> komu pomagają i czego potrzebują.
                </p>
                <div className="who-we-help__container">
                    <Content userSelect={this.props.select} data={data}/>
                </div>
                <PaginationRender clickEvent={pageActiveCheck} numberOfOrg={this.props.select}/>
            </div>
        )
    }
}
