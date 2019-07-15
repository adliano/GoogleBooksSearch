const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    id: "AOuKDQAAQBAJ",
    title: "Crash",
    authors: ["Jerry Spinelli"],
    description:
    "Seventh-grader John \"Crash\" Coogan has always been comfortable with his tough, aggressive behavior, until his relationship with an unusual Quaker boy and his grandfather's stroke make him consider the meaning of friendship and the importance of family.",      image: '',
    previewLink:"https://books.google.com/books?id=AOuKDQAAQBAJ&printsec=frontcover&dq=crash&hl=en&cd=1&source=gbs_api#v=onepage&q=crash&f=false",
      thumbnail: "http://books.google.com/books/content?id=AOuKDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    id: "0i8ys_j6cEsC"
    title: "Crash",
    author: ["Nicole Williams"],
    description:
    "Southpointe High is the last place Lucy wanted to wind up her senior year of school. Right up until she stumbles into Jude Ryder, a guy whose name has become its own verb, and synonymous with trouble. He's got a rap sheet that runs longer than a senior thesis, has had his name sighed, shouted, and cursed by more women than Lucy dares to ask, and lives at the local boys home where disturbed seems to be the status quo for the residents. Lucy had a stable at best, quirky at worst, upbringing. She lives for wearing the satin down on her ballet shoes, has her sights set on Juilliard, and has been careful to keep trouble out of her life. Up until now… Jude's everything she knows she needs to stay away from if she wants to separate her past from her future. But she's about to find out that staying away is the only thing she's incapable of.",    date: new Date(Date.now())
    previewLink: "https://books.google.com/books?id=0i8ys_j6cEsC&printsec=frontcover&dq=crash&hl=&cd=2&source=gbs_api#v=onepage&q=crash&f=false",
    thumbnail: "https://books.google.com/books/content?id=0i8ys_j6cEsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    id: "3CqfUQvB6gYC"
    title: "The Crash",
    author: ["Paul Kropp"],
    description:
    "A school bus is bringing a basketball team home after a game. Skidding on ice, the bus slides down a steep hill into deep snow. The bus driver is out cold. One of the guys is badly hurt. Can Craig, Rory and Lerch find help in time?",
    previewLink: "https://books.google.com/books?id=0i8ys_j6cEsC&printsec=frontcover&dq=crash&hl=&cd=2&source=gbs_api#v=onepage&q=crash&f=false",
    thumbnail: "https://books.google.com/books?id=3CqfUQvB6gYC&printsec=frontcover&dq=crash&hl=&cd=3&source=gbs_api#v=onepage&q=crash&f=false",
  },
  {
    id: "gQMhAQAAQBAJ"
    title: "Crash",
    author: [ "Lesley Choyce"],
    description:
    "After his parents separate, Cameron finds himself living on the street with his dog while trying to keep up in school and survive.",
    previewLink: "https://books.google.com/books?id=gQMhAQAAQBAJ&printsec=frontcover&dq=crash&hl=&cd=4&source=gbs_api#v=onepage&q=crash&f=false",
    thumbnail: "https://books.google.com/books/content?id=gQMhAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    id: "N9Sk0uyOf-8C"
    title: "Crash",
    author: ["Ann Harth"],
    description:
    "Highlights! is an innovative series of original works of fiction aimed at students aged between 10 to 15 years who find reading challenging. In the book Crash!, it deals with courage and self-reliance. Nalini and Zed are flying to visit their relatives for a holiday. Their plane encounters a huge storm and crashes near a deserted island. The pilot is killed and the teenagers are along. They manage to find shelter, food and even water. It seems almost too easy for two young people stranded all alone. Or are they alone?",
    previewLink: "https://books.google.com/books?id=N9Sk0uyOf-8C&printsec=frontcover&dq=crash&hl=&cd=6&source=gbs_api#v=onepage&q=crash&f=false",
    thumbnail: "https://books.google.com/books/content?id=N9Sk0uyOf-8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
