var Post = require('../models/post');

exports.get_posts = function(req, res){
    Post.find({}, (err, posts) => {
        res.render('index', { posts: posts})
    });
}

exports.create_post = function(req, res){
    var postData = new Post(req.body);
    postData.save().then( result => {
        res.redirect('/post');
    }).catch(err => {
        res.status(400).send("Unable to save data");
    });
}
