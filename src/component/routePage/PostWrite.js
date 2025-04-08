import styled from "styled-components";


const PostWrite = () => {

    return (
        <Div>
            <DivWrap>
                <Wrap>
                    <Input name="title" type="text" placeholder="제목을 입력해주세요." />
                </Wrap>
                <Wrap>
                    <Select>
                        <Option>안녕</Option>
                        <Option>안녕</Option>
                        <Option>안녕</Option>
                        <Option>안녕</Option>
                    </Select>
                </Wrap>
                <Wrap>
                    <TextArea cols="150" rows="30" placeholder="내용을 입력해주세요." />
                </Wrap>
                <Wrap $justifyContent="center">
                    <Button>작성하기</Button>
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
    padding: .5% 0;
`;

const Option = styled.option`
    text-align: center;
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
    margin-bottom: 1%;
    background: violet;
    color: white;
    font-size: .9vw;
    cursor: pointer;

    &:hover {
        background: #fc54e3;
    }
`;

export default PostWrite;