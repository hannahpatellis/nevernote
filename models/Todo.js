const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    },
    note: {
        type: String
    },
    deadline: {
        type: String
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;