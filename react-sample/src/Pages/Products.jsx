import { useParams } from "react-router-dom"
function ProductsList(){
    const params = useParams();
    console.log(params.id)
    return(
        <div>
            <h3>products list componenet {params.id}</h3>
        </div>
    )
}

export default ProductsList