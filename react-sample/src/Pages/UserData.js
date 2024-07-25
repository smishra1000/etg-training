import PropTypes from "prop-types"


 function UserData({name,age,address}){
    return(
        <div>
            <h4>users data</h4>
        </div>
    )
}

export default UserData

UserData.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    address:PropTypes.shape({
        city:PropTypes.string
    })
}