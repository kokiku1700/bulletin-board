import styled from "styled-components";
import LeftCategory from "../LeftCategory";
import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../PostList";
import { Link } from "react-router-dom";
import { breakPoints } from "../../ease/media";

const Main = ({ list }) => {
    const [postList, setPostList] = useState([]);
    const [filter, setFilter] = useState("전체");

    useEffect(() => {
        if ( filter !== "전체" ) {
            axios.get("http://localhost:4000/listFilter", {params: {category: filter}})
            .then(res => {
                setPostList([...res.data.board]);
            });
        } else {
            axios.get("http://localhost:4000/list")
            .then(res => {
                setPostList([...res.data.board]);
            });
        }
    }, [filter]);

   
    return (
        <Div>
            <LeftCategory list={list} setFilter={setFilter} />
            <MainDiv>
                <Table>
                    <Thead>
                        <Tr>
                            <Th $width="10%" $borderRight="1px solid #ccc">번호</Th>
                            <Th $width="10%" $borderRight="1px solid #ccc">카테고리</Th>
                            <Th $width="45%" $borderRight="1px solid #ccc">제목</Th>
                            <Th $width="20%" $borderRight="1px solid #ccc">작성자</Th>
                            <Th $width="15%" $borderRight="none">작성날짜</Th>
                        </Tr>
                    </Thead>
                </Table>
                {postList.map((e, i) => (
                    <StyledLink to={`/Post/${e._id}`} key={e._id}>
                        <PostList postList={e} idx={i}/>
                    </StyledLink>
                )).reverse()} 
            </MainDiv>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    height: 100%;
    min-height: 600px;
    display: flex;

    @media ( max-width: ${breakPoints.desktop}) {
        display: block;
    }
`;

const MainDiv = styled.div`
    width: 70%;
    margin: 0 auto;
    
    @media ( max-width: ${breakPoints.desktop}) {
        width: 100%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
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