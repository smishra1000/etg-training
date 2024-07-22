import { memo } from "react"
function Child(props){
    console.log("child loading")
    return(
        <div>
            <h2>child component</h2>
        </div>
    )
}

export default memo(Child)

