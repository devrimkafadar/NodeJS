const mongoose = require('mongoose');

const connectDatabase = async () => {
    console.log('.........CONNECTING........');
    try {
        await mongoose.connect(process.env.MONGO_URI).then(
            console.log('DB CONNECTION IS SUCCESSFUL.')
        );
    } catch (error) {
        console.error(error);
    }
};


module.exports = connectDatabase;