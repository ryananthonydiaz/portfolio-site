import React from 'react';
import AptHealth from '../assets/apt-health.gif';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// ALL following imports may need to be removed
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  formContainer: {
    width: '100%',
    margin: theme.spacing(6, 0),
  },
  paper: {
    margin: theme.spacing(0, 0, 5, 0),
    width: theme.spacing(40),
    height: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperItem: {
    fontSize: '2rem',
    fontWeight: '100',
    letterSpacing: '.5rem',
    color: '#757575'
  },
  formItem: {
    width: '400px',
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    }
  },
  button: {
    color: '#FFD700',
  },

  // Everythin below in styles may need to be taken out

  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function Work() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // This will have to be on the server and called upon site opening up and then cached to
  // local storage
  const projectContent = [
    {cardHeaderTitle: 'Apt Health',
    cardHeaderSubHeader: 'October 2019 - April 2020',
    cardMediaImage: AptHealth,
    cardMediaTitle: 'Apt Health Landing Page',
    cardDescription: `This project I was apprroached by a startup to build a web application in React.js
                      translated from an in-production iOS applicaiton that was a platform for doctors
                      and physicians alike to communicate with patients and incentivize patients in
                      staying current with medical appointments.`,
    },
  ]

  const projectGrid = projectContent.map(({
      cardHeaderTitle,
      cardHeaderSubHeader,
      cardMediaImage,
      cardMediaTitle,
      cardDescription,
    }) => (
    <Card raised className={classes.root}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon /> 
            {/* This button can route the user to a page where this particular project can solo */}
          </IconButton>
        }
        title={cardHeaderTitle}
        subheader={cardHeaderSubHeader}
      />
      <CardMedia
        className={classes.media}
        image={cardMediaImage}
        title={cardMediaTitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cardDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          {/* This button (another button) can ask the user if they want to message me about this
          project? */}
        </IconButton>
      </CardActions>
    </Card>));

  const content = (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.formContainer}
      container
    >
      <Grid item>
        <Paper elevation={5} className={classes.paper}>
          <div className={classes.paperItem}>PROJECTS</div>
        </Paper>
      </Grid>
      {projectGrid}
    </Grid>
  );

  return (
    <UnauthDesktopDrawer>
      {content}
    </UnauthDesktopDrawer>
);
}

export default Work;
