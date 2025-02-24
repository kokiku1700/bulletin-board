import styled from "styled-components";
import LeftCategory from "../LeftCategory";

const Main = () => {

    return (
        <Div>
            <LeftCategory />
            <MainDiv>
                
            </MainDiv>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    height: 100%;
    min-height: 600px;
    display: flex;
    
`;

const MainDiv = styled.div`
    width: 60%;
    margin: 0 2%;

`

export default Main;