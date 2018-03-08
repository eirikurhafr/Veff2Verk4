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
            <h3><Link to={`pizzas/${id}`}>Details</Link></h3>
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