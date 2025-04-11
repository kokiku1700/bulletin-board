const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
    },
    date: {
        type: String,
    }
});

const Board = mongoose.model("Board", boardSchema);

module.exports = { Board };