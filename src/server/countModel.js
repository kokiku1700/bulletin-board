const mongoose = require("mongoose");

const countSchema = mongoose.Schema({
    name: {
        type: String,
    },
    count: {
        type: Number,
    }
});

const Count = mongoose.model("Count", countSchema);

module.exports = {Count};