import {createStore, combineReducers, applyMiddleware } from 'redux';
// no longer using the reducer file 
// import {createStore} from 'redux';
// import { Reducer, initialState } from './reducer'
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
    // no longer needed
        // Reducer, // reducer
        // initialState, // our initialState
        combineReducers({
                dishes: Dishes,
                comments: Comments,
                promotions: Promotions,
                leaders: Leaders,
                ...createForms({
                    feedback: InitialFeedback
                })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
