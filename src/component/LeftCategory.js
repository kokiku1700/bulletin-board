
import styled from "styled-components";


const LeftCategory = ({ list, setFilter }) => {
    const handleOnfilter = (e) => {
        setFilter(list[e.target.value]);
    };

    return (
        <Div>
            <Ul>
                {list.map((e, i) => (
                    <Li onClick={handleOnfilter} value={i} key={i}>{e}</Li>
                ))}
            </Ul>

        </Div>
    );
};

const Div = styled.div`
    width: 8%;
    border-right: 1px solid #bbb;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
`

const Li = styled.li`
    margin: 10% 0;
    cursor: pointer;
    display: inline;

    &:hover {
        color: violet;
    }
`

export default LeftCategory;