const express = require('express');
// to funnel when /api/auth entered: 
const router = express.Router();
const {register} = require('../controllers/auth.js');

function getDone() {console.log('GET operation is done.(auth)');}

//router.get('/' , register);

router.post('/register' , register);
//router.get('/error' , errorTest);

module.exports.router = router;