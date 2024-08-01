import { useRef } from "react"
import ForwardChild from "./ForwardChild"

function ForwardParent(){
    const inputRef = useRef(null)

    const focusMe = ()=>{
        console.log(inputRef)
        inputRef.current.focus();
    }
return(
    <div>
        <h4>Forward ref parent component</h4>
        <ForwardChild title="child componenet" ref={inputRef}/>
        <button onClick={()=>focusMe()}>click me</button>
    </div>
)
}

export default ForwardParent