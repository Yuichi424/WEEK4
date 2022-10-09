
/*file name    : book.js
   Student name: Yuichi Boki
   Student ID  : 301216594
   Date        : 2022-10-09*/
   
let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);