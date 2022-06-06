import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate()
  return <div>{/* Code here */}
  Home Page 
  <br />
  <button onClick={()=>{
    navigate("/products")
  }}>Products</button>
  <button onClick={()=>{
    navigate("/cart")
  }}>CartItems</button>
  </div>;
};

export default Home;
