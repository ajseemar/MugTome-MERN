import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtils';
import { Switch } from 'react-router-dom';

import Splash from './main/splash';
import HomeContainer from './main/homeContainer';

import './app.scss';

const App = (props) => (
    <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/home" component={HomeContainer}  />
    </Switch>
);

export default App;