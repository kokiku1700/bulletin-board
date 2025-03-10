const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const app = express();
const bodyParser = require("body-parser");
const { User } = require("./userModel");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

dbConnect();

app.get("/api", (req, res) => {
    res.send(req.body)
});

app.post("/api", (req, res) => {
    const user = new User(req.body);
    user.save();
});

app.listen(4000, () => {
    console.log("server connect");
});