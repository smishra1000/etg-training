function EventHandler(){
    const onKeyPress = (event)=>{
        console.log(event)

        if(event.keyCode===13){
            console.log("enter preseddd")
        }else{
            console.log("other key")
        }
    }
    return(
        <div>
            <h4>Event handler</h4>
            <input type="text" onMouseLeave={(e)=>onKeyPress(e)}/>
        </div>
    )
}

export default EventHandler