import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                    <Span>{e.i}</Span>
                    <Span>{e.category}</Span>
                    <Span>{e.title}</Span>
                    <Span>{e.writer}</Span>
                    <Span>{e.date}</Span>
                </Div>
            </StyledLink>
 
           ))}
        </DivWrap>
    );
};

const DivWrap = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const Div = styled.div`
    padding: 1% 0;
`;

const Span = styled.span`

`;

export default MyPost;