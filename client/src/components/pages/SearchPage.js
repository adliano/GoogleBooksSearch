import React, { Component } from 'react'
import Nav from '../Nav'
import Paper from '../paper'
import { H2, P } from '../headers'
import BookShelve from '../BookShelve'
import Book from '../Book'
import SearchFragment from '../SearchFragment'
import dotenv from 'dotenv'
import { GoogleBooksAPI as Keys } from '../../utils/Key'
dotenv.config()

class SearchPage extends Component {
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
    this.searchGoogleBooks('turbo')
  }
  /**
   * searchGoogleBooks
   * @method to get books from google API
   */
  searchGoogleBooks = query => {
    fetch(`${Keys.URL}?q=${query}`)
      .then(response => response.json())
      .then(results => results.items)
      .then(booksArray =>
        this.setState({ books: booksArray }, () => console.log(booksArray))
      )
      .catch(err => {
        console.error(err)
      })
  }
  /**
   * onSearchClick()
   * Event listner used for search button
   */
  onSearchClick = event => {
    let _query = this.state.query
    if (_query) {
      this.searchGoogleBooks(this.state.query)
    } else {
      // TODO: Create a error handler later
      console.log('Missing Query')
    }
  }
  /**
   * handleInputChange
   */
  handleInputChange = event => {
    const value = event.target.value
    this.setState({ query: value })
  }
  /**
   * renderBooks()
   * @method used to render <Book> on page
   */
  renderBooks = booksArray => {
    // Destructing object
    // Some books doesn't have `imageLinks` available
    // Therefor default img was set to void application to crash
    let _booksElements = booksArray.map(({ id, volumeInfo }) => {
      console.log(volumeInfo)

      const {
        title,
        authors,
        previewLink,
        description,
        imageLinks = {}
      } = volumeInfo

      const {
        thumbnail = 'https://www.naqda.gov.lk/images/img_not_available.png'
      } = imageLinks

      // each Book available in the JSON will be
      // Added as <Book> element in _booksElements array
      return (
        <Book
          key={id}
          id={id}
          title={title}
          author={authors}
          previewLink={previewLink}
          thumbnail={thumbnail}
          description={description}
        />
      )
    })
    // Return Array of <Book> elements
    return _booksElements
  }
  /**
   * Render
   */
  render () {
    return (
      <>
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
      </>
    )
  }
}

export default SearchPage
