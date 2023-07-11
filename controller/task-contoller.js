const TaskPrototype = require('./../models/task-model');
const asyncWrapper = require('./../middleware/async-wrapper');
const {createCustomErrorMessage} = require('./../errors/custom-error-message');


// get all tasks
const getAllTasks = asyncWrapper (async (req, res) =>{
        const myTask = await TaskPrototype.find();

        res.status(200).json({
            "status": "success", 
            myTask
        })
})

// create a new task
const createANewTAsk = asyncWrapper(async (req, res) => {
        const myTask = await TaskPrototype.create(req.body);
        res.status(201).json({myTask});
})
// get a single task by id
const getASingleTask = asyncWrapper(async (req, res, next)=> {
        const {id:taskID} = req.params;
        const myTask = await TaskPrototype.findOne({_id:taskID});
        if (!myTask) {
            return next(createCustomErrorMessage(`No task with id ${taskID}`, 404));
            /* const error = new Error('Not Found!')
            error.status = 404
            return res.status(404).json({msg: `No task with id ${taskID}`}); */
        }
        res.status(200).json({
            status: 'success',
            myTask
        })
})
// update a single task
const updateATask = asyncWrapper(async (req, res, next)=>{
        const {id:taskID} = req.params;
        const myTask = await TaskPrototype.findByIdAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: true,
            useCreateIndex: true
        } )

        if (!myTask){
            return next(createCustomErrorMessage(`No task with id ${taskID}`, 404));
        }

        res.status(200).json({
            status: "Success",
            message:  "Task Updated Successfully",
            myTask
        })
})
// delete a single task
const deleteATask = asyncWrapper(async (req, res) => {
        const {id:taskID} = req.params;
        const myTask = await TaskPrototype.findByIdAndDelete({_id:taskID}, {useFindAndModify: true,
            useCreateIndex: true});

        if (!myTask) {
            return next(createCustomErrorMessage(`No task with id ${taskID}`, 404));
        }

        res.status(200).json({
            status: "succeess",
            task: null
        })
})

module.exports = {getAllTasks, getASingleTask, createANewTAsk, updateATask, deleteATask}