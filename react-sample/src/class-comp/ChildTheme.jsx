import React from "react";

class ChildTheme extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color:""
        }
    }

    onChangeColor = (e)=>{
        console.log(e)
        //this.setState({color:e.target.value})
        this.props.changeColor(e.target.value)
    }

    render(){
        return(
            <div>
                <h5>i am in  child theme</h5>
                <input type="text" onChange={this.onChangeColor}/>
                
            </div>
        )
    }
}

export default ChildTheme