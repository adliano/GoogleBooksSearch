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
      previewLink: "http://books.google.com/books?id=hhiVyuHS76UC&printsec=frontcover&dq=turbo&hl=&cd=1&source=gbs_api",
      description: "Automotive technology.",
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=hhiVyuHS76UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    }
  },{
    id: "7opUuAEACAAJ",
    volumeInfo: {
      title: "T Is for Turbo",
      authors: ["Michael Myers"],
      previewLink: "http://books.google.com/books?id=7opUuAEACAAJ&dq=turbo&hl=&cd=2&source=gbs_api",
    }
  },{
    id: "646PVGF2Bd8C",
    volumeInfo: {
      title: "Alpine & Renault",
      authors: ["Roy Smith"],
      description: "The comprehensive guide for the operation and maintenance of large turbo-generators Operation and Maintenance of Large Turbo-Generators is the ultimate resource for operators and inspectors of large utility and industrial generating facilities who deal with multiple units of disparate size, origin, and vintage. It offers the complete scope of information regarding operation and maintenance of all types of turbine-driven generators built in the world. Based on the authors’ combined sixty years of generating station and design work experience, the information presented in the book is designed to inform the reader about actual machine operational problems and failure modes that occur in generating stations and other types of facilities. Readers will find very detailed coverage of: Design and construction of generators and auxiliary systems Generator operation, including interaction with the grid Monitoring, diagnostics, and protection of turbo-generators Inspection practices, including stator, rotor, and auxiliary systems Ideas for improving plant reliability and reducing costs and electrical failures Maintenance testing, including electrical and nondestructive examination Operation and Maintenance of Large Turbo-Generators comes filled with photos and graphs, commonly used inspection forms, and extensive references for each topic. It is an indispensable resource for anyone involved in the design, construction, protection, operation, maintenance, and troubleshooting of large generators in generating stations and industrial power facilities. The book is also an excellent learning tool for students, consultants, and design engineers.",
      previewLink: "http://books.google.com/books?id=646PVGF2Bd8C&printsec=frontcover&dq=turbo&hl=&cd=3&source=gbs_api",
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=646PVGF2Bd8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      }
    }
  },{
    id: "ufhfa3jbow4C",
    volumeInfo: {
      title: "Turbo",
      authors: [ "Graham Robson" ],
      previewLink: "http://books.google.com/books?id=ufhfa3jbow4C&q=turbo&dq=turbo&hl=&cd=4&source=gbs_api",
      description: "Explains how to maintain, remove, tear down, assemble, repair, modify, and install Turbo Hydra-matic transmissions",
      imageLinks: {
        thumbnail: "http://books.google.com/books/content?id=ufhfa3jbow4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      }
    }
  },{
    id: "im9CDAAAQBAJ",
    volumeInfo: {
      title: "Super Turbo Saves the Day!",
      authors: [ "Lee Kirby" ],
      previewLink: "http://books.google.com/books?id=im9CDAAAQBAJ&printsec=frontcover&dq=turbo&hl=&cd=5&source=gbs_api",
      description: "Thoroughly revised and updated Turbo Pascal retains the excellent pedagogy, outstanding clarity, and balanced presentation that marked earlier editions as leaders in computer science education. An emphasis on problem solving and algorithmic design teaches students to implement programs most effectively. A sensible organization introduces concepts where students need them most, and an extensive and varied selection of exercises and case studies support and strengthen concepts learned. In addition, all programming examples follow well-defined methodologies that reinforce proper problem-solving principles.",
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
