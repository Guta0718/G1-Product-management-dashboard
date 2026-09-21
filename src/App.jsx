import { useEffect, useState } from "react";
import { Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductCard from "./components/ProductCard";
import Home from "./pages/home";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
    </div>
  );
}

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
        <Home />
        </>
       
    );
};

export default App
