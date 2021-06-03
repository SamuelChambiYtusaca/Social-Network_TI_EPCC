import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Profile from '../core/Profile';
import Logout from '../core/Logout';
import SignIn from '../core/SignIn';
import SignUp from '../core/SignUp';
import Home from '../core/Home';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/signin" exact component = {SignIn} />
        <Route path="/logout" exact component = {Logout} />
        <Route path="/signup" exact component = {SignUp} />
        <Route path="/profile" exact component = {Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;