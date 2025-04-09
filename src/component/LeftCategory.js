import styled from "styled-components";


const LeftCategory = ({ list }) => {

    return (
        <Div>
            {list.map(e => (
                e
            ))}
        </Div>
    );
};

const Div = styled.div`
    width: 15%;
    border-right: 1px solid #bbb;
`

export default LeftCategory;