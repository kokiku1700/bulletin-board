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
    const [arr, setArr] = useState([]);

    // 왼 쪽 카테고리 중 하나 클릭 시 
    // 해당 카테고리에 맞는 게시글 분류
    // 분류한 카테고리를 10개 씩 보여준다. 
    useEffect(() => {
        if ( filter !== "전체" ) {
            axios.get("http://localhost:4000/listFilter", {params: {category: filter}})
            .then(res => {
                setPostList([...res.data.board]);
                setListLength(Math.ceil(res.data.board.length / 10));                
                setNum(0);
            });
        } else {
            axios.get("http://localhost:4000/list")
            .then(res => {
                setPostList([...res.data.board]);
                setListLength(Math.ceil(res.data.board.length / 10)); 
                setNum(0);
            });
        }
        setArr(new Array(listLength).fill(0));
    }, [filter, listLength]);

    useEffect(() => {
        setArr(new Array(listLength).fill(0));
    }, [listLength]);

    const onClickNum = (e) => {
        setNum(e.target.value);
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
                    {arr.map((e, i) => (
                        <Button onClick={onClickNum}
                                key={i} 
                                value={i}
                                $boxShadow={Number(num) === i ? "3px 3px 2px violet inset" : "3px 3px 2px violet"}
                                $fontWeight={Number(num) === i ? "bold" : ""}
                                color={Number(num) === i ? "violet" : "violet"}
                                $background={Number(num) === i ? "rgb(253,245,254)" : "white"}
                                >
                                    {i + 1}
                        </Button>
                    ))}
                </ButtonWrap>
            </MainDiv>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    
    @media ( max-width: ${breakPoints.desktop}) {
        display: block;
    }
`;

const MainDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    height: 100%;
    min-height: 600px;    

    @media ( max-width: ${breakPoints.big}) {
        min-height: 520px;
    }

    @media ( max-width: ${breakPoints.largeDesktop}) {
        min-height: 490px;
    }

    @media ( max-width: ${breakPoints.desktop}) {
        width: 100%;
        min-height: 490px;
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
    left: 1%;
    bottom: -6%;
    width: 100%;
    display: flex;

    @media( max-width: ${breakPoints.desktop}) {
        left: 0;
        bottom: -8.5%;
        justify-content: center;
    }
    @media( max-width: ${breakPoints.big}) {
        left: 1%;
        bottom: -9%;
    }
`;

const Button = styled.button`
    margin: 0 .4%;
    padding: .5% .8%;
    border: none;
    background: ${props => props.$background};
    border-radius: 5px;
    color: ${props => props.color};
    cursor: pointer;
    box-shadow: ${props => props.$boxShadow};
    font-weight: ${props => props.$fontWeight};
    font-family: 'NEXON Lv1 Gothic Regular';

    @media( max-width: ${breakPoints.desktop}) {
        margin: 0 .7%;
        padding: .7% 1.2%;
    }
    @media( max-width: ${breakPoints.largeDesktop}) {
        margin: 0 .7%;
        padding: .8% 1.4%;
    }
    @media( max-width: ${breakPoints.big}) {
        margin: 0 .7%;
        padding: .7% 1.4%;
    }
`;

export default Main;