/* eslint-disable no-undef */

import { Link } from "react-router-dom";
import SingleProduct from "../shared/SingleProduct";
import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import ProductDetails from "../cards/ProductDetails";
// import  auth  from "../firebase/firebase.config";


// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div>
           <div className="flex gap-4 mx-96">
            <Link to={"/"} className="btn btn-primary text-center">
              Home
            </Link>
            <button className="btn btn-error text-center" onClick={handleLogout}>
              Logout
            </button>
          </div>
      <h1 className="my-5 text-2xl font-bold text-center">Our Products</h1>

      <div className="grid grid-cols-3 gap-2 px-6 justify-center items-center mt-3 ">
        {
          // eslint-disable-next-line react/prop-types
          data.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;