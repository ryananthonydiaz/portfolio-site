
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../state/actions/Auth';
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

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const [alertModal, setAlertModal] = useState({ isOpen: false });
  const [showAlert] = useAlert(setAlertModal);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = async () => {
    setButtonIsDisabled(true);
    let title;
    let buttons = [ { text: 'OK', action: () => history.push('/') } ];
    let body;

    try {
      if (email.match(/^[^@]+@[^.]+\..{2,}$/g) === null) {
        const err = new Error('It seems as though your email is invalid. Please check your email and try again.');
        err.name = 'INVALID_EMAIL';
        throw err;
      }

      await dispatch(login(email, password));
    } catch (error) {
      if (error.name === 'INVALID_EMAIL') {
        title = 'Invalid Email';
        body = error.message;
        buttons = 'Ok';
      } else if (error.name === 'INVALID_PASSWORD') {
        title = 'Invalid Password';
        body = error.message;
        buttons = 'Ok';
      } else {
        title = 'Private Login';
        body = 'This login page is specifically for the site admin. Thank you for visiting!';
      }
      buttons = 'Ok';
      setButtonIsDisabled(false);
      showAlert(title, body, buttons);
    }
  }


  const title = 'Login';
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
        <InputLabel>Password</InputLabel>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePassword}
          className={classes.formItem}
        />
      </Grid>
      
      <Grid item>
        <Button
          disabled={buttonIsDisabled}
          className={
            `${classes.formItem} ${classes.button}`
            }
          variant="outlined"
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
      </Grid>
    </Grid>
  );

  console.log(buttonIsDisabled)

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
