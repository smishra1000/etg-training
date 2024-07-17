const { useState, useEffect } = require("react");

function Employees() {
    const [employees, setEmployees] = useState([])

    const getUsers = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();
        setEmployees(users)
        console.log(users)

    }

    useEffect(() => {
        // this will call on very first render
        getUsers()
    }, [])

    return (
        <div>
            <h1>Employees management</h1>
            <div className="users-container">
                {employees.map((item) => {
                    return (
                        <div className="user">
                            <h4>name: {item.name}</h4>
                            <h4>email:{item.email}</h4>
                            <h4>webiste:{item.website}</h4>
                            <h4>username:{item.username}</h4>
                            <h4>id:{item.id}</h4>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Employees