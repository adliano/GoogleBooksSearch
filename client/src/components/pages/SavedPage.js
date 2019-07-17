import React, { Component } from 'react'
import { Fab } from '@material-ui/core/'
import { DeleteForever as DeleteIcon} from '@material-ui/icons/';
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
      }, console.log(results))
      // TODO: delete callback later
    })
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
        console.log(`delete book with ${id}`)
        console.log(results)
        this.downloadBooks()        
      })
      .catch(err => console.log(err))
      
    } else {
      console.log('Missing id')
    }
  }
  /**
   * renderBooks()
   * @method used to render <Book> on page
   */
  renderBooks = booksArray => {
    // Destructing object
    // Some books doesn't have `imageLinks` available
    // Therefor default img was set to void application to crash
    let _booksElements = booksArray.map(({ _id, volumeInfo }) => {

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
          key={_id}
          id={_id}
          title={title}
          author={authors}
          previewLink={previewLink}
          thumbnail={thumbnail}
          description={description}
          fabButton={(
            <Fab color='primary' onClick={() => this.onDeleteClick(_id)}>
              <DeleteIcon />
            </Fab>
          )}
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


/*
{this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

*/