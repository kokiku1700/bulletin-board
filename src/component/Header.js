import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Tenada from "../fonts/Tenada.ttf";
import lightMode from "../img/lightMode.png";
import Logo from "./Logo";

const Header = () => {
    const location = useLocation();
    if ( location.pathname === "/Login" ) return null;

    return (
        <DivWrap>
            <Div $justifycontent="flex-start" width="70">
                <Logo />
            </Div>
            <Div $justifycontent="center" width="30">
                <Img src={lightMode} alt="lightMode" />
                <StyledLink to='/Login' 
                            fontFamily='Tenada' 
                            fontSize="1.2vw" 
                            color="black" >
                                로그인
                </StyledLink>
            </Div>
        </DivWrap>
    )


};

const DivWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #999;
`
const Div = styled.div`
    width: ${props => props.width}%;
    display: flex;
    justify-content: ${props => props.$justifycontent};
    align-items: center;
`
const Img = styled.img`
    width: 2.7vw;
    cursor: pointer;
`

const StyledLink = styled(Link)`

    @font-face {
        font-family: 'Tenada';
        src: url(${Tenada}) format('woff2');
        font-weight: 100;
        font-style: normal;
    }

    font-family: ${props => props.fontFamily};
    text-decoration: none;
    font-size: ${props => props.fontSize};
    margin: 0 5%;
    color: ${props => props.color};
    
`;

export default Header;