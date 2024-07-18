
import { useReducer } from "react"

const initialState = 0

// const employees = [
//     {

//     }
// ]

// const employeReducerr = (state=employees,action)=>{
//     switch(action){
//         case "add_employee":
//             return [...employees,{...action.paylod}]
//         case "chnage_Stats":
//             return state.employes.map((item)=>{
//                 if(item.id===action.paymeoad){
//                     return {...item,active:false}
//                 }else{
//                     return item
//                 }
//             })  
//     }
// }

const reducer = (state=initialState,action)=>{
    switch(action){
        case "add":
            return state+1
        case "subtract":
            return state-1;
            
        case "reset":
            return 0;
        default:
            return state;        
    }
}

function UseReducerHookDemo(){
const [count,dispatch] = useReducer(reducer,initialState)

const add = ()=>{
    dispatch("add")
}

const subtract = ()=>{
    dispatch("subtract")
}

const reset = ()=>{
    dispatch("reset")
}
    return(
        <div>
            <h1>use reducer hook demo</h1>
            <h4>count is {count}</h4>
            <button onClick={()=>add()}>Add</button>
            <button onClick={()=>subtract()}>Subtract</button>
            <button onClick={()=>reset()}>Reset</button>
        </div>
    )
}

export default UseReducerHookDemo

// to work with usereduceer hook ;; one reducer function which wil atke current sate and action