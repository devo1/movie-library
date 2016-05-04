// Import dependencies
var express = require('express');
var router = express.Router();
var monk = require('monk');

//Connect to mongodb
var db = monk('mongodb://admin:admin123@ds059365.mlab.com:59365/guru99', function(err){
    if(err){
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

// Display a list of movies
router.get('/', function(req, res) {
    var collection = db.get('movies');
    collection.find({}, function(err, movies) {
        if (err) throw err;
        res.json(movies);
    });
});


// Export the router
module.exports = router;