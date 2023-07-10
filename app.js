 //requiring modules
require('dotenv').config();
const express = require('express');

// requiring user created functions
const connectDB = require('./DB coonect/connect-to-db');
const routedTasks = require('./route/task-router');

const app = express();

// middleware stack
app.use(express.json())

// routing all tasks 
app.use('/api/v1/tasks', routedTasks);

// create server
const PORT = 3000;
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