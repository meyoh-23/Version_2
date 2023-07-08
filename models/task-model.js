const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Write your task down, you cannot have a blank task'],
            trim: true,
            minlength: [5, 'Your task name should be at least five characters long'],
            maxlength: [90, 'Your task name is too long, please summarise it to atmost 90 characters long']
        },
        completed: {
            type: Boolean,
            default: false
        }
    }
);

module.exports = mongoose.model('TaskPrototype', TaskSchema);