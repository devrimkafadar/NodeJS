const express = require('express');
// to funnel when /api/questions entered:
const router = express.Router();
const {getAllQuestions} = require('../controllers/question.js');

function getDone() {
    console.log('GET operation is done. (QUESTION)');
};

router.get('/' , getAllQuestions);
router.get('/delete' , (req , res, next) => {
    try {
        res.end(`<h1>QUESTIONS DELETE PAGE</h1>`);
        getDone();
    } catch (error) {
        console.error(error);
    }
});

module.exports.router = router;