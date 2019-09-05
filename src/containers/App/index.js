import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import Search from '../Search';
import Video from '../../components/Video';
import NotFoundPage from '../NotFoundPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/nasa-search" component={Search} />
      <Route path="/video" component={Video} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
