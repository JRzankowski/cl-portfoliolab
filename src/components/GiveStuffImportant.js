import React, {Component} from 'react';

export default class GiveStuffImportant extends Component {

    stepText = () => {
        switch (this.props.activeStep) {
            case 'step1':
                return 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.';
                break;
            case 'step2':
                return 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ';
                break;
            case 'step3':
                return 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'
                break;
            case 'step4':
                return 'Podaj adres oraz termin odbioru rzeczy.'
                break;
            default:
            // code block
        }
    };

    render() {
        if(this.props.activeStep !== 'summary' && this.props.activeStep !== 'confirmed') {
            return (
                <div className='give-stuff__important'>
                    <div className="give-stuff__important-container">
                        <h2 className='give-stuff__important--heading'>Ważne!</h2>
                        <p className='give-stuff__important--text'> {this.stepText()}</p>
                    </div>
                </div>
            );
        }else{
            return null
        }
    }
}