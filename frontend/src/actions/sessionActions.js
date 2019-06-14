import * as SessionAPI from '../utils/sessionAPI';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN"
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = newUser => dispatch => (
    SessionAPI.signup(newUser)
        .then(user => dispatch(receiveUserSignIn(user)))
        .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const login = user => dispatch => (
    SessionAPI.login(user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            SessionAPI.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded));
        }).catch(err => 
            dispatch(receiveErrors(err.response.data)
        ))
);

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    SessionAPI.setAuthToken(false);
    dispatch(logoutUser());
};