import styled from "styled-components";

const PostList = ({ postList, idx }) => {

    return(
        <Div>
            <Table>
                <Tbody>
                    <Tr>
                        <Td width="6%" $borderRight="1px solid #ccc">{idx}</Td>
                        <Td width="60%" $borderRight="1px solid #ccc">{postList.title}</Td>
                        <Td width="22%" $borderRight="1px solid #ccc">{postList.writer}</Td>
                        <Td width="12%" $borderRight="none">{postList.date}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Div>
    )
};

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
`;

export default PostList;