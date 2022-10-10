
/*file name    : book.js
   Student name: Yuichi Boki
   Student ID  : 301216594
   Date        : 2022-10-09*/
   
   let mongoose = require('mongoose');

   // create a model class
   let usersModel = mongoose.Schema({
       username: String,
       password: String,
       email : String
       
   },
   {
       collection: "users"
   });
   
   module.exports = mongoose.model('users', usersModel);