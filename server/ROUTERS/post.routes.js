const express = require('express');
const router = express.Router()
const PostCTRL = require('../CONTROLLERS/post.controller')
const Auth = require('../MIDDLEWARE/auth.services')
//User Control
router.get('/', PostCTRL.allPost);
router.post('/', Auth, PostCTRL.createPost);
router.get('/:id', PostCTRL.singlePost);
router.get('/user/:id', PostCTRL.singleUserPost);
router.put('/:id', Auth, PostCTRL.postEdit);
router.delete('/:id', Auth , PostCTRL.postDelete);



module.exports = router