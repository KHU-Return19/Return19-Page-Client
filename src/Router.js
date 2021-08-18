import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/">404 not found</Route>
        </Switch>
    );
};

export default Router;