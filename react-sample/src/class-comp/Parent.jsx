import React from "react";
import Child from "./Child";

class Parent extends React.Component{
    constructor(){
        super()
        this.state = {
            parentAge:60,
            childAge:40
        }
    }

    changeAge = (age)=>{
        this.setState({parentAge:this.state.parentAge+age})
    }

    render(){
        console.log("parent render ")
        return(
            <div style={{border:'2px solid red', width:'600px',height:'500px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h4>parent age is {this.state.parentAge}</h4>
                <Child childAge={this.state.childAge} incrementAge={this.changeAge}/>
                <button onClick={this.changeAge}>increment age</button>
            </div>
        )
    }
}

export default Parent