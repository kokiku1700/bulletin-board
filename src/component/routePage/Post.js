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
                <H6>작성자 : {post.writer}</H6>
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
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const H1 = styled.h1`
    margin-top: 1%;
    padding: 1% 1%;
    border-bottom: 3px solid violet;
`;

const Div = styled.div`
    display: flex;
    padding: 1% 0;
`;

const H6 = styled.h6`
    font-size: 17px;
    padding-left: 1%;
`;

const P = styled.p`
    padding: 1%;
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