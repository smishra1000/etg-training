import React from "react";

class LifeCycle extends React.Component {

    constructor(prop){
        super();
        console.log("constructor calling")
        this.state = {
            name:"sameer mishra",
            age:20
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("regetDerivedStateFromPropsnder calling")
        // return {age:props.age}
    }

    componentDidMount(){
        // api call 
        console.log("componentDidMount calling")

    }

    changeAge = ()=>{
        console.log(this.state.age)
        this.setState({age:60})
    }

    shouldComponentUpdate(prevProps,prevState){
        console.log("should component update calling")
        if(this.state.age===prevState.age){
            return false
        }else{
            return true
        }
      
    }

    getSnapshotBeforeUpdate(props,state){
        console.log("get snapshot before update calling")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate calling")
    }
    render() {
        console.log("render calling")
        return (
            <div>
                <h1>LifeCycle methods</h1>
                <h4>name:{this.state.name}</h4>
                <h4>age is: {this.state.age}</h4>
                <button onClick={this.changeAge}>change age</button>
            </div>
        )
    }

    componentWillUnmount(){
        console.log("component is unmounting")
    }
}

export default LifeCycle