import {
    LOAD,
} from "../definitions/profile"

const initialState = []

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return [...state, ...action.payload]

        default:
            return state
    }
}

export default profileReducer;