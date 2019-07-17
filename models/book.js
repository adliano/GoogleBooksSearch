const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
      title: { type: String, required: true },
      authors: { type: Array, required: true },
      previewLink: { type: String, required: true },
      description: String,
      thumbnail: String,
  }
);


const MyBook = mongoose.model("MyBook", bookSchema);

module.exports = MyBook;

