import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import SearchPage from './SearchPage/SearchPage';
import ResultsPage from './ResultsPage/ResultsPage';

export default (
  <Switch>
    <Route component={ LandingPage } exact path="/" />
    <Route component={ SearchPage } path="/search" />
    <Route component={ ResultsPage } path="/results/:name" />
  </Switch>
)