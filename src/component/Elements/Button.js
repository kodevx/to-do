import styled from 'styled-components';

const Button = styled.button`
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    border-width: 2.2px;
    border-color: white;
    border-radius: 25px 25px;
    border-style: solid;
    margin-left: 5px;
    background-color: ${ (props)=> props.color? props.color :'white'};    
    @media (max-width:563px) {
        border-width: 2px;
        border-color: ${ (props)=> props.color? props.color :'white'};;
        border-radius: 15px;
        font-size: 11px;
        padding: 1px 4px;   
    }
    &:hover{
        transition: 0.3s ease-in-out;
        border-color: ${ (props)=> props.color? props.color :'black'};
        color: ${ (props)=> props.color? props.color :'black'};
        background-color: white;
    }
`;


export default Button;