import Child from "./Child"

const { useState, useCallback } = require("react")

function Parent(){
    console.log("parent loading")
    const [count,setCount] = useState(0)

    const greet = useCallback(()=>{
        console.log("hi good morning")
    },[count])

    // refential integrity
    const increment = ()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>parnt component</h1>
            <h1>count value is {count}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <Child count={count}/>

        </div>
    )
}

export default Parent
