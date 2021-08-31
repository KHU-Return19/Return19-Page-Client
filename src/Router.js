import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MemberPage from './pages/MemberPage';
import ProfilePage from './pages/ProfilePage';
import Auth from "./hoc/auth"
import CalendarPage from './pages/CalendarPage';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Auth(Home, true)} />
            <Route exact path="/LandingPage" component={Auth(LandingPage, false)} />
            <Route exact path="/signup" component={Auth(SignUpPage, false)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/members" component={Auth(MemberPage,true)} />
            <Route exact path="/profile" component={Auth(ProfilePage,true)} />
            <Route exact path="/calendar" component={CalendarPage} />
              
            <Route path="/">404 not found</Route>
        </Switch>
    );
};

export default Router;