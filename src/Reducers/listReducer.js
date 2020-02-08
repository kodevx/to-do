let initState = {
    id:3,
    list: [ 
           { id:1, name: 'Jogging at 6AM' ,date:'12/04/2020' },
           { id:2, name: 'Assignment' ,date:'14/07/2020' }
   ]
}

const listReducer = (state =initState, action) =>{
    switch(action.type){
        case 'ADD_TASK' :{ 
            let task= { id:state.id+1,...action.data }
            let id=state.id+1;
            state =   {...state,
                       list: [...state.list,task],
                       id: id
                      }       
            break;    
        }
                        
        case 'DEL_TASK' :{ 
            console.log('DEL list action handler'); 
            let task = state.list.filter(list => list.id !== action.id);
            state = {
                ...state,
                list: task
            }
            break;
        }
    }     
    return state;
}


export default listReducer;