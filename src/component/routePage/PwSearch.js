import styled from "styled-components";
import Logo from "../Logo";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { breakPoints } from "../../ease/media";

const PwSearch = () => {
    const [search, setSearch] = useState({
        id: "",
        password: "",
        passwordCheck: ""
    });
    const [visibleP, setVisibleP] = useState({
        vPassword: {
            content: "",
            visible: "none",
        },
        vPasswordCheck: {
            content: "",
            visible: "none",
        }
    });
    const pwMessage = {
        coPassword: {
            c1: "8 ~ 18자의 소문자, 대문자, 숫자, 특수기호를 포함해 입력해주세요.",
            c2: "비밀번호를 입력해주세요.",
        },
        coPasswordCheck: {
            c1: "비밀번호가 동일하지 않습니다.",
            c2: "비밀번호 확인을 입력해주세요.",
        }
    };
    const [bool, setBool] = useState(false);
    const [resultBool, setResultBool] = useState(false);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = async() => {
        await axios.post("http://localhost:4000/pwSearch", { id: search.id })
        .then(res => {
            if ( res.data.password ) {
                setBool(true);
            } else {
                setBool(false);
            };
        });
    };

    const handleOnBlur = ( e ) => {
        const pwRegEx = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,18}$/);

        if ( e.target.name === "password" ) {
            if ( pwRegEx.test(search.password) ) {
                setVisibleP({
                    ...visibleP,
                    vPassword:{ content: "", visible: "none"},            
                });
            } else if ( search.password === "" ) {
                setVisibleP({
                    ...visibleP,
                    vPassword:{ content: pwMessage.coPassword.c2, visible: "flex"}
                });
            } else {
                setVisibleP({
                    ...visibleP,
                    vPassword:{ content: pwMessage.coPassword.c1, visible: "flex"}
                });
            }
        } else {
            if ( search.passwordCheck === "" ) {
                setVisibleP({
                    ...visibleP,
                    vPasswordCheck: {content: pwMessage.coPasswordCheck.c2, visible: "flex"}
                });
                setResultBool(false);
            } else if ( search.password === search.passwordCheck ) {
                setVisibleP({
                    ...visibleP,
                    vPasswordCheck: {content: "", visible: "none"}
                });
                setResultBool(true);
            } else {
                setVisibleP({
                    ...visibleP,
                    vPasswordCheck: {content: pwMessage.coPasswordCheck.c1, visible: "flex"}
                });
                setResultBool(false);
            }
            
        }

    }

    const onPwChange = async() => {
        if ( resultBool ) {
            await axios.post("http://localhost:4000/pwChange", { id: search.id, password: search.password })
            .then(res => {
                alert("비밀번호가 변경되었습니다. 다시 로그인 해주세요.");
                navigate("/Login");
            });
        }
    };

    return (
        <Div>            
            <Logo />
            <InputDiv>
                {bool 
                    ? <>
                        <InputWrap>
                            <Span>새 비밀번호<P $display={visibleP.vPassword.visible}>{visibleP.vPassword.content}</P></Span>
                            <Input type="password" name="password" value={search.password} onChange={handleOnChange} onBlur={handleOnBlur} />
                        </InputWrap>
                        <InputWrap>
                            <Span>새 비밀번호 확인<P $display={visibleP.vPasswordCheck.visible}>{visibleP.vPasswordCheck.content}</P></Span>
                            <Input type="password" name="passwordCheck" value={search.passwordCheck} onChange={handleOnChange}  onBlur={handleOnBlur}  />
                        </InputWrap>

                        <Button onClick={onPwChange}>확인</Button>
                    </>
                    : <>
                        <InputWrap>
                            <Span>아이디</Span>
                            <Input type="name" name="id" value={search.id} onChange={handleOnChange}/>
                        </InputWrap>

                        <Button onClick={onSubmit}>확인</Button>
                    </> 
                }       
            </InputDiv>
        </Div>
    )
};

const Div = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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

const InputWrap = styled.div`
    width: 70%;
    display: flex;
    justify-content: right;
    flex-direction: column;
`;

const Span = styled.span`
    margin-top: 6%;
    margin-left: 1.5%;
    font-family: 'NEXON Lv1 Gothic Regular';

    @media (max-width: ${breakPoints.big}) {
        margin-left: 10%;
    }
`;

const P = styled.p`
    display; ${props => props.$display};
    margin-top: 2%;
    color: red;
    font-size: 13px;
    font-family: 'NEXON Lv1 Gothic Regular';
`

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #aaa;
    width: 100%;
    margin: 3% auto;
    padding: 2% 1%;
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
    margin-top: 5%;
    padding: 2.2% 6%;
    background: violet;
    color: white;
    border: none;
    border-radius: 5px;
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

export default PwSearch;