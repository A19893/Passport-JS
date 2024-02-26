const express = require('express');
const { user_controller } = require('../controllers');
const passport = require('../config/auth');

const router = express.Router();

const localAuthMiddleware = passport.authenticate('local', {session: false});
router.post('/signup', user_controller.signup);
router.post('/login', localAuthMiddleware, user_controller.login);


module.exports= router;