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
  title: {
    height: 'auto',
    textAlign: 'center',
    fontWeight: 100,
    fontSize: '3rem',
    letterSpacing: '10px',
    textTransform: 'uppercase',
    margin: '80px',
  },
  subHeader: {
    fontSize: '1rem',
  },
}));

function Landing() {
  const classes = useStyles();

  let content = (
    <div className={classes.root}>
      <div className={classes.stars} />
      <div className={classes.starsTwo} />
      <div className={classes.starsThree} />
      <Grid justify="center" alignItems="center" container>
        <Grid justify="center" alignItems="center" direction="column" className={classes.title} item container>
          <Grid item>
            <div>RYAN DIAZ</div>
          </Grid>
          <Grid className={classes.subHeader} item>Software Engineer</Grid>
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
