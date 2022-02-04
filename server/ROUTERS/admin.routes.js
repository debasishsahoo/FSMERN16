const express = require('express');
const router = express.Router()
const UserCTRL = require('../CONTROLLERS/user.controller')
const PostCTRL = require('../CONTROLLERS/post.controller')
const Auth = require('../MIDDLEWARE/auth.services')

router.get('/user/', Auth, UserCTRL.allUser);
router.get('/user/:id', Auth, UserCTRL.profileView);
router.patch('/user/:id', Auth, UserCTRL.blockUser);
router.get('/post/', Auth, PostCTRL.allPost);
router.get('/post/:id', Auth, PostCTRL.singlePost);
router.put('/post/:id', Auth, PostCTRL.blockPost);

module.exports = router