import data from "../data";
import React, {Component} from "react";

export default class Content extends Component {
    render() {
        let newData = null;
        let iterator = 1;
        let dataPageStyle = '';
        if (this.props.userSelect === 'foundations') {
            iterator = 1;
            newData = this.props.data.foundations.map((data, index) => {
                    if (iterator <= 3) {
                        dataPageStyle = `who-we-help__table page-active page-1`;
                        iterator++;
                    } else if (iterator >= 4 && iterator <= 6) {
                        dataPageStyle = `who-we-help__table page-2`;
                        iterator++;
                    } else if (iterator >= 7 && iterator <= 9) {
                        dataPageStyle = `who-we-help__table page-3`;
                        iterator++;
                    }
                    return (
                        <>
                            <div key={index} className={dataPageStyle}>
                                <p className='who-we-help-table__title'>{data.name}</p>
                                <p className='who-we-help-table__mission'>{data.mission}</p>
                                <p className='who-we-help-table__stuff'>{data.stuff}</p>
                            </div>
                        </>

                    );
                }
            )
        } else if (this.props.userSelect === 'local') {
            newData = this.props.data.local.map((data, index) => {
                    if (iterator <= 3) {
                        dataPageStyle = `who-we-help__table page-active page-1`;
                        iterator++;
                    } else if (iterator >= 4 && iterator <= 6) {
                        dataPageStyle = `who-we-help__table page-2`;
                        iterator++;
                    } else if (iterator >= 7 && iterator <= 9) {
                        dataPageStyle = `who-we-help__table page-3`;
                        iterator++;
                    }
                    return (
                        <>
                            <div key={index} className={dataPageStyle}>
                                <p className='who-we-help-table__title'>{data.name}</p>
                                <p className='who-we-help-table__mission'>{data.mission}</p>
                                <p className='who-we-help-table__stuff'>{data.stuff}</p>
                            </div>
                        </>
                    );
                }
            )
        } else if (this.props.userSelect === 'organizations') {
            newData = this.props.data.organizations.map((data, index) => {
                    if (iterator <= 3) {
                        dataPageStyle = `who-we-help__table page-active page-1`;
                        iterator++;
                    } else if (iterator >= 4 && iterator <= 6) {
                        dataPageStyle = `who-we-help__table page-2`;
                        iterator++;
                    } else if (iterator >= 7 && iterator <= 9) {
                        dataPageStyle = `who-we-help__table page-3`;
                        iterator++;
                    }
                    return (
                        <>
                            <div key={index} className={dataPageStyle}>
                                <p className='who-we-help-table__title'>{data.name}</p>
                                <p className='who-we-help-table__mission'>{data.mission}</p>
                                <p className='who-we-help-table__stuff'>{data.stuff}</p>
                            </div>
                        </>
                    );
                }
            )
        }
        return newData
    }
}




