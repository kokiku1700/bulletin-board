import { useState } from "react";
import styled from "styled-components";


const LeftCategory = ({ list, setFilter }) => {
    const [bg, setBg] = useState("violet");

    const handleOnfilter = (e) => {
        setFilter(list[e.target.value]);

        if ( bg === "violet" ) {
            setBg("white");
        } else {
            setBg("violet");
        }
    };

    return (
        <Div>
            <Ul>
                {list.map((e, i) => (
                    <Li onClick={handleOnfilter} bg={bg} value={i} key={i}>{e}</Li>
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
`;

const Li = styled.li`
    margin: 2% 0;
    padding: 6% 0;
    cursor: pointer;
    list-style: none;
    text-align: center;
    background: ${props => props.bg};

    &:hover {
        color: violet;
    }
`;

export default LeftCategory;