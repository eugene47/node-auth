var mongoose = require('mongoose')
const db_name = 'node-app';
const host = 'localhost';
const port = '27017';

mongoose.connect("mongodb://"+host+":"+port+"/"+db_name)