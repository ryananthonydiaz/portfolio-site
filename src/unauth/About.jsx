import React from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import AboutCell from './AboutCell';
import HeaderPaper from './HeaderPaper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
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
    color: '#757575',
    textTransform: 'uppercase',
  },
}));

function About() {
  const classes = useStyles();

  const title = 'About';

  const aboutList = [{
    title: `Ryan Diaz`,
    subTitle: `A Software Engineer`,
    info: `I'm a software engineer based in the greater Los Angeles area that specializes in building
    web applications (Front to Back) with a passion for anything that lives on the web.`,
  },{
    title: `Experience`,
    subTitle: `Battle Tested skills`,
    info: `With prior start-up experience I know what it means to have to make deadlines. When I'm 
    asked if I'm comfortable in a start-up/fast-paced development evironment, I don't just say, 'yes'
    to check off a box - I'm fully aware what that, 'yes', entails. The long nights, 60 hour work weeks and
    countless refactoring. This may not seem like a developer's ideal position, but for me, I thrive
    in positions such as these. I love creating software but there's nothing like creating software
    with a deadline and a demo scheduled for the next morning in front of stakeholders. Bottom of the
    9th, bases loaded and I'm up to bat. That's what I've done and that's what I'm looking for. If this
    sounds like what you need - look no further.`,
  },{
    title: `Education`,
    subTitle: `Computer Science`,
    info: `With 40+ credits in Computer Science including Advanced Data Structures and Algorithms in 
    Java, Software Design and OS courses I have maintained a 4.0 GPA and look to start my Masters of
    Science in Computer Science at Georgia Institute of Technology in Spring 2021.`,  
  },{
    title: `JavaScript`,
    subTitle: `Skills within the ecosystem`,
    info: `TypeScript enthusiast and advocate. Strong proficiency in JavaScript/ES6/ES7, including DOM
    manipulation and the JavaScript object model through an expert understanding of React.js. Developing
    new user-facing features and maintaining state management through REDUX, REDUX HOOKS, REDUX-THUNK
    (middleware for RESTful APIs) and REACT-HOOKS. I have professional experience using React style
    component libraries such as Matierl-UI and ReactStrap. As for the back-end, my skills extend to
    using Node.js with Express, GraphQL (Apollo-Server and GraphQL-Yoga) all connecting to a PostgreSQL
    Database. Personally, my framework of preference is React, however at the end of the day I consider
    myself a JavaScript Developer so as long as it's JavaScript, I'm framework agnostic and ready to 
    jump into any codebase of any JavaScript framework (Angular, Vue, etc.).
    `,
  },{
    title: `Team`,
    subTitle: `Team Software`,
    info: `Professional experience using Git, Jira, SourceTree, BitBucket and GitHub for version control
    and ticketing.`,
  },{
    title: `Cloud`,
    subTitle: `Cloud Service Skills`,
    info: `Amazon Cognito from AWS, itegrated into web applications as a full authetication service using
    their JavaScript SDK.`,
  }].map(({title, subTitle, info}) => (
    <AboutCell
      title={title}
      subTitle={subTitle}
      info={info}
    />
  ))

  const content = (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.formContainer}
      container
    >
      <HeaderPaper classes={classes} title={title} />
      <Grid item>{aboutList}</Grid>
    </Grid>
  );

  return (
    <UnauthDesktopDrawer>
      {content}
    </UnauthDesktopDrawer>
);
}

export default About;
