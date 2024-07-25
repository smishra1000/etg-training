
////common proble using this technique-- cart,language translation
import {useReducer,createContext, useContext} from "react";;

let CartContext = createContext();
const initialSrare=  {
    cart:[]
}
const cartReducer = (state,action)=>{
    if(action==="add_to_cart"){
        return {...state,item}
    }else if(action==="delete_item"){
        return {..satte,}
    }
}

export CartProvider = ({data}) =>{
    const [state,dispatch] = useReducer(cartReducer,[])

    return(
        <CartContext.Provider value={{state,dispatch}}>
        </CartContext.Provider>
    )
}

export const useCart = ()=>useContext(CartContext)


[state,dispatch]=useCart()

en.json
{
    login_button:"Login"
}

es.josn 

{
    login_button:""
}

<button>t{login_button'}</button>

