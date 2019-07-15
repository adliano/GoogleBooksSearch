import React from 'react'
// import Books from './pages/Books'
import { H2, H5, P } from '../headers'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

import Book from '../Book'

function BookShelve () {
  /**
   * Theme
   */
  const theme = {
    spacing: 8
  }

  return (
    <div>
      <Box m={2}>
        <H5 style={{ margin: 10 }} align='inherit'>
          Results
        </H5>
        <Box border={0} borderColor='grey.500' borderRadius={5}>
          {/* ************************************************************** */}
          <Book name='Book Name' author='Somebody' src='https://via.placeholder.com/250x250' about='about the book here'/>
          <Book name='Book Name' author='Somebody' src='https://via.placeholder.com/250x250' about='about the book here'/>
          <Book name='Book Name' author='Somebody' src='https://via.placeholder.com/250x250' about='about the book here'/>
          <Book name='Book Name' author='Somebody' src='https://via.placeholder.com/250x250' about='about the book here'/>
          <Book name='Book Name' author='Somebody' src='https://via.placeholder.com/250x250' about='about the book here'/>
          <Book name='Book Name' author='Somebody' src='https://via.placeholder.com/250x250' about='about the book here'/>
          <Book name='Book Name' author='Somebody' src='https://via.placeholder.com/250x250' about='about the book here'/>
          {/* <Book /> */}
          {/* *************************************************************** */}
        </Box>
      </Box>
    </div>
  )
}

export default BookShelve

/* <H3>{props.name}</H3>
              <H5>{props.gretting}</H5>
              <H5>{props.author}</H5>
              <P>{props.about}</P> */
