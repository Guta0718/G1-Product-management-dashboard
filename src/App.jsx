import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App(){
    const[products,setProducts]=useState([])

useEffect(()=>{  
    async function getProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();                
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();  
},[]);
    return(
        <>
        <Navbar />
        </>
    );
};

export default App