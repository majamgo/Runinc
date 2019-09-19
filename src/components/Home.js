import React from 'react';
import Events from './Events';
import Hero from '../img/hero.jpg';
import Shop from './Shop';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <article className="main">
        <div className="home__bg">
            <img src={Hero} alt="" className="bg__img"/>
            <div className="bg__txt">
                <h2>WE LOVE <span className="txt--yellow">RUNING</span></h2>
            </div>
        </div>
        <Events />
        <Shop />
        <ContactUs />
        </article>
    )
}

export default Home
