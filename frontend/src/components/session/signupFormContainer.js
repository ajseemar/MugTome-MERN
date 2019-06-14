import { connect } from 'react-redux';

import { signup } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);