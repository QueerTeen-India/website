import {
    LOAD,
    REMOVE,
    UPDATE
} from "../definitions/comment"

const initialState = []

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return [...state, ...action.payload]

        case REMOVE:
            return state.filter(comment => comment._id.toString() !== action.payload.toString())

        case UPDATE:
            return state.map(comment => {
                if (comment._id.toString() === action.payload._id.toString()) {
                    return action.payload
                } else {
                    return comment
                }
            });
        default:
            return state
    }
}

export default commentReducer;