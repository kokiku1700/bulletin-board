import PyeongChang from "../fonts/PyeongChangPeace-Bold.ttf";
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
        font-family: 'PyeongChangPeace-Bold';
        src: url(${PyeongChang}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    font-family: 'PyeongChangPeace-Bold';
    text-decoration: none;
    font-size: 3.2vw;
    margin: 0 5%;
    color: violet;
    
`;

export default Logo;