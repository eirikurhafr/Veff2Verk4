import React from 'react';
import { PropTypes } from 'prop-types';

const DetailedPizza = ({ pizzaDetails }) => {
    const { name, image, description, price } = pizzaDetails;
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

DetailedPizza.propTypes = {
    pizzaDetails: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number
    })
};

export default DetailedPizza;