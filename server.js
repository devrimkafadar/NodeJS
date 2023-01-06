const express = require('express');
const dotenv = require('dotenv');
const routers = require('./routers/index.js');
const connectDatabase = require('./helpers/database/connectDatabase.js');
const customErrorHandler = require('./middlewares/errors/customErrorHandler.js');

const users = [
    {
        name: "Devrim Kafadar",
        age: 21,
    },
];


//Environmental variabes: 
dotenv.config({
    path: "./config/env/config.env"
});

connectDatabase();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
//ROUTERS MIDDLEWARE:
app.use('/api' , routers);
///////////////////////////////////ROUTERS MIDDLEWARE/////////////////////
//the routers middleware allows us to do all the operations below with different
//modules in other folders and .js files.

app.use(customErrorHandler);


app.get('/api/questions' , (req , res , next) => {
    res.end(`<h1>QUESTIONS HOME PAGE:</h1>`);
});
app.get('/api/auth/register' , (req , res , next) => {
    res.end(`<h1>AUTH OPERATIONS HOME PAGE:</h1>`);
});

app.get('/' , (req , res , next) => {
    try {
        res.json(users);
        res.end();
        console.log('GET operation done');
    } catch (error) {
        console.error(error);
    }
});
app.post('/' , (req , res , next) => {
    try {
        const newUser = req.body;
        const name = req.body.name;
        users.push(newUser);
        res.json(
            {
                operation: 'successful',
                users: users
            }
        );
        res.end();
        console.log('POST operation done.');
        console.log(name);
    } catch (error) {
        console.error(error);
    }
    
});


app.listen(PORT , () => {
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
});
