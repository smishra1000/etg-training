import { useState } from "react"

function UseStateHookDemo(){
    const [name,setName] = useState("sameer mishra")
    const [age,setAge] = useState(10)
    const [salary,setSalary] = useState(1000)

    // manage complex--
    const [employee,setEmployee] = useState({name:"emp1",age:40,address:'hyd'})
    const [product,setProduct] = useState({name:"Iphone",price:'60000',rating:'5',category:'mobile'})

    const [users,setUsers] = useState([{name:"test1",email:'test1@gmail.com'},{name:"test2",email:'test2@gmail.com'}])

    console.log(useState("sameer mishra"))

    const changeName = ()=>{
        setName("sameer mishra updated name")
    }

    const changeProduct = ()=>{
        setProduct({...product,price:'70000'})
    }

    const addUsers = ()=>{
        setUsers([...users,{name:"test3",email:'test3@gmail.com'}])
    }
    return(
        <div>
            <h1>use state hook demo</h1>
            <h4>Name is {name}</h4>
            <h4>my age is : {age}</h4>
            <h4>my salary is {salary}</h4>

           
            <div style={{border:'2px solid red',padding:'5px',width:'400px'}}>
            <h5>Employee info</h5>
            <p>name:{employee.name}</p>
            <p>age:{employee.age}</p>
            <p>addres:{employee.address}</p>
            </div>
            <div style={{border:'2px solid red',padding:'5px',width:'400px'}}>
            <h5>Producut info</h5>
            {Object.keys(product).map((item)=>{
                return(
                    <div>
                        {item}  {product[item]}
                        </div>
                )
            })}
            {/* <p>name:{product.name}</p>
            <p>price:{product.price}</p>
            <p>catgory:{product.category}</p> */}
            </div>

            <div>
                <h5>users list</h5>
                {users.map((item)=>{
                    return(
                        <div style={{margin:'5px',padding:'10px',height:'40px',background:'#ddd',borderRadius:'10px'}}>
                            <p>{item.name} {item.email}</p>
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>changeName()}>change Name</button>

            <button onClick={()=>changeProduct()}>Change product</button>
            <button onClick={()=>addUsers()}>add users</button>
        </div>

    )
}

export default UseStateHookDemo
