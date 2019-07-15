import React from 'react'
import { H2, H3, H5, P } from '../headers'

import {
  Box,
  IconButton,
  InputAdornment,
  Grid,
  Card,
  CardMedia,
  Paper
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
      <Grid container spacing={1} alignItems='center'>
        {/* Image Container */}
        <Grid item sm={5} xs={12}>
          <Card>
            <CardMedia
              style={{ height: 250, margin: '1%' }}
              image='https://via.placeholder.com/250x250'
              title='Book Image'
            />
          </Card>
        </Grid>
        {/* Book Info */}
        <Grid item sm={7} xs={12}>
          <Grid
            container
            direction='column'
            style={{ margin: '1%', }}
          >
            <Grid item style={{height: '100%', padding: '2%'}}>
              <H3>Book Name</H3>
              <H5>Book Greatting</H5>
              <H5>Author</H5>
              <P>
                About the book
                Tempor ad cillum cupidatat aliqua tempor non qui reprehenderit
                enim. Quis pariatur dolore laborum deserunt occaecat ea fugiat
                ad enim et deserunt ipsum. Cupidatat labore ipsum occaecat
                magna. Veniam voluptate proident ad ea occaecat irure. Nostrud
                qui excepteur veniam consectetur labore sit ipsum esse.
                Cupidatat quis occaecat Lorem anim laboris laboris in sint.
                Ullamco esse aliqua aliquip fugiat et nostrud. Pariatur elit
                commodo mollit tempor aute. Eiusmod consequat labore quis velit
                deserunt non qui est ad aute commodo occaecat.
              </P>
            </Grid>
            <Grid item style={{height: '100%', padding: '2%'}} >
              <Grid
                container
                direction='column-reverse'
                // alignItems='stretch'
                // alignContent='flex-end'
              >
                <Grid item />
                <Grid container direction='row-reverse' alignItems='stretch'>
                  <Grid item xs={1}>
                    <IconButton>
                      <Visibility />
                    </IconButton>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton>
                      <Save />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Book

// {/* <Grid container xs={4} direction='column' justify='center' alignItems='center'> */}

// <Box borderTop={1} borderColor='grey.500'>
//   <Grid
//     container
//     direction='row'
//     justify='center'
//     alignItems='center'
//     style={{
//       backgroundColor: 'yellow',
//       textAlign: 'center',
//       padding: '1%'
//     }}
//   >
//     {/* *** Book Image *** */}
//     <Grid
//       item
//       xs={5}
//       style={{
//         backgroundColor: 'blue',
//         textAlign: 'center',
//         padding: '.5%'
//       }}
//     >
// <Card>
//   <CardMedia
//     style={{ height: 250 }}
//     image='https://via.placeholder.com/250x250'
//     title='Book Image'
//   />
// </Card>
//     </Grid>
//     {/* *** Book Info *** */}
//     <Grid
//       item
//       xs={7}
//       style={{
//         backgroundColor: 'green',
//         textAlign: 'center',
//         padding: '1%'
//       }}
//     >
//       <Grid container direction='column' justify='left' alignItems='left'>
//         <Grid item md={12} style={{ textAlign: 'left' }}>
//           <H2>
//           Book Name
//           </H2>
//         </Grid>
//         <Grid item style={{ textAlign: 'left' }}>
//           test
//         </Grid>
//       </Grid>
//     </Grid>
//   </Grid>
// </Box>
