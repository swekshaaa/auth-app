const mongoose = require('mongoose');
require('dotenv').config();


const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() =>{
        console.log('Mongo Connected...');
    }).catch((err)=>{
        console.log('MongoDB Connection Error: ', err);
    });
