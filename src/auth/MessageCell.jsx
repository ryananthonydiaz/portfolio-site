import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  label: {
    fontSize: '.75rem',
    fontWeight: '100',
    margin: 0,
  }
}));

function MessageCell({ from, date, msg }) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  return (
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.heading}>
          <div className={classes.label}>From:</div>
          {from}
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <div className={classes.label}>{date}</div>
          {msg}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default MessageCell;
