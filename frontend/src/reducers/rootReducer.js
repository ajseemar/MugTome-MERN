import { combineReducers } from 'redux';

import SessionReducer from './sessionReducer';
import ErrorsReducer from './errors/errorsReducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer
});

export default RootReducer;