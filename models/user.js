var mongoose = require('mongoose')

// User Schema
var userSchema = mongoose.Schema({
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
   create_date: {
	type: Date,
	default: Date.now
   }
});

var User = module.exports = mongoose.model('User', userSchema)

module.exports.getUserById = function(email, callback){
  User.find({email: email}, callback)
}

