import axios from 'axios';

import {
    LOAD_SUCCESS,
    LOAD_FAIL,
    LOGOUT
} from '../definitions/auth';

export const logout = (dispatch) => {
    document.cookie = document.cookie.split(';').forEach(function (c) {
        document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    });
    return dispatch({
        type: LOGOUT
    });

}

export const load = async (dispatch) => {
    try {
        const res = await axios.get('/api/auth/user');
        const user = res.data.user;
        dispatch({
            type: LOAD_SUCCESS,
            payload: user
        });
    } catch (err) {
        dispatch({
            type: LOAD_FAIL
        });
    }
}



