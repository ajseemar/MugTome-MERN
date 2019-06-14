import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtils';
import { Switch } from 'react-router-dom';

import Splash from './main/splash';
import HomeContainer from './main/homeContainer';

const App = (props) => (
    <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/home" component={HomeContainer} loggedIn={props.isAuthenticated} />
    </Switch>
);

export default App;