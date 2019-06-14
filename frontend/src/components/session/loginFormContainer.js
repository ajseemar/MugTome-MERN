import { connect } from 'react-redux';

import { login } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log In'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);