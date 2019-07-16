const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    id: { type: String, required: true },
    volumeInfo: {
      title: { type: String, required: true },
      authors: { type: Array, required: true },
      imageLinks: {
        thumbnail: { type: String, required: false },
      }
    },
  }
);


const MyBook = mongoose.model("MyBook", bookSchema);

module.exports = MyBook;

