var express = require('express'); // import express module
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.get('/index/details', (req, res) => {
   res.sendFile('index.html', {
     root: 'views/pages'
   });
});

app.get('*', (req, res) => {
   res.sendFile('index.html', {
     root: 'views/pages'
   });
});

// app.use(function(req, res) {
//     res.sendfile('index.html', {
//      root: 'views/pages'
//    });
// });

// app.route('/*').get(function(req, res) { 
//     return res.sendFile(path.join(config.root, 'index.html')); 
// });

app.listen(app.get('port')  , function() {
  console.log('Node app is running on port', app.get('port'));
});
