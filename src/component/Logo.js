import BagelFatOne from "../fonts/BagelFatOne-Regular.ttf";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {

    return (
        <StyledLink to='/' >
            D.First
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    @font-face {
        font-family: 'BagelFatOne-Regular';
        src: url(${BagelFatOne}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    font-family: 'BagelFatOne-Regular';
    text-decoration: none;
    font-size: 3.2vw;
    margin: 0 5%;
    color: violet;
    text-shadow: 2px 2px 0 #999;
    
    &:hover {
        color: #FD65E9;
    }
`;

export default Logo;