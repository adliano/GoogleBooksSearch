import React from 'react'
import { H2, H5, P } from '../headers'

import {
  Box,
  IconButton,
  InputAdornment,
  Grid,
  Card,
  CardMedia,
  Paper,
} from '@material-ui/core/'

import {
  Visibility,
  Save,
 } from '@material-ui/icons/'

import { makeStyles } from '@material-ui/core/styles'

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
        <Grid container direction='row' justify='center' alignItems='center'
        style={{
          backgroundColor: 'yellow',
          textAlign: 'center',
          padding: '2px'
        }}
        >
        {/* <Grid container xs={4} direction='column' justify='center' alignItems='center'> */}
          <Grid
            item
            xs={5}
            style={{
              backgroundColor: 'blue',
              textAlign: 'center',
              padding: '2px'
            }}
            >
              something
          </Grid>
          <Grid
            item
            xs={7}
            style={{
              backgroundColor: 'green',
              textAlign: 'center',
              padding: '2px'
            }}
            >
            Something
          </Grid>
            {/* </Grid> */}
        </Grid>
      </Box>
    </div>
  )
}

export default Book

// {/* <Card>
//   <CardMedia
//     image='https://via.placeholder.com/350x350'
//     title='Contemplative Reptile'
//     />
// </Card> */}