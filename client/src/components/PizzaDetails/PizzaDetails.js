import React from 'react';
import { PropTypes } from 'prop-types';

const PizzaDetails = ({ pizzaDetails }) => {
    const { name, description, price, image } = pizzaDetails;
    return (
        <div className="pizza-wrapper">
            <div className="pizza-image">
                <img src={image} alt=""/>
            </div>
            <div className="pizza-name">{name}</div>
            <div className="pizza-description">{description}</div>
            <div className="pizza-price">{price}</div>
        </div>
    );
};

PizzaDetails.propTypes = {
    pizzaDetails: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};

export default PizzaDetails;