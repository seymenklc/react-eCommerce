import * as actionTypes from '../constants';

export const addToCart = (cartItem) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: cartItem
    };
};

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    };
};

export const incrementAmount = (id) => {
    return {
        type: actionTypes.INCREMENT_AMOUNT,
        payload: id
    };
};

export const decrementAmount = (id) => {
    return {
        type: actionTypes.DECREMENT_AMOUNT,
        payload: id
    };
};