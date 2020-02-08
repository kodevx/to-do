export const addTask = (task) =>{
    console.log('action called');
    return {
        type:'ADD_TASK',
        data: task
    }
}

export const deleteTask = (id) =>{
    return {
        type:'DEL_TASK',
        id
    }
}
