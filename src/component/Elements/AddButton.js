import styled from 'styled-components';

const AddBtn = styled.button`
    color: white;
    font-size: 28px;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 40px;
    border: 4px solid black;
    background-color: #298A91;
    &:hover{
        color: #298A91; 
        background-color: white;
        border-color: black;
        transition: 0.4s ease-out;
    }
`;


export default AddBtn;