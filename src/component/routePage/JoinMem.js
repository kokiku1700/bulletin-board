import styled from "styled-components";
import Logo from "../Logo";


const JoinMem = () => {

    return (
        <DivWrap>
            <Logo />
            <Div>
                <h2>회원가입</h2>
                <Input type="name" placeholder="이름" />
                <Input type="name" placeholder="닉네임" />
                <Input type="id" placeholder="아이디" />
                <Input type="password" placeholder="비밀번호" />
                <Input type="password" placeholder="비밀번호 확인" />
                <Input type="email" placeholder="이메일" />
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