//import all action types
import * as ActionTypes from './ActionTypes';

// funcion receives four parameters; map to propertiesin the payload
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});