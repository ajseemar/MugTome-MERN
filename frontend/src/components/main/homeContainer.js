import { connect } from 'react-redux';

import Home from "./home";
import { logout } from '../../actions/sessionActions';

const msp = state => ({
    user: state.session.user
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Home);