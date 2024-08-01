import { useEffect, useState } from "react"
import axios from "axios"

function UsersWithAxios() {

    const [users, setUsers] = useState([])

    const getAllUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/usershhh").then(function (res) {
            console.log(res.data)
            setUsers(res.data)
        }).catch(function(err){
            alert("axios",err)
        })
    }
    const getAllUsersByFetch = () => {
        fetch("https://jsonplaceholder.typicode.com/usersgg",{method:"GET"}).then(function (res) {
            // console.log(res.status===404){
            //     alert("fetch")
            // }
           return res.json();
        }).then(function(data){
            setUsers(data)
        }).catch(function(err){
            alert("fetch",err)
        })
    }
    useEffect(() => {
        getAllUsers()
        getAllUsersByFetch();
    },[])

    return (
        <div>
            <h1>axios demo</h1>
            <ul>
                {users.length>0 && users.map((item)=>{
                    return(
                        <li>{item.username} {item.email}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UsersWithAxios