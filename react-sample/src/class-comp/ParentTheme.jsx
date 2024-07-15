import React from "react";
import ChildTheme from "./ChildTheme";

class ParentTheme extends React.Component{
    constructor(props){
        super();
        this.state= {
            background:"red"
        }
    }

    updateColor = (color)=>{
        this.setState({background:color})
    }

    render(){
        return(
            <div  style={{width:'400px',height:'300px',border:'1px solid red'}}>
                <h1 style={{color:this.state.background}}>i am in  parent theme</h1>
                <ChildTheme changeColor={this.updateColor}/>
            </div>
        )
    }
}

export default ParentTheme