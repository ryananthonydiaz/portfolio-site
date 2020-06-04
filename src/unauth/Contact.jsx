import React, { useState } from 'react';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import { TextField, TextArea, Button, Window, WindowHeader, WindowContent } from 'react95';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  window: {
    width: '100%'
  },
  windowGridItem: {
    maxWidth: '500px',
    [theme.breakpoints.down('md')]: {
      width: '95%',
    }
  },
  form: {
    width: '100%',
    margin: theme.spacing(6, 0),
  },
  formItem: {
    width: '400px',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
      width: '100%'
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
    <Grid justify="center" alignItems="center" className={classes.form} container>
      <Grid className={classes.windowGridItem} item>
        <Window className={classes.window}>
          <WindowHeader>Send Me A Message!</WindowHeader>
          <WindowContent>
            <Grid justify="center" alignItems="center" direction="column" container>
              <Grid className={classes.formItem} item>
                <div>Email</div>
                <TextField value={email} onChange={handleEmail} />
              </Grid>
              <Grid className={classes.formItem} item>
                <div>Message</div>
                <TextArea value={msg} onChange={handleMsg} />
              </Grid>
              <Grid className={classes.formItem} item>
                <Button onClick={handleSubmit} style={{ marginLeft: '2px' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
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

export default Contact;
