var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.json())
Book = require('./models/book')
User = require('./models/user')

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore')
var db = mongoose.connection
var email = ''

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin','*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods','GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

app.get('/', function(req, res) {
  res.send('Hello');
});

app.get('/api/books', function(req, res) {
  Book.getBooks(function(err, books){
    if(err) {
      throw err;
    }
    res.json(books)
  });
});

app.get('/api/books/:_id', function(req, res) {
  Book.getBookById(req.params._id, function(err, book){
    if(err) {
      throw err;
    }
    res.json(book)
  });
});

app.put('/api/books/:_id', function(req, res){
	var id = req.params._id
	var book = req.body
	Book.updateBook(id, book, {}, function(err, book){
		if(err) {
			throw err
		}
		res.json(book)
	})
})

app.get('/api/users/:email', function(req, res) {
  User.getUserById(req.params.email, function(err, user){
    if(err) {
      throw err;
    }
    var result = res.json(user)
    console.log(result)
    res.json(user)
  });
})

function check(email) {

}


app.listen(3002)
console.log('Running on port 3000')

