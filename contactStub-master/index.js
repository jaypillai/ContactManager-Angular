var cool = require('cool-ascii-faces'),
    express = require("express"),
    fs = require('fs'),
    port = process.env.PORT || 2595;

var bookings = [];
var app = express();
//app.use(express.logger());
app.use(express.json());
app.use(express.urlencoded());
app.set("view options", {
    layout: false
});
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('public/index.html');
});

app.get('/contacts', function (req, res) {
    var contacts = require('./data/contacts.json');
    res.json(contacts);
});


app.get('/cool', function(request, response) {
  response.send(cool());
});



app.listen(port);
console.log('Express server running at http://localhost:' + port);
