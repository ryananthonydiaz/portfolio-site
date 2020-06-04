import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from './unauth/Landing';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {
  const isMobile = useMediaQuery('(max-width:800px)');
  const isAuthenticated = false;

  let main;
  if (isAuthenticated === true) {
    // Auth routes
  } else {
    main = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return main;
}

export default App;
