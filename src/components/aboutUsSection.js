import React, {Component} from 'react';




export default class AboutUsSection extends Component {
    render() {
        return (
            <section className="about-us">
                <div className="about-us__content">
                    <div className="content-container">
                    <h2 className='about-us__content--heading'>O nas</h2>
                    <div className="decoration"/>
                    <p className="about-us__content--text">
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <div className='about-us__content--sign'/>
                    </div>

                </div>
                <div className="about-us__img"/>

            </section>
        );
    }
}