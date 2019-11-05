var express = require('express');

var router = express.Router();


const tartes = [{name: 'Gâteau au chocolat', picture: 'images/chocolat.jpg'},
				{name: 'Gâteau au chocolat', picture: 'images/chocolat.jpg'}];

const cookies = [];
const chocolat = [];
const glaces = [];
const macarons = [];
const entremets = [];
const cakes = [];
const biscuits = [];
const smoothies = [];

router.get('/getListing', function(req, res) {

	setTimeout(function() {

		if (req.query.listingType == 'cakes') {
			res.render('listing.hbs', {layout : false, data: cakes});
		}
		else if (req.query.listingType == 'cookies') {
			res.render('listing.hbs', {layout : false, data: cookies});
		}
		else {
			res.render('listing.hbs', {layout: false, date: false});
		}
	}, 1000)
});

module.exports = router;