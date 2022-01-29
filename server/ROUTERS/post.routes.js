const express = require('express');
const router = express.Router()
const PostCTRL = require('../CONTROLLERS/post.controller')

//User Control
router.get('/post', PostCTRL.allPost);
router.post('/post', PostCTRL.createPost);
router.get('/post/:id', PostCTRL.singlePost);
router.get('/post/user/:id', PostCTRL.singleUserPost);
router.put('/post/:id', PostCTRL.postEdit);
router.delete('/post/:id', PostCTRL.postDelete);



module.exports = router