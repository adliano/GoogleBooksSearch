import React from 'react'
import { H5 } from '../headers'
import Box from '@material-ui/core/Box'
import Paper from '../paper/index.js'

function BookShelve (props) {
  return (
    <>
      <Box mt={-14}>
        <Paper>
          <Box m={2} style={{ backgroung: 'red' }}>
            <H5 style={{ margin: 10 }} align='inherit'>
              {props.header}
            </H5>
            <Box border={0} borderColor='grey.500' borderRadius={5}>
              {props.children}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default BookShelve
