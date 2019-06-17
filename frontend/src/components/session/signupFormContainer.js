import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});

export default withRouter(connect(msp, mdp)(SessionForm));