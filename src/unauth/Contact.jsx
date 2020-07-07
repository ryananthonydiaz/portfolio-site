import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createMessage } from '../state/actions/Messages';
import AlertModal, { useAlert } from '../shared/AlertModal';
import UnauthDesktopDrawer from '../navigation/UnauthDesktopDrawer';
import HeaderPaper from './HeaderPaper';
import Grid from '@material-ui/core/Grid';
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
    color: '#757575',
    textTransform: 'uppercase',
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
  const dispatch = useDispatch();
  const history = useHistory();

  const [msg, setMsg] = useState('');
  const [email, setEmail] = useState('');
  const [alertModal, setAlertModal] = useState({ isOpen: false });
  const [showAlert] = useAlert(setAlertModal);

  const handleEmail = e => setEmail(e.target.value);
  const handleMsg = e => setMsg(e.target.value);

  const handleSubmit = async () => {
    let title = 'Thank you!';
    const buttons = [ { text: 'OK', action: () => history.push('/') } ];
    let body = 'I appreciate the message and I\'ll be getting back to you ASAP!';

    try {
      const response = await dispatch(createMessage(email, msg));
      
      setEmail('');
      setMsg('');
    } catch (error) {
      console.log(error);
    }

    showAlert(title, body, buttons)
  }


  const title = 'Contact Me';
  const content = (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.formContainer}
      container
    >
      <HeaderPaper classes={classes} title={title} />
      <Grid item>
        <InputLabel>Email</InputLabel>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
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
          value={msg}
          onChange={handleMsg}
          className={classes.formItem}
        />
      </Grid>
      
      <Grid item>
        <Button
          className={
            `${classes.formItem} ${classes.button}`
            }
          variant="outlined"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <>
      <AlertModal alertModal={alertModal} />
      <UnauthDesktopDrawer>
        {content}
      </UnauthDesktopDrawer>
    </>
);
}

export default Contact;
