import ActionTypes from './app.types';

import {addItemToCart} from './app.utils';

const AppReducer = (state, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                error: null
            };
        case ActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                collections: null,
                error: action.payload
            };
        case ActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cart: addItemToCart(state.cart, action.payload)
            };
        case ActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case ActionTypes.CLEAR_CART:
            return {
                ...state,
                cart: []
            };
        default: return state;
    };
};

export default AppReducer;