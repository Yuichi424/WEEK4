let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our users Model
let Users = require('../models/users');

/* GET Route for the Book List page - READ OPeration */
router.get('/', (req, res, next) => {
  Users.find((err, userList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(userList);

            // res.render('book', {title: 'user List', userList: bookList})            
        }
    });
});

module.exports = router;