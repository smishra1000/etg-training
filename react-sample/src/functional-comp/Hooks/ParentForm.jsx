import { useRef } from "react"
import ChildForm from "./ChildForm"

function ParentForm(){
    const formRef = useRef(null)

    const saveData = ()=>{
        console.log("i am save function")
        console.log()
    }
    return(
        <div>
            <h4>form handling uisng ref</h4>
            <ChildForm ref={formRef}/>
            <button onClick={saveData}>submit</button>
        </div>
    )
}

export default ParentForm
