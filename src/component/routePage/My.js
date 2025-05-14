import axios from "axios";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { breakPoints } from "../../ease/media";
import "../../fonts/fonts.css";

const My = ({ setLoginStatus }) => {
    const keys = localStorage.key(0);
    const nn = localStorage.getItem(keys);
    const [my, setMy] = useState({
        name: "",
        nickName: "",
        id: "",
        email: "",
    });
    const [changeStatus, setChangeStatus] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/myData", {params: {id: keys}})
        .then(data => {
            setMy({
                name: data.data.user.name,
                nickName: data.data.user.nickName,
                id: data.data.user.id,
                email: data.data.user.email,
            });
        });
    }, []);

    const changeNickNameStatus = () => {
        setChangeStatus(!changeStatus);
    };

    const changeNickName = async() => {
        const nickNameRegex = new RegExp(/^([a-zA-Z0-9가-힣]){2,16}$/);
        let idCheck = ""
        let nickNameCheck = "";

        
        if ( nickNameRegex.test(my.nickName) ) {
            await axios.get("http://localhost:4000/nickNameGet", {params: {nickName: my.nickName}})
            .then(res => {
                if ( res.data.data === null ) {
                    idCheck = "";
                    nickNameCheck = "";
                } else {
                    idCheck = res.data.data.id;
                    nickNameCheck = res.data.data.nickName;
                }
                
            });
            
            if ( nickNameCheck === "" ) {
                await axios.post("http://localhost:4000/postWriterEdit", {before: nn, after: my.nickName})
                .then(res => {
                    console.log("success");
                })
                
                await axios.post("http://localhost:4000/nickNameEdit", {id: my.id, nickName: my.nickName})
                .then(res => {
                    localStorage.setItem(my.id, my.nickName);
                    window.location.reload();
                    setChangeStatus(!changeStatus);
                });

                
            } else {
                if ( idCheck === my.id ) {
                    setChangeStatus(!changeStatus);
                } else {
                    console.log("존재하는 닉네임");
                }
            }


        }
        console.log("gsgd")
    };

    const changeNickNameValue = (e) => {
        setMy({
            ...my,
            nickName: e.target.value
        });
        console.log(my.nickName)
    };

    const hadleOnDeleteMem = async() => {
        await axios.delete("http://localhost:4000/deleteMem", {data:{id: keys, nickName: nn}})
        .then(res => {
            localStorage.clear();
            setLoginStatus(0);
            alert("회원탈퇴 처리가 완료되었습니다.");
            navigate("/");
        });
    };

    return(
        <DivWrap>
            <Div>
                <H3>이름</H3>
                <Span>{my.name}</Span>
            </Div>
            {
                changeStatus
                ? <Div>
                    <H3>닉네임</H3>
                    <Span>{my.nickName}</Span>
                    <Button onClick={changeNickNameStatus}>수정</Button>
                </Div>
                : <Div>
                    <H3>닉네임</H3>
                    <Input value={my.nickName} onChange={changeNickNameValue} />
                    <Button onClick={changeNickName}>확인</Button>
                </Div>
            }
            <P>존재하는 닉네임입니다.</P>
            <Div>
                <H3>아이디</H3>
                <Span>{my.id}</Span>
            </Div>
            <Div>
                <H3>이메일</H3>
                <Span>{my.email}</Span>
            </Div>
            <Div>
                <Button onClick={hadleOnDeleteMem}>회원 탈퇴</Button>
            </Div>
        </DivWrap>
    );
};

const ErrorMessage = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 100%;
    }

`;

const DivWrap = styled.div`

    width: 50%;
    margin: 0 auto;
    margin-top: 5%;
    border: 2px solid violet;
    border-radius: 10px;


    @media (max-width: ${breakPoints.big}) {
        width: 60%;

    }
    @media (max-width: ${breakPoints.desktop}) {
        width: 70%;

    }
    

`;

const Div = styled.div`
    display: flex;
    align-items: center;
    padding: 4% 3%;
    display: flex;
`;

const H3 = styled.h3`
    width: 20%;
    font-family: 'NEXON Lv1 Gothic Bold';

    @media (max-width: ${breakPoints.desktop}) {
        font-size: 16px;
    }
    @media (max-width: ${breakPoints.tablet}) {
        font-size: 15px;
    }
`;

const Span = styled.span`
    font-family: 'NEXON Lv1 Gothic Regular';
    margin-right: 1%;

`;

const Input = styled.input`
    padding: 1% 1%;
    margin-right: 1%;
    font-family: 'NEXON Lv1 Gothic Regular';

`;

const P = styled.p`
    font-family: 'NEXON Lv1 Gothic Regular';
    color: red;
    margin: 0 5%;
    animation: ${ErrorMessage} 2s;
`

const Button = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 1%;
    font-family: 'NEXON Lv1 Gothic Regular';

    &:hover {
        background: #ccc;
    }
`;
export default My;