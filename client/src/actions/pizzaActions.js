import { GET_ALL_PIZZAS } from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';
import { GET_PIZZA_DETAILS } from '../constants/pizzaDetailsConstants';

export const getAllPizzas = () => {
    return dispatch => fetch('http://localhost:3500/api/pizzas').then(json => json.json()).then(data => dispatch(getAllPizzaSuccess(data)));
};

export const getPizza = (pizzaId) => {
    return dispatch => fetch(`http://localhost:3500/api/pizzas/${pizzaId}`).then(json => json.json()).then(data => dispatch(getPizzaSuccess(data)));
};

const getPizzaSuccess = (pizza) => {
    return {
        type: GET_PIZZA_DETAILS,
        payload: pizza
    };
};


const getAllPizzaSuccess = (pizzas) => {
    return {
        type: GET_ALL_PIZZAS,
        payload: pizzas
    };
};

