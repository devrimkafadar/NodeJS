const getAllQuestions = (req , res , next) => {
    try{
        res.status(200).end('<h1>QUESTIONS MAIN PAGE</h1>');
    }
    catch(error) {
        console.error(error);
    }
};

module.exports = {
    getAllQuestions
};