import React from "react";

class Resume extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Sameer Mishra",
            email: "smishranitrr@gmail.com",
            phone: "8686478524",
            role: "Full stack developer",
            experience:[
                {
                    company:'ABC',
                    year:"4yr",
                    location:'HYD'
                },
                {
                    company:'XYZ',
                    year:"4yr",
                    location:'BLR'
                }
            ],
            address:{
                street:'12/3332',
                zip:'34444',
                dist:'Hyd'
            },
            employee:{
                name:"emp1",
                age:40,
                sal:1000
            }
        }



    }

    changeRole(){
        //console.log(this.state.role)
        // this.state.role="Product Manager"

        this.setState({role:"Product Manger"})
        //console.log(this.state.role)
    }

    changeName(){
       
        this.setState({name:"sameer mishra33"})
    }

    changeData(){
        let newData = {
            name:"sameer latest",
            role:"scrum master",
            phone:33333,
            address:{
                street:'54454554'
            }

        }

        this.setState({...newData})
    }

    render() {
        return (
            <div style={{ border: '2px solid grey', height: '600px', width: '700px' }}>
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignContent:'center'}}>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.email}</p>
                    <p>{this.state.phone}</p>
                    <p>{this.state.role}</p>
                </div>
                <div>
                    <ul style={{listStyle:'none'}}>
                        {this.state.experience.map((item)=>{
                            return(
                                <li style={{height:'40px',padding:'10px',background:'grey',margin:'5px'}}>{item.company} {item.year} {item.location}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h4> {this.state.address.street} {this.state.address.dist} {this.state.address.zip}</h4>
                </div>
                <button onClick={()=>this.changeRole()}>Update Role</button>
                <button onClick={()=>this.changeName()}>Update Name</button>
                <button onClick={()=>this.changeData()}>Update data</button>
                <h1>Emp info</h1>
                <h3>name: {this.state.employee.name}</h3>
            </div>

        )
    }
}
export default Resume