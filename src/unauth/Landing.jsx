import React from 'react';
import { starsBoxShadow, starsAfterBoxShadow, starsTwo, starsTwoAfter, starsThree, starsThreeAfter } from '../materialTheme';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'radial-gradient(ellipse at bottom, #1B2735 0vh, #090A0F 100vh)',
    height: `calc(100vh - 64px)`,
  },
  stars: {
    width: '1px',
    height: '1px',
    background: 'transparent',
    boxShadow: starsBoxShadow,
    animation: '$StarAnimation 50s linear infinite',
  },
  
  'stars:after': {
    content: " ",
    position: 'absolute',
    top: '100vh',
    width: '1px',
    height: '1px',
    background: 'transparent',
    boxShadow: starsAfterBoxShadow,
  },
  
  'starsTwo': {
    width: '2px',
    height: '2px',
    background: 'transparent',
    boxShadow: starsTwo,
    animation: '$StarAnimation 100s linear infinite',
  },
  
  'starsTwo:after': {
    content: " ",
    position: 'absolute',
    top: '100vh',
    width: '2px',
    height: '2px',
    background: 'transparent',
    boxShadow: starsTwoAfter,
  },
  
  'starsThree': {
    width: '3px',
    height: '3px',
    background: 'transparent',
    boxShadow: starsThree,
    animation: '$StarAnimation 150s linear infinite',
  },
  
  'starsThree:after': {
    content: " ",
    position: 'absolute',
    top: '100vh',
    width: '3px',
    height: '3px',
    background: 'transparent',
    boxShadow: starsThreeAfter,
  },
  '@keyframes StarAnimation': {
    'from': {
      transform: 'translateY(0px)'
    },
    'to': {
      transform: 'translateY(-2000px)'
    }
  },
  'title': {
    height: 'auto',
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 300,
    fontSize: '50px',
    letterSpacing: '10px',
    paddingLeft: '10px',
    textTransform: 'uppercase',
  },
  'title div': {
    background: '-webkit-linear-gradient(white, #38495a)',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  },
  'subHeader': {
    fontSize: '1.5rem',
    letterSpacing: '20px',
  }
}));

function Landing() {
  const classes = useStyles();

  let content = (
    <div className={classes.root}>
      <div className={classes.stars} />
      <div className={classes.starsTwo} />
      <div className={classes.starsThree} />
      <div className={classes.title}>
      <Grid justify="center" alignItems="center"  direction="column" container>
        <Grid item>
          RYAN DIAZ
        </Grid>
        <Grid className={classes.subHeader} item>Software Engineer</Grid>
      </Grid>
    </div>
    </div>
  );
  return (
      <UnauthDesktopDrawer>
        {content}
      </UnauthDesktopDrawer>
  );
}

export default Landing;
