import styled from "styled-components";
import LeftCategory from "../LeftCategory";
import axios from "axios";

const Main = ({ list }) => {
    let postList = [];

    axios.get("http://localhost:4000/list")
        .then(res => {
            postList = [...res.data.board];
        });

    const onClickEvent = () => {
        console.log(typeof(postList[0]));
    };
    
    return (
        <Div>
            <LeftCategory list={list} />
            <MainDiv onClick={onClickEvent}>
                {postList.map(e => (
                    <p>{e.title}</p>
                ))}
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

`;

export default Main;