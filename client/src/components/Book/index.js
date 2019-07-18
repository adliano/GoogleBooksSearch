import React from 'react'
import { H3, H5, P } from '../headers'

import { Box, Grid, Card, CardMedia, Fab } from '@material-ui/core/'

import { Visibility } from '@material-ui/icons/'

function Book (props) {
  /**
   * Return grid layout to format how book will be render
   */
  return (
    <>
      <Box
        border={1}
        mb={1}
        borderColor='grey.500'
        borderRadius={5}
        id={props.id}
      >
        <Grid container alignItems='center'>
          {/* Image Container */}
          <Grid item sm={5} xs={12}>
            <Card>
              <CardMedia
                style={{ height: 250, margin: '1.5%' }}
                image={
                  props.thumbnail
                    ? props.thumbnail
                    : 'https://www.naqda.gov.lk/images/img_not_available.png'
                }
                title='Book Image'
              />
            </Card>
          </Grid>
          {/* Book Info */}
          <Grid item sm={7} xs={12}>
            <Grid container direction='column' style={{ margin: '1%' }}>
              <Grid item style={{ height: '100%', padding: '2%' }}>
                <H3>{props.title}</H3>
                <H5>{props.gretting}</H5>
                <H5>{props.authors}</H5>
                <P>{props.description}</P>
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
                      {props.fabButton}
                    </Grid>
                    <Grid item xs={2}>
                      <Fab
                        color='secondary'
                        href={props.previewLink}
                        target='_blank'
                      >
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
