const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const app = express();

app.use(cors());

dbConnect();

app.get('/api', (req, res) => {
    res.send({message: "hello"});
});


app.listen(4000, () => {
    console.log("server connect");
});