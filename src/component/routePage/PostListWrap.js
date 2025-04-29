import { useEffect, useState } from "react";
import styled from "styled-components";
import PostList from "../PostList";
import { Link } from "react-router-dom";

const PostListWrap = ({ postList, num }) => {
    const [filterPostList, setFilterPostList] = useState([]);
    // 게시글을 최신순으로 보여주기 위해 배열을 뒤집는다.
    const list = postList.reverse();
    
    // 가져온 게시글 리스트를 10개 씩 자른다.
    useEffect(() => {
        setFilterPostList([...list.slice(num * 10, num * 10 + 10)]);
    }, [list, num]);

    return (
        <>
            {filterPostList.map((e, i) => (
                <StyledLink to={`/Post/${e._id}`} key={e._id}>
                    {/* 가장 나중에 작성된 게시글에 가장 높은 번호를 주기 위해 */}
                    <PostList postList={e} idx={list.length - (num * 10) - i}/>
                </StyledLink>
            ))}
        </>
    );
};

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export default PostListWrap;