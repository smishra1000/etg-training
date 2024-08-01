import { Outlet,Link } from "react-router-dom"
import EmployeeList from "./EmployeeList"
import UserData from "./UserData"
import { useLocation } from "react-router-dom"

function Employee(){
    const location = useLocation()
    console.log(location)
    return(
        <div>
            <h3>employee componenet</h3>
            <Link to="/employee/list" element={<EmployeeList/>}>List</Link>
            <UserData name={"20"} age={20} address={{street:'hyd'}}/>
            <Outlet/>
        </div>
    )
}

export default Employee