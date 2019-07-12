const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

//subjects Routes
router.post('/user/signin', UserController.signInUser);
router.post('/user/signup', UserController.signUpUser);

module.exports = router;
