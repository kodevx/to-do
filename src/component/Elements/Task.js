import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import { deleteTask } from '../../listActions/actions';
import Button from './Button';
import { connect } from 'react-redux';


const TaskWrap = styled(Wrapper)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-width: 3.5px;
    background-color : #F7D420;
    margin-bottom: 25px;
`;

const Text = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
    display: flex;
    justify-content: space-between;
`;

const Wrap = styled.div`
    display: flex;
    padding: 0px;
    justify-content: space-between;
`;

const Task = (props) => {
    console.log("Task Props: ",props);
    let { name,date,handleDel,id } = props;
    return ( 
         <TaskWrap>
            <Text>{name}</Text>
            <Text>{date}</Text>
            <Wrap> 
              <Button color={'#298A91'}>✔</Button>
              <Button color={'#F87433'} onClick={ ()=> { handleDel(id) } }>✘</Button>
            </Wrap>
         </TaskWrap>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDel: (id) => { dispatch(deleteTask(id)); }
    }
}


export default connect(null, mapDispatchToProps)(Task);





