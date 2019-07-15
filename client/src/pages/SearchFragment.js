import React from 'react'
// import Books from './pages/Books'
import Nav from '../components/Nav'
import Paper from '../components/paper'
import { H2, H5, P } from '../components/headers'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

function SearchFragment (props) {
  /**
   * Theme
   */
  const theme = {
    spacing: 8
  }

  return (
    <div>
      <Paper>
        <Box m={2}>
          <H5 style={{ margin: 10 }} align='inherit'>
            Book Search
          </H5>
          <TextField
            id='outlined-adornment-password'
            variant='outlined'
            type='text'
            label='Search'
            onChange={props.onInputChange}
            style={{ margin: 10 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={props.searchEventListner}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              )
            }}
            fullWidth
          />
        </Box>
      </Paper>
    </div>
  )
}

export default SearchFragment
