var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var postSchema = new Schema({ body: String });

module.exports = mongoose.model('Post', postSchema);