 import axios from "axios";
import React,{useEffect,useContext} from "react";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  let {cartItem,setCartItem}=useContext(CartContext)
  useEffect(()=>{
    axios.get(" http://localhost:8080/products").then((res)=>{
      console.log(res.data)
      setCartItem(res.data)
    }).catch(err=>{
      console.log(err.messsage)
    })
  },[])
  return <div>{/* Code here */}
    <h1>Products</h1>
   
      {cartItem.map((e)=>{
        return <>
        <ul>

          <li>
          {e.name}
          </li>
          <li> {e.description}</li>
        </ul>
        
        </>
      })}
  
  </div>;
};

export default Products;