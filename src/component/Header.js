import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "./Logo";
import { breakPoints } from "../ease/media";

const Header = () => {
    const location = useLocation();
    if ( location.pathname === "/Login" || 
        location.pathname === "/JoinMem" ) return null;

    return (
        <DivWrap>
            <Div $justifycontent="flex-start" width="70">
                <Logo />
            </Div>
            <Div $justifycontent="center" width="30">
                <StyledLink to='/Login' >로그인</StyledLink>
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

const StyledLink = styled(Link)`

    font-family: Arial;
    text-decoration: none;
    font-size: 1.2vw;
    margin: 0 5%;
    color: white;
    background: violet;
    padding: 3% 8%;
    border-radius: 5px;
    vertical-align: middle;

    @media (max-width: 1400px) {
        font-size: 2vw;
        padding: 3% 8%;
    }
    
    @media (max-width: ${breakPoints.largeDesktop}) {
        font-size: 2vw;
        padding: 3% 8%;
    }

    @media (max-width: ${breakPoints.tablet}) {
        font-size: 2.3vw;
        padding: 5% 12%;
    }
`;

export default Header;