/**
 * This will be used for paper container
 */
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
// Use the styles
import style from './styles'

export default function PaperSheet (props) {
  const classes = style()
  /// Return the component
  return (
    <>
    <Box mb={-14}>
      <Grid container justify='center'>
        <Grid item xs={12} md={12} lg={11} xl={11}>
          <Paper className={classes.root}>{props.children}</Paper>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}
