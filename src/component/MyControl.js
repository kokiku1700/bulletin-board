import styled from "styled-components";
import { Link } from "react-router-dom";

const MyControl = ({ setLoginStatus }) => {

    const handleOnClickLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <Div>
            <Span><StyledLink to="My">내 정보</StyledLink></Span>
            <Span><StyledLink to="MyPost">내가 쓴 글</StyledLink></Span>
            <Span onClick={handleOnClickLogout}>로그아웃</Span>
        </Div>
    );
};

const Div = styled.div`
    width: 8%;
    position: absolute;
    top: 9%;
    right: 10.5%;
`;

const Span = styled.span`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3% 0;
    cursor: pointer;
    background: violet;
    color: white;
    margin: 2% 0;
    border-radius: 5px;

    &:hover {
        background: pink;
        border: none;
    }
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`
export default MyControl;