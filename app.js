 //requiring modules
require('dotenv').config();
const express = require('express');

// requiring user created functions
const connectDB = require('./DB coonect/connect-to-db');

 // define PORT implicitly in the same file sever is being created
const app = express();
const PORT = 3000;

// middleware stack
app.use(express.json())

// get all tasks
app.get('/', (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            messgage: "a route for geting all tasks for the Task manager App"
        })
    } catch (error) {
        console.log(`An error at the get all tours route, please check it, ${error}`)
    }
});

// getting a single tour by id
app.get('/:id', (req, res)=> {
    try {
        res.status(200).json({
            status: 'success',
            message: 'Now We are really going  for a single task in this route'
        })
    } catch (error) {
        console.log(`A problem at the get a single tasks Fucnctoin. Check it out, ${error}`);
    }
})

// posting a tour sasa
app.post('/', (req, res) => {
    try {
        console.log(req.body);
        res.status(201).json({
            status: 'Successfull',
            message: " posted Successsfully, angalia kwa console" 
        })
    } catch (error) {
        console.log(`Ni kama huweziongeza task, there's some error, ${error}`)
    }
})

// patch operation
app.patch('/:id', (req, res)=>{
    
})

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