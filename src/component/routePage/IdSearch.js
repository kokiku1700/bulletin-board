import styled from "styled-components";
import Logo from "../Logo";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #aaa;
    width: 100%;
    margin: 3% 0;
    padding: 2% 1%;
    font-size: 1vw;

    &:focus {
        outline: none;
        border-bottom: 2px solid violet;
    }
`;

const Button = styled.button`
    margin-top: 5%;
    padding: 2.2% 6%;
    background: violet;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
`;

const StyledLink = styled(Link)`
    padding: 1.5% 7%;
    background: violet;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 1.2vw;
    text-decoration: none;
    margin-top: 10%;
`;   
export default IdSearch;