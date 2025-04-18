const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const app = express();
const bodyParser = require("body-parser");
const { User } = require("./userModel");
const { Board } = require("./boardModel");
const { Count } = require("./countModel");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

dbConnect();

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

// 게시글 전체 리스트 가져오기
app.get("/list", (req, res) => {
    Board.find()
    .then(board => {
        res.status(200).json({board})
    })
});

// 게시글 필터
app.get("/listFilter", (req, res) => {
    Board.find({category: req.query.category})
    .then(board => {
        res.status(200).json({board});
    })
});

// 게시글 개수 가져오기
app.get("/count", (req, res) => {
    Board.find({category: req.query.category}).countDocuments()
    .then(num => {
        res.status(200).json({num});
    });
});

// 게시글 중 하나 클릭시 상세 페이지 이동
app.get("/postDetail", (req, res) => {
    Board.findOne({_id: req.query._id})
    .then(detail => {
        res.status(200).json({detail});
    });
});

// 게시글 작성
app.post("/write", async(req, res) => {

    await Count.findOne({name: "게시물 총 개수"})
    .then(data => {
        let num = data.count;
          
        Board.insertOne({
            _id: num,
            title: req.body.title,
            category: req.body.category,
            content: req.body.content,
            writer: req.body.writer,
            date: req.body.date,
        })
    });
    
    await Count.updateOne({name: "게시물 총 개수"}, {$inc: {count: 1}});

    res.status(200).send({"message": "success"});
});

// 게시글 수정
app.put("/postEdit", async(req, res) => {
    await Board.updateOne({ _id: req.body._id }, {
        _id: req.body._id,
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        writer: req.body.writer,
        date: req.body.date,
    })
    .then(res.status(200).send({"message": "success"}));
});

//게시글 삭제
app.delete("/postDelete", async(req, res) => {
    await Board.deleteOne({_id: req.body._id})
    .then(res.status(200).send({"message": "success"}));
})

app.listen(4000, () => {
    console.log("server connect");
});