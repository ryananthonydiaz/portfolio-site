import React, { useState } from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import {
  Window,
  WindowHeader,
  WindowContent,
  Tabs,
  Tab,
  TabBody,
  Fieldset,
  Select,
} from 'react95';
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

  const items = [
    { value: 1, label: 'Red Dot Electric' },
    { value: 2, label: 'Apt Health' },
  ];

  let tabBody;
  if (activeTab === 0) {
    tabBody = (
      <TabBody>
        <Fieldset label="Ryan Diaz:">
        <p>I'm a Front-End Engineer that 3+ years experience building web applications with React.js!</p>
        <p>If you need a battle tested React Engineer that has worked in a start-up environment where deadlines
          need to be met with quality/maintainable code, look no further and shoot me a message!
        </p>
        </Fieldset>
      </TabBody>
    );
  } else if (activeTab === 1) {
    // place links to the specific projects in the projects URL
    tabBody = (
      <TabBody>
        <Fieldset label="Choose a recent position:">
          <Select variant="flat" items={items} onChange={handleWork} height={100} width={200} />
          <div>
            {workSelect === 1 ? 
            <>
              <p>At Red Dot Electric I built a web application to automate off-site employee timesheets. The employees exact location and time would be sent to an admin dashboard upon clocking in/out
                at the work-site allowing administration to execute payroll with precise timed worked and employee
                location displable.
              </p> 
            </>: null}
          </div>
        </Fieldset>
      </TabBody>
    );
  } else if (activeTab === 2) {
    tabBody = (
      <TabBody>
        <Fieldset label="Order:">
          Education
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
              <Tab value={1}>Work Exp</Tab>
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
