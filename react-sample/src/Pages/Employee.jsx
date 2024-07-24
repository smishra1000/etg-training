import { Outlet,Link } from "react-router-dom"
import EmployeeList from "./EmployeeList"

function Employee(){
    return(
        <div>
            <h3>employee componenet</h3>
            <Link to="/employee/list" element={<EmployeeList/>}>List</Link>
            <Outlet/>
        </div>
    )
}

export default Employee