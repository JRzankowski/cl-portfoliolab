import React, {Component} from 'react';
import data from './data.json';


export default class Home extends Component {
    render() {
        let newData = null;
        let iterator = 1;
        let dataPageStyle = '';
        if (this.props.select === 'foundations') {
            iterator = 1;
            if (iterator <= 3) {
                dataPageStyle = `who-we-help__table page-active page-1`;
                iterator++;
                console.log(iterator)
            } else if (iterator >= 4 && iterator <= 6) {
                dataPageStyle = `who-we-help__table page-2`;
                iterator++;
                console.log(iterator)
            } else if (iterator >= 7 && iterator <= 9) {
                dataPageStyle = `who-we-help__table page-3`;
                iterator++;
                console.log(iterator)
            }
            data.foundations.map((data, index) => {
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
        } else if (this.props.select === 'local') {

            newData = data.foundations.map((data, index) => {
                    if (iterator <= 3) {
                        dataPageStyle = `who-we-help__table page-active page-1`;
                        iterator++;
                        console.log(iterator)
                    } else if (iterator >= 4 && iterator <= 6) {
                        dataPageStyle = `who-we-help__table page-2`;
                        iterator++;
                        console.log(iterator)
                    } else if (iterator >= 7 && iterator <= 9) {
                        dataPageStyle = `who-we-help__table page-3`;
                        iterator++;
                        console.log(iterator)
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
        } else if(this.props.select === 'organizations') {

            newData = data.foundations.map((data, index) => {
                    if (iterator <= 3) {
                        dataPageStyle = `who-we-help__table page-active page-1`;
                        iterator++;
                        console.log(iterator)
                    } else if (iterator >= 4 && iterator <= 6) {
                        dataPageStyle = `who-we-help__table page-2`;
                        iterator++;
                        console.log(iterator)
                    } else if (iterator >= 7 && iterator <= 9) {
                        dataPageStyle = `who-we-help__table page-3`;
                        iterator++;
                        console.log(iterator)
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



    }
}