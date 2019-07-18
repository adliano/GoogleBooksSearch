import React, { Component } from 'react'
import { Fab } from '@material-ui/core/'
import { DeleteForever as DeleteIcon } from '@material-ui/icons/'
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
   * dowloadBooks()
   */
  downloadBooks = () => {
    API.getBooks()
      .then(response => response.json())
      .then(results => {
        this.setState({
          books: results
        })
      })
  }
  /**
   * Lifecycle
   * componentDidMount()
   */
  componentDidMount () {
    this.downloadBooks()
  }
  /**
   * onDeleteClick()
   * Event Handler for delete button
   */
  onDeleteClick = id => {
    if (id) {
      API.deleteBook(id)
        .then(response => response.json())
        .then(results => {
          console.log(results)
          this.downloadBooks()
        })
        .catch(err => console.log(err))
    } else {
      console.error('unable to delete book')
    }
  }
  /**
   * renderBooks()
   * @method used to render <Book> on page
   */
  renderBooks = booksArray => {
    // Some books doesn't have `imageLinks` available
    // Therefor default img was set to void application to crash
    let _booksElements = booksArray.map(volumeInfo => {
      // Destructing object
      const {
        _id,
        title,
        authors,
        previewLink,
        description,
        thumbnail
      } = volumeInfo

      // each Book available in the JSON will be
      // Added as <Book> element in _booksElements array
      return (
        <Book
          key={_id}
          id={_id}
          title={title}
          authors={authors.join(', ')}
          previewLink={previewLink}
          thumbnail={thumbnail}
          description={description}
          fabButton={
            <Fab color='primary' onClick={() => this.onDeleteClick(_id)} src=''>
              <DeleteIcon />
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
        <BookShelve header='Saved Books'>
          {this.renderBooks(this.state.books)}
        </BookShelve>
      </>
    )
  }
}

export default SavedPage
