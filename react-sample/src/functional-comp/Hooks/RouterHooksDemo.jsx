import { useNavigate,useHistory,useParams,useLocation } from "react-router-dom"
function RouterHooksDemo(){
    const navigate = useNavigate();
    const param = useParams();
    const location = useLocation();
    console.log(location)
    // const history = useHistory()
    const goToProdcuts = ()=>{
        // history.push("/employee")
           navigate("/employee",{state:{age:20}})
    }
    return(
        <div>
            <h1>router hooks demo</h1>
            <button onClick={()=>goToProdcuts()}>goto employee</button>
        </div>
    )
}

export default RouterHooksDemo