import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../core/SignIn';
import SignUp from '../core/SignUp';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signIn" exact component = {SignIn} />
        <Route path="/signUp" exact component = {SignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;