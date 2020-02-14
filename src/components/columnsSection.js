import React, {Component} from "react";


export default class Columns extends Component {

    render() {
        return (
            <div className='column-section'>
                <div className="column-section__container">
                    <div className="column column-1">
                        <p className='column__number'>
                            10
                        </p>
                        <p className='column__heading'>
                            oddanych worków
                        </p>
                        <p className='column__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                    <div className="column column-2">
                        <p className='column__number'>
                            5
                        </p>
                        <p className='column__heading'>
                            wspartych organizacji
                        </p>
                        <p className='column__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                    <div className="column column-3">
                        <p className='column__number'>
                            9
                        </p>
                        <p className='column__heading'>
                            zorganizowanych zbiórek
                        </p>
                        <p className='column__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}