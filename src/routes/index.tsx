import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
