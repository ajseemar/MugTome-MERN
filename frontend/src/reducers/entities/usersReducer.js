import { RECEIVE_CURRENT_USER } from '../../actions/session';
// import { RECEIVE_POST } from '../../actions/posts';
import { RECEIVE_USER } from '../../actions/users';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        // case RECEIVE_POST:
        //     const user = state[action.post.user_id]
        //     if (user) {
        //         let newState = Object.assign({}, user);
        //         const postIds = user.feedPostIds;
        //         postIds.unshift(action.post.id);
        //         newState = Object.assign({}, newState, { feedPostIds: postIds });
        //         return Object.assign({}, state, { [newState.id]: newState });
        //     }
        //     break;
        default:
            return state;
    }
};

export default UsersReducer;