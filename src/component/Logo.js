import '../fonts/fonts.css';
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { breakPoints } from "../ease/media";


const Logo = () => {

    return (
        <StyledLink to='/' >
            D.First
        </StyledLink>
    )
}

const StyledLink = styled(Link)`

    font-family: 'BagelFatOne-Regular';
    text-decoration: none;
    font-size: 3.7vw;
    margin: 0 5%;
    color: violet;
    text-shadow: -3px 0px #fff, 0px 3px #fff, 3px 0px #fff, 0px -3px #fff;
    
    &:hover {
        color: #FD65E9;
    }

    @media (max-width: ${breakPoints.big}) {
        font-size: 4.7vw;
    }

    @media (max-width: ${breakPoints.largeDesktop}) {
        font-size: 5.7vw;
    }
    @media (max-width: ${breakPoints.desktop}) {
        font-size: 6.7vw;
    }
    @media (max-width: ${breakPoints.tablet}) {
        font-size: 7.7vw;
    }
`;

export default Logo;