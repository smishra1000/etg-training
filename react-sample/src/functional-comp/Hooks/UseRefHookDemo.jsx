import { useEffect, useRef } from "react"
function UseRefHookDemo() {

    const ref = useRef([]);

    console.log(ref)

    // useEffect(()=>{
    //     ref.current.focus();
    // })


    const save = () => {
        console.log(ref)
    }
    return (
        <div>
            <h4>Use Ref hook demo</h4>
            {["address", "city"].map((item, index) => {
                return (
                    <div>
                        <input type="text" ref={(item)=>ref.current[index]=item} /></div>
                )
            })}

            <button onClick={() => save()}>submit</button>
        </div>
    )
}

// if you stop rerender----useRef
// dom interaction using use ref 
// uncontrolled component ---use ref



export default UseRefHookDemo