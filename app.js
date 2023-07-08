 //requiring modules
require('dotenv').config();
const express = require('express');

// requiring user created functions
const connectDB = require('./DB coonect/connect-to-db');

 // define PORT implicitly in the same file sever is being created
const app = express();
const PORT = 3000;

// create server
const server = async () => {
    try {
        await connectDB
        app.listen(PORT, () => {
            console.log(`Server is Listening on port ${PORT}...`)
        });
    } catch (error){
        console.log(error)
    }
}

server();