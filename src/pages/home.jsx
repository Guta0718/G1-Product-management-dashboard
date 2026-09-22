import { Link } from "react-router-dom"

function Home() {
    return(
        <div className="text-center p-50 mx-auto">
            <h1
                className="text-4xl font-bold shadow-sm mb-8">
                Find anything with fair prices!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 text-center mb-10">
                Explore our collections with fast shipping and delivery.
            </p>
            <Link 
                to="/products" 
                className="inline-block bg-black text-white font-bold px-6 py-2 text-center rounded-md hover:bg-sky-700">
                Look for products
            </Link>
        </div>
    )
}

export default Home;