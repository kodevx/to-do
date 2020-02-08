import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../listActions/actions';
import Wrapper from './Elements/Wrapper';
import ListWrapper from './Elements/ListWrapper';
import InputWrapper from './Elements/InputWrapper';
import Input from './Elements/Input';
import AddBtn from './Elements/AddButton';
import Title from './Elements/Title';
import Task from './Elements/Task';

class Home extends Component{
    
  state = {
    name: '',
    date: ''
  }
  

  handleInput(e,entity){
      console.log('handleInput function');
      this.setState({[entity]:e.target.value});
  }


  displayTask(list){
    console.log(list);
    return( list.map( task =>{ return(<Task key={task.id} name={task.name} date={task.date} id={task.id} />) }) );
  }


  render(){
     let { handleAdd, list } = this.props;
     console.log(this.state);
     return (
        <Wrapper>
         <Title>TO-DO's</Title>
         <ListWrapper>
            { list.length? this.displayTask(list): <Title>No Todo's</Title> }
         </ListWrapper>
         <InputWrapper>
           <Input placeholder='Enter the Task' onChange={ (e)=>this.handleInput(e,'name') } />
           <Input placeholder='Enter the Deadline' onChange={ (e)=>this.handleInput(e,'date') } />
           <AddBtn color={'#298A91'} onClick={ ()=>{ handleAdd(this.state)} }>+</AddBtn>  
         </InputWrapper>
        </Wrapper>
      );
  }
}
    
const mapStateToProps = (state) =>{
    return {
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        handleAdd: (task) =>{ dispatch(addTask(task)) }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);