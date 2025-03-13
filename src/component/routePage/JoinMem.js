import styled from "styled-components";
import Logo from "../Logo";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JoinMem = () => {
    const [member, setMember] = useState({
        name: "",
        nickName: "",
        id: "",
        password: "",
        email: ""
    });
    const [pwCheck, setPwCheck] = useState("");
    const [pwBool, setPwBool] = useState(false);
    const [changeSpan, setChageSpan] = useState({
        cName: {color: "#999", fontSize: "16px", fontWeight: "100"},
        cNickName: {color: "#999", fontSize: "16px",},
        cId: {color: "#999", fontSize: "16px",},
        cPassword: {color: "#999", fontSize: "16px",},
        cEmail: {color: "#999", fontSize: "16px",}
    });
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnPwCheck = (e) => {
        setPwCheck(e.target.value);
        console.log(pwCheck)

        if ( member.password === pwCheck ) {
            setPwBool(true);
        }
    }

    const handleOnBlur = (e) => {
        const nameRegex = new RegExp(/^[가-힣]{2,18}$/);
        const nickNameRegex = new RegExp(/^[가-힣a-zA-Z]{2,16}$/);
        const idRegEx = new RegExp(/^[a-zA-Z0-9]{8,16}$/);
        const pwRegEx = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/);
        const emailRegEx = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);

        if ( e.target.name === "name" ) {
            if ( nameRegex.test(e.target.value) ) {
                setChageSpan({
                    ...changeSpan,
                    cName: {color: "violet", fontSize: "17px", fontWeight: "600"}
                });
            } else {
                setChageSpan({
                    ...changeSpan,
                    cName: {color: "#999", fontSize: "16px"}
                });
            }
        }
    }

    const handleOnSubmit = async() => {


        await axios
            .post("http://localhost:4000/api", member)
            .then(res =>{
                console.log(res);
                console.log("success");
                navigate("/Success", {replace: true});
            })
            .catch(err => {
                console.error("fail");
            });
            
    };

    return (
        <DivWrap>
            <Logo />
            <Div>
                <h2 style={{color: "violet", marginBottom: "1%"}}>회원가입</h2>
                {/* 이름 */}
                <InputWrap>
                    <Span color={changeSpan.cName.color} fontSize={changeSpan.cName.fontSize} $fontWeight={changeSpan.cName.fontWeight} >이름</Span>
                    <Input color={changeSpan.cName.color} type="name" name="name" value={member.name} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 닉네임 */}
                <InputWrap>
                    <Span>닉네임</Span>
                    <Input  type="name" name="nickName" value={member.nickName} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 아이디 */}
                <InputWrap>
                    <Span>아이디</Span>
                    <Input type="id" name="id" value={member.id} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 비밀번호 */}
                <InputWrap>
                    <Span>비밀번호</Span>
                    <Input type="password" name="password" value={member.password} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 비밀번호 확인 */}
                <InputWrap>
                    <Span>비밀번호 확인</Span>
                    <Input type="password" name="passwordCheck" value={pwCheck} onChange={handleOnPwCheck} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 이메일 */}
                <InputWrap>
                    <Span>이메일</Span>
                    <Input type="email" name="email" value={member.email} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>
                <Button onClick={handleOnSubmit}>확인</Button>
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

const InputWrap = styled.div`
    display: flex;
    align-items: right;
    flex-direction: column;
    width: 85%;
    margin-bottom: 3%;
`;

const Span = styled.span`
    margin-left: 2%;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.$fontWeight};
`

const Input = styled.input`
    margin: .5% 0 0 0;
    width: 96%;
    border: none;
    padding: 1% 2%;
    border-bottom: 1px solid ${props => props.color};
    font-size: 1vw;
    color: ${props => props.color};

    &:focus {
        outline: none;
        border-bottom: 2px solid ${props => props.color};
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