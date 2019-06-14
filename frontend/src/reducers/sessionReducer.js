import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER } from '../actions/sessionActions';

const SessionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state,
                { session: { isAuthenticated: true, user: action.user } });
        default:
            return state;
    }
}

export default SessionReducer;