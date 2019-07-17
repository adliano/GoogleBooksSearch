import React, { Component } from 'react'
import BookShelve from '../BookShelve'
import Book from '../Book'
import API from '../../utils/API'

class SavedPage extends Component {
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
    this.downloadBooks()
  }

  /**
   * dowloadBooks()
   */
  downloadBooks = () => {
    API.getBooks()
    .then(response => response.json())
    .then(results=> {
      this.setState({
        books: results,
      })
    })
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
        <BookShelve header='Saved Books'>
          {this.renderBooks(this.state.books)}
        </BookShelve>
      </>
    )
  }
}

export default SavedPage
