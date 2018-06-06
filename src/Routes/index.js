import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;