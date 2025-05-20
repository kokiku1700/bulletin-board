import styled from "styled-components";
import Logo from "../Logo";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { breakPoints } from "../../ease/media";

const IdSearch = () => {
    const [search, setSearch] = useState({
        name: "",
        id: "",
        email: ""
    });
    const [bool, setBool] = useState(false);

    const handleOnChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = async() => {
        await axios.post("http://localhost:4000/idSearch", {name: search.name, email: search.email})
        .then(res => {
            if ( res.data.id ) {
                setBool(true);
                setSearch({
                    ...search,
                    id: res.data.id
                });
            } else {
                setBool(false);
            };
        });
    };

    return (
        <Div>            
            <Logo />
            <InputDiv>
                {bool 
                    ? <>
                        <h1>{search.id}</h1>
                        <StyledLink to="/">홈</StyledLink>
                    </>
                    : <>
                        <InputWrap>
                            <Span>이름</Span>
                            <Input type="name" name="name" value={search.name} onChange={handleOnChange} />
                        </InputWrap>
                        <InputWrap>
                            <Span>이메일</Span>
                            <Input type="email" name="email" value={search.email} onChange={handleOnChange} />
                        </InputWrap>
                        <Button onClick={onSubmit}>확인</Button>
                    </> 
                }       
            </InputDiv>
        </Div>
    )
}

const Div = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;

    @media (max-width: ${breakPoints.largeDesktop}) {
        margin-top: 5%;
    }
    @media (max-width: ${breakPoints.desktop}) {
        margin-top: 12%;
    }
    @media (max-width: ${breakPoints.tablet}) {
        margin-top: 17%;
    }
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    margin: 0 auto;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 5%;
    border: 2px solid violet;

    @media (max-width: ${breakPoints.big}) {
            width: 45vw;
    }
    @media (max-width: ${breakPoints.largeDesktop}) {
        width: 50vw;
    }
    @media (max-width: ${breakPoints.desktop}) {
        width: 60vw;
    }
    @media (max-width: ${breakPoints.tablet}) {
        width: 70vw;
    }
    @media (max-width: ${breakPoints.mobile}) {
        width: 60vw;
    }
`

const InputWrap = styled.div`
    width: 70%;
    display: flex;
    justify-content: right;
    flex-direction: column;
`;

const Span = styled.span`
    margin-top: 6%;
    margin-left: 1.5%;
    font-family: 'NEXON Lv1 Gothic Regular';

    @media (max-width: ${breakPoints.big}) {
        margin-left: 10%;
    }
`;

const Input = styled.input`
    width: 20vw;
    border: none;
    border-bottom: 1px solid #aaa;
    width: 100%;
    margin: 3% auto;
    padding: 2% 1%;
    font-size: 1vw;
    font-family: 'NEXON Lv1 Gothic Regular';
    
    &:focus {
        outline: none;
        border-bottom: 2px solid violet;
    }

    @media (max-width: ${breakPoints.big}) {
        width: 25vw;
        font-size: 1.3vw;
    }
    @media (max-width: ${breakPoints.largeDesktop}) {
        width: 30vw;
        font-size: 1.5vw;
    }
    @media (max-width: ${breakPoints.desktop}) {
        width: 35vw;
        font-size: 1.8vw;
    }
    @media (max-width: ${breakPoints.tablet}) {
        width: 40vw;
        font-size: 2.1vw;
    }
`;

const Button = styled.button`
    width:20.5vw;
    margin-top: 5%;
    padding: 2.2% 6%;
    background: violet;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1vw;
    font-family: 'NEXON Lv1 Gothic Regular';

    &:hover {
        background: #FD65E9;
    }

    @media (max-width: ${breakPoints.big}) {
        width: 25.5vw;
        font-size: 1.3vw;
    }
    @media (max-width: ${breakPoints.largeDesktop}) {
        width: 30.5vw;
        font-size: 1.5vw;
    }
    @media (max-width: ${breakPoints.desktop}) {
        width: 35.5vw;
        font-size: 1.8vw;
    }
    @media (max-width: ${breakPoints.tablet}) {
        width: 40.5vw;
        font-size: 2.1vw;
    }
`;

const StyledLink = styled(Link)`
    width: 10.5vw;
    padding: 1.5% 7%;
    background: violet;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 1.2vw;
    text-decoration: none;
    margin-top: 10%;
    text-align: center;
    font-family: 'NEXON Lv1 Gothic Regular';

    &:hover {
        background: #FD65E9;
    }

    @media (max-width: ${breakPoints.big}) {
        width: 10.5vw;
        font-size: 1.3vw;
    }
    @media (max-width: ${breakPoints.largeDesktop}) {
        width: 14.5vw;
        font-size: 1.5vw;
    }
    @media (max-width: ${breakPoints.desktop}) {
        width: 18.5vw;
        font-size: 1.8vw;
    }
    @media (max-width: ${breakPoints.tablet}) {
        width: 20.5vw;
        font-size: 2.1vw;
    }
`;   
export default IdSearch;