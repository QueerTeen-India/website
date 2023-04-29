import {
    LOAD,
    REMOVE,
    UPDATE
} from "../definitions/post"

const initialState = []

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return [...state, ...action.payload]

        case REMOVE:
            return state.filter(post => post._id.toString() !== action.payload.toString())

        case UPDATE:
            return state.map(post => {
                if (post._id.toString() === action.payload._id.toString()) {
                    return action.payload
                } else {
                    return post
                }
            });
        default:
            return state
    }
}

export default postReducer;