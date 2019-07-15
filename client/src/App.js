import React, { Component }from 'react'

import Nav from './components/Nav'
import Paper from './components/paper'
import SearchFragment from './pages/SearchFragment'
import { H2, H5, P } from './components/headers'
import BookShelve from './components/BookShelve'

import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from '@material-ui/core/'

import {
  Search,
 } from '@material-ui/icons/'


class App extends Component {

  componentDidMount(){
    // TODO: Fetch data from google api here
    let _URL = `https://www.googleapis.com/books/v1/volumes?q=` + 'bookname'
  }
  /**
   * Render
   */
  render(){
    return (
      <div>
      <Nav />
      <Paper>
        <H2 align='center'>Google Books Search</H2>
        <P align='center'>Search for and Save Books of Interest</P>
      </Paper>
      <SearchFragment>
        <BookShelve header='Saved'/>
      </SearchFragment>
    </div>
  )
}
}

export default App
