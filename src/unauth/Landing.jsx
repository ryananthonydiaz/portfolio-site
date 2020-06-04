import React from 'react';
import { starsBoxShadow, starsAfterBoxShadow, starsTwo, starsTwoAfter, starsThree, starsThreeAfter } from '../materialTheme';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(100vh - 64px)`,
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
          <div className={classes.title}>RYAN DIAZ</div>
        </Grid>
        <Grid className={classes.subHeader} item>Software Engineer</Grid>
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
