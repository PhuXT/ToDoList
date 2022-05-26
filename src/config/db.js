require('dotenv').config;
const mongoose = require('mongoose')

const conectDB = async () =>{
        try {
            await mongoose.connect(process.env.MONGO_URL)
            console.log('DB connected');
        } catch (error) {
            console.log(error);
        }
    }

module.exports = conectDB;
