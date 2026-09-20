import { Link } from "react-router-dom";

function Navbar({search,setSearch}){
    return(
        <div className="flex items-center">
        <div className="flex">
            <div className="mr-90 font-bold text-lg"> <Link to="/" className="hover:text-sky-700">PMS </Link> </div>
            <input 
            type="text" 
            placeholder="Search products..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-70 ml-50 border-1 border-black-500 rounded-sm placeholder:text-gray-500"
            />
        </div>

        <div className="flex gap-5 absolute right-7 ">
            <Link to="/" className="hover:text-sky-700"> Home</Link>
             <Link to="/products" className="hover:text-sky-700"> Products</Link>
            <Link to="/about" className="hover:text-sky-700"> About us</Link>
            <Link to="/contact" className="hover:text-sky-700"> Contact us</Link>
            <Link to="/login" className="hover:text-sky-700"> Log in</Link>
        </div>
        
        </div>

    );
}

export default Navbar;