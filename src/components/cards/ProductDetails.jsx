import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const products = useLoaderData()
    const{id}=useParams()
    const idInt = parseInt(id)
    const product = products.find(product => product.id == idInt);

    console.log(id, product);

    return (
        <div className="card w-2/3 bg-base-100 shadow-xl my-10">
        <figure className="h-full">
          <img src={product.img} alt="products" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <h3 className="text-xl font-semibold">{product.category}</h3>
          <h3 className="text-xl font-semibold">{product.price}</h3>
          <p>{product?.description}</p>
     
        </div>
      </div>
    );
};

export default ProductDetails;