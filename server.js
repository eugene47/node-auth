// Setup
var express = require('express');
var app = express();
var port       = process.env.PORT || 8080;
var bodyParser = require('body-parser')

var mongodb = require('./config/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.set('views', 'app/views');
app.set('view engine', 'ejs');

var posts = require('./app/routes/routes');

app.use('/post', posts);

// Listen
app.listen(port, () => {
    console.log('Server listing on '+port);
})