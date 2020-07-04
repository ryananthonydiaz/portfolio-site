import React from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    color: '#757575'
  },
  formItem: {
    width: '400px',
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    }
  },
  button: {
    color: '#FFD700',
  }
}));

function Work() {
  const classes = useStyles();
  const content = (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.formContainer}
      container
    >
      <Grid item>
        <Paper elevation={5} className={classes.paper}>
          <div className={classes.paperItem}>PROJECTS</div>
        </Paper>
      </Grid>

      <Grid item>
        {/* text field went here */}
      </Grid>

      <Grid item>
        {/* text field went here */}
      </Grid>
      
      <Grid item>
      {/* button went here */}
      </Grid>
    </Grid>
  );

  return (
    <UnauthDesktopDrawer>
      {content}
    </UnauthDesktopDrawer>
);
}

export default Work;
