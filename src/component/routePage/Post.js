import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { breakPoints } from "../../ease/media";

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
    }, [id]);

    
    const handleOnDelete = async() => {
        await axios.delete("http://localhost:4000/postDelete", {data: {_id: id}})
        .then(res => {
            navigate("/", {replace: true});
        })
    };

    return(
        <DivWrap>
            <H1>{post.title}</H1>
            <Div>
                <H6>작성자 : {post.writer}</H6>
                <Span>{post.date}</Span>
                <StyledLink to={`/PostEdit/${id}`}>
                    <Button $buttonStatus={buttonStatus}>수정</Button>
                </StyledLink>
                <StyledLink>
                    <Button $buttonStatus={buttonStatus} onClick={handleOnDelete}>삭제</Button>
                </StyledLink>
            </Div>
            <P>{post.content}</P>
            <ButtonDiv>
                <StyledLink to='/'><ListButton>목록</ListButton></StyledLink>
            </ButtonDiv>
        </DivWrap>
    )
};

const DivWrap = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media (max-width:${breakPoints.big}){
        width: 80%;
    }
    @media (max-width:${breakPoints.desktop}){
        width: 90%;
    }
`;

const H1 = styled.h1`
    margin-top: 1%;
    padding: 1% 1%;
    border-bottom: 3px solid violet;
    font-family: 'NEXON Lv1 Gothic Bold';
`;

const Div = styled.div`
    display: flex;
    padding: 2% 0;
    align-items: center;
`;

const H6 = styled.h6`
    font-size: 17px;
    padding-left: 1%;
    margin-right: 1.5%;
    font-family: 'NEXON Lv1 Gothic Bold';
`;

const Span = styled.span`
    font-size: 15px;
    font-family: 'NEXON Lv1 Gothic Regular';
`;

const P = styled.p`
    min-height: 500px;
    padding: 1%;
    width: 90%;
    border-top: 1px solid violet;
    border-bottom: 1px solid violet;
    font-family: 'NEXON Lv1 Gothic Regular';
    margin-bottom: 1.5%;
`;

const Button = styled.button`
    display: ${props => props.$buttonStatus};
    width: 55px;
    padding: 10% 0;
    border: none;
    box-shadow: 2px 2px 2px violet;
    border-radius: 5px;
    color: violet;
    cursor: pointer;
    background: rgb(253,245,254);
    font-family: 'NEXON Lv1 Gothic Bold';

    &:hover {
    background: rgb(254,240,250);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0 1%;
`;

const ButtonDiv = styled.div`
    width: 13%;
    margin: 1% auto;
`

const ListButton = styled.button`
    width: 100%;
    padding: 10% 0;
    font-family: 'NEXON Lv1 Gothic Bold';
    border: none;
    border-radius: 5px;
    background: rgb(253,245,254);
    box-shadow: 2px 2px 2px violet;
    cursor: pointer;
    color: violet;
    
    &:hover {
        background: rgb(254,240,250);
    }
`;

export default Post;