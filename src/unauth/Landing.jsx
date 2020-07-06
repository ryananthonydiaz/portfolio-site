import React from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: `100%`,
  },
  formContainer: {
    width: '100%',
    margin: theme.spacing(6, 0),
  },
  title: {
    height: 'auto',
    textAlign: 'center',
    fontWeight: 100,
    fontSize: '2rem',
    letterSpacing: '10px',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.25rem',
    },
  },
  paper: {
    margin: theme.spacing(0, 0, 5, 0),
    width: theme.spacing(50),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  paperItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: '100',
    letterSpacing: '.5rem',
    color: '#757575',
    textTransform: 'uppercase',
    padding: theme.spacing(1, 2)
  },
  paperItemSub: {
    fontSize: '1rem',
  }
}));

function Landing() {
  const classes = useStyles();

  let content = (
    <div className={classes.root}>
      <Grid
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.formContainer}
        container
      >
        <Grid item>
        <Paper elevation={5} className={classes.paper}>
          <div className={classes.paperItem}>Ryan Diaz</div>
          <div className={`${classes.paperItem} ${classes.paperItemSub}`}>Software Engineer</div>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
  return (
      <UnauthDesktopDrawer>
        {content}
      </UnauthDesktopDrawer>
  );
}

export default Landing;
