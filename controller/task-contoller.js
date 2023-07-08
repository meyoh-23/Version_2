const TaskPrototype = require('./../models/task-model');

// get all tasks
const getAllTasks = async (req, res) =>{
    try {
        const tasks = await TaskPrototype.find();
        res.status(200).json({
            "status": "success",
            "message": "A route to get all tours bana"
        })
    } catch (error) {
        console.log(error)
    }
    
}
// create a new task
// get a single task
// update a single task
// delete a single task

module.exports = {getAllTasks}