import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {addTask} from "../actions"
function Task(){
    const [taskName,setTaskName] = useState("")
    const taskData = useSelector((state)=>state.tasks)
    const dispatch = useDispatch();
    return(
        <div>
            <h4>task demo</h4>
            <input type="text" value={taskName} placeholder="enter task Name" onChange={(e)=>setTaskName(e.target.value)}/>
            <button onClick={()=>dispatch({type:"add_task",payload:{taskName}})}>add task</button>
                <h4>task list</h4>
            <ul>
                {taskData?.tasks.map((item)=>{
                    return(
                        <li>{item.taskName} <span onClick={()=>dispatch({type:"delete_task",payload:{taskName:item.taskName}})}>delete</span></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Task;