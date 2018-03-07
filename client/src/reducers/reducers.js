import { combineReducers } from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import offers from './offerReducer';

export default combineReducers ({
    pizza, order, offers
})
