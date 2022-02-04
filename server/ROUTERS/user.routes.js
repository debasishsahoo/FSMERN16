const express = require('express');
const router = express.Router()
const UserCTRL = require('../CONTROLLERS/user.controller')
const Auth = require('../MIDDLEWARE/auth.services')
//User Control
router.post('/signup', UserCTRL.signup);
router.post('/signin', UserCTRL.signin);
router.get('/:id', Auth, UserCTRL.profileView);
router.patch('/:id', Auth, UserCTRL.profileEdit);
router.delete('/:id', Auth, UserCTRL.profileDelete);


module.exports = router