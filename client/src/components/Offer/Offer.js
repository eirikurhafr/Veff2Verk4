import React from 'react';
import { PropTypes } from 'prop-types';

const Offers = ({ offers }) => {
    const { offer, price, validFor } = offers;
    return (
        <div className="pizza-wrapper">            
            <div className="pizza-name">{offer}</div>
            <div className="offer-price">{price}</div>
            <div className="offer-validFor">{validFor}</div>
        </div>
    );
};

Offers.propTypes = {
    offers: PropTypes.shape({
        offer: PropTypes.string,
        price: PropTypes.number,
        validFor: PropTypes.string
    })
};

export default Offers;



