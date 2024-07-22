import { useMemo, useState } from "react"

function UseMemoDemoHook(){
    const [name,setName] = useState("sameer mishra");
    const [count,setCount] = useState(0)

    const changeName = (e)=>{
        setName(e.target.value)
    }

    const transformname = useMemo(()=>{
        console.log("name transform function calling")
        return name.toUpperCase();
    },[count])
    return(
        <div>
            <h3>use memo hook demo</h3>
            <input type="text" value={name} onChange={(e)=>changeName(e)}/>
            <h4>my name is {name}</h4>
            <h5>Transformed name is {transformname}</h5>
            <button onClick={()=>setCount(count+1)}>increment</button>
            
        </div>
    )
}

export default UseMemoDemoHook