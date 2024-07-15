import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }

    render(){
        return(
            <button style={{background:this.props.color,color:'#fff',padding:'5px'}}>{this.props.label}</button>
        )
    }
}

export default Button