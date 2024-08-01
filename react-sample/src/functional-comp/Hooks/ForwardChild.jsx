import { forwardRef } from "react"

const ForwardChild =  forwardRef((props,ref)=>{

    console.log(props,ref)
    return(
        <div>
            <h1>forward child</h1>
            <h4>title is {props.title}</h4>
            <input ref={ref}/>
        </div>
    )
});

export default ForwardChild