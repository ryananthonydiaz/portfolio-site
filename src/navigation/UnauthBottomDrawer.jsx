import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  listItem: {
    padding: theme.spacing(2, 2),
  },
  fullList: {
    width: 'auto',
  },
}));

export default function TemporaryDrawer({ drawerIsOpen, setDrawerIsOpen }) {
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerIsOpen(open);
  };

  const list = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
      {
          [
            {
              text: 'Projects',
              icon: <CodeIcon />
            },
            {
              text: 'GitHub',
              icon: <GitHubIcon />
            },
            {
              text: 'LinkedIn',
              icon: <LinkedInIcon />
            },
            {
              text: 'About',
              icon: <InfoIcon />
            },
            {
              text: 'Home',
              icon: <HomeIcon />
            },
          ].map(({ text, icon }, index) => (
          <>
            <ListItem button key={text} className={classes.listItem}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            {index === 4 ? null : <Divider />}
          </>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      <Drawer anchor="bottom" open={drawerIsOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
