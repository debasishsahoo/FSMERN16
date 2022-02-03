const express = require('express');
const router = express.Router()
const UserCTRL = require('../CONTROLLERS/user.controller')
//User Control
router.post('/signup', UserCTRL.signup);
router.post('/signin', UserCTRL.signin);
router.get('/:id', UserCTRL.profileView);
router.put('/:id', UserCTRL.profileEdit);
router.delete('/:id', UserCTRL.profileDelete);


module.exports = router