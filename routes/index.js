var express = require('express');
var router = express.Router();

var request = require("request");

function getmap(callback) {

var options = {
  method: 'GET',
  url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
  headers: {
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': 'fdc23100b4msh680bf233168b249p111996jsn9cf1a0740f23'
  }
};

request(options, function (error, response, body) {
	if (error) return callback("Try later");

	//console.log(body);

	return callback(body);
});
}
/* GET home page. */
router.get('/', function(req, res, next) {

	//console.log(req.headers.host);
	
		 res.render('index', { title: "COVID-19"});
	
 
});


router.get('/zakipuzo', function(req, res, next) {
getmap(function(body){
res.send(body);
});
});



module.exports = router;
