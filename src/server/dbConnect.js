const mongoose = require("mongoose");
require("dotenv").config({path: "../../.env"});

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB connected");
    } catch (err) {
        console.log(err);
    }
};

module.exports = dbConnect;