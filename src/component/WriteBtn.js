import write from "../img/write.png";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Write = () => {
    const location = useLocation();
    const storage = localStorage.length

    if ( location.pathname === "/PostWrite"
        || location.pathname === "/Login"
    ) return null;

    const preEvent = e => {
        if ( storage !== 1 ) {
            alert("로그인 후 작성해주세요.");
            e.preventDefault();
        } 
    }

    return (
        <>
            <Link to="/PostWrite" onClick={preEvent}>
                <Img src={write} alt="write" />
            </Link>
        </>
    )
};

const Img = styled.img`
    width: 2.7vw;
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
`;

export default Write;