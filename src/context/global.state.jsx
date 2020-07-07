import React, {createContext, useReducer} from 'react';
import AppReducer from './app.reducer';

import ActionTypes from './app.types';
import {firestore, convertCollectionsSnapshotToMap} from '../firebase/firebase.utils';

const INITIAL_STATE = {
    collections: null,
    cart: [],
    error: null
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    async function fetchCollections() {
        try {
            const collectionsRef = await firestore.collection('collections');
            const collectionsSnapshot = await collectionsRef.get();
            const collectionsMap = await convertCollectionsSnapshotToMap(collectionsSnapshot);
            dispatch({
                type: ActionTypes.FETCH_COLLECTIONS_SUCCESS,
                payload: collectionsMap
            });
        } catch(error) {
            dispatch({
                type: ActionTypes.FETCH_COLLECTIONS_FAILURE,
                payload: error
            });
        }
    }

    function selectCollection(collectionName) {
        const collection = state.collections[collectionName];
        return collection;
    };

    function addItemToCart(item) {
        dispatch({
            type: ActionTypes.ADD_ITEM_TO_CART,
            payload: item
        });
    };

    function removeItemFromCart(item) {
        dispatch({
            type: ActionTypes.REMOVE_ITEM_FROM_CART,
            payload: item
        });
    };

    function selectItemQuantity(itemId) {
        const selectedItem = state.cart.find(cartItem => cartItem.id === itemId);
        return selectedItem.quantity;
    }

    return (
        <GlobalContext.Provider value={{
            collections: state.collections,
            cart: state.cart,
            error: state.error,
            fetchCollections,
            selectCollection,
            addItemToCart,
            removeItemFromCart,
            selectItemQuantity
        }}>
            {children}
        </GlobalContext.Provider>
    );
};