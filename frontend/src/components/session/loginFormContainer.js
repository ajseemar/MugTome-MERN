import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/sessionActions';
import SessionForm from './sessionForm';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log In'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user))
});

export default withRouter(connect(msp, mdp)(SessionForm));