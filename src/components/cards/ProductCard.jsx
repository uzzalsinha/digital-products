

const ProductCard = ({product}) => {
    return (
        <div>
            <div className="card w-84 bg-base-100 shadow-xl mx-5 mb-5">
  <figure className="h-48">
    <img src={product.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.name}</h2>
    <h2>{product.price}</h2>
    <p>{product?.description?.length>30 ? product?.description.slice(0,30) : product?.description}</p>
  
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;