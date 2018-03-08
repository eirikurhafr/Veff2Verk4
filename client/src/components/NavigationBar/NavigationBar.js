import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';

const NavigationBar = ({ logoImageUrl }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logoImageUrl} alt="" />
            </div>
            <div className="ad">
                <img src="https://media0.giphy.com/media/l3q2Dh5BA4zRFSwak/source.gif" width="100%" height="100%" alt=""/>
            </div>
            <NavigationBarLinkWrapper>
                <NavLink
                    exact
                    to="/pizzas"
                    activeClassName="active"
                    className="nav-link">Menu</NavLink>
                <NavLink
                    to="/offers"
                    activeClassName="active"
                    className="nav-link">Offers</NavLink>
                <NavLink
                    to="/cart"
                    activeClassName="active"
                    className="nav-link">Cart</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link">About us</NavLink>
            </NavigationBarLinkWrapper>
        </nav>
    );
};


NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};

// Fix for react-router-dom, known bug with NavLink
export default connect(({  }) => { return {  }; }, null, null, { pure: false })(NavigationBar);