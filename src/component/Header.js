import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "./Logo";
import { breakPoints } from "../ease/media";
import people from "../img/people.png";
import MyControl from "./MyControl";
import { useEffect, useRef, useState } from "react";

const Header = ({ loginStatus }) => {
    const location = useLocation();
    const loginNickname = localStorage.getItem(localStorage.key(loginStatus - 1));
    const [toggleImg, setToggleImg] = useState(false);
    const htmlRef = useRef(null);
    
    useEffect(() => {
        function handleFocus(e) {
        	if (htmlRef.current && !htmlRef.current.contains(e.target)) {
                setToggleImg(false)
            };
        };
        document.addEventListener("click", handleFocus);
        return () => { document.removeEventListener("click", handleFocus); }
    }, [htmlRef]);
    
    if ( location.pathname === "/Login" || 
        location.pathname === "/JoinMem" ||
        location.pathname === "/IdSearch" ||
        location.pathname === "/PwSearch" ) return null;

    
    
    const handleOnToggle = () => {
        setToggleImg(!toggleImg);
    };
    
    

    return (
        <DivWrap>
            <Div $justifycontent="flex-start" width="70">
                <Logo />
            </Div>
            {
                loginStatus === 0 
                    ?
                    <Div $justifycontent="center" width="30">
                        <StyledLink to='/Login' >로그인</StyledLink>
                    </Div> 
                    :
                    <Div $justifycontent="center" width="30">
                        <p>{loginNickname}</p>
                        <Img ref={htmlRef} src={people} alt="imformation" onClick={handleOnToggle} />
                        {toggleImg ? <MyControl /> : null}
                    </Div>
            }
            
        </DivWrap>
    )


};

const DivWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #999;
`;
const Div = styled.div`
    width: ${props => props.width}%;
    display: flex;
    justify-content: ${props => props.$justifycontent};
    align-items: center;
`;

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

    @media (max-width: ${breakPoints.big}) {
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

const Img = styled.img`
    width: 2.5vw;
    cursor: pointer;
    margin: 0 3%;
`

export default Header;