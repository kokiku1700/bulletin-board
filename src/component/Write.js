import write from "../img/write.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Write = () => {

    return (
        <>
            <Link to="/PostWrite">
                <Img src={write} alt="write" />
            </Link>
        </>
    )
};

const Img = styled.img`
    position: fixed;
    bottom: 12.5%;
    right: 2.5%;
    width: 2.7vw;
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
`;

export default Write;