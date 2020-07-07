import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isString, isArray, get } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '30vw',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      [theme.breakpoints.down('sm')]: {
          width: '95vw'
      },
      '&:focus': {
          border: 'none',
          outline: 'none',
      },
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 100,
    },
    body: {
      fontWeight: 100,
      margin: theme.spacing(4, 0),
    },
  })
);

const AlertModal = ({ alertModal: { isOpen, title, body, buttons } }) => {
  const classes = useStyles();

  if (isOpen === false) { return null; }

    const buttonField = buttons.map(btn => (
      <Grid key={uuidv4()} item>
        <Button  onClick={btn.action} variant="outlined">
          {btn.text}
        </Button>
      </Grid>
    ));

  const modalContent = (
    <div className={classes.paper}>
      {get(title, ['length'], false) === 0 ? <div /> : <div className={classes.title}>{title}</div>}
      {get(body, ['length'], false) === 0 ? <div /> : <div className={classes.body}>{body}</div>}
      <Grid justify="space-between" container>
          {buttonField}
      </Grid>
    </div>
  );



  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function showAlert(setFunction, title, body, buttonOptions) {
    let buttons;
  
    if (isString(buttonOptions)) {
      buttons = [
        {
          text: buttonOptions,
          action: () => hideAlert(setFunction),
        },
      ];
    } else if (isArray(buttonOptions)) {
      buttons = buttonOptions;
    }
  
    setFunction({ isOpen: true, title, body, buttons });
  }
  
  function hideAlert(setFunction) {
    setFunction({ isOpen: false, title: '', body: '', buttons: [] });
  }
  
  export function useAlert(setFunction) {
    return [
      (title, body, buttonOptions) => showAlert(setFunction, title, body, buttonOptions),
      () => hideAlert(setFunction),
    ];
  }

  export default AlertModal;