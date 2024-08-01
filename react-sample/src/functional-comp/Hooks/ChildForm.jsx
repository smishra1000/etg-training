import { forwardRef, useImperativeHandle, useRef, useState } from "react"

const ChildForm = forwardRef((props,ref)=>{
    const formRef = useRef(null)

    const [name,setName] = useState("")

    useImperativeHandle(ref,()=>({
        getNamefromChild:()=>name,
        getAgeFromChild:()=> 20
    }));

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }
    return(
        <div>
            <form ref={formRef}>
            <label>First name</label>
            <input type="text" value={name}  onChange={(e)=>handleNameChange(e)}/>
            </form>
            
        </div>
    )
})

export default ChildForm