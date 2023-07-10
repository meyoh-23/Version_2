const TaskPrototype = require('./../models/task-model');

// get all tasks
const getAllTasks = async (req, res) =>{
    try {
        const myTask = await TaskPrototype.find();
        res.status(200).json({
            "status": "success",
            myTask
        })
    } catch (error) {
        console.log(error)
    }
    
}

// create a new task
const createANewTAsk = async (req, res) => {
    try {
        const myTask = await TaskPrototype.create(req.body);
        res.status(201).json({myTask});
    } catch (error) {
        console.log(`Ni kama huweziongeza task, there's some error, ${error}`)
    }
}
// get a single task by id
const getASingleTask = async (req, res)=> {
    try {
        const {id:taskID} = req.params;
        const myTask = await TaskPrototype.findOne({_id:taskID});
        if (!myTask) {
            console.log("No task with Such an Id,please check your Id again and try");
        }
        res.status(200).json({
            status: 'success',
            myTask
        })
    } catch (error) {
        console.log(`A problem at the get a single tasks Fucnctoin. Check it out, ${error}`);
    }
}
// update a single task
const updateATask = async (req, res)=>{
    try { 
        const {id:taskID} = req.params;
        const myTask = await TaskPrototype.findByIdAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: true,
        useCreateIndex: true
        } )

        if (!myTask){
            res.send(`Cannot find a task with id ${taskID}, check your id and try again`);
            return;
        }

        res.status(200).json({
            status: "Success",
            message:  "Task Updated Successfully",
            myTask
        })
    } catch (error) {
        console.log(`Patch Route has failed bro, ${error.message}`);
    }
}
// delete a single task
const deleteATask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const myTask = await TaskPrototype.findByIdAndDelete({_id:taskID}, {useFindAndModify: true,
            useCreateIndex: true});

        if (!myTask) {
            console.log(`there is no task with id ${taskID}, please confirm the Id you want to delete and tru again`);
        }

        res.status(200).json({
            status: "succeess",
            task: null
        })
    } catch (error) {
        console.log(`The delete route function has got an error, ${error.message}`);
    }
}

module.exports = {getAllTasks, getASingleTask, createANewTAsk, updateATask, deleteATask}