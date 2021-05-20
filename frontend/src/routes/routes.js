import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../core/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="" exact component = {Login} />
        </Switch>
    </BrowserRouter>
  )
}

export default Routes;