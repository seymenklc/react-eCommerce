import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer
});

export default rootReducer;