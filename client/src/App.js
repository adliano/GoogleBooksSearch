import React, { Component } from 'react'
// Imports fro Material UI Cores
import { TextField, Box, IconButton, InputAdornment } from '@material-ui/core/'
// Imports fro Material UI Icons
import { Search } from '@material-ui/icons/'
// Import for pages
import SearchFragment from './pages/SearchFragment'
// Import for Components
import Nav from './components/Nav'
import Paper from './components/paper'
import { H2, H5, P } from './components/headers'
import BookShelve from './components/BookShelve'
import Book from './components/Book'
// ************* DotEnv ******************
import dotenv from 'dotenv'
import { GoogleBooksAPI as Keys } from './utils/Key'
dotenv.config()
// ***************************************

class App extends Component {
  /**
   * Application State
   */
  state = {
    books: []
  }
  /**
   * Lifecycle
   * componentDidMount()
   */
  componentDidMount () {
    this.searchGoogleBooks('harry potter')
  }
  /**
   * searchGoogleBooks
   * @method to get books from google API
   */
  searchGoogleBooks = query => {
    fetch(`${Keys.URL}?q=${query}`)
      .then(response => response.json())
      .then(results => results.items)
      .then(booksArray => this.setState({ books: booksArray }))
      .catch(err => {
        console.error(err)
      })
  }
  /**
   * onSearchClick()
   * Event listner used for search button
   */
  onSearchClick = event => {
    console.log('===========================')
    console.log(event.target)
    console.log('===========================')
  }
  /**
   * handleInputChange
   */
  handleInputChange = event => {
    const value = event.target.value
    this.setState(
      { query: value },
      // Callbach for setState()
      () => console.log(this.state.query)
    )
  }
  /**
   * renderBooks()
   * @method used to render <Book> on page
   */
  renderBooks = booksArray => {
    // Destructing object
    let _booksElements = booksArray.map(
      ({
        id,
        volumeInfo: {
          title,
          authors,
          previewLink,
          imageLinks: { thumbnail },
          description
        }
      }) => {
        // each Book available in the JSON will be
        // Added as <Book> element in _booksElements array
        return (
          <Book
            id={id}
            title={title}
            author={authors}
            previewLink={previewLink}
            thumbnail={thumbnail}
            description={description}
          />
        )
      }
    )
    // Return Array of <Book> elements
    return _booksElements
  }
  /**
   * Render
   */
  render () {
    return (
      <div>
        <Nav />
        <Paper>
          <H2 align='center'>Google Books Search</H2>
          <P align='center'>Search for and Save Books of Interest</P>
        </Paper>
        {/* Change pages here */}
        <SearchFragment
          searchEventListner={this.onSearchClick}
          onInputChange={this.handleInputChange}
        />
        <BookShelve header='Book Search'>
          {this.renderBooks(this.state.books)}
        </BookShelve>
      </div>
    )
  }
}

export default App
