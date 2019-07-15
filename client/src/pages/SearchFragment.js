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

function SearchFragment () {
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
          {/* ************************************************************** */}
          <TextField
            id='outlined-adornment-password'
            // className={clsx(classes.margin, classes.textField)}
            variant='outlined'
            type='text'
            label='Search'
            style={{ margin: 10 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    // onClick={handleClickShowPassword}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              )
            }}
            fullWidth
          />
          {/* *************************************************************** */}

          {/* list https://material-ui.com/components/lists/ */}
        </Box>
      </Paper>
    </div>
  )
}

export default SearchFragment
