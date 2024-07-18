 // uisng props drrriling

import { useContext } from "react"
import { AgeContext } from "../../App"

// function UserProfile(props){
//     return(
//         <div>
//             <h1>user profile</h1>
//             <h3>final age recieved from parent is : {props.userAge}</h3>
//         </div>
//     )
// }



// function User(props){
//     return(
//         <div>
//             <h1>user</h1>
//             <UserProfile userAge={props.userAge}/>
//         </div>
//     )
// }


// function Home(props){
//     return(
//         <div>
//             <h1>Home component</h1>
//             <p>user age is {props.userAge}</p>
//             <User userAge={props.userAge}/>
//         </div>
//     )
// }

// export default Home

///-------------------------------------using useContext ----------------------------




function UserProfile(){
    const age = useContext(AgeContext)
    return(
        <div>
            <h1>user profile</h1>
            <h3>final age recieved from parent is :{age}</h3>
        </div>
    )
}



function User(){
    const age = useContext(AgeContext)
    return(
        <div>
            <h1>user</h1>
            <p>age is {age}</p>
            <UserProfile/>
        </div>
    )
}


function Home(){
    const age = useContext(AgeContext)
    return(
        <div>
            <h1>Home component</h1>
            <p>user age is {age}</p>
            <User/>
        </div>
    )
}

export default Home