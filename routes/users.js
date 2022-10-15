var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/a')

 var userschema = mongoose.Schema({
   task: String,
   time:{
     type: Date,
     default:Date.now
   }

 })
module.exports = mongoose.model('user',userschema);