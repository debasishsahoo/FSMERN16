const express = require('express');
const router = express.Router()
const UserCTRL = require('../CONTROLLERS/user.controller')
//User Control
router.post('/signup', UserCTRL.signup);
router.post('/signin', UserCTRL.signin);
router.get('/profile/:id', UserCTRL.profileView);
router.put('/profile/:id', UserCTRL.profileEdit);
router.delete('/profile/:id', UserCTRL.profileDelete);


module.exports = router