import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../state/selectors/Message';
import { fetchMessages } from '../state/actions/Messages';
import { logUserOut } from '../state/actions/Auth';
import AuthDesktopDrawer from '../navigation/AuthDesktopDrawer';
import MessageCell from './MessageCell';
import HeaderPaper from '../unauth/HeaderPaper';
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

function Messages() {
  const dispatch = useDispatch();
  const messages = useSelector(getMessages);
  const classes = useStyles();

  const fetchMessagesCallback = useCallback(() => dispatch(fetchMessages()), [dispatch]);
  const logUserOutCallback = useCallback(() => dispatch(logUserOut()), [dispatch]);

  useEffect(() => {
    const asyncFetchMessages = async () => {
      try {
        await fetchMessagesCallback();
      } catch (error) {
        if (error.name === 'UNAUTHENTICATED') {
          localStorage.removeItem('token');
          logUserOutCallback();
        }
      }
    }

    asyncFetchMessages();
  }, [fetchMessagesCallback, logUserOutCallback]);
  const messageList = messages.map(({id, sender_email: from, msg, created_at}) => (
    <MessageCell
      from={from}
      date={new Date(created_at).toDateString()}
      msg={msg}
      key={id}
    />
  ))

  const title = 'Messages';
  const content = (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.formContainer}
      container
    >
      <HeaderPaper classes={classes} title={title} />
      <Grid item>{messageList}</Grid>
    </Grid>
  );

  return (
    <AuthDesktopDrawer>
      {content}
    </AuthDesktopDrawer>
);
}

export default Messages;
