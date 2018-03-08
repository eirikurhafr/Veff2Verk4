import { GET_PIZZA_DETAILS } from '../constants/pizzaDetailsConstants';

const pizzaDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PIZZA_DETAILS: return action.payload;
        default: return state;
    }
}

export default pizzaDetailsReducer;