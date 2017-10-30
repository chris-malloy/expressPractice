var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express Practice' });
});
router.post('/search', function(req, res, next) {
    res.render('search', {
        userName: req.body.userName,
        favoriteFood: req.body.favoriteFood,
        favoriteMovie: req.body.favoriteMovie
    })
})


module.exports = router;