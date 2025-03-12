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

app.post("/api", (req, res) => {
    const user = new User(req.body);
    user.save();
    res.send({message: "success!!!!!!!!!"});
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