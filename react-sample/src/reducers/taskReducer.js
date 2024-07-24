// actual data
const initialState = {
    tasks:[{taskName:"xyz task"}]
}
const taskReducer = (state=initialState,action)=>{

    console.log(action)
    // logic for all action
    switch(action.type){
        case "add_task":
            return {
                ...state,
                tasks:[...state.tasks,action.payload]
            }
        case "delete_task":
            return {
                ...state,
                tasks:state.tasks.filter((item)=>item.taskName!=action.payload.taskName)
            }    
        default:
            return state    
    }
}

export default taskReducer