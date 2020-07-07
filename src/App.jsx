import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getIsAuthenticated, getToken } from './state/selectors/Auth';
import Landing from './unauth/Landing';
import Contact from './unauth/Contact';
import About from './unauth/About';
import Work from './unauth/Work';
import Login from './unauth/Login';

// Authenticated Components
import Messages from './auth/Messages';
import Logout from './auth/Logout';

function App() {
  // const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const token = useSelector(getToken);

  let main;
  if (isAuthenticated === true && token !== null) {
    main = (
      <Switch>
        <Route exact path="/" component={Messages} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
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
