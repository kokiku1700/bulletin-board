const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const app = express();
const bodyParser = require("body-parser");
const { User } = require("./userModel");
const { Board } = require("./boardModel");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

dbConnect();

app.get("/api", (req, res) => {
    res.send(req.body);
});

// 회원가입 
app.post("/joinMem", (req, res) => {
    const user = new User(req.body);
    user.save();
    res.status(200).send({"message": "success"});
});

// 회원가입 시 동일한 닉네임이 있는지 체크
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

// 회원가입시 동일한 아이디가 존재하는 지 체크
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

// 회원가입 시 동일한 이메일이 존재하는 지 체크 
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

// 로그인
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
    });     
});

// 아이디 찾기
app.post("/idSearch", (req, res) => {
    User.findOne({ name: req.body.name, email: req.body.email})
    .then(user => {
        if ( user ) {
            return res.status(200).json({id: user.id});
        } else {
            return res.status(200).json({message: "존재하는 아이디가 없습니다."});
        };
    });
});

// 비밀번호 찾기
app.post("/pwSearch", (req, res) => {
    User.findOne({ id: req.body.id })
    .then(user => {
        if ( user ) {
            return res.status(200).json({password: user.password});
        } else {
            return res.status(200).json({message: "아이디를 정확하게 입력해주세요."});
        };
    });
});

// 비밀번호 찾기에 성공하면 새로운 비밀번호로 업데이트
app.post("/pwChange", (req, res) => {
    User.updateOne({id: req.body.id}, {$set: {password: req.body.password}})
    .then(user => {
        return res.status(200).json({"message": "success"});
    })
})

// 게시글 작성
app.post("/write", (req, res) => {
    const board = new Board(req.body);
    board.save();
    res.status(200).send({"message": "success"});
});

app.get("/list", (req, res) => {
    Board.find()
    .then(board => {
        res.status(200).json({board})
    })
});

app.listen(4000, () => {
    console.log("server connect");
});