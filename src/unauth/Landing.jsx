import React from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: `100%`,
  },
  titleContainer: {
    margin: '80px 0',
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
  subHeader: {
    fontSize: '1rem',
    letterSpacing: '10px',
    textTransform: 'uppercase',
    fontWeight: 100,
    margin: '2rem 0'
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
      <div className={classes.stars} />
      <div className={classes.starsTwo} />
      <div className={classes.starsThree} />
      <Grid justify="center" alignItems="center" direction="column" className={classes.titleContainer} container>
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
