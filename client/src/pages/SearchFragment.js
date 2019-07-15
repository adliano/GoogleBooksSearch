import React from 'react'
import Paper from '../components/paper'
import { H5 } from '../components/headers'

import Search from '@material-ui/icons/Search'
import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
 } from '@material-ui/core'


function SearchFragment (props) {
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
