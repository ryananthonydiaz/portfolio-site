import React, { useEffect, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logUserIn } from './state/actions/Auth';
import { getToken } from './state/selectors/Auth';
import isNil from 'lodash/isNil';
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

  const logUserInCallback = useCallback((tk, usr) => dispatch(logUserIn(tk, usr)), [dispatch]);
  
	useEffect(() => {
    const localStorageToken = localStorage.getItem('token');
		if (localStorageToken && isNil(token)) {
      logUserInCallback(localStorageToken, {});
		}
  }, [logUserInCallback]);

  let main;
  if (!isNil(token)) {
    main = (
      <Switch>
        <Route exact path="/" component={Messages} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else if (isNil(token)) {
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
