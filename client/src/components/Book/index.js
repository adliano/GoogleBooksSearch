import React from 'react'
import { H2, H5, P } from '../headers'

import Box, { 
    IconButton,
    InputAdornment,
    Grid,
    CardMedia,
    Card,
    CardContent,
    Typography,
    Paper
} from '@material-ui/core/'

import Visibility from '@material-ui/icons/Visibility'
import Save from '@material-ui/icons/Save'

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
    <>
      <Card className={classes.card}>
        <div style={{display: 'flex', flexDirection: 'column', }}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              Book Name
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Book Greatting
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Author
            </Typography>
          </CardContent>
        </div>
        <CardMedia  style={{ height: 150,  width: 150, paddingTop: '15%'}}
        image="https://via.placeholder.com/150x150"
        />
      </Card>
    </>
  )
}

export default Book
