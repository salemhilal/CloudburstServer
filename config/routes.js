module.exports = function (app) {
	// Hello, world!
	app.get('/', function (req, res) {
		res.send("Hello, world!");
	});	
}

