import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Pizza = ({ pizza }) => {
    const { id, name, image } = pizza;
    return (
        <div className="pizza-wrapper">
            <div className="pizza-image">
                <img src={image} alt=""/>
            </div>
            <div className="pizza-name">{name}</div>
            <Link to={`/pizza/${id}`}>
                <button className="detailsBtn">Details</button>
            </Link>
        </div>
    );
};

Pizza.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string
    })
};

export default Pizza;