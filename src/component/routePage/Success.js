import styled from "styled-components";
import { Link } from "react-router-dom";
import Tenada from "../../fonts/Tenada.ttf";

const Success = () => {

    return (
        <Div>
            <H1>회원가입을 환영합니다.</H1>
            <StyledLink to='/'>홈</StyledLink>
        </Div>
    )
};

const Div = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`;

const H1 = styled.h1`
        @font-face {
        font-family: 'Tenada';
        src: url(${Tenada}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    margin: 10% 0;
    font-family: 'Tenada';
`;

const StyledLink = styled(Link)`
    padding: 1% 5%;
    background: violet;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 1.2vw;
    text-decoration: none;
`;   

export default Success;