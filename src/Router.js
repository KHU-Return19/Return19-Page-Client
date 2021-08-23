import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/LandingPage" component={LandingPage} />
            <Route path="/">404 not found</Route>
        </Switch>
    );
};

export default Router;