const express = require('express');
const router = express.Router()
const UserCTRL = require('../CONTROLLERS/user.controller')
const PostCTRL = require('../CONTROLLERS/post.controller')


router.get('/profile/', UserCTRL.profileView);
router.get('/profile/:id', UserCTRL.profileView);
router.put('/profile/:id', UserCTRL.blockUser);
router.get('/post/', PostCTRL.allPost);
router.get('/post/:id', PostCTRL.singlePost);
router.put('/post/:id', PostCTRL.blockPost);

module.exports = router