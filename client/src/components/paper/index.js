/**
 * This will be used for paper container
 */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Use the styles
import style from './styles'

export default function PaperSheet(props) {
  const classes = style();
  /// Return the component
  return (
    <div>
      <Paper className={classes.root}>
          {props.children}
        {/* <Typography variant="h2" component="h3" align='center'>
          {props.h2}
        </Typography>
        <Typography component="p" align='center'>
          {props.p}
        </Typography> */}
      </Paper>
    </div>
  );
}
