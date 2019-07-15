import React from 'react'
// import Books from './pages/Books'
import { H2, H5, P } from '../headers'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

function BookShelve () {
  /**
   * Theme
   */
  const theme = {
    spacing: 8
  }

  return (
    <div>
        <Box m={2} border={1} borderColor="grey.500" borderRadius={5}>
          <H5 style={{ margin: 10 }} align='inherit'>
            Results
          </H5>
          {/* ************************************************************** */}
          
          {/* *************************************************************** */}

          {/* list https://material-ui.com/components/lists/ */}
        </Box>
    </div>
  )
}

export default BookShelve
