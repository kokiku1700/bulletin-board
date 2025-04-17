import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const loginWriter = localStorage.getItem(localStorage.key(0));
    const postWriter = post.writer;
    let buttonStatus = loginWriter === postWriter ? 'block' : 'none'; 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/postDetail", {params: {_id: id}})
        .then(res => {
            setPost(res.data.detail);
        });
    }, []);

    
    const handleOnDelete = async() => {
        await axios.delete("http://localhost:4000/postDelete", {data: {_id: id}})
        .then(res => {
            navigate("/");
        })
    };

    return(
        <DivWrap>
            <H1>{post.title}</H1>
            <Div>
                <H6>{post.writer}</H6>
                <H6>{post.date}</H6>
                <Button $buttonStatus={buttonStatus}>
                    <StyledLink to={`/PostEdit/${id}`}>수정</StyledLink>
                </Button>
                <Button $buttonStatus={buttonStatus} onClick={handleOnDelete}>
                    삭제
                </Button>
            </Div>
            <P>{post.content}</P>
        </DivWrap>
    )
};

const DivWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Div = styled.div`
    display: flex;
`;

const H1 = styled.h1`
    border-bottom: 3px solid violet;
`;

const H6 = styled.h6`

`;

const P = styled.p`
    padding: 2%;
    border: 1px solid violet;
`;

const Button = styled.button`
    display: ${props => props.$buttonStatus};
    width: 3%
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export default Post;