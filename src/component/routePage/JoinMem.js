import styled from "styled-components";
import Logo from "../Logo";
import { useRef, useState } from "react";
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
    const [visibleP, setVisibleP] = useState({
        vName: {
            content: "",
            visible: "none",
        },
        vNickname: {
            content: "",
            visible: "none",
        },
        vId: {
            content: "",
            visible: "none",
        },
        vPassword: {
            content: "",
            visible: "none",
        },
        vPasswordCheck: {
            content: "",
            visible: "none",
        },
        vEmail: {
            content: "",
            visible: "none",
        },
    });
    const [pwCheck, setPwCheck] = useState("");
    const [changeSpan, setChangeSpan] = useState({
        cName: {n: 0, bool: false, color: "#999", fontSize: "18px", fontWeight: "100", borderSize: "1px"},
        cNickName: {n: 1, bool: false, color: "#999", fontSize: "18px", fontWeight: "100", borderSize: "1px"},
        cId: {n: 2, bool: false, color: "#999", fontSize: "18px", fontWeight: "100", borderSize: "1px"},
        cPassword: {n: 3, bool: false, color: "#999", fontSize: "18px", fontWeight: "100", borderSize: "1px"},
        cPasswordCheck: {n: 4, bool: false, color: "#999", fontSize: "18px", fontWeight: "100", borderSize: "1px"},
        cEmail: {n: 5, bool: false, color: "#999", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
    });
    const pContent = {
        coName: {
            c1: "2 ~ 18자의 한글로 입력해주세요.",
            c2: "이름을 입력해주세요.",
            c3: "이미 회원가입된 계정이 있습니다."
        },
        coNickName: {
            c1: "2 ~ 16자의 영문이나 한글, 숫자로 입력해주세요.",
            c2: "닉네임을 입력해주세요.",
            c3: "동일한 닉네임이 존재합니다."
        },
        coId: {
            c1: "8 ~ 16자의 영문과 숫자로 입력해주세요.",
            c2: "아이디를 입력해주세요.",
            c3: "동일한 아이디가 존재합니다."
        },
        coPassword: {
            c1: "8 ~ 18자의 소문자, 대문자, 숫자, 특수기호를 포함해 입력해주세요.",
            c2: "비밀번호를 입력해주세요.",
        },
        coPasswordCheck: {
            c1: "비밀번호가 동일하지 않습니다.",
            c2: "비밀번호 확인을 입력해주세요.",
        },
        coEmail: {
            c1: "2 ~ 18자의 한글로 입력해주세요.",
            c2: "이메일을 입력해주세요.",
            c3: "동일한 이메일이 존재합니다."
        }
    };
    const navigate = useNavigate();
    const inputRef = useRef([]);

    const handleOnChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value,
        });
    };

    // 비밀번호 확인 입력
    const handleOnPwCheck = (e) => {
        setPwCheck(e.target.value);
    }

    // 각 입력칸의 포커스가 벗어 났을 시 유효성 검사 실시
    // (프로젝트를 진행하다가 리액트에서는 useEffect를
    // 사용하는 것도 좋아 보였다. 하지만 지금 변경하기에는 많이
    // 진행한 상태라 일단 이 방식을 사용하고 나중에 다른 프로젝트에서
    // 비슷한 이벤트를 만들 때 useEffect를 사용할 예정이다.)
    const handleOnBlur = async(e) => {
        const nameRegex = new RegExp(/^[가-힣]{2,18}$/);
        const nickNameRegex = new RegExp(/^([a-zA-Z0-9가-힣]){2,16}$/);
        const idRegEx = new RegExp(/^[a-zA-Z0-9]{8,16}$/);
        const pwRegEx = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,18}$/);
        const emailRegEx = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
        
        // **************************************************
        // 이름 유효성 검사
        if ( e.target.name === "name" ) {
            if ( nameRegex.test(e.target.value) ) {
                let resName = ""
                await axios.post("http://localhost:4000/name", { name: member.name })
                .then(res => {
                    resName = res.data.name;
                })
                if ( resName !== "" ) {
                    setChangeSpan({
                        ...changeSpan,
                        cName: {n: 0, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                    });
                    setVisibleP({
                        ...visibleP,
                        vName: {content: pContent.coName.c3, visible: "flex"}
                    });
                } else {
                    setChangeSpan({
                        ...changeSpan,
                        cName: {n: 0, bool: true, color: "violet", fontSize: "18px", fontWeight: "600", borderSize: "2px"}
                    });
                    setVisibleP({
                        ...visibleP,
                        vName: {content: '', visible: "none"}
                    });
                }
            } else if ( e.target.value === "" ) {
                setChangeSpan({
                    ...changeSpan,
                    cName: {n: 0, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vName: {content: pContent.coName.c2, visible: "flex"}
                });
            } else {
                setChangeSpan({
                    ...changeSpan,
                    cName: {n: 0, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vName: {content: pContent.coName.c1, visible: "flex"}
                });
            }
        // ************************************
        // 닉네임 유효성 검사
        } else if ( e.target.name === "nickName" ) {
            if ( nickNameRegex.test(e.target.value) ) {
                let resNickName = ""
                await axios.post("http://localhost:4000/nickName", { nickName: member.nickName })
                .then(res => {
                    resNickName = res.data.nickName;
                });
                // 존재하는 닉네임이 있는 경우
                if ( resNickName !== "" ) {
                    setChangeSpan({
                        ...changeSpan,
                        cNickName: {n: 1, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                    });
                    setVisibleP({
                        ...visibleP,
                        vNickname: {content: pContent.coNickName.c3, visible: "flex"}
                    });
                // 닉네임이 유효한 경우
                // 즉 동일한 닉네임이 없고 양식과 동일하고 빈 칸이 아닌 경우
                } else {
                    setChangeSpan({
                        ...changeSpan,
                        cNickName: {n: 1, bool: true, color: "violet", fontSize: "18px", fontWeight: "600", borderSize: "2px"}
                    });
                    setVisibleP({
                        ...visibleP,
                        vNickname: {content: "", visible: "none"}
                    });
                }
            // 빈 칸을 입력한 경우
            } else if ( e.target.value === "" ) {
                setChangeSpan({
                    ...changeSpan,
                    cNickName: {n: 1, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vNickname: {content: pContent.coNickName.c2, visible: "flex"}
                });
            // 입력한 정보가 틀린 경우
            } else {
                setChangeSpan({
                    ...changeSpan,
                    cNickName: {n: 1, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vNickname: {content: pContent.coNickName.c1, visible: "flex"}
                });
            }
        // ************************************************    
        // 아이디 유효성 검사
        } else if ( e.target.name === "id" ) {
            if ( idRegEx.test(e.target.value) ) {
                let resId = ""
                await axios.post("http://localhost:4000/id", { id: member.id })
                .then(res => {
                    resId = res.data.id
                });
                if ( resId !== "" ) {
                    setChangeSpan({
                        ...changeSpan,
                        cId: {n: 2, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                    });
                    setVisibleP({
                        ...visibleP,
                        vId: {content: pContent.coId.c3, visible: "flex"}
                    });
                } else {
                    setChangeSpan({
                        ...changeSpan,
                        cId: {n: 2, bool: true, color: "violet", fontSize: "18px", fontWeight: "600", borderSize: "2px"}
                    });
                    setVisibleP({
                        ...visibleP,
                        vId: {content: "", visible: "none"}
                    });
                }
            } else if ( e.target.value === "" ) {
                setChangeSpan({
                    ...changeSpan,
                    cId: {n: 2, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vId: {content: pContent.coId.c2, visible: "flex"}
                });
            } else {
                setChangeSpan({
                    ...changeSpan,
                    cId: {n: 2, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vId: {content: pContent.coId.c1, visible: "flex"}
                });
            }
        // 비밀번호 유효성 검사
        } else if ( e.target.name === "password" ) {
            if ( pwRegEx.test(e.target.value) ) {
                setChangeSpan({
                    ...changeSpan,
                    cPassword: {n: 3, bool: true, color: "violet", fontSize: "18px", fontWeight: "600", borderSize: "2px"}
                });
                setVisibleP({
                    ...visibleP,
                    vPassword: {content: "", visible: "none"}
                });
            } else if ( e.target.value === "") {
                setChangeSpan({
                    ...changeSpan,
                    cPassword: {n: 3, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vPassword: {content: pContent.coPassword.c2, visible: "flex"}
                });
            } else {
                setChangeSpan({
                    ...changeSpan,
                    cPassword: {n: 3, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vPassword: {content: pContent.coPassword.c1, visible: "flex"}
                });
            }
        // 비밀번호 확인 
        } else if ( e.target.name === "passwordCheck" ) {
            if ( member.password === pwCheck && pwCheck !== "" ) {
                setChangeSpan({
                    ...changeSpan,
                    cPasswordCheck: {n: 4, bool: true, color: "violet", fontSize: "18px", fontWeight: "600", borderSize: "2px"}
                });
                setVisibleP({
                    ...visibleP,
                    vPasswordCheck: {content: "", visible: "none"}
                });
            } else if ( e.target.value === "" ) {
                setChangeSpan({
                    ...changeSpan,
                    cPasswordCheck: {n: 4, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vPasswordCheck: {content: pContent.coPasswordCheck.c2, visible: "flex"}
                });
            } else {
                setChangeSpan({
                    ...changeSpan,
                    cPasswordCheck: {n: 4, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vPasswordCheck: {content: pContent.coPasswordCheck.c1, visible: "flex"}
                });
            }
        // 이메일 유효성 검사
        } else {
            if ( emailRegEx.test(e.target.value) ) {
                let resEmail = ""
                await axios.post("http://localhost:4000/email", { email: member.email })
                .then(res => {
                    resEmail = res.data.email
                });
                if ( resEmail !== "" ) {
                    setChangeSpan({
                        ...changeSpan,
                        cEmail: {n: 5, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                    });
                    setVisibleP({
                        ...visibleP,
                        vEmail: {content: pContent.coEmail.c3, visible: "flex"}
                    });
                } else {
                    setChangeSpan({
                        ...changeSpan,
                        cEmail: {n: 5, bool: true, color: "violet", fontSize: "18px", fontWeight: "600", borderSize: "2px"}
                    });
                    setVisibleP({
                        ...visibleP,
                        vEmail: {content: "", visible: "none"}
                    });
                }
            } else if ( e.target.value === "" ) {
                setChangeSpan({
                    ...changeSpan,
                    cEmail: {n: 5, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vEmail: {content: pContent.coEmail.c2, visible: "flex"}
                });
            } else {
                setChangeSpan({
                    ...changeSpan,
                    cEmail: {n: 5, bool: false, color: "red", fontSize: "18px", fontWeight: "100", borderSize: "1px"}
                });
                setVisibleP({
                    ...visibleP,
                    vEmail: {content: pContent.coEmail.c1, visible: "flex"}
                });
            }
        }
    }

    // 확인 버튼 클릭 시 입력 정보를 체크하고 
    // 올바르면 db에 저장, 올바르지 않다면 경고 
    const handleOnSubmit = async() => {
        let checkBool = false;

        for ( let key in changeSpan) {
            const v = changeSpan[key];

            if ( v.bool === false ) {
                inputRef.current[v.n].focus();
                checkBool = false;
                console.log(v)
                break;
            } else {
                checkBool = true;
                console.log(v)
            }
        }

        if ( checkBool === true ) {
            await axios
            .post("http://localhost:4000/joinMem", member)
            .then(res =>{

                navigate("/Success", {replace: true});
            })
            .catch(err => {
                console.error(err);
            });
        }   
    };

    return (
        <DivWrap>
            <Logo />
            <Div>
                <h2 style={{color: "violet", marginBottom: "1%"}}>회원가입</h2>
                {/* 이름 */}
                <InputWrap>
                    <Span color={changeSpan.cName.color} fontSize={changeSpan.cName.fontSize} $fontWeight={changeSpan.cName.fontWeight} >
                        이름
                        <P display={visibleP.vName.visible}>{visibleP.vName.content}</P>
                    </Span>
                    <Input ref={e => inputRef.current[0] = e} color={changeSpan.cName.color} $borderSize={changeSpan.cName.borderSize} type="name" name="name" value={member.name} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 닉네임 */}
                <InputWrap>
                    <Span color={changeSpan.cNickName.color} fontSize={changeSpan.cNickName.fontSize} $fontWeight={changeSpan.cNickName.fontWeight} >
                        닉네임
                        <P display={visibleP.vNickname.visible}>{visibleP.vNickname.content}</P>
                    </Span>
                    <Input ref={e => inputRef.current[1] = e} color={changeSpan.cNickName.color} $borderSize={changeSpan.cNickName.borderSize} type="name" name="nickName" value={member.nickName} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 아이디 */}
                <InputWrap>
                    <Span color={changeSpan.cId.color} fontSize={changeSpan.cId.fontSize} $fontWeight={changeSpan.cId.fontWeight} >
                        아이디
                        <P display={visibleP.vId.visible}>{visibleP.vId.content}</P>
                    </Span>
                    <Input ref={e => inputRef.current[2] = e} color={changeSpan.cId.color} $borderSize={changeSpan.cId.borderSize} type="id" name="id" value={member.id} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 비밀번호 */}
                <InputWrap>
                    <Span color={changeSpan.cPassword.color} fontSize={changeSpan.cPassword.fontSize} $fontWeight={changeSpan.cPassword.fontWeight} >
                        비밀번호
                        <P display={visibleP.vPassword.visible}>{visibleP.vPassword.content}</P>
                    </Span>
                    <Input ref={e => inputRef.current[3] = e} color={changeSpan.cPassword.color} $borderSize={changeSpan.cPassword.borderSize} type="password" name="password" value={member.password} onChange={handleOnChange} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 비밀번호 확인 */}
                <InputWrap>
                    <Span color={changeSpan.cPasswordCheck.color} fontSize={changeSpan.cPasswordCheck.fontSize} $fontWeight={changeSpan.cPasswordCheck.fontWeight} >
                        비밀번호 확인
                        <P display={visibleP.vPasswordCheck.visible}>{visibleP.vPasswordCheck.content}</P>
                    </Span>
                    <Input ref={e => inputRef.current[4] = e} color={changeSpan.cPasswordCheck.color} $borderSize={changeSpan.cPasswordCheck.borderSize} type="password" name="passwordCheck" value={pwCheck} onChange={handleOnPwCheck} onBlur={handleOnBlur} />
                </InputWrap>

                {/* 이메일 */}
                <InputWrap>
                    <Span color={changeSpan.cEmail.color} fontSize={changeSpan.cEmail.fontSize} $fontWeight={changeSpan.cEmail.fontWeight} >
                        이메일
                        <P display={visibleP.vEmail.visible}>{visibleP.vEmail.content}</P>
                    </Span>
                    <Input ref={e => inputRef.current[5] = e} color={changeSpan.cEmail.color} $borderSize={changeSpan.cEmail.borderSize} type="email" name="email" value={member.email} onChange={handleOnChange} onBlur={handleOnBlur} />
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
    display: flex;
    margin-left: 2%;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.$fontWeight};
`

const P = styled.p`
    display: ${props => props.display};
    font-size: 15px;
    margin-left: 5%;
    display: flex;
    align-items: center;
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