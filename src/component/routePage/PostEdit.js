import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostEdit = ({ list }) => {
    const {id} = useParams();
    const [write, setWrite] = useState({
        _id: 0,
        title: "",
        category: "",
        content: "",
        writer: localStorage.getItem(localStorage.key(0)),
        date: "",
    });
    const newDate = new Date();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:4000/postDetail", {params: {_id: id}})
        .then(res => {
            setWrite({
                ...write,
                _id: res.data.detail._id,
                title: res.data.detail.title,
                category: res.data.detail.category,
                content: res.data.detail.content,
            });
        });
    }, []);

    const handleOnChange = (e) => {
        setWrite({
            ...write,
            [e.target.name]: e.target.value
        });
    };

    const handleOnSubmit = async() => {
        if ( write.title !== ""
            && write.category !== ""
            && write.content !== "")
            write.date = newDate.toLocaleString();

            await axios.put("http://localhost:4000/postEdit", write)
            .then(res => {
                navigate("/", { replace: true });
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleOnCancel = () => {
        navigate(-1);
    };

    return(
        <Div>
            <DivWrap>
                <Wrap>
                    <Input name="title" type="text" value={write.title} onChange={handleOnChange} placeholder="제목을 입력해주세요." />
                </Wrap>
                <Wrap>
                    <Select name="category" onChange={handleOnChange} value={write.category}>
                        {list.map((e, i) => (
                            <Option value={e} key={i}>{e}</Option>
                        ))}
                    </Select>
                </Wrap>
                <Wrap>
                    <TextArea name="content" value={write.content} onChange={handleOnChange} cols="150" rows="30" placeholder="내용을 입력해주세요." />
                </Wrap>
                <Wrap $justifyContent="center">
                    <Button onClick={handleOnSubmit}>작성하기</Button>
                    <Button onClick={handleOnCancel}>취소</Button>
                </Wrap>
            </DivWrap>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const DivWrap = styled.div`
    width: 75%;
    height: 70vh;
    margin: 0 auto;
`;

const Wrap = styled.div`
    display: flex;
    padding: 1.8% 0;
    justify-content: ${props => props.$justifyContent};
`;

const Input = styled.input`
    border: none;
    width: 100%;
    padding: 1.5%;
    border-radius: 10px;
    font-size: 1.2vw;
    background: #eee;
    
    &:focus {
        outline: none;
    }
`;

const Select = styled.select`
    width: 20%;
    padding: 1% 0;
    font-size: .8vw;
    border-radius: 5px;
`;

const Option = styled.option`
    text-align: center;
    font-size: .8vw;
`;

const TextArea = styled.textarea`
    margin-top: 1%;
    padding: 1%;
    font-size: .8vw;
    resize: none;

    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    padding: 1.5% 2.5%;
    border: none;
    border-radius: 5px;
    margin: 1%;
    background: violet;
    color: white;
    font-size: .9vw;
    cursor: pointer;

    &:hover {
        background: #fc54e3;
    }
`;

export default PostEdit;