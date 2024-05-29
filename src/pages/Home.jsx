import { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import ProductCard from "../components/cards/ProductCard";


const Home = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <Banner />
            <div>
                <h2 className="text-4xl my-10 text-center text-yellow-700">Updated Collections</h2>
                <div className="grid grid-cols-4 gap-3">
                    {
                        products
                        ?.reverse()
                        ?.slice(0, 4)
                        ?.map(product => (<ProductCard key ={product?.id} product = {product}/>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;