import React, { Component } from 'react'
import { Fab } from '@material-ui/core/'
import { Save } from '@material-ui/icons/'
import BookShelve from '../BookShelve'
import Book from '../Book'
import SearchFragment from '../SearchFragment'
import dotenv from 'dotenv'
import { GoogleBooksAPI as Keys } from '../../utils/Key'
import API from '../../utils/API'


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
    this.searchGoogleBooks('usa')
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
        this.setState({ books: booksArray }, () => console.log('data loaded'))
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
      console.error('Missing Query')
    }
  }
  /**
   * onSaveClick()
   * Event listner used for save fab button
   */
  onSaveClick = (id) => {
    const {
      title,
      authors,
      previewLink,
      description,
      imageLinks: {thumbnail} = 'https://www.naqda.gov.lk/images/img_not_available.png',
    } = this.state.books[id].volumeInfo
    
    API.saveBook({
      title,
      authors,
      previewLink,
      description,
      thumbnail,
    })
    .then(response => response.json())
    .then(results => {
      console.log(results)
      console.log('book saved')
    })
    .catch(err => console.error(err))
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
    let _booksElements = booksArray.map(({ volumeInfo }, index) => {

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
          key={index}
          id={index}
          title={title}
          author={authors}
          previewLink={previewLink}
          thumbnail={thumbnail}
          description={description}
          fabButton={
            <Fab color='primary' onClick={() => this.onSaveClick(index)}>
              <Save />
            </Fab>
          }
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


/*
{
    title: 'Super Turbo Saves the Day!',
    authors: ['Lee Kirby'],
    previewLink:
      'http://books.google.com/books?id=im9CDAAAQBAJ&printsec=frontcover&dq=turbo&hl=&cd=5&source=gbs_api',
    description:
      'Thoroughly revised and updated Turbo Pascal retains the excellent pedagogy, outstanding clarity, and balanced presentation that marked earlier editions as leaders in computer science education. An emphasis on problem solving and algorithmic design teaches students to implement programs most effectively. A sensible organization introduces concepts where students need them most, and an extensive and varied selection of exercises and case studies support and strengthen concepts learned. In addition, all programming examples follow well-defined methodologies that reinforce proper problem-solving principles.',
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=im9CDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
    }
  }
*/