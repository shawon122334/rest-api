const { signUp } = require('../controller/authController.js');

const router = require('express').Router();

router.post('/signUp',signUp);

module.exports=router;