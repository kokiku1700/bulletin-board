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
    res.send(req.body);
});

app.post("/joinMem", (req, res) => {
    const user = new User(req.body);
    user.save();
    console.log("success");
});

app.post("/name", (req, res) => {
    User.findOne({ name: req.body.name })
    .then(user => {
        if ( user ) {
            return res.status(200).json({
                name: user.name
            })
        } else {
            return res.status(200).json({
                name: ""
            })
        }
    });
});

app.post("/nickName", (req, res) => {
    User.findOne({ nickName: req.body.nickName })
    .then(user => {
        if ( user ) {
            return res.status(200).json({
                nickName: user.nickName
            })
        } else {
            return res.status(200).json({
                nickName: ""
            })
        }
    });
});

app.post("/id", (req, res) => {
    User.findOne({ id: req.body.id })
    .then(user => {
        if ( user ) {
            return res.status(200).json({
                id: user.id
            })
        } else {
            return res.status(200).json({
                id: ""
            })
        }
    });
});

app.post("/email", (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if ( user ) {
            return res.status(200).json({
                email: user.email
            })
        } else {
            return res.status(200).json({
                email: ""
            })
        }
    });
});

app.post("/login", (req, res) => {
    User.findOne({ id: req.body.id, password: req.body.pw })
    .then(user => {
        if ( user ) {
            return res.status(200).json({
                message: "success",
                id: user.id,
                nickName: user.nickName
            });
        } else {
            return res.status(200).json({message: "fail"});
        }
    }).catch(err => {
        return res.status(500).json({ message: "에러!"});
    })
        
});


app.listen(4000, () => {
    console.log("server connect");
});