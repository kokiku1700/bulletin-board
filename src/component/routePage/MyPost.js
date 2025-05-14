import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { breakPoints } from "../../ease/media";

const MyPost = () => {
    const myNickName = localStorage.getItem(localStorage.key(0));
    const [myPostList, setMyPostList] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:4000/myPost', {params: {writer: myNickName}})
        .then(res => {
            setMyPostList([...res.data.post]);
        })
    },[]);

    return (
        <DivWrap>
           {myPostList.map((e, i) => (
            <StyledLink to={`/post/${e._id}`} key={i}>
                <Div>
                    <Span>{i + 1}</Span>
                    <Span><b>카테고리 : </b>{e.category}</Span>
                    <Span><b>제목 : </b>{e.title}</Span>
                    <Span><b>날짜 : </b>{e.date}</Span>
                </Div>
            </StyledLink>
           )).reverse()}
        </DivWrap>
    );
};

const DivWrap = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const Div = styled.div`
    width: 15%;
    display: inline-flex;
    flex-direction: column;
    padding: 1% 1%;
    margin: 1%;
    border: 1px solid violet;
    border-radius: 10px;
    box-shadow: 2px 2px 2px violet;

    &:hover {
        background: rgb(253,245,254);
        border: 1px solid rgb(253,245,254);
        box-shadow: -2px -2px 2px violet;
    }

    @media (max-width: ${breakPoints.big}) {
        width: 20%;
    }

    @media (max-width: ${breakPoints.largeDesktop}) {
        width: 28%;
    }

    @media (max-width: ${breakPoints.desktop}) {
        width: 45%;
    }
        
    @media (max-width: ${breakPoints.tablet}) {
        width: 100%;
    }

`;

const Span = styled.span`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1% 0;
`;

export default MyPost;