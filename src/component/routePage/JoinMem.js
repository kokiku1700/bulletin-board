import styled from "styled-components";
import Logo from "../Logo";


const JoinMem = () => {

    return (
        <DivWrap>
            <Logo />
            <Div>
                <Input placeholder="이름" type="id" />
                <Input placeholder="닉네임" />
                <Input placeholder="아이디" />
                <Input placeholder="비밀번호" />
                <Input placeholder="비밀번호 확인" />
                <Input placeholder="이메일" />
                <Input placeholder="휴대전화번호" />
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
    border: 1px solid violet;
    margin-top: 1%;
    padding: 2%;
`;

const Input = styled.input`
    margin: 2% 1%;
    width: 60%;
    border: none;
    padding: 2% 0;
    border-bottom: 1px solid #999;
    font-size: 1vw;

    &:focus {
        outline: none;
        border-bottom: 2px solid violet;
    }
`

export default JoinMem;