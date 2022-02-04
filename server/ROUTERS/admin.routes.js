const express = require('express');
const router = express.Router()
const UserCTRL = require('../CONTROLLERS/user.controller')
const PostCTRL = require('../CONTROLLERS/post.controller')


router.get('/user/', UserCTRL.allUser);
router.get('/user/:id', UserCTRL.profileView);
router.patch('/user/:id', UserCTRL.blockUser);
router.get('/post/', PostCTRL.allPost);
router.get('/post/:id', PostCTRL.singlePost);
router.put('/post/:id', PostCTRL.blockPost);

module.exports = router