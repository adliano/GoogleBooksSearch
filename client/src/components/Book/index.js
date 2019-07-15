import React from 'react'
import { H2, H3, H5, P } from '../headers'

import {
  Box,
  IconButton,
  InputAdornment,
  Grid,
  Card,
  CardMedia,
  Paper,
  Fab
} from '@material-ui/core/'

import { Visibility, Save } from '@material-ui/icons/'

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

function Book (props) {
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
      <Box border={1} mb={1} borderColor='grey.500' borderRadius={5}>
        <Grid container alignItems='center'>
          {/* Image Container */}
          <Grid item sm={5} xs={12}>
            <Card>
              <CardMedia
                style={{ height: 250, margin: '1.5%' }}
                image={props.src}
                title='Book Image'
              />
            </Card>
          </Grid>
          {/* Book Info */}
          <Grid item sm={7} xs={12}>
            <Grid container direction='column' style={{ margin: '1%' }}>
              <Grid item style={{ height: '100%', padding: '2%' }}>
                <H3>{props.name}</H3>
                <H5>{props.gretting}</H5>
                <H5>{props.author}</H5>
                <P>{props.about}</P>
              </Grid>
              <Grid item style={{ height: '100%', padding: '2%' }}>
                <Grid container direction='column-reverse'>
                  <Grid item />
                  <Grid
                    container
                    direction='row-reverse'
                    alignItems='stretch'
                    style={{
                      position: 'relative',
                      bottom: 1,
                      right: 15
                    }}
                  >
                    <Grid item xs={2}>
                      <Fab color='primary' onClick={props.saveEventListener}>
                        <Save />
                      </Fab>
                    </Grid>
                    <Grid item xs={2}>
                      <Fab color='secondary' onClick={props.viewEventListner}>
                        <Visibility />
                      </Fab>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Book
