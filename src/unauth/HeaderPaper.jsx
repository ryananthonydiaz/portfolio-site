import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function HeaderPaper({ classes, title }) {
  return (
    <Grid item>
      <Paper elevation={5} className={classes.paper}>
        <div className={classes.paperItem}>{title}</div>
      </Paper>
    </Grid>
  );
}

export default HeaderPaper;
