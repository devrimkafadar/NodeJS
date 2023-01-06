const CustomError = require('../../helpers/error/CustomError.js');


const customErrorHandler = (err, req , res , next) => {
    let customError = err;
    if (err.name === 'SyntaxError') {
        customError = new CustomError(
            'Unexpected Syntax',
            400
        );
    }
    if (err.name === 'ValidationError') {
        //it consists of errors on db side:
        customError = new CustomError(
            err.message,
            400
        );
    }
    console.log(customError.message , customError.status);
    //400 means 'bad request' (user's fault)
    res.status(customError.status || 500).json({
        success : false,
        message : customError.message || 'Internal Server Error'

    });
};

module.exports = customErrorHandler;