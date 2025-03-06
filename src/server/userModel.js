const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 18,
    },
    nicname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 2,
        maxLength: 16,
    },
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 8,
        maxLength: 18,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        maxLength: 18,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };