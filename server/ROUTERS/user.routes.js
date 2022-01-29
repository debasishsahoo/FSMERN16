const express = require('express');
const router = express.Router()
const UserCTRL = require('../CONTROLLERS/user.controller')
//User Control
router.post('/signup', UserCTRL.signup);
router.post('/signin', UserCTRL.signin);
router.post('/profile/:id', UserCTRL.profileCreate);
router.put('/profile/:id', UserCTRL.profileEdit);
router.delete('/profile/:id', UserCTRL.profileDelete);


module.exports = router