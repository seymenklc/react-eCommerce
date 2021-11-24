import * as actionTypes from '../constants';

export const addToFavorites = (product) => {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        payload: product
    };
};

export const removeFromFavorites = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        payload: id
    };
};