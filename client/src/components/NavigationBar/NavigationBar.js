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
            <NavigationBarLinkWrapper>
                <NavLink
                    exact
                    to="/pizzas"
                    activeClassName="active"
                    className="nav-link">{nav.menu}</NavLink>
                <NavLink
                    to="/offers"
                    activeClassName="active"
                    className="nav-link">{nav.signup}</NavLink>
                <NavLink
                    to="/cart"
                    activeClassName="active"
                    className="nav-link">{nav.changeProfile}</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link">{nav.about}</NavLink>
            </NavigationBarLinkWrapper>
        </nav>
    );
};


NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};

// Fix for react-router-dom, known bug with NavLink
export default connect(({ language }) => { return { language }; }, null, null, { pure: false })(NavigationBar);