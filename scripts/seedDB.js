const mongoose = require('mongoose')
const db = require('../models')
const chalk = require('chalk')

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
  { useNewUrlParser: true }
)

let mongoConnection = mongoose.connection

mongoConnection.on('error', () =>
  console.error(chalk.red('OPS! Can not connect to database'))
)
mongoConnection.once('open', () =>
  console.log(chalk.green('Connected to mogodb'))
)

const bookSeed = [
  {
    id: "hhiVyuHS76UC",
    volumeInfo: {
      title: "Turbo",
      authors: ["Jay K. Miller"],
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=hhiVyuHS76UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    }
  },{
    id: "7opUuAEACAAJ",
    volumeInfo: {
      title: "T Is for Turbo",
      authors: ["Michael Myers"],
    }
  },{
    id: "646PVGF2Bd8C",
    volumeInfo: {
      title: "Alpine & Renault",
      authors: ["Roy Smith"],
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=646PVGF2Bd8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      }
    }
  },{
    id: "ufhfa3jbow4C",
    volumeInfo: {
      title: "Turbo",
      authors: [ "Graham Robson" ],
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=ufhfa3jbow4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      }
    }
  },{
    id: "im9CDAAAQBAJ",
    volumeInfo: {
      title: "Super Turbo Saves the Day!",
      authors: [ "Lee Kirby" ],
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=im9CDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      }
    }
  },
]

db.MyBook.deleteMany({})
  .then(() => db.MyBook.collection.insertMany(bookSeed))
  .then(data => {
    console.log(chalk.blue(data.result.n + ' records inserted!'))
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
