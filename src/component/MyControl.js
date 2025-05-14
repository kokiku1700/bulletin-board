import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const MyControl = ({ setLoginStatus }) => {
    const navigate = useNavigate();

    const handleOnClickLogout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
    }

    return (
        <Div>
            <Span><StyledLink to="PostWrite">글쓰기</StyledLink></Span>
            <Span><StyledLink to="My">내 정보</StyledLink></Span>
            <Span><StyledLink to="MyPost">내가 쓴 글</StyledLink></Span>
            <Span onClick={handleOnClickLogout}>로그아웃</Span>
        </Div>
    );
};

const Div = styled.div`
    width: 140px;
    position: absolute;
    top: 80%;
`;

const Span = styled.span`
    z-index: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 4% 0;
    cursor: pointer;
    background: white;
    color: violet;
    margin: 2% 0;
    border-radius: 5px;
    box-shadow: 2px 2px 2px violet;

    &:hover {
        background: pink;
        border: none;
    }
`;

const StyledLink = styled(Link)`
    color: violet;
    text-decoration: none;
`
export default MyControl;