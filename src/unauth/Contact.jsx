import React, { useState } from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    color: '#2ecc71',
  }
}));

function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleEmail = e => setEmail(e.target.value);
  const handleMsg = e => setMsg(e.target.value);
  const handleSubmit = e => {
    console.log('submit pressed');
  }

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
          <div className={classes.paperItem}>CONTACT ME</div>
        </Paper>
      </Grid>

      <Grid item>
        <InputLabel>Email</InputLabel>
        <TextField
          label="Email"
          variant="outlined"
          onChange={() => null}
          className={classes.formItem}
        />
      </Grid>

      <Grid item>
        <InputLabel>Message</InputLabel>
        <TextField
          multiline
          rows={10}
          label="Message"
          variant="outlined"
          onChange={() => null}
          className={classes.formItem}
        />
      </Grid>
      
      <Grid item>
        <Button className={`${classes.formItem} ${classes.button}`} variant="outlined">
          SUBMIT
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <UnauthDesktopDrawer>
      {content}
    </UnauthDesktopDrawer>
);
}

export default Contact;
