const express = require('express');
// '/api'
const router = express.Router();
const questionRouter = require('./question.js');
const authRouter = require('./auth.js');
const question = questionRouter.router;
const auth = authRouter.router;

router.use('/questions' , question);
router.use('/auth' , auth);



module.exports = router;