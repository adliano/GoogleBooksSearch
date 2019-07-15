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
    books:[],
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
      // let _booksElements = booksArray.map(({ id, volumeInfo: { title, authors, previewLink, imageLinks: { thumbnail }, description } }) => {
        
      //   // console.log(id)
      //   // console.log(title)
      //   // console.log(authors)
      //   // console.log(previewLink)
      //   // console.log(thumbnail)
      //   // console.log(description)

      //   return (<><Book id={id} title={title} author={authors} previewLink={previewLink} thumbnail={thumbnail} description={description}/></>)
        
      // })
      // // <Book title='' author='' previewLink='' thumbnail='' description=""/>
      // console.log(_booksElements[0])

      // //
      this.setState({ books: booksArray })
    })
  }
    /**
     * 
     */
    renderBooks = (booksArray) => {
      let _booksElements = booksArray.map(({ id, volumeInfo: { title, authors, previewLink, imageLinks: { thumbnail }, description } }) => {
        
        // console.log(id)
        // console.log(title)
        // console.log(authors)
        // console.log(previewLink)
        // console.log(thumbnail)
        // console.log(description)

        return (<Book id={id} title={title} author={authors} previewLink={previewLink} thumbnail={thumbnail} description={description}/>)
        
      }) 

      return _booksElements;
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
        <BookShelve header='Saved'>
        {this.renderBooks(this.state.books)}
        </BookShelve>
      </SearchFragment>
    </div>
  )
}
}

export default App
