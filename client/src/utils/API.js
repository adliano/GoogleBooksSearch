 
export default {
  // Gets all books
  getBooks: function() {
    return fetch("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return fetch("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return fetch("/api/books/" + id, {
      method: 'DELETE'
    });
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return fetch("/api/books", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData)
    })
  }
};

// let _URL = `https://www.googleapis.com/books/v1/volumes?q=` + 'bookname'
