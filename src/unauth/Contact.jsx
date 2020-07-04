import React, { useState } from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    width: '100%',
    margin: theme.spacing(6, 0),
  },
  formItem: {
    width: '400px',
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    }
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
          <TextField
            label="Email"
            variant="outlined"
            onChange={() => null}
            className={classes.formItem}
          />
      </Grid>
      <Grid item>
        <TextField
            multiline
            rows={10}
            label="Message"
            variant="outlined"
            onChange={() => null}
            className={classes.formItem}
          />
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
