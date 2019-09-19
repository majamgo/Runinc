import React from 'react';
import map from '../img/map.JPG';

const ContactUs = () => {

    const handleSubmit = (e) => {
       e.preventDefault();
       alert('Thanks for the message!');
    }

    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact__map">
                    <img src={map} alt="" className="map__img"/>
                </div>
                <div className="contact__txt"><h2>CONTACT</h2></div>
                <div className="contact__footer">
                    <h3>RUNINC</h3>
                    <p>Kannikegade 12</p>
                    <p>8000 Århus C</p>
                    <p>Telefon 26 13 26 96</p>
                    <p>info@runinc.dk</p>
                </div>
            </div>
            <div className="contact__container2">            
                <form className="contact__form" onSubmit={handleSubmit}>
                    <h3>SEND EN BESKED</h3>
                    <label>NAVN:</label>
                    <input type="text"/>
                    <label>EMAIL:</label>
                    <input type="text"/>
                    <label>TELEFONNR:</label>
                    <input type="text"/>
                    <label>BESKED:</label>
                    <textarea className="messagearea"></textarea>
                    <button className="form__btn">SEND BESKED</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
