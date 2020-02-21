import React, {Component} from 'react';

export default class GiveStuffImportant extends Component {
    render() {
        return (
            <div className='give-stuff__important'>
                <div className="give-stuff__important-container">
                    <h2 className='give-stuff__important--heading'>Ważne!</h2>
                    <p className='give-stuff__important--text'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
            </div>
        );
    }
}