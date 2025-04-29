import styled from "styled-components";
import LeftCategory from "../LeftCategory";
import axios from "axios";
import { useEffect, useState } from "react";
import PostListWrap from "./PostListWrap";
import { breakPoints } from "../../ease/media";
import "../../fonts/fonts.css";

const Main = ({ list }) => {
    const [postList, setPostList] = useState([]);
    const [filter, setFilter] = useState("전체");
    const [listLength, setListLength] = useState(0);
    const [num, setNum] = useState(0);
    
    useEffect(() => {
        if ( filter !== "전체" ) {
            axios.get("http://localhost:4000/listFilter", {params: {category: filter}})
            .then(res => {
                setPostList([...res.data.board]);
                setListLength(Math.ceil(res.data.board.length / 10));                
            });
        } else {
            axios.get("http://localhost:4000/list")
            .then(res => {
                setPostList([...res.data.board]);
                setListLength(Math.ceil(res.data.board.length / 10)); 
            });
        }
    }, [filter]);

    const onClickNum = (e) => {
        setNum(e.target.value);
    };

    const listTenCount = () => {
        let result = [];

        for ( let i = 1; i <= listLength; i++ ) {
            result.push(
                <Button onClick={onClickNum}
                        key={i} 
                        value={i - 1}
                        $boxShadow="2px 2px 4px violet"
                        >
                            {i}
                </Button>
            );
        };

        return result;
    };


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
                <PostListWrap postList={postList} num={num} />
                <ButtonWrap>
                    {listTenCount()}
                </ButtonWrap>
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
    width: 80%;
    margin: 0 auto;
    position: relative;

    @media ( max-width: ${breakPoints.desktop}) {
        width: 100%;
    }
`;

const Table = styled.table`
    width: 100%;
    padding: 1% 0;
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
    font-family: 'NEXON Lv1 Gothic Bold';
`;

const ButtonWrap = styled.div`
    position: absolute;
    bottom: -5%;
    width: 100%;
    display: flex;
`;

const Button = styled.button`
    margin: 0 .4%;
    padding: .5% .8%;
    border: none;
    background: white;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    box-shadow: ${props => props.$boxShadow};
`;

export default Main;