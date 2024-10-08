import { Link } from "react-router-dom"
function Header() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', background: 'cyan', height: 'auto', alignItems: 'center' }}>
            <h1>my logo</h1>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', justifyContent: 'space-around', alignItems: 'center' }}>
                <Link to="products/:id"><li>Products</li></Link>
                <Link to="employee"><li>Employee</li></Link>
                <Link to="addcourse"><li>Course Management</li></Link>
                <Link to="paynow"><li>paynow</li></Link>
                <Link to="tasks"><li>Task</li></Link>
                <Link to="userefhook"><li>use ref</li></Link>
                <Link to="eventhandler"><li>Event Handler</li></Link>
                <Link to="forwardref"><li>Forward ref</li></Link>
                <Link to="forwardref2"><li>Forward ref2</li></Link>
                {/* <Link to="axiosdemo"><li>Axios demo</li></Link> */}
                <Link to="routerhooks/:id/:age"><li>Router Hooks</li></Link>
                <Link to="useEffect"><li>efect hook</li></Link>
                <Link to="autocomplete"><li>Auto Complete</li></Link>
            </ul>
        </div>
    )
}

export default Header