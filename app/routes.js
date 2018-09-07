var express = require('express');
var router = express.Router();

var post_controller = require('./controllers/postController');

//get posts
router.get('/', post_controller.get_posts);

//create post
router.post('/create', post_controller.create_post);

module.exports = router;