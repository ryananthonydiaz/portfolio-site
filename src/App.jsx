import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from './unauth/Landing';
import Contact from './unauth/Contact';
import About from './unauth/About';
import Work from './unauth/Work';
import Login from './unauth/Login';

function App() {
  const isAuthenticated = false;

  let main;
  if (isAuthenticated === true) {
    // Auth routes
  } else {
    main = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Work} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return main;
}

export default App;
