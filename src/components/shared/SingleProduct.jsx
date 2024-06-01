import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  const { id, name, price, category,  img } = product;

  return (
    <div className="card w-72 bg-base-100 shadow-xl mb-3">
      <figure className="h-48">
        <img src={img} alt="products" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-xl font-semibold">{category}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{product?.description?.length>30 ? product?.description.slice(0,30) : product?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/dashboard/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;