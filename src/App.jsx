import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Products from "./pages/products";
import Login from "./pages/login";
import About from "./pages/about";
import ProductDetails from "./pages/productDetails"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
