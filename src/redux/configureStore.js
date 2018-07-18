import {createStore, combineReducers} from 'redux';
// no longer using the reducer file 
// import {createStore} from 'redux';
// import { Reducer, initialState } from './reducer'

import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
    // no longer needed
        // Reducer, // reducer
        // initialState, // our initialState
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}
