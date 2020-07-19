import React from 'react';
import { useDispatch } from 'react-redux';
import { logUserOut } from '../state/actions/Auth';
import AuthDesktopDrawer from '../navigation/AuthDesktopDrawer';
import HeaderPaper from '../unauth/HeaderPaper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '100%',
    margin: theme.spacing(6, 0),
  },
  paper: {
    margin: theme.spacing(0, 0, 5, 0),
    width: theme.spacing(40),
    height: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperItem: {
    fontSize: '2rem',
    fontWeight: '100',
    letterSpacing: '.5rem',
    color: '#757575',
    textTransform: 'uppercase',
  },
}));

function Logout() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const logOut = () => {
    localStorage.removeItem('token');
    dispatch(logUserOut());
  }

  const title = 'Log Out';
  const content = (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.formContainer}
      container
    >
      <HeaderPaper classes={classes} title={title} />
      <Grid item>
        <Button variant="outlined" onClick={logOut}>
          Log Out
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <AuthDesktopDrawer>
      {content}
    </AuthDesktopDrawer>
);
}

export default Logout;
