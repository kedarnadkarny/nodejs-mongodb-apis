var mongoose = require('mongoose')

// Book Schema
var bookSchema = mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  author: {
      type: String,
      required: true
  },
  price: {
      type: String,
      required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  url: {
	type: String
  }
});

var Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit)
}

module.exports.getBookById = function(id, callback){
  Book.findById(id, callback)
}

module.exports.updateBook = function(id, book, options, callback){
	var query = {_id: id}
	var update = {
		title: book.title,
		author: book.author,
		price: book.price,
		create_date: book.create_date
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

