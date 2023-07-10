const express = require('express');
const router = express.Router();

const {getAllTasks, getASingleTask, createANewTAsk, updateATask, deleteATask} = require('./../controller/task-contoller');

// routing
router.route('/').get(getAllTasks).post(createANewTAsk);
router.route('/:id').get(getASingleTask).patch(updateATask).delete(deleteATask);

module.exports = router;