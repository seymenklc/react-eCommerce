import * as actionTypes from '../constants';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            const { id } = action.payload;
            const product = state.cart.find(product => product.id === id);
            // checking if the item is already in the cart
            if (product) {
                return {
                    ...state,
                    cart: state.cart.map(product => product.id === id
                        ? { ...product, productQty: product.productQty + 1 }
                        : product
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        case actionTypes.INCREMENT_AMOUNT:
            return {
                ...state,
                cart: state.cart.map(product => action.payload === product.id
                    ? { ...product, productQty: product.productQty + 1 }
                    : product
                )
            };
        case actionTypes.DECREMENT_AMOUNT:
            return {
                ...state,
                cart: state.cart.map(product => action.payload === product.id
                    ? { ...product, productQty: product.productQty === 1 ? 1 : product.productQty - 1 }
                    : product
                )
            };
        default:
            return state;
    }
};

export default cartReducer;