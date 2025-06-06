import styled from "styled-components";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { breakPoints } from "../../ease/media";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginStatus }) => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const navigate = useNavigate();

    const handleOnChangeId = (e) => {
        setInputId(e.target.value);
    };

    const handleOnChangePw = (e) => {
        setInputPw(e.target.value);
    };

    const handleOnSubmit = async() => {
        await axios.post("http://localhost:4000/login", {id: inputId, pw: inputPw})
        .then(res => {
            if ( res.data.message === "success" ) {
                localStorage.setItem(res.data.id, res.data.nickName);
                setLoginStatus(1);
                navigate("/");
            }
            console.log(res.data)
        })
    }


    return (
        <Div>
            <Logo />
            <InputDiv>
                {/* 로그인 아이디 */}
                <Input placeholder="아이디" type="id" value={inputId} onChange={handleOnChangeId} />
                {/* 로그인 비밀번호 */}
                <Input placeholder="비밀번호" type="password" value={inputPw} onChange={handleOnChangePw} />
            
                <Button onClick={handleOnSubmit}>로그인</Button>

                <LinkDiv>
                    <StyledLink to="/IdSearch" >아이디 찾기</StyledLink>
                    <Span>|</Span>
                    <StyledLink to="/PwSearch" >비밀번호 찾기</StyledLink>
                    <Span>|</Span>
                    <StyledLink to="/JoinMem" >회원가입</StyledLink>
                </LinkDiv>
            </InputDiv>
        </Div>
    )
};

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75vw;
    margin: 0 auto;
    padding-top: 5%;
    
    @media (max-width: ${breakPoints.largeDesktop}) {
        margin-top: 5%;
    }
    @media (max-width: ${breakPoints.desktop}) {
        margin-top: 12%;
    }
    @media (max-width: ${breakPoints.tablet}) {
        margin-top: 17%;
    }
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    margin: 0 auto;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 5%;
    border: 2px solid violet;

    @media (max-width: ${breakPoints.big}) {
        width: 45vw;
    }
    @media (max-width: ${breakPoints.largeDesktop}) {
        width: 50vw;
    }
    @media (max-width: ${breakPoints.desktop}) {
        width: 60vw;
    }
    @media (max-width: ${breakPoints.tablet}) {
        width: 70vw;
    }
    @media (max-width: ${breakPoints.mobile}) {
        width: 60vw;
    }
`

const LinkDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    margin-top: 5%;
`;

const Input = styled.input`
    width: 20vw;
    padding: 3% 1%;
    margin: 3%;
    border: none;
    border-bottom: 1px solid #aaa;
    color: black;
    font-size: 1vw;
    font-family: 'NEXON Lv1 Gothic Regular';

    &:focus {
        outline: none;
        border-bottom: 2px solid violet;
    }

    @media (max-width: ${breakPoints.big}) {
        width: 25vw;
        font-size: 1.3vw;
    }
    @media (max-width: ${breakPoints.largeDesktop}) {
        width: 30vw;
        font-size: 1.5vw;
    }
    @media (max-width: ${breakPoints.desktop}) {
        width: 35vw;
        font-size: 1.8vw;
    }
    @media (max-width: ${breakPoints.tablet}) {
        width: 40vw;
        font-size: 2.1vw;
    }
`;

const Button = styled.button`
    width:20.5vw;
    padding: 2% 1%;
    margin: 4%;
    border-radius: 12px;
    font-size: 1vw;
    border: none;
    background: violet;
    color: white;
    cursor: pointer;
    font-family: 'NEXON Lv1 Gothic Regular';

    &:hover {
        background: #FD65E9;
    }

    @media (max-width: ${breakPoints.big}) {
        width: 25.5vw;
        font-size: 1.3vw;
    }
    @media (max-width: ${breakPoints.largeDesktop}) {
        width: 30.5vw;
        font-size: 1.5vw;
    }
    @media (max-width: ${breakPoints.desktop}) {
        width: 35.5vw;
        font-size: 1.8vw;
    }
    @media (max-width: ${breakPoints.tablet}) {
        width: 40.5vw;
        font-size: 2.1vw;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 0 1%;
    font-family: 'NEXON Lv1 Gothic Regular';

    &:hover {
    color: violet;
    }
`;

const Span = styled.span`
    cursor: default;
    opacity: .2;
    font-family: 'NEXON Lv1 Gothic Regular';
`
export default Login;