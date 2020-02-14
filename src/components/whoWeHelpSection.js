import React, {Component} from 'react';


export default class WhoWeHelp extends Component {
    render() {
        return (
            <section className='who-we-help'>
                <div className="who-we-help__container">
                    <h2 className="who-we-help__heading">Komu pomagamy ?</h2>
                    <div className="decoration"/>
                    <div className="who-we-help__options">
                        <div className="who-we-help__options-container">
                            <div className="option option-active"><p className='option__text'> Fundacjom</p></div>
                            <div className="option"><p className='option__text'> Organizacją<br/>pozarządowym</p></div>
                            <div className="option"><p className='option__text'> Lokalnym <br/>zbiórkom</p></div>
                        </div>
                    </div>
                    <p className='who-we-help__text'>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br/> którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, <br/> komu pomagają i czego potrzebują.
                    </p>
                </div>
            </section>
        )
    }
}