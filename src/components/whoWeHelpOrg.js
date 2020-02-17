import React, {Component} from 'react';

import data from './data.json';


export default class WhoWeHelpOrg extends Component {


    handleClick = (e) => {
        e.target.classList.add('page-active');

        let page1 = document.querySelectorAll('.who-we-help__table.page-1');
        let page2 = document.querySelectorAll('.who-we-help__table.page-2');
        let page3 = document.querySelectorAll('.who-we-help__table.page-3');
        if (e.target.classList.contains('page-one')) {
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.classList.remove('page-active');
            }
            if (e.target.nextElementSibling.nextElementSibling) {
                e.target.nextElementSibling.nextElementSibling.classList.remove('page-active');
            }
            if (page1) {
                for (let el of page1) {
                    el.classList.add('page-active')
                }
            }
            if (page2) {
                for (let el of page2) {
                    el.classList.remove('page-active')
                }
            }
            if (page3) {
                for (let el of page3) {
                    el.classList.remove('page-active')
                }
            }
        }
        if (e.target.classList.contains('page-two')) {
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.classList.remove('page-active');
            }
            if (e.target.previousElementSibling) {
                e.target.previousElementSibling.classList.remove('page-active');
            }
            if (page1) {
                for (let el of page1) {
                    el.classList.remove('page-active')
                }
            }
            if (page2) {
                for (let el of page2) {
                    el.classList.add('page-active')
                }
            }
            if (page3) {
                for (let el of page3) {
                    el.classList.remove('page-active')
                }
            }

        }
        if (e.target.classList.contains('page-three')) {
            if (e.target.previousElementSibling) {
                e.target.previousElementSibling.classList.remove('page-active');
            }
            if (e.target.previousElementSibling.previousElementSibling) {
                e.target.previousElementSibling.previousElementSibling.classList.remove('page-active');
            }
            if (page1) {
                for (let el of page1) {
                    el.classList.remove('page-active')
                }
            }
            if (page2) {
                for (let el of page2) {
                    el.classList.remove('page-active')
                }
            }
            if (page3) {
                for (let el of page3) {
                    el.classList.add('page-active')
                }
            }
        }


    };

    render() {
        let newData = null;
        let iterator = 1;
        let dataPageStyle = '';
        if (this.props.select === 'foundations') {
            iterator = 1;
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
        } else if (this.props.select === 'local') {

            newData = data.local.map((data, index) => {
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
        } else if (this.props.select === 'organizations') {

            newData = data.organizations.map((data, index) => {
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
        if (this.props.select) {
            if (this.props.select === 'foundations') {
                let page1 = document.querySelectorAll('.who-we-help__table.page-1');
                let page2 = document.querySelectorAll('.who-we-help__table.page-2');
                let page3 = document.querySelectorAll('.who-we-help__table.page-3');
                let pagination = document.querySelectorAll('.who-we-help__pagination .who-we-help__pagination--page');
                if (pagination[0]) {
                    pagination[0].classList.add('page-active');
                    pagination[1].classList.remove('page-active');
                    pagination[2].classList.remove('page-active');
                    if (page1) {
                        for (let el of page1) {
                            el.classList.add('page-active')
                        }
                    }
                    if (page2) {
                        for (let el of page2) {
                            el.classList.remove('page-active')
                        }
                    }
                    if (page3) {
                        for (let el of page3) {
                            el.classList.remove('page-active')
                        }
                    }
                }

                console.log(pagination[0]);
            }
        }
        return (

            <div className="who-we-help-organization">
                <p className='who-we-help__text'>
                    W naszej bazie znajdziesz listę zweryfikowanych {this.props.select}, z <br/> którymi współpracujemy.
                    Możesz
                    sprawdzić czym się zajmują, <br/> komu pomagają i czego potrzebują.
                </p>
                <div className="who-we-help__container">
                    {newData}
                </div>
                <div className="who-we-help__pagination">
                    <div onClick={this.handleClick}
                         className="who-we-help__pagination--page page-one page-active">1
                    </div>
                    <div onClick={this.handleClick} className="who-we-help__pagination--page page-two">2</div>
                    <div onClick={this.handleClick} className="who-we-help__pagination--page page-three">3</div>
                </div>

            </div>

        )

    }
}
