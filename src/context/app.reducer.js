import ActionTypes from './app.types';

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
        default: return state;
    };
};

export default AppReducer;