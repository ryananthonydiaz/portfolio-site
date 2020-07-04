import React, { useState } from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  windowContainer: {
    width: '100%',
    margin: theme.spacing(6, 0),
  },
  window: {
    width: '100%'
  },
  windowGridItem: {
    maxWidth: '500px',
    [theme.breakpoints.down('md')]: {
      width: '95%',
    }
  }
}));

function About() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [workSelect, setWorkSelect] = useState(1);

  const handleTabs = value => setActiveTab(value);
  const handleWork = value => setWorkSelect(value)

  const content = (
    <Grid justify="center" alignItems="center" className={classes.windowContainer} container>
      <Grid className={classes.windowGridItem} item>

      </Grid>
    </Grid>
  );

  return (
    <UnauthDesktopDrawer>
      {content}
    </UnauthDesktopDrawer>
);
}

export default About;
