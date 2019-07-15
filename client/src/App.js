import React from 'react'
// import Books from './pages/Books'
import Nav from './components/Nav'
import Paper from './components/paper'
import { H2, H5, P } from './components/headers'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

import SearchFragment from './pages/SearchFragment'

function App () {
  /**
   * Theme
   */
  const theme = {
    spacing: 8
  }

  return (
    <div>
      {/* <Books /> */}
      <Nav />
      <Paper>
        <H2 align='center'>Google Books Search</H2>
        <P align='center'>Search for and Save Books of Interest</P>
      </Paper>
      <SearchFragment />
    </div>
  )
}

export default App
