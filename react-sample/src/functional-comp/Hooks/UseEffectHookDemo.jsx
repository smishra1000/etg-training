import { useState,useEffect, useLayoutEffect } from "react"
function UseEffectHookDemo(){
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(40)
    // 1st version of useeffect will call on each render/-- render menas in react on change of state

    useEffect(()=>{
        console.log("1st version of effect; will call in each render");
    })

    useLayoutEffect(()=>{
        console.log("i am use layout effect")
    },[])

    // 2nd version of useEffect will call on very first time--first render

    useEffect(()=>{
        console.log("2nd version of effect; will call in first render")

        // get products 
    },[])

    // 3rd version of useEffect will call on chnage of deps array 
    useEffect(()=>{
        console.log("3rd version of effect; will call in first render / on change of deps array value")
    },[count])

    const increment = ()=>{
        setCount(count+1)
    }

    const incrementAge = ()=>{
        setAge(age+1)
    }
    return(
        <div>
            <h1>Use effect hook demo</h1>
            <h4>count is {count}</h4>
            <button onClick={()=>increment()}>incremnet</button>
            <h4>age is {age}</h4>
            <button onClick={()=>incrementAge()}>increment age</button>
        </div>
    )
}

export default UseEffectHookDemo