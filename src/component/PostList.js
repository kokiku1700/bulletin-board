import { styled, keyframes } from "styled-components";
import "../fonts/fonts.css";

const PostList = ({ postList, idx }) => {
    const newDate = postList.date.split('. ').slice(0, 3).join('.');
    const nowDate = new Date().toLocaleString().split(". ");
    const postListDate = postList.date.split('. ').slice(0, 3);
    let newStatus = false;
    
    if ( nowDate[0] === postListDate[0] &&
        nowDate[1] === postListDate[1] &&
        nowDate[2] === postListDate[2] 
    ) {
        newStatus = true;
    }
    

    return(
        <Div>
            <Table>
                <Tbody>
                    <Tr>
                        <Td width="10%" >{idx}</Td>
                        <Td width="10%" >{postList.category}</Td>
                        <Td width="45%" >
                            <TdDiv>
                                <P>{postList.title}</P> 
                                <Span $display={newStatus ? "inline" : "none"}>new</Span>
                            </TdDiv>
                        </Td>
                        <Td width="20%" >{postList.writer}</Td>
                        <Td width="15%" >{newDate}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Div>
    )
};

const blink = keyframes`
    50% {
        opacity: 0;
    }
`;

const Div = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    padding: 1% 0;

    &:hover {
        background: #eee
    }
`;

const Table = styled.table`
    width: 100%;
    table-layout: fixed;
    
`;

const Tbody = styled.tbody`
    width: 100%;
`;

const Tr = styled.tr`
    width: 100%;

`;

const Td = styled.td`
    width: ${props => props.width};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'NEXON Lv1 Gothic Regular';

`;

const TdDiv = styled.div`
    display: flex;
    padding-left: 10%;
`

const P = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Span = styled.span`
    display: ${props => props.$display};
    color: violet;
    margin-left: 1%;
    font-family: 'NEXON Lv1 Gothic Bold';
    animation: ${blink} 3s infinite;
`

export default PostList;