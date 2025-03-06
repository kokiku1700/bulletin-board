import styled from "styled-components";
import Logo from "../Logo";
import { useState } from "react";
import axios from "axios";

const JoinMem = () => {
    const [member, setMember] = useState({
        name: "",
        nickName: "",
        id: "",
        password: "",
        email: ""
    });
    const [pwCheck, setPwCheck] = useState("");

    const handleOnChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value,
        });
        console.log(member)
    };

    const handleOnPwCheck = (e) => {
        setPwCheck(e.target.value);
    }

    const handleOnSubmit = () => {
        
    }
    return (
        <DivWrap>
            <Logo />
            <Div>
                <h2>회원가입</h2>
                <Input type="name" name="name" value={member.name} onChange={handleOnChange} placeholder="이름" />
                <Input type="name" name="nickName" value={member.nickName} onChange={handleOnChange} placeholder="닉네임" />
                <Input type="id" name="id" value={member.id} onChange={handleOnChange} placeholder="아이디" />
                <Input type="password" name="password" value={member.password} onChange={handleOnChange} placeholder="비밀번호" />
                <Input type="password" name="passwordCheck" value={pwCheck} onChange={handleOnPwCheck} placeholder="비밀번호 확인" />
                <Input type="email" name="email" value={member.email} onChange={handleOnChange} placeholder="이메일" />
                <Button>확인</Button>
            </Div>
        </DivWrap>
    )
};

const DivWrap = styled.div`
    width: 75vw;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 45%;
    border: 2px solid violet;
    margin-top: 1%;
    padding: 2%;
`;

const Input = styled.input`
    margin: 2% 1%;
    width: 70%;
    border: none;
    padding: 2% 2%;
    border-bottom: 1px solid #999;
    font-size: 1vw;

    &:focus {
        outline: none;
        border-bottom: 2px solid violet;
    }
`;

const Button = styled.button`
    background: violet;
    color: white;
    font-size: 1vw;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 1.5% 4%;
`

export default JoinMem;