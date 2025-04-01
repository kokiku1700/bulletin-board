import styled from "styled-components";
import Logo from "../Logo";

const IdSearch = () => {

    return (
        <Div>            
            <Logo />
            <InputDiv>
                <InputWrap>
                    <Span>이름</Span>
                    <Input></Input>
                </InputWrap>
                <InputWrap>
                    <Span>이메일</Span>
                    <Input></Input>
                </InputWrap>
                <Button>확인</Button>
            </InputDiv>
        </Div>
    )
}

const Div = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
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
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #aaa;
    width: 100%;
    margin: 3% 0;
    padding: 2% 1%;
`;

const Button = styled.button`
    margin-top: 5%;
    padding: 2.2% 6%;
    background: violet;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default IdSearch;