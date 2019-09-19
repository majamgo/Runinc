import React from 'react';
import Logo from '../img/runinc_logo.png';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <a href="/" className="navbar__logo"><img src={Logo} alt="RunInc logo" className="brand__logo"/></a>
                <ul className="navbar__menu">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                </ul>
                <div className="search__type">
                    <input className="search__input" type="text"/><button className="search__btn">SEARCH</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)