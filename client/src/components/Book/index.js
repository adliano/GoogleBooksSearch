import React from 'react'
import { H2, H5, P } from '../headers'

import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import Save from '@material-ui/icons/Save'
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'

import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
}))

function Book () {
  /**
   * Themes
   */
  const classes = useStyles()
  const theme = {
    spacing: 8
  }
  /**
   * Return
   */
  return (
    <div>
      <Box borderTop={1} borderColor='grey.500'>
        {/* <Grid container direction='row' justify='center' alignItems='center'> */}
        {/* *********** Top Row *********** */}
        <Grid container direction='row' justify='center' alignItems='center'>
          {/* Grid with the Book info */}
          <Grid
            item
            xs={3}
            style={{
              // backgroundColor: 'green',
              // color: 'white',
              padding: '25px'
            }}
          >
            <H5>Book Name</H5>
            <P>the book it great to read it</P>
            <P>Someone wrote it</P>
          </Grid>
          {/*  Empty grid to use as spacer */}
          <Grid item xs={6} />
          {/* Grid with the buttons */}
          <Grid
            item
            xs={3}
            style={{
              //   backgroundColor: 'blue',
              //   color: 'white',
              textAlign: 'center',
              padding: '25px'
            }}
          >
            <IconButton style={{ marginRight: '25px' }}>
              <Visibility />
            </IconButton>
            <IconButton style={{ marginRight: '25px' }}>
              <Save />
            </IconButton>
          </Grid>
        </Grid>
        {/* *********** Top Row *********** */}
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid
            item
            xs={4}
            style={{
              backgroundColor: 'blue',
              textAlign: 'center',
              padding: '25px'
            }}
          >
            <Card>
              <CardMedia
                image='https://via.placeholder.com/350x350'
                title='Contemplative Reptile'
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={8}
            style={{
              backgroundColor: 'yellow',
              textAlign: 'center',
              padding: '25px'
            }}
          >
            X4
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Book
