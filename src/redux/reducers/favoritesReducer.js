import * as actionTypes from '../constants';

const initialState = {
    favorites: []
};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITES:
            // check if item already exists
            const favorite = state.favorites?.find(favorite => favorite.id === action.payload.id);
            if (favorite) return { ...state, favorite: [...state.favorites] };

            return { ...state, favorites: [...state.favorites, action.payload] };
        case actionTypes.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.id !== action.payload)
            };
        default:
            return state;
    }
};

export default favoritesReducer;