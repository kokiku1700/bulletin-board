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
    const [changeSpan, setChageSpan] = useState({
        cName: {color: "#999", fontSize: "16px", fontWeight: "100", borderSize: "1px"},
        cNickName: {color: "#999", fontSize: "16px", fontWeight: "100", borderSize: "1px"},
        cId: {color: "#999", fontSize: "16px", fontWeight: "100", borderSize: "1px"},
        cPassword: {color: "#999", fontSize: "16px", fontWeight: "100", borderSize: "1px"},
        cPasswordCheck: {color: "#999", fontSize: "16px", fontWeight: "100", borderSize: "1px"},
        cEmail: {color: "#999", fontSize: "16px", fontWeight: "100", borderSize: "1px"}
    });
    const [memberBool, setMemberBool] = useState([
        false, false, false, false, false, false
    ]);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnPwCheck = (e) => {
        setPwCheck(e.target.value);
    }

    // 각 입력칸의 포커스가 벗어 났을 시 유효성 검사 실시
    const handleOnBlur = (e) => {
        const nameRegex = new RegExp(/^[가-힣]{2,18}$/);
        const nickNameRegex = new RegExp(/^[가-힣a-zA-Z]{2,16}$/);
        const idRegEx = new RegExp(/^[a-zA-Z0-9]{8,16}$/);
        const pwRegEx = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/);
        const emailRegEx = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
        
        // 이름 유효성 검사
        if ( e.target.name === "name" ) {
            if ( nameRegex.test(e.target.value) ) {
                setChageSpan({
                    ...changeSpan,
                    cName: {color: "violet", fontSize: "17px", fontWeight: "600", borderSize: "2px"}
                });
            } else {
                setChageSpan({
                    ...changeSpan,
                    cName: {color: "red", fontSize: "16px", fontWeight: "100", borderSize: "1px"}
                });
            }
        // 닉네임 유효성 검사
        } else if ( e.target.name === "nickName" ) {
            if ( nickNameRegex.test(e.target.value) ) {
                setChageSpan({
                    ...changeSpan,
                    cNickName: {color: "violet", fontSize: "17px", fontWeight: "600", borderSize: "2px"}
                });
            } else {
                setChageSpan({
                    ...changeSpan,
                    cNickName: {color: "red", fontSize: "16px", fontWeight: "100", borderSize: "1px"}
                });
            }
        // 아이디 유효성 검사
        } else if ( e.target.name === "id" ) {
            if ( idRegEx.test(e.target.value) ) {
                setChageSpan({
                    ...changeSpan,
                    cId: {color: "violet", fontSize: "17px", fontWeight: "600", borderSize: "2px"}
                });
            } else {
                setChageSpan({
                    ...changeSpan,
                    cId: {color: "red", fontSize: "16px", fontWeight: "100", borderSize: "1px"}
                });
            }
        // 비밀번호 유효성 검사
        } else if ( e.target.name === "password" ) {
            if ( pwRegEx.test(e.target.value) ) {
                setChageSpan({
                    ...changeSpan,
                    cPassword: {color: "violet", fontSize: "17px", fontWeight: "600", borderSize: "2px"}
                });
            } else {
                setChageSpan({
                    ...changeSpan,
                    cPassword: {color: "red", fontSize: "16px", fontWeight: "100", borderSize: "1px"}
                });
            }
        // 비밀번호 확인 
        } else if ( e.target.name === "passwordCheck" ) {
            if ( member.password === pwCheck ) {
                setChageSpan({
                    ...changeSpan,
                    cPasswordCheck: {color: "violet", fontSize: "17px", fontWeight: "600", borderSize: "2px"}
                });
            } else {
                setChageSpan({
                    ...changeSpan,
                    cPasswordCheck: {color: "red", fontSize: "16px", fontWeight: "100", borderSize: "1px"}
                });
            }
        // 이메일 유효성 검사
        } else {
            if ( emailRegEx.test(e.target.value) ) {
                setChageSpan({
                    ...changeSpan,
                    cEmail: {color: "violet", fontSize: "17px", fontWeight: "600", borderSize: "2px"}
                });
            } else {
                setChageSpan({
                    ...changeSpan,
                    cEmail: {color: "#999", fontSize: "16px", fontWeight: "100", borderSize: "1px"}
                });
            }
        }
    }

    // 확인 버튼 클릭 시 입력 정보를 체크하고 
    // 올바르면 db에 저장, 올바르지 않다면 경고 
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
                    <Input color={changeSpan.cName.color} $borderSize={changeSpan.cName.borderSize} type="name" name="name" value={member.name} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 닉네임 */}
                <InputWrap>
                    <Span color={changeSpan.cNickName.color} fontSize={changeSpan.cNickName.fontSize} $fontWeight={changeSpan.cNickName.fontWeight} >닉네임</Span>
                    <Input color={changeSpan.cNickName.color} $borderSize={changeSpan.cNickName.borderSize} type="name" name="nickName" value={member.nickName} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 아이디 */}
                <InputWrap>
                    <Span color={changeSpan.cId.color} fontSize={changeSpan.cId.fontSize} $fontWeight={changeSpan.cId.fontWeight} >아이디</Span>
                    <Input color={changeSpan.cId.color} $borderSize={changeSpan.cId.borderSize} type="id" name="id" value={member.id} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 비밀번호 */}
                <InputWrap>
                    <Span color={changeSpan.cPassword.color} fontSize={changeSpan.cPassword.fontSize} $fontWeight={changeSpan.cPassword.fontWeight} >비밀번호</Span>
                    <Input color={changeSpan.cPassword.color} $borderSize={changeSpan.cPassword.borderSize} type="password" name="password" value={member.password} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 비밀번호 확인 */}
                <InputWrap>
                    <Span color={changeSpan.cPasswordCheck.color} fontSize={changeSpan.cPasswordCheck.fontSize} $fontWeight={changeSpan.cPasswordCheck.fontWeight} >비밀번호 확인</Span>
                    <Input color={changeSpan.cPasswordCheck.color} $borderSize={changeSpan.cPasswordCheck.borderSize} type="password" name="passwordCheck" value={pwCheck} onChange={handleOnPwCheck} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 이메일 */}
                <InputWrap>
                    <Span color={changeSpan.cEmail.color} fontSize={changeSpan.cEmail.fontSize} $fontWeight={changeSpan.cEmail.fontWeight} >이메일</Span>
                    <Input color={changeSpan.cEmail.color} $borderSize={changeSpan.cEmail.borderSize} type="email" name="email" value={member.email} onChange={handleOnChange} onBlur={handleOnBlur} />
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
    border-bottom: ${props => props.$borderSize} solid ${props => props.color};
    font-size: 1vw;
    color: ${props => props.color};

    &:focus {
        outline: none;
        border-bottom: 2px solid ${props => props.color};
    };
    
    &:-webkit-autofill {
        transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-text-fill-color: ${props => props.color} !important;
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