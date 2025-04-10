import styled from "styled-components";
import LeftCategory from "../LeftCategory";
import axios from "axios";
import { useState } from "react";
import PostList from "../PostList";

const Main = ({ list }) => {
    const [postList, setPostList] = useState([]);

    axios.get("http://localhost:4000/list")
        .then(res => {
            setPostList([...res.data.board]);
        });

   
    return (
        <Div>
            <LeftCategory list={list} />
            <MainDiv>
                <Table>
                    <Thead>
                        <Tr>
                            <Th $width="6%" $borderRight="1px solid #ccc">번호</Th>
                            <Th $width="60%" $borderRight="1px solid #ccc">제목</Th>
                            <Th $width="22%" $borderRight="1px solid #ccc">작성자</Th>
                            <Th $width="12%" $borderRight="none">작성날짜</Th>
                        </Tr>
                    </Thead>
                </Table>
                {postList.map((e, i) => (
                    <PostList postList={e} idx={i} key={i} />
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
    width: 70%;
    margin: 0 2%;
`;

const Table = styled.table`
    width: 100%;
    padding: .5% 0;
    border-bottom: 1px solid #ccc;
`;

const Thead = styled.thead`
    width: 100%;
`;

const Tr = styled.tr`
    width: 100%;
`;

const Th = styled.th`
    width: ${props => props.$width};
`;

export default Main;