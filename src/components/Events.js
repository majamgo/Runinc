import React from 'react';
import Event from '../img/event.jpg';

const Events = () => {
    return (
        <div className="events">
            <div className="events__img">
               <img src={Event} alt="" className="e__img"/>
               </div>
               <div className="img__txt">
                <h2>NEXT EVENT</h2>
               </div>
            <div className="events__txt">
               <h3>EVENTS</h3>
               <h4>COPENHAGEN MARATHON</h4>
               <p>Den 29. maj 2018</p>
               <h5>AARHUS CITY RUN</h5>
               <p className="txt--14">Den 1. juni 2018</p>
               <h5>BERLIN MARATHON</h5>
               <p className="txt--14">Den 6. juni 2018</p>
            </div>
        </div>
    )
}

export default Events
