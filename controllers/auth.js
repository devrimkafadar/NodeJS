const User = require('../models/User.js');
//const CustomError = require('../helpers/error/CustomError.js');

const register = async (req , res , next) => {
    /////////////POST DATA/////////////////

    //////////GETTING THE NEEDED DATAS FROM THE SENT REQUEST//////////////
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const password = body.password;
    //////////GETTING THE NEEDED DATAS FROM THE SENT REQUEST//////////////


    //CREATING A USER WITH THE GIVEN VALUES
    //user HOLDS THE USER CREATED IN OUT DATABASE
    try {
        const user = await User.create({
            name : name,
            email : email,
            password : password
        });
    
    
        res.status(200).json(
            {
                success : true , 
                data : user ,
            }
        );
    } catch (error) {
        return next(error);
    }
    res.end();
};

/*const errorTest = (req , res , next) => {
    //Express automatically cathces the synchron errors:
    return next(new CustomError('CUSTOM ERROR OCCURED.' , 400));
};*/

module.exports = {
    register,
    //errorTest
};