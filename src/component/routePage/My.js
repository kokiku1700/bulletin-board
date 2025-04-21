import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const My = ({ setLoginStatus }) => {
    const keys = localStorage.key(0);
    const nn = localStorage.getItem(keys);
    const [my, setMy] = useState({
        name: "",
        nickName: "",
        id: "",
        email: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/myData", {params: {id: keys}})
        .then(data => {
            setMy({
                name: data.data.user.name,
                nickName: data.data.user.nickName,
                id: data.data.user.id,
                email: data.data.user.email,
            })
        });
    }, []);

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
            <Div>
                <H3>닉네임</H3>
                <Span>{my.nickName}</Span>
                <Button>수정</Button>
            </Div>
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

const DivWrap = styled.div`
    width: 50%;
    margin: 0 auto;
    margin-top: 5%;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    padding: 3% 0;
    display: flex;
`;

const H3 = styled.h3`
    width: 20%;
`;

const Span = styled.span`

`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 1%;
    &:hover {
        background: #ccc;
    }
`;
export default My;