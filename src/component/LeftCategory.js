import { useState } from "react";
import styled from "styled-components";
import { breakPoints } from "../ease/media";

const LeftCategory = ({ list, setFilter }) => {
    const [colorNum, setColorNum] = useState(0);

    const handleOnfilter = (e) => {
        setFilter(list[e.target.value]);
        setColorNum(e.target.value);
    };

    return (
        <Div>
            <Ul>
                {list.map((e, i) => (
                    <Li onClick={handleOnfilter} 
                        color={colorNum === i ? "violet" : ""} 
                        $boxShadow={colorNum === i ? "2px 2px 8px violet" : ""}
                        value={i} 
                        key={i}>
                            {e}
                    </Li>
                ))}
            </Ul>

        </Div>
    );
};

const Div = styled.div`
    width: 8%;
    border-right: 1px solid #bbb;

    @media ( max-width: ${breakPoints.desktop}) {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #bbb;
    }
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 18px;

    @media ( max-width: ${breakPoints.desktop}) {
        flex-direction: row;
        justify-content: space-around;
        font-size: 16px;

    }
`;

const Li = styled.li`
    margin: 3% 0;
    padding: 7% 0;
    cursor: pointer;
    list-style: none;
    text-align: center;
    color: ${props => props.color};
    box-shadow: ${props => props.$boxShadow};
    border-radius: 5px;
    font-size: 20px;
    font-family: 'NEXON Lv1 Gothic Bold';

    @media ( max-width: ${breakPoints.desktop}) {
        margin: 1% 0;
        padding: 1% 5%;    
        
    }
`;

export default LeftCategory;