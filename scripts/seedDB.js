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
    "authors" : [
            "Don M. Coerver",
            "Suzanne B. Pasztor",
            "Robert Buffington"
    ],
    "thumbnail" : "http://books.google.com/books/content?id=YSred4NyOKoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "title" : "Mexico",
    "previewLink" : "http://books.google.com/books?id=YSred4NyOKoC&printsec=frontcover&dq=mexico&hl=&cd=1&source=gbs_api",
    "description" : "Provides information on the events, people, and issues that have shaped twentieth-century Mexico, covering such topics as history, the economy, art, and culture.",
    "__v" : 0
},
{
    "authors" : [
            "Celso Furtado"
    ],
    "thumbnail" : "http://books.google.com/books/content?id=1o7UDUXwLIIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "title" : "The Economic Growth of Brazil",
    "previewLink" : "http://books.google.com/books?id=1o7UDUXwLIIC&printsec=frontcover&dq=brazil&hl=&cd=1&source=gbs_api",
    "__v" : 0
},
{
    "authors" : [
            "Teresa A. Meade"
    ],
    "thumbnail" : "http://books.google.com/books/content?id=e6Jw-KNq2QUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "title" : "A Brief History of Brazil",
    "previewLink" : "http://books.google.com/books?id=e6Jw-KNq2QUC&printsec=frontcover&dq=brazil&hl=&cd=2&source=gbs_api",
    "description" : "From the Publisher: \"A Brief History of Brazil, Second Edition comes at a crucial time in Brazil's history. In the past seven years since the first edition of this book was published, the country has undergone dramatic changes. Foremost among them is the recent discovery of offshore oil and gas reserves that may allow Brazil not only to achieve self-sufficiency but also to become a major exporter of petroleum and biofuels. The nation is today richer, less in debt, and more active in international trade. It is more urbanized and making better use of its vast agricultural resources. Brazilians, although plagued by poverty, illiteracy, and crime, continue to contribute to international culture through music, dance, art, and, increasingly, film.\" A BriefHistory of Brazil, Second Edition covers all major events, people, and developments in Brazil from the precolonial and colonial periods through today. It also explores the hallmarks of Brazilian popular culture: soccer, Carnival, music, and television dramas. Basic facts, a chronology, a bibliography, and a list of suggested reading make up the appendixes.",
    "__v" : 0
},
{
    "authors" : [
            "Karla Zimmerman"
    ],
    "thumbnail" : "http://books.google.com/books/content?id=2TT-wAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "title" : "The USA Book",
    "previewLink" : "http://books.google.com/books?id=2TT-wAEACAAJ&dq=usa&hl=&cd=1&source=gbs_api",
    "description" : "Presents a pictorial guide to each of the fifty states, describing the culture, landmarks, natural elements, cuisine, economy, urban scene, and legends of each one.",
    "__v" : 0
},
{
    "authors" : [
            "John Gunther"
    ],
    "thumbnail" : "https://www.naqda.gov.lk/images/img_not_available.png",
    "title" : "Inside U.S.A.",
    "previewLink" : "http://books.google.com/books?id=4WTyvQEACAAJ&dq=usa&hl=&cd=2&source=gbs_api",
    "__v" : 0
}
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
