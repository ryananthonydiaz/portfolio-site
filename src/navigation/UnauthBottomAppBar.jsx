import React, { useState } from 'react';
import UnauthBottomDrawer from './UnauthBottomDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  messageIcon: {
    color: '#81c784',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

function UnauthBottomAppBar() {
  const classes = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={() => setDrawerIsOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Fab color="primary"  aria-label="add" className={classes.fabButton}>
            <MailIcon />
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <UnauthBottomDrawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
    </>
  );
}

export default UnauthBottomAppBar;
