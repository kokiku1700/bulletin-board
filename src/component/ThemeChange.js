import lightMode from "../img/lightMode.png";
import styled from "styled-components";

const ThemeChange = () => {

    return (
        <>
            <Img src={lightMode} alt="lightMode" />
        </>
    )
};

const Img = styled.img`
    position: fixed;
    bottom: 5%;
    right: 2.5%;
    width: 2.7vw;
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
`;

export default ThemeChange;