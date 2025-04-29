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
    width: 2.7vw;
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
`;

export default ThemeChange;