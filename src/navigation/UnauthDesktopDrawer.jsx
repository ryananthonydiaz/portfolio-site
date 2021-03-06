import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getThemeIsDark } from '../state/selectors/DarkMode';
import { toggleTheme } from '../state/actions/DarkMode';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import clsx from 'clsx';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  listText: {
    color: '#757575'
  },
  toolBarClosed: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolBarOpen: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));

function UnauthDesktopDrawer({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  const themeIsDark = useSelector(getThemeIsDark);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const themeHandler = () => dispatch(toggleTheme());

  const toolBarStyles = open ? classes.toolBarOpen : classes.toolBarClosed;
  const darkModeButton = themeIsDark ? <NightsStayIcon /> : <WbSunnyIcon />

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color="default"
      >
        <Toolbar className={toolBarStyles}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon color='primary' classes={{colorPrimary: classes.listText}} />
          </IconButton>
          
          <IconButton color="inherit" onClick={themeHandler}>
            {darkModeButton}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        {
          [
            {
              text: 'Home',
              icon: <HomeIcon />,
              path: '/',
            },
            {
              text: 'About',
              icon: <InfoIcon />,
              path: '/about',
            },
            {
              text: 'Projects',
              icon: <CodeIcon />,
              path: '/projects',
            },
            {
              text: 'Contact',
              icon: <SendIcon />,
              path: '/contact',
            },
            {
              text: 'GitHub',
              icon: <GitHubIcon />,
              path: () => window.open('https://www.github.com/ryananthonydiaz'),
            },
            {
              text: 'LinkedIn',
              icon: <LinkedInIcon />,
              path: () => window.open('https://www.linkedin.com/in/ryananthonydiaz/'),
            },
            {
              text: 'Login',
              icon: <VpnKeyIcon />,
              path: '/login',
            },
          ].map(({ text, icon, path }, index) => {
            let clickHandler;
            if (typeof path === 'string') {
              clickHandler = () => history.push(path);
            } else {
              clickHandler = path;
            }
            return (
              <Fragment key={uuidv4()}>
                <ListItem button key={text} alignItems="center" className={classes.listItem} onClick={clickHandler}>
                  <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
                  <ListItemText primary={text} classes={{ root: classes.listText }} />
                </ListItem>
                {index === 6 ? null : <Divider />}
              </Fragment>
            )
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default UnauthDesktopDrawer;
