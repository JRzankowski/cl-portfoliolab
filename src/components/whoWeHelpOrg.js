import React, {Component} from 'react';

import data from './data.json';


export default class WhoWeHelpOrg extends Component {

    handleClick = (e) => {
        e.target.classList.add('page-active');
        let page1 = document.querySelectorAll('.who-we-help__table.page-1');
        let page2 = document.querySelectorAll('.who-we-help__table.page-2');
        let page3 = document.querySelectorAll('.who-we-help__table.page-3');




        if (e.target.classList.contains('page-one')) {
            e.target.nextElementSibling.classList.remove('page-active');
            e.target.nextElementSibling.nextElementSibling.classList.remove('page-active');
           for(let el of page1){
               el.classList.add('page-active')
           }
            for(let el of page2){
                el.classList.remove('page-active')
            }
            for(let el of page3){
                el.classList.remove('page-active')
            }


        }
        if (e.target.classList.contains('page-two')) {
            e.target.nextElementSibling.classList.remove('page-active');
            e.target.previousElementSibling.classList.remove('page-active');
            for(let el of page1){
                el.classList.remove('page-active')
            }
            for(let el of page2){
                el.classList.add('page-active')
            }
            for(let el of page3){
                el.classList.remove('page-active')
            }

        }
        if (e.target.classList.contains('page-three')) {
            e.target.previousElementSibling.classList.remove('page-active');
            e.target.previousElementSibling.previousElementSibling.classList.remove('page-active');
            for(let el of page1){
                el.classList.remove('page-active')
            }
            for(let el of page2){
                el.classList.remove('page-active')
            }
            for(let el of page3){
                el.classList.add('page-active')
            }
        }


    };

    render() {
        let newData = null;


        if (this.props.select === 'foundations') {
            console.log('asdf');

            newData = data.foundations.map((data, index) => {
                let dataPageStyle = data.page ==='page-1' ? `who-we-help__table page-active ${data.page}` :`who-we-help__table ${data.page}` ;
                    return (
                        <>
                            <div key={index} className={dataPageStyle}>
                                <p className='who-we-help-table__title'>{data.name}</p>
                                <p className='who-we-help-table__mission'>{data.mission}</p>
                                <p className='who-we-help-table__stuff'>{data.stuff}</p>
                            </div>


                        </>

                    )
                }
            )
        } else if (this.props.select === 'local') {
            newData = data.local.map((data, index) => {
                let dataPageStyle = data.page ==='page-1' ? `who-we-help__table page-active ${data.page}` :`who-we-help__table ${data.page}` ;
                    return (
                        <div key={index} className={dataPageStyle}>
                            <p className='who-we-help-table__title'>{data.name}</p>
                            <p className='who-we-help-table__mission'>{data.mission}</p>
                            <p className='who-we-help-table__stuff'>{data.stuff}</p>
                        </div>
                    )
                }
            )
        } else {
            newData = data.organizations.map((data, index) => {
                let dataPageStyle = data.page ==='page-1' ? `who-we-help__table page-active ${data.page}` :`who-we-help__table ${data.page}` ;
                    return (

                        <div key={index} className={dataPageStyle}>
                            <p className='who-we-help-table__title'>{data.name}</p>
                            <p className='who-we-help-table__mission'>{data.mission}</p>
                            <p className='who-we-help-table__stuff'>{data.stuff}</p>
                        </div>

                    )
                }
            )
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
                    <div onClick={this.handleClick} className="who-we-help__pagination--page page-one page-active">1
                    </div>
                    <div onClick={this.handleClick} className="who-we-help__pagination--page page-two">2</div>
                    <div onClick={this.handleClick} className="who-we-help__pagination--page page-three">3</div>
                </div>
            </div>

        )
    }
}