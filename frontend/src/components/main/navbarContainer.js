import { connect } from 'react-redux';

import { logout } from '../../actions/sessionActions';
import Navbar from "./navbar";

const msp = state => ({
    user: state.session.user
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Navbar);