var express = require('express'); // import express module
var app = express();

// open on port 5000 if running locally
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

// on load send index.html from server to client
app.get('*', (req, res) => {
	res.sendFile('index.html', {
		root: 'views/pages'
	});
});

// open on port specified in app.set above
app.listen(app.get('port')  , function() {
	console.log('Node app is running on port', app.get('port'));
});
