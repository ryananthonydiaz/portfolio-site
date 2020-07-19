import React, { useEffect, useCallback, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logUserIn } from './state/actions/Auth';
import { getToken, getIsAuthenticated } from './state/selectors/Auth';
import isNull from 'lodash/isNull';
import Landing from './unauth/Landing';
import Contact from './unauth/Contact';
import About from './unauth/About';
import Work from './unauth/Work';
import Login from './unauth/Login';

// Authenticated Components
import Messages from './auth/Messages';
import Logout from './auth/Logout';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [loading, setLoading] = useState(false);
  const logUserInCallback = useCallback((tk, usr) => dispatch(logUserIn(tk, usr)), [dispatch]);
  
	useEffect(() => {
    setLoading(true);
    const localStorageToken = localStorage.getItem('token');
		if (localStorageToken && isNull(token)) {
      logUserInCallback(localStorageToken, {});
    }
    setLoading(false);
  }, [logUserInCallback, token]);

  let main;
  if (loading === true) {
    main = <div />;
  } else if (!isNull(token)) {
    main = (
      <Switch>
        <Route exact path="/" component={Messages} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else if (isAuthenticated === false) {
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
