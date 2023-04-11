var express = require('express');
var router = express.Router();
var executeSearch = require("../public/js/searchModule.js").executeSearch;

router.get('/', executeSearch, function(req, res, next) {
    res.render('restaurants', {
        results: req.searchResult.length,
        searchTerm: req.searchTerm,
        searchResult: req.searchResult,
        category: req.category,
        images: req.images,
        latitude: req.latitude,
        longitude: req.longitude,
        restaurant_name: req.restaurant_name
    });
    // console.log(name);

});

module.exports = router;