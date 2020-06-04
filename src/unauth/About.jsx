import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Window,
  WindowHeader,
  WindowContent,
  Tabs,
  Tab,
  TabBody,
  Fieldset,
  Select,
  List,
  ListItem,
} from 'react95';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  windowContainer: {
    width: '100%',
    margin: theme.spacing(5, 0, 0, 0),
  },
  window: {
    width: '100%'
  },
  windowGridItem: {
    maxWidth: '500px',
    [theme.breakpoints.down('md')]: {
      width: '95%',
    }
  },
  anchor: {
    cursor: 'pointer',
  },
  button: {
    fontSize: '1rem',
    background: 'none',
    color: 'blue',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 700,
  
    '&:focus': {
      outline: 'none',
    }
  },
}));

function About() {
  const classes = useStyles();
  const history = useHistory();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [activeTab, setActiveTab] = useState(0);
  const [workSelect, setWorkSelect] = useState(1);

  const handleTabs = value => setActiveTab(value);
  const handleWork = value => setWorkSelect(value)

  const items = [
    { value: 1, label: 'Red Dot Electric' },
    { value: 2, label: 'Apt Health' },
  ];

  let tabBody;
  if (activeTab === 0) {
    tabBody = (
      <TabBody className={classes.aboutTab}>
        <Fieldset label="Ryan Diaz:">
          <p>I'm a Front-End Engineer with 3+ years experience building web applications with React.js!</p>
          <p>If you need a battle tested React Engineer that has worked in a start-up environment where deadlines
            need to be met with quality/maintainable code, look no further and shoot me a message!
          </p>
        </Fieldset>
      </TabBody>
    );
  } else if (activeTab === 1) {
    // place links to the specific projects in the projects URL
    tabBody = (
      <TabBody className={classes.aboutTab}>
        <Fieldset label="Choose a recent position:">
          <Select items={items} onChange={handleWork}/>
          <div>
            {workSelect === 1
            ? 
            <>
              <p>Built a{' '}<strong>React.js</strong> application to automate off-site employee timesheets. 
                The employees exact location and time would be sent to an admin dashboard upon clocking in/out
                at the work-site allowing administration to execute payroll with precise timed worked.
              </p>
              <button onClick={() => history.push('/projects')} className={classes.button}>See Project</button>
            </>
            :
            <>
              <p>Tasked with porting a front-end of a mobile app (iOS) to a browser based single-page application using{' '}<strong>React.js.</strong> Designed and implemented state management using Redux, implemented
                an authentication layer using AWS Cognito.
              </p>
              <button onClick={() => history.push('/projects')} className={classes.button}>See Project</button>
            </>}
          </div>
        </Fieldset>
      </TabBody>
    );
  } else if (activeTab === 2) {
    tabBody = (
      <TabBody className={classes.aboutTab}>
        <Fieldset label="Choose a recent position:">
          <p>Bachelors Degree in Criminal Administration</p>
        </Fieldset>
      </TabBody>
    );
  }

  const content = (
    <Grid justify="center" alignItems="center" className={classes.windowContainer} container>
      <Grid className={classes.windowGridItem} item>
        <Window className={classes.window}>
          <WindowHeader>Information.exe</WindowHeader>
          <WindowContent>
            <Tabs value={activeTab} onChange={handleTabs}>
              <Tab value={0}>About Me</Tab>
              <Tab value={1}>Work Exp.</Tab>
              <Tab value={2}>Education</Tab>
            </Tabs>
            <div style={{ height: 400 }}>{tabBody}</div>
          </WindowContent>
        </Window>
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
