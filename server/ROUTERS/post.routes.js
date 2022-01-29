const express = require('express');
const router = express.Router()
const PostCTRL = require('../CONTROLLERS/post.controller')

//User Control
router.get('/', PostCTRL.allPost);
router.post('/', PostCTRL.createPost);
router.get('/:id', PostCTRL.singlePost);
router.get('/user/:id', PostCTRL.singleUserPost);
router.put('/:id', PostCTRL.postEdit);
router.delete('/:id', PostCTRL.postDelete);



module.exports = router