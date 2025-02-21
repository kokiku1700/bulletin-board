import styled from "styled-components";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <Div $flexDirection="column"
             $paddingTop="5" 
             $width="75vw">
            
            <Logo />

            <Div $flexDirection="column"
                 $border="1px solid violet"
                 $width="30vw"
                 $paddingTop="5"
                 $paddingBottom="5" 
                 $marginTop="5" >
                {/* 로그인 아이디 */}
                <Input placeholder="아이디" />
                {/* 로그인 비밀번호 */}
                <Input placeholder="비밀번호" />
            
                <Button>로그인</Button>

                <Div $flexDirection="row"
                     $marginTop="5"
                     $width="100%">
                    <StyledLink to="/IdSearch" >아이디 찾기</StyledLink>
                    <Span>|</Span>
                    <StyledLink to="/PwSearch" >비밀번호 찾기</StyledLink>
                    <Span>|</Span>
                    <StyledLink to="/JoinMem" >회원가입</StyledLink>
                </Div>
            </Div>
        </Div>
    )
};

const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.$flexDirection};
    justify-content: center;
    align-items: center;
    width: ${props => props.$width};
    margin: 0 auto;
    padding-top: ${props => props.$paddingTop}%;
    padding-bottom: ${props => props.$paddingBottom}%;
    border: ${props => props.$border};
    margin-top: ${props=> props.$marginTop}%;
`;

const Input = styled.input`
    width: 20vw;
    padding: 3% 1%;
    margin: 2%;
    border: none;
    border-bottom: 1px solid #aaa;
    color: black;
    font-size: 1vw;

    &:focus {
        outline: none;
        border-bottom: 2px solid violet;
    }
`;

const Button = styled.button`
    width:20.5vw;
    padding: 2% 1%;
    margin: 3%;
    border-radius: 12px;
    font-size: 1vw;
    border: none;
    background: violet;
    color: white;
    cursor: pointer;

    &:hover {
        background: #FD65E9;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 0 1%;

    &:hover {
    color: violet;
    }
`;

const Span = styled.span`
    cursor: default;
    opacity: .2;
`
export default Login;