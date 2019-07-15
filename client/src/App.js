import React, { Component }from 'react'
// 
import Nav from './components/Nav'
import Paper from './components/paper'
import { H2, H5, P } from './components/headers'
import BookShelve from './components/BookShelve'
import Book from './components/Book'
import SearchFragment from './pages/SearchFragment'
// 
import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from '@material-ui/core/'
// 
import {
  Search,
} from '@material-ui/icons/'
// 
// ************* DotEnv ******************
import dotenv from 'dotenv'
import { GoogleBooksAPI as Keys } from './utils/Key'
// 
dotenv.config()
// ***************************************

class App extends Component {

  state = {
    booksResults:[],
  }

  componentDidMount(){
    // TODO: Fetch data from google api here
    this.searchGoogleBooks('harry potter')
  }
  /**
   * searchGoogleBooks
   * Method to get books from google API
   */
  searchGoogleBooks = (query) => {
    fetch(`${Keys.URL}?q=${query}`)
    .then(response => response.json())
    .then(results => results.items)
    .then(booksArray => {
      //
      // console.log(booksArray[0].volumeInfo)
      //
      let _booksElements = booksArray.map(({ volumeInfo: { title, author, previewLink, thumbnail, description } }) => {
        
        console.log(title)
        console.log(author)
        console.log(previewLink)
        console.log(thumbnail)
        console.log(description)
        
      })
      // <Book title='' author='' previewLink='' thumbnail='' description=""/>

      // //
      // this.setState({ booksResults: booksArray })
    })
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
