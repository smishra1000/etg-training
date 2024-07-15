import React from "react";

class Child extends React.Component{
    constructor(props){
        console.log(props)
        super(props)
        // this.state = {
        //     childAge:20
        // }
    }

    changeParentAge = ()=>{
        this.props.incrementAge(10);
    }

    render(){
        console.log("child render ")
        return(
            <div style={{border:'2px solid green', width:'300px',height:'300px'}}>
                <h4>child age is {this.props.childAge}</h4>
                <button onClick={this.changeParentAge}>chnage parent age</button>
            </div>
        )
    }
}

export default Child