import {
    LOAD_SUCCESS,
    LOAD_FAIL,
    LOGOUT
} from "../definitions/auth"

const initialState = {
    name: '',
    email: '',
    adminLevel: '',
    googleId: '',
    profilePic: '',
    bio: '',
    followers: [],
    following: [],
    loaded: false,
    loggedInStatus: 0 //0: loading, 1: logged in, 2: no account
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SUCCESS:
            return {
                ...action.payload,
                    loaded: true,
                    loggedInStatus: 1
            }
            break;
        case LOAD_FAIL:
            return {
                ...state,
                loaded: true,
                    loggedInStatus: 2
            }
            break;
        case LOGOUT:
            return {
                ...initialState,
                loaded: true,
                    loggedInStatus: 2
            }
            break;
        default:
            return state
    }
}

export default authReducer;